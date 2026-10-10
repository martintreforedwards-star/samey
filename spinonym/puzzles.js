// Spinonym puzzle bank.
// Add puzzles here without touching the game code. Each puzzle needs:
//   type   : one of the 18 wheel types (see TYPES in index.html)
//   clue   : the big word or phrase on the card
//   sub    : the line under it (a nudge, not the answer)
//   answer : one word, lower case
//   close  : other fair answers, space-separated. Guessing one is free and checks no letters.
//   hint   : optional mask, e.g. "___ngy". Without one, the hint shows the last half of the word.
//   note   : optional line shown on the result (e.g. what an acronym stands for)
// Each type cycles through its own puzzles, so a type with few puzzles repeats sooner.

const PUZZLES = [
  // ---- Meaning ----
  {type:"antonym", clue:"Generous", sub:"It's a describing word.", answer:"stingy",
   close:"mean miserly tight cheap selfish greedy ungenerous parsimonious tightfisted mingy"},
  {type:"antonym", clue:"Ancient", sub:"It's a describing word.", answer:"modern",
   close:"new recent current contemporary young fresh novel latest"},
  {type:"antonym", clue:"Expand", sub:"It's a doing word.", answer:"shrink",
   close:"contract reduce narrow decrease dwindle lessen compress deflate"},
  {type:"antonym", clue:"Victory", sub:"It's a thing word.", answer:"defeat",
   close:"loss failure"},
  {type:"antonym", clue:"Arrive", sub:"It's a doing word.", answer:"depart",
   close:"leave go exit quit"},
  {type:"antonym", clue:"Freeze", sub:"It's a doing word.", answer:"thaw",
   close:"melt warm heat defrost"},
  {type:"antonym", clue:"Accept", sub:"It's a doing word.", answer:"refuse",
   close:"reject decline deny"},

  {type:"hypernym", clue:"Oak · Ash · Birch", sub:"One word covers all three.", answer:"tree", close:"plant wood timber"},
  {type:"hypernym", clue:"Robin · Wren · Thrush", sub:"One word covers all three.", answer:"bird", close:"songbird animal"},
  {type:"hypernym", clue:"Hammer · Saw · Spanner", sub:"One word covers all three.", answer:"tool", close:"equipment implement"},
  {type:"hypernym", clue:"Piano · Violin · Trumpet", sub:"One word covers all three.", answer:"instrument", close:"music"},

  {type:"hyponym", clue:"Dog", sub:"A curly-coated breed, famous for fancy haircuts.", answer:"poodle",
   close:"labrador spaniel terrier collie beagle dachshund bulldog greyhound whippet retriever pug corgi"},
  {type:"hyponym", clue:"Cheese", sub:"Named after a village in Somerset.", answer:"cheddar",
   close:"stilton brie wensleydale cheshire gouda edam camembert feta"},
  {type:"hyponym", clue:"Tree", sub:"Its leaf is on Canada's flag.", answer:"maple",
   close:"oak ash birch elm willow pine beech sycamore"},
  {type:"hyponym", clue:"Bread", sub:"Italian, flat, and named after a slipper.", answer:"ciabatta",
   close:"focaccia baguette bloomer bagel brioche sourdough naan pitta"},

  {type:"meronym", clue:"Bicycle", sub:"The bit you sit on.", answer:"saddle",
   close:"seat wheel pedal chain brake bell spoke tyre frame handlebar"},
  {type:"meronym", clue:"Book", sub:"The edge you see when it's on a shelf.", answer:"spine",
   close:"cover page chapter jacket"},
  {type:"meronym", clue:"Flower", sub:"One of the coloured bits round the middle.", answer:"petal",
   close:"stem leaf bud pollen"},
  {type:"meronym", clue:"House", sub:"Where the smoke goes out.", answer:"chimney",
   close:"roof flue door window wall"},

  {type:"kangaroo-word", clue:"Rapscallion", sub:"A word meaning the same hides inside it, letters in order.", answer:"rascal"},
  {type:"kangaroo-word", clue:"Instructor", sub:"A word meaning the same hides inside it, letters in order.", answer:"tutor"},
  {type:"kangaroo-word", clue:"Destruction", sub:"A word meaning the same hides inside it, letters in order.", answer:"ruin"},
  {type:"kangaroo-word", clue:"Encourage", sub:"A word meaning the same hides inside it, letters in order.", answer:"urge"},

  {type:"collective-noun", clue:"Crows", sub:"A ____ of crows. It sounds sinister.", answer:"murder", close:"flock"},
  {type:"collective-noun", clue:"Owls", sub:"A ____ of owls. Sounds like they make the laws.", answer:"parliament", close:"flock"},
  {type:"collective-noun", clue:"Lions", sub:"A ____ of lions.", answer:"pride", close:"group troop"},
  {type:"collective-noun", clue:"Geese", sub:"A ____ of geese, when they're on the ground.", answer:"gaggle", close:"flock skein"},

  // ---- Sound & spelling ----
  {type:"anagram", clue:"Silent", sub:"Use every letter. It means: pay attention.", answer:"listen", close:"enlist tinsel inlets"},
  {type:"anagram", clue:"Earth", sub:"Use every letter. It's something that beats.", answer:"heart", close:"hater"},
  {type:"anagram", clue:"Dusty", sub:"Use every letter. It's a room for reading.", answer:"study"},
  {type:"anagram", clue:"Elbow", sub:"Use every letter. It means underneath.", answer:"below", close:"bowel"},
  {type:"anagram", clue:"Lemon", sub:"Use every letter. It's a big, juicy fruit.", answer:"melon"},
  {type:"anagram", clue:"Teacher", sub:"Use every letter. Someone who breaks the rules.", answer:"cheater", close:"hectare"},
  {type:"anagram", clue:"Inch", sub:"Use every letter. It's part of your face.", answer:"chin"},

  {type:"homophone", clue:"Knight", sub:"Same sound, different spelling: when the sun's gone down.", answer:"night"},
  {type:"homophone", clue:"Flour", sub:"Same sound, different spelling: it grows in the garden.", answer:"flower"},
  {type:"homophone", clue:"Bare", sub:"Same sound, different spelling: a big furry animal.", answer:"bear"},
  {type:"homophone", clue:"Whole", sub:"Same sound, different spelling: a gap or opening.", answer:"hole"},
  {type:"homophone", clue:"Pair", sub:"Same sound, different spelling: a fruit.", answer:"pear", close:"pare"},
  {type:"homophone", clue:"Stare", sub:"Same sound, different spelling: one step of a flight.", answer:"stair"},

  {type:"homograph", clue:"A metal · To guide", sub:"One spelling covers both.", answer:"lead"},
  {type:"homograph", clue:"A dog's sound · A tree's skin", sub:"One spelling covers both.", answer:"bark"},
  {type:"homograph", clue:"A game · A fire stick", sub:"One spelling covers both.", answer:"match"},
  {type:"homograph", clue:"A flying mammal · For hitting a ball", sub:"One spelling covers both.", answer:"bat"},

  {type:"palindrome", clue:"Midday", sub:"It reads the same backwards.", answer:"noon"},
  {type:"palindrome", clue:"A small, narrow boat", sub:"It reads the same backwards.", answer:"kayak"},
  {type:"palindrome", clue:"Flat and even", sub:"It reads the same backwards.", answer:"level"},
  {type:"palindrome", clue:"To do with a town", sub:"It reads the same backwards.", answer:"civic"},

  {type:"semordnilap", clue:"Halt", sub:"Spelt backwards, it's what you cook in.", answer:"stop", close:"cease pause"},
  {type:"semordnilap", clue:"Prize", sub:"Spelt backwards, it's a sliding box in a chest.", answer:"reward", close:"award trophy medal"},
  {type:"semordnilap", clue:"Wicked", sub:"Spelt backwards, it's what you do while you're alive.", answer:"evil", close:"bad wrong sinful"},
  {type:"semordnilap", clue:"Pieces", sub:"Spelt backwards, it's a band with a buckle.", answer:"parts", close:"bits"},

  {type:"rhyming-slang", clue:"Apples and pears", sub:"Cockney rhyming slang. Most houses have them.", answer:"stairs", close:"steps"},
  {type:"rhyming-slang", clue:"Dog and bone", sub:"Cockney rhyming slang. You might be on it now.", answer:"phone", close:"telephone mobile"},
  {type:"rhyming-slang", clue:"Plates of meat", sub:"Cockney rhyming slang. You stand on them.", answer:"feet"},
  {type:"rhyming-slang", clue:"Butcher's hook", sub:"Cockney rhyming slang. \"Have a butcher's.\"", answer:"look", close:"glance peek"},
  {type:"rhyming-slang", clue:"Pork pies", sub:"Cockney rhyming slang. Don't tell them.", answer:"lies", close:"fibs"},

  // ---- Names ----
  {type:"eponym", clue:"An earl who ate at the card table", sub:"It's named after him. Lunch for millions.", answer:"sandwich"},
  {type:"eponym", clue:"A duke's tall boots", sub:"It's named after him. Good in puddles.", answer:"wellington", close:"welly wellie"},
  {type:"eponym", clue:"An earl's knitted jacket", sub:"It's named after him. Buttons up the front.", answer:"cardigan"},
  {type:"eponym", clue:"A Russian ballerina", sub:"It's named after her. Meringue, cream and fruit.", answer:"pavlova"},
  {type:"eponym", clue:"A land agent everyone shunned", sub:"It's named after him. Refusing to deal with someone.", answer:"boycott"},
  {type:"eponym", clue:"Sir Robert Peel's police", sub:"It's named after him. A friendly word for a copper.", answer:"bobby"},

  {type:"pseudonym", clue:"Eric Arthur Blair", sub:"He wrote Animal Farm as George ____.", answer:"orwell", free:true},
  {type:"pseudonym", clue:"Samuel Clemens", sub:"He wrote Tom Sawyer as Mark ____.", answer:"twain", free:true},
  {type:"pseudonym", clue:"Mary Ann Evans", sub:"She wrote Middlemarch as George ____.", answer:"eliot", free:true},
  {type:"pseudonym", clue:"Norma Jeane Mortenson", sub:"She became Marilyn ____.", answer:"monroe", free:true},

  {type:"exonym", clue:"Deutschland", sub:"A country in Europe.", answer:"germany", free:true},
  {type:"exonym", clue:"Cymru", sub:"A country much closer to home.", answer:"wales", free:true},
  {type:"exonym", clue:"Nihon", sub:"An island country in Asia.", answer:"japan", free:true},
  {type:"exonym", clue:"Suomi", sub:"A country in the far north of Europe.", answer:"finland", free:true},

  // ---- Word-building ----
  {type:"acronym", clue:"Breathing gear for diving", sub:"Each letter stands for a word.", answer:"scuba",
   note:"Self-contained underwater breathing apparatus."},
  {type:"acronym", clue:"A beam of very bright light", sub:"Each letter stands for a word.", answer:"laser",
   note:"Light amplification by stimulated emission of radiation."},
  {type:"acronym", clue:"It spots planes with radio waves", sub:"Each letter stands for a word.", answer:"radar",
   note:"Radio detection and ranging."},
  {type:"acronym", clue:"Someone against building work near their home", sub:"Each letter stands for a word.", answer:"nimby",
   note:"Not in my back yard."},
  {type:"acronym", clue:"Four secret digits for your bank card", sub:"Each letter stands for a word.", answer:"pin",
   note:"Personal identification number."},

  {type:"portmanteau", clue:"Breakfast + Lunch", sub:"A late-morning meal.", answer:"brunch"},
  {type:"portmanteau", clue:"Smoke + Fog", sub:"Dirty city air.", answer:"smog"},
  {type:"portmanteau", clue:"Motor + Hotel", sub:"A roadside place to stay.", answer:"motel"},
  {type:"portmanteau", clue:"Chuckle + Snort", sub:"A gleeful laugh. Lewis Carroll made it up.", answer:"chortle"},
  {type:"portmanteau", clue:"Web + Log", sub:"An online diary.", answer:"blog"},
  {type:"portmanteau", clue:"Camera + Recorder", sub:"For filming holidays.", answer:"camcorder"},

  {type:"clipping", clue:"Influenza", sub:"Its everyday short form. You might catch it in winter.", answer:"flu"},
  {type:"clipping", clue:"Perambulator", sub:"Its everyday short form. For pushing a baby.", answer:"pram", close:"buggy pushchair"},
  {type:"clipping", clue:"Refrigerator", sub:"Its everyday short form. Keeps the milk cold.", answer:"fridge"},
  {type:"clipping", clue:"Hippopotamus", sub:"Its everyday short form. A big river animal.", answer:"hippo"},
  {type:"clipping", clue:"Gymnasium", sub:"Its everyday short form. Where you work out.", answer:"gym"},
];

