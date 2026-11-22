// Inkling puzzles, by day of the week (Monday first): words first coined in fiction. Saturday leans to science fiction.
// DAYS is a run of whole weeks; the game picks today's weekday, cycling through the weeks.
// Five rounds a day:
//   p = "Who coined it?"  t = the word, h = what it means, c = the writer, o = three wrong writers (same kind of writer), n = note
//   x = "Odd one out"     f = what three share (reads after "The other three are"), w = three words coined in fiction, odd = one that wasn't, n = note
//   m = "Match them"      four [word, book or play] pairs
//   q = "Put in order"    ask = what to order by, i = [word, year] pairs in the RIGHT order, n = note
//   s = "Which book?"     t = the word, c = the book or play it came from, o = three wrong ones (ideally by the same writer or from the same era), n = note
// Only use coinages that are well attested. "Popularised by" isn't "coined by".
const DAYS = [
  /* ---------- Week 1 ---------- */
  /* Mon */ {
    p: {t: "chortle", h: "To chuckle gleefully, a blend of chuckle and snort.", c: "Lewis Carroll", o: ["Edward Lear", "Roald Dahl", "P. G. Wodehouse"], n: "“He chortled in his joy”, in Jabberwocky, from Through the Looking-Glass (1871). Carroll gave us galumph in the same poem."},
    x: {f: "words coined in fiction", w: ["nerd", "yahoo", "scrooge"], odd: "sandwich", n: "Sandwich comes from a real man, the 4th Earl of Sandwich, who liked his meat between two slices of bread."},
    m: [["Big Brother", "Nineteen Eighty-Four"], ["Shangri-La", "Lost Horizon"], ["pandemonium", "Paradise Lost"], ["Lilliputian", "Gulliver's Travels"]],
    q: {ask: "Oldest to newest coinage", i: [["utopia", "1516"], ["Lilliputian", "1726"], ["robot", "1920"], ["metaverse", "1992"]], n: "Thomas More's Utopia is a pun in Greek: “no place”, which sounds like “good place”."},
    s: {t: "gaslighting", c: "Gas Light", o: ["Rebecca", "Jane Eyre", "The Woman in White"], n: "In Patrick Hamilton's 1938 play, a husband dims the gas lights and insists his wife is imagining it. The 1944 film made it famous."}
  },
  /* Tue */ {
    p: {t: "grok", h: "To understand something completely and intuitively.", c: "Robert A. Heinlein", o: ["Isaac Asimov", "Ray Bradbury", "Philip K. Dick"], n: "From Stranger in a Strange Land (1961), where it's a Martian word that literally means “to drink”."},
    x: {f: "words coined in fiction", w: ["robot", "pollyanna", "Svengali"], odd: "meme", n: "Meme was coined by the biologist Richard Dawkins in The Selfish Gene (1976), a work of science, not fiction."},
    m: [["scrooge", "A Christmas Carol"], ["doublethink", "Nineteen Eighty-Four"], ["yahoo", "Gulliver's Travels"], ["freelance", "Ivanhoe"]],
    q: {ask: "Oldest to newest coinage", i: [["pandemonium", "1667"], ["Svengali", "1894"], ["grinch", "1957"], ["muggle", "1997"]], n: "Svengali is the sinister hypnotist in George du Maurier's novel Trilby."},
    s: {t: "Walter Mitty", c: "The Secret Life of Walter Mitty", o: ["Three Men in a Boat", "The Diary of a Nobody", "Lucky Jim"], n: "James Thurber's 1939 story follows a mild man lost in daydreams of heroics. A Walter Mitty is a fantasist."}
  },
  /* Wed */ {
    p: {t: "blatant", h: "Done openly and shamelessly.", c: "Edmund Spenser", o: ["William Shakespeare", "Christopher Marlowe", "John Milton"], n: "Spenser's Blatant Beast in The Faerie Queene (1596) is a monster of slander with a thousand tongues."},
    x: {f: "words coined in fiction", w: ["Catch-22", "Frankenstein", "doublethink"], odd: "boycott", n: "Boycott comes from a real man, Captain Charles Boycott, an Irish land agent shunned by the whole district in 1880."},
    m: [["chortle", "Through the Looking-Glass"], ["Svengali", "Trilby"], ["Pooh-Bah", "The Mikado"], ["grinch", "How the Grinch Stole Christmas!"]],
    q: {ask: "Oldest to newest coinage", i: [["Lilliputian", "1726"], ["scrooge", "1843"], ["nerd", "1950"], ["cyberspace", "1982"]], n: "Gibson first used cyberspace in a 1982 short story, Burning Chrome, then made it famous in Neuromancer."},
    s: {t: "Shangri-La", c: "Lost Horizon", o: ["The Razor's Edge", "A Passage to India", "Kim"], n: "James Hilton's 1933 novel hides the paradise of Shangri-La in a remote Tibetan valley."}
  },
  /* Thu */ {
    p: {t: "freelance", h: "Working for yourself, for different clients.", c: "Walter Scott", o: ["Alexandre Dumas", "Robert Louis Stevenson", "Thomas Malory"], n: "In Ivanhoe (1819), free lances are knights who sell their lances to whoever will pay."},
    x: {f: "words coined in fiction", w: ["muggle", "Lilliputian", "gaslighting"], odd: "brainwashing", n: "Brainwashing came from journalism: a 1950 newspaper article about indoctrination in China."},
    m: [["doublethink", "Nineteen Eighty-Four"], ["metaverse", "Snow Crash"], ["ansible", "Rocannon's World"], ["Svengali", "Trilby"]],
    q: {ask: "Oldest to newest coinage", i: [["utopia", "1516"], ["pandemonium", "1667"], ["yahoo", "1726"], ["scrooge", "1843"]], n: "Swift's Yahoos are brutish humans, ruled by wise talking horses."},
    s: {t: "malapropism", c: "The Rivals", o: ["The School for Scandal", "She Stoops to Conquer", "The Beggar's Opera"], n: "Mrs Malaprop, in Sheridan's The Rivals (1775), mangles long words: “as headstrong as an allegory on the banks of the Nile.” The School for Scandal is Sheridan's too."}
  },
  /* Fri */ {
    p: {t: "pandemonium", h: "Wild uproar and chaos.", c: "John Milton", o: ["William Blake", "John Bunyan", "Christopher Marlowe"], n: "In Paradise Lost (1667), Pandæmonium is the capital of Hell: “all the demons”."},
    x: {f: "words coined in fiction", w: ["grinch", "waldo", "utopia"], odd: "googol", n: "Googol, 1 followed by 100 zeros, was named by a mathematician's nine-year-old nephew, Milton Sirotta."},
    m: [["yahoo", "Gulliver's Travels"], ["gargantuan", "Gargantua and Pantagruel"], ["Big Brother", "Nineteen Eighty-Four"], ["chortle", "Through the Looking-Glass"]],
    q: {ask: "Oldest to newest coinage", i: [["Frankenstein", "1818"], ["chortle", "1871"], ["Svengali", "1894"], ["Shangri-La", "1933"]], n: "Strictly, Frankenstein is the scientist, not the monster."},
    s: {t: "nerd", c: "If I Ran the Zoo", o: ["The Cat in the Hat", "Green Eggs and Ham", "Horton Hears a Who!"], n: "All four are Dr Seuss. The nerd is one of the odd creatures in If I Ran the Zoo (1950)."}
  },
  /* Sat: science fiction */ {
    p: {t: "robotics", h: "The science of building and using robots.", c: "Isaac Asimov", o: ["Arthur C. Clarke", "H. G. Wells", "Karel Čapek"], n: "Asimov used it in his 1941 story Liar!, thinking it was already a word."},
    x: {f: "words coined in fiction", w: ["Lilliputian", "Svengali", "Pooh-Bah"], odd: "spoonerism", n: "Spoonerism comes from a real man, the Reverend William Spooner of Oxford, famous for swapping his sounds."},
    m: [["robot", "R.U.R."], ["cyberspace", "Burning Chrome"], ["thoughtcrime", "Nineteen Eighty-Four"], ["muggle", "Harry Potter and the Philosopher's Stone"]],
    q: {ask: "Oldest to newest science fiction coinage", i: [["credit card", "1888"], ["waldo", "1942"], ["grok", "1961"], ["cyberspace", "1982"]], n: "A waldo, a remote-controlled mechanical hand, is from a Heinlein story."},
    s: {t: "credit card", c: "Looking Backward", o: ["The Time Machine", "Erewhon", "News from Nowhere"], n: "Edward Bellamy's 1888 novel imagines the year 2000, when everyone pays with a card instead of cash."}
  },
  /* Sun */ {
    p: {t: "yahoo", h: "A rough, rude, loutish person.", c: "Jonathan Swift", o: ["Daniel Defoe", "Laurence Sterne", "Henry Fielding"], n: "In Gulliver's Travels (1726), the Yahoos are brutish humans, ruled by wise talking horses called Houyhnhnms."},
    x: {f: "words coined in fiction", w: ["Walter Mitty", "jabberwocky", "Frankenstein"], odd: "silhouette", n: "Silhouette comes from a real man, Étienne de Silhouette, a penny-pinching French finance minister."},
    m: [["Room 101", "Nineteen Eighty-Four"], ["Shangri-La", "Lost Horizon"], ["galumph", "Through the Looking-Glass"], ["gaslighting", "Gas Light"]],
    q: {ask: "Oldest to newest coinage", i: [["pandemonium", "1667"], ["freelance", "1819"], ["pollyanna", "1913"], ["Catch-22", "1961"]], n: "Pollyanna, in Eleanor H. Porter's novel, plays “the glad game”, finding something to be glad about in everything."},
    s: {t: "quark", c: "Finnegans Wake", o: ["Ulysses", "A Portrait of the Artist as a Young Man", "Dubliners"], n: "All four are James Joyce. “Three quarks for Muster Mark!” is in Finnegans Wake (1939); the physicist Murray Gell-Mann borrowed it in 1963."}
  },
  /* ---------- Week 2 ---------- */
  /* Mon */ {
    p: {t: "quixotic", h: "Idealistic in a noble but hopelessly impractical way.", c: "Miguel de Cervantes", o: ["Lope de Vega", "François Rabelais", "Giovanni Boccaccio"], n: "From Don Quixote (1605), the dreamy knight who tilts at windmills. English made the adjective in the 1700s."},
    x: {f: "words coined in fiction", w: ["Pickwickian", "Micawber", "Gradgrind"], odd: "cardigan", n: "Cardigan comes from a real man, the 7th Earl of Cardigan, who led the Charge of the Light Brigade."},
    m: [["Man Friday", "Robinson Crusoe"], ["Panglossian", "Candide"], ["Ruritanian", "The Prisoner of Zenda"], ["newspeak", "Nineteen Eighty-Four"]],
    q: {ask: "Oldest to newest coinage", i: [["Man Friday", "1719"], ["Panglossian", "1759"], ["Ruritanian", "1894"], ["Stepford wife", "1972"]], n: "Ruritania is the made-up kingdom in Anthony Hope's The Prisoner of Zenda."},
    s: {t: "Micawber", c: "David Copperfield", o: ["Great Expectations", "Bleak House", "Little Dorrit"], n: "All four are Dickens. Mr Micawber is always sure that something will turn up: a Micawber is a hopeless optimist."}
  },
  /* Tue */ {
    p: {t: "terraforming", h: "Reshaping a planet to make it like Earth.", c: "Jack Williamson", o: ["Isaac Asimov", "Robert A. Heinlein", "Arthur C. Clarke"], n: "From his 1942 science-fiction story Collision Orbit."},
    x: {f: "Lewis Carroll's words", w: ["frabjous", "Bandersnatch", "galumph"], odd: "bloomers", n: "Bloomers come from a real woman, Amelia Bloomer, who championed loose trousers for women in the 1850s."},
    m: [["Fagin", "Oliver Twist"], ["Pecksniffian", "Martin Chuzzlewit"], ["Gradgrind", "Hard Times"], ["Micawber", "David Copperfield"]],
    q: {ask: "Oldest to newest coinage", i: [["Tartuffe", "1664"], ["Mrs Grundy", "1798"], ["Jekyll and Hyde", "1886"], ["Babbitt", "1922"]], n: "Mrs Grundy never appears in Thomas Morton's play Speed the Plough: the characters just keep asking what she'll say."},
    s: {t: "Ruritanian", c: "The Prisoner of Zenda", o: ["King Solomon's Mines", "The Thirty-Nine Steps", "The Riddle of the Sands"], n: "Anthony Hope's 1894 adventure is set in Ruritania, a made-up Central European kingdom of uniforms and palace plots."}
  },
  /* Wed */ {
    p: {t: "newspeak", h: "Slippery official language meant to mislead.", c: "George Orwell", o: ["Aldous Huxley", "H. G. Wells", "Evelyn Waugh"], n: "In Nineteen Eighty-Four (1949), the Party trims the language so that rebellious thoughts can't be put into words."},
    x: {f: "words coined in fiction", w: ["Man Friday", "Rip Van Winkle", "Peter Pan"], odd: "maverick", n: "Maverick comes from a real man, Samuel Maverick, a Texas rancher who didn't brand his calves."},
    m: [["quixotic", "Don Quixote"], ["Lilliputian", "Gulliver's Travels"], ["Rip Van Winkle", "The Sketch Book"], ["Stepford wife", "The Stepford Wives"]],
    q: {ask: "Oldest to newest coinage", i: [["pandemonium", "1667"], ["Pickwickian", "1836"], ["Peter Pan", "1902"], ["grok", "1961"]], n: "Peter Pan first appeared in Barrie's 1902 novel The Little White Bird, two years before the famous play."},
    s: {t: "Babbitt", c: "Babbitt", o: ["Main Street", "Elmer Gantry", "Arrowsmith"], n: "All four are Sinclair Lewis novels. George F. Babbitt (1922) is a smug small-town businessman; a Babbitt is a conformist."}
  },
  /* Thu */ {
    p: {t: "Pickwickian", h: "Not meant literally (said of an insult or a word).", c: "Charles Dickens", o: ["William Makepeace Thackeray", "Anthony Trollope", "Wilkie Collins"], n: "In The Pickwick Papers (1836–37), Mr Pickwick and a rival agree their insults were only meant ‘in a Pickwickian sense’."},
    x: {f: "words coined in fiction", w: ["Ruritanian", "Shangri-La", "Lilliputian"], odd: "guillotine", n: "Guillotine comes from a real man, Dr Joseph-Ignace Guillotin, who argued for a quicker, kinder execution."},
    m: [["Jekyll and Hyde", "Strange Case of Dr Jekyll and Mr Hyde"], ["Svengali", "Trilby"], ["terraforming", "Collision Orbit"], ["Pickwickian", "The Pickwick Papers"]],
    q: {ask: "Oldest to newest science fiction coinage", i: [["credit card", "1888"], ["robot", "1920"], ["terraforming", "1942"], ["cyberspace", "1982"]], n: "Robot comes from Czech robota, ‘forced labour’."},
    s: {t: "Man Friday", c: "Robinson Crusoe", o: ["Moll Flanders", "Gulliver's Travels", "Treasure Island"], n: "Crusoe names his companion after the day they met. A man (or girl) Friday is a loyal helper."}
  },
  /* Fri */ {
    p: {t: "Panglossian", h: "Cheerful to the point of foolishness, whatever goes wrong.", c: "Voltaire", o: ["Jean-Jacques Rousseau", "Denis Diderot", "Molière"], n: "Dr Pangloss, in Candide (1759), insists all is for the best in the best of all possible worlds."},
    x: {f: "words coined in fiction", w: ["Stepford wife", "Walter Mitty", "Babbitt"], odd: "nicotine", n: "Nicotine comes from a real man, Jean Nicot, who sent tobacco to the French court in 1560."},
    m: [["Ruritanian", "The Prisoner of Zenda"], ["Pickwickian", "The Pickwick Papers"], ["newspeak", "Nineteen Eighty-Four"], ["Panglossian", "Candide"]],
    q: {ask: "Oldest to newest coinage", i: [["Don Juan", "1630"], ["Lothario", "1703"], ["Micawber", "1850"], ["Stepford wife", "1972"]], n: "Don Juan first appeared in a Spanish play, The Trickster of Seville, usually credited to Tirso de Molina."},
    s: {t: "Don Juan", c: "The Trickster of Seville", o: ["Life Is a Dream", "Fuenteovejuna", "The Dog in the Manger"], n: "Tirso de Molina's play (about 1630) introduced the legendary seducer. The other three are Spanish Golden Age plays too."}
  },
  /* Sat: science fiction */ {
    p: {t: "positronic", h: "Describing the artificial brain of a robot.", c: "Isaac Asimov", o: ["Arthur C. Clarke", "Robert A. Heinlein", "Philip K. Dick"], n: "Asimov's robots have positronic brains, from his stories of the early 1940s. Star Trek's Data has one too."},
    x: {f: "science fiction coinages", w: ["cyberspace", "terraforming", "robotics"], odd: "computer", n: "Computer goes back to the 1600s, when it meant a person who did calculations."},
    m: [["grok", "Stranger in a Strange Land"], ["metaverse", "Snow Crash"], ["cyberspace", "Burning Chrome"], ["robot", "R.U.R."]],
    q: {ask: "Oldest to newest science fiction coinage", i: [["robot", "1920"], ["robotics", "1941"], ["grok", "1961"], ["metaverse", "1992"]], n: "Neal Stephenson's Snow Crash (1992) gave us the metaverse, long before Facebook renamed itself Meta."},
    s: {t: "newspeak", c: "Nineteen Eighty-Four", o: ["Brave New World", "Fahrenheit 451", "We"], n: "Orwell's Newspeak shrinks the language every year. Yevgeny Zamyatin's We (1924) was one of his inspirations."}
  },
  /* Sun */ {
    p: {t: "Brobdingnagian", h: "Enormous.", c: "Jonathan Swift", o: ["Daniel Defoe", "Henry Fielding", "Laurence Sterne"], n: "Brobdingnag is the land of giants in Gulliver's Travels (1726), the opposite of tiny Lilliput."},
    x: {f: "words from Dickens's novels", w: ["Fagin", "Pecksniffian", "scrooge"], odd: "sideburns", n: "Sideburns come from a real man, the American Civil War general Ambrose Burnside, and his enormous whiskers."},
    m: [["Brobdingnagian", "Gulliver's Travels"], ["Fagin", "Oliver Twist"], ["Mrs Grundy", "Speed the Plough"], ["Don Juan", "The Trickster of Seville"]],
    q: {ask: "Oldest to newest coinage", i: [["Lilliputian", "1726"], ["Fagin", "1838"], ["Ruritanian", "1894"], ["Babbitt", "1922"]], n: "A Fagin is someone who trains others to steal, after the gang leader in Oliver Twist."},
    s: {t: "Jekyll and Hyde", c: "Strange Case of Dr Jekyll and Mr Hyde", o: ["Treasure Island", "Kidnapped", "The Master of Ballantrae"], n: "All four are Robert Louis Stevenson. His 1886 novella made the name a byword for a split personality."}
  },
  /* ---------- Week 3 ---------- */
  /* Mon */ {
    p: {t: "Mrs Grundy", h: "A prude, always worried what the neighbours will think.", c: "Thomas Morton", o: ["Richard Brinsley Sheridan", "Oliver Goldsmith", "John Gay"], n: "From his play Speed the Plough (1798). Mrs Grundy never appears: the characters keep asking ‘What will Mrs Grundy say?’"},
    x: {f: "words coined in fiction", w: ["Pickwickian", "pollyanna", "Mrs Grundy"], odd: "gremlin", n: "Gremlin was RAF slang before Roald Dahl wrote The Gremlins (1943). Popularised isn't coined."},
    m: [["Mrs Grundy", "Speed the Plough"], ["Svengali", "Trilby"], ["Lothario", "The Fair Penitent"], ["malapropism", "The Rivals"]],
    q: {ask: "Oldest to newest coinage", i: [["utopia", "1516"], ["Don Juan", "1630"], ["Mrs Grundy", "1798"], ["Peter Pan", "1902"]], n: "All four started on the page or the stage before they became everyday words."},
    s: {t: "Sherlock", c: "A Study in Scarlet", o: ["The Moonstone", "The Woman in White", "The Mystery of Edwin Drood"], n: "Holmes first appeared in Arthur Conan Doyle's A Study in Scarlet (1887). The other three are Victorian mysteries too."}
  },
  /* Tue */ {
    p: {t: "unperson", h: "Someone officially erased, as if they never existed.", c: "George Orwell", o: ["Aldous Huxley", "Arthur Koestler", "Anthony Burgess"], n: "In Nineteen Eighty-Four (1949), people who fall foul of the Party are vaporised and become unpersons."},
    x: {f: "words coined by Jonathan Swift", w: ["Brobdingnagian", "Houyhnhnm", "Lilliputian"], odd: "gargantuan", n: "Gargantuan is Rabelais's, from his giant Gargantua, nearly two centuries before Gulliver."},
    m: [["unperson", "Nineteen Eighty-Four"], ["Ruritanian", "The Prisoner of Zenda"], ["Pecksniffian", "Martin Chuzzlewit"], ["credit card", "Looking Backward"]],
    q: {ask: "Oldest to newest coinage", i: [["Tartuffe", "1664"], ["Panglossian", "1759"], ["Sherlock", "1887"], ["Catch-22", "1961"]], n: "Catch-22 is Joseph Heller's: you can't be excused flying if you're sane enough to ask."},
    s: {t: "Tartuffe", c: "Tartuffe", o: ["The Misanthrope", "The Miser", "The Imaginary Invalid"], n: "All four are Molière's. Tartuffe (1664) is a religious hypocrite; a tartuffe is a pious fraud."}
  },
  /* Wed */ {
    p: {t: "Babbitt", h: "A smug, conventional businessman.", c: "Sinclair Lewis", o: ["F. Scott Fitzgerald", "Sherwood Anderson", "Theodore Dreiser"], n: "From his 1922 novel Babbitt."},
    x: {f: "Dr Seuss's words", w: ["Oobleck", "grinch", "nerd"], odd: "mesmerise", n: "Mesmerise comes from a real man, Franz Mesmer, an 18th-century doctor who claimed to cure people with ‘animal magnetism’."},
    m: [["frabjous", "Through the Looking-Glass"], ["Brobdingnagian", "Gulliver's Travels"], ["Fagin", "Oliver Twist"], ["Shangri-La", "Lost Horizon"]],
    q: {ask: "Oldest to newest coinage", i: [["Man Friday", "1719"], ["Rip Van Winkle", "1819"], ["frabjous", "1871"], ["Oobleck", "1949"]], n: "Oobleck is the sticky green goo in Dr Seuss's Bartholomew and the Oobleck. Science teachers now use the name for cornflour and water."},
    s: {t: "Rip Van Winkle", c: "The Sketch Book", o: ["The Last of the Mohicans", "Moby-Dick", "The Scarlet Letter"], n: "Washington Irving's tale (1819) of a man who sleeps for twenty years. The Legend of Sleepy Hollow is in the same book."}
  },
  /* Thu */ {
    p: {t: "Peter Pan", h: "Someone who never wants to grow up.", c: "J. M. Barrie", o: ["Kenneth Grahame", "A. A. Milne", "E. Nesbit"], n: "Peter first appeared in Barrie's 1902 novel The Little White Bird, then flew to fame in the 1904 play."},
    x: {f: "words coined in fiction", w: ["Catch-22", "Big Brother", "Shangri-La"], odd: "factoid", n: "Factoid was coined by Norman Mailer in a 1973 book about Marilyn Monroe: a biography, not fiction."},
    m: [["Rip Van Winkle", "The Sketch Book"], ["Jekyll and Hyde", "Strange Case of Dr Jekyll and Mr Hyde"], ["Mrs Grundy", "Speed the Plough"], ["Oobleck", "Bartholomew and the Oobleck"]],
    q: {ask: "Oldest to newest coinage", i: [["yahoo", "1726"], ["scrooge", "1843"], ["Babbitt", "1922"], ["unperson", "1949"]], n: "Scrooge's ‘Bah! Humbug!’ is from A Christmas Carol (1843)."},
    s: {t: "Pecksniffian", c: "Martin Chuzzlewit", o: ["Nicholas Nickleby", "Dombey and Son", "Our Mutual Friend"], n: "Seth Pecksniff preaches virtue while serving himself. All four novels are Dickens's."}
  },
  /* Fri */ {
    p: {t: "Fagin", h: "Someone who trains others, especially children, to steal.", c: "Charles Dickens", o: ["Wilkie Collins", "Elizabeth Gaskell", "George Eliot"], n: "The gang leader in Oliver Twist (1838)."},
    x: {f: "words coined in fiction", w: ["Tartuffe", "Lothario", "Don Juan"], odd: "Casanova", n: "Casanova was a real man, Giacomo Casanova, whose memoirs made his name a byword for a seducer."},
    m: [["Don Juan", "The Trickster of Seville"], ["Panglossian", "Candide"], ["quixotic", "Don Quixote"], ["gargantuan", "Gargantua and Pantagruel"]],
    q: {ask: "Oldest to newest coinage", i: [["gargantuan", "1534"], ["pandemonium", "1667"], ["Brobdingnagian", "1726"], ["Pickwickian", "1836"]], n: "Rabelais's Gargantua (1534) is a giant who eats and drinks enormously."},
    s: {t: "Panglossian", c: "Candide", o: ["Zadig", "Micromégas", "L'Ingénu"], n: "All four are by Voltaire. Candide (1759) mocks the idea that this is the best of all possible worlds."}
  },
  /* Sat: science fiction */ {
    p: {t: "cyberpunk", h: "Science fiction about hackers, high tech and grimy streets.", c: "Bruce Bethke", o: ["William Gibson", "Bruce Sterling", "Neal Stephenson"], n: "It was the title of his short story, written in 1980 and published in 1983. Gibson's Neuromancer made the style famous."},
    x: {f: "science fiction coinages", w: ["metaverse", "terraforming", "positronic"], odd: "television", n: "Television was coined by a Russian scientist, Constantin Perskyi, at the 1900 Paris World's Fair."},
    m: [["terraforming", "Collision Orbit"], ["credit card", "Looking Backward"], ["waldo", "Waldo"], ["unperson", "Nineteen Eighty-Four"]],
    q: {ask: "Oldest to newest science fiction coinage", i: [["credit card", "1888"], ["positronic", "1941"], ["cyberpunk", "1983"], ["metaverse", "1992"]], n: "Bethke wrote his story in 1980, but it wasn't published until 1983."},
    s: {t: "robot", c: "R.U.R.", o: ["The War with the Newts", "The Makropulos Affair", "The White Disease"], n: "All four are Karel Čapek's. His brother Josef suggested robot, from Czech robota, ‘forced labour’."}
  },
  /* Sun */ {
    p: {t: "Ruritanian", h: "Of a small, made-up kingdom full of uniforms and intrigue.", c: "Anthony Hope", o: ["H. Rider Haggard", "John Buchan", "Rudyard Kipling"], n: "From The Prisoner of Zenda (1894)."},
    x: {f: "words coined in fiction", w: ["Micawber", "Gradgrind", "Pecksniffian"], odd: "wellington", n: "Wellington boots are named after a real man, the 1st Duke of Wellington."},
    m: [["Micawber", "David Copperfield"], ["Gradgrind", "Hard Times"], ["scrooge", "A Christmas Carol"], ["Pickwickian", "The Pickwick Papers"]],
    q: {ask: "Oldest to newest coinage", i: [["Lothario", "1703"], ["Frankenstein", "1818"], ["Peter Pan", "1902"], ["Stepford wife", "1972"]], n: "Ira Levin's The Stepford Wives (1972) imagines a town of eerily perfect wives."},
    s: {t: "Gradgrind", c: "Hard Times", o: ["Bleak House", "Little Dorrit", "Great Expectations"], n: "Thomas Gradgrind wants ‘nothing but Facts’. A Gradgrind is someone cold who cares only about facts."}
  }
];
