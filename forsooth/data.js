// Forsooth puzzles, by day of the week (Monday first): Shakespeare, Chaucer and their contemporaries.
// DAYS is a run of whole weeks; the game picks today's weekday, cycling through the weeks. Saturday is Chaucer day.
// Five rounds a day:
//   s = "Who wrote it?"     t = a line, c = the writer, o = three wrong writers (contemporaries make the best traps), n = note
//   x = "Red herring"       f = what three share (reads after "The other three are"), w = those three, odd = a misquote or an impostor, n = note
//   p = "Chaucer decoder"   t = a Middle English word, h = where it's from, c = what it meant then, o = three wrong meanings, n = note
//   m = "Match them"        four [line, work] pairs
//   q = "Put in order"      ask = what to order by, i = [item, date] pairs in the RIGHT order, n = note
// All quotations are long out of copyright. Check every line against the text: a misquote here would be embarrassing.
const DAYS = [
  /* ---------- Week 1 ---------- */
  /* Mon */ {
    s: {t: "Was this the face that launch'd a thousand ships?", c: "Christopher Marlowe", o: ["William Shakespeare", "Ben Jonson", "Thomas Kyd"], n: "Faustus says it of Helen of Troy in Marlowe's Doctor Faustus. Marlowe and Shakespeare were born just two months apart."},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["To be, or not to be: that is the question", "Brevity is the soul of wit", "All that glisters is not gold"], odd: "Alas, poor Yorick, I knew him well", n: "Hamlet actually says “Alas, poor Yorick! I knew him, Horatio.” And it's glisters, not glitters."},
    p: {t: "hende", h: "From the Miller's Tale: “hende Nicholas”", c: "Courteous, handy", o: ["Hidden", "Hungry", "Holy"], n: "Hende meant both polite and close at hand. Chaucer's hende Nicholas is a sly young student lodger."},
    m: [["Out, damned spot!", "Macbeth"], ["Get thee to a nunnery", "Hamlet"], ["My kingdom for a horse!", "Richard III"], ["Et tu, Brute?", "Julius Caesar"]],
    q: {ask: "Earliest to latest born", i: [["Geoffrey Chaucer", "c. 1343"], ["Thomas Malory", "c. 1415"], ["Edmund Spenser", "c. 1552"], ["Ben Jonson", "1572"]], n: "Malory wrote Le Morte d'Arthur, probably while in prison."}
  },
  /* Tue */ {
    s: {t: "Drink to me only with thine eyes", c: "Ben Jonson", o: ["William Shakespeare", "Christopher Marlowe", "Philip Sidney"], n: "The opening of Jonson's Song: To Celia (1616), later set to music and sung for centuries."},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["The lady doth protest too much, methinks", "Something is rotten in the state of Denmark", "The better part of valour is discretion"], odd: "Lead on, Macduff", n: "Macbeth says “Lay on, Macduff”: come on and fight me. He isn't asking for directions."},
    p: {t: "sely", h: "Used by Chaucer of people and of souls", c: "Innocent, blessed", o: ["Foolish", "Lonely", "Small"], n: "Sely meant blessed or innocent. Over the centuries it slid to pitiable, then simple, and ended up as silly."},
    m: [["The quality of mercy is not strained", "The Merchant of Venice"], ["Exit, pursued by a bear", "The Winter's Tale"], ["We few, we happy few", "Henry V"], ["Blow, winds, and crack your cheeks!", "King Lear"]],
    q: {ask: "Earliest to latest written", i: [["Romeo and Juliet", "c. 1595"], ["Hamlet", "c. 1600"], ["Macbeth", "c. 1606"], ["The Tempest", "c. 1611"]], n: "The Tempest is often called Shakespeare's farewell to the stage."}
  },
  /* Wed */ {
    s: {t: "No man is an island", c: "John Donne", o: ["William Shakespeare", "Ben Jonson", "Francis Bacon"], n: "From Donne's Devotions upon Emergent Occasions (1624), written while he was seriously ill. It's prose, not a poem."},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["Double, double toil and trouble", "Once more unto the breach, dear friends", "Now is the winter of our discontent"], odd: "Hell hath no fury like a woman scorned", n: "That's William Congreve, in The Mourning Bride (1697), and he wrote “Nor Hell a Fury, like a Woman scorn'd.”"},
    p: {t: "nyce", h: "Chaucer's spelling of a word we still use", c: "Foolish", o: ["Pleasant", "Neat", "Generous"], n: "Nice comes from Latin nescius, not knowing. In Chaucer it meant foolish; the pleasant sense came centuries later."},
    m: [["O brave new world", "The Tempest"], ["The green-eyed monster", "Othello"], ["Parting is such sweet sorrow", "Romeo and Juliet"], ["Let's kill all the lawyers", "Henry VI, Part 2"]],
    q: {ask: "Earliest to latest published", i: [["The Canterbury Tales", "1380s–90s (written)"], ["Le Morte d'Arthur", "1485"], ["The Faerie Queene", "1590"], ["Shakespeare's First Folio", "1623"]], n: "William Caxton printed Le Morte d'Arthur at Westminster, one of the first big English books in print."}
  },
  /* Thu */ {
    s: {t: "Revenge should have no bounds.", c: "William Shakespeare", o: ["Thomas Kyd", "John Webster", "Christopher Marlowe"], n: "Claudius says it in Hamlet. Kyd's Spanish Tragedy started the craze for revenge plays, so he's a tempting guess."},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["It was Greek to me", "A plague o' both your houses!", "The course of true love never did run smooth"], odd: "Music has charms to soothe the savage beast", n: "Not Shakespeare, and a misquote too: Congreve wrote “Musick has Charms to sooth a savage Breast.”"},
    p: {t: "girles", h: "From the General Prologue: “the yonge girles of the diocise”", c: "Young people, boys or girls", o: ["Young women", "Servants", "Nuns"], n: "In Chaucer's day a girl could be a child of either sex. Only later did it narrow to young women."},
    m: [["I am a man more sinned against than sinning", "King Lear"], ["Lord, what fools these mortals be!", "A Midsummer Night's Dream"], ["Frailty, thy name is woman!", "Hamlet"], ["Beware the ides of March", "Julius Caesar"]],
    q: {ask: "Earliest to latest died", i: [["Christopher Marlowe", "1593"], ["William Shakespeare", "1616"], ["Ben Jonson", "1637"], ["John Milton", "1674"]], n: "Marlowe was stabbed in a house in Deptford at 29, in circumstances still argued over."}
  },
  /* Fri */ {
    s: {t: "Cover her face; mine eyes dazzle: she died young.", c: "John Webster", o: ["William Shakespeare", "Christopher Marlowe", "Thomas Middleton"], n: "Ferdinand, over his murdered sister in Webster's The Duchess of Malfi (c. 1613)."},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["Friends, Romans, countrymen, lend me your ears", "Neither a borrower nor a lender be", "Uneasy lies the head that wears a crown"], odd: "To gild the lily", n: "King John has “To gild refined gold, to paint the lily”. Nobody in Shakespeare gilds a lily."},
    p: {t: "lewed", h: "Used by Chaucer of ordinary folk, as against clerks", c: "Uneducated, not a churchman", o: ["Rude", "Lustful", "Lazy"], n: "Lewd first meant lay, not clergy, and so unlearned. The rude sense came much later."},
    m: [["Some are born great", "Twelfth Night"], ["Is this a dagger which I see before me", "Macbeth"], ["Cry 'Havoc!' and let slip the dogs of war", "Julius Caesar"], ["Hath not a Jew eyes?", "The Merchant of Venice"]],
    q: {ask: "Earliest to latest written", i: [["Doctor Faustus", "c. 1590"], ["Twelfth Night", "c. 1601"], ["Volpone", "1606"], ["The Duchess of Malfi", "c. 1613"]], n: "Volpone is Jonson's comedy of a rich man faking his death to fleece his greedy friends."}
  },
  /* Sat: Chaucer day */ {
    s: {t: "The lyf so short, the craft so long to lerne", c: "Geoffrey Chaucer", o: ["John Gower", "William Langland", "Thomas Malory"], n: "The opening of Chaucer's Parlement of Foules, about a gathering of birds choosing their mates on St Valentine's Day."},
    x: {f: "lines by Chaucer", w: ["Whan that Aprill with his shoures soote", "He was a verray, parfit gentil knyght", "For love is blynd al day, and may nat see"], odd: "In a somer seson, whan softe was the sonne", n: "That's the opening of William Langland's Piers Plowman. Chaucer said “love is blind” two centuries before Shakespeare."},
    p: {t: "fowles", h: "From the title Parlement of Foules", c: "Birds", o: ["Fools", "Fellows", "Foul deeds"], n: "Fowl once meant any bird at all. Now it's mostly chickens and ducks."},
    m: [["swich", "such"], ["eek", "also"], ["ful", "very"], ["yclept", "called"]],
    q: {ask: "Earliest to latest written", i: [["The Book of the Duchess", "c. 1370"], ["Parlement of Foules", "c. 1380"], ["Troilus and Criseyde", "mid-1380s"], ["The Canterbury Tales", "from c. 1387"]], n: "Chaucer never finished The Canterbury Tales: only 24 of the planned 120 or so tales exist."}
  },
  /* Sun */ {
    s: {t: "Men at some time are masters of their fates", c: "William Shakespeare", o: ["Christopher Marlowe", "Ben Jonson", "George Chapman"], n: "Cassius, talking Brutus round in Julius Caesar: “The fault, dear Brutus, is not in our stars, But in ourselves.”"},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["We are such stuff as dreams are made on", "All the world's a stage", "If music be the food of love, play on"], odd: "Methinks the lady doth protest too much", n: "Gertrude's line runs “The lady doth protest too much, methinks.” The methinks comes last."},
    p: {t: "buxom", h: "Used by Chaucer of a good wife", c: "Obedient, humble", o: ["Plump", "Clumsy", "Bossy"], n: "Buxom meant easily bent, so obedient. It drifted to cheerful, then healthy, then plump."},
    m: [["The play's the thing", "Hamlet"], ["Shall I compare thee to a summer's day?", "Sonnet 18"], ["I come to bury Caesar, not to praise him", "Julius Caesar"], ["Now is the winter of our discontent", "Richard III"]],
    q: {ask: "Earliest to latest born", i: [["Philip Sidney", "1554"], ["Christopher Marlowe", "Feb 1564"], ["William Shakespeare", "Apr 1564"], ["John Donne", "1572"]], n: "Marlowe was baptised in Canterbury on 26 February 1564, Shakespeare in Stratford exactly two months later."}
  }
];
