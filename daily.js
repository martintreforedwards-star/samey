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
  new MutationObserver(fill).observe(document.documentElement, { childList: true, subtree: true });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fill); else fill();
})();
