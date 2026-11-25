// Mither puzzles: the tongues of these islands, living, revived, hidden, new and gone.
// One theme a day, five multiple-choice questions, and a short note (n) after every answer.
// Friday and Saturday alternate fortnightly: week A = Hidden tongues + Story day, week B = New tongues + Ghost tongues.
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
  }
};
// Monday first. Friday and Saturday swap themes in alternate weeks.
const WEEK_A = ["tongue", "cousin", "map", "lallans", "hidden", "story", "polari"];
const WEEK_B = ["tongue", "cousin", "map", "lallans", "newt", "ghost", "polari"];
