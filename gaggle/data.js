// Gaggle puzzles, by day of the week (Monday first). Sunday is people and jobs.
// DAYS is a run of whole weeks; the game picks today's weekday, cycling through the weeks.
// Five rounds a day:
//   g1, g2 = "Which group?"   a = who, c = the right collective noun, o = three wrong ones, n = a note shown after
//   r1, r2 = "Real or made up?"   p = the phrase, real = true/false, n = note
//   m      = "Match them": four [who, noun] pairs
// Many of the old ones come from the Book of St Albans (1486), a hunting and hawking manual
// that listed "terms of venery". Fakes are made up for this game.
const DAYS = [
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
  }
];