// Name that nym: the bonus round. Three a day, in order, then it cycles.
// Uses glossary terms that aren't Easter eggs, so eggs stay a surprise.
const QUIZ = [
  {ex:"“Abso-bloody-lutely”", a:"Tmesis", o:["Spoonerism","Tmesis","Portmanteau","Zeugma"],
   why:"Tmesis: splitting a word in two by dropping another word into the middle.", id:"tmesis"},
  {ex:"“She lost her keys and her temper”", a:"Zeugma", o:["Oxymoron","Zeugma","Simile","Litotes"],
   why:"Zeugma: one word doing two jobs at once. Here “lost” means two different things.", id:"zeugma"},
  {ex:"“Fighting a liar” (for lighting a fire)", a:"Spoonerism", o:["Spoonerism","Malapropism","Mondegreen","Anagram"],
   why:"Spoonerism: swapping the first sounds of two words.", id:"spoonerism"},
  {ex:"“Deafening silence”", a:"Oxymoron", o:["Hyperbole","Oxymoron","Euphemism","Metaphor"],
   why:"Oxymoron: two words with opposite meanings used together.", id:"oxymoron"},
  {ex:"“Not bad at all” (meaning really good)", a:"Litotes", o:["Litotes","Euphemism","Idiom","Hyperbole"],
   why:"Litotes: saying something by denying its opposite. A very British habit.", id:"litotes"},
  {ex:"“I've told you a million times”", a:"Hyperbole", o:["Metaphor","Hyperbole","Idiom","Simile"],
   why:"Hyperbole: deliberate exaggeration.", id:"hyperbole"},
  {ex:"“As brave as a lion”", a:"Simile", o:["Metaphor","Simile","Alliteration","Idiom"],
   why:"Simile: comparing two things using “like” or “as”.", id:"simile"},
  {ex:"“Time is money”", a:"Metaphor", o:["Simile","Metaphor","Idiom","Metonym"],
   why:"Metaphor: saying one thing is another.", id:"metaphor"},
  {ex:"Sizzle · Buzz · Splash", a:"Onomatopoeia", o:["Alliteration","Onomatopoeia","Assonance","Tautonym"],
   why:"Onomatopoeia: words that sound like the noise they describe.", id:"onomatopoeia"},
  {ex:"“Peter Piper picked a peck of pickled peppers”", a:"Alliteration", o:["Assonance","Alliteration","Consonance","Pangram"],
   why:"Alliteration: words close together starting with the same sound.", id:"alliteration"},
  {ex:"“The quick brown fox jumps over the lazy dog”", a:"Pangram", o:["Pangram","Lipogram","Alliteration","Isogram"],
   why:"Pangram: a sentence that uses every letter of the alphabet.", id:"pangram"},
  {ex:"Tangerine · Dream", a:"Assonance", o:["Consonance","Assonance","Oronym","Homophone"],
   why:"Assonance: the same vowel sound with different endings. A kind of half rhyme.", id:"assonance"},
  {ex:"Blank · Think", a:"Consonance", o:["Assonance","Alliteration","Consonance","Homograph"],
   why:"Consonance: the same consonant sounds with different vowels.", id:"consonance"},
  {ex:"“For all intensive purposes”", a:"Eggcorn", o:["Eggcorn","Malapropism","Mondegreen","Spoonerism"],
   why:"Eggcorn: a misheard phrase that still sort of makes sense.", id:"eggcorn"},
  {ex:"“She danced the flamingo” (for flamenco)", a:"Malapropism", o:["Eggcorn","Spoonerism","Malapropism","Oronym"],
   why:"Malapropism: using the wrong word because it sounds like the right one.", id:"malapropism"},
  {ex:"“Gladly the cross-eyed bear” (from a hymn)", a:"Mondegreen", o:["Oronym","Mondegreen","Eggcorn","Malapropism"],
   why:"Mondegreen: a misheard line from a song, poem or hymn.", id:"mondegreen"},
  {ex:"Ice cream · I scream", a:"Oronym", o:["Homophone","Homograph","Oronym","Mondegreen"],
   why:"Oronym: a phrase that sounds exactly like a different phrase.", id:"oronym"},
  {ex:"“Short” is a short word", a:"Autological word", o:["Palindrome","Autological word","Tautonym","Isogram"],
   why:"Autological word: a word that describes itself.", id:"autological-word"},
  {ex:"Lumberjacks (no letter appears twice)", a:"Isogram", o:["Pangram","Lipogram","Anagram","Isogram"],
   why:"Isogram: a word where no letter is repeated.", id:"isogram"},
  {ex:"Usain Bolt, the sprinter", a:"Aptronym", o:["Aptronym","Eponym","Pseudonym","Mononym"],
   why:"Aptronym: a name that suits the person's job.", id:"aptronym"},
  {ex:"Adele · Madonna · Pelé", a:"Mononym", o:["Pseudonym","Mononym","Aptronym","Exonym"],
   why:"Mononym: someone known by just one name.", id:"mononym"},
  {ex:"“Whale-road” for the sea", a:"Kenning", o:["Metaphor","Portmanteau","Kenning","Calque"],
   why:"Kenning: a poetic two-word name for something, from Old English and Norse poetry.", id:"kenning"},
  {ex:"Couscous · Bonbon", a:"Tautonym", o:["Palindrome","Tautonym","Anagram","Semordnilap"],
   why:"Tautonym: a word made of the same part said twice.", id:"tautonym"},
  {ex:"“Unkempt”, but nobody is ever “kempt”", a:"Unpaired word", o:["Antonym","Contronym","Oxymoron","Unpaired word"],
   why:"Unpaired word: its plain partner has fallen out of use.", id:"unpaired-word"},
];

