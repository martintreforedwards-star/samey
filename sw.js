/* Service worker for samey.uk: makes the games installable and playable with a poor or no signal.

   The rule is "network first": whenever there is a connection, players get exactly what is on
   GitHub, so new games, fixes and puzzle data show up straight away, just as they do now.
   The cache is only used when the network fails or takes longer than NETWORK_TIMEOUT
   (tunnels, trains), and every good network response refreshes it.

   You don't need to touch this file when you edit a game. Bump VERSION only if you add a
   new game you want saved for offline play on install (add it to PRECACHE too), or if you
   ever want to wipe everyone's offline copy. */
const VERSION = "v4";
const CACHE = "samey-" + VERSION;
const FONT_CACHE = "samey-fonts";
const NETWORK_TIMEOUT = 4000;

// Saved on install so every game works offline from the first visit.
// words.txt (2.7 MB) is left out to spare mobile data; it is cached the first time Samey or Spinonym loads it.
const PRECACHE = [
  "/", "/daily.js", "/favicon.svg", "/manifest.webmanifest", "/icons/icon-192.png",
  "/spinonym/", "/spinonym/puzzles.js",
  "/dotty/", "/syntaxed/", "/passe/", "/natter/",
  "/roots/", "/roots/data.js",
  "/rizz/", "/rizz/data.js",
  "/babel/", "/babel/data.js", "/babel/rounds.js",
  "/idiomy/", "/idiomy/data.js",
  "/rhymey/", "/rhymey/data.js",
  "/phoney/", "/phoney/data.js",
  "/incipit/", "/incipit/data.js",
  "/versed/", "/versed/data.js",
  "/gamey/", "/gamey/data.js",
  "/dodo/", "/dodo/data.js",
  "/inkling/", "/inkling/data.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      // One at a time and best-effort: a missing file must not stop the rest being saved.
      Promise.all(PRECACHE.map((url) => cache.add(url).catch(() => {})))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE && k !== FONT_CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return; // feedback forms etc. go straight to the network
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    event.respondWith(networkFirst(event, req));
  } else if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    event.respondWith(fontsFromCache(event, req));
  }
  // Anything else on another site (analytics, forms, links) is left alone.
});

async function networkFirst(event, req) {
  const cache = await caches.open(CACHE);
  const fromNetwork = fetch(req).then((res) => {
    if (res.ok) cache.put(req, res.clone());
    return res;
  });
  // Keep the service worker alive until the cache has been refreshed, even if we answered from the cache.
  event.waitUntil(fromNetwork.catch(() => {}));

  const fromCache = () =>
    cache.match(req).then((hit) => hit || (req.mode === "navigate" ? cache.match(req, { ignoreSearch: true }) : undefined));

  // Race the network against a timer; if the timer wins and we have a saved copy, use that.
  const slow = new Promise((resolve) => setTimeout(resolve, NETWORK_TIMEOUT));
  const first = await Promise.race([fromNetwork.catch(() => null), slow.then(() => "slow")]);
  if (first && first !== "slow") return first;

  const saved = await fromCache();
  if (saved) return saved;
  // Nothing saved: keep waiting for the network, or fail as the browser normally would.
  return fromNetwork.catch(() => offlinePage(req));
}

async function fontsFromCache(event, req) {
  const cache = await caches.open(FONT_CACHE);
  const hit = await cache.match(req);
  const update = fetch(req).then((res) => {
    if (res.ok || res.type === "opaque") cache.put(req, res.clone());
    return res;
  });
  event.waitUntil(update.catch(() => {}));
  return hit || update;
}

function offlinePage(req) {
  if (req.mode !== "navigate") return Response.error();
  return new Response(
    '<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<title>Samey: offline</title><body style="font:18px/1.5 system-ui,sans-serif;padding:2rem;text-align:center;background:#f3f5f1;color:#1b2422">' +
    "<p>You're offline and this page hasn't been saved yet.</p><p><a href=\"/\" style=\"color:#1f7a6d\">Back to Samey</a></p>",
    { headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
