// Fixy (working name): a daily game of prefixes and suffixes. Unlisted preview.
// Each list is one round. Day N takes item N of each list, starting again from the top when a list runs out.
// Round 5 alternates: even days are Lost positives, odd days are Which came first?
// Please check new etymologies on Etymonline before they go in, as for Roots.

// Round 1 · Which one fits? s = the word without its prefix, c = the right prefix, o = three wrong ones, n = note.
// Only use words where just one of the four makes a real, current word.
const PRE = [
  {s: "legal", c: "il", o: ["un", "in", "dis"], n: "In- becomes il- before an l. It's the same prefix, just easier to say."},
  {s: "possible", c: "im", o: ["un", "in", "dis"], n: "In- turns into im- before p, b and m, because your lips are already closed."},
  {s: "regular", c: "ir", o: ["un", "in", "dis"], n: "In- becomes ir- before an r: irregular, irrelevant, irresistible."},
  {s: "agree", c: "dis", o: ["un", "in", "mis"], n: "Dis- often means the reverse of an action: disagree, disappear, disobey."},
  {s: "patient", c: "im", o: ["un", "in", "dis"], n: "Im- again, before a p."},
  {s: "responsible", c: "ir", o: ["un", "in", "dis"], n: "Another ir- before an r."},
  {s: "literate", c: "il", o: ["un", "in", "dis"], n: "Il- before an l, as in illegal and illogical."},
  {s: "comfortable", c: "un", o: ["in", "dis", "im"], n: "Un- is English's own prefix, and over the centuries it has spread to French-born words like comfortable too."},
  {s: "honest", c: "dis", o: ["un", "in", "im"], n: "Dishonest came into English from French, already joined up."},
  {s: "mature", c: "im", o: ["un", "in", "dis"], n: "Im- before an m."},
  {s: "relevant", c: "ir", o: ["un", "in", "dis"], n: "Ir- before an r."},
  {s: "understand", c: "mis", o: ["dis", "un", "in"], n: "Mis- means wrongly or badly: misspell, mislead, misunderstand."},
  {s: "complete", c: "in", o: ["un", "dis", "im"], n: "Plain in- before a c. It only changes before l, r and the lip sounds."},
  {s: "legible", c: "il", o: ["un", "in", "dis"], n: "Il- before an l. Legible comes from Latin legere, to read."}
];

// Round 2 · What does it mean? a = the prefix or suffix, c = its meaning, o = three wrong meanings, n = note.
const MEAN = [
  {a: "peri-", c: "around", o: ["within", "beneath", "against"], n: "From Greek. A perimeter is the measure around something; a periscope looks around."},
  {a: "hemi-", c: "half", o: ["whole", "twice", "many"], n: "From Greek, as in hemisphere. Latin's version is semi-."},
  {a: "-cide", c: "killing", o: ["fear of", "study of", "rule by"], n: "From Latin caedere, to kill: pesticide, regicide, homicide."},
  {a: "-phobia", c: "fear of", o: ["love of", "study of", "killing"], n: "From Greek phobos, fear. Its opposite is -philia, love of."},
  {a: "-ology", c: "study of", o: ["fear of", "rule by", "writing"], n: "From Greek logos, word or reason."},
  {a: "-cracy", c: "rule by", o: ["study of", "love of", "fear of"], n: "From Greek kratos, power: democracy is rule by the people (demos)."},
  {a: "sub-", c: "under", o: ["over", "across", "after"], n: "Latin, as in submarine and subway."},
  {a: "ante-", c: "before", o: ["against", "after", "beside"], n: "Easily muddled with anti-, against. An anteroom is the room before another."},
  {a: "anti-", c: "against", o: ["before", "beyond", "within"], n: "Greek. Its lookalike ante-, before, is Latin."},
  {a: "-ectomy", c: "cutting out", o: ["inflammation of", "study of", "fear of"], n: "From Greek ektome, a cutting out: appendectomy, tonsillectomy."},
  {a: "-itis", c: "inflammation", o: ["cutting out", "a fear", "a growth"], n: "From Greek. Now also used for jokey made-up illnesses, like Mondayitis."},
  {a: "mal-", c: "badly", o: ["well", "again", "twice"], n: "From Latin male, badly: malfunction, malnourished, malpractice."},
  {a: "pseudo-", c: "false", o: ["new", "hidden", "small"], n: "From Greek pseudes, false. A pseudonym is a false name."},
  {a: "-esque", c: "in the style of", o: ["smaller than", "full of", "the study of"], n: "Through French from Italian -esco: Kafkaesque, picturesque."}
];

