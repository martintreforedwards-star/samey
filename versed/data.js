// Versed days. One puzzle per day, cycling through DAYS in order.
// Day 0 is Monday 2 Nov 2026, so DAYS[6], DAYS[13]... always land on a Sunday (the boss round).
//
// Line rounds only quote poets who died before 1956 and poems first published before 1929,
// so every line is out of copyright in both the UK and the US.
// Sunday boss rounds quote nothing, so any poet is fair game.
//
//   p = the poet (right answer)          o = seven wrong poets shown alongside
//   l = the line (omit for a boss round) t = poem title, y = year first published
//   c = clues, hardest first: four for a line round, five for a boss round
//   n = accepted countries (first one is the one shown on the buttons)
//   x = three wrong countries for the bonus buttons
//   pd = false for a poet who is still in copyright (no "Read it free" link)
const FLAGS = {
  "Australia": "🇦🇺", "Ghana": "🇬🇭", "Kenya": "🇰🇪", "Nepal": "🇳🇵", "Pakistan": "🇵🇰", "Sri Lanka": "🇱🇰", "Barbados": "🇧🇧", "Canada": "🇨🇦", "England": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "Grenada": "🇬🇩",
  "Guyana": "🇬🇾", "India": "🇮🇳", "Ireland": "🇮🇪", "Jamaica": "🇯🇲", "New Zealand": "🇳🇿",
  "Nigeria": "🇳🇬", "Scotland": "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "South Africa": "🇿🇦", "St Lucia": "🇱🇨", "Trinidad": "🇹🇹",
  "USA": "🇺🇸", "UK": "🇬🇧", "Wales": "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
};

