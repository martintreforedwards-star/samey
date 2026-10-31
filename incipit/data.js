// Incipit days. One day per puzzle (preview cycles through these in order).
// Every book here was first published before 1929, and every author (and translator) died before 1956,
// so the lines are out of copyright in both the UK and the US.
//
// q = four "Which book?" rounds, easiest first:
//       l = the opening line (a trailing … means it's been cut short)
//       t = the right title, a = author, y = year first published, tr (optional) = translator
//       o = three wrong titles shown alongside it
// f = the "Finish the line" round:
//       s = the start of the line, e = the real ending, x = two fake endings
//       t, a, y, tr as above
const DAYS = [
  {
    q: [
      {l: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.", t: "Pride and Prejudice", a: "Jane Austen", y: 1813, o: ["Emma", "Jane Eyre", "Middlemarch"]},
      {l: "Marley was dead: to begin with.", t: "A Christmas Carol", a: "Charles Dickens", y: 1843, o: ["Oliver Twist", "Bleak House", "The Pickwick Papers"]},
      {l: "The Mole had been working very hard all the morning, spring-cleaning his little home.", t: "The Wind in the Willows", a: "Kenneth Grahame", y: 1908, o: ["The Tale of Peter Rabbit", "The Jungle Book", "Black Beauty"]},
      {l: "No one who had ever seen Catherine Morland in her infancy would have supposed her born to be an heroine.", t: "Northanger Abbey", a: "Jane Austen", y: 1817, o: ["Persuasion", "Sense and Sensibility", "Cranford"]}
    ],
    f: {s: "It was the best of times, it was the worst of times,", e: "it was the age of wisdom, it was the age of foolishness,", x: ["it was the season of plenty, it was the season of want,", "it was the hour of hope, it was the hour of despair,"], t: "A Tale of Two Cities", a: "Charles Dickens", y: 1859}
  },
  {
    q: [
      {l: "Call me Ishmael.", t: "Moby-Dick", a: "Herman Melville", y: 1851, o: ["Treasure Island", "Robinson Crusoe", "Twenty Thousand Leagues Under the Sea"]},
      {l: "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do:", t: "Alice's Adventures in Wonderland", a: "Lewis Carroll", y: 1865, o: ["Peter Pan", "The Secret Garden", "The Railway Children"]},
      {l: "Mr. Utterson the lawyer was a man of a rugged countenance that was never lighted by a smile;", t: "Strange Case of Dr Jekyll and Mr Hyde", a: "Robert Louis Stevenson", y: 1886, o: ["The Picture of Dorian Gray", "Dracula", "The Hound of the Baskervilles"]},
      {l: "Miss Brooke had that kind of beauty which seems to be thrown into relief by poor dress.", t: "Middlemarch", a: "George Eliot", y: 1871, o: ["Persuasion", "North and South", "The Mill on the Floss"]}
    ],
    f: {s: "Happy families are all alike;", e: "every unhappy family is unhappy in its own way.", x: ["every unhappy family keeps its own secret.", "unhappy ones each make a story worth telling."], t: "Anna Karenina", a: "Leo Tolstoy", y: 1878, tr: "Constance Garnett"}
  },
  {
    q: [
      {l: "There was no possibility of taking a walk that day.", t: "Jane Eyre", a: "Charlotte Brontë", y: 1847, o: ["Wuthering Heights", "Agnes Grey", "Villette"]},
      {l: "‘Christmas won't be Christmas without any presents,’ grumbled Jo, lying on the rug.", t: "Little Women", a: "Louisa May Alcott", y: 1868, o: ["What Katy Did", "Anne of Green Gables", "Heidi"]},
      {l: "No one would have believed in the last years of the nineteenth century that this world was being watched keenly and closely by intelligences greater than man's…", t: "The War of the Worlds", a: "H. G. Wells", y: 1898, o: ["The Time Machine", "The Lost World", "Journey to the Centre of the Earth"]},
      {l: "Stately, plump Buck Mulligan came from the stairhead, bearing a bowl of lather on which a mirror and a razor lay crossed.", t: "Ulysses", a: "James Joyce", y: 1922, o: ["Dubliners", "Mrs Dalloway", "Sons and Lovers"]}
    ],
    f: {s: "Whether I shall turn out to be the hero of my own life,", e: "or whether that station will be held by anybody else, these pages must show.", x: ["or merely a witness to the lives of better men, I cannot yet say.", "or only its most patient spectator, the reader alone shall judge."], t: "David Copperfield", a: "Charles Dickens", y: 1850}
  },
  {
    q: [
      {l: "All children, except one, grow up.", t: "Peter Pan", a: "J. M. Barrie", y: 1911, o: ["The Secret Garden", "The Water-Babies", "The Railway Children"]},
      {l: "You don't know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain't no matter.", t: "Adventures of Huckleberry Finn", a: "Mark Twain", y: 1884, o: ["The Adventures of Tom Sawyer", "Little Women", "The Call of the Wild"]},
      {l: "Mr. Sherlock Holmes, who was usually very late in the mornings, save upon those not infrequent occasions when he was up all night, was seated at the breakfast table.", t: "The Hound of the Baskervilles", a: "Arthur Conan Doyle", y: 1902, o: ["A Study in Scarlet", "The Sign of the Four", "The Valley of Fear"]},
      {l: "The Nellie, a cruising yawl, swung to her anchor without a flutter of the sails, and was at rest.", t: "Heart of Darkness", a: "Joseph Conrad", y: 1899, o: ["Lord Jim", "Kidnapped", "Treasure Island"]}
    ],
    f: {s: "In my younger and more vulnerable years my father gave me some advice", e: "that I've been turning over in my mind ever since.", x: ["that I have spent the rest of my life ignoring.", "that I only understood the summer I came East."], t: "The Great Gatsby", a: "F. Scott Fitzgerald", y: 1925}
  },
  {
    q: [
      {l: "1801.—I have just returned from a visit to my landlord—the solitary neighbour that I shall be troubled with.", t: "Wuthering Heights", a: "Emily Brontë", y: 1847, o: ["Jane Eyre", "The Tenant of Wildfell Hall", "Silas Marner"]},
      {l: "When Mary Lennox was sent to Misselthwaite Manor to live with her uncle everybody said she was the most disagreeable-looking child ever seen.", t: "The Secret Garden", a: "Frances Hodgson Burnett", y: 1911, o: ["A Little Princess", "Heidi", "Pollyanna"]},
      {l: "The family of Dashwood had long been settled in Sussex.", t: "Sense and Sensibility", a: "Jane Austen", y: 1811, o: ["Mansfield Park", "Persuasion", "Cranford"]},
      {l: "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged in S. Place and walked slowly, as though in hesitation, towards K. bridge.", t: "Crime and Punishment", a: "Fyodor Dostoevsky", y: 1866, tr: "Constance Garnett", o: ["The Brothers Karamazov", "Anna Karenina", "Fathers and Sons"]}
    ],
    f: {s: "Now, what I want is, Facts.", e: "Teach these boys and girls nothing but Facts.", x: ["Give me figures, sir, and keep your fancies.", "Bring me nothing that cannot be counted."], t: "Hard Times", a: "Charles Dickens", y: 1854}
  },
  {
    q: [
      {l: "Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer's wife.", t: "The Wonderful Wizard of Oz", a: "L. Frank Baum", y: 1900, o: ["Anne of Green Gables", "Rebecca of Sunnybrook Farm", "Pollyanna"]},
      {l: "Buck did not read the newspapers, or he would have known that trouble was brewing…", t: "The Call of the Wild", a: "Jack London", y: 1903, o: ["White Fang", "Black Beauty", "The Jungle Book"]},
      {l: "It was a dark and stormy night;", t: "Paul Clifford", a: "Edward Bulwer-Lytton", y: 1830, o: ["Frankenstein", "The Castle of Otranto", "Wuthering Heights"]},
      {l: "For a long time I used to go to bed early.", t: "Swann's Way", a: "Marcel Proust", y: 1913, tr: "C. K. Scott Moncrieff", o: ["Madame Bovary", "The Count of Monte Cristo", "Les Misérables"]}
    ],
    f: {s: "Once upon a time there were four little Rabbits, and their names were—", e: "Flopsy, Mopsy, Cotton-tail, and Peter.", x: ["Flopsy, Mopsy, Benjamin, and Peter.", "Peter, Flopsy, Mopsy, and Tom."], t: "The Tale of Peter Rabbit", a: "Beatrix Potter", y: 1902}
  },
  {
    q: [
      {l: "My father's family name being Pirrip, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip.", t: "Great Expectations", a: "Charles Dickens", y: 1861, o: ["David Copperfield", "Oliver Twist", "Little Dorrit"]},
      {l: "The studio was filled with the rich odour of roses…", t: "The Picture of Dorian Gray", a: "Oscar Wilde", y: 1890, o: ["The Portrait of a Lady", "The Turn of the Screw", "Vanity Fair"]},
      {l: "3 May. Bistritz.—Left Munich at 8:35 P. M., on 1st May, arriving at Vienna early next morning…", t: "Dracula", a: "Bram Stoker", y: 1897, o: ["Carmilla", "The Woman in White", "Frankenstein"]},
      {l: "A Saturday afternoon in November was approaching the time of twilight…", t: "The Return of the Native", a: "Thomas Hardy", y: 1878, o: ["Far from the Madding Crowd", "The Mayor of Casterbridge", "Silas Marner"]}
    ],
    f: {s: "Emma Woodhouse, handsome, clever, and rich, with a comfortable home and happy disposition,", e: "seemed to unite some of the best blessings of existence;", x: ["had never once been told that she was wrong;", "was the envy of every family in Highbury;"], t: "Emma", a: "Jane Austen", y: 1815}
  },
  {
    q: [
      {l: "The first place that I can well remember was a large pleasant meadow with a pond of clear water in it.", t: "Black Beauty", a: "Anna Sewell", y: 1877, o: ["The Call of the Wild", "White Fang", "The Wind in the Willows"]},
      {l: "I will begin the story of my adventures with a certain morning early in the month of June, the year of grace 1751, when I took the key for the last time out of the door of my father's house.", t: "Kidnapped", a: "Robert Louis Stevenson", y: 1886, o: ["Treasure Island", "Rob Roy", "The Count of Monte Cristo"]},
      {l: "About thirty years ago Miss Maria Ward, of Huntingdon, with only seven thousand pounds, had the good luck to captivate Sir Thomas Bertram…", t: "Mansfield Park", a: "Jane Austen", y: 1814, o: ["Persuasion", "Emma", "Cranford"]},
      {l: "He sat, in defiance of municipal orders, astride the gun Zam-Zammeh on her brick platform opposite the old Ajaib-Gher…", t: "Kim", a: "Rudyard Kipling", y: 1901, o: ["The Jungle Book", "A Passage to India", "Lord Jim"]}
    ],
    f: {s: "They were not railway children", e: "to begin with.", x: ["for very long.", "at first, nor did they wish to be."], t: "The Railway Children", a: "E. Nesbit", y: 1906}
  },
  {
    q: [
      {l: "There were four of us—George, and William Samuel Harris, and myself, and Montmorency.", t: "Three Men in a Boat", a: "Jerome K. Jerome", y: 1889, o: ["Three Men on the Bummel", "The Diary of a Nobody", "The Pickwick Papers"]},
      {l: "While the present century was in its teens, and on one sunshiny morning in June, there drove up to the great iron gate of Miss Pinkerton's academy for young ladies, on Chiswick Mall, a large family coach…", t: "Vanity Fair", a: "William Makepeace Thackeray", y: 1848, o: ["Cranford", "Middlemarch", "The Pickwick Papers"]},
      {l: "I returned from the City about three o'clock on that May afternoon pretty well disgusted with life.", t: "The Thirty-Nine Steps", a: "John Buchan", y: 1915, o: ["The Riddle of the Sands", "The Prisoner of Zenda", "The Secret Agent"]},
      {l: "This is the story of what a Woman's patience can endure, and what a Man's resolution can achieve.", t: "The Woman in White", a: "Wilkie Collins", y: 1860, o: ["The Moonstone", "Lady Audley's Secret", "East Lynne"]}
    ],
    f: {s: "Mrs. Dalloway said", e: "she would buy the flowers herself.", x: ["she would not go to the party after all.", "she would walk to Bond Street alone."], t: "Mrs Dalloway", a: "Virginia Woolf", y: 1925}
  },
  {
    q: [
      {l: "I was born in the Year 1632, in the City of York, of a good Family, though not of that Country…", t: "Robinson Crusoe", a: "Daniel Defoe", y: 1719, o: ["Gulliver's Travels", "Tom Jones", "Moll Flanders"]},
      {l: "It was seven o'clock of a very warm evening in the Seeonee hills when Father Wolf woke up from his day's rest…", t: "The Jungle Book", a: "Rudyard Kipling", y: 1894, o: ["Just So Stories", "Kim", "The Call of the Wild"]},
      {l: "In the days when the spinning-wheels hummed busily in the farmhouses…", t: "Silas Marner", a: "George Eliot", y: 1861, o: ["Adam Bede", "Far from the Madding Crowd", "Cranford"]},
      {l: "‘The Bottoms’ succeeded to ‘Hell Row’.", t: "Sons and Lovers", a: "D. H. Lawrence", y: 1913, o: ["Women in Love", "The Rainbow", "Jude the Obscure"]}
    ],
    f: {s: "The Time Traveller (for so it will be convenient to speak of him)", e: "was expounding a recondite matter to us.", x: ["was late for dinner again that Thursday.", "had invited six of us to his house that evening."], t: "The Time Machine", a: "H. G. Wells", y: 1895}
  },
  {
    q: [
      {l: "Mrs. Rachel Lynde lived just where the Avonlea main road dipped down into a little hollow…", t: "Anne of Green Gables", a: "L. M. Montgomery", y: 1908, o: ["Pollyanna", "Little Women", "What Katy Did"]},
      {l: "My Father had a small Estate in Nottinghamshire; I was the Third of five Sons.", t: "Gulliver's Travels", a: "Jonathan Swift", y: 1726, o: ["Robinson Crusoe", "Tristram Shandy", "Candide"]},
      {l: "You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings.", t: "Frankenstein", a: "Mary Shelley", y: 1818, o: ["Dracula", "The Vampyre", "Wuthering Heights"]},
      {l: "On an evening in the latter part of May a middle-aged man was walking homeward from Shaston to the village of Marlott…", t: "Tess of the d'Urbervilles", a: "Thomas Hardy", y: 1891, o: ["Jude the Obscure", "The Woodlanders", "Adam Bede"]}
    ],
    f: {s: "Once upon a time and a very good time it was", e: "there was a moocow coming down along the road", x: ["there lived a boy in a house by the sea", "a king's son went walking in the green wood"], t: "A Portrait of the Artist as a Young Man", a: "James Joyce", y: 1916}
  },
  {
    q: [
      {l: "Once on a dark winter's day, when the yellow fog hung so thick and heavy in the streets of London that the lamps were lighted…", t: "A Little Princess", a: "Frances Hodgson Burnett", y: 1905, o: ["The Secret Garden", "A Christmas Carol", "Oliver Twist"]},
      {l: "Among other public buildings in a certain town, which for many reasons it will be prudent to refrain from mentioning…", t: "Oliver Twist", a: "Charles Dickens", y: 1838, o: ["Nicholas Nickleby", "Little Dorrit", "Hard Times"]},
      {l: "‘Edith!’ said Margaret, gently, ‘Edith!’", t: "North and South", a: "Elizabeth Gaskell", y: 1855, o: ["Cranford", "Mary Barton", "Persuasion"]},
      {l: "Well, Prince, so Genoa and Lucca are now just family estates of the Buonapartes.", t: "War and Peace", a: "Leo Tolstoy", y: 1869, tr: "Louise and Aylmer Maude", o: ["Anna Karenina", "Crime and Punishment", "Dead Souls"]}
    ],
    f: {s: "London. Michaelmas term lately over,", e: "and the Lord Chancellor sitting in Lincoln's Inn Hall.", x: ["and the courts as idle as the river.", "and the lawyers gone home to their dinners."], t: "Bleak House", a: "Charles Dickens", y: 1853}
  },
  {
    q: [
      {l: "The cold passed reluctantly from the earth, and the retiring fogs revealed an army stretched out on the hills, resting.", t: "The Red Badge of Courage", a: "Stephen Crane", y: 1895, o: ["The Last of the Mohicans", "Uncle Tom's Cabin", "The Call of the Wild"]},
      {l: "Sir Walter Elliot, of Kellynch Hall, in Somersetshire, was a man who, for his own amusement, never took up any book but the Baronetage;", t: "Persuasion", a: "Jane Austen", y: 1817, o: ["Mansfield Park", "Vanity Fair", "Northanger Abbey"]},
      {l: "Mr. Phileas Fogg lived, in 1872, at No. 7, Saville Row, Burlington Gardens, the house in which Sheridan died in 1814.", t: "Around the World in Eighty Days", a: "Jules Verne", y: 1872, tr: "George Makepeace Towle", o: ["Twenty Thousand Leagues Under the Sea", "The Thirty-Nine Steps", "Journey to the Centre of the Earth"]},
      {l: "I am a sick man.... I am a spiteful man.", t: "Notes from Underground", a: "Fyodor Dostoevsky", y: 1864, tr: "Constance Garnett", o: ["Crime and Punishment", "The Idiot", "Dead Souls"]}
    ],
    f: {s: "Squire Trelawney, Dr. Livesey, and the rest of these gentlemen having asked me to write down", e: "the whole particulars about Treasure Island,", x: ["the true history of the Hispaniola,", "my account of Captain Flint's gold,"], t: "Treasure Island", a: "Robert Louis Stevenson", y: 1883}
  },
  {
    q: [
      {l: "The schoolmaster was leaving the village, and everybody seemed sorry.", t: "Jude the Obscure", a: "Thomas Hardy", y: 1895, o: ["Tess of the d'Urbervilles", "Adam Bede", "The Mill on the Floss"]},
      {l: "There was no hope for him this time: it was the third stroke.", t: "Dubliners", a: "James Joyce", y: 1914, o: ["Ulysses", "Sons and Lovers", "Mrs Dalloway"]},
      {l: "The story had held us, round the fire, sufficiently breathless…", t: "The Turn of the Screw", a: "Henry James", y: 1898, o: ["The Woman in White", "Dracula", "The Portrait of a Lady"]},
      {l: "He was an inch, perhaps two, under six feet, powerfully built…", t: "Lord Jim", a: "Joseph Conrad", y: 1900, o: ["Heart of Darkness", "Kim", "The Secret Agent"]}
    ],
    f: {s: "As I walk'd through the wilderness of this world,", e: "I lighted on a certain place where was a Den;", x: ["I came upon a narrow gate that stood ajar;", "I heard a voice that called me by my name;"], t: "The Pilgrim's Progress", a: "John Bunyan", y: 1678}
  }
];