// Round 3 · Fake affix. a = the prefix or suffix (with its hyphen), w = three words where it really is that affix,
// odd = a word where the same letters are just part of the word, n = note on the odd one.
const ODD = [
  {a: "re-", w: ["rebuild", "rewrite", "reheat"], odd: "ready", n: "Ready comes from Old English ræde, prepared. Nothing is being done again."},
  {a: "un-", w: ["undo", "unkind", "unlock"], odd: "uncle", n: "Uncle comes from Latin avunculus, a mother's brother."},
  {a: "dis-", w: ["dislike", "disagree", "disobey"], odd: "dish", n: "Dish comes from Latin discus, a plate."},
  {a: "pre-", w: ["preview", "prepay", "preheat"], odd: "press", n: "Press comes from Latin pressare, to keep pressing."},
  {a: "-er", w: ["baker", "teacher", "singer"], odd: "corner", n: "A corner isn't someone who corns. It comes from Latin cornu, a horn."},
  {a: "-ly", w: ["quickly", "slowly", "softly"], odd: "ugly", n: "Ugly comes from Old Norse uggligr, dreadful. There's no ug for it to be done in a manner of."},
  {a: "-ness", w: ["kindness", "sadness", "darkness"], odd: "harness", n: "Harness comes from Old French harneis, equipment."},
  {a: "mis-", w: ["mislead", "misspell", "misplace"], odd: "mist", n: "Mist is an Old English word all of its own."},
  {a: "in-", w: ["invisible", "incorrect", "inactive"], odd: "inch", n: "Inch comes from Latin uncia, a twelfth, which also gave us ounce."},
  {a: "-less", w: ["careless", "helpless", "endless"], odd: "bless", n: "Bless comes from Old English bletsian, to mark with blood."},
  {a: "-ish", w: ["childish", "reddish", "foolish"], odd: "radish", n: "Radish comes from Latin radix, a root."},
  {a: "-dom", w: ["kingdom", "freedom", "boredom"], odd: "random", n: "Random comes from Old French randon, speed or force: at random first meant at great speed."},
  {a: "-ling", w: ["duckling", "gosling", "seedling"], odd: "ceiling", n: "A ceiling isn't a little ceil. It comes from an old verb ceil, to line a room."},
  {a: "over-", w: ["overeat", "overdo", "overflow"], odd: "overt", n: "Overt comes from Old French ouvert, open, the opposite of covert."}
];