const DAYS = [
  { // Mon
    p: "John McCrae", l: "In Flanders fields the poppies blow", t: "In Flanders Fields", y: 1915,
    c: ["First World War, written as a rondeau", "An army doctor who wrote it after a friend's burial near Ypres", "Died of pneumonia in 1918, still serving", "His poem made the poppy the symbol of remembrance"],
    o: ["Rupert Brooke", "Wilfred Owen", "Siegfried Sassoon", "Edward Thomas", "Laurence Binyon", "Isaac Rosenberg", "Banjo Paterson"],
    n: ["Canada"], x: ["England", "Australia", "New Zealand"]
  },
  { // Tue
    p: "Emily Dickinson", l: "Because I could not stop for Death –", t: "Because I could not stop for Death", y: 1890,
    c: ["19th century, known for dashes and slant rhyme", "Rarely left her family home in later life", "Fewer than a dozen of her poems were published in her lifetime", "Wrote ‘Hope is the thing with feathers’"],
    o: ["Christina Rossetti", "Elizabeth Barrett Browning", "Walt Whitman", "Emily Brontë", "Sara Teasdale", "Edna St. Vincent Millay", "Pauline Johnson"],
    n: ["USA"], x: ["Canada", "England", "Ireland"]
  },
  { // Wed
    p: "Wilfred Owen", l: "What passing-bells for these who die as cattle?", t: "Anthem for Doomed Youth", y: 1920,
    c: ["First World War, written as a sonnet", "Treated for shell shock at Craiglockhart, where he met Siegfried Sassoon", "Killed in action a week before the Armistice", "Wrote ‘Dulce et Decorum Est’"],
    o: ["Rupert Brooke", "Siegfried Sassoon", "John McCrae", "Isaac Rosenberg", "Edward Thomas", "Ivor Gurney", "Robert Graves"],
    n: ["England", "UK"], x: ["Scotland", "Ireland", "Canada"]
  },
  { // Thu
    p: "Banjo Paterson", l: "There was movement at the station, for the word had passed around", t: "The Man from Snowy River", y: 1890,
    c: ["A ballad poet of the 1890s, first published in The Bulletin magazine", "Trained as a lawyer before turning to writing", "Reported on the Boer War as a correspondent", "Wrote ‘Waltzing Matilda’"],
    o: ["Henry Lawson", "Rudyard Kipling", "Robert Service", "Robert Burns", "Jessie Mackay", "John Masefield", "Thomas Hardy"],
    n: ["Australia"], x: ["New Zealand", "South Africa", "Canada"]
  },
  { // Fri
    p: "W. B. Yeats", l: "I will arise and go now, and go to Innisfree,", t: "The Lake Isle of Innisfree", y: 1890,
    c: ["First published in 1890", "Co-founded the Abbey Theatre", "Won the Nobel Prize in Literature in 1923", "Wrote ‘The Second Coming’"],
    o: ["Oscar Wilde", "Thomas Hardy", "Gerard Manley Hopkins", "Robert Louis Stevenson", "Padraic Colum", "Alfred, Lord Tennyson", "A. E. Housman"],
    n: ["Ireland"], x: ["Scotland", "Wales", "England"]
  },
  { // Sat
    p: "Claude McKay", l: "If we must die, let it not be like hogs", t: "If We Must Die", y: 1919,
    c: ["A sonnet first published in 1919", "Studied agriculture at Kansas State before moving to New York", "A leading figure of the Harlem Renaissance", "Wrote the novel Home to Harlem"],
    o: ["Langston Hughes", "Paul Laurence Dunbar", "Countee Cullen", "Jean Toomer", "Una Marson", "James Weldon Johnson", "W. E. B. Du Bois"],
    n: ["Jamaica", "USA"], x: ["Trinidad", "Barbados", "Guyana"]
  },
  { // Sun boss
    p: "Derek Walcott", pd: false,
    c: ["Born in 1930; his twin brother became a playwright", "Taught for many years at Boston University", "Founded the Trinidad Theatre Workshop", "Won the Nobel Prize in Literature in 1992", "Wrote Omeros, a Caribbean reworking of Homer"],
    o: ["Kamau Brathwaite", "V. S. Naipaul", "Wole Soyinka", "Seamus Heaney", "Les Murray", "Claude McKay", "Louise Bennett"],
    n: ["St Lucia"], x: ["Jamaica", "Barbados", "Grenada"]
  },
  { // Mon
    p: "Rabindranath Tagore", l: "Where the mind is without fear and the head is held high;", t: "Gitanjali 35", y: 1912,
    c: ["From his own English versions of songs first written in Bengali", "Founded a university at Santiniketan", "The first non-European to win the Nobel Prize in Literature, in 1913", "Wrote the national anthems of two countries"],
    o: ["Sarojini Naidu", "Rudyard Kipling", "Kahlil Gibran", "Toru Dutt", "Muhammad Iqbal", "W. B. Yeats", "Aurobindo Ghose"],
    n: ["India"], x: ["Sri Lanka", "Pakistan", "Nepal"]
  },
  { // Tue
    p: "Robert Burns", l: "Wee, sleekit, cowrin, tim'rous beastie,", t: "To a Mouse", y: 1786,
    c: ["First published in 1786, in a dialect of its own", "Worked a farm, and wrote much of his verse at the plough", "Later took a job as an exciseman, collecting taxes", "Wrote ‘Auld Lang Syne’"],
    o: ["Walter Scott", "James Hogg", "William Blake", "John Clare", "Robert Louis Stevenson", "William Wordsworth", "Thomas Moore"],
    n: ["Scotland", "UK"], x: ["Ireland", "England", "Wales"]
  },
  { // Wed
    p: "Pauline Johnson", l: "West wind, blow from your prairie nest,", t: "The Song My Paddle Sings", y: 1892,
    c: ["Toured theatres reciting her poems on stage", "Her father was a Mohawk chief, her mother English-born", "Also known by her Mohawk name, Tekahionwake", "Her collected poems were called Flint and Feather"],
    o: ["John McCrae", "Emily Dickinson", "Christina Rossetti", "Sara Teasdale", "Bliss Carman", "Jessie Mackay", "Ella Wheeler Wilcox"],
    n: ["Canada"], x: ["USA", "New Zealand", "Australia"]
  },
  { // Thu
    p: "Paul Laurence Dunbar", l: "We wear the mask that grins and lies,", t: "We Wear the Mask", y: 1895,
    c: ["First published in 1895", "Worked as a lift operator while he wrote his first books", "A school friend of Orville Wright, who printed his early newspaper", "His poem ‘Sympathy’ gave us the line ‘I know why the caged bird sings’"],
    o: ["Claude McKay", "Langston Hughes", "Walt Whitman", "Countee Cullen", "James Weldon Johnson", "Edgar Allan Poe", "Robert Frost"],
    n: ["USA"], x: ["Jamaica", "Canada", "England"]
  },
  { // Fri
    p: "Thomas Moore", l: "The Minstrel Boy to the war is gone,", t: "The Minstrel Boy", y: 1813,
    c: ["From a series of song lyrics set to old airs", "Lord Byron's friend, who burned Byron's memoirs after his death", "His Irish Melodies were sung in drawing rooms across Britain", "Wrote ‘The Last Rose of Summer’"],
    o: ["Robert Burns", "W. B. Yeats", "Lord Byron", "Percy Bysshe Shelley", "Oliver Goldsmith", "Walter Scott", "Thomas Hood"],
    n: ["Ireland"], x: ["Scotland", "Wales", "England"]
  },
  { // Sat
    p: "Christina Rossetti", l: "Remember me when I am gone away,", t: "Remember", y: 1862,
    c: ["A Victorian sonnet, written when she was nineteen", "Her brother was a Pre-Raphaelite painter", "Wrote the long fairy-tale poem ‘Goblin Market’", "Wrote ‘In the Bleak Midwinter’"],
    o: ["Elizabeth Barrett Browning", "Emily Brontë", "Emily Dickinson", "George Eliot", "Alice Meynell", "Felicia Hemans", "Pauline Johnson"],
    n: ["England", "UK"], x: ["Scotland", "Wales", "Ireland"]
  },
  { // Sun boss
    p: "Wole Soyinka", pd: false,
    c: ["Born in 1934; studied English at the University of Leeds", "Held in solitary confinement for almost two years during a civil war", "Wrote the poem ‘Telephone Conversation’, about a landlady's questions", "The first African to win the Nobel Prize in Literature, in 1986", "Wrote the play Death and the King's Horseman"],
    o: ["Chinua Achebe", "Derek Walcott", "Ngũgĩ wa Thiong'o", "Ben Okri", "Kofi Awoonor", "Christopher Okigbo", "Dennis Brutus"],
    n: ["Nigeria"], x: ["Ghana", "Kenya", "South Africa"]
  },
  { // Mon
    p: "Rupert Brooke", l: "If I should die, think only this of me:", t: "The Soldier", y: 1915,
    c: ["A sonnet written in 1914, published the next year", "He died of an infected mosquito bite on his way to Gallipoli", "Buried on the Greek island of Skyros", "His most famous poem imagines a corner of a foreign field that is for ever England"],
    o: ["Wilfred Owen", "Siegfried Sassoon", "Edward Thomas", "Isaac Rosenberg", "John McCrae", "Laurence Binyon", "Ivor Gurney"],
    n: ["England", "UK"], x: ["Scotland", "Wales", "Ireland"]
  },
  { // Tue
    p: "Walt Whitman", l: "O Captain! my Captain! our fearful trip is done,", t: "O Captain! My Captain!", y: 1865,
    c: ["Written after a death in April 1865", "A rare rhyming poem from a poet famous for free verse", "He nursed wounded soldiers in Washington during the Civil War", "Wrote Leaves of Grass, and kept revising it for nearly forty years"],
    o: ["Emily Dickinson", "Henry Wadsworth Longfellow", "Robert Frost", "Paul Laurence Dunbar", "Edgar Allan Poe", "Carl Sandburg", "Herman Melville"],
    n: ["USA"], x: ["Canada", "England", "Ireland"]
  },
  { // Wed
    p: "Henry Lawson", l: "Our fathers toiled for bitter bread", t: "Freedom on the Wallaby", y: 1891,
    c: ["Written in 1891, in support of striking shearers", "His mother Louisa was a pioneering feminist publisher", "He fought a famous war in verse with Banjo Paterson in The Bulletin", "He appeared on his country's first ten-dollar note"],
    o: ["Banjo Paterson", "C. J. Dennis", "Adam Lindsay Gordon", "Dorothea Mackellar", "Les Murray", "Judith Wright", "Katherine Mansfield"],
    n: ["Australia"], x: ["New Zealand", "South Africa", "Scotland"]
  },
  { // Thu
    p: "Gerard Manley Hopkins", l: "Glory be to God for dappled things—", t: "Pied Beauty", y: 1918,
    c: ["Published 29 years after its author died", "He invented what he called sprung rhythm", "A Jesuit priest who taught Greek in Dublin", "His friend Robert Bridges published his poems in 1918"],
    o: ["Christina Rossetti", "Thomas Hardy", "Alfred, Lord Tennyson", "Matthew Arnold", "Francis Thompson", "A. E. Housman", "Robert Browning"],
    n: ["England", "UK"], x: ["Ireland", "Wales", "Scotland"]
  },
  { // Fri
    p: "W. H. Davies", l: "What is this life if, full of care,", t: "Leisure", y: 1911,
    c: ["First published in 1911", "He lost a leg jumping a train in Canada", "Wrote The Autobiography of a Super-Tramp", "Born in Newport, Monmouthshire; his poem asks for time to stand and stare"],
    o: ["Edward Thomas", "Dylan Thomas", "John Masefield", "W. B. Yeats", "Walter de la Mare", "R. S. Thomas", "Rupert Brooke"],
    n: ["Wales", "UK"], x: ["England", "Scotland", "Ireland"]
  },
  { // Sat
    p: "Sarojini Naidu", l: "What do you sell, O ye merchants?", t: "In the Bazaars of Hyderabad", y: 1912,
    c: ["From her 1912 collection The Bird of Time", "She presided over the Indian National Congress in 1925", "After independence she became governor of Uttar Pradesh", "Gandhi called her the Nightingale of India"],
    o: ["Rabindranath Tagore", "Toru Dutt", "Kamala Das", "Nissim Ezekiel", "A. K. Ramanujan", "Aurobindo Ghose", "Rudyard Kipling"],
    n: ["India"], x: ["Pakistan", "Sri Lanka", "Nepal"]
  },
  { // Sun: boss round
    p: "Seamus Heaney", pd: false,
    c: ["Born on a farm in County Derry in 1939", "Taught at Harvard and was Oxford Professor of Poetry", "His translation of Beowulf was a surprise bestseller in 1999", "His last words, texted to his wife, were Noli timere: don't be afraid", "Won the Nobel Prize in Literature in 1995; his first collection was Death of a Naturalist"],
    o: ["W. B. Yeats", "Paul Muldoon", "Derek Mahon", "Patrick Kavanagh", "Ted Hughes", "Louis MacNeice", "Michael Longley"],
    n: ["Ireland", "UK"], x: ["Scotland", "Wales", "England"]
  },
  { // Mon
    p: "Robert Louis Stevenson", l: "Under the wide and starry sky,", t: "Requiem", y: 1887,
    c: ["Written as his own epitaph, and carved on his grave", "He died in Samoa, where people called him Tusitala, teller of tales", "Also wrote A Child's Garden of Verses", "Better known for Treasure Island"],
    o: ["Robert Burns", "Walter Scott", "Rudyard Kipling", "A. E. Housman", "John Masefield", "Hugh MacDiarmid", "Thomas Hardy"],
    n: ["Scotland", "UK"], x: ["England", "Ireland", "Wales"]
  },
  { // Tue
    p: "Edgar Allan Poe", l: "Once upon a midnight dreary, while I pondered, weak and weary,", t: "The Raven", y: 1845,
    c: ["Published in 1845, and an instant sensation", "He also invented the detective story, with The Murders in the Rue Morgue", "He died in Baltimore in 1849, after being found delirious in the street", "Baltimore's American football team is named after this poem"],
    o: ["Walt Whitman", "Henry Wadsworth Longfellow", "Emily Dickinson", "Ralph Waldo Emerson", "Herman Melville", "Edgar Lee Masters", "Paul Laurence Dunbar"],
    n: ["USA"], x: ["England", "Canada", "Ireland"]
  },
  { // Wed
    p: "Rudyard Kipling", l: "If you can keep your head when all about you", t: "If—", y: 1910,
    c: ["First published in 1910, in Rewards and Fairies", "Born in Bombay in 1865", "He turned down a knighthood and the Poet Laureateship", "The first writer in English to win the Nobel Prize in Literature, in 1907"],
    o: ["Henry Newbolt", "John Masefield", "Alfred, Lord Tennyson", "Robert Service", "Rupert Brooke", "Thomas Hardy", "W. E. Henley"],
    n: ["England", "UK"], x: ["Scotland", "Ireland", "Australia"]
  },
  { // Thu
    p: "Elizabeth Barrett Browning", l: "How do I love thee? Let me count the ways.", t: "Sonnets from the Portuguese 43", y: 1850,
    c: ["Published in 1850, in a sequence that pretended to be a translation", "She eloped to Italy in 1846", "Her spaniel Flush got a biography of his own, by Virginia Woolf", "Her husband was the poet Robert Browning"],
    o: ["Christina Rossetti", "Emily Brontë", "Robert Browning", "Alfred, Lord Tennyson", "Felicia Hemans", "Emily Dickinson", "Letitia Elizabeth Landon"],
    n: ["England", "UK"], x: ["Scotland", "Ireland", "Wales"]
  },
  { // Fri
    p: "A. E. Housman", l: "Loveliest of trees, the cherry now", t: "A Shropshire Lad II", y: 1896,
    c: ["From a collection he paid to have published in 1896", "He never lived in the county his famous book is named after", "By day he was a Cambridge professor of Latin", "Wrote A Shropshire Lad"],
    o: ["Thomas Hardy", "Edward Thomas", "Rupert Brooke", "John Betjeman", "Walter de la Mare", "Gerard Manley Hopkins", "W. H. Davies"],
    n: ["England", "UK"], x: ["Wales", "Scotland", "Ireland"]
  },
  { // Sat
    p: "Henry Wadsworth Longfellow", l: "Listen, my children, and you shall hear", t: "Paul Revere's Ride", y: 1860,
    c: ["Written in 1860, on the eve of the Civil War", "Also wrote The Song of Hiawatha", "The first American honoured with a bust in Poets' Corner, Westminster Abbey", "His most famous poem is about a midnight ride in 1775"],
    o: ["Walt Whitman", "Edgar Allan Poe", "John Greenleaf Whittier", "Ralph Waldo Emerson", "Oliver Wendell Holmes", "Emily Dickinson", "Robert Frost"],
    n: ["USA"], x: ["Canada", "England", "Ireland"]
  },
  { // Sun: boss round
    p: "Maya Angelou", pd: false,
    c: ["Born Marguerite Johnson in St Louis in 1928", "Worked as a dancer, a journalist in Ghana and a civil rights organiser", "Read a poem at Bill Clinton's first inauguration in 1993", "Her poem Still I Rise became an anthem of resilience", "Wrote I Know Why the Caged Bird Sings"],
    o: ["Langston Hughes", "Gwendolyn Brooks", "Rita Dove", "Nikki Giovanni", "Toni Morrison", "Lucille Clifton", "Audre Lorde"],
    n: ["USA"], x: ["Jamaica", "Canada", "England"]
  },
  {p:"Thomas Hardy",l:"I leant upon a coppice gate",t:"The Darkling Thrush",y:1900,c:["Dated the last day of the 19th century","He gave up writing novels after Jude the Obscure was attacked","Born in Dorset, he trained as an architect","Created Wessex in novels such as Tess of the d'Urbervilles"],o:["A. E. Housman","Edward Thomas","Gerard Manley Hopkins","Robert Bridges","Rudyard Kipling","Alfred, Lord Tennyson","John Masefield"],n:["England","UK"],x:["Scotland","Wales","Ireland"]},
  {p:"Adam Lindsay Gordon",l:"Life is mostly froth and bubble,",t:"Ye Wearie Wayfarer",y:1866,c:["Raised in England, he was shipped off to South Australia at nineteen","A champion steeplechase rider","The only Australian poet with a memorial in Poets' Corner, Westminster Abbey","Wrote Bush Ballads and Galloping Rhymes"],o:["Henry Lawson","Banjo Paterson","C. J. Dennis","Henry Kendall","Mary Gilmore","John Shaw Neilson","Bernard O'Dowd"],n:["Australia"],x:["England","Scotland","New Zealand"]},
  {p:"Walter Scott",l:"Breathes there the man with soul so dead,",t:"The Lay of the Last Minstrel",y:1805,c:["He also wrote ‘Oh what a tangled web we weave’","Turned to novels, at first published without his name","His Edinburgh monument is the largest to any writer in the world","Wrote Ivanhoe and Rob Roy"],o:["Robert Burns","James Hogg","Lord Byron","Robert Louis Stevenson","Thomas Campbell","Allan Ramsay","William Wordsworth"],n:["Scotland","UK"],x:["England","Ireland","Wales"]},
  {p:"Lord Byron",l:"She walks in beauty, like the night",t:"She Walks in Beauty",y:1815,c:["Died of fever in Greece in 1824, aged 36","Called ‘mad, bad and dangerous to know’","Father of the mathematician Ada Lovelace","Wrote Don Juan and Childe Harold's Pilgrimage"],o:["Percy Bysshe Shelley","John Keats","William Wordsworth","Samuel Taylor Coleridge","Walter Scott","Thomas Moore","Robert Southey"],n:["England","UK"],x:["Ireland","Wales","USA"]},
  {p:"Oscar Wilde",l:"Yet each man kills the thing he loves,",t:"The Ballad of Reading Gaol",y:1898,c:["First published under his prison number, C.3.3.","Born in Dublin in 1854","Died in a Paris hotel in 1900","Wrote The Importance of Being Earnest"],o:["W. B. Yeats","Thomas Moore","A. E. Housman","Algernon Swinburne","Ernest Dowson","Lord Alfred Douglas","Lionel Johnson"],n:["Ireland"],x:["England","Scotland","Wales"]},
  {p:"Edward Thomas",l:"Yes. I remember Adlestrop—",t:"Adlestrop",y:1917,c:["Robert Frost urged him to write poetry, late in his short life","Killed at the Battle of Arras in 1917","Wrote nature books and biographies before any poems","His best-known poem is named after a Cotswold station where his train stopped"],o:["Rupert Brooke","Wilfred Owen","Siegfried Sassoon","Ivor Gurney","Thomas Hardy","W. H. Davies","John Masefield"],n:["England","Wales","UK"],x:["Scotland","Ireland","USA"]},
  {p:"Grace Nichols",pd:false,c:["Born in Georgetown in 1950","Worked as a teacher and journalist before moving to Britain in 1977","Won the Commonwealth Poetry Prize with her first collection","Her partner is the poet John Agard","Wrote I Is a Long Memoried Woman and The Fat Black Woman's Poems"],o:["John Agard","Benjamin Zephaniah","Linton Kwesi Johnson","Jean 'Binta' Breeze","Lorna Goodison","Olive Senior","Merle Collins"],n:["Guyana"],x:["Jamaica","Trinidad","Barbados"]},
  {p:"Joyce Kilmer",l:"I think that I shall never see",t:"Trees",y:1913,c:["Killed in France in 1918, serving with the ‘Fighting 69th’","A man from New Jersey, despite the first name","His most famous poem is just twelve lines long","It ends by saying only God can make a tree"],o:["Robert Frost","Carl Sandburg","Vachel Lindsay","Edgar Lee Masters","Alan Seeger","Sara Teasdale","Edwin Arlington Robinson"],n:["USA"],x:["Canada","England","Ireland"]},
  {p:"Lewis Carroll",l:"'Twas brillig, and the slithy toves",t:"Jabberwocky",y:1871,c:["A mathematics lecturer at Christ Church, Oxford","His real name was Charles Lutwidge Dodgson","The poem appears in a book about a looking-glass","Wrote Alice's Adventures in Wonderland"],o:["Edward Lear","Hilaire Belloc","W. S. Gilbert","Thomas Hood","Christina Rossetti","Robert Louis Stevenson","A. A. Milne"],n:["England","UK"],x:["Scotland","Wales","Ireland"]},
  {p:"Toru Dutt",l:"Like a huge Python, winding round and round",t:"Our Casuarina Tree",y:1882,c:["Died in Calcutta in 1877, aged only 21","Studied in France and at Cambridge with her sister Aru","Translated French poetry into English","Wrote Ancient Ballads and Legends of Hindustan"],o:["Sarojini Naidu","Rabindranath Tagore","Michael Madhusudan Dutt","Henry Derozio","Manmohan Ghose","Aurobindo Ghose","Kamala Das"],n:["India"],x:["Sri Lanka","Pakistan","Nepal"]},
  {p:"Francis Ledwidge",l:"He shall not hear the bittern cry",t:"Lament for Thomas MacDonagh",y:1917,c:["A road worker and miner from County Meath","Known as the ‘poet of the blackbirds’","Killed at Passchendaele in 1917","Wrote an elegy for a leader of the Easter Rising"],o:["W. B. Yeats","Patrick Pearse","Thomas MacDonagh","Joseph Mary Plunkett","Padraic Colum","Tom Kettle","Wilfred Owen"],n:["Ireland"],x:["England","Scotland","Wales"]},
  {p:"Ella Wheeler Wilcox",l:"Laugh, and the world laughs with you;",t:"Solitude",y:1883,c:["Born on a Wisconsin farm in 1850","Wrote a poem a day for newspapers for years","Her Poems of Passion were called scandalous","The next line is: Weep, and you weep alone"],o:["Emily Dickinson","Sara Teasdale","Edna St. Vincent Millay","Amy Lowell","Emma Lazarus","Helen Hunt Jackson","Julia Ward Howe"],n:["USA"],x:["Canada","England","Australia"]},
  {p:"John Keats",l:"Season of mists and mellow fruitfulness,",t:"To Autumn",y:1820,c:["Trained as a surgeon at Guy's Hospital","Died in Rome aged 25","Asked for his gravestone to say his name was ‘writ in water’","Wrote Ode to a Nightingale"],o:["Percy Bysshe Shelley","Lord Byron","William Wordsworth","Samuel Taylor Coleridge","John Clare","Leigh Hunt","Thomas Hood"],n:["England","UK"],x:["Scotland","Ireland","Wales"]},
  {p:"Jackie Kay",pd:false,c:["Born in Edinburgh in 1961 and brought up in Glasgow","Also wrote the novel Trumpet","Her first collection, The Adoption Papers, told her story in three voices","Wrote Red Dust Road, about finding her birth father in Nigeria","Became Scotland's Makar in 2016"],o:["Carol Ann Duffy","Liz Lochhead","Kathleen Jamie","Don Paterson","Edwin Morgan","Benjamin Zephaniah","Imtiaz Dharker"],n:["Scotland","UK"],x:["Nigeria","England","Ireland"]}
];
