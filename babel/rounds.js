// ---- Babel rounds ----
// After the reels, each day plays four of these nine rounds (they take turns; see index.html).
// The standard shape: w = the word, l = its language, a = the right answer, f = three wrong answers, o = the story.
// Keep it family-friendly, and please have new entries checked by a speaker of the language.

// False friends · looks like English, means something else
const FALSE = [
 {w:"Gift",l:"German",a:"Poison",f:["A present","A talent","A tip"],o:"A present in German is <i>ein Geschenk</i>. Be careful what you write on the tag."},
 {w:"embarazada",l:"Spanish",a:"Pregnant",f:["Embarrassed","Hugged","Arrested"],o:"Embarrassed is <i>avergonzada</i>. Mixing them up is a classic, and very embarrassing, mistake."},
 {w:"slim",l:"Dutch",a:"Clever",f:["Thin","Slippery","Shy"],o:"Thin in Dutch is <i>dun</i>."},
 {w:"moron",l:"Welsh",a:"Carrots",f:["A fool","A hill","Morning"],o:"<i>Moron</i> is carrots and <i>moronen</i> is one carrot."},
 {w:"Rock",l:"German",a:"A skirt",f:["Rock music","A stone","A cliff"],o:"Rock music is <i>Rockmusik</i>, and a rock is <i>ein Stein</i> or <i>ein Felsen</i>."},
 {w:"éxito",l:"Spanish",a:"Success",f:["An exit","Excitement","An exam"],o:"The way out is <i>la salida</i>."},
 {w:"camera",l:"Italian",a:"A room",f:["A camera","A camel","A cabin"],o:"From Latin <i>camera</i>, a vaulted room. A camera was first a <i>camera obscura</i>, a ‘dark room’."},
 {w:"librairie",l:"French",a:"A bookshop",f:["A library","A bookcase","A diary"],o:"A library is <i>une bibliothèque</i>."},
 {w:"bald",l:"German",a:"Soon",f:["Hairless","Brave","Cold"],o:"<i>Bis bald!</i> means ‘see you soon’."},
 {w:"constipado",l:"Spanish",a:"Having a cold",f:["Constipated","Confused","Crowded"],o:"<i>Estoy constipado</i>: I've got a cold."},
 {w:"sensible",l:"French",a:"Sensitive",f:["Sensible","Senseless","Sincere"],o:"Sensible, in the English sense, is <i>raisonnable</i>."},
 {w:"parenti",l:"Italian",a:"Relatives",f:["Parents","Neighbours","Godparents"],o:"Parents are <i>genitori</i>."},
 {w:"carpeta",l:"Spanish",a:"A folder",f:["A carpet","A carpenter","A car park"],o:"A carpet is <i>una alfombra</i>."},
 {w:"brand",l:"Dutch",a:"A fire",f:["A brand name","A sword","A bread roll"],o:"<i>Brand!</i> is what you shout when you see a fire."},
 {w:"Chef",l:"German",a:"A boss",f:["A cook","A captain","A teacher"],o:"From French <i>chef</i>, ‘head’. A head chef is just one kind of boss."},
 {w:"coin",l:"French",a:"A corner",f:["A coin","A wedge","A coat"],o:"A coin is <i>une pièce</i>."},
 {w:"plant",l:"Welsh",a:"Children",f:["Plants","Planets","Plans"],o:"One child is <i>plentyn</i>. A plant is <i>planhigyn</i>."},
 {w:"glass",l:"Swedish",a:"Ice cream",f:["Glass","A mirror","Ice"],o:"A glass of water is <i>ett glas vatten</i>, with one s."},
 {w:"sopa",l:"Spanish",a:"Soup",f:["Soap","A sofa","A spoon"],o:"Soap is <i>jabón</i>."},
 {w:"morbido",l:"Italian",a:"Soft",f:["Morbid","Sickly","Gloomy"],o:"Soft as a pillow. Morbid is <i>macabro</i>."},
 {w:"pain",l:"French",a:"Bread",f:["Pain","A pane of glass","A pan"],o:"<i>Pain au chocolat</i>: chocolate bread. Pain is <i>la douleur</i>."}
];

