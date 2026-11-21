// Dodo puzzles, by day of the week (Monday first): words on their way out.
// DAYS is a run of whole weeks; the game picks today's weekday, cycling through the weeks.
// Five rounds a day:
//   p = "What did it mean?"  t = a fading word, h = it in a sentence (shouldn't give the meaning away), c = the right meaning, o = three wrong ones, n = note
//                            (this is also the day's "word to save" on the result screen)
//   x = "Odd one out"        f = what three of them share (lower case, reads after "The other three are"), w = those three, odd = the interloper, n = note
//   m = "Match them"         four [left, right] pairs
//   q = "Put in order"       ask = what to order by, i = [term, value] pairs in the RIGHT order, n = note
//   s = "Living fossil"      t = a word or phrase that outlived the thing it came from, c = that thing, o = three wrong ones, n = note
// Keep the wrong answers close: the same kind of thing as the right one.
const DAYS = [
  /* ---------- Week 1 ---------- */
  /* Mon */ {
    p: {t: "pantechnicon", h: "“There's a pantechnicon blocking the whole street.”", c: "A big furniture removal van", o: ["A steam traction engine", "A double-decker tram", "A brewer's dray"], n: "The Pantechnicon was a London bazaar and furniture store of the 1830s. Its storage vans took the name."},
    x: {f: "old slang for money", w: ["spondulicks", "rhino", "oof"], odd: "shufti", n: "A shufti is a quick look, brought home by soldiers from the Middle East. Oof may come from Yiddish ooftisch, money on the table."},
    m: [["knocker-upper", "alarm clock"], ["lamplighter", "timed street lights"], ["iceman", "fridge"], ["telephone operator", "direct dialling"]],
    q: {ask: "Lowest to highest value in old money", i: [["farthing", "¼d"], ["threepenny bit", "3d"], ["sixpence", "6d"], ["half a crown", "2s 6d"]], n: "The d stood for denarius, a Roman coin. Twelve pence made a shilling."},
    s: {t: "carriage return", c: "Typewriters", o: ["Railway carriages", "Horse-drawn carriages", "Printing presses"], n: "On a typewriter the carriage held the paper and slid along as you typed. Return sent it back to the start of the line."}
  },
  /* Tue */ {
    p: {t: "spiv", h: "“Uncle Ted always said he'd been a bit of a spiv in his day.”", c: "A flashy black-market dealer", o: ["A pickpocket", "A pawnbroker", "A street bookie"], n: "Spivs, with sharp suits and pencil moustaches, sold rationed goods on the sly in and after the Second World War."},
    x: {f: "old words for a fool", w: ["nincompoop", "ninnyhammer", "mooncalf"], odd: "mountebank", n: "A mountebank was a swindler selling fake cures from a platform. A mooncalf was a dreamy fool, once blamed on the moon."},
    m: [["tallyman", "debt collector"], ["costermonger", "market trader"], ["charwoman", "cleaner"], ["mercer", "cloth dealer"]],
    q: {ask: "Oldest to newest way to send a message, by when it caught on in Britain", i: [["telegram", "1850s"], ["telex", "1930s"], ["pager", "1980s"], ["text message", "1990s"]], n: "The first text message, “Merry Christmas”, was sent in 1992."},
    s: {t: "red tape", c: "Ribbon tying up official papers", o: ["Danger tape on building sites", "Red ink on unpaid bills", "Tape across a finishing line"], n: "Lawyers and officials tied their documents with red ribbon. Untying it before anything could happen gave us red tape."}
  },
  /* Wed */ {
    p: {t: "fug", h: "“Come in from the cold, there's a lovely fug in here.”", c: "Warm, stuffy air in a crowded room", o: ["A pile of clutter", "A smell of cooking", "A cosy armchair"], n: "Perfect for a steamed-up pub or a packed bus on a wet day. Nobody knows where it came from."},
    x: {f: "old police slang", w: ["peeler", "bluebottle", "rozzer"], odd: "beak", n: "The beak is a magistrate, not a police officer. Peeler comes from Robert Peel, who set up the Metropolitan Police in 1829."},
    m: [["pianoforte", "piano"], ["omnibus", "bus"], ["periwig", "wig"], ["cabriolet", "cab"]],
    q: {ask: "Shortest to longest old measure of length", i: [["inch", "about 2.5 cm"], ["link", "about 20 cm"], ["rod", "5½ yards"], ["chain", "22 yards"]], n: "Surveyors measured land with a chain of 100 links. A cricket pitch is still a chain long."},
    s: {t: "deadline", c: "A line prisoners mustn't cross", o: ["Newspaper printing presses", "Fishing lines", "Railway timetables"], n: "In the American Civil War, a deadline was a line in a prison camp; cross it and you'd be shot. Newspapers later borrowed it."}
  },
  /* Thu */ {
    p: {t: "chiffonier", h: "“Grandma kept the good tablecloths in the chiffonier.”", c: "A low cupboard with a shelf on top", o: ["A dressing table", "A tall wardrobe", "A blanket chest"], n: "From French, a place for chiffons, scraps of cloth. A fixture of Victorian and Edwardian parlours."},
    x: {f: "old words for a scoundrel", w: ["bounder", "cad", "rotter"], odd: "toff", n: "A toff is a posh, well-dressed person, not necessarily a bad one. Bounders, cads and rotters were men who behaved badly."},
    m: [["mangle", "spin dryer"], ["copper", "washing machine"], ["ice box", "fridge"], ["chamber pot", "indoor toilet"]],
    q: {ask: "Earliest to latest withdrawn from British pockets", i: [["farthing", "1960"], ["old halfpenny", "1969"], ["half a crown", "1970"], ["threepenny bit", "1971"]], n: "Decimal Day was 15 February 1971, but old pennies and threepenny bits lasted until that August."},
    s: {t: "go haywire", c: "Wire for tying hay bales", o: ["Telegraph wires", "Barbed wire fences", "Fuse wire"], n: "Farmers patched broken things with baling wire. It tangled and sprang about, so a makeshift mess went haywire."}
  },
  /* Fri */ {
    p: {t: "mufti", h: "“The officers came to the dance in mufti.”", c: "Ordinary clothes instead of uniform", o: ["Full dress uniform", "Fancy dress", "Their wives' company"], n: "British officers in India borrowed it, probably from the robes of a Muslim scholar, a mufti."},
    x: {f: "old words for underwear", w: ["combinations", "liberty bodice", "stays"], odd: "spats", n: "Spats were cloth covers worn over the ankle and shoe. A liberty bodice was a fleecy vest children wore into the 1950s."},
    m: [["trunk call", "long-distance call"], ["wristlet watch", "wristwatch"], ["Christian name", "first name"], ["motor coach", "coach"]],
    q: {ask: "Lightest to heaviest imperial weight", i: [["dram", "about 1.8 g"], ["ounce", "16 drams"], ["pound", "16 ounces"], ["stone", "14 pounds"]], n: "Sixteen drams to the ounce, sixteen ounces to the pound, fourteen pounds to the stone."},
    s: {t: "pipe down", c: "A bosun's whistle", o: ["Church organ pipes", "Drainpipes", "Clay tobacco pipes"], n: "On sailing ships the bosun's whistle, or pipe, gave the orders. Piping down sent the crew below for the night, to quieten down."}
  },
  /* Sat */ {
    p: {t: "flibbertigibbet", h: "“My aunt called me a flibbertigibbet when I was little.”", c: "A flighty, chattering person", o: ["A tell-tale", "A fibber", "A fussy eater"], n: "Once the name of a devil, and you'll find one in King Lear. Now a silly, scatterbrained chatterbox."},
    x: {f: "1920s slang for marvellous", w: ["the bee's knees", "the cat's pyjamas", "the snake's hips"], odd: "the dog's dinner", n: "A dog's dinner is a mess, or someone dressed up like one."},
    m: [["the flicks", "the cinema"], ["Blighty", "Britain"], ["the never-never", "buying on credit"], ["a ha'porth", "a tiny bit"]],
    q: {ask: "Smallest to largest imperial measure", i: [["gill", "¼ pint"], ["pint", "20 fl oz"], ["quart", "2 pints"], ["peck", "16 pints"]], n: "A peck was a dry measure for grain and apples, two gallons' worth."},
    s: {t: "show your true colours", c: "Ships' flags", o: ["Football kits", "Paint charts", "Coats of arms"], n: "Warships sometimes flew false flags to fool the enemy, then ran up their true colours just before attacking."}
  },
  /* Sun */ {
    p: {t: "tantalus", h: "“Father kept the key to the tantalus on his watch chain.”", c: "A locked stand showing off decanters", o: ["A wind-up gramophone", "A roll-top desk", "A humidor for cigars"], n: "Named after Tantalus, who could see food and drink but never reach it. The servants could see the brandy but couldn't get at it."},
    x: {f: "old words for a lover", w: ["beau", "swain", "inamorata"], odd: "chaperone", n: "A chaperone went along to keep a courting couple respectable. Inamorata, a female lover, comes from Italian."},
    m: [["tanner", "sixpence"], ["bob", "shilling"], ["half a dollar", "half a crown"], ["quid", "pound"]],
    q: {ask: "Smallest to largest old measure of land", i: [["square yard", "9 sq ft"], ["perch", "30¼ sq yards"], ["rood", "40 perches"], ["acre", "4 roods"]], n: "An acre was roughly what a team of oxen could plough in a day."},
    s: {t: "steal someone's thunder", c: "A stage machine for thunder", o: ["Thunderstorms at outdoor fairs", "Drums in a marching band", "Cannon fire at sea"], n: "In 1709 playwright John Dennis invented a new stage thunder. When a rival theatre used it, he said they'd stolen his thunder."}
  },

  /* ---------- Week 2 ---------- */
  /* Mon */ {
    p: {t: "charabanc", h: "“The whole mill went to Blackpool on the charabanc.”", c: "A motor coach for outings", o: ["A pleasure steamer", "A horse-drawn tram", "An excursion train"], n: "From French char à bancs, “carriage with benches”. Open-topped charas took factory workers on outings in the 1920s."},
    x: {f: "old words for a toilet", w: ["privy", "jakes", "necessary house"], odd: "buttery", n: "A buttery was a store for drink, from butts (barrels), not butter. Jakes was Tudor slang for a toilet."},
    m: [["perambulator", "pram"], ["velocipede", "bicycle"], ["aerodrome", "airport"], ["looking glass", "mirror"]],
    q: {ask: "Oldest to newest way to take a photo", i: [["daguerreotype", "1839"], ["Box Brownie", "1900"], ["Polaroid", "1948"], ["digital camera", "1990s"]], n: "The Box Brownie cost one dollar and put photography in everyone's hands."},
    s: {t: "cc someone on an email", c: "Carbon paper", o: ["Copy clerks", "Court circulars", "Carbon dating"], n: "cc stands for carbon copy. Typists put carbon paper between two sheets to make a copy as they typed."}
  },
  /* Tue */ {
    p: {t: "antimacassar", h: "“Mrs Fisher starched her antimacassars every Monday.”", c: "A cloth protecting a chair back", o: ["A cloth keeping flies off food", "A lace cover for a teapot", "A runner for a dressing table"], n: "Victorian men slicked their hair with Macassar oil, which stained the furniture. You still see them on train seats."},
    x: {f: "washday kit from before washing machines", w: ["dolly tub", "posser", "copper"], odd: "tallboy", n: "A tallboy is a tall chest of drawers. A posser was a copper cone on a stick for pounding washing in the tub."},
    m: [["haberdasher", "sewing shop"], ["ironmonger", "hardware shop"], ["confectioner", "sweetshop"], ["draper", "fabric shop"]],
    q: {ask: "Oldest to newest in British homes", i: [["wireless", "1920s"], ["television", "1930s"], ["colour TV", "late 1960s"], ["video recorder", "late 1970s"]], n: "The BBC started radio in 1922, television in 1936, and colour on BBC Two in 1967."},
    s: {t: "dial a number", c: "Rotary dials on phones", o: ["Radio tuning dials", "Switchboard plugs", "Combination locks"], n: "You put a finger in the hole for each digit and turned the dial round. Push buttons took over, but we still “dial”."}
  },
  /* Wed */ {
    p: {t: "trunk call", h: "“Dad booked a trunk call to Aunty Jean.”", c: "A long-distance phone call", o: ["A reverse-charge call", "A call from a phone box", "A telegram read out by phone"], n: "Trunk lines were the main lines between towns, like a tree trunk with branches. Calls went through an operator and cost a lot."},
    x: {f: "old words for a car", w: ["jalopy", "flivver", "Tin Lizzie"], odd: "velocipede", n: "A velocipede was an early bicycle. Tin Lizzie was the Model T Ford, and a flivver was any cheap old car."},
    m: [["water closet", "toilet"], ["bathing costume", "swimsuit"], ["eiderdown", "duvet"], ["luncheon", "lunch"]],
    q: {ask: "Lightest to heaviest imperial weight", i: [["ounce", "about 28 g"], ["pound", "16 ounces"], ["stone", "14 pounds"], ["hundredweight", "112 pounds"]], n: "Stone survives for body weight in Britain. The hundredweight, once on every coal sack, has all but gone."},
    s: {t: "a broken record", c: "Scratched records that kept repeating", o: ["Sports records broken again and again", "Criminal records", "Ships' logbooks"], n: "A scratch made the needle jump back and play the same bit over and over."}
  },
  /* Thu */ {
    p: {t: "gazunder", h: "“Fetch the gazunder from Gran's room, would you?”", c: "A chamber pot", o: ["A bed warmer", "A draught excluder", "A footstool"], n: "It “goes under” the bed. Handy when the only toilet was down the yard."},
    x: {f: "sailors' slang for drunk", w: ["half seas over", "three sheets to the wind", "groggy"], odd: "all at sea", n: "All at sea means confused. Groggy comes from grog, the navy's watered rum. With the sheets (ropes) loose, a ship's sails flap and it lurches like a drunk."},
    m: [["talkies", "sound films"], ["wireless", "radio"], ["gramophone", "record player"], ["picture house", "cinema"]],
    q: {ask: "Oldest to newest way to store music", i: [["phonograph cylinder", "1870s"], ["78 rpm record", "1890s"], ["LP", "1948"], ["cassette", "1963"]], n: "Edison's phonograph of 1877 recorded on tinfoil wrapped round a cylinder."},
    s: {t: "tune in", c: "Radio dials", o: ["Tuning a piano", "Tuning forks", "Choir practice"], n: "Old radios had a knob you turned slowly until the station came through clearly. We tune in to podcasts with no dial in sight."}
  },
  /* Fri */ {
    p: {t: "galoshes", h: "“Don't forget your galoshes.”", c: "Rubber overshoes", o: ["Gaiters", "Clogs", "Puttees"], n: "From an old French word for a wooden-soled shoe. Wellies largely took over."},
    x: {f: "old words for someone silly", w: ["ninny", "noodle", "nincompoop"], odd: "gadabout", n: "A gadabout is someone always out having fun. Noodle meant a fool before it meant pasta."},
    m: [["Christian name", "first name"], ["hackney carriage", "taxi"], ["motor lorry", "lorry"], ["picture postcard", "postcard"]],
    q: {ask: "Shortest to longest old measure of length", i: [["yard", "3 feet"], ["chain", "22 yards"], ["furlong", "220 yards"], ["league", "3 miles"]], n: "Furlongs live on in horse racing. Leagues mostly live on in Twenty Thousand Leagues Under the Sea."},
    s: {t: "glove compartment", c: "Driving gloves", o: ["Gauntlets for cranking engines", "Gardening gloves", "Passengers' mittens"], n: "Early cars were open to the wind, so drivers wore gloves and kept them in a little cupboard in the dashboard."}
  },
  /* Sat */ {
    p: {t: "haberdashery", h: "“Try haberdashery, second floor.”", c: "Sewing things: buttons, ribbon, thread", o: ["Lamps and lampshades", "Bed linen and towels", "Cheap jewellery"], n: "In America a haberdasher sells men's clothes instead. The word goes back to the 1300s, and nobody is sure where it came from."},
    x: {f: "old ways to send a message", w: ["telegram", "telex", "heliograph"], odd: "kinescope", n: "A kinescope was an early way of recording television. A heliograph flashed sunlight off a mirror in Morse code."},
    m: [["brassiere", "bra"], ["motor bicycle", "motorbike"], ["moving pictures", "movies"], ["electric torch", "torch"]],
    q: {ask: "Oldest to newest way of getting about", i: [["stagecoach", "1600s"], ["steam train", "1820s"], ["motor car", "1880s"], ["jet airliner", "1950s"]], n: "The first jet airliner, the de Havilland Comet, carried paying passengers from 1952."},
    s: {t: "dashboard", c: "Horse-drawn carriages", o: ["Early aeroplanes", "Ships' bridges", "Racing bicycles"], n: "It was a board at the front of a carriage that stopped mud being dashed up by the horses' hooves onto the driver."}
  },
  /* Sun */ {
    p: {t: "pea-souper", h: "“The buses stopped running in that pea-souper.”", c: "A thick, yellowish smog", o: ["A thick sea fog", "A sudden downpour", "A muddy flood"], n: "Coal smoke and fog mixed into thick yellow smogs. The Clean Air Act of 1956 cleared them away, and the word with them."},
    x: {f: "old words for a coat", w: ["ulster", "greatcoat", "Inverness cape"], odd: "tam-o'-shanter", n: "A tam-o'-shanter is a Scottish bonnet, named after Robert Burns's poem. An ulster was a long belted overcoat, first sold in Belfast."},
    m: [["periwig", "wig"], ["mobile telephone", "mobile"], ["zoological gardens", "zoo"], ["public house", "pub"]],
    q: {ask: "Oldest to newest coin, by when it was first minted", i: [["farthing", "1200s"], ["shilling", "early 1500s"], ["florin", "1849"], ["50p", "1969"]], n: "The 50p arrived in 1969, ahead of Decimal Day. The florin carried on as a 10p coin until 1993."},
    s: {t: "a flash in the pan", c: "Flintlock muskets", o: ["Panning for gold", "Frying pans", "Early camera flash"], n: "When the powder in a musket's priming pan flashed but the main charge didn't fire, there was plenty of show and no bang."}
  }
];
