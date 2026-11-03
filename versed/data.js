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
  "Australia": "🇦🇺", "Barbados": "🇧🇧", "Canada": "🇨🇦", "England": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "Grenada": "🇬🇩",
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
  }
];
