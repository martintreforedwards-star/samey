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
    q: {ask: "Oldest to newest coinage", i: [["utopia", "1516"], ["malapropism", "1775"], ["robot", "1920"], ["metaverse", "1992"]], n: "Thomas More's Utopia is a pun in Greek: “no place”, which sounds like “good place”."},
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
    x: {f: "words coined in fiction", w: ["Catch-22", "Frankenstein", "hobbit"], odd: "boycott", n: "Boycott comes from a real man, Captain Charles Boycott, an Irish land agent shunned by the whole district in 1880."},
    m: [["chortle", "Through the Looking-Glass"], ["Svengali", "Trilby"], ["Pooh-Bah", "The Mikado"], ["Lothario", "The Fair Penitent"]],
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
    m: [["robot", "R.U.R."], ["genetic engineering", "Dragon's Island"], ["thoughtcrime", "Nineteen Eighty-Four"], ["muggle", "Harry Potter and the Philosopher's Stone"]],
    q: {ask: "Oldest to newest science fiction coinage", i: [["credit card", "1888"], ["waldo", "1942"], ["grok", "1961"], ["cyberspace", "1982"]], n: "A waldo, a remote-controlled mechanical hand, is from a Heinlein story."},
    s: {t: "credit card", c: "Looking Backward", o: ["The Time Machine", "Erewhon", "News from Nowhere"], n: "Edward Bellamy's 1888 novel imagines the year 2000, when everyone pays with a card instead of cash."}
  },
  /* Sun */ {
    p: {t: "Lothario", h: "A man who seduces women.", c: "Nicholas Rowe", o: ["Henry Fielding", "Samuel Richardson", "Daniel Defoe"], n: "In Rowe's play The Fair Penitent (1703), Lothario is a heartless seducer."},
    x: {f: "words coined in fiction", w: ["Walter Mitty", "jabberwocky", "Frankenstein"], odd: "silhouette", n: "Silhouette comes from a real man, Étienne de Silhouette, a penny-pinching French finance minister."},
    m: [["Room 101", "Nineteen Eighty-Four"], ["Shangri-La", "Lost Horizon"], ["galumph", "Through the Looking-Glass"], ["gaslighting", "Gas Light"]],
    q: {ask: "Oldest to newest coinage", i: [["yahoo", "1726"], ["freelance", "1819"], ["pollyanna", "1913"], ["Catch-22", "1961"]], n: "Pollyanna, in Eleanor H. Porter's novel, plays “the glad game”, finding something to be glad about in everything."},
    s: {t: "quark", c: "Finnegans Wake", o: ["Ulysses", "A Portrait of the Artist as a Young Man", "Dubliners"], n: "All four are James Joyce. “Three quarks for Muster Mark!” is in Finnegans Wake (1939); the physicist Murray Gell-Mann borrowed it in 1963."}
  }
];
