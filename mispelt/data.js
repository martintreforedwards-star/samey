// Mispelt puzzles: one week, Monday first. The game picks today's entry by weekday.
// Difficulty dots rise Monday (1) to Friday (5); weekends are 3.
// Every answer comes with a note (n): a short story about the word, shown after answering.
// The aim: the difficulty comes from how odd English spelling is, never from making anyone feel bad.
//
// Five rounds a day, always in this order:
//   std    = Standard spelling   c = standard spelling, x = two other spellings (wrong in British dictionaries too)
//   blame  = Blame the scholars  w = the word, i = position (from 0) of the letter that was added on purpose and is never said
//   became = Became right        q = the old form in a sentence, c = the word now, x = two other words
//   sound  = Sound-alikes        s = sentence with ___ for the gap, c = spelling that fits, x = the other sound-alike(s)
//   uk     = British or American b = British, a = American, ctx (optional) = which meaning
//   long   = Long word (Fridays only, instead of uk)  c, x as for std
const DOTS = [1, 2, 3, 4, 5, 3, 3];
const DAYS = [
  /* Mon */ {
    std: {c: "separate", x: ["seperate", "separete"], n: "From Latin <i>separare</i>: <i>se-</i> “apart” + <i>parare</i> “to prepare”. That <i>par</i> is why it isn't “seperate”, the version almost everyone reaches for."},
    blame: {w: "debt", i: 2, n: "In the Middle Ages it was <i>dette</i>, borrowed from French. In the 1500s scholars slipped in a <b>b</b> to show off its Latin roots (<i>debitum</i>). Nobody has ever said it."},
    became: {q: "Pease porridge hot! People heard “pease” as a plural, and invented a word for just one.", c: "pea", x: ["pod", "peanut"], n: "<i>Pease</i> was one pea, from Old English <i>pise</i>. The final s sounded plural, so in the 1600s a single <b>pea</b> was born. Pease pudding still keeps the old word."},
    sound: {s: "We need more envelopes from the ___ cupboard.", c: "stationery", x: ["stationary"], n: "Both come from Latin <i>statio</i>, “standing”. A <i>stationer</i> was a bookseller with a fixed stall, unlike the pedlars who wandered about. Their paper and pens became <b>stationery</b>."},
    uk: {b: "colour", a: "color", n: "Noah Webster dropped the u in his 1828 American dictionary. Britain kept the Norman French <i>-our</i>. The Latin original, <i>color</i>, never had a u at all."}
  },
  /* Tue */ {
    std: {c: "weird", x: ["wierd", "weerd"], n: "From Old English <i>wyrd</i>, “fate”. Macbeth's Weird Sisters are the Fates, not just odd. The meaning “strange” only arrived in the 1800s, inspired by them."},
    blame: {w: "island", i: 1, n: "Old English <i>iegland</i> had no s. In the 1500s people assumed it came from <i>isle</i> (Latin <i>insula</i>) and added one. The two words were never related."},
    became: {q: "In the 1400s you'd have tied on a <i>napron</i> before cooking.", c: "apron", x: ["napkin", "bib"], n: "“A napron” was heard as “an apron”, and the n slid across. <i>Napkin</i> comes from the same Old French <i>nape</i>, “cloth”, which is where that n came from."},
    sound: {s: "The dragon slept on a ___ of gold.", c: "hoard", x: ["horde"], n: "<b>Hoard</b> is Old English <i>hord</i>, a treasure store. <b>Horde</b> arrived via Polish from a Turkic word for a camp or army, <i>ordu</i>, the same root as <i>Urdu</i>, “language of the camp”."},
    uk: {b: "centre", a: "center", n: "Webster again: he switched <i>-re</i> to <i>-er</i>. But it wasn't new. Shakespeare's First Folio of 1623 spells it <i>center</i>, and Britain only settled on <i>centre</i> later."}
  },
  /* Wed */ {
    std: {c: "mnemonic", x: ["mneumonic", "nemonic"], n: "From Greek <i>mnēmē</i>, “memory”. The same root, with <i>a-</i> for “not”, gives us <i>amnesia</i> and <i>amnesty</i>, an official forgetting."},
    blame: {w: "receipt", i: 5, n: "Medieval English had <i>receite</i>. The silent <b>p</b> was added to match Latin <i>recepta</i>. Its cousin <i>recipe</i>, from the same Latin verb, kept the p and says it."},
    became: {q: "People once gave each other an <i>ekename</i>.", c: "nickname", x: ["surname", "name tag"], n: "<i>Eke</i> meant “also” (it survives in “eke out”), so an ekename was an extra name. “An ekename” became “a nekename”: here the n jumped the other way from apron."},
    sound: {s: "Red wine is the perfect ___ to cheese.", c: "complement", x: ["compliment"], n: "Both come from Latin <i>complementum</i>, “something that completes”. <b>Compliment</b> took a detour through Italian and Spanish politeness, and by the 1600s the two had split."},
    uk: {b: "cheque", a: "check", ctx: "for paying", n: "It began as <i>check</i>, a slip that checks against fraud. The British <b>cheque</b> spelling took hold in the 1800s, probably helped along by <i>exchequer</i>."}
  },
  /* Thu */ {
    std: {c: "rhythm", x: ["rythm", "rhythym"], n: "From Greek <i>rhythmos</i>, “flow”. The <i>rh</i> is a Greek habit, as in <i>rhinoceros</i>. And look: not a single a, e, i, o or u."},
    blame: {w: "doubt", i: 3, n: "Medieval English said and wrote <i>doute</i>. Scholars added a <b>b</b> from Latin <i>dubitare</i>. Its relative <i>dubious</i>, borrowed straight from Latin, says the b out loud."},
    became: {q: "A medieval contest needed a <i>noumpere</i> to settle disputes.", c: "umpire", x: ["herald", "marshal"], n: "From Old French <i>nonper</i>, “not equal”: the odd one out, on neither side. “A noumpere” became “an umpire”, just like apron."},
    sound: {s: "The ___ of the story: never trust a fox.", c: "moral", x: ["morale"], n: "Both are French. English added the e to <b>morale</b> (team spirit) to keep the stress on the end. In French itself, both are spelt <i>moral</i>."},
    uk: {b: "aluminium", a: "aluminum", n: "Humphry Davy named it <i>alumium</i>, then <i>aluminum</i>. In 1812 it became <i>aluminium</i> to match sodium and potassium. America stuck with an earlier version."}
  },
  /* Fri */ {
    std: {c: "fuchsia", x: ["fuschia", "fushia"], n: "Named after the German botanist Leonhart Fuchs (1501–1566). The awkward <i>chs</i> is just his surname, so blame him, not yourself."},
    blame: {w: "ptarmigan", i: 0, n: "From Scottish Gaelic <i>tàrmachan</i>. In 1684 a writer added a <b>p</b>, probably thinking of Greek words like <i>pteron</i>, “wing”. The bird is no relation of the pterodactyl."},
    became: {q: "Falstaff loved a cup of <i>sherris</i>, a wine named after a Spanish town.", c: "sherry", x: ["port", "sangria"], n: "<i>Sherris</i> came from <i>Xeres</i>, now Jerez. It sounded plural, so a single <b>sherry</b> was coined, the same trick as pea."},
    sound: {s: "Please be ___: it's a surprise party.", c: "discreet", x: ["discrete"], n: "Both come from Latin <i>discretus</i>, “separated”. For a long time they were one word. The spellings split by meaning: <b>discreet</b> for careful, <b>discrete</b> for separate."},
    long: {c: "floccinaucinihilipilification", x: ["floccinaucinihilipilifacation", "flocinaucinihilipilification"], n: "The act of judging something worthless. A joke word stitched from four Latin words for a trifle, <i>flocci, nauci, nihili, pili</i>, all listed together in an old Eton Latin grammar. William Shenstone used it in 1741."}
  },
  /* Sat */ {
    std: {c: "liaison", x: ["liason", "liaision"], n: "French, from <i>lier</i>, “to bind”, from Latin <i>ligare</i>. The same root ties together <i>ligament</i> and <i>league</i>."},
    blame: {w: "scissors", i: 1, n: "Middle English <i>sisoures</i>, from Old French. A <b>c</b> crept in because people linked it to Latin <i>scindere</i>, “to cut” (as in <i>rescind</i>). They were wrong."},
    became: {q: "An <i>ewt</i> was a small creature found in ponds.", c: "newt", x: ["eel", "toad"], n: "“An ewt” became “a newt”. Its cousin <i>eft</i> comes from the very same Old English word, <i>efete</i>, without the stray n."},
    sound: {s: "Keep a tight ___ on the spending.", c: "rein", x: ["reign", "rain"], n: "It's horses, not kings: <b>reins</b> steer a horse. That's why it's “free rein” too, though “free reign” is everywhere."},
    uk: {b: "plough", a: "plow", n: "A surprise: <i>plow</i> was the usual spelling in England until the 1700s. Britain then moved to <b>plough</b>, while America kept the old one."}
  },
  /* Sun */ {
    std: {c: "embarrass", x: ["embarass", "embarras"], n: "Two rs and two ss. Through French from a word meaning to block or hamper. For its first 150 years in English it meant to hinder or perplex. Feeling awkward only came in the 1820s."},
    blame: {w: "rhyme", i: 1, n: "Medieval English wrote <i>rime</i>. Around 1600 an <b>h</b> was added by association with <i>rhythm</i>. Coleridge's <i>Rime of the Ancient Mariner</i> uses the old spelling on purpose."},
    became: {q: "Norman French gave English the <i>cherise</i>.", c: "cherry", x: ["chervil", "cress"], n: "<i>Cherise</i> sounded plural, so a single <b>cherry</b> was coined around 1300. The French kept theirs: <i>cerise</i>."},
    sound: {s: "She would ___ over old maps for hours.", c: "pore", x: ["pour"], n: "To <b>pore</b> over something is a medieval verb of unknown origin. It has nothing to do with skin pores (from Greek) or with pouring."},
    uk: {b: "tyre", a: "tire", n: "<i>Tire</i> is the older spelling, in England too (probably short for <i>attire</i>, the wheel's clothing). Britain revived <b>tyre</b> in the 1800s, just in time for rubber ones."}
  }
];
