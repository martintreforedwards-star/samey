/* Shared by all the samey.uk games.
   Each game changes over at midnight on the player's own device (like Wordle).
   - Fills any element with a data-next attribute with a countdown, e.g. data-next="Next Dotty in {t}."
   - When the day changes: if the page is in the background it quietly loads the new puzzle when the player comes back;
     if they are looking at it, it offers a "new puzzle ready" bar rather than yanking them out of a game.
   Archive (?day=N) and preview (#test) pages are left alone. */
(function () {
  var dayKey = function (d) { return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); };
  var loaded = dayKey(new Date());
  var onToday = function () { return !new URLSearchParams(location.search).has("day") && location.hash !== "#test"; };
  var left = function () {
    var now = new Date(), mid = new Date(now); mid.setHours(24, 0, 0, 0);
    var m = Math.max(0, Math.ceil((mid - now) / 6e4));
    return Math.floor(m / 60) + "h " + (m % 60) + "m";
  };
  function fill() {
    var t = left();
    document.querySelectorAll("[data-next]").forEach(function (el) {
      var s = el.getAttribute("data-next").replace("{t}", t);
      if (el.textContent !== s) el.textContent = s;
    });
  }
  var offered = false;
  function offer() {
    if (offered) return; offered = true;
    var bar = document.createElement("div");
    bar.setAttribute("role", "status");
    bar.style.cssText = "position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:9999;display:flex;gap:12px;align-items:center;" +
      "max-width:calc(100% - 32px);box-sizing:border-box;padding:10px 12px 10px 16px;border-radius:12px;background:#17203A;color:#fff;" +
      "font:600 15px/1.3 system-ui,-apple-system,Segoe UI,sans-serif;box-shadow:0 6px 20px rgba(0,0,0,.25)";
    var msg = document.createElement("span"); msg.textContent = "A new puzzle is ready.";
    var btn = document.createElement("button"); btn.type = "button"; btn.textContent = "Play it";
    btn.style.cssText = "border:0;border-radius:8px;padding:8px 14px;background:#fff;color:#17203A;font:inherit;cursor:pointer";
    btn.onclick = function () { location.reload(); };
    bar.append(msg, btn); document.body.append(bar);
  }
  var stale = function () { return dayKey(new Date()) !== loaded && onToday(); };
  function check() { if (stale() && !document.hidden) offer(); fill(); }
  // Coming back to a tab or app left open overnight: just load today's puzzle.
  function back() { if (document.hidden) return; if (stale()) location.reload(); else fill(); }
  setInterval(check, 30000);
  document.addEventListener("visibilitychange", back);
  addEventListener("pageshow", function (e) { if (e.persisted) back(); });

  /* ---------- Today's set: which of the games you've played today, and one share for all of them ----------
     Each game reports a finished daily puzzle with
       (window.SameySetQ = window.SameySetQ || []).push(["dotty", "2/4"]);
     (a queue, because the games run before this file loads). */
  var GAMES = [
    { id: "samey", name: "Samey", href: "/" },
    { id: "spinonym", name: "Spinonym", href: "/spinonym/" },
    { id: "dotty", name: "Dotty", href: "/dotty/" },
    { id: "syntaxed", name: "Syntaxed", href: "/syntaxed/" },
    { id: "passe", name: "Passé", href: "/passe/" },
    { id: "natter", name: "Natter", href: "/natter/" }
  ];
  var here = (location.pathname.split("/")[1] || "samey").toLowerCase();
  var SET_KEY = "samey-set";
  function getJSON(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function readSet() {
    var today = dayKey(new Date()), s = getJSON(SET_KEY);
    if (!s || s.day !== today) s = { day: today, g: {} };
    // Games finished before this was added (or before a score was reported) still count, just without a score.
    ["samey", "spinonym", "dotty"].forEach(function (id) {
      var st = getJSON(id + "-stats");
      if (!s.g[id] && st && st.lastPlayed === today) s.g[id] = st.lastWon === today ? "✓" : "✗";
    });
    var d = new Date(), pad = function (n) { return String(n).padStart(2, "0"); };
    var iso = d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
    ["syntaxed", "passe"].forEach(function (id) {
      var r = getJSON(id + "-" + iso);
      if (!s.g[id] && Array.isArray(r) && r.length) s.g[id] = r.filter(Boolean).length + "/" + r.length;
    });
    return s;
  }
  function report(id, score) {
    var s = readSet(); s.g[id] = String(score);
    try { localStorage.setItem(SET_KEY, JSON.stringify(s)); } catch (e) {}
    renderSets();
  }
  var q = window.SameySetQ || [];
  window.SameySetQ = { push: function (a) { report(a[0], a[1]); } };
  q.forEach(function (a) { report(a[0], a[1]); });

  function shareText(s) {
    var done = GAMES.filter(function (g) { return s.g[g.id]; });
    var date = new Date().toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
    return "My samey.uk set · " + date + "\n" +
      done.map(function (g) { return g.name + " " + s.g[g.id]; }).join("\n") +
      "\n" + (done.length === GAMES.length ? "All six done 🏆" : done.length + " of " + GAMES.length + " done") + "\nhttps://samey.uk";
  }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function fillSet(box) {
    var s = readSet(), n = GAMES.filter(function (g) { return s.g[g.id]; }).length;
    box.textContent = "";
    var head = el("div", "sy-set-head");
    head.append(el("b", null, "Today's set"), el("span", null, n === GAMES.length ? "All six done 🏆" : n + " of " + GAMES.length + " done"));
    var row = el("div", "sy-set-row");
    GAMES.forEach(function (g) {
      var sc = s.g[g.id], chip = el(g.id === here ? "span" : "a", "sy-chip" + (sc ? " done" : "") + (g.id === here ? " here" : ""));
      if (g.id === here) chip.setAttribute("aria-current", "page"); else chip.href = g.href;
      chip.append(el("span", "sy-chip-name", g.name), el("span", "sy-chip-score", !sc ? "Play" : (sc === "✓" || sc === "✗") ? "Done" : sc));
      chip.setAttribute("aria-label", g.name + (sc ? ", done, " + sc : ", not played yet"));
      row.append(chip);
    });
    box.append(head, row);
    if (n >= 2) {
      var btn = el("button", "sy-set-share", "Share today's set");
      btn.type = "button";
      btn.onclick = function () {
        var text = shareText(readSet());
        if (navigator.share) { navigator.share({ text: text }).catch(function () {}); return; }
        try { navigator.clipboard.writeText(text).then(function () { btn.textContent = "Copied"; }); } catch (e) {}
      };
      box.append(btn);
    }
  }
  function renderSets() { document.querySelectorAll(".sy-set").forEach(fillSet); }
  var styled = false;
  function addStyle() {
    if (styled) return; styled = true;
    var css = ".sy-set{margin:20px 0 8px;padding:14px;border:1px solid rgba(127,127,127,.3);border-radius:14px;text-align:left;font-family:inherit}" +
      ".sy-set-head{display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin-bottom:10px;font-size:15px}" +
      ".sy-set-head span{opacity:.7;font-size:14px}" +
      ".sy-set-row{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}" +
      ".sy-chip{display:flex;flex-direction:column;align-items:center;gap:2px;padding:8px 4px;border-radius:10px;border:1px solid rgba(127,127,127,.35);color:inherit;text-decoration:none;font-size:14px;line-height:1.2;min-width:0}" +
      ".sy-chip-name{font-weight:700;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}" +
      ".sy-chip-score{font-size:13px;opacity:.75}" +
      ".sy-chip.done{background:#1f7a6d;border-color:#1f7a6d;color:#fff}.sy-chip.done .sy-chip-score{opacity:.95}" +
      ".sy-chip.done .sy-chip-score::before{content:'✓ '}" +
      ".sy-chip.here{outline:2px solid currentColor;outline-offset:1px}.sy-chip.done.here{outline-color:#1f7a6d}" +
      "a.sy-chip:not(.done):hover{border-color:currentColor}" +
      ".sy-set-share{display:block;width:100%;margin-top:10px;padding:10px;border-radius:10px;border:0;background:#1f7a6d;color:#fff;font:inherit;font-weight:700;cursor:pointer}" +
      "";
    var st = document.createElement("style"); st.textContent = css; document.head.append(st);
  }
  // Shown on each game's result screen, just above the "Fancy another?" cards.
  function placeSets() {
    if (!onToday()) return;
    document.querySelectorAll(".xg:not([data-sy]), .spn-card:not([data-sy])").forEach(function (a) {
      a.setAttribute("data-sy", "");
      addStyle();
      var box = el("div", "sy-set");
      if (a.classList.contains("xg")) a.prepend(box); else a.parentNode.insertBefore(box, a);
      fillSet(box);
    });
  }

  new MutationObserver(function () { fill(); placeSets(); }).observe(document.documentElement, { childList: true, subtree: true });
  function init() { fill(); placeSets(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