// Round 4 · Build it. r = the root, c = [prefix, suffix] that make a real word, w = that word as spelt,
// o = three [prefix, suffix] pairs that don't make a real word, n = note.
const BUILD = [
  {r: "break", c: ["un", "able"], w: "unbreakable", o: [["dis", "ful"], ["mis", "ness"], ["in", "ly"]], n: "Un- and -able are the busiest pair in English: unthinkable, unstoppable, unbeatable."},
  {r: "help", c: ["un", "ful"], w: "unhelpful", o: [["dis", "less"], ["mis", "ness"], ["in", "able"]], n: "Unhelpful and helpless sit side by side but mean different things."},
  {r: "kind", c: ["un", "ness"], w: "unkindness", o: [["dis", "ful"], ["mis", "ly"], ["in", "able"]], n: "Kind first meant natural, or of the same family, as in mankind and kin."},
  {r: "comfort", c: ["un", "able"], w: "uncomfortable", o: [["mis", "ful"], ["in", "ness"], ["re", "ly"]], n: "Comfort first meant strengthening, from Latin fortis, strong."},
  {r: "agree", c: ["dis", "able"], w: "disagreeable", o: [["un", "ful"], ["mis", "ness"], ["in", "ly"]], n: "Disagreeable first meant not in harmony; the sense of grumpy came later."},
  {r: "forget", c: ["un", "able"], w: "unforgettable", o: [["dis", "ful"], ["mis", "ness"], ["in", "ly"]], n: "The t doubles: unforgettable, not unforgetable."},
  {r: "understand", c: ["mis", "ing"], w: "misunderstanding", o: [["dis", "able"], ["un", "ful"], ["in", "ness"]], n: "Built in three parts: mis + understand + ing."},
  {r: "place", c: ["re", "ment"], w: "replacement", o: [["un", "ful"], ["dis", "ness"], ["in", "ly"]], n: "Re- plus -ment turns a verb into the thing that does the job again."},
  {r: "cover", c: ["dis", "y"], w: "discovery", o: [["un", "ful"], ["mis", "ness"], ["in", "able"]], n: "To discover was literally to take the cover off."},
  {r: "friend", c: ["be", "ed"], w: "befriended", o: [["un", "ful"], ["dis", "ish"], ["mis", "able"]], n: "Be- makes a verb from a noun: befriend, bewitch, belittle."},
  {r: "grace", c: ["dis", "ful"], w: "disgraceful", o: [["un", "able"], ["mis", "ly"], ["in", "ness"]], n: "Disgrace first meant being out of favour."},
  {r: "honest", c: ["dis", "y"], w: "dishonesty", o: [["un", "ful"], ["mis", "ness"], ["in", "ly"]], n: "Honest comes from Latin honestus, honourable."},
  {r: "believe", c: ["un", "able"], w: "unbelievable", o: [["dis", "ful"], ["mis", "ness"], ["in", "ly"]], n: "The e drops before -able: unbelievable."},
  {r: "power", c: ["em", "ment"], w: "empowerment", o: [["un", "ful"], ["dis", "ness"], ["in", "ly"]], n: "En- becomes em- before p and b, just as in- becomes im-."}
];

// Round 5a · Lost positives. w = the word, opp = the familiar negative, d = what it would mean, real = true/false, n = note.
const LOST = [
  {w: "gruntled", opp: "disgruntled", d: "pleased, contented", real: true, n: "Real, but only since P. G. Wodehouse joked in 1938 that someone was far from gruntled. Disgruntled never had an opposite: the dis- just made gruntle (to grumble) stronger."},
  {w: "petuous", opp: "impetuous", d: "calm, careful", real: false, n: "Made up. Impetuous comes whole from Latin impetus, an attack."},
  {w: "couth", opp: "uncouth", d: "polite, refined", real: true, n: "Real, from Old English cuth, known. Uncouth first meant unknown or strange."},
  {w: "traught", opp: "distraught", d: "calm, composed", real: false, n: "Made up. Distraught is a twist on distract, from Latin distractus, pulled apart."},
  {w: "kempt", opp: "unkempt", d: "neat, well combed", real: true, n: "Real, from Old English for combed."},
  {w: "sidious", opp: "insidious", d: "open and honest", real: false, n: "Made up. Insidious comes from Latin insidiae, an ambush."},
  {w: "ruly", opp: "unruly", d: "orderly, well behaved", real: true, n: "Real, from rule, but it faded away while unruly thrived."}
];

// Round 5b · Which came first? a and b = the pair, c = the older one, n = note.
// Many are back-formations: the longer word came first and the shorter was clipped from it.
const FIRST = [
  {a: "edit", b: "editor", c: "editor", n: "Editor came first. Edit was clipped from it later, a back-formation."},
  {a: "burgle", b: "burglar", c: "burglar", n: "Burglar is centuries old. Burgle was a jokey Victorian back-formation that stuck."},
  {a: "invent", b: "inventor", c: "invent", n: "No trick this time: the verb came first, as you'd expect."},
  {a: "televise", b: "television", c: "television", n: "Television came first. Televise was made from it in the 1920s."},
  {a: "escalate", b: "escalator", c: "escalator", n: "Escalator was a trademark from 1900. Escalate was made from it later."},
  {a: "translate", b: "translator", c: "translate", n: "The verb came first here, the ordinary way round."},
  {a: "enthuse", b: "enthusiasm", c: "enthusiasm", n: "Enthusiasm came first. Enthuse is a 19th-century back-formation that some people still dislike."}
];
