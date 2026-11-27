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
      {l: "{Alice} was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do:", t: "Alice's Adventures in Wonderland", a: "Lewis Carroll", y: 1865, o: ["Peter Pan", "The Secret Garden", "The Railway Children"]},
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
  },
  {
    q: [
      {l: "‘{Tom}!’ No answer.", t: "The Adventures of Tom Sawyer", a: "Mark Twain", y: 1876, o: ["Adventures of Huckleberry Finn", "Little Women", "What Katy Did"]},
      {l: "In the year 1878 I took my degree of Doctor of Medicine of the University of London, and proceeded to Netley to go through the course prescribed for surgeons in the army.", t: "A Study in Scarlet", a: "Arthur Conan Doyle", y: 1887, o: ["The Sign of the Four", "The Valley of Fear", "The Lost World"]},
      {l: "My godmother lived in a handsome house in the clean and ancient town of Bretton.", t: "Villette", a: "Charlotte Brontë", y: 1853, o: ["Shirley", "The Professor", "Agnes Grey"]},
      {l: "One evening of late summer, before the nineteenth century had reached one-third of its span, a young man and woman, the latter carrying a child, were approaching the large village of Weydon-Priors…", t: "The Mayor of Casterbridge", a: "Thomas Hardy", y: 1886, o: ["Far from the Madding Crowd", "The Woodlanders", "Under the Greenwood Tree"]}
    ],
    f: {s: "One thing was certain, that the white kitten had had nothing to do with it:", e: "it was the black kitten's fault entirely.", x: ["it was Dinah's fault from the very beginning.", "it was the Red Queen's doing all along."], t: "Through the Looking-Glass", a: "Lewis Carroll", y: 1871}
  },
  {
    q: [
      {l: "There was once a {velveteen} rabbit, and in the beginning he was really splendid.", t: "The Velveteen Rabbit", a: "Margery Williams", y: 1922, o: ["The Tale of Peter Rabbit", "The Story of Doctor Dolittle", "The Wind in the Willows"]},
      {l: "‘I wonder when in the world you're going to do anything, Rudolf?’ said my brother's wife.", t: "The Prisoner of Zenda", a: "Anthony Hope", y: 1894, o: ["The Scarlet Pimpernel", "King Solomon's Mines", "Kidnapped"]},
      {l: "A wide plain, where the broadening {Floss} hurries on between its green banks to the sea…", t: "The Mill on the Floss", a: "George Eliot", y: 1860, o: ["Adam Bede", "Felix Holt", "Daniel Deronda"]},
      {l: "‘Yes, of course, if it's fine tomorrow,’ said Mrs Ramsay.", t: "To the Lighthouse", a: "Virginia Woolf", y: 1927, o: ["Mrs Dalloway", "Orlando", "The Waves"]}
    ],
    f: {s: "Night is generally", e: "my time for walking.", x: ["the best time for thinking.", "when London tells its secrets."], t: "The Old Curiosity Shop", a: "Charles Dickens", y: 1841}
  },
  {
    q: [
      {l: "Once upon a time, many years ago—when our grandfathers were little children—there was a doctor; and his name was {Dolittle}…", t: "The Story of Doctor Dolittle", a: "Hugh Lofting", y: 1920, o: ["The Jungle Book", "Peter Pan", "The Wind in the Willows"]},
      {l: "A surging, seething, murmuring crowd of beings that are human only in name…", t: "The Scarlet Pimpernel", a: "Baroness Orczy", y: 1905, o: ["A Tale of Two Cities", "The Prisoner of Zenda", "The Three Musketeers"]},
      {l: "You must go back with me to the autumn of 1827.", t: "The Tenant of Wildfell Hall", a: "Anne Brontë", y: 1848, o: ["Agnes Grey", "Wuthering Heights", "Villette"]},
      {l: "Mr Verloc, going out in the morning, left his shop nominally in charge of his brother-in-law.", t: "The Secret Agent", a: "Joseph Conrad", y: 1907, o: ["Lord Jim", "Nostromo", "Under Western Eyes"]}
    ],
    f: {s: "Once upon a time there was a little chimney-sweep,", e: "and his name was Tom.", x: ["and he had never once been clean.", "who lived at the top of a very tall house."], t: "The Water-Babies", a: "Charles Kingsley", y: 1863}
  },
  {
    q: [
      {l: "Miss Polly Harrington entered her kitchen a little hurriedly this June morning.", t: "Pollyanna", a: "Eleanor H. Porter", y: 1913, o: ["Anne of Green Gables", "Rebecca of Sunnybrook Farm", "Little Women"]},
      {l: "Dark spruce forest frowned on either side the frozen waterway.", t: "White Fang", a: "Jack London", y: 1906, o: ["The Call of the Wild", "The Sea-Wolf", "Martin Eden"]},
      {l: "There once lived, in a sequestered part of the county of Devonshire, one Mr Godfrey {Nickleby}…", t: "Nicholas Nickleby", a: "Charles Dickens", y: 1839, o: ["Martin Chuzzlewit", "Barnaby Rudge", "The Old Curiosity Shop"]},
      {l: "On a January evening of the early seventies, Christine Nilsson was singing in Faust at the Academy of Music in New York.", t: "The Age of Innocence", a: "Edith Wharton", y: 1920, o: ["The House of Mirth", "Ethan Frome", "The Custom of the Country"]}
    ],
    f: {s: "When Farmer Oak smiled, the corners of his mouth spread", e: "till they were within an unimportant distance of his ears,", x: ["until they almost met at the back of his head,", "as wide as a barn door at harvest time,"], t: "Far from the Madding Crowd", a: "Thomas Hardy", y: 1874}
  },
  {
    q: [
      {l: "The house was three miles from the station, but, before the dusty hired hack had rattled along for five minutes, the children began to put their heads out of the carriage window and say, ‘Aren't we nearly there?’", t: "Five Children and It", a: "E. Nesbit", y: 1902, o: ["The Railway Children", "The Story of the Treasure Seekers", "The Phoenix and the Carpet"]},
      {l: "I had this story from one who had no business to tell it to me, or to any other.", t: "Tarzan of the Apes", a: "Edgar Rice Burroughs", y: 1912, o: ["The Lost World", "King Solomon's Mines", "The Jungle Book"]},
      {l: "I address these lines—written in India—to my relatives in England.", t: "The Moonstone", a: "Wilkie Collins", y: 1868, o: ["The Woman in White", "No Name", "Armadale"]},
      {l: "He—for there could be no doubt of his sex, though the fashion of the time did something to disguise it—was in the act of slicing at the head of a Moor which swung from the rafters.", t: "Orlando", a: "Virginia Woolf", y: 1928, o: ["To the Lighthouse", "Jacob's Room", "The Voyage Out"]}
    ],
    f: {s: "It is a curious thing that at my age—fifty-five last birthday—", e: "I should find myself taking up a pen to try and write a history.", x: ["I should still be dreaming of diamonds.", "I should be setting out for Africa once more."], t: "King Solomon's Mines", a: "H. Rider Haggard", y: 1885}
  },
  {
    q: [
      {l: "Cedric himself knew nothing whatever about it.", t: "Little Lord Fauntleroy", a: "Frances Hodgson Burnett", y: 1886, o: ["A Little Princess", "The Secret Garden", "Little Women"]},
      {l: "In that pleasant district of merry England which is watered by the river Don, there extended in ancient times a large forest…", t: "Ivanhoe", a: "Walter Scott", y: 1819, o: ["Rob Roy", "Waverley", "The Talisman"]},
      {l: "I had the story, bit by bit, from various people, and, as generally happens in such cases, each time it was a different story.", t: "Ethan Frome", a: "Edith Wharton", y: 1911, o: ["The Age of Innocence", "Summer", "The House of Mirth"]},
      {l: "With a single drop of ink for a mirror, the Egyptian sorcerer undertakes to reveal to any chance comer far-reaching visions of the past.", t: "Adam Bede", a: "George Eliot", y: 1859, o: ["Silas Marner", "Middlemarch", "Romola"]}
    ],
    f: {s: "In the first place, Cranford is in possession of the Amazons;", e: "all the holders of houses above a certain rent are women.", x: ["no gentleman may stay in the town after nine o'clock.", "every husband is either at sea or in the churchyard."], t: "Cranford", a: "Elizabeth Gaskell", y: 1853}
  },
  {
    q: [
      {l: "The old stage coach was rumbling along the dusty road that runs from Maplewood to Riverboro.", t: "Rebecca of Sunnybrook Farm", a: "Kate Douglas Wiggin", y: 1903, o: ["Pollyanna", "Anne of Green Gables", "What Katy Did"]},
      {l: "It was a feature peculiar to the colonial wars of North America, that the toils and dangers of the wilderness were to be encountered before the adverse hosts could meet.", t: "The Last of the Mohicans", a: "James Fenimore Cooper", y: 1826, o: ["The Deerslayer", "The Pathfinder", "The Prairie"]},
      {l: "Selden paused in surprise.", t: "The House of Mirth", a: "Edith Wharton", y: 1905, o: ["The Age of Innocence", "The Portrait of a Lady", "The Awakening"]},
      {l: "In these times of ours, though concerning the exact year there is no need to be precise, a boat of dirty and disreputable appearance, with two figures in it, floated on the Thames…", t: "Our Mutual Friend", a: "Charles Dickens", y: 1865, o: ["Bleak House", "Little Dorrit", "Dombey and Son"]}
    ],
    f: {s: "The stranger came early in February, one wintry day,", e: "through a biting wind and a driving snow,", x: ["when the whole village was fast asleep,", "with nothing but a lantern and a black bag,"], t: "The Invisible Man", a: "H. G. Wells", y: 1897}
  },
  {
    q: [
      {l: "{Dombey} sat in the corner of the darkened room in the great arm-chair by the bedside, and {Son} lay tucked up warm in a little basket bedstead…", t: "Dombey and Son", a: "Charles Dickens", y: 1848, o: ["Martin Chuzzlewit", "Hard Times", "Our Mutual Friend"]},
      {l: "All true histories contain instruction; though, in some, the treasure may be hard to find…", t: "Agnes Grey", a: "Anne Brontë", y: 1847, o: ["The Tenant of Wildfell Hall", "Jane Eyre", "Shirley"]},
      {l: "On a hill by the Mississippi where Chippewas camped two generations ago, a girl stood in relief against the cornflower blue of Northern sky.", t: "Main Street", a: "Sinclair Lewis", y: 1920, o: ["Babbitt", "Elmer Gantry", "Arrowsmith"]},
      {l: "I was ever of opinion, that the honest man who married and brought up a large family, did more service than he who continued single…", t: "The Vicar of Wakefield", a: "Oliver Goldsmith", y: 1766, o: ["Tom Jones", "Tristram Shandy", "Joseph Andrews"]}
    ],
    f: {s: "Thirty years ago, Marseilles", e: "lay burning in the sun, one day.", x: ["was a city of thieves and sailors.", "lay shivering under a winter sky."], t: "Little Dorrit", a: "Charles Dickens", y: 1857}
  },
  {
    q: [
      {l: "The towers of Zenith aspired above the morning mist…", t: "Babbitt", a: "Sinclair Lewis", y: 1922, o: ["Main Street", "Arrowsmith", "The Great Gatsby"]},
      {l: "One January day, thirty years ago, the little town of Hanover, anchored on a windy Nebraska tableland, was trying not to be blown away.", t: "O Pioneers!", a: "Willa Cather", y: 1913, o: ["My Ántonia", "The Song of the Lark", "Main Street"]},
      {l: "Those privileged to be present at a family festival of the Forsytes have seen that charming and instructive sight—an upper middle-class family in full plumage.", t: "The Man of Property", a: "John Galsworthy", y: 1906, o: ["In Chancery", "To Let", "The Old Wives' Tale"]},
      {l: "The Rev. Septimus Harding was, a few years since, a beneficed clergyman residing in the cathedral town of ——; let us call it Barchester.", t: "The Warden", a: "Anthony Trollope", y: 1855, o: ["Barchester Towers", "Middlemarch", "Cranford"]}
    ],
    f: {s: "Under certain circumstances there are few hours in life more agreeable than", e: "the hour dedicated to the ceremony known as afternoon tea.", x: ["the hour before a long journey begins.", "the last hour of a summer evening."], t: "The Portrait of a Lady", a: "Henry James", y: 1881}
  },
  {
    q: [
      {l: "‘So of course,’ wrote Betty Flanders, pressing her heels rather deeper in the sand, ‘there was nothing for it but to leave.’", t: "Jacob's Room", a: "Virginia Woolf", y: 1922, o: ["Mrs Dalloway", "Night and Day", "The Voyage Out"]},
      {l: "Was she beautiful or not beautiful?", t: "Daniel Deronda", a: "George Eliot", y: 1876, o: ["Middlemarch", "Romola", "Felix Holt"]},
      {l: "When Caroline Meeber boarded the afternoon train for Chicago, her total outfit consisted of a small trunk, a cheap imitation alligator-skin satchel…", t: "Sister Carrie", a: "Theodore Dreiser", y: 1900, o: ["An American Tragedy", "The House of Mirth", "Main Street"]},
      {l: "To dwellers in a wood almost every species of tree has its voice as well as its feature.", t: "Under the Greenwood Tree", a: "Thomas Hardy", y: 1872, o: ["The Woodlanders", "Far from the Madding Crowd", "A Pair of Blue Eyes"]}
    ],
    f: {s: "This is the saddest story", e: "I have ever heard.", x: ["ever told in Paris.", "that never really happened."], t: "The Good Soldier", a: "Ford Madox Ford", y: 1915}
  },
  {
    q: [
      {l: "Sherlock Holmes took his bottle from the corner of the mantel-piece and his hypodermic syringe from its neat morocco case.", t: "The Sign of Four", a: "Arthur Conan Doyle", y: 1890, o: ["A Study in Scarlet", "The Valley of Fear", "The Lost World"]},
      {l: "In the ancient city of London, on a certain autumn day in the second quarter of the sixteenth century, a boy was born to a poor family of the name of Canty, who did not want him.", t: "The Prince and the Pauper", a: "Mark Twain", y: 1881, o: ["A Connecticut Yankee in King Arthur's Court", "Oliver Twist", "Kidnapped"]},
      {l: "In the latter days of July in the year 185‑, a most important question was for ten days hourly asked in the cathedral city of {Barchester}…", t: "Barchester Towers", a: "Anthony Trollope", y: 1857, o: ["The Warden", "Middlemarch", "Cranford"]},
      {l: "Ours is essentially a tragic age, so we refuse to take it tragically.", t: "Lady Chatterley's Lover", a: "D. H. Lawrence", y: 1928, o: ["Sons and Lovers", "Mrs Dalloway", "The Good Soldier"]}
    ],
    f: {s: "In the sea, once upon a time, O my Best Beloved,", e: "there was a Whale, and he ate fishes.", x: ["there lived a very curious Crab.", "there was an Island with no name."], t: "Just So Stories", a: "Rudyard Kipling", y: 1902}
  },
  {
    q: [
      {l: "Late in the afternoon of a chilly day in February, two gentlemen were sitting alone over their wine, in a well-furnished dining parlor, in the town of P——, in Kentucky.", t: "Uncle Tom's Cabin", a: "Harriet Beecher Stowe", y: 1852, o: ["Little Women", "The Last of the Mohicans", "The Scarlet Letter"]},
      {l: "Mr. Hungerton, her father, really was the most tactless person upon earth,—a fluffy, feathery, untidy cockatoo of a man, perfectly good-natured, but absolutely centred upon his own silly self.", t: "The Lost World", a: "Arthur Conan Doyle", y: 1912, o: ["The Hound of the Baskervilles", "King Solomon's Mines", "The Time Machine"]},
      {l: "The {Browns} have become illustrious by the pen of Thackeray and the pencil of Doyle, within the memory of the young gentlemen who are now matriculating at the universities.", t: "Tom Brown's School Days", a: "Thomas Hughes", y: 1857, o: ["Stalky & Co.", "Vanity Fair", "Eric, or, Little by Little"]},
      {l: "A girl came out of lawyer Royall's house, at the end of the one street of North Dormer, and stood on the doorstep.", t: "Summer", a: "Edith Wharton", y: 1917, o: ["Ethan Frome", "Main Street", "O Pioneers!"]}
    ],
    f: {s: "This is a Tale about a tail—", e: "a tail that belonged to a little red squirrel, and his name was Nutkin.", x: ["a tail that was far too bushy for its own good.", "a tail that went missing one autumn morning."], t: "The Tale of Squirrel Nutkin", a: "Beatrix Potter", y: 1903}
  },
  {
    q: [
      {l: "The first ray of light which illumines the gloom, and converts into a dazzling brilliancy that obscurity in which the earlier history of the public career of the immortal {Pickwick} would appear to be involved…", t: "The Pickwick Papers", a: "Charles Dickens", y: 1837, o: ["Nicholas Nickleby", "Oliver Twist", "Sketches by Boz"]},
      {l: "When Mr. Hiram B. Otis, the American Minister, bought {Canterville} Chase, every one told him he was doing a very foolish thing, as there was no doubt at all that the place was haunted.", t: "The Canterville Ghost", a: "Oscar Wilde", y: 1887, o: ["The Picture of Dorian Gray", "The Turn of the Screw", "The Woman in White"]},
      {l: "Ursula and Gudrun Brangwen sat one morning in the window-bay of their father's house in Beldover, working and talking.", t: "Women in Love", a: "D. H. Lawrence", y: 1920, o: ["Sons and Lovers", "Lady Chatterley's Lover", "Howards End"]},
      {l: "Those two girls, Constance and Sophia Baines, paid no heed to the manifold interest of their situation, of which, indeed, they had never been conscious.", t: "The Old Wives' Tale", a: "Arnold Bennett", y: 1908, o: ["Anna of the Five Towns", "Little Women", "Middlemarch"]}
    ],
    f: {s: "To Sherlock Holmes", e: "she is always the woman.", x: ["the game was always afoot.", "the truth was always elementary."], t: "The Adventures of Sherlock Holmes", a: "Arthur Conan Doyle", y: 1892}
  },
  {
    q: [
      {l: "Whoever has made a voyage up the Hudson must remember the Kaatskill mountains.", t: "Rip Van Winkle", a: "Washington Irving", y: 1819, o: ["The Legend of Sleepy Hollow", "The Last of the Mohicans", "Moby-Dick"]},
      {l: "This is the story of the different ways we looked for {treasure}, and I think when you have read it you will see that we were not lazy about the looking.", t: "The Story of the Treasure Seekers", a: "E. Nesbit", y: 1899, o: ["The Railway Children", "Five Children and It", "Treasure Island"]},
      {l: "The Brangwens had lived for generations on the Marsh Farm, in the meadows where the Erewash twisted sluggishly through alder trees, separating Derbyshire from Nottinghamshire.", t: "The Rainbow", a: "D. H. Lawrence", y: 1915, o: ["Women in Love", "Sons and Lovers", "Adam Bede"]},
      {l: "Let the reader be introduced to Lady Carbury, upon whose character and doings much will depend of whatever interest these pages may have, as she sits at her writing-table in her own room in her own house in Welbeck Street.", t: "The Way We Live Now", a: "Anthony Trollope", y: 1875, o: ["Vanity Fair", "The Warden", "Can You Forgive Her?"]}
    ],
    f: {s: "To begin with", e: "the old rigmarole of childhood.", x: ["the day the doctor came to call.", "a word about the weather."], t: "Wives and Daughters", a: "Elizabeth Gaskell", y: 1866}
  },
  {
    q: [
      {l: "An ancient English Cathedral Town?", t: "The Mystery of Edwin Drood", a: "Charles Dickens", y: 1870, o: ["Barchester Towers", "Great Expectations", "The Moonstone"]},
      {l: "It began with the day when it was almost the Fifth of November, and a doubt arose in some breast—Robert's, I fancy—as to the quality of the fireworks laid in for the Guy Fawkes celebration.", t: "The Phoenix and the Carpet", a: "E. Nesbit", y: 1904, o: ["Five Children and It", "The Railway Children", "The Enchanted Castle"]},
      {l: "The weather door of the smoking-room had been left open to the North Atlantic fog, as the big liner rolled and lifted, whistling to warn the fishing-fleet.", t: "Captains Courageous", a: "Rudyard Kipling", y: 1897, o: ["Moby-Dick", "Treasure Island", "Kim"]},
      {l: "Amory Blaine inherited from his mother every trait, except the stray inexpressible few, that made him worth while.", t: "This Side of Paradise", a: "F. Scott Fitzgerald", y: 1920, o: ["The Great Gatsby", "Babbitt", "The Age of Innocence"]}
    ],
    f: {s: "The suburb of Saffron Park lay on the sunset side of London,", e: "as red and ragged as a cloud of sunset.", x: ["as quiet and grey as a sleeping cat.", "where the trains ran late and the gardens ran wild."], t: "The Man Who Was Thursday", a: "G. K. Chesterton", y: 1908}
  },
  {
    q: [
      {l: "‘I am inclined to think—’ said I. ‘I should do so,’ Sherlock Holmes remarked impatiently.", t: "The Valley of Fear", a: "Arthur Conan Doyle", y: 1915, o: ["A Study in Scarlet", "The Hound of the Baskervilles", "The Moonstone"]},
      {l: "Half-way down a by-street of one of our New England towns stands a rusty wooden house, with {seven} acutely peaked {gables}, facing towards various points of the compass, and a huge, clustered chimney in the midst.", t: "The House of the Seven Gables", a: "Nathaniel Hawthorne", y: 1851, o: ["The Scarlet Letter", "Little Women", "Uncle Tom's Cabin"]},
      {l: "It was a Sunday evening in October, and in common with many other young ladies of her class, Katharine Hilbery was pouring out tea.", t: "Night and Day", a: "Virginia Woolf", y: 1919, o: ["Mrs Dalloway", "Howards End", "The Age of Innocence"]},
      {l: "An author ought to consider himself, not as a gentleman who gives a private or eleemosynary treat, but rather as one who keeps a public ordinary, at which all persons are welcome for their money.", t: "Tom Jones", a: "Henry Fielding", y: 1749, o: ["Joseph Andrews", "Clarissa", "Moll Flanders"]}
    ],
    f: {s: "I wish either my father or my mother, or indeed both of them, as they were in duty both equally bound to it,", e: "had minded what they were about when they begot me;", x: ["had told me the truth about the family fortune;", "had stayed in Yorkshire where they belonged;"], t: "Tristram Shandy", a: "Laurence Sterne", y: 1759}
  },
  {
    q: [
      {l: "It was four o'clock when the ceremony was over and the carriages began to arrive.", t: "The Jungle", a: "Upton Sinclair", y: 1906, o: ["Sister Carrie", "The Call of the Wild", "Main Street"]},
      {l: "In the year 1775, there stood upon the borders of Epping Forest, at a distance of about twelve miles from London…", t: "Barnaby Rudge", a: "Charles Dickens", y: 1841, o: ["A Tale of Two Cities", "Oliver Twist", "Lorna Doone"]},
      {l: "As the streets that lead from the Strand to the Embankment are very narrow, it is better not to walk down them arm-in-arm.", t: "The Voyage Out", a: "Virginia Woolf", y: 1915, o: ["To the Lighthouse", "A Room with a View", "Mrs Dalloway"]},
      {l: "Captain MacWhirr, of the steamer Nan-Shan, had a physiognomy that, in the order of material appearances, was the exact counterpart of his mind…", t: "Typhoon", a: "Joseph Conrad", y: 1902, o: ["Lord Jim", "Heart of Darkness", "Captains Courageous"]}
    ],
    f: {s: "Of late years", e: "an abundant shower of curates has fallen upon the north of England:", x: ["a great many mills have been built in the West Riding:", "the price of wool has troubled every family in Yorkshire:"], t: "Shirley", a: "Charlotte Brontë", y: 1849}
  },
  {
    q: [
      {l: "I scarcely know where to begin, though I sometimes facetiously place the cause of it all to Charley Furuseth's credit.", t: "The Sea-Wolf", a: "Jack London", y: 1904, o: ["The Call of the Wild", "White Fang", "Moby-Dick"]},
      {l: "Robert Bunting and Ellen his wife sat before their dully burning, carefully-banked-up fire.", t: "The Lodger", a: "Marie Belloc Lowndes", y: 1913, o: ["The Secret Agent", "The Thirty-Nine Steps", "The Moonstone"]},
      {l: "As no lady or gentleman, with any claims to polite breeding, can possibly sympathize with the {Chuzzlewit} Family without being first assured of the extreme antiquity of the race…", t: "Martin Chuzzlewit", a: "Charles Dickens", y: 1844, o: ["Dombey and Son", "Little Dorrit", "Our Mutual Friend"]},
      {l: "In 1913, when Anthony Patch was twenty-five, two years were already gone since irony, the Holy Ghost of this later day, had, theoretically at least, descended upon him.", t: "The Beautiful and Damned", a: "F. Scott Fitzgerald", y: 1922, o: ["The Great Gatsby", "Babbitt", "The House of Mirth"]}
    ],
    f: {s: "A green and yellow parrot, which hung in a cage outside the door,", e: "kept repeating over and over:", x: ["watched the ladies come and go:", "was the only one who knew the secret:"], t: "The Awakening", a: "Kate Chopin", y: 1899}
  }
];