// Lost in translation · words English doesn't have
const LOST = [
 {w:"hiraeth",l:"Welsh",a:"A deep longing for a home you can't go back to",f:["The first warm day of spring","A song sung at funerals","Pride in your home town"],o:"There's no single English word for it."},
 {w:"sobremesa",l:"Spanish",a:"Lingering at the table to chat after a meal",f:["A second helping of pudding","A table laid for guests","A nap after lunch"],o:"Literally ‘over the table’."},
 {w:"tsundoku",l:"Japanese",a:"Buying books and leaving them unread in piles",f:["Reading a book in one sitting","Lending books and never getting them back","Reading in bed by torchlight"],o:"From <i>tsunde</i>, ‘stacking up’, and <i>doku</i>, ‘reading’."},
 {w:"Kummerspeck",l:"German",a:"Weight gained from comfort eating",f:["A sausage eaten at Christmas","Worry lines on your face","A fear of bacon"],o:"Literally ‘grief bacon’."},
 {w:"hygge",l:"Danish",a:"A cosy, warm feeling of contentment",f:["A long walk in the cold","A shy greeting","A strong coffee"],o:"Candles, blankets and good company."},
 {w:"Schadenfreude",l:"German",a:"Pleasure at someone else's bad luck",f:["Sadness at the end of a holiday","Joy at finding something lost","Guilt about being happy"],o:"<i>Schaden</i>, ‘harm’, plus <i>Freude</i>, ‘joy’."},
 {w:"komorebi",l:"Japanese",a:"Sunlight shining through the leaves of trees",f:["The smell of rain on dry ground","Mist rising from a lake","The first frost of winter"],o:"From the words for ‘tree’, ‘escape’ and ‘sunlight’."},
 {w:"lagom",l:"Swedish",a:"Just the right amount, not too much or too little",f:["Late, but only a bit","Very slowly","Far too much"],o:"Often called the Swedish secret to a balanced life."},
 {w:"fika",l:"Swedish",a:"A break for coffee, cake and a chat",f:["A quick nap","A walk after dinner","An early night"],o:"Many Swedish workplaces stop for fika every day."},
 {w:"gezellig",l:"Dutch",a:"Cosy and sociable, with good company",f:["Busy and noisy","Lonely but peaceful","Tidy and organised"],o:"A good evening with friends is <i>gezellig</i>."},
 {w:"sisu",l:"Finnish",a:"Stubborn determination when things get tough",f:["A sauna with friends","Midnight sun in summer","A shy smile"],o:"Finns call it part of the national character."},
 {w:"friluftsliv",l:"Norwegian",a:"Spending time outdoors in nature, whatever the weather",f:["A holiday at home","Freedom from work","A lazy Sunday morning"],o:"Literally ‘free-air life’."},
 {w:"dolce far niente",l:"Italian",a:"The pleasure of doing nothing at all",f:["A sweet eaten after dinner","Sleeping in late","Saying nothing in an argument"],o:"Literally ‘sweet doing nothing’."},
 {w:"l'esprit de l'escalier",l:"French",a:"Thinking of the perfect reply when it's too late",f:["Nerves before a big speech","A ghost on the stairs","Running up the stairs two at a time"],o:"Literally ‘staircase wit’: the comeback that comes to you on the way out."},
 {w:"Fernweh",l:"German",a:"A longing to travel to faraway places",f:["Homesickness","Fear of flying","Jet lag"],o:"The opposite of <i>Heimweh</i>, homesickness."},
 {w:"wabi-sabi",l:"Japanese",a:"Finding beauty in things that are imperfect or old",f:["A very hot green paste","Keeping a tidy home","A spicy noodle dish"],o:"A cracked, much-loved teacup is very wabi-sabi."},
 {w:"cwtch",l:"Welsh",a:"A cuddle, or a cosy safe place",f:["A quick kiss on the cheek","A sulk","A small cupboard for coats"],o:"Welsh people say a cwtch is much more than a hug."},
 {w:"Torschlusspanik",l:"German",a:"The fear that time is running out to do things",f:["Fear of shutting doors","Panic about missing a train","Dread of Monday mornings"],o:"Literally ‘gate-shut panic’, from city gates closing at night."},
 {w:"saudade",l:"Portuguese",a:"A deep, bittersweet longing for something or someone absent",f:["The sound of the sea","A happy reunion","A fast samba dance"],o:"It runs through Portuguese fado music."},
 {w:"mångata",l:"Swedish",a:"The road-like reflection of the moon on water",f:["A ring around the moon","Fog over a lake at dawn","A shooting star"],o:"Literally ‘moon street’."}
];

