// Gaggle's collective nouns (rounds 1 and 2; rounds 3 to 5 are in themes.js).
// Each entry gives two days' worth: g1/g2 and r1/r2. Every seventh entry (Sun) is people and jobs, used on Sundays.
//   g1, g2 = "Which group?"   a = who, c = the right collective noun, o = three wrong ones, n = a note shown after
//   r1, r2 = "Real or made up?"   p = the phrase, real = true/false, n = note
//   m      = four [who, noun] pairs, from the old Match round: not used now, kept as a source for new rounds
// Many of the old ones come from the Book of St Albans (1486), a hunting and hawking manual
// that listed "terms of venery". Fakes are made up for this game.
const DAYS = [
  /* ---------- Week 1 ---------- */
  /* Mon */ {
    g1: {a: "crows", c: "murder", o: ["pride", "skulk", "pod"], n: "Listed as a “murther of crowys” in the Book of St Albans (1486)."},
    g2: {a: "starlings", c: "murmuration", o: ["exaltation", "parliament", "charm"], n: "Another from the Book of St Albans, and a perfect name for their swirling evening flocks."},
    r1: {p: "a business of ferrets", real: true, n: "Real. The Book of St Albans has a “besynes of ferottis”."},
    r2: {p: "a hiccup of hedgehogs", real: false, n: "Made up for today. Hedgehogs mostly keep to themselves."},
    m: [["lions", "pride"], ["geese", "gaggle"], ["fish", "shoal"], ["bees", "swarm"]]
  },
  /* Tue */ {
    g1: {a: "owls", c: "parliament", o: ["murder", "troop", "bevy"], n: "Made famous by C. S. Lewis: chapter four of The Silver Chair is “A Parliament of Owls”."},
    g2: {a: "larks", c: "exaltation", o: ["murmuration", "unkindness", "leap"], n: "From the Book of St Albans, probably for the way larks soar as they sing."},
    r1: {p: "a crash of rhinoceroses", real: true, n: "Real, and a more recent addition than the medieval ones."},
    r2: {p: "a quibble of squirrels", real: false, n: "Made up. A squirrel's nest is a drey."},
    m: [["kangaroos", "mob"], ["dolphins", "pod"], ["wolves", "pack"], ["cattle", "herd"]]
  },
  /* Wed */ {
    g1: {a: "ravens", c: "unkindness", o: ["charm", "sleuth", "muster"], n: "In the Book of St Albans, perhaps from an old belief that ravens neglected their young."},
    g2: {a: "zebras", c: "dazzle", o: ["crash", "tower", "pride"], n: "A modern one, named for the stripes."},
    r1: {p: "a charm of goldfinches", real: true, n: "Real. “Charm” here is an old word for a blend of birdsong."},
    r2: {p: "a bluster of buzzards", real: false, n: "Made up for today."},
    m: [["giraffes", "tower"], ["hippos", "bloat"], ["flamingos", "flamboyance"], ["elephants", "parade"]]
  },
  /* Thu */ {
    g1: {a: "foxes", c: "skulk", o: ["sleuth", "cete", "labour"], n: "From the Book of St Albans. It's also used for thieves."},
    g2: {a: "bears", c: "sleuth", o: ["skulk", "shrewdness", "pace"], n: "Also written “sloth”. Both go back to the 1400s."},
    r1: {p: "a shrewdness of apes", real: true, n: "Real. When the Book of St Albans was written, “shrewd” meant mischievous."},
    r2: {p: "a muddle of moles", real: false, n: "Made up. The real one is a labour of moles."},
    m: [["badgers", "cete"], ["otters", "romp"], ["cats", "clowder"], ["kittens", "kindle"]]
  },
  /* Fri */ {
    g1: {a: "herons", c: "siege", o: ["muster", "covey", "nye"], n: "A “sege of herons” in the Book of St Albans, perhaps for the way they stand and wait."},
    g2: {a: "peacocks", c: "muster", o: ["siege", "bevy", "watch"], n: "From the Book of St Albans. An “ostentation” of peacocks is also recorded."},
    r1: {p: "a richesse of martens", real: true, n: "Real, from the Book of St Albans. Marten fur was a sign of wealth."},
    r2: {p: "a fumble of ferrets", real: false, n: "Made up. Ferrets are a business."},
    m: [["nightingales", "watch"], ["sparrows", "host"], ["magpies", "tidings"], ["quails", "bevy"]]
  },
  /* Sat */ {
    g1: {a: "leopards", c: "leap", o: ["pride", "dazzle", "crash"], n: "A “lepe of lebardis” in the Book of St Albans."},
    g2: {a: "cheetahs", c: "coalition", o: ["leap", "troop", "prickle"], n: "The word zoologists use for a group of male cheetahs that hunt together."},
    r1: {p: "a prickle of porcupines", real: true, n: "Real, and easy to remember."},
    r2: {p: "a sulk of seals", real: false, n: "Made up. Seals gather in a colony or rookery."},
    m: [["turtles", "bale"], ["jellyfish", "smack"], ["toads", "knot"], ["turkeys", "rafter"]]
  },
  /* Sun: people and jobs */ {
    g1: {a: "butchers", c: "goring", o: ["melody", "faith", "superfluity"], n: "From the Book of St Albans, which had terms for people too, many of them cheeky."},
    g2: {a: "nuns", c: "superfluity", o: ["goring", "observance", "worship"], n: "Another from the Book of St Albans. Not entirely polite."},
    r1: {p: "a drunkship of cobblers", real: true, n: "Real, from the same 15th-century list. Cobblers had a reputation."},
    r2: {p: "a dough of bakers", real: false, n: "Made up. The old term was a tabernacle of bakers."},
    m: [["harpers", "melody"], ["tailors", "disguising"], ["merchants", "faith"], ["hermits", "observance"]]
  },
  /* ---------- Week 2 ---------- */
  /* Mon */ {
    g1: {a: "geese in flight", c: "skein", o: ["siege", "covey", "sounder"], n: "A gaggle on the ground, a skein in the air."},
    g2: {a: "partridges", c: "covey", o: ["skein", "bevy", "nye"], n: "A covey is a family group, from an old French word for a brood."},
    r1: {p: "a deceit of lapwings", real: true, n: "Real, from the Book of St Albans. Lapwings pretend to be hurt to lure you away from their nests."},
    r2: {p: "a jangle of jays", real: false, n: "Made up for today, though jays do make a racket."},
    m: [["wild boar", "sounder"], ["greyhounds", "leash"], ["oxen", "yoke"], ["horses", "harras"]]
  },
  /* Tue */ {
    g1: {a: "woodpeckers", c: "descent", o: ["deceit", "skulk", "rafter"], n: "An old term of venery, recorded in the 1400s."},
    g2: {a: "crocodiles", c: "bask", o: ["dazzle", "bloat", "leap"], n: "A modern one, for the way they lie in the sun. In the water they're a float."},
    r1: {p: "a convocation of eagles", real: true, n: "Real, and suitably grand."},
    r2: {p: "a grumble of badgers", real: false, n: "Made up. It's a cete of badgers."},
    m: [["ants", "colony"], ["locusts", "plague"], ["gnats", "cloud"], ["oysters", "bed"]]
  },
  /* Wed */ {
    g1: {a: "hyenas", c: "cackle", o: ["crash", "ambush", "pace"], n: "A modern one, after their famous whooping call."},
    g2: {a: "tigers", c: "ambush", o: ["cackle", "pride", "troop"], n: "Also a streak of tigers. Both are modern."},
    r1: {p: "a journey of giraffes", real: true, n: "Real, for giraffes on the move. Standing still, they're a tower."},
    r2: {p: "a wobble of walruses", real: false, n: "Made up. Walruses come in herds."},
    m: [["monkeys", "troop"], ["gorillas", "band"], ["donkeys", "pace"], ["goats", "trip"]]
  },
  /* Thu */ {
    g1: {a: "bats", c: "cauldron", o: ["murder", "sleuth", "kindle"], n: "A modern one, for bats swirling out of a cave at dusk."},
    g2: {a: "rattlesnakes", c: "rhumba", o: ["bask", "knot", "smack"], n: "Named after the dance, perhaps for the rattling."},
    r1: {p: "a mischief of mice", real: true, n: "Real, and well deserved."},
    r2: {p: "a dither of deer", real: false, n: "Made up. Deer come in herds; roe deer are a bevy."},
    m: [["seals", "harem"], ["penguins", "huddle"], ["whales", "pod"], ["sea otters", "raft"]]
  },
  /* Fri */ {
    g1: {a: "snipe", c: "wisp", o: ["skein", "murder", "host"], n: "A wisp of snipe goes back to the 1400s."},
    g2: {a: "woodcocks", c: "fall", o: ["descent", "charm", "sedge"], n: "A “falle of woodcockes” is in the Book of St Albans."},
    r1: {p: "a chattering of choughs", real: true, n: "Real. Choughs are noisy crows with red beaks."},
    r2: {p: "a jabber of jackdaws", real: false, n: "Made up for today."},
    m: [["pheasants", "nye"], ["teal", "spring"], ["bitterns", "sedge"], ["cormorants", "gulp"]]
  },
  /* Sat */ {
    g1: {a: "buffalo", c: "obstinacy", o: ["dazzle", "journey", "crash"], n: "A modern one. Buffalo are famously stubborn."},
    g2: {a: "cockroaches", c: "intrusion", o: ["mischief", "rhumba", "business"], n: "A modern one. Who'd argue?"},
    r1: {p: "an implausibility of gnus", real: true, n: "Real, if jokey: it's been in collective-noun lists since the 1960s."},
    r2: {p: "a puzzle of penguins", real: false, n: "Made up. On land it's a waddle or a huddle; at sea, a raft."},
    m: [["zebras", "zeal"], ["hedgehogs", "array"], ["moles", "labour"], ["colts", "rag"]]
  },
  /* Sun: people and jobs */ {
    g1: {a: "judges", c: "sentence", o: ["doctrine", "goring", "faith"], n: "A “sentence of juges” is in the Book of St Albans."},
    g2: {a: "bishops", c: "bench", o: ["sentence", "host", "bevy"], n: "Still in use: the bishops in the House of Lords are the Bench of Bishops."},
    r1: {p: "a hastiness of cooks", real: true, n: "Real, from the Book of St Albans."},
    r2: {p: "a mutter of monks", real: false, n: "Made up. The Book of St Albans has an “abominable sight of monks”."},
    m: [["doctors", "doctrine"], ["lawyers", "eloquence"], ["writers", "worship"], ["princes", "state"]]
  },
  /* ---------- Week 3 ---------- */
  /* Mon */ {
    g1: {a: "swans in flight", c: "wedge", o: ["nye", "host", "siege"], n: "A wedge in flight; on the water, swans are a bevy."},
    g2: {a: "turtle doves", c: "dule", o: ["descent", "wisp", "fall"], n: "A “dule” of turtle doves is in the Book of St Albans. Dule meant grief, for their mournful cooing."},
    r1: {p: "a building of rooks", real: true, n: "Real. Rooks nest together, high in the trees, in rookeries."},
    r2: {p: "a fluster of hens", real: false, n: "Made up for today."},
    m: [["larks", "exaltation"], ["crows", "murder"], ["owls", "parliament"], ["starlings", "murmuration"]]
  },
  /* Tue */ {
    g1: {a: "eagles", c: "convocation", o: ["exaltation", "descent", "muster"], n: "Real and very grand."},
    g2: {a: "hawks", c: "cast", o: ["siege", "watch", "fall"], n: "A cast is the number of hawks a falconer flies at once."},
    r1: {p: "a kettle of hawks", real: true, n: "Real, and modern: birdwatchers' name for hawks circling on warm rising air, like a pot on the boil."},
    r2: {p: "a hush of herons", real: false, n: "Made up. It's a siege of herons."},
    m: [["lions", "pride"], ["foxes", "skulk"], ["leopards", "leap"], ["tigers", "streak"]]
  },
  /* Wed */ {
    g1: {a: "rabbits", c: "bury", o: ["sounder", "kindle", "cete"], n: "From the Book of St Albans, where rabbits are conies. Warren is the everyday word."},
    g2: {a: "cats", c: "glaring", o: ["leap", "skulk", "romp"], n: "Also a clowder. Both are old, and both suit cats."},
    r1: {p: "a pandemonium of parrots", real: true, n: "Real and modern, and anyone who's met parrots will agree."},
    r2: {p: "a twitch of rabbits", real: false, n: "Made up. Try a bury, a colony or a warren."},
    m: [["frogs", "army"], ["toads", "knot"], ["vipers", "nest"], ["crocodiles", "float"]]
  },
  /* Thu */ {
    g1: {a: "ponies", c: "string", o: ["leash", "yoke", "harras"], n: "Used for horses or ponies kept and ridden together."},
    g2: {a: "greyhounds", c: "leash", o: ["string", "yoke", "trip"], n: "A leash is three greyhounds: as many as a huntsman held on one lead."},
    r1: {p: "a harras of horses", real: true, n: "Real. From an old French word for a stud farm."},
    r2: {p: "a canter of colts", real: false, n: "Made up. It's a rag of colts."},
    m: [["sheep", "flock"], ["cattle", "drove"], ["goats", "trip"], ["donkeys", "pace"]]
  },
  /* Fri */ {
    g1: {a: "magpies", c: "tidings", o: ["muster", "charm", "host"], n: "Magpies were thought to bring news, good or bad: one for sorrow, two for joy."},
    g2: {a: "goldfinches", c: "charm", o: ["tidings", "murder", "siege"], n: "Charm was an old word for a blend of voices or birdsong."},
    r1: {p: "an ostentation of peacocks", real: true, n: "Real. Also a muster of peacocks."},
    r2: {p: "a nattering of nightingales", real: false, n: "Made up. It's a watch of nightingales."},
    m: [["lapwings", "deceit"], ["woodcocks", "fall"], ["snipe", "wisp"], ["choughs", "chattering"]]
  },
  /* Sat */ {
    g1: {a: "jellyfish", c: "smack", o: ["bloat", "raft", "bed"], n: "A modern one. Also a bloom of jellyfish."},
    g2: {a: "hippos", c: "bloat", o: ["smack", "bask", "crash"], n: "A modern one, and hard to argue with."},
    r1: {p: "a zeal of zebras", real: true, n: "Real. Also a dazzle of zebras."},
    r2: {p: "a lounge of lizards", real: false, n: "Made up for today."},
    m: [["rhinoceroses", "crash"], ["flamingos", "flamboyance"], ["giraffes", "journey"], ["hyenas", "cackle"]]
  },
  /* Sun: people and jobs */ {
    g1: {a: "friars", c: "skulk", o: ["superfluity", "sentence", "bench"], n: "A “skulke of freris” in the Book of St Albans: not a compliment."},
    g2: {a: "hunters", c: "blast", o: ["blush", "sentence", "faith"], n: "For the blast of the hunting horn."},
    r1: {p: "a blush of boys", real: true, n: "Real. The Book of St Albans has a “blush of boyes”."},
    r2: {p: "a scribble of clerks", real: false, n: "Made up for today."},
    m: [["porters", "safeguard"], ["stewards", "provision"], ["fishermen", "drift"], ["vicars", "prudence"]]
  },
  /* ---------- Week 4 ---------- */
  /* Mon */ {
    g1: {a: "ducks on the water", c: "paddling", o: ["skein", "nye", "covey"], n: "On the water they're a paddling; in flight, a team."},
    g2: {a: "teal", c: "spring", o: ["paddling", "sedge", "fall"], n: "For the way teal spring straight up off the water."},
    r1: {p: "a raft of otters", real: true, n: "Real, for sea otters floating together. On land, otters are a romp."},
    r2: {p: "a yawn of lions", real: false, n: "Made up. Lions are a pride."},
    m: [["bees", "swarm"], ["ants", "army"], ["gnats", "cloud"], ["locusts", "plague"]]
  },
  /* Tue */ {
    g1: {a: "wild boar", c: "sounder", o: ["skulk", "trip", "cete"], n: "Wild boar live in sounders, led by an old sow."},
    g2: {a: "penguins on land", c: "waddle", o: ["bask", "romp", "smack"], n: "On land, a waddle; at sea, a raft."},
    r1: {p: "a parliament of rooks", real: true, n: "Real. Rooks were said to hold ‘parliaments’ to judge wrongdoers."},
    r2: {p: "a giggle of goats", real: false, n: "Made up. Goats are a trip or a tribe."},
    m: [["mice", "mischief"], ["bats", "cauldron"], ["cockroaches", "intrusion"], ["rattlesnakes", "rhumba"]]
  },
  /* Wed */ {
    g1: {a: "storks", c: "mustering", o: ["siege", "wedge", "fall"], n: "A “mustering of storks” is in the Book of St Albans."},
    g2: {a: "swallows", c: "flight", o: ["mustering", "wisp", "bevy"], n: "Simple, but old."},
    r1: {p: "a scurry of squirrels", real: true, n: "Real. A squirrel's nest is a drey."},
    r2: {p: "a snuffle of pigs", real: false, n: "Made up. Pigs are a drift or a litter; wild boar, a sounder."},
    m: [["kangaroos", "mob"], ["wolves", "pack"], ["fish", "shoal"], ["whales", "pod"]]
  },
  /* Thu */ {
    g1: {a: "lapwings", c: "deceit", o: ["descent", "watch", "muster"], n: "Lapwings pretend to be hurt to lead you away from their nests."},
    g2: {a: "nightingales", c: "watch", o: ["deceit", "charm", "murder"], n: "Perhaps because they sing through the night."},
    r1: {p: "an array of hedgehogs", real: true, n: "Real. A prickle of hedgehogs is recorded too."},
    r2: {p: "a doodle of poodles", real: false, n: "Made up. Dogs come in packs, puppies in litters."},
    m: [["badgers", "cete"], ["moles", "labour"], ["otters", "romp"], ["ferrets", "business"]]
  },
  /* Fri */ {
    g1: {a: "bitterns", c: "sedge", o: ["siege", "gulp", "wisp"], n: "Bitterns hide in the sedge and reeds, so it fits."},
    g2: {a: "cormorants", c: "gulp", o: ["sedge", "spring", "descent"], n: "A modern one. Watch a cormorant swallow a fish and you'll see why."},
    r1: {p: "a wisp of snipe", real: true, n: "Real, and old."},
    r2: {p: "a dabble of ducks", real: false, n: "Made up. Ducks on the water are a paddling."},
    m: [["geese in flight", "skein"], ["swans in flight", "wedge"], ["partridges", "covey"], ["pheasants", "nye"]]
  },
  /* Sat */ {
    g1: {a: "gorillas", c: "band", o: ["pride", "crash", "bloat"], n: "Gorillas live in family bands led by a silverback."},
    g2: {a: "baboons", c: "congress", o: ["band", "coalition", "tower"], n: "Also a troop. Congress suits their noisy meetings."},
    r1: {p: "a bloom of jellyfish", real: true, n: "Real, and the term scientists use for a big outbreak."},
    r2: {p: "a stampede of snails", real: false, n: "Made up, for obvious reasons."},
    m: [["elephants", "parade"], ["camels", "caravan"], ["buffalo", "obstinacy"], ["crocodiles", "bask"]]
  },
  /* Sun: people and jobs */ {
    g1: {a: "lawyers", c: "eloquence", o: ["sentence", "doctrine", "worship"], n: "An “eloquens of lawyeris” in the Book of St Albans."},
    g2: {a: "beggars", c: "fighting", o: ["blast", "blush", "hastiness"], n: "Not kind, but medieval lists rarely were."},
    r1: {p: "a promise of tapsters", real: true, n: "Real, from the Book of St Albans. Tapsters served the ale."},
    r2: {p: "a fidget of tailors", real: false, n: "Made up. The real one is a disguising of tailors."},
    m: [["judges", "sentence"], ["doctors", "doctrine"], ["bishops", "bench"], ["friars", "skulk"]]
  }
];
