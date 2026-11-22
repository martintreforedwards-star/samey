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
    p: {t: "Mrs Grundy", h: "A narrow-minded, prudish busybody.", c: "Thomas Morton", o: ["Richard Brinsley Sheridan", "Oliver Goldsmith", "Henry Fielding"], n: "In Morton's play Speed the Plough (1798), characters keep asking “What will Mrs Grundy say?” She never appears."},
    x: {f: "words coined in fiction", w: ["Brobdingnagian", "Pickwickian", "Ruritanian"], odd: "bowdlerise", n: "Bowdlerise comes from a real man, Thomas Bowdler, whose Family Shakespeare cut out anything rude."},
    m: [["Man Friday", "Robinson Crusoe"], ["Uriah Heep", "David Copperfield"], ["Rip Van Winkle", "The Sketch Book"], ["Lady Bountiful", "The Beaux' Stratagem"]],
    q: {ask: "Oldest to newest coinage", i: [["Gradgrind", "1854"], ["Jekyll and Hyde", "1886"], ["time machine", "1895"], ["Stepford wife", "1972"]], n: "Thomas Gradgrind, in Dickens's Hard Times, wants “nothing but Facts”."},
    s: {t: "the Artful Dodger", c: "Oliver Twist", o: ["Nicholas Nickleby", "Great Expectations", "Bleak House"], n: "Jack Dawkins, the Artful Dodger, is Fagin's star pickpocket. Now a dodger is anyone slippery."}
  },
  /* Tue */ {
    p: {t: "Babbitt", h: "A smug, conformist businessman.", c: "Sinclair Lewis", o: ["F. Scott Fitzgerald", "Sherwood Anderson", "Theodore Dreiser"], n: "George F. Babbitt sells houses in the city of Zenith in Lewis's 1922 novel Babbitt."},
    x: {f: "words coined in fiction", w: ["triffid", "Newspeak", "Sherlock"], odd: "quisling", n: "Quisling comes from a real man, Vidkun Quisling, who ran Norway for the Nazis."},
    m: [["Gradgrind", "Hard Times"], ["Pecksniffian", "Martin Chuzzlewit"], ["Micawber", "David Copperfield"], ["bumbledom", "Oliver Twist"]],
    q: {ask: "Oldest to newest coinage", i: [["Lady Bountiful", "1707"], ["Man Friday", "1719"], ["Brobdingnagian", "1726"], ["Mrs Grundy", "1798"]], n: "Robinson Crusoe names his companion Friday after the day they met."},
    s: {t: "Ruritanian", c: "The Prisoner of Zenda", o: ["King Solomon's Mines", "The Thirty-Nine Steps", "Kidnapped"], n: "Anthony Hope's 1894 adventure is set in Ruritania, a made-up European kingdom. Any comic-opera little state is now Ruritanian."}
  },
  /* Wed */ {
    p: {t: "frabjous", h: "Splendid and joyful, as in “O frabjous day!”", c: "Lewis Carroll", o: ["Edward Lear", "Hilaire Belloc", "Spike Milligan"], n: "From Jabberwocky in Through the Looking-Glass (1871): “O frabjous day! Callooh! Callay!”"},
    x: {f: "words coined in fiction", w: ["Gradgrind", "Babbitt", "Svengali"], odd: "guillotine", n: "Guillotine comes from a real man, Dr Joseph-Ignace Guillotin, who argued for a quicker, kinder execution. He didn't invent it."},
    m: [["atomic bomb", "The World Set Free"], ["triffid", "The Day of the Triffids"], ["Newspeak", "Nineteen Eighty-Four"], ["Stepford wife", "The Stepford Wives"]],
    q: {ask: "Oldest to newest coinage", i: [["Rip Van Winkle", "1819"], ["Pickwickian", "1837"], ["Uriah Heep", "1850"], ["Sherlock", "1887"]], n: "Uriah Heep, the “ever so 'umble” clerk, is the creepiest of Dickens's hypocrites."},
    s: {t: "mimsy", c: "Through the Looking-Glass", o: ["Alice's Adventures in Wonderland", "The Hunting of the Snark", "Sylvie and Bruno"], n: "All four are Carroll. “All mimsy were the borogoves”: Humpty Dumpty explains it's flimsy and miserable rolled into one."}
  },
  /* Thu */ {
    p: {t: "Rip Van Winkle", h: "Someone hopelessly behind the times, as if they'd slept for years.", c: "Washington Irving", o: ["Nathaniel Hawthorne", "Edgar Allan Poe", "Mark Twain"], n: "In Irving's 1819 story, Rip sleeps for 20 years in the Catskills and misses the whole American Revolution."},
    x: {f: "words coined in fiction", w: ["Pecksniffian", "Micawber", "Lady Bountiful"], odd: "dunce", n: "Dunce comes from a real man, the medieval scholar John Duns Scotus, whose followers were later mocked as dunces."},
    m: [["Mrs Grundy", "Speed the Plough"], ["Ruritanian", "The Prisoner of Zenda"], ["Gradgrind", "Hard Times"], ["Brobdingnagian", "Gulliver's Travels"]],
    q: {ask: "Oldest to newest coinage", i: [["time machine", "1895"], ["atomic bomb", "1914"], ["robot", "1920"], ["triffid", "1951"]], n: "John Wyndham's triffids are walking, stinging plants that take over a blinded Britain."},
    s: {t: "Sherlock", c: "A Study in Scarlet", o: ["The Hound of the Baskervilles", "The Sign of the Four", "The Valley of Fear"], n: "All four are Holmes stories. He first appeared in A Study in Scarlet (1887)."}
  },
  /* Fri */ {
    p: {t: "Pickwickian", h: "Meant in a special sense, not literally or as an insult.", c: "Charles Dickens", o: ["William Makepeace Thackeray", "Anthony Trollope", "Wilkie Collins"], n: "In The Pickwick Papers (1837), a row is settled when an insult turns out to have been meant “in a Pickwickian sense”."},
    x: {f: "words coined in fiction", w: ["Rip Van Winkle", "Uriah Heep", "the Artful Dodger"], odd: "mesmerise", n: "Mesmerise comes from a real man, Franz Mesmer, an 18th-century doctor who claimed to heal with “animal magnetism”."},
    m: [["Svengali", "Trilby"], ["Pooh-Bah", "The Mikado"], ["Shangri-La", "Lost Horizon"], ["Mrs Grundy", "Speed the Plough"]],
    q: {ask: "Oldest to newest coinage", i: [["Lady Bountiful", "1707"], ["Mrs Grundy", "1798"], ["Gradgrind", "1854"], ["Babbitt", "1922"]], n: "Lady Bountiful is a generous country lady in George Farquhar's comedy The Beaux' Stratagem."},
    s: {t: "Micawber", c: "David Copperfield", o: ["Little Dorrit", "Dombey and Son", "Our Mutual Friend"], n: "All four are Dickens. Mr Micawber, sure that “something will turn up”, was partly based on Dickens's own father, jailed for debt."}
  },
  /* Sat: science fiction */ {
    p: {t: "atomic bomb", h: "A bomb powered by splitting atoms.", c: "H. G. Wells", o: ["Jules Verne", "Arthur Conan Doyle", "Olaf Stapledon"], n: "Wells's The World Set Free (1914) imagined atomic bombs decades before they existed. The physicist Leo Szilard read it."},
    x: {f: "words coined in fiction", w: ["triffid", "terraforming", "time machine"], odd: "doublespeak", n: "Doublespeak sounds like Orwell but isn't in Nineteen Eighty-Four. He gave us Newspeak and doublethink; doublespeak was blended from them later."},
    m: [["robotics", "I, Robot"], ["grok", "Stranger in a Strange Land"], ["metaverse", "Snow Crash"], ["Newspeak", "Nineteen Eighty-Four"]],
    q: {ask: "Oldest to newest coinage", i: [["credit card", "1888"], ["robot", "1920"], ["Stepford wife", "1972"], ["cyberspace", "1982"]], n: "Ira Levin's Stepford wives turn out to be robots built by their husbands."},
    s: {t: "unperson", c: "Nineteen Eighty-Four", o: ["Brave New World", "Fahrenheit 451", "We"], n: "In Orwell's Oceania, an unperson has been wiped from every record, as if they'd never lived."}
  },
  /* Sun */ {
    p: {t: "Lady Bountiful", h: "A woman who makes a show of her charity.", c: "George Farquhar", o: ["William Congreve", "Aphra Behn", "Oliver Goldsmith"], n: "Lady Bountiful is a kindly country lady, always doctoring her neighbours, in Farquhar's comedy The Beaux' Stratagem (1707)."},
    x: {f: "words coined in fiction", w: ["Mrs Grundy", "Babbitt", "Micawber"], odd: "fifth column", n: "Fifth column came from the Spanish Civil War: a general boasted of four columns marching on Madrid and a fifth of supporters already inside."},
    m: [["Uriah Heep", "David Copperfield"], ["the Artful Dodger", "Oliver Twist"], ["Pickwickian", "The Pickwick Papers"], ["Gradgrind", "Hard Times"]],
    q: {ask: "Oldest to newest coinage", i: [["Brobdingnagian", "1726"], ["Rip Van Winkle", "1819"], ["Sherlock", "1887"], ["Stepford wife", "1972"]], n: "Gulliver lands in Brobdingnag, the land of giants, on his second voyage."},
    s: {t: "Brobdingnagian", c: "Gulliver's Travels", o: ["Robinson Crusoe", "A Tale of a Tub", "Tristram Shandy"], n: "A Tale of a Tub is Swift's too. Brobdingnag comes straight after tiny Lilliput in Gulliver's voyages."}
  }
];
