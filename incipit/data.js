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
  }
];
