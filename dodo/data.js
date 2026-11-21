// Dodo puzzles, by day of the week (Monday first): words on their way out.
// DAYS is a run of whole weeks; the game picks today's weekday, cycling through the weeks.
// Five rounds a day:
//   p = "What did it mean?"     t = a fading word, h = it in a sentence, c = the right meaning, o = three wrong ones, n = note
//                               (this is also the day's "word to save" on the result screen)
//   x = "Odd one out"           f = what three of them share (lower case, reads after "The other three are"), w = those three, odd = the interloper, n = note
//   m = "What do we say now?"   four [old word, what we say now] pairs
//   q = "Put in order"          ask = what to order by, i = [term, value] pairs in the RIGHT order, n = note
//   s = "Living fossil"         t = a word or phrase that outlived the thing it came from, c = that thing, o = three wrong ones, n = note
const DAYS = [
  /* ---------- Week 1 ---------- */
  /* Mon */ {
    p: {t: "wireless", h: "“Put the wireless on for the shipping forecast.”", c: "A radio", o: ["A telephone", "A television", "A record player"], n: "Short for “wireless telegraphy”: early sets picked up signals with no wire, unlike the telegraph. Now the word mostly means Wi-Fi."},
    x: {f: "old slang for excellent", w: ["spiffing", "topping", "wizard"], odd: "grotty", n: "Grotty means grim or nasty. It was 1960s slang, short for “grotesque”, and the Beatles film A Hard Day's Night helped spread it."},
    m: [["looking glass", "mirror"], ["ice box", "fridge"], ["omnibus", "bus"], ["frock", "dress"]],
    q: {ask: "Oldest to newest way to play music at home", i: [["gramophone", "1880s"], ["cassette player", "1960s"], ["CD player", "1980s"], ["MP3 player", "late 1990s"]], n: "Vinyl has made a comeback. The word “gramophone” hasn't."},
    s: {t: "hang up the phone", c: "Phones that hung on a wall hook", o: ["Phone boxes with heavy doors", "Switchboard operators", "Party lines shared with neighbours"], n: "Early phones had an earpiece that hung on a hook. Lifting it off started a call; hanging it back up ended it."}
  },
  /* Tue */ {
    p: {t: "pinny", h: "“Put your pinny on before you start baking.”", c: "An apron", o: ["A hairnet", "A cardigan", "A rolling pin"], n: "Short for pinafore: a cloth pinned “afore”, in front of, your clothes."},
    x: {f: "old British coins", w: ["florin", "farthing", "half a crown"], odd: "doubloon", n: "A doubloon was a Spanish gold coin, beloved of pirate stories. A florin was two shillings, half a crown two and six, and a farthing a quarter of a penny."},
    m: [["gramophone", "record player"], ["motor car", "car"], ["picture house", "cinema"], ["spectacles", "glasses"]],
    q: {ask: "Oldest to newest way to send a message, by when it caught on in Britain", i: [["telegram", "1850s"], ["telephone", "1880s"], ["fax", "1980s"], ["email", "1990s"]], n: "Britain's inland telegram service closed in 1982."},
    s: {t: "dial a number", c: "Phones with a rotary dial", o: ["Radio tuning knobs", "Clock faces", "Combination locks"], n: "You put a finger in the hole for each digit and turned the dial round. Push buttons took over, but we still “dial”."}
  },
  /* Wed */ {
    p: {t: "charabanc", h: "“The whole street went to Blackpool on the charabanc.”", c: "A motor coach for day trips", o: ["A seaside tea stall", "A brass band", "A bathing hut on wheels"], n: "From French char à bancs, “carriage with benches”. Open-topped charas took factory workers on outings in the 1920s."},
    x: {f: "old words for a toilet", w: ["privy", "earth closet", "necessary house"], odd: "scullery", n: "A scullery was a back kitchen for washing up and rough jobs. The necessary house was the 1600s answer to “where's the loo?”"},
    m: [["perambulator", "pram"], ["velocipede", "bicycle"], ["influenza", "flu"], ["pianoforte", "piano"]],
    q: {ask: "Oldest to newest way to take a photo", i: [["daguerreotype", "1839"], ["Box Brownie", "1900"], ["Polaroid", "1948"], ["digital camera", "1990s"]], n: "The Box Brownie cost one dollar and put photography in everyone's hands."},
    s: {t: "cc someone on an email", c: "Carbon paper copies", o: ["Copy clerks", "Courier companies", "Council circulars"], n: "cc stands for carbon copy. Typists put carbon paper between two sheets to make a copy as they typed."}
  },
  /* Thu */ {
    p: {t: "haberdashery", h: "“Buttons and zips are in haberdashery, madam.”", c: "Sewing things: buttons, ribbon, thread", o: ["Garden tools", "Pots, pans and kettles", "Children's toys"], n: "In America a haberdasher sells men's clothes instead. The word goes back to the 1300s, and nobody is sure where it came from."},
    x: {f: "old words for courting", w: ["spooning", "walking out", "stepping out"], odd: "ghosting", n: "Ghosting is modern: dropping all contact without a word. Walking out together was how a couple let everyone know they were serious."},
    m: [["counterpane", "bedspread"], ["drawing room", "living room"], ["slacks", "trousers"], ["wash house", "launderette"]],
    q: {ask: "Lightest to heaviest imperial weight", i: [["ounce", "about 28 g"], ["pound", "16 ounces"], ["stone", "14 pounds"], ["hundredweight", "112 pounds"]], n: "Stone survives for body weight in Britain. The hundredweight, once on every coal sack, has all but gone."},
    s: {t: "a broken record", c: "Scratched records that kept repeating", o: ["Sports records, broken again and again", "Criminal records", "Medical records"], n: "A scratch made the needle jump back and play the same bit over and over, like someone who keeps saying the same thing."}
  },
  /* Fri */ {
    p: {t: "antimacassar", h: "“Don't knock the antimacassar off Grandad's chair.”", c: "A cloth protecting a chair back from hair oil", o: ["A small footstool", "A knitted tea cosy", "A horsehair cushion"], n: "Victorian men slicked their hair with Macassar oil, which stained the furniture. You still see them on train and plane seats."},
    x: {f: "old laundry kit", w: ["mangle", "dolly tub", "washboard"], odd: "chaise longue", n: "A chaise longue is a long sofa for lounging. A dolly tub was a wash tub, stirred with a wooden “dolly” with legs."},
    m: [["charwoman", "cleaner"], ["costermonger", "market trader"], ["apothecary", "chemist"], ["physician", "doctor"]],
    q: {ask: "Lowest to highest value in old money", i: [["shilling", "12 pence"], ["florin", "2 shillings"], ["half a crown", "2s 6d"], ["crown", "5 shillings"]], n: "Twenty shillings made a pound. Decimal Day, 15 February 1971, swept most of these away."},
    s: {t: "give me a ring", c: "Telephone bells", o: ["Church bells", "Doorbells", "Wedding rings"], n: "Phones had real bells inside that rang when someone called. The phrase has outlived the bells."}
  },
  /* Sat */ {
    p: {t: "galoshes", h: "“It's pouring, so put your galoshes on.”", c: "Rubber overshoes", o: ["A waterproof hat", "A heavy raincoat", "Knitted leg warmers"], n: "From an old French word for a wooden-soled shoe. Wellies largely took over."},
    x: {f: "old words for someone silly", w: ["ninny", "nincompoop", "noodle"], odd: "gadabout", n: "A gadabout is someone always out having fun. Noodle meant a fool before it meant pasta."},
    m: [["aerodrome", "airport"], ["talkies", "films"], ["filling station", "petrol station"], ["luncheon", "lunch"]],
    q: {ask: "Oldest to newest way of getting about", i: [["stagecoach", "1600s"], ["steam train", "1820s"], ["motor car", "1880s"], ["jet airliner", "1950s"]], n: "The first jet airliner, the de Havilland Comet, carried paying passengers from 1952."},
    s: {t: "roll down the window", c: "Car windows wound by a handle", o: ["Roller blinds", "Sash windows on cords", "Shop shutters"], n: "Before electric windows you turned a handle to wind the glass down. Plenty of us still mime it."}
  },
  /* Sun */ {
    p: {t: "gazunder", h: "“Mind you don't kick the gazunder getting out of bed.”", c: "A chamber pot", o: ["A slipper", "A hot-water bottle", "A draught excluder"], n: "It “goes under” the bed. Handy when the only toilet was down the yard."},
    x: {f: "old words for being drunk", w: ["squiffy", "tiddly", "three sheets to the wind"], odd: "peckish", n: "Peckish means a bit hungry. Three sheets to the wind is sailing slang: with the ropes (sheets) loose, the sails flap and the ship lurches."},
    m: [["cabriolet", "cab"], ["public house", "pub"], ["photograph", "photo"], ["zoological gardens", "zoo"]],
    q: {ask: "Smallest to largest imperial measure of liquid", i: [["gill", "a quarter pint"], ["pint", "20 fl oz"], ["quart", "2 pints"], ["gallon", "8 pints"]], n: "The pint lives on in pubs and on milk bottles. The gill mostly lives in old recipes."},
    s: {t: "glove compartment", c: "Driving gloves", o: ["Gardening gloves", "Oven gloves", "Boxing gloves"], n: "Early cars were open to the wind, so drivers wore gloves and kept them in a little cupboard in the dashboard."}
  },

  /* ---------- Week 2 ---------- */
  /* Mon */ {
    p: {t: "courting", h: "“Our Mary's been courting that lad from the mill.”", c: "Going out together", o: ["Taking someone to court", "Playing tennis", "Flattering the boss"], n: "From paying court, as courtiers did to a king or queen. Now it'd be dating, or just “seeing someone”."},
    x: {f: "old words for a radio or record player", w: ["wireless", "gramophone", "radiogram"], odd: "charabanc", n: "A charabanc was a motor coach for day trips. A radiogram was a radio and record player in one big wooden cabinet."},
    m: [["water closet", "toilet"], ["refrigerator", "fridge"], ["bathing costume", "swimsuit"], ["eiderdown", "duvet"]],
    q: {ask: "Oldest to newest in British homes", i: [["wireless", "1920s"], ["television", "1930s"], ["colour TV", "late 1960s"], ["video recorder", "late 1970s"]], n: "The BBC started radio in 1922, television in 1936, and colour on BBC Two in 1967."},
    s: {t: "tune in", c: "Turning a dial to find a radio station", o: ["Tuning a piano", "Singing in a choir", "Tuning forks"], n: "Old radios had a knob you turned slowly until the station came through clearly. We still tune in to podcasts, with no dial in sight."}
  },
  /* Tue */ {
    p: {t: "trunk call", h: "“I'll have to book a trunk call to Aberdeen.”", c: "A long-distance phone call", o: ["A telegram", "A luggage delivery", "A call to the fire brigade"], n: "Trunk lines were the main lines between towns, like a tree trunk with branches. Calls went through an operator and cost a lot."},
    x: {f: "old words for a car", w: ["motor", "jalopy", "horseless carriage"], odd: "velocipede", n: "A velocipede was an early bicycle. A jalopy was an old banger, and horseless carriage was what people called the very first cars."},
    m: [["gaol", "jail"], ["to-day", "today"], ["shew", "show"], ["connexion", "connection"]],
    q: {ask: "Oldest to newest way to store computer files", i: [["floppy disk", "1970s"], ["CD-ROM", "1980s"], ["USB stick", "2000"], ["cloud storage", "late 2000s"]], n: "The floppy disk lives on as the save icon, long after most of us last held one."},
    s: {t: "film a video", c: "Photographic film", o: ["Cling film", "A film of dust", "Film stars"], n: "Cameras used to record onto rolls of film. Phones don't, but we still “film” things."}
  },
  /* Wed */ {
    p: {t: "gadabout", h: "“She's a proper gadabout, never in when you call.”", c: "Someone always out enjoying themselves", o: ["A gossip", "A busybody", "A spendthrift"], n: "To gad is an old verb for roaming about. Gadabout came along in the early 1800s."},
    x: {f: "old police slang", w: ["peeler", "rozzer", "bluebottle"], odd: "bobby-dazzler", n: "A bobby-dazzler is something excellent or eye-catching. Peeler and bobby both come from Robert Peel, who set up the Metropolitan Police in 1829."},
    m: [["haberdasher", "sewing shop"], ["ironmonger", "hardware shop"], ["confectioner", "sweetshop"], ["gentlemen's outfitter", "menswear shop"]],
    q: {ask: "Lowest to highest value in old money", i: [["farthing", "¼d"], ["halfpenny", "½d"], ["threepenny bit", "3d"], ["sixpence", "6d"]], n: "The d stood for denarius, a Roman coin."},
    s: {t: "clock in", c: "Time clocks that stamped a card", o: ["Grandfather clocks", "Alarm clocks", "Church clocks"], n: "Factory workers put a card into a time clock, which stamped the time they arrived. Now we “clock in” on an app."}
  },
  /* Thu */ {
    p: {t: "mangle", h: "“Feed the sheets through the mangle, and mind your fingers.”", c: "Rollers for squeezing water out of washing", o: ["A clothes horse", "A copper for boiling washing", "A flat iron"], n: "You turned a handle and the rollers squeezed the wet washing flat. Spin dryers made it redundant."},
    x: {f: "old words for underwear", w: ["drawers", "bloomers", "combinations"], odd: "galoshes", n: "Galoshes are rubber overshoes. Combinations were a vest and long johns in one piece."},
    m: [["wristlet watch", "wristwatch"], ["Christian name", "first name"], ["hackney carriage", "taxi"], ["aeroplane", "plane"]],
    q: {ask: "Shortest to longest imperial length", i: [["inch", "about 2.5 cm"], ["yard", "3 feet"], ["chain", "22 yards"], ["furlong", "220 yards"]], n: "A cricket pitch is a chain long, and furlongs live on in horse racing."},
    s: {t: "full steam ahead", c: "Steam engines", o: ["Steaming kettles", "Steam irons", "Turkish baths"], n: "Ships and trains went fastest with the boilers at full pressure. Now it means going all out."}
  },
  /* Fri */ {
    p: {t: "tanner", h: "“It only cost a tanner at the fair.”", c: "A sixpence coin", o: ["A ten-shilling note", "A threepenny bit", "A farthing"], n: "Sixpence was half a shilling, worth 2½p after decimalisation. Nobody is quite sure why it was called a tanner."},
    x: {f: "old words for a coat", w: ["ulster", "greatcoat", "mackintosh"], odd: "pinny", n: "A pinny is an apron. An ulster was a long belted overcoat, first sold in Belfast."},
    m: [["telephone", "phone"], ["sweetmeats", "sweets"], ["examination", "exam"], ["gymnasium", "gym"]],
    q: {ask: "Oldest to newest way to write", i: [["quill pen", "from the 600s"], ["fountain pen", "1880s"], ["ballpoint", "1940s"], ["word processor", "1970s"]], n: "László Bíró patented his ballpoint in 1938, which is why we call them biros."},
    s: {t: "a flash in the pan", c: "Flintlock muskets", o: ["Panning for gold", "Frying pans", "Camera flashbulbs"], n: "When the powder in a musket's priming pan flashed but the main charge didn't fire, there was plenty of show and no bang."}
  },
  /* Sat */ {
    p: {t: "scullery", h: "“Leave those muddy boots in the scullery.”", c: "A back kitchen for washing up and rough jobs", o: ["A coal cellar", "An outside toilet", "A games room"], n: "From an old French word for a dish keeper. Utility rooms took over the job."},
    x: {f: "old ways to send a message", w: ["telegram", "telex", "semaphore"], odd: "podcast", n: "Semaphore spells out letters with flags held at different angles. Telex sent typed messages down a wire to a printer at the other end."},
    m: [["brassiere", "bra"], ["motor bicycle", "motorbike"], ["electric torch", "torch"], ["moving pictures", "movies"]],
    q: {ask: "Oldest to newest way of lighting up", i: [["gas lamp", "1800s"], ["electric light bulb", "1880s"], ["neon sign", "1910s"], ["LED bulb", "2000s"]], n: "Pall Mall in London got the first gas street lights in 1807. Lamplighters lit them by hand each evening."},
    s: {t: "dashboard", c: "Horse-drawn carriages", o: ["Ironing boards", "School blackboards", "Diving boards"], n: "It was a board at the front of a carriage that stopped mud being dashed up by the horses' hooves onto the driver."}
  },
  /* Sun */ {
    p: {t: "pea-souper", h: "“You couldn't see your hand in front of you in that pea-souper.”", c: "A thick, yellowish smog", o: ["A heavy rainstorm", "A crowded bus", "A bowl of mushy peas"], n: "Coal smoke and fog mixed into thick yellow smogs in British cities. The Clean Air Act of 1956 cleared them away, and the word with them."},
    x: {f: "old words for a lover", w: ["beau", "swain", "paramour"], odd: "gazunder", n: "A gazunder is a chamber pot, so called because it goes under the bed. A swain was a young country lover, much loved by poets."},
    m: [["periwig", "wig"], ["mobile telephone", "mobile"], ["motor lorry", "lorry"], ["hippopotamus", "hippo"]],
    q: {ask: "Oldest to newest coin, by when it was first minted", i: [["farthing", "1200s"], ["shilling", "early 1500s"], ["florin", "1849"], ["50p", "1969"]], n: "The 50p arrived in 1969, ahead of Decimal Day. The florin carried on as a 10p coin until 1993."},
    s: {t: "lock, stock and barrel", c: "Guns", o: ["Shops and warehouses", "Farm animals", "Brewing beer"], n: "The lock, the stock and the barrel are the three main parts of an old gun, so all three meant the whole thing."}
  }
];