// Easter eggs, in the order they unlock. One per perfect bonus round, at most one a day.
// The ids match glossary.html, which reads the same saved list.
const EGGS = [
  {id:"pun", name:"Pun", def:"A joke that plays on a word with two meanings, or two words that sound alike.", eg:"I used to be a banker, but I lost interest."},
  {id:"verbing", name:"Verbing", def:"Turning a noun into a verb.", eg:"To google something."},
  {id:"compound-word", name:"Compound word", def:"Two whole words joined to make a new one.", eg:"Sun + flower = sunflower."},
  {id:"reduplication", name:"Reduplication", def:"A word built from a sound repeated with a small change.", eg:"Zigzag, chit-chat, hanky-panky."},
  {id:"eye-rhyme", name:"Eye rhyme", def:"Words that look as if they rhyme, but don't when you say them.", eg:"Love and move."},
  {id:"rebus", name:"Rebus", def:"A puzzle where pictures or symbols stand in for words or sounds.", eg:"I ♥ NY."},
  {id:"back-formation", name:"Back-formation", def:"A new word made by trimming a bit off a longer one.", eg:"Edit, made from editor."},
  {id:"anacronym", name:"Anacronym", def:"An acronym so familiar that people forget it ever was one.", eg:"Laser."},
  {id:"false-friend", name:"False friend", def:"A word that looks the same in another language but means something different.", eg:"French sensible means sensitive."},
  {id:"chiasmus", name:"Chiasmus", def:"A phrase that repeats itself in reverse order.", eg:"Eat to live, not live to eat."},
  {id:"malaphor", name:"Malaphor", def:"Two sayings accidentally mashed into one.", eg:"We'll burn that bridge when we come to it."},
  {id:"pleonasm", name:"Pleonasm", def:"Using more words than you need.", eg:"A free gift."},
  {id:"synecdoche", name:"Synecdoche", def:"A part of something used to mean the whole thing.", eg:"All hands on deck."},
  {id:"dysphemism", name:"Dysphemism", def:"A deliberately harsh word for something. The opposite of a euphemism.", eg:"Rust bucket for an old car."},
  {id:"snowclone", name:"Snowclone", def:"A well-worn phrase template you can fill with new words.", eg:"Grey is the new black."},
  {id:"tom-swifty", name:"Tom Swifty", def:"A pun hidden in the word describing how something was said.", eg:"“I've lost my crayons,” said Tom colourlessly."},
  {id:"ambigram", name:"Ambigram", def:"A word that still reads correctly when you turn it upside down.", eg:"SWIMS, in capitals."},
  {id:"ghost-word", name:"Ghost word", def:"A word that only exists because of a mistake.", eg:"Dord, printed in a 1934 dictionary by error."},
  {id:"hapax-legomenon", name:"Hapax legomenon", def:"A word that appears only once in a whole body of writing.", eg:"Honorificabilitudinitatibus, used once in all of Shakespeare."},
];