// Idioms, literally · lit = the word-for-word English; a = what it really means
const IDIOM = [
 {lit:"It's raining old women and sticks",w:"Mae hi'n bwrw hen wragedd a ffyn",l:"Welsh",a:"It's pouring with rain",f:["It's a quiet day","Everyone's coming to visit","It's very windy"],o:"The Welsh version of raining cats and dogs."},
 {lit:"Not my circus, not my monkeys",w:"Nie mój cyrk, nie moje małpy",l:"Polish",a:"Not my problem",f:["I'm not in charge of the children","This place is chaos","I don't like surprises"],o:"Lots of English speakers now borrow it."},
 {lit:"To slide in on a shrimp sandwich",w:"Glida in på en räkmacka",l:"Swedish",a:"To have things handed to you without effort",f:["To arrive late for dinner","To make an awkward entrance","To eat too much at a party"],o:"Said of someone who's had an easy ride."},
 {lit:"To have tomatoes on your eyes",w:"Tomaten auf den Augen haben",l:"German",a:"To miss something obvious",f:["To be very tired","To cry easily","To be red-faced with embarrassment"],o:"Can't see it? You must have tomatoes on your eyes."},
 {lit:"To have the cockroach",w:"Avoir le cafard",l:"French",a:"To feel low",f:["To be untidy","To be frightened","To be lucky"],o:"Feeling down in the dumps."},
 {lit:"To put down a rabbit",w:"Poser un lapin",l:"French",a:"To stand someone up",f:["To tell a lie","To give up a bad habit","To calm someone down"],o:"When someone doesn't turn up for a date."},
 {lit:"I only understand train station",w:"Ich verstehe nur Bahnhof",l:"German",a:"It's all Greek to me",f:["I'm about to leave","I'm lost","I'm only here for the trains"],o:"Said when you can't follow a word."},
 {lit:"Into the wolf's mouth",w:"In bocca al lupo",l:"Italian",a:"Good luck!",f:["Watch out!","Hurry up!","Be quiet!"],o:"The reply is <i>Crepi!</i>: ‘may it die!’ (the wolf, that is)."},
 {lit:"To be eaten bread",w:"Ser pan comido",l:"Spanish",a:"To be a piece of cake",f:["To be old news","To be forgotten","To be very hungry"],o:"Something really easy."},
 {lit:"Now the monkey comes out of the sleeve",w:"Nu komt de aap uit de mouw",l:"Dutch",a:"Now the truth comes out",f:["Now the fun begins","Now it's getting cold","Now we're in trouble"],o:"The Dutch version of letting the cat out of the bag."},
 {lit:"The carrots are cooked",w:"Les carottes sont cuites",l:"French",a:"It's too late, the game's up",f:["Dinner is ready","It's a job well done","It's time for bed"],o:"Nothing more can be done."},
 {lit:"Even monkeys fall from trees",w:"猿も木から落ちる",l:"Japanese",a:"Everyone makes mistakes",f:["Pride comes before a fall","Look before you leap","Good things come to those who wait"],o:"Even experts slip up sometimes."},
 {lit:"To hang noodles on someone's ears",w:"Вешать лапшу на уши",l:"Russian",a:"To fool someone with lies",f:["To refuse to listen","To make someone laugh","To pay someone a compliment"],o:"If someone's spinning you a tale, they're hanging noodles on your ears."},
 {lit:"There's no cow on the ice",w:"Det är ingen ko på isen",l:"Swedish",a:"There's no need to worry",f:["It's too cold to go out","Something's not right","The coast is clear to cross"],o:"Relax: no cow, no ice, no problem."},
 {lit:"Don't lick before it drips",w:"Ei kannata nuolaista ennen kuin tipahtaa",l:"Finnish",a:"Don't count your chickens before they hatch",f:["Don't eat before everyone sits down","Don't waste good food","Don't make a mess"],o:"Wait until it's really yours."},
 {lit:"To have no hairs on your tongue",w:"Non avere peli sulla lingua",l:"Italian",a:"To speak your mind bluntly",f:["To be a picky eater","To tell lies smoothly","To never get ill"],o:"Someone who says exactly what they think."},
 {lit:"To throw the house out of the window",w:"Tirar la casa por la ventana",l:"Spanish",a:"To spend money lavishly",f:["To have a big clear-out","To lose your temper","To move house"],o:"Pushing the boat out for a big celebration."},
 {lit:"To pay the duck",w:"Pagar o pato",l:"Portuguese",a:"To take the blame for something you didn't do",f:["To pay too much","To pay for everyone's dinner","To pay a debt very late"],o:"Being the scapegoat."},
 {lit:"The bear dances there",w:"Da steppt der Bär",l:"German",a:"It's going to be a great party",f:["It's very dangerous","Someone's in a bad mood","It's a long way away"],o:"Where the bear dances, the fun is."}
];

