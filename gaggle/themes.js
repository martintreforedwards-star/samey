// Gaggle theme rounds (rounds 3 to 5), from 23 Nov 2026.
// The days cycle through the themes in turn (Water, Land, Coast, Water...), each theme taking its next set.
// Each set is one day:
//   k = "Which word?"        d = the definition, c = the right word, o = three wrong ones (same theme), n = note
//   r = "Real or made up?"   w = the word, d = what it's said to mean, real = true/false, n = note
//   m = "Match them"         four [word, short meaning] pairs
// A word is the answer to only one round in its theme. Fakes are made up for this game.
const THEMES = [
  {name: "Water", sets: [
    {k: {d: "a small mountain lake, usually in a hollow scooped out by a glacier", c: "tarn", o: ["firth", "bayou", "delta"], n: "From Old Norse tjörn. The Lake District has hundreds."},
     r: {w: "cenote", d: "a natural sinkhole filled with groundwater", real: true, n: "Real. Mexico's Yucatán has thousands, and the Maya saw some as sacred."},
     m: [["fen", "marshy lowland"], ["estuary", "tidal river mouth"], ["oxbow", "cut-off river bend"], ["backwater", "still side channel"]]},
    {k: {d: "a swampy, slow-moving stretch of water in the American South", c: "bayou", o: ["tarn", "weir", "fjord"], n: "Louisiana French, probably from a Choctaw word for a small stream."},
     r: {w: "glimmet", d: "a pool left in a riverbed after a flood goes down", real: false, n: "Made up. Australia's word for a pool cut off by a changing river is billabong."},
     m: [["loch", "Scottish lake"], ["lough", "Irish lake"], ["mere", "shallow lake"], ["firth", "Scottish sea inlet"]]},
    {k: {d: "an Australian waterhole left behind when a river changes course", c: "billabong", o: ["cenote", "oasis", "fen"], n: "From Wiradjuri, a language of New South Wales. One turns up in the first line of Waltzing Matilda."},
     r: {w: "leat", d: "an open channel that carries water to a mill", real: true, n: "Real. Dartmoor is laced with old leats."},
     m: [["weir", "low river dam"], ["strait", "narrow sea channel"], ["lagoon", "water behind a sandbar"], ["rill", "tiny stream"]]},
    {k: {d: "the place where two rivers meet and flow on as one", c: "confluence", o: ["estuary", "delta", "weir"], n: "From Latin confluere, to flow together. Koblenz, where the Moselle meets the Rhine, takes its name from it."},
     r: {w: "trinnet", d: "a spring that only flows in wet winters", real: false, n: "Made up. In chalk country a stream that runs only in winter is a winterbourne."},
     m: [["tributary", "feeder river"], ["meander", "loop in a river"], ["watershed", "line between river basins"], ["spring", "water from the ground"]]},
    {k: {d: "a long, narrow sea inlet between steep cliffs, carved by a glacier", c: "fjord", o: ["firth", "estuary", "creek"], n: "Norwegian. It comes from the same Old Norse word as firth."},
     r: {w: "broad", d: "a shallow lake in East Anglia, made when medieval peat diggings flooded", real: true, n: "Real. The Norfolk Broads were thought to be natural until research in the 1950s showed they were flooded peat pits."},
     m: [["sound", "wide sea channel"], ["cataract", "large waterfall"], ["rapids", "fast rough water"], ["slough", "muddy backwater"]]},
    {k: {d: "a pool or green spot in a desert, fed by underground water", c: "oasis", o: ["lagoon", "mere", "cenote"], n: "From Greek, which probably took it from Egyptian."},
     r: {w: "swallet", d: "a hole where a stream disappears underground", real: true, n: "Real, and still used by cavers in the Mendips. Also called a swallow hole."},
     m: [["geyser", "hot spout"], ["reservoir", "man-made lake"], ["canal", "dug waterway"], ["cascade", "stepped waterfall"]]},
    {k: {d: "the flat, fan-shaped land where a river splits into channels before reaching the sea", c: "delta", o: ["estuary", "fjord", "sound"], n: "Named in ancient Greece for the Nile's, which is shaped like the letter Δ."},
     r: {w: "drennock", d: "a lake that freezes from the bottom up", real: false, n: "Made up. Lakes freeze from the top, because water is densest at about 4°C and sinks."},
     m: [["spate", "river in flood"], ["eddy", "backward swirl"], ["ford", "shallow crossing"], ["bore", "tidal wave up a river"]]}
  ]},
  {name: "Land", sets: [
    {k: {d: "a flat-topped hill with steep sides, smaller than a mesa", c: "butte", o: ["drumlin", "tor", "cirque"], n: "French for a small hill. Monument Valley in Arizona is famous for them."},
     r: {w: "esker", d: "a long winding ridge of gravel left by a river that ran under a glacier", real: true, n: "Real, from Irish eiscir. The Esker Riada once carried a road right across Ireland."},
     m: [["archipelago", "chain of islands"], ["peninsula", "almost an island"], ["plateau", "high flat land"], ["gorge", "deep narrow valley"]]},
    {k: {d: "a smooth, egg-shaped hill of glacial debris, often found in swarms", c: "drumlin", o: ["butte", "esker", "cirque"], n: "From Irish droimnín, little ridge. Cumbria's Eden Valley has a whole swarm."},
     r: {w: "sprauch", d: "a ledge of rock where a waterfall drops", real: false, n: "Made up. The pool a waterfall drops into is a plunge pool."},
     m: [["mesa", "table-top hill"], ["col", "pass between peaks"], ["tor", "rocky hilltop outcrop"], ["scree", "loose rock on a slope"]]},
    {k: {d: "a sharp, knife-edged ridge between two glacial hollows", c: "arête", o: ["moraine", "esker", "spur"], n: "French for fish bone. Striding Edge on Helvellyn is one."},
     r: {w: "inselberg", d: "a lone rocky hill rising sharply from a flat plain", real: true, n: "Real, German for island mountain. Uluru is the best-known example."},
     m: [["cirque", "bowl-shaped hollow"], ["outcrop", "rock above the soil"], ["crag", "steep rough rock"], ["knoll", "small round hill"]]},
    {k: {d: "a narrow strip of land joining two larger areas, with water on both sides", c: "isthmus", o: ["atoll", "peninsula", "cape"], n: "From Greek isthmos, neck. Panama and Corinth are the famous ones, both now cut by canals."},
     r: {w: "glentle", d: "a valley with no river in it", real: false, n: "Made up. A valley whose stream has vanished is just a dry valley, common on chalk downs."},
     m: [["escarpment", "long steep slope"], ["basin", "bowl of low land"], ["ridge", "long narrow high ground"], ["foothills", "low hills before mountains"]]},
    {k: {d: "a vast, flat, treeless grassland in Russia and Central Asia", c: "steppe", o: ["pampas", "veld", "heath"], n: "From Russian. The pampas are Argentina's version and the prairie is North America's."},
     r: {w: "cuesta", d: "a ridge with a steep slope on one side and a gentle one on the other", real: true, n: "Real, Spanish for slope. The Chilterns and the North Downs are both cuestas."},
     m: [["tundra", "frozen treeless plain"], ["savanna", "grassland with few trees"], ["prairie", "American grassland"], ["moor", "open upland heath"]]},
    {k: {d: "a deep, steep-sided valley, usually cut by a river", c: "canyon", o: ["gully", "cirque", "dale"], n: "From Spanish cañón, tube. The Grand Canyon is nearly 2 km deep in places."},
     r: {w: "quillock", d: "a mound of earth pushed up by a mole", real: false, n: "Made up. It's a molehill, or a tump in some western dialects."},
     m: [["glen", "Scottish valley"], ["wadi", "dry desert valley"], ["ravine", "narrow steep valley"], ["vale", "broad valley"]]},
    {k: {d: "a ridge or heap of rocks and earth dumped at the edges or front of a glacier", c: "moraine", o: ["drumlin", "scree", "esker"], n: "From French. The moraine at a glacier's snout marks how far the ice once reached."},
     r: {w: "pingo", d: "an ice-cored hill that pushes up out of Arctic permafrost", real: true, n: "Real, from Inuvialuktun. The tallest in Canada is nearly 50 metres high."},
     m: [["massif", "block of mountains"], ["summit", "highest point"], ["saddle", "dip between two peaks"], ["spur", "ridge jutting from a hill"]]}
  ]},
  {name: "Coast", sets: [
    {k: {d: "a pillar of rock standing in the sea, cut off from the cliffs by waves", c: "stack", o: ["groyne", "spit", "berm"], n: "The Old Man of Hoy in Orkney is one of the tallest in Britain."},
     r: {w: "tombolo", d: "a bar of sand or shingle joining an island to the mainland", real: true, n: "Real, from Italian. Chesil Beach ties the Isle of Portland to Dorset."},
     m: [["inlet", "narrow arm of sea"], ["shingle", "beach pebbles"], ["cove", "small round bay"], ["headland", "land jutting into the sea"]]},
    {k: {d: "a long ridge of sand or shingle growing out from the coast into open water", c: "spit", o: ["berm", "ria", "cove"], n: "Spurn Head, at the mouth of the Humber, is a famous one."},
     r: {w: "skerrock", d: "a rock pool filled only by the highest spring tides", real: false, n: "Made up, but close to skerry, a small rocky island, from Old Norse."},
     m: [["stump", "worn-down stack"], ["arch", "rock bridge over the sea"], ["bay", "curve of coast"], ["strand", "beach"]]},
    {k: {d: "a river valley drowned when sea levels rose", c: "ria", o: ["fjord", "lagoon", "sound"], n: "From Galician and Spanish ría. Carrick Roads, by Falmouth, is one."},
     r: {w: "machair", d: "low grassy land behind beaches on Scottish islands, bright with flowers in summer", real: true, n: "Real, from Gaelic. It's found almost only in north-west Scotland and the west of Ireland."},
     m: [["salt marsh", "tidal grassland"], ["mudflat", "mud bared at low tide"], ["sandbar", "ridge of sand offshore"], ["foreshore", "between high and low tide"]]},
    {k: {d: "a low wall built out across a beach to stop sand drifting along it", c: "groyne", o: ["pier", "berm", "stump"], n: "From an old French word for snout. They're why many British beaches look like a row of compartments."},
     r: {w: "brallock", d: "a crack in a cliff where the sea booms in", real: false, n: "Made up. A narrow cleft in a Cornish cliff is a zawn."},
     m: [["breakwater", "wall against waves"], ["jetty", "landing stage"], ["promenade", "seafront walkway"], ["boardwalk", "wooden seafront path"]]},
    {k: {d: "a ring-shaped coral reef or island around a lagoon", c: "atoll", o: ["lagoon", "sandbar", "stack"], n: "From Dhivehi, the language of the Maldives, which are made of them."},
     r: {w: "blowhole", d: "a hole in a cliff top where waves force up spray", real: true, n: "Real. Kiama in New South Wales has a famous one."},
     m: [["skerry", "small rocky island"], ["cay", "low sandy island"], ["reef", "ridge just below the sea"], ["holm", "island in a river or bay"]]},
    {k: {d: "a narrow, steep-sided sea inlet in the cliffs of Orkney and Shetland", c: "geo", o: ["gully", "skerry", "cove"], n: "From Old Norse gjá, a chasm. Cornwall's word for much the same thing is zawn."},
     r: {w: "haaf", d: "the deep sea where Shetland fishermen used to fish", real: true, n: "Real, from Old Norse haf, sea. Haaf fishing in open boats lasted into the 1800s."},
     m: [["pier", "walkway into the sea"], ["harbour", "sheltered mooring"], ["quay", "stone landing place"], ["slipway", "ramp into the water"]]},
    {k: {d: "a ridge of shingle or sand piled up by storm waves at the top of a beach", c: "berm", o: ["spit", "stack", "tombolo"], n: "Also a word for a raised bank along a road or canal."},
     r: {w: "plimmock", d: "a beach that sings when you walk on it", real: false, n: "Made up, but singing sand is real: some beaches squeak or boom underfoot."},
     m: [["dune", "windblown sand hill"], ["tideline", "high-water mark"], ["rock pool", "pool left by the tide"], ["undercliff", "land slipped below a cliff"]]}
  ]}
];
