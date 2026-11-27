// Antepostee (at samey.uk/fixy/): a daily game of prefixes and suffixes. Unlisted preview.
// The name is ante- (before) + post (after) + -ee: a prefix, a root and a suffix.
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
  {s: "legible", c: "il", o: ["un", "in", "dis"], n: "Il- before an l. Legible comes from Latin legere, to read."},
  {s: "logical", c: "il", o: ["un", "in", "dis"], n: "In- becomes il- before an l, as in illegal."},
  {s: "polite", c: "im", o: ["un", "in", "dis"], n: "In- becomes im- before a p."},
  {s: "rational", c: "ir", o: ["un", "in", "dis"], n: "In- becomes ir- before an r."},
  {s: "appear", c: "dis", o: ["un", "in", "mis"], n: "Dis- often means the reverse of something: disappear, disconnect, dislike."},
  {s: "happy", c: "un", o: ["in", "dis", "im"], n: "Un- is the Old English prefix and the most common way to say not in English."},
  {s: "behave", c: "mis", o: ["un", "dis", "in"], n: "Mis- means badly or wrongly: misbehave, misspell, mislead."},
  {s: "visible", c: "in", o: ["un", "dis", "im"], n: "In- is the Latin not, usually found on words that came from Latin."},
  {s: "fortunate", c: "un", o: ["in", "dis", "mis"], n: "Unfortunate it is. Misfortune is a noun, but there's no misfortunate."},
  {s: "connect", c: "dis", o: ["un", "in", "mis"], n: "Dis- undoes the action."},
  {s: "lead", c: "mis", o: ["un", "dis", "in"], n: "Mislead: lead the wrong way."},
  {s: "accurate", c: "in", o: ["un", "dis", "im"], n: "In- before a vowel stays in-: inaccurate, inactive, inedible."},
  {s: "mortal", c: "im", o: ["un", "in", "dis"], n: "Im- before m, as in immature and immobile."},
  {s: "legitimate", c: "il", o: ["un", "in", "dis"], n: "Il- before l again."},
  {s: "resistible", c: "ir", o: ["un", "in", "dis"], n: "Ir- before r. Irresistible is far more common than its positive."}
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
  {a: "-esque", c: "in the style of", o: ["smaller than", "full of", "the study of"], n: "Through French from Italian -esco: Kafkaesque, picturesque."},
  {a: "circum-", c: "around", o: ["across", "after", "before"], n: "Latin. To circumnavigate is to sail around."},
  {a: "trans-", c: "across", o: ["around", "beneath", "before"], n: "Latin. Transatlantic means across the Atlantic."},
  {a: "poly-", c: "many", o: ["few", "half", "one"], n: "Greek. A polygon has many angles."},
  {a: "mono-", c: "one", o: ["many", "two", "none"], n: "Greek. A monorail runs on one rail."},
  {a: "micro-", c: "small", o: ["large", "far", "fast"], n: "Greek <i>mikros</i>. Its opposite is macro-."},
  {a: "-phile", c: "lover of", o: ["fear of", "study of", "rule by"], n: "Greek <i>philos</i>, loving. A bibliophile loves books."},
  {a: "auto-", c: "self", o: ["other", "car", "machine"], n: "Greek. An automobile moves by itself; an autograph is written by yourself."},
  {a: "inter-", c: "between", o: ["within", "beyond", "against"], n: "Latin. International means between nations."},
  {a: "intra-", c: "within", o: ["between", "outside", "above"], n: "Latin. An intranet is a network within one organisation."},
  {a: "super-", c: "above, beyond", o: ["below", "beside", "before"], n: "Latin. Supernatural means beyond nature."},
  {a: "post-", c: "after", o: ["before", "during", "against"], n: "Latin. A postscript is written after the letter."},
  {a: "retro-", c: "backwards", o: ["forwards", "again", "new"], n: "Latin. Retrospect is looking back."},
  {a: "-graphy", c: "writing, drawing", o: ["study", "measuring", "speaking"], n: "Greek <i>graphein</i>, to write: biography, geography, photography (drawing with light)."},
  {a: "-meter", c: "measure", o: ["writing", "fear", "sound"], n: "Greek <i>metron</i>: thermometer, speedometer, perimeter."}
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
  {a: "over-", w: ["overeat", "overdo", "overflow"], odd: "overt", n: "Overt comes from Old French ouvert, open, the opposite of covert."},
  {a: "de-", w: ["defrost", "decode", "deflate"], odd: "devil", n: "Devil comes from Greek <i>diabolos</i>, slanderer."},
  {a: "mid-", w: ["midnight", "midway", "midfield"], odd: "midge", n: "Midge is Old English <i>mycg</i>, a gnat."},
  {a: "tri-", w: ["triangle", "tricycle", "trident"], odd: "trifle", n: "Trifle comes from Old French <i>trufle</i>, a trick or mockery."},
  {a: "bi-", w: ["bicycle", "biannual", "bilingual"], odd: "bigot", n: "Bigot comes from French, of unknown origin."},
  {a: "-ment", w: ["enjoyment", "payment", "movement"], odd: "cement", n: "Cement comes whole from Latin <i>caementum</i>, rubble."},
  {a: "-age", w: ["shortage", "breakage", "postage"], odd: "cabbage", n: "Cabbage comes from Old French <i>caboche</i>, head."},
  {a: "-ism", w: ["heroism", "criticism", "optimism"], odd: "prism", n: "Prism comes from Greek <i>prisma</i>, something sawn."},
  {a: "non-", w: ["nonsense", "nonstop", "non-fiction"], odd: "nonce", n: "Nonce comes from Middle English <i>for then anes</i>, for the one (occasion), which got split the wrong way."},
  {a: "out-", w: ["outrun", "outgrow", "outlive"], odd: "outrage", n: "Outrage comes from Old French <i>outrage</i>, from <i>outre</i>, beyond. Nothing to do with out or rage."},
  {a: "fore-", w: ["forecast", "forehead", "foresee"], odd: "forest", n: "Forest comes from Latin <i>forestis</i>, of uncertain origin."},
  {a: "-ist", w: ["artist", "cyclist", "florist"], odd: "wrist", n: "Wrist is Old English: a joint, not a person."},
  {a: "-let", w: ["booklet", "piglet", "droplet"], odd: "scarlet", n: "Scarlet came through Old French from Persian <i>saqirlāt</i>, a rich cloth."},
  {a: "en-", w: ["enrich", "enlarge", "endanger"], odd: "enough", n: "Enough is Old English <i>genōg</i>."},
  {a: "co-", w: ["co-pilot", "cooperate", "coexist"], odd: "cobra", n: "Cobra is Portuguese, short for <i>cobra de capello</i>, snake with a hood."}
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
  {r: "power", c: ["em", "ment"], w: "empowerment", o: [["un", "ful"], ["dis", "ness"], ["in", "ly"]], n: "En- becomes em- before p and b, just as in- becomes im-."},
  {r: "agree", c: ["dis", "ment"], w: "disagreement", o: [["un", "ful"], ["mis", "ness"], ["in", "ly"]], n: "Dis- reverses it, -ment turns the verb into a noun."},
  {r: "employ", c: ["un", "ment"], w: "unemployment", o: [["dis", "ful"], ["mis", "ness"], ["in", "able"]], n: "Un- plus -ment: the state of not being employed."},
  {r: "fair", c: ["un", "ness"], w: "unfairness", o: [["dis", "ment"], ["mis", "ly"], ["in", "able"]], n: "-ness turns an adjective into a noun."},
  {r: "lead", c: ["mis", "ing"], w: "misleading", o: [["un", "ful"], ["dis", "ness"], ["in", "able"]], n: "Mis- means wrongly; -ing makes it describe something."},
  {r: "appear", c: ["dis", "ance"], w: "disappearance", o: [["un", "ful"], ["mis", "ness"], ["in", "ly"]], n: "-ance turns a verb into a noun, as in performance."},
  {r: "friend", c: ["un", "ly"], w: "unfriendly", o: [["dis", "ness"], ["mis", "ful"], ["in", "able"]], n: "Here -ly makes an adjective, not an adverb."},
  {r: "rely", c: ["un", "able"], w: "unreliable", o: [["dis", "ful"], ["mis", "ness"], ["in", "ment"]], n: "The y turns to i before -able."},
  {r: "use", c: ["re", "able"], w: "reusable", o: [["dis", "ful"], ["un", "ment"], ["mis", "ness"]], n: "The e drops before -able."},
  {r: "popular", c: ["un", "ity"], w: "unpopularity", o: [["dis", "ment"], ["mis", "ness"], ["in", "ful"]], n: "-ity makes a noun from an adjective."},
  {r: "necessary", c: ["un", "ily"], w: "unnecessarily", o: [["dis", "ness"], ["mis", "ful"], ["in", "ment"]], n: "Two n's: one from un-, one from necessary. The y becomes i before -ly."},
  {r: "joy", c: ["en", "ment"], w: "enjoyment", o: [["un", "less"], ["dis", "ness"], ["mis", "ful"]], n: "En- makes a verb (to enjoy); -ment turns it back into a noun."},
  {r: "fortune", c: ["un", "ate"], w: "unfortunate", o: [["dis", "ful"], ["in", "ness"], ["re", "ly"]], n: "The e drops before -ate."},
  {r: "cover", c: ["re", "y"], w: "recovery", o: [["un", "ness"], ["dis", "ful"], ["mis", "ly"]], n: "Re- (again) plus -y, which turns the verb into a noun."},
  {r: "conscious", c: ["sub", "ly"], w: "subconsciously", o: [["un", "ment"], ["dis", "ful"], ["in", "able"]], n: "Sub- means below: below conscious thought."}
];