// Spot the script · w = a word in that script, r = how it sounds, g = what it means
const SCRIPT = [
 {w:"Γεια σου",r:"yia sou",g:"hello",a:"Greek",f:["Cyrillic","Armenian","Georgian"]},
 {w:"Привет",r:"privet",g:"hi",a:"Cyrillic (Russian)",f:["Greek","Armenian","Georgian"]},
 {w:"שלום",r:"shalom",g:"hello, peace",a:"Hebrew",f:["Arabic","Amharic","Armenian"]},
 {w:"مرحبا",r:"marhaban",g:"hello",a:"Arabic",f:["Hebrew","Bengali","Tamil"]},
 {w:"नमस्ते",r:"namaste",g:"hello",a:"Devanagari (Hindi)",f:["Bengali","Tamil","Thai"]},
 {w:"안녕하세요",r:"annyeonghaseyo",g:"hello",a:"Korean",f:["Japanese","Chinese","Thai"]},
 {w:"こんにちは",r:"konnichiwa",g:"hello",a:"Japanese",f:["Korean","Chinese","Thai"]},
 {w:"你好",r:"nǐ hǎo",g:"hello",a:"Chinese",f:["Japanese","Korean","Thai"]},
 {w:"გამარჯობა",r:"gamarjoba",g:"hello",a:"Georgian",f:["Armenian","Thai","Tamil"]},
 {w:"Բարև",r:"barev",g:"hello",a:"Armenian",f:["Georgian","Greek","Cyrillic (Russian)"]},
 {w:"สวัสดี",r:"sawasdee",g:"hello",a:"Thai",f:["Tamil","Bengali","Korean"]},
 {w:"வணக்கம்",r:"vanakkam",g:"hello",a:"Tamil",f:["Thai","Bengali","Devanagari (Hindi)"]},
 {w:"নমস্কার",r:"nomoshkar",g:"hello",a:"Bengali",f:["Devanagari (Hindi)","Tamil","Thai"]},
 {w:"ሰላም",r:"selam",g:"hello, peace",a:"Amharic",f:["Armenian","Georgian","Hebrew"]}
];

// Animal noises · w = the sound, l = the language, a = the animal
const NOISE = [
 {w:"wan wan",l:"Japanese",a:"Dog",f:["Cat","Duck","Frog"],o:"In Japanese it's written ワンワン."},
 {w:"kero kero",l:"Japanese",a:"Frog",f:["Duck","Crow","Cricket"],o:"Ribbit, in Japanese."},
 {w:"būbū",l:"Japanese",a:"Pig",f:["Cow","Bee","Car horn"],o:"Oink, in Japanese."},
 {w:"hihīn",l:"Japanese",a:"Horse",f:["Donkey","Goat","Owl"],o:"A Japanese horse's neigh."},
 {w:"kokekokkō",l:"Japanese",a:"Rooster",f:["Owl","Pigeon","Turkey"],o:"Cock-a-doodle-doo, in Japanese."},
 {w:"chū chū",l:"Japanese",a:"Mouse",f:["Bird","Train","Squirrel"],o:"Squeak, in Japanese. It's the <i>chu</i> in Pikachu."},
 {w:"mē mē",l:"Japanese",a:"Sheep",f:["Goat","Cow","Cat"],o:"Baa, in Japanese."},
 {w:"cocorico",l:"French",a:"Rooster",f:["Duck","Pigeon","Chick"],o:"France's rooster is a national symbol, so <i>cocorico!</i> is also a cheer of French pride."},
 {w:"coin coin",l:"French",a:"Duck",f:["Goose","Frog","Pig"],o:"Quack quack, in French. (A <i>coin</i> is also a corner.)"},
 {w:"groin groin",l:"French",a:"Pig",f:["Cow","Dog","Bear"],o:"Oink oink, in French."},
 {w:"meong meong",l:"Korean",a:"Dog",f:["Cat","Cow","Sheep"],o:"Woof woof, in Korean: 멍멍."},
 {w:"kkul kkul",l:"Korean",a:"Pig",f:["Frog","Hen","Bee"],o:"Oink oink, in Korean: 꿀꿀."},
 {w:"nöff nöff",l:"Swedish",a:"Pig",f:["Dog","Seal","Horse"],o:"Oink oink, in Swedish."},
 {w:"pío pío",l:"Spanish",a:"Chick",f:["Mouse","Cat","Owl"],o:"Cheep cheep, in Spanish."},
 {w:"gav gav",l:"Russian",a:"Dog",f:["Crow","Goose","Cat"],o:"Woof woof, in Russian: гав-гав."},
 {w:"kikeriki",l:"German",a:"Rooster",f:["Mouse","Cricket","Parrot"],o:"Cock-a-doodle-doo, in German."}
];

