/* Shared by all the samey.uk games.
   Each game changes over at midnight on the player's own device (like Wordle).
   - Fills any element with a data-next attribute with a countdown, e.g. data-next="Next Dotty in {t}."
   - When the day changes: if the page is in the background it quietly loads the new puzzle when the player comes back;
     if they are looking at it, it offers a "new puzzle ready" bar rather than yanking them out of a game.
   Archive (?day=N) and preview (#test) pages are left alone. */
(function () {
  // Lets players install the games as an app and keep playing with a poor signal (see /sw.js).
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () { navigator.serviceWorker.register("/sw.js").catch(function () {}); });
  }
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
    { id: "samey", name: "Samey", href: "/", c: "#1f7a6d", blurb: "Find the word that means the same.", wlv: "samey" },
    { id: "spinonym", name: "Spinonym", href: "/spinonym/", c: "#d99a1e", blurb: "Spin the wheel for today's kind of word.", wlv: "spinonym" },
    { id: "dotty", name: "Dotty", href: "/dotty/", c: "#E2405A", blurb: "Put the missing accents and punctuation back.", wlv: "dotty" },
    { id: "syntaxed", name: "Syntaxed", href: "/syntaxed/", c: "#3B5BDB", blurb: "Grammar puzzles that make you giggle, not wince.", wlv: "syntaxed" },
    { id: "passe", name: "Passé", href: "/passe/", c: "#7B3F73", blurb: "Spot the real meaning of forgotten words.", wlv: "passe" },
    { id: "natter", name: "Natter", href: "/natter/", c: "#B0186A", blurb: "Real local word, or made up?", wlv: "natter" },
    { id: "roots", name: "Roots", href: "/roots/", c: "#8A5A2B", blurb: "Where words come from, in four quick rounds.", wlv: "roots" },
    { id: "rizz", name: "Rizz", href: "/rizz/", c: "#2b8a3e", blurb: "The newest words in English, in five quick rounds.", wlv: "rizz" },
    { id: "babel", name: "Babel", href: "/babel/", c: "#c2410c", blurb: "One word in four mystery languages. What is it in English?", wlv: "babel-2" },
    { id: "rhymey", name: "Rhymey", href: "/rhymey/", c: "#0b7285", blurb: "Rhyme and rhythm in quick daily rounds.", wlv: "rhymey" },
    { id: "phoney", name: "Phoney", href: "/phoney/", c: "#6741d9", blurb: "How words really sound, from silent letters to glottal stops.", wlv: "phoney" },
    { id: "idiomy", name: "Idiomy", href: "/idiomy/", c: "#b45309", blurb: "Tap words together to make idioms from today's hive.", wlv: "idiomy" },
    { id: "incipit", name: "Incipit", href: "/incipit/", c: "#8c2f1b", blurb: "Name the book from its famous first line.", wlv: "incipit" },
    { id: "versed", name: "Versed", href: "/versed/", c: "#21585a", blurb: "Name the poet from a single line, then guess their country.", wlv: "versed" },
    { id: "gamey", name: "Gamey", href: "/gamey/", c: "#1d4e89", blurb: "Words from sports, games and pastimes around the world." },
    { id: "dodo", name: "Dodo", href: "/dodo/", c: "#2f5d62", blurb: "Words on their way out. Can you save them?", isNew: true },
    { id: "inkling", name: "Inkling", href: "/inkling/", c: "#3b3486", blurb: "Words first coined in novels, plays and science fiction.", isNew: true },
    { id: "forsooth", name: "Forsooth", href: "/forsooth/", c: "#7a1f3d", blurb: "Shakespeare, Chaucer and their rivals, plus a red herring.", isNew: true },
    { id: "gaggle", name: "Gaggle", href: "/gaggle/", c: "#2f6b3f", blurb: "Collective nouns, then the names for things: tarns, tombolos and more.", isNew: true, wlv: "gaggle" },
    { id: "fixy", name: "Antepostee", href: "/fixy/", c: "#5b3c96", blurb: "Prefixes and suffixes. Illegal or unlegal? Is gruntled a word?", isNew: true },
    { id: "mispelt", name: "Mispelt", href: "/mispelt/", c: "#1d2a44", blurb: "Why is there a b in debt? The stories behind odd spellings.", isNew: true },
    { id: "mither", name: "Mither", href: "/mither/", c: "#46607a", blurb: "Welsh, Gaelic, Manx, Cornish, Scots, Polari: the tongues of these islands.", isNew: true },
    { id: "doornail", name: "Doornail", href: "/doornail/", c: "#8a3d63", blurb: "Similes and metaphors. We'll burn that bridge when we come to it.", isNew: true }
  ];
  /* Themes for the "Today's games" grid on the home page. Every game in GAMES should be in exactly one group;
     anything left out lands in a final "More games" group so it never disappears. */
  var GROUPS = [
    { name: "Meanings", note: "Synonyms, lost words and local words", ids: ["samey", "spinonym", "passe", "natter", "gaggle", "gamey"] },
    { name: "Word histories", note: "Where words come from, and where they're going", ids: ["roots", "rizz", "dodo", "inkling", "babel", "mither"] },
    { name: "Spelling, sound and grammar", note: "The nuts and bolts", ids: ["dotty", "syntaxed", "mispelt", "fixy", "phoney", "rhymey"] },
    { name: "Books, poems and phrases", note: "Literature and figures of speech", ids: ["incipit", "versed", "forsooth", "idiomy", "doornail"] }
  ];
  var WORDS = ["", "", "", "", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty"];
  var here = (location.pathname.split("/")[1] || "samey").toLowerCase();
  var SET_KEY = "samey-set";
  /* Wordleverse players: Wordleverse links here with ?utm_source=wordleverse.net (and sends a referrer).
     Remember that for 60 days, so those players see a small "rate it on Wordleverse" line on result screens.
     Ratings there only count for signed-in players, which is why it only goes to people who came from there.
     A game gets the line once its Wordleverse listing is live: add its page slug as wlv in GAMES above. */
  var WLV_KEY = "sy-wlv", WLV_DONE = "sy-wlv-rated";
  try {
    var src = (new URLSearchParams(location.search).get("utm_source") || "") + " " + (document.referrer || "");
    if (/wordleverse/i.test(src)) localStorage.setItem(WLV_KEY, String(Date.now()));
  } catch (e) {}
  function fromWordleverse() {
    try { return Date.now() - (+localStorage.getItem(WLV_KEY) || 0) < 60 * 864e5; } catch (e) { return false; }
  }
  function ratedHere() { var r = getJSON(WLV_DONE); return !!(r && r[here]); }
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
    ["syntaxed", "passe", "rizz", "rhymey", "phoney"].forEach(function (id) {
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
  // Scores a game reported before this file loaded (e.g. a finished game reopened) are replayed at the end of this file,
  // once everything they draw with is set up.

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
    // Tip-jar line on the result screen, unless the game already shows its own (Samey, Spinonym, Dotty).
    if (!document.querySelector("a[href*='ko-fi.com']")) {
      var tip = el("p", "sy-coffee", "All the games are free and ad-free, made by one librarian in Canterbury. Enjoyed today's? ");
      var k = el("a", null, "☕ Buy me a coffee");
      k.href = "https://ko-fi.com/playtheroute"; k.target = "_blank"; k.rel = "noopener";
      tip.append(k); box.append(tip);
    }
    // "Rate it on Wordleverse", only for players who came from there, and gone once they've tapped it for this game.
    var game = GAMES.filter(function (g) { return g.id === here; })[0];
    if (game && game.wlv && fromWordleverse() && !ratedHere()) {
      var rate = el("p", "sy-wlv");
      rate.append(el("b", null, "Found us on Wordleverse? "), "A quick rating helps other players find " + game.name + ". Sign in there to make it count. ");
      var ra = el("a", null, "⭐ Rate it");
      ra.href = "https://wordleverse.net/games/" + game.wlv; ra.target = "_blank"; ra.rel = "noopener";
      ra.onclick = function () {
        var r = getJSON(WLV_DONE) || {}; r[here] = Date.now();
        try { localStorage.setItem(WLV_DONE, JSON.stringify(r)); } catch (e) {}
        setTimeout(function () { document.querySelectorAll(".sy-wlv").forEach(function (n) { n.remove(); }); }, 300);
      };
      rate.append(ra); box.append(rate);
    }
  }
  /* ---------- Games bar (.sy-bar) and "Today's games" grid (.sy-grid) ----------
     Put <nav class="sy-bar" aria-label="Games"></nav> or <section class="sy-grid" id="games"></section> on a page and these fill them. */
  function tick(cls) {
    var ns = "http://www.w3.org/2000/svg", svg = document.createElementNS(ns, "svg"), path = document.createElementNS(ns, "path");
    svg.setAttribute("viewBox", "0 0 14 14"); svg.setAttribute("aria-hidden", "true"); svg.setAttribute("class", cls);
    path.setAttribute("d", "M2.5 7.5l3 3 6-7"); svg.append(path); return svg;
  }
  function scoreText(sc) { return (sc === "✓" || sc === "✗") ? "Done" : sc; }
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
    addMeta(box);
  }
  /* Feedback / Support links, a slim row just under the games bar. Added once per bar. */
  function icon(d) {
    var ns = "http://www.w3.org/2000/svg", svg = document.createElementNS(ns, "svg"), path = document.createElementNS(ns, "path");
    svg.setAttribute("viewBox", "0 0 24 24"); svg.setAttribute("aria-hidden", "true");
    path.setAttribute("d", d); svg.append(path); return svg;
  }
  function addMeta(box) {
    var nx = box.nextElementSibling;
    if (nx && nx.classList.contains("sy-meta")) return;
    if (document.querySelector(".navlinks a[href^='/support/']")) return; // page has its own Feedback / Support us menu (Dotty, Spinonym)
    var row = el("div", "sy-meta"), g = encodeURIComponent(here);
    var fb = el("a"); fb.href = "/feedback/?game=" + g;
    fb.append(icon("M4 5h16v11H9l-5 4z"), el("span", null, "Feedback"));
    var sp = el("a", "sy-support"); sp.href = "/support/?game=" + g;
    sp.append(icon("M12 20s-7-4.4-9.2-8.6A4.8 4.8 0 0 1 12 6.6a4.8 4.8 0 0 1 9.2 4.8C19 15.6 12 20 12 20z"), el("span", null, "Support the games"));
    row.append(fb, sp);
    box.parentNode.insertBefore(row, box.nextSibling);
  }
  /* "New here? Start with these three": a small starter route above the full grid, so 21 games isn't daunting.
     Shown until the player has finished all three starters on one day, or taps "Show me everything". */
  var STARTERS = ["samey", "spinonym", "roots"], STARTER_KEY = "samey-starter-done";
  function starterBox(s) {
    var gone; try { gone = localStorage.getItem(STARTER_KEY); } catch (e) {}
    var picks = STARTERS.map(function (id) { return GAMES.filter(function (g) { return g.id === id; })[0]; }).filter(Boolean);
    var played = picks.filter(function (g) { return s.g[g.id]; }).length, allDone = played === picks.length;
    // Finishing all three hides the strip from tomorrow; today it stays up to say well done.
    if (allDone && !gone) { gone = s.day + "*"; try { localStorage.setItem(STARTER_KEY, gone); } catch (e) {} }
    if (gone && gone !== s.day + "*") return null;
    var box = el("div", "sy-start"), head = el("div", "sy-shead");
    head.append(el("h2", null, allDone ? "Starter set done 🎉" : "New here? Start with these three"));
    var skip = el("button", "sy-sskip", allDone ? "Hide" : "Show me everything");
    skip.type = "button";
    skip.onclick = function () { try { localStorage.setItem(STARTER_KEY, "skip"); } catch (e) {} box.remove(); };
    head.append(skip);
    box.append(head, el("p", "sy-snote", allDone
      ? "That's the starter route. Pick anything below next: there's no need to finish the whole set."
      : "Quick daily word games, a few minutes each. Play one or all three, then explore the rest whenever you like."));
    var row = el("ol", "sy-srow");
    picks.forEach(function (g, i) {
      var sc = s.g[g.id], li = el("li"), a = el("a", "sy-scard" + (sc ? " done" : "") + (g.id === here ? " here" : ""));
      a.href = g.href; a.style.setProperty("--gc", g.c);
      var top = el("span", "sy-stop");
      top.append(sc ? tick("sy-tick") : el("span", "sy-snum", String(i + 1)), el("span", "sy-gname", g.name));
      a.append(top, el("span", "sy-gblurb", g.blurb), el("span", "sy-gst", sc ? scoreText(sc) : (g.id === here ? "Playing now" : "Play →")));
      li.append(a); row.append(li);
    });
    box.append(row);
    return box;
  }
  function fillGrid(box) {
    var s = readSet(), n = GAMES.filter(function (g) { return s.g[g.id]; }).length;
    box.textContent = "";
    var start = starterBox(s); if (start) box.append(start);
    var head = el("div", "sy-ghead");
    head.append(el("h2", null, "Today's games"), el("span", null, n === GAMES.length ? "All " + WORDS[GAMES.length] + " played 🏆" : n + " of " + GAMES.length + " played"));
    var bar = el("div", "sy-gprog"), fillEl = el("span");
    bar.setAttribute("role", "img"); bar.setAttribute("aria-label", n + " of " + GAMES.length + " played");
    fillEl.style.width = (n / GAMES.length * 100) + "%"; bar.append(fillEl);
    box.append(head, bar);
    var byId = {}; GAMES.forEach(function (g) { byId[g.id] = g; });
    var seen = {}, groups = GROUPS.map(function (gr) {
      return { name: gr.name, note: gr.note, games: gr.ids.map(function (id) { seen[id] = 1; return byId[id]; }).filter(Boolean) };
    });
    var rest = GAMES.filter(function (g) { return !seen[g.id]; });
    if (rest.length) groups.push({ name: "More games", games: rest });
    groups.forEach(function (gr) {
      var sec = el("section", "sy-gsec"), gh = el("div", "sy-gsh"), h = el("h3", null, gr.name);
      var played = gr.games.filter(function (g) { return s.g[g.id]; }).length;
      gh.append(h, el("span", null, played + "/" + gr.games.length));
      sec.append(gh);
      if (gr.note) sec.append(el("p", "sy-gsnote", gr.note));
      var grid = el("div", "sy-gcards");
      gr.games.forEach(function (g) { grid.append(gcard(g, s)); });
      sec.append(grid); box.append(sec);
    });
  }
  function gcard(g, s) {
      var sc = s.g[g.id], cur = g.id === here, card = el("a", "sy-gcard" + (sc ? " done" : "") + (cur ? " here" : ""));
      card.href = g.href; if (cur) card.setAttribute("aria-current", "page");
      var top = el("span", "sy-gtop"); top.append(el("span", "sy-gname", g.name));
      if (g.isNew) top.append(el("span", "sy-newb", "New"));
      var st = el("span", "sy-gst");
      if (sc) { st.append(tick("sy-tick"), document.createTextNode(scoreText(sc))); }
      else st.textContent = cur ? "Playing now" : "Play →";
      card.append(top, el("span", "sy-gblurb", g.blurb), st);
      return card;
  }
  var navStyled = false;
  function addNavStyle() {
    if (navStyled) return; navStyled = true;
    // Each game page has its own palette, so pick up whichever names it uses: Samey's teal, an --accent, or plain ink.
    var I = "var(--ink,#1b2422)", L = "var(--line,#d5ddd8)", M = "var(--muted,#5e6b67)",
      S = "var(--surface,var(--card,#fff))",
      T = "var(--sy-accent,var(--teal,var(--accent,var(--ink,#1f7a6d))))",
      TI = "var(--sy-accent-ink,var(--teal-ink,var(--on-accent,var(--bg,var(--paper,#fff)))))",
      OK = "var(--teal,var(--good,var(--ok,currentColor)))",
      A = "var(--amber,#d99a1e)", AI = "var(--amber-ink,#2a1d00)";
    var css =
      ".sy-bar{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;font-family:var(--body,inherit);margin:var(--sy-bar-margin,0 0 4px);padding:var(--sy-bar-pad,2px 0 12px);border-bottom:1px solid " + L + "}" +
      ".sy-bar::-webkit-scrollbar{display:none}" +
      ".sy-meta{display:flex;justify-content:flex-end;gap:8px;margin:4px 0 10px;font-family:var(--body,inherit);font-size:.9rem}" +
      ".sy-meta a{display:inline-flex;align-items:center;gap:6px;min-height:38px;padding:0 14px;border-radius:999px;border:1.5px solid " + L + ";background:" + S + ";color:" + I + ";text-decoration:none;font-weight:700}" +
      ".sy-meta a:hover,.sy-meta a:focus-visible{border-color:" + I + "}" +
      ".sy-meta svg{width:16px;height:16px;flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linejoin:round}" +
      ".sy-meta a.sy-support{background:" + A + ";border-color:" + A + ";color:" + AI + ";box-shadow:0 2px 8px color-mix(in srgb," + A + " 35%,transparent)}" +
      ".sy-meta a.sy-support:hover,.sy-meta a.sy-support:focus-visible{border-color:" + AI + "}" +
      ".sy-meta .sy-support svg{fill:#c92a2a;stroke:#c92a2a;transform-origin:center;animation:sy-beat 1.6s ease-in-out .6s 2}" +
      "@keyframes sy-beat{0%,100%{transform:scale(1)}15%{transform:scale(1.25)}30%{transform:scale(1)}45%{transform:scale(1.18)}}" +
      "@media (prefers-reduced-motion:reduce){.sy-meta .sy-support svg{animation:none}}" +
      ".sy-bchip{flex:0 0 auto;display:flex;align-items:center;gap:6px;min-height:40px;padding:0 14px;border-radius:999px;border:1.5px solid " + L + ";background:" + S + ";color:" + I + ";font-weight:700;font-size:.95rem;text-decoration:none;white-space:nowrap}" +
      "a.sy-bchip:hover{border-color:" + I + "}" +
      ".sy-bchip.here{background:" + T + ";border-color:" + T + ";color:" + TI + "}" +
      ".sy-tick{width:14px;height:14px;flex:none;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}" +
      ".sy-bchip.done:not(.here) .sy-tick{stroke:" + OK + "}" +
      ".sy-newb{font-size:.62rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;background:" + A + ";color:" + AI + ";border-radius:6px;padding:2px 6px;line-height:1.3}" +
      ".sy-grid{display:flex;flex-direction:column;gap:12px}" +
      ".sy-ghead{display:flex;justify-content:space-between;align-items:baseline;gap:8px}" +
      ".sy-ghead h2{margin:0;font-family:var(--display,inherit);font-weight:800;font-size:1.6rem;letter-spacing:-.01em;color:" + I + "}" +
      ".sy-ghead span{font-weight:700;color:" + T + ";font-size:.95rem}" +
      ".sy-gprog{height:8px;border-radius:999px;background:" + L + ";overflow:hidden}" +
      ".sy-gprog span{display:block;height:100%;background:" + T + ";border-radius:999px;transition:width .4s}" +
      ".sy-gsec{display:flex;flex-direction:column;gap:8px;margin-top:10px}" +
      ".sy-gsh{display:flex;justify-content:space-between;align-items:baseline;gap:8px}" +
      ".sy-gsh h3{margin:0;font-family:var(--display,inherit);font-weight:800;font-size:1.15rem;color:" + I + "}" +
      ".sy-gsh span{font-size:.85rem;font-weight:700;color:" + M + "}" +
      ".sy-gsnote{margin:-6px 0 2px;font-size:.85rem;color:" + M + "}" +
      ".sy-gcards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}" +
      ".sy-gcard{display:flex;flex-direction:column;gap:6px;min-height:118px;padding:14px;border-radius:14px;border:1px solid " + L + ";background:" + S + ";color:" + I + ";text-decoration:none}" +
      ".sy-gcard:hover{border-color:" + I + "}" +
      ".sy-gcard.done{background:color-mix(in srgb," + T + " 10%," + S + ");border-color:color-mix(in srgb," + T + " 30%," + L + ")}" +
      ".sy-gcard.here{border:2px solid " + T + ";padding:13px}" +
      ".sy-gtop{display:flex;justify-content:space-between;align-items:center;gap:6px}" +
      ".sy-gname{font-family:var(--display,inherit);font-weight:800;font-size:1.15rem}" +
      ".sy-gblurb{flex:1 1 auto;font-size:.86rem;line-height:1.35;color:" + M + "}" +
      ".sy-gst{display:flex;align-items:center;gap:5px;font-size:.85rem;font-weight:700}" +
      ".sy-gcard.done .sy-gst{color:" + OK + "}" +
      "@media (min-width:480px){.sy-gcards{grid-template-columns:repeat(3,minmax(0,1fr))}}" +
      ".sy-start{display:flex;flex-direction:column;gap:8px;padding:14px;margin-bottom:8px;border-radius:16px;background:color-mix(in srgb," + A + " 16%," + S + ");border:1.5px solid color-mix(in srgb," + A + " 60%," + L + ")}" +
      ".sy-shead{display:flex;justify-content:space-between;align-items:center;gap:10px}" +
      ".sy-shead h2{margin:0;font-family:var(--display,inherit);font-weight:800;font-size:1.25rem;letter-spacing:-.01em;color:" + I + "}" +
      ".sy-sskip{flex:none;border:0;background:none;padding:6px 0;color:" + M + ";font:inherit;font-size:.85rem;text-decoration:underline;cursor:pointer}" +
      ".sy-snote{margin:0;font-size:.9rem;line-height:1.4;color:" + M + "}" +
      ".sy-srow{list-style:none;margin:4px 0 0;padding:0;display:grid;grid-template-columns:1fr;gap:8px}" +
      ".sy-scard{display:flex;flex-direction:column;gap:4px;padding:12px 14px;border-radius:12px;border:1px solid " + L + ";border-left:5px solid var(--gc," + T + ");background:" + S + ";color:" + I + ";text-decoration:none}" +
      ".sy-scard:hover{border-color:" + I + ";border-left-color:var(--gc," + T + ")}" +
      ".sy-scard.here{outline:2px solid " + T + ";outline-offset:-1px}" +
      ".sy-stop{display:flex;align-items:center;gap:8px}" +
      ".sy-snum{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:50%;background:var(--gc," + T + ");color:#fff;font-size:.8rem;font-weight:800}" +
      ".sy-scard .sy-tick{width:22px;height:22px;stroke:" + OK + "}" +
      ".sy-scard.done .sy-gst{color:" + OK + "}" +
      "@media (min-width:480px){.sy-srow{grid-template-columns:repeat(3,minmax(0,1fr))}.sy-scard{min-height:118px}}" +
      "@media (prefers-reduced-motion:reduce){.sy-gprog span{transition:none}}";
    var st = document.createElement("style"); st.textContent = css; document.head.append(st);
  }
  function renderNav() {
    var bars = document.querySelectorAll(".sy-bar"), grids = document.querySelectorAll(".sy-grid");
    if (!bars.length && !grids.length) return;
    addNavStyle(); bars.forEach(fillBar); grids.forEach(fillGrid);
  }
  function renderSets() { document.querySelectorAll(".sy-set").forEach(fillSet); renderNav(); }
  /* ---------- Advent calendar banner, 24 Nov to 31 Dec 2026 ----------
     A slim strip above the games bar (or the "Today's games" grid on the home page) pointing to /advent/.
     Before 1 December it counts down; through December it says which door is open. Players can hide it for the day. */
  function placeAdvent() {
    if (here === "advent" || document.querySelector(".sy-advent")) return;
    var now = new Date(), y = now.getFullYear(), m = now.getMonth(), d = now.getDate();
    if (y !== 2026 || m < 10 || (m === 10 && d < 24)) return;
    var hideKey = "samey-advent-hide";
    try { if (localStorage.getItem(hideKey) === dayKey(now)) return; } catch (e) {}
    var spot = document.querySelector(".sy-bar") || document.querySelector(".sy-grid");
    if (!spot) return;
    var msg;
    if (m === 10) { var n = 31 - d; msg = n === 1 ? "🎁 Something festive opens tomorrow: the samey.uk Advent calendar" : "🎁 The samey.uk Advent calendar opens in " + n + " days. Take a peek"; }
    else if (d <= 24) msg = "🎄 Advent door " + d + " is open. Today's festive word round →";
    else msg = "🎄 All 24 Advent doors are open. Catch up on any you missed →";
    var box = el("div", "sy-advent"), a = el("a", null, msg), x = el("button", null, "×");
    a.href = "/advent/"; x.type = "button"; x.setAttribute("aria-label", "Hide for today");
    x.onclick = function () { try { localStorage.setItem(hideKey, dayKey(new Date())); } catch (e) {} box.remove(); };
    box.append(a, x);
    if (!document.getElementById("sy-advent-css")) {
      var st = document.createElement("style"); st.id = "sy-advent-css";
      st.textContent = ".sy-advent{display:flex;align-items:center;gap:6px;margin:0 0 10px;padding:4px 4px 4px 14px;border-radius:12px;background:linear-gradient(90deg,#1f5c3f,#b3262e);color:#fff;font-family:var(--body,inherit);font-size:.92rem;font-weight:700;box-shadow:0 2px 10px rgba(179,38,46,.25)}" +
        ".sy-advent a{flex:1;color:#fff;text-decoration:none;padding:8px 0;line-height:1.3}" +
        ".sy-advent a:hover{text-decoration:underline}" +
        ".sy-advent button{flex:none;width:36px;height:36px;border:0;border-radius:8px;background:rgba(255,255,255,.15);color:#fff;font-size:20px;line-height:1;cursor:pointer}" +
        ".sy-advent a:focus-visible,.sy-advent button:focus-visible{outline:3px solid #fff;outline-offset:2px}";
      document.head.append(st);
    }
    spot.parentNode.insertBefore(box, spot);
  }
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
      ".sy-coffee{margin:12px 0 0;font-size:14px;line-height:1.45;text-align:center;opacity:.85}.sy-coffee a{color:inherit;font-weight:700;white-space:nowrap}" +
      ".sy-wlv{margin:10px 0 0;padding:10px 12px;border-radius:10px;border:1px dashed rgba(127,127,127,.45);font-size:14px;line-height:1.45;text-align:center}.sy-wlv a{color:inherit;font-weight:700;white-space:nowrap}" +
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

  /* ---------- "Fancy another?" cards, built from GAMES so every game always lists every other game ----------
     A page just needs an empty <div class="xg" data-sy-cards></div> on its result screen.
     Games not played yet today come first (new ones at the top); ones already played drop to the bottom. */
  var cardsStyled = false;
  function cardsStyle() {
    if (cardsStyled) return; cardsStyled = true;
    var st = document.createElement("style");
    // :where() keeps these at zero specificity, so a page's own .xg styles still win.
    st.textContent = ":where(.card,.result) + :where(.xg){margin-top:14px}" +
      ":where(.xg[data-sy-cards]){display:flex;flex-direction:column;gap:10px;text-align:left;--xg-s:var(--surface,var(--card,#fff))}" +
      ":where(.xg[data-sy-cards] .xg-head){text-align:left;margin:4px 0 0;font-size:.92rem;font-weight:700;color:var(--muted,inherit);opacity:.9}" +
      ":where(.xg[data-sy-cards] .xg-card){display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:10px;background:color-mix(in srgb,var(--c) 12%,var(--xg-s));border:2px solid var(--c);color:var(--ink,inherit);text-decoration:none;min-height:44px}" +
      ":where(.xg[data-sy-cards] .xg-card:hover .xg-arrow){transform:translateX(3px)}" +
      ":where(.xg[data-sy-cards] .xg-card:focus-visible){outline:3px solid var(--c);outline-offset:2px}" +
      ":where(.xg[data-sy-cards] .xg-icon){flex:none;width:48px;height:48px}" +
      ":where(.xg[data-sy-cards] .xg-text){display:flex;flex-direction:column;gap:1px;min-width:0}" +
      ":where(.xg[data-sy-cards] .xg-new){font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:color-mix(in srgb,var(--c) 60%,var(--ink,currentColor))}" +
      ":where(.xg[data-sy-cards] .xg-title){font-family:var(--display,inherit);font-weight:800;font-size:1.3rem;line-height:1.1}" +
      ":where(.xg[data-sy-cards] .xg-sub){font-size:.9rem;color:var(--muted,inherit)}" +
      ":where(.xg[data-sy-cards] .xg-arrow){margin-left:auto;font-size:1.4rem;font-weight:700;flex:none;color:color-mix(in srgb,var(--c) 60%,var(--ink,currentColor));transition:transform .15s}" +
      ":where(.xg[data-sy-cards] .xg-card.played){opacity:.7}";
    document.head.append(st);
  }
  function fillCards(box) {
    box.setAttribute("data-sy-cards", "done");
    cardsStyle();
    var s = readSet();
    var others = GAMES.filter(function (g) { return g.id !== here; });
    var rank = function (g) { return (s.g[g.id] ? 2 : 0) + (g.isNew ? 0 : 1); };
    others = others.map(function (g, i) { return [g, i]; })
      .sort(function (a, b) { return rank(a[0]) - rank(b[0]) || a[1] - b[1]; })
      .map(function (x) { return x[0]; });
    box.append(el("p", "xg-head", "Fancy another?"));
    others.forEach(function (g) {
      var played = s.g[g.id];
      var a = el("a", "xg-card xg-" + g.id + (played ? " played" : "")); a.href = g.href; a.style.setProperty("--c", g.c);
      var img = el("img", "xg-icon"); img.src = g.id === "samey" ? "/icons/samey.svg" : g.href + "favicon.svg"; img.alt = ""; img.width = 48; img.height = 48;
      var txt = el("span", "xg-text");
      txt.append(el("span", "xg-new", played ? "Played today · " + scoreText(played) : (g.isNew ? "New from Samey" : "Also from Samey")),
        el("span", "xg-title", "Play " + g.name), el("span", "xg-sub", g.blurb.replace(/\.$/, "")));
      var arr = el("span", "xg-arrow", "→"); arr.setAttribute("aria-hidden", "true");
      a.append(img, txt, arr); box.append(a);
    });
  }
  function placeCards() { document.querySelectorAll(".xg[data-sy-cards='']").forEach(fillCards); }

  /* ---------- "Install Samey & friends" (adds the whole set to the home screen; see /sw.js) ----------
     Goes just under the "Enjoyed today's? Buy me a coffee" line on every game's result screen.
     Hidden if already installed, if "Not now" was tapped in the last 30 days, or if the browser can't install.
     Android/desktop Chrome and Edge get the browser's own install prompt; iPhone/iPad get the two-step instructions. */
  var HIDE_KEY = "sy-install-hide", deferredPrompt = null;
  var isInstalled = function () {
    return (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true;
  };
  var isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  var hidden = function () {
    var t = 0; try { t = +localStorage.getItem(HIDE_KEY) || 0; } catch (e) {}
    return Date.now() - t < 30 * 864e5;
  };
  var instStyled = false;
  function installStyle() {
    if (instStyled) return; instStyled = true;
    var st = document.createElement("style");
    st.textContent = ".sy-install{margin:12px auto 0;max-width:420px;text-align:center;font-size:14px;line-height:1.45}" +
      ".sy-install-btn{display:block;width:100%;padding:10px;border-radius:10px;border:2px solid currentColor;background:transparent;color:inherit;font:inherit;font-size:15px;font-weight:700;cursor:pointer}" +
      ".sy-install-sub{margin:6px 0 0;opacity:.75}" +
      ".sy-install-how{margin:8px 0 0;padding:10px 12px;border-radius:10px;border:1px solid rgba(127,127,127,.35);text-align:left}" +
      ".sy-install-no{margin-top:4px;padding:4px 8px;border:0;background:none;color:inherit;font:inherit;font-size:13px;opacity:.65;text-decoration:underline;cursor:pointer}";
    document.head.append(st);
  }
  function removeInstall() { document.querySelectorAll(".sy-install").forEach(function (n) { n.remove(); }); }
  function makeInstall() {
    var box = el("div", "sy-install"), btn = el("button", "sy-install-btn", "📲 Install Samey & friends");
    btn.type = "button";
    var sub = el("p", "sy-install-sub", "All the games on your home screen, and they work offline too.");
    var no = el("button", "sy-install-no", "Not now"); no.type = "button";
    no.onclick = function () { try { localStorage.setItem(HIDE_KEY, String(Date.now())); } catch (e) {} removeInstall(); };
    btn.onclick = function () {
      if (deferredPrompt) {
        var p = deferredPrompt; deferredPrompt = null;
        p.prompt();
        p.userChoice.then(function (c) { if (c && c.outcome === "accepted") removeInstall(); }).catch(function () {});
        return;
      }
      if (isIOS && !box.querySelector(".sy-install-how")) {
        var how = el("p", "sy-install-how");
        how.append("1. Tap the Share button ", el("b", null, "⬆"), " (the square with an arrow, at the bottom or top of the screen).",
          document.createElement("br"), "2. Scroll down and tap ", el("b", null, "Add to Home Screen"), ".");
        sub.after(how);
      }
    };
    box.append(btn, sub, no);
    return box;
  }
  function placeInstall() {
    if (isInstalled() || hidden() || !(deferredPrompt || isIOS)) return;
    document.querySelectorAll("a[href*='ko-fi.com']").forEach(function (a) {
      var p = a.closest("p");
      if (!p || p.textContent.indexOf("Enjoyed today") === -1) return;
      var next = p.nextElementSibling;
      if (next && next.classList.contains("sy-install")) return;
      installStyle();
      p.after(makeInstall());
    });
  }
  window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); deferredPrompt = e; placeInstall(); });
  window.addEventListener("appinstalled", function () { deferredPrompt = null; removeInstall(); });

  new MutationObserver(function () { fill(); placeCards(); placeSets(); placeInstall(); }).observe(document.documentElement, { childList: true, subtree: true });
  try { q.forEach(function (a) { report(a[0], a[1]); }); } catch (e) {}
  function init() { fill(); placeCards(); placeSets(); renderNav(); placeInstall(); placeAdvent(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