// Round 5a · Lost positives. w = the word, opp = the familiar negative, d = what it would mean, real = true/false, n = note.
const LOST = [
  {w: "gruntled", opp: "disgruntled", d: "pleased, contented", real: true, n: "Real, but only since P. G. Wodehouse joked in 1938 that someone was far from gruntled. Disgruntled never had an opposite: the dis- just made gruntle (to grumble) stronger."},
  {w: "petuous", opp: "impetuous", d: "calm, careful", real: false, n: "Made up. Impetuous comes whole from Latin impetus, an attack."},
  {w: "couth", opp: "uncouth", d: "polite, refined", real: true, n: "Real, from Old English cuth, known. Uncouth first meant unknown or strange."},
  {w: "traught", opp: "distraught", d: "calm, composed", real: false, n: "Made up. Distraught is a twist on distract, from Latin distractus, pulled apart."},
  {w: "kempt", opp: "unkempt", d: "neat, well combed", real: true, n: "Real, from Old English for combed."},
  {w: "sidious", opp: "insidious", d: "open and honest", real: false, n: "Made up. Insidious comes from Latin insidiae, an ambush."},
  {w: "ruly", opp: "unruly", d: "orderly, well behaved", real: true, n: "Real, from rule, but it faded away while unruly thrived."},
  {w: "ept", opp: "inept", d: "skilful, competent", real: true, n: "Real, just about: ept was made from inept as a joke in the 1930s, and some dictionaries now list it."},
  {w: "cognito", opp: "incognito", d: "under your own name", real: false, n: "Made up. Incognito came whole from Italian, from Latin <i>incognitus</i>, unknown."},
  {w: "ruth", opp: "ruthless", d: "pity, compassion", real: true, n: "Real: ruth meant pity in Middle English, from rue. Ruthless outlived it."},
  {w: "ane", opp: "inane", d: "sensible", real: false, n: "Made up. Inane comes whole from Latin <i>inanis</i>, empty."},
  {w: "wieldy", opp: "unwieldy", d: "easy to handle", real: true, n: "Real, from wield, though rare now."},
  {w: "combobulate", opp: "discombobulate", d: "to calm down or sort out", real: false, n: "Made up, though people use it as a joke. Discombobulate was itself an 1830s American joke word."},
  {w: "chalant", opp: "nonchalant", d: "worried, concerned", real: false, n: "Made up in English. Nonchalant came whole from French <i>non</i> + <i>chaloir</i>, to be concerned."}
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
  {a: "enthuse", b: "enthusiasm", c: "enthusiasm", n: "Enthusiasm came first. Enthuse is a 19th-century back-formation that some people still dislike."},
  {a: "babysit", b: "babysitter", c: "babysitter", n: "Babysitter came first, in the 1930s. Babysit was made from it about ten years later."},
  {a: "donate", b: "donation", c: "donation", n: "Donation is centuries older. Donate was back-formed from it in the late 1700s."},
  {a: "diagnose", b: "diagnosis", c: "diagnosis", n: "Diagnosis came first. Diagnose was back-formed from it in the 1800s."},
  {a: "teach", b: "teacher", c: "teach", n: "Teach is Old English. Teacher was made from it, the usual way round."},
  {a: "sculpt", b: "sculptor", c: "sculptor", n: "Sculptor came first. Sculpt was back-formed in the 1800s."},
  {a: "swindle", b: "swindler", c: "swindler", n: "Swindler came first, from German <i>Schwindler</i>, in the 1700s. Swindle was made from it."},
  {a: "peddle", b: "pedlar", c: "pedlar", n: "Pedlar is the older word. Peddle was back-formed from it."}
];