// English abroad · English-looking words with a meaning of their own
const ABROAD = [
 {w:"Handy",l:"German",a:"A mobile phone",f:["A screwdriver","A pair of gloves","A handbag"],o:"English speakers don't use it this way, but Germans all do."},
 {w:"Beamer",l:"German",a:"A projector",f:["A BMW car","A torch","A spotlight"],o:"The thing that beams your slides onto the wall."},
 {w:"Oldtimer",l:"German",a:"A vintage car",f:["An old man","A retired worker","An antique clock"],o:"Also used in Dutch."},
 {w:"Public Viewing",l:"German",a:"Watching a football match on a big screen outdoors",f:["A museum's free day","An open house for buyers","A royal wedding"],o:"Very popular during World Cups."},
 {w:"pasokon",l:"Japanese",a:"A personal computer",f:["A password","A passport","A personal coach"],o:"From <i>paso</i>nal <i>kon</i>pyūtā."},
 {w:"sarariman",l:"Japanese",a:"An office worker on a salary",f:["A sales assistant","A salad chef","A sailor"],o:"From ‘salary man’."},
 {w:"manshon",l:"Japanese",a:"A block of flats",f:["A grand country house","A hotel","A mansion museum"],o:"From ‘mansion’, but much more modest."},
 {w:"konbini",l:"Japanese",a:"A convenience store",f:["A combination meal","A compass","A combine harvester"],o:"There are tens of thousands across Japan, open all night."},
 {w:"le parking",l:"French",a:"A car park",f:["A park and ride","A parking fine","A garden"],o:"The French official word is <i>parc de stationnement</i>, but nobody says it."},
 {w:"un brushing",l:"French",a:"A blow-dry at the hairdresser's",f:["Brushing your teeth","A toothbrush","Sweeping the floor"],o:"Ask for <i>un brushing</i> in a French salon."},
 {w:"le footing",l:"French",a:"Jogging",f:["Football","A foot massage","A footpath"],o:"Going for a run is <i>faire du footing</i>."},
 {w:"un smoking",l:"French",a:"A dinner jacket",f:["A cigarette","A smoking room","A smoky bacon crisp"],o:"From ‘smoking jacket’."},
 {w:"il mister",l:"Italian",a:"A football team's manager",f:["A waiter","A teacher","A referee"],o:"From the English coaches who brought football to Italy."},
 {w:"puenting",l:"Spanish",a:"Bungee jumping",f:["Hopping on one foot","Bridge building","Punting on a river"],o:"From <i>puente</i>, ‘bridge’, plus English <i>-ing</i>."},
 {w:"hwaiting",l:"Korean",a:"Come on, you can do it!",f:["Let's fight!","Please wait","Bad luck"],o:"From ‘fighting’, shouted to cheer people on."},
 {w:"outdoor",l:"Brazilian Portuguese",a:"A billboard",f:["A garden","A camping trip","A patio"],o:"The big posters beside the road."},
 {w:"naitā",l:"Japanese",a:"A sports match played at night",f:["A nightclub","A night shift","Pyjamas"],o:"From ‘night’ plus ‘-er’, especially for baseball under floodlights."}
];

