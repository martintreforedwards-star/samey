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
  },
  /* ---------- Week 2 ---------- */
  /* Mon */ {
    s: {t: "Who ever loved that loved not at first sight?", c: "Christopher Marlowe", o: ["William Shakespeare", "Philip Sidney", "Edmund Spenser"], n: "From Marlowe's poem Hero and Leander. Shakespeare quotes it in As You Like It, a nod to his dead rival."},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["The fault, dear Brutus, is not in our stars", "Cowards die many times before their deaths", "I will wear my heart upon my sleeve"], odd: "Bubble, bubble, toil and trouble", n: "The witches chant “Double, double toil and trouble” in Macbeth."},
    p: {t: "wight", h: "Found all over Chaucer", c: "A person or creature", o: ["A white horse", "A weight", "A night watchman"], n: "Wight is Old English for a living being. It lives on in fantasy fiction."},
    m: [["The fault, dear Brutus, is not in our stars", "Julius Caesar"], ["Nothing will come of nothing", "King Lear"], ["Something wicked this way comes", "Macbeth"], ["Love looks not with the eyes, but with the mind", "A Midsummer Night's Dream"]],
    q: {ask: "Earliest to latest born", i: [["John Lyly", "c. 1553"], ["Thomas Kyd", "1558"], ["Thomas Nashe", "1567"], ["John Webster", "c. 1580"]], n: "Kyd's The Spanish Tragedy made revenge plays the fashion, paving the way for Hamlet."}
  },
  /* Tue */ {
    s: {t: "He was not of an age, but for all time!", c: "Ben Jonson", o: ["John Milton", "John Donne", "Francis Beaumont"], n: "Jonson's tribute to Shakespeare at the front of the First Folio (1623). The two were friends and rivals."},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["Fair is foul, and foul is fair", "Out, out, brief candle!", "Lay on, Macduff"], odd: "Once more into the breach, dear friends", n: "Henry V says “Once more unto the breach, dear friends, once more.”"},
    p: {t: "sad", h: "From the Clerk's Tale, of patient Griselda", c: "Steadfast, serious", o: ["Unhappy", "Tired", "Lonely"], n: "Sad once meant full or settled, then firm and serious. ‘Unhappy’ came later."},
    m: [["To-morrow, and to-morrow, and to-morrow", "Macbeth"], ["The rest is silence", "Hamlet"], ["Full fathom five thy father lies", "The Tempest"], ["How sharper than a serpent's tooth it is", "King Lear"]],
    q: {ask: "Earliest to latest written", i: [["Richard III", "c. 1592"], ["A Midsummer Night's Dream", "c. 1595"], ["Twelfth Night", "c. 1601"], ["The Winter's Tale", "c. 1610"]], n: "The dates are approximate: few of Shakespeare's plays were dated when written."}
  },
  /* Wed */ {
    s: {t: "Death, be not proud", c: "John Donne", o: ["George Herbert", "Ben Jonson", "William Shakespeare"], n: "The opening of Donne's Holy Sonnet 10: “Death, be not proud, though some have called thee / Mighty and dreadful.”"},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["There are more things in heaven and earth, Horatio", "O Romeo, Romeo! wherefore art thou Romeo?", "But love is blind, and lovers cannot see"], odd: "A little learning is a dangerous thing", n: "That's Alexander Pope, in 1711, nearly a century after Shakespeare died."},
    p: {t: "corage", h: "From the opening of The Canterbury Tales: “So priketh hem nature in hir corages”", c: "Heart, spirit, desire", o: ["Bravery in battle", "Coins", "A courtyard"], n: "Spring stirs the birds so much they sing all night, and people long to go on pilgrimage."},
    m: [["But, soft! what light through yonder window breaks?", "Romeo and Juliet"], ["This royal throne of kings, this scepter'd isle", "Richard II"], ["Cry 'God for Harry, England, and Saint George!'", "Henry V"], ["I will wear my heart upon my sleeve", "Othello"]],
    q: {ask: "Earliest to latest died", i: [["Thomas Malory", "1471"], ["Philip Sidney", "1586"], ["Edmund Spenser", "1599"], ["John Donne", "1631"]], n: "Sidney died of a wound from the Battle of Zutphen. The story goes that he gave his water to a dying soldier."}
  },
  /* Thu */ {
    s: {t: "One day I wrote her name upon the strand", c: "Edmund Spenser", o: ["Philip Sidney", "William Shakespeare", "Michael Drayton"], n: "From Spenser's sonnet sequence Amoretti (1595). The waves wash the name away; the poem promises to keep it forever."},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["Misery acquaints a man with strange bedfellows", "Ill met by moonlight, proud Titania", "But screw your courage to the sticking-place"], odd: "All that glitters is not gold", n: "Shakespeare wrote “All that glisters is not gold”, in The Merchant of Venice."},
    p: {t: "soote", h: "From the first line of The Canterbury Tales: “Whan that Aprill with his shoures soote”", c: "Sweet", o: ["Sooty", "Soft", "Short"], n: "April's sweet showers soak March's drought to the root."},
    m: [["Misery acquaints a man with strange bedfellows", "The Tempest"], ["Ill met by moonlight, proud Titania", "A Midsummer Night's Dream"], ["My mistress' eyes are nothing like the sun", "Sonnet 130"], ["Let me not to the marriage of true minds", "Sonnet 116"]],
    q: {ask: "Earliest to latest published", i: [["The Shepheardes Calender", "1579"], ["Venus and Adonis", "1593"], ["Shakespeare's Sonnets", "1609"], ["The King James Bible", "1611"]], n: "Venus and Adonis, a long poem, was Shakespeare's first work in print, and a bestseller."}
  },
  /* Fri */ {
    s: {t: "Come live with me and be my love", c: "Christopher Marlowe", o: ["Walter Raleigh", "John Donne", "William Shakespeare"], n: "Marlowe's The Passionate Shepherd to His Love. Raleigh wrote a famous reply, The Nymph's Reply to the Shepherd."},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["Good night, sweet prince", "Nothing will come of nothing", "Something wicked this way comes"], odd: "Water, water, everywhere, nor any drop to drink", n: "That's Coleridge's Rime of the Ancient Mariner (1798)."},
    p: {t: "lusty", h: "From the General Prologue, of the Squire: “A lovyere and a lusty bacheler”", c: "Cheerful, full of life", o: ["Greedy", "Lazy", "Very tall"], n: "The Squire is twenty, curly-haired, and sings or plays the flute all day."},
    m: [["Cowards die many times before their deaths", "Julius Caesar"], ["If you prick us, do we not bleed?", "The Merchant of Venice"], ["The fool doth think he is wise", "As You Like It"], ["Good night, sweet prince", "Hamlet"]],
    q: {ask: "Earliest to latest written", i: [["The Spanish Tragedy", "c. 1587"], ["Henry V", "1599"], ["Othello", "c. 1603"], ["The Alchemist", "1610"]], n: "The Alchemist is Ben Jonson's comedy of London con artists."}
  },
  /* Sat: Chaucer */ {
    s: {t: "Mordre wol out", c: "Geoffrey Chaucer", o: ["William Langland", "John Gower", "Thomas Malory"], n: "Murder will out. Chaucer uses it in both the Prioress's Tale and the Nun's Priest's Tale."},
    x: {f: "lines by Chaucer", w: ["And gladly wolde he lerne and gladly teche", "Wel koude he sitte on hors and faire ryde", "The smylere with the knyf under the cloke"], odd: "Sithen the sege and the assaut watz sesed at Troye", n: "That's the opening of Sir Gawain and the Green Knight, by an unknown poet writing at about the same time as Chaucer."},
    p: {t: "fetisly", h: "From the General Prologue, of the Prioress's French: “ful faire and fetisly”", c: "Elegantly", o: ["Quickly", "Loudly", "Badly"], n: "She spoke it after the school of Stratford-at-Bow, for Paris French was unknown to her: a gentle dig."},
    m: [["wight", "person"], ["sooth", "truth"], ["swynke", "work"], ["quod", "said"]],
    q: {ask: "In the order they appear in the General Prologue", i: [["The Knight", "portrait 1"], ["The Prioress", "portrait 4"], ["The Wife of Bath", "portrait 15"], ["The Pardoner", "portrait 22"]], n: "The Host, Harry Bailly, comes last of all, and proposes the storytelling contest."}
  },
  /* Sun */ {
    s: {t: "Better to reign in Hell, than serve in Heav'n", c: "John Milton", o: ["John Donne", "Christopher Marlowe", "Edmund Spenser"], n: "Satan's boast in Paradise Lost (1667)."},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["This blessed plot, this earth, this realm, this England", "Now cracks a noble heart", "Lay on, Macduff"], odd: "Discretion is the better part of valour", n: "Falstaff says it the other way round: “The better part of valour is discretion.”"},
    p: {t: "trouthe", h: "From the General Prologue, of the Knight, who loved “Trouthe and honour, fredom and curteisie”", c: "Faithfulness, keeping your word", o: ["Fact", "A truce", "A trout"], n: "Trouthe meant loyalty and integrity, not just being correct."},
    m: [["This blessed plot, this earth, this realm, this England", "Richard II"], ["Lay on, Macduff", "Macbeth"], ["Now cracks a noble heart", "Hamlet"], ["the wild-goose chase", "Romeo and Juliet"]],
    q: {ask: "Earliest to latest born", i: [["Robert Herrick", "1591"], ["George Herbert", "1593"], ["John Milton", "1608"], ["Andrew Marvell", "1621"]], n: "Herrick's “Gather ye rosebuds while ye may” is one of the most quoted lines of the age."}
  },
  /* ---------- Week 3 ---------- */
  /* Mon */ {
    s: {t: "Gather ye rosebuds while ye may", c: "Robert Herrick", o: ["Ben Jonson", "John Donne", "Andrew Marvell"], n: "From To the Virgins, to Make Much of Time (1648). Herrick was one of the ‘Sons of Ben’, Jonson's followers."},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["A horse! a horse! my kingdom for a horse!", "Some are born great, some achieve greatness", "To thine own self be true"], odd: "Pride goeth before a fall", n: "A misquote of the Bible, Proverbs 16:18: “Pride goeth before destruction, and an haughty spirit before a fall.”"},
    p: {t: "wif", h: "From the General Prologue: “A good Wif was ther of biside Bathe”", c: "A woman", o: ["A widow", "A weaver", "A wise woman"], n: "Wif simply meant woman, married or not. Though she'd had five husbands."},
    m: [["A horse! a horse! my kingdom for a horse!", "Richard III"], ["To thine own self be true", "Hamlet"], ["But screw your courage to the sticking-place", "Macbeth"], ["My mistress' eyes are nothing like the sun", "Sonnet 130"]],
    q: {ask: "Earliest to latest written", i: [["Doctor Faustus", "c. 1590"], ["Julius Caesar", "1599"], ["King Lear", "c. 1606"], ["The Tempest", "c. 1611"]], n: "The Tempest is often called Shakespeare's farewell to the stage."}
  },
  /* Tue */ {
    s: {t: "Busy old fool, unruly sun", c: "John Donne", o: ["Robert Herrick", "Ben Jonson", "Walter Raleigh"], n: "The opening of Donne's The Sun Rising: a lover telling the sun to go away and leave them in peace."},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["How sharper than a serpent's tooth it is", "Fair is foul, and foul is fair", "O Romeo, Romeo! wherefore art thou Romeo?"], odd: "Blood is thicker than water", n: "Not Shakespeare: an old proverb. Walter Scott used it in 1815."},
    p: {t: "mete", h: "Found throughout Chaucer", c: "Food of any kind", o: ["Meat only", "A meeting", "A measure"], n: "Mete meant any food. Sweetmeats are sweets, and mincemeat has no meat in it."},
    m: [["The fault, dear Brutus, is not in our stars", "Julius Caesar"], ["How sharper than a serpent's tooth it is", "King Lear"], ["O Romeo, Romeo! wherefore art thou Romeo?", "Romeo and Juliet"], ["There are more things in heaven and earth, Horatio", "Hamlet"]],
    q: {ask: "Earliest to latest died", i: [["Geoffrey Chaucer", "1400"], ["Thomas Kyd", "1594"], ["Walter Raleigh", "1618"], ["Ben Jonson", "1637"]], n: "Raleigh was beheaded in 1618. He's said to have called the axe ‘a sharp medicine’."}
  },
  /* Wed */ {
    s: {t: "‘Fool,’ said my Muse to me, ‘look in thy heart, and write.’", c: "Philip Sidney", o: ["Edmund Spenser", "William Shakespeare", "Fulke Greville"], n: "The last line of the first sonnet of Sidney's Astrophel and Stella."},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["Let me not to the marriage of true minds", "Now cracks a noble heart", "Misery acquaints a man with strange bedfellows"], odd: "Money is the root of all evil", n: "A misquote of the Bible: “the love of money is the root of all evil” (1 Timothy 6:10)."},
    p: {t: "wantowne", h: "From the General Prologue: “A Frere ther was, a wantowne and a merye”", c: "Playful, lively", o: ["Wanting", "Wandering", "Wasteful"], n: "The Friar is jolly, charming and not very holy."},
    m: [["Death, be not proud", "Holy Sonnet 10"], ["Come live with me and be my love", "The Passionate Shepherd to His Love"], ["Drink to me only with thine eyes", "Song: To Celia"], ["One day I wrote her name upon the strand", "Amoretti"]],
    q: {ask: "Earliest to latest born", i: [["Walter Raleigh", "c. 1552"], ["Thomas Kyd", "1558"], ["John Fletcher", "1579"], ["Thomas Middleton", "1580"]], n: "Fletcher took over from Shakespeare as the King's Men's main playwright; they wrote Henry VIII together."}
  },
  /* Thu */ {
    s: {t: "They also serve who only stand and wait", c: "John Milton", o: ["John Donne", "George Herbert", "Andrew Marvell"], n: "The last line of Milton's sonnet on his blindness, “When I consider how my light is spent”."},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["Out, out, brief candle!", "I will wear my heart upon my sleeve", "This blessed plot, this earth, this realm, this England"], odd: "The best laid plans of mice and men", n: "That's Robert Burns, To a Mouse (1785), and he wrote “The best-laid schemes o' mice an' men”."},
    p: {t: "swynke", h: "From the General Prologue, of the Monk, who'd rather not “swynken with his handes”", c: "To work hard", o: ["To swim", "To drink", "To swing"], n: "The Plowman, ‘a trewe swynkere’, is one of Chaucer's few wholly good pilgrims."},
    m: [["Out, out, brief candle!", "Macbeth"], ["Nothing will come of nothing", "King Lear"], ["If you prick us, do we not bleed?", "The Merchant of Venice"], ["Ill met by moonlight, proud Titania", "A Midsummer Night's Dream"]],
    q: {ask: "Earliest to latest published", i: [["Caxton's Canterbury Tales", "c. 1476"], ["Le Morte d'Arthur", "1485"], ["Astrophel and Stella", "1591"], ["Paradise Lost", "1667"]], n: "William Caxton printed The Canterbury Tales on one of England's first printing presses."}
  },
  /* Fri */ {
    s: {t: "O eyes, no eyes, but fountains fraught with tears", c: "Thomas Kyd", o: ["William Shakespeare", "Christopher Marlowe", "Robert Greene"], n: "Hieronimo's lament for his murdered son in The Spanish Tragedy. Audiences loved it; later writers mocked it."},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["Love looks not with the eyes, but with the mind", "Cowards die many times before their deaths", "The rest is silence"], odd: "Romeo, Romeo, where art thou Romeo?", n: "Juliet asks “wherefore art thou Romeo?”: why are you Romeo, a Montague? Not where are you."},
    p: {t: "sooth", h: "Found throughout Chaucer: “for sothe”", c: "Truth", o: ["Soot", "South", "Soothing"], n: "A soothsayer is a truth-teller. Forsooth means ‘in truth’, as in this game's name."},
    m: [["O eyes, no eyes, but fountains fraught with tears", "The Spanish Tragedy"], ["Was this the face that launch'd a thousand ships?", "Doctor Faustus"], ["Cover her face; mine eyes dazzle: she died young.", "The Duchess of Malfi"], ["Better to reign in Hell, than serve in Heav'n", "Paradise Lost"]],
    q: {ask: "Earliest to latest written", i: [["Romeo and Juliet", "c. 1595"], ["Julius Caesar", "1599"], ["Othello", "c. 1603"], ["Antony and Cleopatra", "c. 1606"]], n: "Antony and Cleopatra picks up the story of Mark Antony from Julius Caesar."}
  },
  /* Sat: Chaucer */ {
    s: {t: "Ful wys is he that kan hymselven knowe", c: "Geoffrey Chaucer", o: ["John Gower", "John Lydgate", "William Langland"], n: "From the Monk's Tale: very wise is he who can know himself."},
    x: {f: "lines by Chaucer", w: ["Mordre wol out", "A Clerk ther was of Oxenford also", "Ful weel she soong the service dyvyne"], odd: "Sumer is icumen in", n: "That's a Middle English song from about 1250, a century before Chaucer was born."},
    p: {t: "clerk", h: "From the General Prologue: “A Clerk ther was of Oxenford also”", c: "A student or scholar", o: ["An office worker", "A shop assistant", "A judge's secretary"], n: "The Oxford Clerk is thin, poor and would rather have twenty books than fine clothes."},
    m: [["pardee", "by God"], ["trouthe", "loyalty"], ["corage", "heart"], ["soote", "sweet"]],
    q: {ask: "In the order they're told in The Canterbury Tales", i: [["The Knight's Tale", "1st"], ["The Miller's Tale", "2nd"], ["The Reeve's Tale", "3rd"], ["The Cook's Tale", "4th"]], n: "The Cook's Tale breaks off unfinished after a few dozen lines."}
  },
  /* Sun */ {
    s: {t: "What is our life? a play of passion", c: "Walter Raleigh", o: ["John Donne", "Ben Jonson", "William Shakespeare"], n: "The opening of Raleigh's short poem On the Life of Man. Life as a play was a favourite idea of the age."},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["The fool doth think he is wise, but the wise man knows himself to be a fool", "Something wicked this way comes", "Full fathom five thy father lies"], odd: "Eat, drink and be merry", n: "From the Bible, not Shakespeare: “eat, drink, and be merry” is in Luke 12:19."},
    p: {t: "pardee", h: "Found throughout Chaucer", c: "By God! (a mild oath)", o: ["Excuse me", "Goodbye", "Pardon"], n: "From French par Dieu."},
    m: [["Full fathom five thy father lies", "The Tempest"], ["The fool doth think he is wise", "As You Like It"], ["Cry 'God for Harry, England, and Saint George!'", "Henry V"], ["Now is the winter of our discontent", "Richard III"]],
    q: {ask: "Earliest to latest written", i: [["The Faerie Queene (first part)", "1590"], ["Hamlet", "c. 1600"], ["Volpone", "1606"], ["Paradise Lost", "1667"]], n: "The first three books of The Faerie Queene came out in 1590, dedicated to Elizabeth I."}
  },
  /* ---------- Week 4 ---------- */
  /* Mon */ {
    s: {t: "Sweet Thames, run softly, till I end my song", c: "Edmund Spenser", o: ["Philip Sidney", "Michael Drayton", "Samuel Daniel"], n: "The refrain of Spenser's Prothalamion (1596), a poem for a double wedding. T. S. Eliot borrowed it for The Waste Land."},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["The quality of mercy is not strained", "Is this a dagger which I see before me", "I am a man more sinned against than sinning"], odd: "Fools rush in where angels fear to tread", n: "That's Alexander Pope, An Essay on Criticism (1711), a century after Shakespeare."},
    p: {t: "harlot", h: "Chaucer calls the Summoner “a gentil harlot and a kynde”", c: "A rascal (often a man)", o: ["A dancer", "A beggar woman", "A juggler"], n: "In Chaucer a harlot could be any low-living rogue. The modern meaning took over later."},
    m: [["Cry ‘God for Harry, England, and Saint George!’", "Henry V"], ["To sleep: perchance to dream: ay, there's the rub", "Hamlet"], ["What's in a name?", "Romeo and Juliet"], ["Lord, what fools these mortals be!", "A Midsummer Night's Dream"]],
    q: {ask: "Earliest to latest written", i: [["Gammer Gurton's Needle", "c. 1553"], ["Tamburlaine", "c. 1587"], ["Hamlet", "c. 1600"], ["The White Devil", "1612"]], n: "Gammer Gurton's Needle is one of the first English comedies: a whole village in uproar over a lost needle."}
  },
  /* Tue */ {
    s: {t: "Go and catch a falling star", c: "John Donne", o: ["Ben Jonson", "Andrew Marvell", "Robert Herrick"], n: "Donne's Song lists impossible tasks, and finding a woman both true and fair is the last of them."},
    x: {f: "lines by Christopher Marlowe", w: ["Come live with me and be my love", "Who ever loved that loved not at first sight?", "Why, this is hell, nor are we out of it"], odd: "Shall I compare thee to a summer's day?", n: "That's Shakespeare, Sonnet 18. Marlowe's Mephistopheles says “Why, this is hell, nor are we out of it” in Doctor Faustus."},
    p: {t: "gentil", h: "The Knight is “a verray, parfit gentil knyght”", c: "Noble, well-bred", o: ["Soft and kind", "Timid", "Elderly"], n: "Gentil meant noble in birth and in behaviour. Gentle, genteel and gentleman all grew from it."},
    m: [["O brave new world, that has such people in't!", "The Tempest"], ["I come to bury Caesar, not to praise him", "Julius Caesar"], ["Get thee to a nunnery", "Hamlet"], ["Some Cupid kills with arrows, some with traps", "Much Ado About Nothing"]],
    q: {ask: "Earliest to latest written", i: [["Doctor Faustus", "c. 1592"], ["Every Man in His Humour", "1598"], ["The Knight of the Burning Pestle", "1607"], ["'Tis Pity She's a Whore", "c. 1630"]], n: "Every Man in His Humour (1598) had Shakespeare himself in the first cast."}
  },
  /* Wed */ {
    s: {t: "Th' expense of spirit in a waste of shame", c: "William Shakespeare", o: ["John Donne", "Philip Sidney", "Michael Drayton"], n: "The opening of Sonnet 129, a furious sonnet about lust."},
    x: {f: "lines by John Donne", w: ["No man is an island", "Death, be not proud", "Batter my heart, three-person'd God"], odd: "The proper study of mankind is man", n: "That's Alexander Pope again, An Essay on Man (1734)."},
    p: {t: "nones", h: "From “for the nones”, in The Canterbury Tales", c: "The occasion, the purpose", o: ["Nuns", "Nine o'clock prayers", "Nothing at all"], n: "Middle English <i>for then anes</i>, for the once, got misdivided as for the nones. Nonce comes from the same slip."},
    m: [["The game's afoot", "Henry V"], ["I am constant as the northern star", "Julius Caesar"], ["Parting is such sweet sorrow", "Romeo and Juliet"], ["If music be the food of love, play on", "Twelfth Night"]],
    q: {ask: "Earliest to latest written", i: [["The Comedy of Errors", "c. 1594"], ["Much Ado About Nothing", "c. 1598"], ["Macbeth", "c. 1606"], ["The Tempest", "c. 1611"]], n: "The Comedy of Errors is Shakespeare's shortest play: two sets of twins and a great deal of mistaken identity."}
  },
  /* Thu */ {
    s: {t: "Since there's no help, come let us kiss and part", c: "Michael Drayton", o: ["William Shakespeare", "Philip Sidney", "Samuel Daniel"], n: "The opening of sonnet 61 in Drayton's Idea. Plenty of readers guess Shakespeare."},
    x: {f: "lines exactly as Shakespeare wrote them", w: ["Frailty, thy name is woman!", "Exit, pursued by a bear", "Love all, trust a few, do wrong to none"], odd: "Cleanliness is next to godliness", n: "A saying made famous by John Wesley's sermons in the 1700s. Not Shakespeare."},
    p: {t: "ywis", h: "A filler word Chaucer uses again and again", c: "Certainly", o: ["Wisely", "I wish", "Unknowingly"], n: "From Old English <i>gewis</i>, sure. Later readers misread it as I wis, I know."},
    m: [["We few, we happy few, we band of brothers", "Henry V"], ["Beware the ides of March", "Julius Caesar"], ["The play's the thing", "Hamlet"], ["If you prick us, do we not bleed?", "The Merchant of Venice"]],
    q: {ask: "Earliest to latest", i: [["Sir Gawain and the Green Knight", "late 1300s"], ["The Book of Margery Kempe", "1430s"], ["Tottel's Miscellany", "1557"], ["Gorboduc", "1561"]], n: "Tottel's Miscellany (1557) first printed the sonnets of Wyatt and Surrey, who brought the form into English."}
  },
  /* Fri */ {
    s: {t: "Hark, hark! the lark at heaven's gate sings", c: "William Shakespeare", o: ["Ben Jonson", "Thomas Campion", "John Lyly"], n: "A song from Cymbeline, later set to music by Schubert."},
    x: {f: "lines by Ben Jonson", w: ["Drink to me only with thine eyes", "He was not of an age, but for all time!", "Come, my Celia, let us prove"], odd: "Gather ye rosebuds while ye may", n: "That's Robert Herrick, one of the ‘Sons of Ben’ who idolised Jonson."},
    p: {t: "ferthyng", h: "No “ferthyng” of grease is seen in the Prioress's cup", c: "A tiny speck", o: ["A farthing coin", "A feather", "A fourth helping"], n: "Literally a fourth part, like the coin. The Prioress wipes her lip so well that not the smallest trace is left."},
    m: [["O, that this too too solid flesh would melt", "Hamlet"], ["This was the noblest Roman of them all", "Julius Caesar"], ["Is love a tender thing?", "Romeo and Juliet"], ["The miserable have no other medicine but only hope", "Measure for Measure"]],
    q: {ask: "Earliest to latest published", i: [["The Book of Common Prayer", "1549"], ["Foxe's Book of Martyrs", "1563"], ["Holinshed's Chronicles", "1577"], ["Bacon's Essays", "1597"]], n: "Shakespeare mined Holinshed's Chronicles for Macbeth, King Lear and his history plays."}
  },
  /* Sat */ {
    s: {t: "Pacience is an heigh vertu, certeyn", c: "Geoffrey Chaucer", o: ["John Gower", "John Lydgate", "Thomas Hoccleve"], n: "From the Franklin's Tale, a story about keeping promises."},
    x: {f: "lines by Chaucer", w: ["And smale foweles maken melodye", "Thanne longen folk to goon on pilgrimages", "So hadde I spoken with hem everichon"], odd: "Ich am of Irlaunde", n: "That's an anonymous medieval lyric: “Ich am of Irlaunde, / And of the holy londe / Of Irlande.”"},
    p: {t: "lief", h: "As in “I had as lief”", c: "Dear, gladly", o: ["A leaf", "A thief", "A lie"], n: "Lief meant dear or willingly. “I'd as lief” (I'd as gladly) was still heard in the 1900s."},
    m: [["anon", "at once"], ["hight", "was called"], ["wenche", "girl, servant"], ["solas", "comfort, pleasure"]],
    q: {ask: "In the order they appear in the General Prologue", i: [["The Squire", "portrait 2"], ["The Monk", "portrait 5"], ["The Clerk", "portrait 8"], ["The Miller", "portrait 18"]], n: "The Miller leads the pilgrims out of London, playing the bagpipes."}
  },
  /* Sun */ {
    s: {t: "The man that hath no music in himself", c: "William Shakespeare", o: ["Ben Jonson", "Thomas Campion", "John Dowland"], n: "Lorenzo in The Merchant of Venice says such a man “Is fit for treasons, stratagems and spoils”."},
    x: {f: "lines from The Tempest", w: ["Our revels now are ended", "Misery acquaints a man with strange bedfellows", "Hell is empty, and all the devils are here"], odd: "All the world's a stage", n: "That's Jaques in As You Like It: “And all the men and women merely players.”"},
    p: {t: "hostelrye", h: "The pilgrims meet at the Tabard, a “hostelrye” in Southwark", c: "An inn", o: ["A hospital", "A stable", "A chapel"], n: "Hostel, hotel and hospital are all relatives, from Latin <i>hospes</i>, a guest."},
    m: [["The lunatic, the lover and the poet", "A Midsummer Night's Dream"], ["Pride, pomp and circumstance of glorious war", "Othello"], ["The wheel is come full circle", "King Lear"], ["Neither rhyme nor reason", "As You Like It"]],
    q: {ask: "Earliest to latest written", i: [["Richard III", "c. 1593"], ["Romeo and Juliet", "c. 1595"], ["Hamlet", "c. 1600"], ["The Tempest", "c. 1611"]], n: "The Tempest is often read as Shakespeare's farewell to the stage: Prospero gives up his magic."}
  }
];
