// Mither puzzles: the tongues of these islands, living, revived, hidden, new and gone.
// One theme a day, five multiple-choice questions, and a short note (n) after every answer.
// Each weekday has its own strand and works through a list of sets, one a week (see SLOTS at the end).
// Sunday is the Polari boss: one sentence, translated a word at a time.
//
// Each question: q = the question (HTML allowed), c = the right answer, x = three wrong answers, n = the note.
// Optional: big = a word or phrase shown large above the question.
// NOTE: written from general knowledge; every Celtic, Romani, Shelta and Polari item should be checked by a speaker before launch.
const DOTS = [1, 2, 3, 3, 4, 4, 5];
const THEMES = {
  tongue: {
    name: "Which tongue?", sub: "Good morning across the isles. Which language is this?",
    qs: [
      {big: "Bore da", q: "Which language?", c: "Welsh", x: ["Cornish", "Scottish Gaelic", "Manx"], n: "Welsh for good morning: <i>bore</i> “morning” + <i>da</i> “good”. Cornish uses the same <i>da</i>."},
      {big: "Madainn mhath", q: "Which language?", c: "Scottish Gaelic", x: ["Irish", "Manx", "Welsh"], n: "Gaelic for good morning. <i>Mhath</i> is a form of <i>math</i>, “good”, and the <i>mh</i> is said like a v."},
      {big: "Dia duit", q: "Which language?", c: "Irish", x: ["Scottish Gaelic", "Manx", "Cornish"], n: "The everyday Irish hello, literally “God to you”. The reply adds Mary: <i>Dia is Muire duit</i>."},
      {big: "Myttin da", q: "Which language?", c: "Cornish", x: ["Welsh", "Manx", "Scots"], n: "Cornish for good morning. Compare Welsh <i>bore da</i>: both end in <i>da</i>, “good”, because Cornish and Welsh are sisters."},
      {big: "Moghrey mie", q: "Which language?", c: "Manx", x: ["Scottish Gaelic", "Irish", "Cornish"], n: "Manx for good morning, a cousin of Gaelic <i>madainn mhath</i>. Manx was first written down by people who knew English spelling, so it looks unlike its Gaelic relatives on the page."}
    ]
  },
  cousin: {
    name: "Cousin words", sub: "One word across the Celtic languages. Which is the missing one?",
    qs: [
      {q: "<b>head</b>: Welsh <i>pen</i> · Cornish <i>penn</i> · Gaelic <i>ceann</i> · Irish <i>ceann</i> · Manx <b>?</b>", c: "kione", x: ["pen", "kenn", "kaan"], n: "Manx <i>kione</i>. Welsh and Cornish have <b>p</b> where the Gaelic languages have <b>c</b> or <b>k</b>: <i>pen</i> against <i>ceann</i>. That P/Q split is the oldest fault line in the Celtic family."},
      {q: "<b>water</b>: Welsh <i>dŵr</i> · Cornish <i>dowr</i> · Gaelic <i>uisge</i> · Irish <i>uisce</i> · Manx <b>?</b>", c: "ushtey", x: ["dowey", "uishk", "dooar"], n: "Manx <i>ushtey</i>. Whisky comes from Gaelic <i>uisge beatha</i>, “water of life”."},
      {q: "<b>house</b>: Welsh <i>tŷ</i> · Gaelic <i>taigh</i> · Irish <i>teach</i> · Manx <i>thie</i> · Cornish <b>?</b>", c: "chi", x: ["ty", "tagh", "thee"], n: "Cornish <i>chi</i>, written <i>chy</i> in old place names such as Chysauster, the Iron Age village near Penzance."},
      {q: "<b>black</b>: Welsh <i>du</i> · Gaelic <i>dubh</i> · Irish <i>dubh</i> · Manx <i>doo</i> · Cornish <b>?</b>", c: "du", x: ["dubh", "doo", "dogh"], n: "Cornish <i>du</i>, just like Welsh. On the Gaelic side, Dublin is Irish <i>Dubh Linn</i>, “black pool”."},
      {q: "<b>dog</b>: Welsh <i>ci</i> · Cornish <i>ki</i> · Gaelic <i>cù</i> · Manx <i>moddey</i> · Irish <b>?</b>", c: "madra", x: ["cù", "ki", "kione"], n: "Irish <i>madra</i>, which matches Manx <i>moddey</i> rather than Gaelic <i>cù</i>. Irish still has <i>cú</i> for a hound, as in the hero Cú Chulainn."}
    ]
  },
  map: {
    name: "Map it", sub: "Which language gave these places their names?",
    qs: [
      {big: "Inver-", q: "As in Inverness and Inveraray. Which language?", c: "Scottish Gaelic", x: ["Welsh", "Old Norse", "Scots"], n: "Gaelic <i>inbhir</i>, “river mouth”. Inverness stands where the River Ness meets the sea."},
      {big: "Aber-", q: "As in Aberystwyth and Abergavenny. Which language?", c: "Welsh", x: ["Scottish Gaelic", "Old Norse", "Scots"], n: "Welsh <i>aber</i>, also “river mouth”: the same idea as Inver-, from the other branch of the Celtic family. Scotland's Aber- names, like Aberdeen, probably come from Pictish, Welsh's northern cousin."},
      {big: "Bally-", q: "As in Ballymena and Ballymoney. Which language?", c: "Irish", x: ["Welsh", "Cornish", "Old Norse"], n: "Irish <i>baile</i>, a townland or settlement. Thousands of places across Ireland start this way."},
      {big: "Tre-", q: "As in Tregony and Trelissick. Which language?", c: "Cornish", x: ["Old Norse", "Scots", "Scottish Gaelic"], n: "Cornish <i>tre</i>, “farmstead”. An old saying runs: by Tre, Pol and Pen you shall know the Cornishmen. Welsh has the same word, as in Tremadog."},
      {big: "Pit-", q: "As in Pitlochry and Pittenweem. Which language?", c: "Pictish", x: ["Old Norse", "Welsh", "Scots"], n: "Pictish <i>pett</i>, “a piece of land”: the clearest trace the Picts left. Most Pit- names end in Gaelic, so Pitlochry holds two languages in one word."}
    ]
  },
  lallans: {
    name: "Lallans", sub: "Scots and Ulster Scots. What does it mean?",
    qs: [
      {big: "dreich", q: "What's a dreich day?", c: "dull and gloomy", x: ["thirsty", "lucky", "very long"], n: "Scots <i>dreich</i>: grey, damp and dismal, usually the weather. English has no single word that does the job as well."},
      {big: "glaikit", q: "If someone looks glaikit, they look…", c: "foolish", x: ["greedy", "shiny", "frozen"], n: "Scots <i>glaikit</i>: daft, vacant, not all there. “Dinnae stand there looking glaikit.”"},
      {big: "wheesht", q: "If someone says “haud yer wheesht”, they want you to…", c: "be quiet", x: ["hurry up", "look out", "sit down"], n: "<i>Haud yer wheesht</i>: hold your shush, or be quiet. It's Scots for “shush”."},
      {big: "scunnered", q: "If you're scunnered, you are…", c: "fed up", x: ["soaked", "lost", "robbed"], n: "To be scunnered is to have had enough. A <i>scunner</i> is something that disgusts you, or a person who gets on your nerves."},
      {big: "thran", q: "Ulster Scots. A thran person is…", c: "stubborn", x: ["thin", "sad", "generous"], n: "Ulster Scots <i>thran</i>, Scots <i>thrawn</i>: stubborn, contrary. Ulster Scots came over with Lowland Scots settlers in the 1600s."}
    ]
  },
  hidden: {
    name: "Hidden tongues", sub: "The quieter languages of these islands: Angloromani and Shelta.",
    qs: [
      {q: "Which of these came into English from Romani?", c: "pal", x: ["mate", "chum", "buddy"], n: "Romani <i>pal</i>, “brother”. It's been English slang since the 1600s."},
      {q: "Which of these came into English from Romani?", c: "cushty", x: ["ace", "smashing", "spiffing"], n: "Romani <i>kushti</i>, “good”. Del Boy made it famous in <i>Only Fools and Horses</i>."},
      {q: "Which of these came into English from Romani?", c: "mush", x: ["bloke", "chap", "fella"], n: "Romani <i>mush</i>, “man”. In the south of England it's still a way to address a mate."},
      {q: "Angloromani mixes Romani words with the grammar of which language?", c: "English", x: ["Hindi", "Welsh", "Romanian"], n: "Angloromani uses English grammar with Romani words. Romani itself travelled a long way to get here: it began in northern India."},
      {q: "Shelta, the language of Irish Travellers, takes much of its vocabulary from which language?", c: "Irish", x: ["Romani", "Welsh", "Old Norse"], n: "Shelta (also called the Cant or Gammon) disguises Irish words, often by reshaping or reversing them. It's spoken by Irish Travellers in Ireland and Britain."}
    ]
  },
  newt: {
    name: "New tongues", sub: "The languages that have come to stay. Figures from the 2021 census of England and Wales.",
    qs: [
      {q: "After English, what's the most common main language in England and Wales?", c: "Polish", x: ["Urdu", "Spanish", "Romanian"], n: "Polish, the main language of about 612,000 people in 2021. Many came after Poland joined the EU in 2004."},
      {q: "Which language rose fastest between the 2011 and 2021 censuses, to become the second most common?", c: "Romanian", x: ["Arabic", "Portuguese", "Bengali"], n: "Romanian, the main language of about 472,000 people in 2021. Harrow in north-west London has the highest share."},
      {q: "Wolverhampton has the highest share of speakers of which language (6.5%)?", c: "Panjabi", x: ["Gujarati", "Polish", "Urdu"], n: "Panjabi. Many families came from Punjab to the West Midlands in the 1950s and 60s to work in its factories and foundries."},
      {big: "wagwan", q: "“What's going on?” Which language does it come from?", c: "Jamaican Patois", x: ["Yoruba", "Cockney", "Hindi"], n: "From Jamaican Patois <i>wha gwan</i>. It came with Caribbean families from the Windrush years onwards, and is now part of Multicultural London English, spoken by young Londoners of every background."},
      {big: "balti", q: "The dish Birmingham made famous is named after which everyday object?", c: "a bucket", x: ["a spoon", "a plate", "an oven"], n: "In Urdu and Hindi a <i>balti</i> is a bucket, a word borrowed in turn from Portuguese <i>balde</i>. The dish is named after the steel bowl it's cooked and served in."}
    ]
  },
  story: {
    name: "Story day", sub: "Languages lost, saved and brought back.",
    qs: [
      {q: "Dolly Pentreath, often called the last native speaker of Cornish, died in which century?", c: "the 1700s", x: ["the 1500s", "the 1800s", "the 1900s"], n: "She died in Mousehole in 1777. Others spoke Cornish after her, but she's the one remembered, with a memorial at Paul church."},
      {q: "UNESCO once listed Cornish as extinct. What did it do in 2010?", c: "relisted it as critically endangered", x: ["made it official in Cornwall", "gave it a TV channel", "listed it as safe"], n: "Cornish had been revived from old texts through the 1900s, and by 2010 it had enough speakers and learners that UNESCO changed its listing to critically endangered."},
      {q: "Ned Maddrell, the last native speaker of Manx, died in which year?", c: "1974", x: ["1874", "1924", "2004"], n: "Ned Maddrell died in 1974, but learners had already recorded him. Today children on the Isle of Man can go to a Manx-language primary school, the Bunscoill Ghaelgagh."},
      {q: "Which law first gave Welsh official status in Wales?", c: "the Welsh Language Measure of 2011", x: ["the Laws in Wales Act of 1536", "the Education Act of 1870", "the Equality Act of 2010"], n: "The 2011 Measure made Welsh official in Wales. The 1536 Act had done the opposite: it barred Welsh speakers from public office unless they used English."},
      {q: "In which year did British Sign Language become a recognised language in law?", c: "2022", x: ["1972", "1995", "2003"], n: "The British Sign Language Act 2022. The government had recognised BSL as a language in 2003, but not in law."}
    ]
  },
  ghost: {
    name: "Ghost tongues", sub: "Languages that have gone, but left traces behind.",
    qs: [
      {q: "Pictish was most closely related to which living language?", c: "Welsh", x: ["Scottish Gaelic", "Norwegian", "Basque"], n: "Most scholars now think Pictish was Brittonic, a sister of early Welsh. It faded around 900 as Gaelic spread across Scotland."},
      {q: "Norn, spoken in Orkney and Shetland until the 1700s, grew from which language?", c: "Old Norse", x: ["Scots", "Pictish", "Scottish Gaelic"], n: "Norn came with Viking settlers. Orkney and Shetland were Norwegian until they passed to Scotland in 1468–69, and Norn words still survive in Shetland dialect."},
      {q: "Cumbric, once spoken from Cumbria up into southern Scotland, was a close cousin of which language?", c: "Welsh", x: ["Old English", "Manx", "Old Norse"], n: "Cumbric was Brittonic too. The name Cumbria shares a root with Cymru, the Welsh name for Wales."},
      {big: "yan, tan, tethera", q: "What are they?", c: "sheep-counting numbers", x: ["a skipping rhyme", "Norn days of the week", "a Cornish blessing"], n: "Shepherds in Cumbria, the Dales and beyond counted sheep this way. The numbers look Brittonic (compare Welsh <i>un, dau, tri</i>), so they may be an echo of Cumbric, though that's debated."},
      {q: "Which place-name ending comes from Old Norse, the language of the Vikings?", c: "-by", x: ["-ton", "-caster", "-ham"], n: "Old Norse <i>bý</i>, a farm or village. Hundreds of -bys dot the old Danelaw, from Grimsby to Whitby. (-ton and -ham are Old English; -caster comes from Latin.)"}
    ]
  },
  polari: {
    name: "Polari Sunday", sub: "The boss round. Translate this Polari sentence one word at a time.",
    sentence: "Vada the omi with the bona riah and the naff batts.",
    qs: [
      {big: "vada", q: "What does it mean?", c: "look at", x: ["listen to", "talk to", "follow"], n: "<i>Vada</i>, from Italian <i>guardare</i>, “to look”. Polari borrowed heavily from Italian, by way of travelling showmen and sailors."},
      {big: "omi", q: "What does it mean?", c: "man", x: ["woman", "friend", "stranger"], n: "<i>Omi</i>, from Italian <i>uomo</i>. A woman is a <i>palone</i>."},
      {big: "bona", q: "What does it mean?", c: "lovely", x: ["long", "wet", "cheap"], n: "<i>Bona</i>, from Italian <i>buona</i>: good, lovely. Julian and Sandy's “bona to vada your dolly old eek” was heard by millions in BBC radio's <i>Round the Horne</i> in the 1960s."},
      {big: "riah", q: "What does it mean?", c: "hair", x: ["hat", "coat", "nose"], n: "<i>Riah</i> is “hair” spelt backwards. Backslang was a favourite Polari trick: <i>eek</i>, face, comes from <i>ecaf</i>."},
      {big: "batts", q: "What does it mean?", c: "shoes", x: ["trousers", "glasses", "teeth"], n: "<i>Batts</i>, shoes. So: “Look at the man with the lovely hair and the awful shoes.” And <i>naff</i>, awful, is the Polari word that crossed into everyday English."}
    ]
  },
  tongue2: {
    name: "Which tongue?", sub: "Thank you across the isles. Which language is this?",
    qs: [
      {big: "Diolch", q: "Which language?", c: "Welsh", x: ["Cornish", "Manx", "Scottish Gaelic"], n: "Welsh for thank you. Add <i>yn fawr</i> for “thank you very much”: <i>diolch yn fawr</i>."},
      {big: "Tapadh leat", q: "Which language?", c: "Scottish Gaelic", x: ["Irish", "Manx", "Welsh"], n: "Gaelic for thank you, said to one friend. To be polite, or to thank a crowd, it's <i>tapadh leibh</i>."},
      {big: "Go raibh maith agat", q: "Which language?", c: "Irish", x: ["Scottish Gaelic", "Manx", "Cornish"], n: "The Irish thank you, literally “may there be good at you”."},
      {big: "Meur ras", q: "Which language?", c: "Cornish", x: ["Welsh", "Manx", "Scots"], n: "Cornish for thanks, literally “great grace”. <i>Meur</i> is a cousin of Welsh <i>mawr</i>, “big”."},
      {big: "Gura mie ayd", q: "Which language?", c: "Manx", x: ["Scottish Gaelic", "Irish", "Cornish"], n: "Manx for thank you. Say it aloud and you can hear Irish <i>go raibh maith agat</i> inside it, spelt the English way."}
    ]
  },
  tongue3: {
    name: "Which tongue?", sub: "Good night, cheers and more across the isles. Which language is this?",
    qs: [
      {big: "Nos da", q: "Which language?", c: "Welsh", x: ["Manx", "Scottish Gaelic", "Irish"], n: "Welsh for good night: <i>nos</i> “night” + <i>da</i> “good”. Cornish says it the same way."},
      {big: "Oíche mhaith", q: "Which language?", c: "Irish", x: ["Scottish Gaelic", "Manx", "Welsh"], n: "Irish for good night. Gaelic writes it <i>oidhche mhath</i>: the Irish accent goes up (í), the Gaelic one goes down (à)."},
      {big: "Slàinte mhath", q: "Which language?", c: "Scottish Gaelic", x: ["Irish", "Welsh", "Cornish"], n: "Cheers! Literally “good health”. The grave accent on the à gives it away as Gaelic rather than Irish <i>sláinte</i>."},
      {big: "Kernow bys vykken", q: "Which language?", c: "Cornish", x: ["Welsh", "Manx", "Scots"], n: "“Cornwall for ever”, seen on flags and car stickers. <i>Kernow</i> is Cornwall's own name."},
      {big: "Ellan Vannin", q: "Which language?", c: "Manx", x: ["Scottish Gaelic", "Irish", "Welsh"], n: "Manx for the Isle of Man itself, and the name of a much-loved song about the island."}
    ]
  },
  tongue4: {
    name: "Which tongue?", sub: "Hello and welcome across the isles. Which language is this?",
    qs: [
      {big: "Croeso", q: "Which language?", c: "Welsh", x: ["Cornish", "Manx", "Scots"], n: "Welsh for welcome, as on the signs at the border: <i>Croeso i Gymru</i>, Welcome to Wales."},
      {big: "Fáilte", q: "Which language?", c: "Irish", x: ["Scottish Gaelic", "Welsh", "Manx"], n: "Irish for welcome. Gaelic has the same word with a grave accent, <i>fàilte</i>, so the slope of the accent is your clue."},
      {big: "Ciamar a tha thu?", q: "Which language?", c: "Scottish Gaelic", x: ["Irish", "Manx", "Welsh"], n: "Gaelic for “how are you?”. The answer you hope for is <i>tha gu math</i>, “I'm well”."},
      {big: "Dydh da", q: "Which language?", c: "Cornish", x: ["Welsh", "Manx", "Irish"], n: "Cornish for good day. Welsh would say <i>dydd da</i>: the Cornish <i>dh</i> is the same sound as the Welsh <i>dd</i>."},
      {big: "Fastyr mie", q: "Which language?", c: "Manx", x: ["Scottish Gaelic", "Irish", "Cornish"], n: "Manx for good afternoon. <i>Mie</i>, “good”, turns up again in <i>moghrey mie</i>, good morning."}
    ]
  },
  cousin2: {
    name: "Cousin words", sub: "One word across the Celtic languages. Which is the missing one?",
    qs: [
      {q: "<b>fish</b>: Welsh <i>pysgodyn</i> · Cornish <i>pysk</i> · Gaelic <i>iasg</i> · Irish <i>iasc</i> · Manx <b>?</b>", c: "eeast", x: ["pysk", "iask", "peesh"], n: "Manx <i>eeast</i>. The Welsh and Cornish words come from Latin <i>piscis</i>, like English <i>Pisces</i>."},
      {q: "<b>horse</b>: Welsh <i>ceffyl</i> · Gaelic <i>each</i> · Irish <i>capall</i> · Manx <i>cabbyl</i> · Cornish <b>?</b>", c: "margh", x: ["kevyl", "each", "cabbyl"], n: "Cornish <i>margh</i>, the old Celtic word, kept in Welsh as <i>march</i>, a stallion. <i>Ceffyl</i>, <i>capall</i> and <i>cabbyl</i> come from Latin <i>caballus</i>."},
      {q: "<b>sea</b>: Welsh <i>môr</i> · Cornish <i>mor</i> · Gaelic <i>muir</i> · Irish <i>muir</i> · Manx <b>?</b>", c: "mooir", x: ["mor", "mwyr", "moor"], n: "Manx <i>mooir</i>. The same old root gives Latin <i>mare</i> and English <i>marine</i> and <i>mere</i>."},
      {q: "<b>big</b>: Welsh <i>mawr</i> · Gaelic <i>mòr</i> · Irish <i>mór</i> · Manx <i>mooar</i> · Cornish <b>?</b>", c: "meur", x: ["mawr", "mor", "moar"], n: "Cornish <i>meur</i>, as in <i>meur ras</i>, thanks. Gaelic <i>mòr</i> is the -more in Ben More and the claymore, the “great sword”."},
      {q: "<b>island</b>: Welsh <i>ynys</i> · Gaelic <i>eilean</i> · Irish <i>oileán</i> · Manx <i>ellan</i> · Cornish <b>?</b>", c: "enys", x: ["ellan", "ynys", "eneth"], n: "Cornish <i>enys</i>, Welsh <i>ynys</i>: Anglesey is <i>Ynys Môn</i>. The Gaelic side has <i>eilean</i>, as in Eilean Donan castle."}
    ]
  },
  cousin3: {
    name: "Cousin words", sub: "One word across the Celtic languages. Which is the missing one?",
    qs: [
      {q: "<b>son</b>: Cornish <i>mab</i> · Gaelic <i>mac</i> · Irish <i>mac</i> · Manx <i>mac</i> · Welsh <b>?</b>", c: "mab", x: ["mac", "map", "mak"], n: "Welsh <i>mab</i>: P against Q again. Gaelic <i>mac</i> gave us the Macs; the Welsh short form <i>ap</i> turned ap Rhys into Price and ap Hywel into Powell."},
      {q: "<b>bread</b>: Welsh <i>bara</i> · Cornish <i>bara</i> · Gaelic <i>aran</i> · Irish <i>arán</i> · Manx <b>?</b>", c: "arran", x: ["bara", "aran", "barran"], n: "Manx <i>arran</i>. <i>Bara brith</i>, “speckled bread”, is the Welsh fruit loaf."},
      {q: "<b>night</b>: Welsh <i>nos</i> · Cornish <i>nos</i> · Gaelic <i>oidhche</i> · Irish <i>oíche</i> · Manx <b>?</b>", c: "oie", x: ["nos", "oidh", "noie"], n: "Manx <i>oie</i>. Welsh <i>nos</i> shares a distant root with English <i>night</i> and Latin <i>nox</i>."},
      {q: "<b>white</b>: Welsh <i>gwyn</i> · Gaelic <i>geal</i> · Irish <i>geal</i> · Manx <i>gial</i> · Cornish <b>?</b>", c: "gwynn", x: ["geal", "gial", "gwen"], n: "Cornish <i>gwynn</i>. The names Gwyn, Gwen and Gwenllian carry the same word, “white, fair, blessed”."},
      {q: "<b>cat</b>: Welsh <i>cath</i> · Cornish <i>kath</i> · Gaelic <i>cat</i> · Irish <i>cat</i> · Manx <b>?</b>", c: "kayt", x: ["cath", "katt", "kat"], n: "Manx <i>kayt</i>. The island's tailless cats are known the world over as Manx cats."}
    ]
  },
  cousin4: {
    name: "Cousin words", sub: "One word across the Celtic languages. Which is the missing one?",
    qs: [
      {q: "<b>stone</b>: Welsh <i>carreg</i> · Cornish <i>karrek</i> · Gaelic <i>clach</i> · Manx <i>clagh</i> · Irish <b>?</b>", c: "cloch", x: ["carreg", "clagh", "clach"], n: "Irish <i>cloch</i>. Cornish <i>karrek</i> is in Carrick Roads, the great harbour at Falmouth."},
      {q: "<b>red</b>: Welsh <i>coch</i> · Cornish <i>rudh</i> · Gaelic <i>dearg</i> · Irish <i>dearg</i> · Manx <b>?</b>", c: "jiarg", x: ["dearg", "rudh", "coch"], n: "Manx <i>jiarg</i>. Here Cornish goes its own way: <i>rudh</i> is a far-off cousin of English <i>red</i> and <i>ruddy</i>."},
      {q: "<b>fire</b>: Welsh <i>tân</i> · Gaelic <i>teine</i> · Irish <i>tine</i> · Manx <i>aile</i> · Cornish <b>?</b>", c: "tan", x: ["teine", "aile", "tine"], n: "Cornish <i>tan</i>, like Welsh <i>tân</i>. Manx <i>aile</i> is the odd one out in this family."},
      {q: "<b>cow</b>: Welsh <i>buwch</i> · Cornish <i>bugh</i> · Gaelic <i>bò</i> · Irish <i>bó</i> · Manx <b>?</b>", c: "booa", x: ["bugh", "bow", "buwch"], n: "Manx <i>booa</i>. All of these share a root with Latin <i>bos</i>, which reached English as <i>beef</i>, through French."},
      {q: "<b>small</b>: Welsh <i>bach</i> · Cornish <i>byghan</i> · Gaelic <i>beag</i> · Manx <i>beg</i> · Irish <b>?</b>", c: "beag", x: ["bach", "beg", "byghan"], n: "Irish <i>beag</i>, the same as Gaelic. In Welsh, <i>bach</i> is also a fond way to address someone: “cariad bach”."}
    ]
  },
  map2: {
    name: "Map it", sub: "Which language gave these places their names?",
    qs: [
      {big: "Llan-", q: "As in Llandudno and Llanelli. Which language?", c: "Welsh", x: ["Cornish", "Scottish Gaelic", "Old Norse"], n: "Welsh <i>llan</i>, a church enclosure, usually followed by a saint: Llandudno is St Tudno's church."},
      {big: "Kil-", q: "As in Kilkenny and Killarney. Which language?", c: "Irish", x: ["Welsh", "Old Norse", "Cornish"], n: "Irish <i>cill</i>, a church: Kilkenny is the church of St Canice. Gaelic Scotland has them too, like Kilmarnock."},
      {big: "-thwaite", q: "As in Bassenthwaite and Braithwaite. Which language?", c: "Old Norse", x: ["Old English", "Welsh", "Scots"], n: "Old Norse <i>þveit</i>, a clearing or meadow. Cumbria and Yorkshire are full of them."},
      {big: "Pol-", q: "As in Polperro and Polzeath. Which language?", c: "Cornish", x: ["Welsh", "Old Norse", "Scots"], n: "Cornish <i>pol</i>, a pool or cove: the Pol of “by Tre, Pol and Pen”."},
      {big: "Strath-", q: "As in Strathspey and Strathmore. Which language?", c: "Scottish Gaelic", x: ["Welsh", "Old Norse", "Scots"], n: "Gaelic <i>srath</i>, a wide river valley. Welsh has the same word as <i>ystrad</i>, as in Ystradgynlais."}
    ]
  },
  map3: {
    name: "Map it", sub: "Which language gave these places their names?",
    qs: [
      {big: "Dun-", q: "As in Dundee and Dunkeld. Which language?", c: "Scottish Gaelic", x: ["Welsh", "Old Norse", "Cornish"], n: "Gaelic <i>dùn</i>, a fort. Edinburgh in Gaelic is <i>Dùn Èideann</i>. Ireland has plenty too."},
      {big: "Cwm", q: "As in Cwmbran and Cwmaman. Which language?", c: "Welsh", x: ["Cornish", "Scottish Gaelic", "Scots"], n: "Welsh <i>cwm</i>, a valley. English borrowed it as <i>coombe</i>, so the West Country's Coombes are its cousins."},
      {big: "-wick", q: "As in Lerwick and Wick in Caithness. Which language?", c: "Old Norse", x: ["Old English", "Pictish", "Scots"], n: "Old Norse <i>vík</i>, a bay. Lerwick is “mud bay”. Careful though: Warwick and Norwich get their -wick from Old English <i>wīc</i>, a settlement."},
      {big: "Pen-", q: "As in Penzance and Pendeen. Which language?", c: "Cornish", x: ["Old Norse", "Scots", "Scottish Gaelic"], n: "Cornish <i>penn</i>, a head or headland: Penzance is “holy headland”. Welsh has it too (Penarth), and Penrith in Cumbria got it from Cumbric."},
      {big: "-caster", q: "As in Lancaster and Doncaster. Which language first?", c: "Latin", x: ["Old Norse", "Welsh", "Scots"], n: "Latin <i>castra</i>, a camp, taken into Old English as <i>ceaster</i>. It's the same word as -chester in Manchester and Chester."}
    ]
  },
  map4: {
    name: "Map it", sub: "Which language gave these places their names?",
    qs: [
      {big: "Caer-", q: "As in Caernarfon and Caerphilly. Which language?", c: "Welsh", x: ["Cornish", "Old Norse", "Scottish Gaelic"], n: "Welsh <i>caer</i>, a fort. Cardiff is <i>Caerdydd</i> in Welsh."},
      {big: "Ard-", q: "As in Ardglass and Ardmore. Which language?", c: "Irish", x: ["Welsh", "Old Norse", "Cornish"], n: "Irish <i>ard</i>, high, or a height. Gaelic Scotland has them too, like Ardnamurchan."},
      {big: "-ey", q: "As in Anglesey and Sanday. Which language?", c: "Old Norse", x: ["Welsh", "Old English", "Scottish Gaelic"], n: "Old Norse <i>ey</i>, an island. Anglesey is probably “Ǫngull's island”, named by Vikings for an island the Welsh already called Môn."},
      {big: "Auchter-", q: "As in Auchtermuchty and Auchterarder. Which language?", c: "Scottish Gaelic", x: ["Scots", "Old Norse", "Welsh"], n: "Gaelic <i>uachdar</i>, the upper part, so Auchtermuchty is roughly “upper pig-land”. Many Auch- names come from <i>achadh</i>, a field."},
      {big: "Lan-", q: "As in Lanhydrock and Lanivet. Which language?", c: "Cornish", x: ["Old Norse", "Scots", "Scottish Gaelic"], n: "Cornish <i>lan</i>, a church enclosure: the same word as Welsh <i>llan</i>, without the double l."}
    ]
  },
  lallans2: {
    name: "Lallans", sub: "Scots and Ulster Scots. What does it mean?",
    qs: [
      {big: "bairn", q: "What's a bairn?", c: "a child", x: ["a cow shed", "a loaf", "a hill"], n: "Scots <i>bairn</i>, a child, from the same root as English <i>born</i> and <i>bear</i>."},
      {big: "peely-wally", q: "If you're looking peely-wally, you look…", c: "pale and poorly", x: ["furious", "suntanned", "smartly dressed"], n: "<i>Peely-wally</i>: washed out, sickly, the colour of a Scottish February."},
      {big: "greetin'", q: "If the wean is greetin', they are…", c: "crying", x: ["waving", "eating", "singing"], n: "Scots <i>greet</i>, to weep. Nothing to do with saying hello."},
      {big: "drookit", q: "If you're drookit, you are…", c: "soaked", x: ["drunk", "tired out", "lost"], n: "<i>Drookit</i>: drenched to the skin. Often follows a dreich day."},
      {big: "dander", q: "Ulster Scots. If you go for a dander, you go for…", c: "a stroll", x: ["a drink", "a fight", "a nap"], n: "A <i>dander</i> is a gentle wander, in Ulster and Scotland alike. No rush."}
    ]
  },
  lallans3: {
    name: "Lallans", sub: "Scots and Ulster Scots. What does it mean?",
    qs: [
      {big: "the messages", q: "If you go for the messages, you go…", c: "food shopping", x: ["to the post office", "to church", "to the pub"], n: "In Scotland and Ulster the <i>messages</i> are the groceries. Errands, originally."},
      {big: "piece", q: "A jeely piece is a jam…", c: "sandwich", x: ["tart", "jar", "doughnut"], n: "A <i>piece</i> is a sandwich or packed lunch. The Jeely Piece Song is about mothers throwing them down from tenement windows."},
      {big: "stooshie", q: "What's a stooshie?", c: "a fuss or uproar", x: ["a small pie", "a tartan scarf", "a light rain"], n: "A <i>stooshie</i> (or <i>stushie</i>) is a commotion. Newspapers love the word whenever there's a row."},
      {big: "oxter", q: "Where's your oxter?", c: "your armpit", x: ["your ankle", "your chin", "your elbow"], n: "Scots <i>oxter</i>, the armpit, from Old English <i>ōxta</i>. To <i>oxter</i> someone is to take them by the arm."},
      {big: "wee buns", q: "Ulster Scots. If something's wee buns, it's…", c: "very easy", x: ["very small", "delicious", "expensive"], n: "<i>Wee buns</i>: a doddle, in Northern Ireland. “That exam was wee buns.”"}
    ]
  },
  lallans4: {
    name: "Lallans", sub: "Scots and Ulster Scots. What does it mean?",
    qs: [
      {big: "fankle", q: "If your wool is in a fankle, it's…", c: "tangled", x: ["damp", "lost", "dyed"], n: "A <i>fankle</i> is a tangle or a muddle. You can get your thoughts in one too."},
      {big: "blether", q: "If you're having a blether, you're…", c: "chatting", x: ["arguing", "sleeping", "drinking"], n: "A <i>blether</i> is a chat, or a person who talks too much. It's the same word as English <i>blather</i>, from Old Norse."},
      {big: "kirk", q: "What's the kirk?", c: "the church", x: ["the pub", "the school", "the harbour"], n: "Scots <i>kirk</i>, from Old Norse <i>kirkja</i>. The Church of Scotland is still known as the Kirk."},
      {big: "wean", q: "What's a wean?", c: "a child", x: ["a whinge", "a wagon", "a puppy"], n: "<i>Wean</i>, from “wee ane”, a little one. It's heard in the west of Scotland and across Ulster."},
      {big: "hoke", q: "Ulster Scots. If you hoke in your bag, you…", c: "rummage", x: ["sneeze", "hum", "pay"], n: "To <i>hoke</i> is to root around or dig. “Hoke in the drawer for the scissors.”"}
    ]
  },
  hidden2: {
    name: "Hidden tongues", sub: "The quieter languages of these islands: Romani, Shelta and the cants.",
    qs: [
      {q: "Romani's distant roots lie in which part of the world?", c: "northern India", x: ["Romania", "Egypt", "Hungary"], n: "Romani descends from languages of northern India, carried west over many centuries. The name has nothing to do with Romania."},
      {q: "The old word “Gypsy” came from a mistaken belief that Romani people came from where?", c: "Egypt", x: ["Spain", "Turkey", "Greece"], n: "“Gypsy” is a shortening of “Egyptian”. Many Romani people find the word offensive today, though some use it of themselves."},
      {q: "Which of these probably came into English from Romani <i>nak</i>, “nose”?", c: "nark", x: ["grass", "snitch", "rat"], n: "A <i>nark</i> is an informer, someone who noses around for the police. To be <i>narked</i>, annoyed, may come from the same place."},
      {q: "Beurla Reagaird is the secret cant of which group?", c: "Highland Travellers", x: ["Glasgow dockers", "Shetland fishermen", "Edinburgh lawyers"], n: "Beurla Reagaird is a Gaelic-based cant of Scotland's Highland Travellers, the northern cousin of Shelta."},
      {q: "Which of these is another name for Shelta?", c: "Gammon", x: ["Polari", "Lallans", "Norn"], n: "Shelta is also called Gammon or the Cant. Its speakers often call it Minceir Tari, “Travellers' talk”."}
    ]
  },
  newt2: {
    name: "New tongues", sub: "The languages that have come to stay, and the words they brought.",
    qs: [
      {q: "In the 2021 census, which London borough had the most people with Bengali as their main language?", c: "Tower Hamlets", x: ["Brent", "Croydon", "Barnet"], n: "Tower Hamlets, home of Brick Lane, known locally as Banglatown. Most families came from Sylhet in north-east Bangladesh."},
      {q: "Leicester's Diwali lights are among the biggest outside India. Which is the city's most common main language after English?", c: "Gujarati", x: ["Panjabi", "Polish", "Urdu"], n: "Gujarati. Many Leicester families arrived from East Africa in the late 1960s and 70s, with roots in Gujarat."},
      {q: "Which language gave English “shampoo”?", c: "Hindi", x: ["Arabic", "Portuguese", "Turkish"], n: "Hindi <i>chāmpo</i>, “press! knead!”. Sake Dean Mahomed opened a shampooing bath in Brighton in the early 1800s, and the word stuck."},
      {big: "peng", q: "Multicultural London English. If something's peng, it's…", c: "great or attractive", x: ["broken", "expensive", "boring"], n: "<i>Peng</i> means good-looking or excellent, from the slang of young Londoners. Food can be peng too."},
      {q: "A bungalow was first a house in the style of which region?", c: "Bengal", x: ["Kashmir", "Goa", "Punjab"], n: "From Hindi <i>banglā</i>, “of Bengal”: a low, one-storey house with a veranda, built for the British in India."}
    ]
  },
  story2: {
    name: "Story day", sub: "Languages lost, saved and brought back.",
    qs: [
      {q: "What was the “Welsh Not”?", c: "a token hung on pupils caught speaking Welsh", x: ["an Act of Parliament", "a Welsh-language newspaper", "a protest song"], n: "A wooden board or token used in some Welsh schools in the 1800s. Whoever had it at the end of the day could be punished."},
      {q: "The 1847 report that blamed the Welsh language for the people's “backwardness” is remembered as…", c: "the Treachery of the Blue Books", x: ["the Black Act", "the Red Report", "the Bloody Assizes"], n: "<i>Brad y Llyfrau Gleision</i>, named after the reports' blue covers. The anger it caused helped spark a Welsh-language revival."},
      {q: "Who threatened to fast to death in 1980 unless the government kept its promise of a Welsh-language TV channel?", c: "Gwynfor Evans", x: ["Saunders Lewis", "Dafydd Iwan", "R. S. Thomas"], n: "The Plaid Cymru leader Gwynfor Evans. The government gave way, and S4C went on air in 1982."},
      {q: "In which year did BBC Alba, the Gaelic TV channel, go on air?", c: "2008", x: ["1978", "1998", "2018"], n: "BBC Alba launched in September 2008, run with MG Alba. Gaelic medium schools have grown alongside it."},
      {q: "Which part of Scotland has the highest share of Gaelic speakers?", c: "the Western Isles", x: ["Glasgow", "Orkney", "the Borders"], n: "The Western Isles, <i>Na h-Eileanan Siar</i>. Glasgow has more speakers in total, but in the islands Gaelic is still heard every day."}
    ]
  },
  ghost2: {
    name: "Ghost tongues", sub: "Languages that have gone, but left traces behind.",
    qs: [
      {q: "Yola, spoken in County Wexford until the 1800s, grew out of which language?", c: "Middle English", x: ["Old Norse", "Irish", "Flemish"], n: "Yola came with English and Flemish settlers in the 1100s and stayed cut off for centuries. Its name for “old” was <i>yola</i>."},
      {q: "“Street” and “wall” came into Old English from which language of Roman Britain?", c: "Latin", x: ["Old Norse", "Pictish", "Cumbric"], n: "Latin <i>strata</i>, a paved road, and <i>vallum</i>, a rampart, as in Hadrian's Wall."},
      {q: "Which everyday English word came from Old Norse?", c: "egg", x: ["bread", "milk", "house"], n: "Norse <i>egg</i> pushed out Old English <i>ey</i>, plural <i>eyren</i>. In 1490 Caxton told of a merchant in Kent who asked for “eggys” and was told the woman spoke no French."},
      {q: "Law French, a ghost of the Normans, lasted longest where?", c: "in the law courts", x: ["in the navy", "in monasteries", "in the royal kitchens"], n: "English courts used Law French until the 1700s. It lives on in <i>oyez</i>, <i>bailiff</i> and <i>mortgage</i>, a “dead pledge”."},
      {q: "Why does English say “beef” at the table but “cow” in the field?", c: "the table word came from Norman French", x: ["“cow” came from Old Norse", "“beef” is Latin", "they're Celtic words"], n: "Norman French <i>boeuf</i>. Pork and pig, mutton and sheep, veal and calf follow the same pattern: English in the field, French on the plate."}
    ]
  },
  polari2: {
    name: "Polari Sunday", sub: "The boss round. Translate this Polari sentence one word at a time.",
    sentence: "Zhoosh the bijou lattie before the palone comes for her bevvy.",
    qs: [
      {big: "zhoosh", q: "What does it mean?", c: "tidy up", x: ["leave", "lock", "paint"], n: "<i>Zhoosh</i>: to smarten up or make fabulous. It's found its way into everyday English, especially on makeover shows."},
      {big: "bijou", q: "What does it mean?", c: "small", x: ["dirty", "rented", "French"], n: "<i>Bijou</i>, from French “jewel”. Polari used it for anything small, a meaning estate agents still enjoy."},
      {big: "lattie", q: "What does it mean?", c: "flat", x: ["kitchen", "garden", "bed"], n: "<i>Lattie</i>, a house, flat or room. Nobody is quite sure where it came from, which suits a secret language."},
      {big: "palone", q: "What does it mean?", c: "woman", x: ["neighbour", "landlord", "policeman"], n: "<i>Palone</i>, a woman. A man is an <i>omi</i>, and an <i>omi-palone</i> was a gay man."},
      {big: "bevvy", q: "What does it mean?", c: "drink", x: ["dinner", "gossip", "coat"], n: "<i>Bevvy</i>, a drink, from <i>beverage</i>. So: “Tidy the little flat before the woman comes for her drink.”"}
    ]
  },
  polari3: {
    name: "Polari Sunday", sub: "The boss round. Translate this Polari sentence one word at a time.",
    sentence: "Scarper, the ajax omi has nanti dinarli for the manjarie.",
    qs: [
      {big: "scarper", q: "What does it mean?", c: "run off", x: ["sit down", "look out", "keep quiet"], n: "<i>Scarper</i>, from Italian <i>scappare</i>, to escape. It's now plain British slang."},
      {big: "ajax", q: "What does it mean?", c: "nearby", x: ["angry", "rich", "drunk"], n: "<i>Ajax</i>, from “adjacent”. Polari loved a clipped word."},
      {big: "omi", q: "What does it mean?", c: "man", x: ["waiter", "child", "dog"], n: "<i>Omi</i>, from Italian <i>uomo</i>. You met him in the first Polari Sunday."},
      {big: "nanti", q: "What does it mean?", c: "no", x: ["lots of", "fake", "foreign"], n: "<i>Nanti</i>, from Italian <i>niente</i>, nothing. <i>Nanti</i> on its own meant “don't” or “stop it”."},
      {big: "dinarli", q: "What does it mean?", c: "money", x: ["time", "manners", "hope"], n: "<i>Dinarli</i>, money, from Latin <i>denarius</i> by way of Italian and Spanish. And <i>manjarie</i>? Food, from <i>mangiare</i>. So: “Run, the man nearby has no money for the food.”"}
    ]
  },
  polari4: {
    name: "Polari Sunday", sub: "The boss round. Translate this Polari sentence one word at a time.",
    sentence: "Her eek is all slap but her ogles and lallies are fantabulosa.",
    qs: [
      {big: "eek", q: "What does it mean?", c: "face", x: ["hat", "voice", "hair"], n: "<i>Eek</i>, from backslang <i>ecaf</i>, face, then clipped."},
      {big: "slap", q: "What does it mean?", c: "make-up", x: ["sunburn", "freckles", "frowns"], n: "<i>Slap</i>, make-up, from the theatre. Actors still talk about putting their slap on."},
      {big: "ogles", q: "What does it mean?", c: "eyes", x: ["ears", "lips", "earrings"], n: "<i>Ogles</i>, eyes, from <i>ogle</i>, to stare. <i>Ogle riahs</i> were eyelashes."},
      {big: "lallies", q: "What does it mean?", c: "legs", x: ["arms", "nails", "shoes"], n: "<i>Lallies</i>, legs. Julian and Sandy were always admiring someone's lallies on <i>Round the Horne</i>."},
      {big: "fantabulosa", q: "What does it mean?", c: "wonderful", x: ["false", "tired", "enormous"], n: "<i>Fantabulosa</i>: fantastic and fabulous rolled into one. So: “Her face is all make-up but her eyes and legs are wonderful.”"}
    ]
  }
};
// Monday first. Each weekday works through its own list, one step per week, then starts again.
// Step 0 is launch week (23 to 29 Nov 2026), so the first days played never change.
// Friday and Saturday still alternate the four strands (launch week was a "New tongues" week).
const SLOTS = [
  ["tongue", "tongue2", "tongue3", "tongue4"],
  ["cousin", "cousin2", "cousin3", "cousin4"],
  ["map", "map2", "map3", "map4"],
  ["lallans", "lallans2", "lallans3", "lallans4"],
  ["newt", "hidden", "newt2", "hidden2"],
  ["ghost", "story", "ghost2", "story2"],
  ["polari", "polari2", "polari3", "polari4"]
];