// Real or Babel? · r = three real words [word, language, meaning], k = the one we made up
const FAKEB = [
 {r:[["komorebi","Japanese","Sunlight through the leaves"],["mångata","Swedish","The moon's road on the water"],["Fernweh","German","Longing for faraway places"]],k:["lumbrisol","Spanish","The warmth of a stone wall at sunset"]},
 {r:[["cwtch","Welsh","A cuddle"],["fika","Swedish","A break for coffee and cake"],["sobremesa","Spanish","Chatting at the table after a meal"]],k:["kopperstund","Danish","The sleepy hour after lunch"]},
 {r:[["Kummerspeck","German","Weight from comfort eating"],["tsundoku","Japanese","Piles of unread books"],["saudade","Portuguese","Longing for something absent"]],k:["minnolino","Italian","A cake small enough for one bite"]},
 {r:[["wan wan","Japanese","A dog's woof"],["cocorico","French","A rooster's crow"],["kkul kkul","Korean","A pig's oink"]],k:["plim plim","Spanish","A cat's purr"]},
 {r:[["Handy","German","A mobile phone"],["konbini","Japanese","A convenience store"],["le footing","French","Jogging"]],k:["il weekendo","Italian","A bank holiday Monday"]},
 {r:[["Gift","German","Poison"],["glass","Swedish","Ice cream"],["plant","Welsh","Children"]],k:["flummet","Dutch","A puddle"]},
 {r:[["sisu","Finnish","Grit and determination"],["lagom","Swedish","Just the right amount"],["hygge","Danish","Cosiness"]],k:["snøkkelig","Norwegian","The joy of the first snow"]},
 {r:[["hiraeth","Welsh","Longing for home"],["Torschlusspanik","German","Fear that time is running out"],["dolce far niente","Italian","The pleasure of doing nothing"]],k:["tristeloup","French","The sadness of Sunday evenings"]},
 {r:[["dreich","Scots","Dull, drizzly weather"],["craic","Irish","Fun and good chat"],["cwtch","Welsh","A cuddle"]],k:["glumph","Cornish","A thick sea mist"]},
 {r:[["Schadenfreude","German","Joy at someone else's bad luck"],["gezellig","Dutch","Cosy and sociable"],["wabi-sabi","Japanese","Beauty in imperfection"]],k:["chuffling","Welsh","Laughing so hard you can't speak"]}
];

// Closer to home · the other languages of Britain and Ireland
const HOME = [
 {w:"aber",l:"Welsh",a:"A river mouth",f:["A castle","A hill","A church"],o:"As in Aberystwyth, at the mouth of the river Ystwyth."},
 {w:"llan",l:"Welsh",a:"A church, or its land",f:["A lake","A bridge","A farm"],o:"Hundreds of Welsh places start with Llan, like Llandudno."},
 {w:"pen",l:"Welsh",a:"A head, top or end",f:["A pen","A sheep fold","A stone"],o:"As in Penarth and Pen y Fan."},
 {w:"croeso",l:"Welsh",a:"Welcome",f:["Goodbye","Crossroads","Cheers"],o:"<i>Croeso i Gymru</i>: welcome to Wales."},
 {w:"araf",l:"Welsh",a:"Slow",f:["Stop","Danger","School"],o:"You'll see it painted on roads all over Wales."},
 {w:"slàinte",l:"Scottish Gaelic",a:"Cheers! (literally ‘health’)",f:["Goodbye","Thank you","Good night"],o:"Raise a glass: <i>slàinte mhath</i>, ‘good health’."},
 {w:"inbhir",l:"Scottish Gaelic",a:"A river mouth",f:["An island","A mountain pass","A castle"],o:"Spelt Inver in place names, like Inverness: the mouth of the river Ness."},
 {w:"beinn",l:"Scottish Gaelic",a:"A mountain",f:["A lake","A valley","A forest"],o:"Spelt Ben in English, as in Ben Nevis."},
 {w:"cèilidh",l:"Scottish Gaelic",a:"A party with folk music and dancing",f:["A funeral feast","A sword dance","A boat race"],o:"It first meant a friendly visit."},
 {w:"dún",l:"Irish",a:"A fort",f:["A sand dune","A hill","A river"],o:"Hence Dún Laoghaire and Dundalk."},
 {w:"baile",l:"Irish",a:"A town or homestead",f:["A bay","A ballroom","A bridge"],o:"Spelt Bally in English, as in Ballymena."},
 {w:"craic",l:"Irish",a:"Fun and good chat",f:["A crack in a wall","A pub","A strong drink"],o:"Funnily enough, Irish borrowed it from the English and Scots word <i>crack</i>."},
 {w:"meur ras",l:"Cornish",a:"Thank you",f:["Good morning","Goodbye","Cheers"],o:"Literally ‘great thanks’."},
 {w:"Kernow",l:"Cornish",a:"Cornwall",f:["Cornish pasty","The sea","Hello"],o:"You'll see it on Cornish flags and car stickers."},
 {w:"moghrey mie",l:"Manx",a:"Good morning",f:["Good night","Happy birthday","Welcome"],o:"Manx is the Isle of Man's own language, brought back from the brink."},
 {w:"dreich",l:"Scots",a:"Dull, wet and gloomy (of weather)",f:["Thirsty","Very cold","Lucky"],o:"Voted Scotland's favourite Scots word."},
 {w:"bairn",l:"Scots",a:"A child",f:["A barn","A bear","A beer"],o:"Also heard across the north of England."}
];

