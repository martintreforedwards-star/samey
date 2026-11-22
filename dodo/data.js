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
  },
  /* ---------- Week 3 ---------- */
  /* Mon */ {
    p: {t: "wireless", h: "“Turn the wireless up, it's the news.”", c: "A radio", o: ["A telephone", "A gramophone", "A television"], n: "Short for wireless telegraphy: messages without wires. Radio took over from the 1950s, though some grandparents never switched."},
    x: {f: "old ways to say goodbye", w: ["toodle-oo", "pip pip", "cheerio"], odd: "how do", n: "How do is a northern greeting, short for how do you do. It's a hello, not a goodbye."},
    m: [["shilling", "5p"], ["florin", "10p"], ["half-crown", "12½p"], ["ten-bob note", "50p"]],
    q: {ask: "Oldest to newest way to play music at home", i: [["phonograph", "1877"], ["gramophone", "1887"], ["cassette", "1963"], ["CD", "1982"]], n: "Edison's phonograph played cylinders; Berliner's gramophone played flat discs, and won."},
    s: {t: "dial a number", c: "A rotary telephone dial", o: ["A radio tuning knob", "A clock face", "A combination lock"], n: "We still dial, though phones lost their spinning finger-wheels decades ago."}
  },
  /* Tue */ {
    p: {t: "scullery", h: "“Leave your muddy boots in the scullery.”", c: "A back kitchen for washing up and rough jobs", o: ["A cold store for meat", "A coal cellar", "A boot room"], n: "From an old French word for a dish-keeper. The scullery maid was the lowest servant in the house."},
    x: {f: "old words for a sweetheart", w: ["beau", "swain", "inamorata"], odd: "dandy", n: "A dandy is a man who dresses with great care. He might be someone's beau, but the word doesn't mean that."},
    m: [["wireless", "radio"], ["gramophone", "record player"], ["horseless carriage", "car"], ["moving pictures", "films"]],
    q: {ask: "Shortest to longest", i: [["inch", "¹⁄₃₆ yard"], ["yard", "3 feet"], ["chain", "22 yards"], ["furlong", "220 yards"]], n: "A cricket pitch is exactly one chain long."},
    s: {t: "hang up", c: "Hooking the earpiece back on a wall telephone", o: ["Hanging a coat on a peg", "Hanging out the washing", "Hanging a sign on the door"], n: "Early phones hung on the wall. Ending a call meant hanging the earpiece back on its hook."}
  },
  /* Wed */ {
    p: {t: "larder", h: "“There's a pork pie in the larder.”", c: "A cool cupboard or room for storing food", o: ["A sideboard", "A bread bin", "A meat safe"], n: "Originally a store for lard and bacon. Fridges made most of them redundant."},
    x: {f: "RAF slang from the Second World War", w: ["wizard", "prang", "gen"], odd: "groovy", n: "Groovy is 1960s slang. Wizard meant excellent, a prang was a crash, and gen meant information."},
    m: [["consumption", "tuberculosis"], ["dropsy", "fluid retention"], ["ague", "shivering fever"], ["apoplexy", "stroke"]],
    q: {ask: "Smallest to largest", i: [["gill", "¼ pint"], ["pint", "20 fl oz"], ["quart", "2 pints"], ["gallon", "8 pints"]], n: "Jack and Jill fetched a pail of water; a gill was a small measure of spirits or ale."},
    s: {t: "dashboard", c: "A board that stopped mud splashing a carriage driver", o: ["A ship's instrument panel", "A board for chalking up scores", "A shop counter"], n: "Horses' hooves dashed up mud. The board moved inside when cars arrived and gathered the dials."}
  },
  /* Thu */ {
    p: {t: "lucifer", h: "“He struck a lucifer and lit his pipe.”", c: "A match", o: ["A cigarette lighter", "A paper spill", "A tinderbox"], n: "Lucifer means light-bringer. Friction matches were sold as lucifers from the 1830s."},
    x: {f: "old words for a bicycle", w: ["boneshaker", "velocipede", "push-bike"], odd: "charabanc", n: "A charabanc was a motor coach for outings, as shaky as a boneshaker but with an engine."},
    m: [["privy", "outside toilet"], ["parlour", "front room"], ["box room", "tiny bedroom"], ["scullery", "back kitchen"]],
    q: {ask: "Oldest to newest", i: [["Penny Black stamp", "1840"], ["telephone", "1876"], ["BBC radio", "1922"], ["text message", "1992"]], n: "The first text message, sent in December 1992, read ‘Merry Christmas’."},
    s: {t: "cc (on an email)", c: "Carbon copy: typing through carbon paper", o: ["A photocopier", "A printing press", "Tracing paper"], n: "Typists slipped carbon paper between sheets to make copies. Email kept the cc."}
  },
  /* Fri */ {
    p: {t: "liberty bodice", h: "“Mum made me wear my liberty bodice all winter.”", c: "A warm, vest-like garment for children", o: ["A school pinafore", "A knitted balaclava", "A flannel nightshirt"], n: "Sold from 1908 as a ‘liberating’ alternative to corsets, with rubber buttons to fix stockings to. Gone by the 1960s."},
    x: {f: "old names for illnesses", w: ["consumption", "dropsy", "ague"], odd: "influenza", n: "Influenza is still the proper name for flu. The other three have been replaced by medical terms."},
    m: [["toodle-oo", "goodbye"], ["what ho", "hello"], ["toff", "posh person"], ["spondulicks", "money"]],
    q: {ask: "Lightest to heaviest", i: [["ounce", "1 oz"], ["pound", "16 oz"], ["stone", "14 lb"], ["hundredweight", "112 lb"]], n: "A British hundredweight is 112 pounds, not 100. Americans use 100."},
    s: {t: "footage", c: "Film measured by the foot", o: ["Sound measured in decibels", "Tape measured in minutes", "Photos counted in frames"], n: "Cine film was sold and cut by length. Phones record no film, but we still call it footage."}
  },
  /* Sat */ {
    p: {t: "mangle", h: "“Put the sheets through the mangle before you hang them out.”", c: "A machine with rollers for squeezing water out of washing", o: ["A copper boiler", "A washboard", "A clothes horse"], n: "From Dutch <i>mangel</i>. Spin dryers sent them to the shed, and then the tip."},
    x: {f: "old words for a cinema", w: ["flicks", "picture house", "fleapit"], odd: "music hall", n: "Music halls were live variety theatres. Many became cinemas when the talkies arrived."},
    m: [["looking glass", "mirror"], ["counterpane", "bedspread"], ["chesterfield", "sofa"], ["davenport", "writing desk"]],
    q: {ask: "Smallest to largest", i: [["farthing", "¼d"], ["halfpenny", "½d"], ["sixpence", "6d"], ["half-crown", "2s 6d"]], n: "There were 240 old pennies in a pound, and 960 farthings."},
    s: {t: "glove box", c: "A compartment for driving gloves", o: ["A box for maps", "A box for a first-aid kit", "A box for toll coins"], n: "Early motorists wore gauntlets in open cars. Nobody keeps gloves in it now."}
  },
  /* Sun */ {
    p: {t: "tallyman", h: "“Quick, hide behind the sofa, it's the tallyman!”", c: "A door-to-door seller who collected weekly payments", o: ["A rent collector", "A coal man", "A milkman"], n: "He kept a tally of what you owed, and called every week to collect."},
    x: {f: "old words for a toilet", w: ["privy", "jakes", "water closet"], odd: "scullery", n: "The scullery was the back kitchen, though the privy was often just outside its door."},
    m: [["penny-farthing", "high-wheeled bicycle"], ["charabanc", "motor coach"], ["hackney carriage", "taxi"], ["omnibus", "bus"]],
    q: {ask: "Oldest to newest", i: [["BBC television service", "1936"], ["ITV", "1955"], ["colour TV in Britain", "1967"], ["Channel 4", "1982"]], n: "Colour arrived on BBC Two first, in time for Wimbledon in 1967."},
    s: {t: "tin foil", c: "Foil made of tin", o: ["Foil made of silver", "Foil made of lead", "Foil made of copper"], n: "It's been aluminium since the mid-1900s, but the name stuck."}
  },
  /* ---------- Week 4 ---------- */
  /* Mon */ {
    p: {t: "tuppence", h: "“It only cost tuppence.”", c: "Two old pennies", o: ["Two shillings", "Half a penny", "Two farthings"], n: "Say it TUP-ence. ‘Tuppence a bag’, as Mary Poppins sang."},
    x: {f: "old schoolboy slang for excellent", w: ["spiffing", "top-hole", "ripping"], odd: "gormless", n: "Gormless means stupid. Still used, and not a compliment."},
    m: [["copper", "wash boiler"], ["mangle", "wringer"], ["posser", "washing plunger"], ["flat iron", "iron heated on the stove"]],
    q: {ask: "Oldest to newest", i: [["penny-farthing", "1870s"], ["Rover safety bicycle", "1885"], ["Raleigh Chopper", "1969"], ["mountain bike", "1980s"]], n: "The Rover's same-sized wheels and chain drive set the shape of bicycles ever since."},
    s: {t: "rewind", c: "Winding a tape or film back to the start", o: ["Winding a clock", "Winding wool into a ball", "Winding up a toy"], n: "Cassettes and VHS had to be wound back. ‘Be kind, rewind’, said the video shop."}
  },
  /* Tue */ {
    p: {t: "charwoman", h: "“The charwoman came in on Tuesdays and Fridays.”", c: "A cleaner paid by the day", o: ["A cook", "A laundress", "A nanny"], n: "From an old word char, a chore. Shortened to char or charlady."},
    x: {f: "old units of length", w: ["furlong", "chain", "rod"], odd: "bushel", n: "A bushel measures volume: dry goods like grain."},
    m: [["prang", "crash"], ["wizard", "excellent"], ["gen", "information"], ["erk", "aircraftman"]],
    q: {ask: "Oldest to newest", i: [["first talkie, The Jazz Singer", "1927"], ["first IMAX film", "1970"], ["first British multiplex", "1985"], ["Netflix starts streaming", "2007"]], n: "Britain's first multiplex, The Point, opened in Milton Keynes."},
    s: {t: "album", c: "A book of record sleeves", o: ["A photo frame", "A scrapbook", "A sheet-music folder"], n: "Sets of 78 rpm records came in books of sleeves, like a photo album. LPs kept the name."}
  },
  /* Wed */ {
    p: {t: "pinny", h: "“Put your pinny on before you start baking.”", c: "An apron", o: ["A hairnet", "An oven glove", "A tea towel"], n: "Short for pinafore, which was pinned afore (in front of) the dress."},
    x: {f: "old words for a coward", w: ["poltroon", "craven", "milksop"], odd: "blackguard", n: "A blackguard is a scoundrel, not a coward. Say it BLAG-ard."},
    m: [["bioscope", "cinema"], ["talkie", "film with sound"], ["newsreel", "news film"], ["usherette", "cinema attendant"]],
    q: {ask: "First to last withdrawn", i: [["farthing", "1960"], ["old halfpenny", "1969"], ["half-crown", "1970"], ["sixpence", "1980"]], n: "The sixpence survived decimalisation as 2½p for nine years."},
    s: {t: "red tape", c: "The red ribbon tied round official papers", o: ["Red ink for corrections", "The tape across a finishing line", "Sealing wax"], n: "Government and legal documents were bundled with red ribbon. Untying it was slow."}
  },
  /* Thu */ {
    p: {t: "frock", h: "“She wore her best frock to the dance.”", c: "A dress", o: ["A cardigan", "A blouse", "A skirt"], n: "It once meant a monk's habit, then a man's coat (hence frock coat), and finally a dress."},
    x: {f: "old words for a servant", w: ["scullion", "footman", "tweeny"], odd: "squire", n: "A squire was the chief landowner in a village: more likely to employ servants than be one."},
    m: [["tuppence", "2d"], ["thruppenny bit", "3d"], ["tanner", "6d"], ["bob", "1s"]],
    q: {ask: "Oldest to newest first flight", i: [["Wright Flyer", "1903"], ["Spitfire", "1936"], ["Concorde", "1969"], ["Airbus A380", "2005"]], n: "Concorde first flew on 2 March 1969 and carried passengers until 2003."},
    s: {t: "horsepower", c: "The work a horse could do", o: ["The speed of a horse", "A carthorse's weight", "A racehorse's prize money"], n: "James Watt used it to sell steam engines to mine owners who knew what a horse could pull."}
  },
  /* Fri */ {
    p: {t: "gramophone", h: "“Wind up the gramophone and put a record on.”", c: "A record player", o: ["A radio", "A music box", "A pianola"], n: "Emile Berliner's 1887 invention, played with a steel needle and a big horn."},
    x: {f: "old washday equipment", w: ["mangle", "dolly tub", "copper"], odd: "chiffonier", n: "A chiffonier is a parlour cupboard, nowhere near the wash."},
    m: [["beau", "boyfriend"], ["courting", "dating"], ["trousseau", "bride's new clothes"], ["bottom drawer", "things saved for married life"]],
    q: {ask: "Oldest to newest", i: [["Marks & Spencer founded", "1884"], ["Woolworths opens in Britain", "1909"], ["Tesco founded", "1919"], ["Woolworths closes", "2009"]], n: "Woolworths' first British store opened in Liverpool. Its pick 'n' mix was the stuff of legend."},
    s: {t: "broadcast", c: "Scattering seed by hand across a field", o: ["A town crier's announcement", "A church sermon", "A newspaper's print run"], n: "Farmers broadcast seed long before the BBC broadcast anything."}
  },
  /* Sat */ {
    p: {t: "eiderdown", h: "“Pull the eiderdown up, it's freezing.”", c: "A thick quilt filled with down", o: ["A woollen blanket", "A bolster", "A bedspread"], n: "Stuffed with the soft down of the eider duck. Duvets replaced them in the 1970s."},
    x: {f: "pre-decimal coins", w: ["farthing", "florin", "half-crown"], odd: "ducat", n: "A ducat was a gold coin of Venice, never British money."},
    m: [["telegram", "urgent message"], ["trunk call", "long-distance call"], ["operator", "person who connected calls"], ["party line", "shared phone line"]],
    q: {ask: "When they came to an end", i: [["steam on British Railways", "1968"], ["inland telegrams", "1982"], ["Concorde flights", "2003"], ["analogue TV", "2012"]], n: "The last steam-hauled main line passenger train ran on 11 August 1968."},
    s: {t: "cut and paste", c: "Scissors and glue", o: ["A typewriter", "A printing press", "A stencil"], n: "Editors literally cut up typescripts and pasted them in a new order."}
  },
  /* Sun */ {
    p: {t: "dolly tub", h: "“Gran did the washing in a dolly tub.”", c: "A wash tub with a hand-turned agitator", o: ["A tin bath", "A rain barrel", "A butter churn"], n: "The dolly was a wooden stool-like plunger twisted round in the tub. Hard work."},
    x: {f: "things in a Victorian parlour", w: ["antimacassar", "aspidistra", "chiffonier"], odd: "fridge", n: "Fridges didn't reach most British homes until the 1960s, and never the parlour."},
    m: [["gill", "quarter of a pint"], ["peck", "two gallons"], ["stone", "14 pounds"], ["hundredweight", "112 pounds"]],
    q: {ask: "Oldest to newest", i: [["decimal day", "1971"], ["pound coin", "1983"], ["£2 coin", "1998"], ["plastic £5 note", "2016"]], n: "Decimal day was 15 February 1971."},
    s: {t: "give me a ring", c: "The bell inside a telephone", o: ["A doorbell", "A buzzer", "A dial tone"], n: "Telephones had real bells until the 1980s. Mobiles kept the word."}
  }
];
