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
    { id: "samey", name: "Samey", href: "/", blurb: "Find the word that means the same." },
    { id: "spinonym", name: "Spinonym", href: "/spinonym/", blurb: "Spin the wheel for today's kind of word." },
    { id: "dotty", name: "Dotty", href: "/dotty/", blurb: "Put the missing accents and punctuation back." },
    { id: "syntaxed", name: "Syntaxed", href: "/syntaxed/", blurb: "Grammar puzzles that make you giggle, not wince." },
    { id: "passe", name: "Passé", href: "/passe/", blurb: "Spot the real meaning of forgotten words." },
    { id: "natter", name: "Natter", href: "/natter/", blurb: "Real local word, or made up?" },
    { id: "roots", name: "Roots", href: "/roots/", blurb: "Where words come from, in four quick rounds.", isNew: true }
  ];
  var WORDS = ["", "", "", "", "four", "five", "six", "seven", "eight", "nine", "ten"];
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
      "\n" + (done.length === GAMES.length ? "All " + WORDS[GAMES.length] + " done 🏆" : done.length + " of " + GAMES.length + " done") + "\nYour go: https://samey.uk/ #sameyuk";
  }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function fillSet(box) {
    var s = readSet(), n = GAMES.filter(function (g) { return s.g[g.id]; }).length;
    box.textContent = "";
    var head = el("div", "sy-set-head");
    head.append(el("b", null, "Today's set"), el("span", null, n === GAMES.length ? "All " + WORDS[GAMES.length] + " done 🏆" : n + " of " + GAMES.length + " done"));
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
  /* ---------- Games bar (.sy-bar) and "Today's games" grid (.sy-grid) ----------
     Put <nav class="sy-bar" aria-label="Games"></nav> or <section class="sy-grid" id="games"></section> on a page and these fill them. */
  function tick(cls) {
    var ns = "http://www.w3.org/2000/svg", svg = document.createElementNS(ns, "svg"), path = document.createElementNS(ns, "path");
    svg.setAttribute("viewBox", "0 0 14 14"); svg.setAttribute("aria-hidden", "true"); svg.setAttribute("class", cls);
    path.setAttribute("d", "M2.5 7.5l3 3 6-7"); svg.append(path); return svg;
  }
  var scoreText = function (sc) { return (sc === "✓" || sc === "✗") ? "Done" : sc; };
  function fillBar(box) {
    var s = readSet(); box.textContent = "";
    GAMES.forEach(function (g) {
      var sc = s.g[g.id], cur = g.id === here, a = el("a", "sy-bchip" + (cur ? " here" : "") + (sc ? " done" : ""));
      a.href = g.href;
      if (cur) a.setAttribute("aria-current", "page");
      if (sc) a.append(tick("sy-tick"));
      a.append(el("span", null, g.name));
      if (g.isNew) a.append(el("span", "sy-newb", "New"));
      a.setAttribute("aria-label", g.name + (cur ? ", this game" : "") + (sc ? ", played today" : ""));
      box.append(a);
    });
    var cur = box.querySelector(".here");
    if (cur && box.scrollWidth > box.clientWidth && !box.dataset.scrolled) { box.dataset.scrolled = "1"; box.scrollLeft = Math.max(0, cur.offsetLeft - box.clientWidth / 2 + cur.offsetWidth / 2); }
  }
  function fillGrid(box) {
    var s = readSet(), n = GAMES.filter(function (g) { return s.g[g.id]; }).length;
    box.textContent = "";
    var head = el("div", "sy-ghead");
    head.append(el("h2", null, "Today's games"), el("span", null, n === GAMES.length ? "All " + WORDS[GAMES.length] + " played 🏆" : n + " of " + GAMES.length + " played"));
    var bar = el("div", "sy-gprog"), fillEl = el("span");
    bar.setAttribute("role", "img"); bar.setAttribute("aria-label", n + " of " + GAMES.length + " played");
    fillEl.style.width = (n / GAMES.length * 100) + "%"; bar.append(fillEl);
    var grid = el("div", "sy-gcards");
    GAMES.forEach(function (g) {
      var sc = s.g[g.id], cur = g.id === here, card = el("a", "sy-gcard" + (sc ? " done" : "") + (cur ? " here" : ""));
      card.href = g.href; if (cur) card.setAttribute("aria-current", "page");
      var top = el("span", "sy-gtop"); top.append(el("span", "sy-gname", g.name));
      if (g.isNew) top.append(el("span", "sy-newb", "New"));
      var st = el("span", "sy-gst");
      if (sc) { st.append(tick("sy-tick"), document.createTextNode(scoreText(sc))); }
      else st.textContent = cur ? "Playing now" : "Play →";
      card.append(top, el("span", "sy-gblurb", g.blurb), st);
      grid.append(card);
    });
    box.append(head, bar, grid);
  }
  var navStyled = false;
  function addNavStyle() {
    if (navStyled) return; navStyled = true;
    var T = "var(--teal,#1f7a6d)", TI = "var(--teal-ink,#fff)", S = "var(--surface,#fff)", L = "var(--line,#d5ddd8)", M = "var(--muted,#5e6b67)", I = "var(--ink,#1b2422)", A = "var(--amber,#d99a1e)", AI = "var(--amber-ink,#2a1d00)";
    var css =
      ".sy-bar{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;margin:-6px -16px 0;padding:4px 16px 14px;border-bottom:1px solid " + L + "}" +
      ".sy-bar::-webkit-scrollbar{display:none}" +
      ".sy-bchip{flex:0 0 auto;display:flex;align-items:center;gap:6px;min-height:40px;padding:0 14px;border-radius:999px;border:1.5px solid " + L + ";background:" + S + ";color:" + I + ";font-weight:700;font-size:.95rem;text-decoration:none;white-space:nowrap}" +
      "a.sy-bchip:hover{border-color:" + I + "}" +
      ".sy-bchip.here{background:" + T + ";border-color:" + T + ";color:" + TI + "}" +
      ".sy-tick{width:14px;height:14px;flex:none;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}" +
      ".sy-bchip.done:not(.here) .sy-tick{stroke:" + T + "}" +
      ".sy-newb{font-size:.62rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;background:" + A + ";color:" + AI + ";border-radius:6px;padding:2px 6px;line-height:1.3}" +
      ".sy-grid{display:flex;flex-direction:column;gap:12px}" +
      ".sy-ghead{display:flex;justify-content:space-between;align-items:baseline;gap:8px}" +
      ".sy-ghead h2{margin:0;font-family:var(--display,inherit);font-weight:800;font-size:1.6rem;letter-spacing:-.01em;color:" + I + "}" +
      ".sy-ghead span{font-weight:700;color:" + T + ";font-size:.95rem}" +
      ".sy-gprog{height:8px;border-radius:999px;background:" + L + ";overflow:hidden}" +
      ".sy-gprog span{display:block;height:100%;background:" + T + ";border-radius:999px;transition:width .4s}" +
      ".sy-gcards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}" +
      ".sy-gcard{display:flex;flex-direction:column;gap:6px;min-height:118px;padding:14px;border-radius:14px;border:1px solid " + L + ";background:" + S + ";color:" + I + ";text-decoration:none}" +
      ".sy-gcard:hover{border-color:" + I + "}" +
      ".sy-gcard.done{background:color-mix(in srgb," + T + " 10%," + S + ");border-color:color-mix(in srgb," + T + " 30%," + L + ")}" +
      ".sy-gcard.here{border:2px solid " + T + ";padding:13px}" +
      ".sy-gtop{display:flex;justify-content:space-between;align-items:center;gap:6px}" +
      ".sy-gname{font-family:var(--display,inherit);font-weight:800;font-size:1.15rem}" +
      ".sy-gblurb{flex:1 1 auto;font-size:.86rem;line-height:1.35;color:" + M + "}" +
      ".sy-gst{display:flex;align-items:center;gap:5px;font-size:.85rem;font-weight:700}" +
      ".sy-gcard.done .sy-gst{color:" + T + "}" +
      "@media (min-width:480px){.sy-gcards{grid-template-columns:repeat(3,minmax(0,1fr))}}" +
      "@media (prefers-reduced-motion:reduce){.sy-gprog span{transition:none}}";
    var st = document.createElement("style"); st.textContent = css; document.head.append(st);
  }
  function renderNav() {
    var bars = document.querySelectorAll(".sy-bar"), grids = document.querySelectorAll(".sy-grid");
    if (!bars.length && !grids.length) return;
    addNavStyle(); bars.forEach(fillBar); grids.forEach(fillGrid);
  }
  function renderSets() { document.querySelectorAll(".sy-set").forEach(fillSet); renderNav(); }
  var styled = false;
  function addStyle() {
    if (styled) return; styled = true;
    var css = ".sy-set{margin:20px 0 8px;padding:14px;border:1px solid rgba(127,127,127,.3);border-radius:14px;text-align:left;font-family:inherit}" +
      ".sy-set-head{display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin-bottom:10px;font-size:15px}" +
      ".sy-set-head span{opacity:.7;font-size:14px}" +
      ".sy-set-row{display:flex;flex-wrap:wrap;justify-content:center;gap:8px}.sy-set-row .sy-chip{flex:0 0 calc((100% - 16px)/3)}" +
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
    document.querySelectorAll(".xg:not([data-sy]), .roots-card:not([data-sy])").forEach(function (a) {
      a.setAttribute("data-sy", "");
      addStyle();
      var box = el("div", "sy-set");
      if (a.classList.contains("xg")) a.prepend(box); else a.parentNode.insertBefore(box, a);
      fillSet(box);
    });
  }

  new MutationObserver(function () { fill(); placeSets(); }).observe(document.documentElement, { childList: true, subtree: true });
  function init() { fill(); placeSets(); renderNav(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