// On the menu · a = what the dish's name literally means
const MENU = [
 {w:"croque monsieur",l:"French",a:"Crunch, mister",f:["Mister's crown","Crispy cheese","Gentleman's breakfast"],o:"A toasted ham and cheese sandwich."},
 {w:"pain perdu",l:"French",a:"Lost bread",f:["Perfect bread","Sweet bread","Morning bread"],o:"French toast: a good use for bread that's going stale."},
 {w:"vermicelli",l:"Italian",a:"Little worms",f:["Little strings","Little hairs","Little ribbons"],o:"Very thin pasta."},
 {w:"linguine",l:"Italian",a:"Little tongues",f:["Little lines","Little ribbons","Little lungs"],o:"Flat strands of pasta."},
 {w:"orecchiette",l:"Italian",a:"Little ears",f:["Little orchids","Little shells","Little hats"],o:"Small pasta shapes from Puglia."},
 {w:"farfalle",l:"Italian",a:"Butterflies",f:["Bow ties","Fans","Feathers"],o:"English speakers often call them bow ties."},
 {w:"tiramisu",l:"Italian",a:"Pick me up",f:["Three layers","Coffee cloud","Cream of the evening"],o:"All that coffee does the picking up."},
 {w:"vol-au-vent",l:"French",a:"Flight in the wind",f:["Full of air","Veil of butter","Wind tart"],o:"Puff pastry so light it might blow away."},
 {w:"dim sum",l:"Chinese",a:"Touch the heart",f:["Small bites","Steamed treasures","Morning tea"],o:"Little dishes served with tea."},
 {w:"tapas",l:"Spanish",a:"Lids",f:["Small plates","Snacks","Taps"],o:"Probably from slices of bread or ham laid over a glass to keep flies out."},
 {w:"crème brûlée",l:"French",a:"Burnt cream",f:["Brown sugar","Sweet custard","Cream crown"],o:"The sugar on top is caramelised with a blowtorch."},
 {w:"soufflé",l:"French",a:"Puffed up",f:["Whipped","Fluffy cloud","Little cheese"],o:"From <i>souffler</i>, to blow."},
 {w:"sauerkraut",l:"German",a:"Sour cabbage",f:["Salted greens","Pickled onion","Sour soup"],o:"Fermented shredded cabbage."},
 {w:"bibimbap",l:"Korean",a:"Mixed rice",f:["Rice bowl","Spicy rice","Fried rice"],o:"Rice topped with vegetables, egg and chilli paste, all stirred together."},
 {w:"Kaiserschmarrn",l:"Austrian German",a:"Emperor's mess",f:["King's pancake","Royal crumble","Palace pudding"],o:"A fluffy pancake torn into pieces, said to be a favourite of Emperor Franz Joseph."},
 {w:"biscotti",l:"Italian",a:"Twice cooked",f:["Little biscuits","Almond bites","Dry bread"],o:"They're baked twice, which makes them crunchy. <i>Biscuit</i> means the same."},
 {w:"strozzapreti",l:"Italian",a:"Priest stranglers",f:["Little straws","Twisted ropes","Monks' fingers"],o:"There are several stories, mostly about greedy priests eating too fast."}
];
