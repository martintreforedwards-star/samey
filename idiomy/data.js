// Idiomy boards. One board per day (preview cycles through these in order).
// w    = the ten words in the hive, in reading order (rows of 3, 4, 3)
// t    = how many idioms count as reaching the target
// a    = the idioms on today's list:
//          k = the hive words a player taps (order doesn't matter; the game fills in the rest)
//          p = the idiom as shown once found, with the tapped words in *stars*
//          m = what it means
//          alt (optional) = other tap sets that also count for this idiom
// near = real phrases that aren't on today's list: acknowledged, no miss charged
const BOARDS = [
  {
    w: ["cold", "hot", "ice", "feet", "blood", "water", "break", "shoulder", "under", "bridge"],
    t: 6,
    a: [
      {k: ["cold", "feet"], p: "get *cold* *feet*", m: "lose your nerve before doing something"},
      {k: ["cold", "shoulder"], p: "give someone the *cold* *shoulder*", m: "ignore someone on purpose"},
      {k: ["cold", "blood"], p: "in *cold* *blood*", m: "deliberately, without any feeling"},
      {k: ["cold", "water"], p: "pour *cold* *water* on something", m: "be discouraging about an idea"},
      {k: ["hot", "water"], p: "in *hot* *water*", m: "in trouble"},
      {k: ["hot", "under"], p: "*hot* *under* the collar", m: "angry or flustered"},
      {k: ["break", "ice"], p: "*break* the *ice*", m: "ease the awkwardness when people first meet"},
      {k: ["water", "under", "bridge"], p: "*water* *under* the *bridge*", m: "something in the past that no longer matters"},
      {k: ["blood", "water"], p: "*blood* is thicker than *water*", m: "family ties come first"}
    ],
    near: [
      {k: ["hot", "blood"], say: "Hot-blooded is a real word, but it's not on today's list."},
      {k: ["ice", "cold"], say: "Ice-cold is a real phrase, but not an idiom on today's list."}
    ]
  },
  {
    w: ["hand", "upper", "second", "glove", "fist", "over", "eye", "heart", "ball", "keep"],
    t: 6,
    a: [
      {k: ["upper", "hand"], p: "have the *upper* *hand*", m: "be in control or winning"},
      {k: ["second", "hand"], p: "hear something *second* *hand*", m: "learn it from someone else, not first hand"},
      {k: ["hand", "glove"], p: "*hand* in *glove*", m: "working very closely together"},
      {k: ["hand", "over", "fist"], p: "*hand* *over* *fist*", m: "very quickly, usually of money"},
      {k: ["hand", "heart"], p: "*hand* on *heart*", m: "honestly"},
      {k: ["keep", "eye"], p: "*keep* an *eye* on", m: "watch over something or someone"},
      {k: ["keep", "eye", "ball"], p: "*keep* your *eye* on the *ball*", m: "stay focused on what matters"},
      {k: ["keep", "ball"], p: "*keep* the *ball* rolling", m: "keep something going"},
      {k: ["over", "eye"], p: "pull the wool *over* someone's *eyes*", m: "deceive someone"}
    ],
    near: [
      {k: ["eye", "ball"], say: "Eyeball is a word, not an idiom. Try adding something."},
      {k: ["ball", "fist"], say: "You can ball your fist, but it's not quite an idiom. No charge."}
    ]
  },
  {
    w: ["cat", "bag", "dog", "horse", "mouth", "bark", "tree", "pigeons", "day", "rain"],
    t: 5,
    a: [
      {k: ["cat", "bag"], p: "let the *cat* out of the *bag*", m: "give away a secret"},
      {k: ["cat", "pigeons"], p: "put the *cat* among the *pigeons*", m: "stir up trouble"},
      {k: ["horse", "mouth"], p: "straight from the *horse's* *mouth*", m: "from the person who really knows (also: don't look a gift horse in the mouth)"},
      {k: ["bark", "tree"], p: "*barking* up the wrong *tree*", m: "looking in the wrong place or blaming the wrong person"},
      {k: ["dog", "day"], p: "every *dog* has its *day*", m: "everyone gets their moment of luck"},
      {k: ["rain", "cat", "dog"], p: "*raining* *cats* and *dogs*", m: "pouring with rain"},
      {k: ["rain", "day"], p: "save it for a *rainy* *day*", m: "keep something for when you'll need it"},
      {k: ["dog", "bark"], p: "why keep a *dog* and *bark* yourself?", m: "don't do a job you've already got someone else to do (also: don't have a dog and bark yourself)"}
    ],
    near: [
      {k: ["dog", "bag"], say: "A doggy bag is real, but it's not on today's list."}
    ]
  },
  {
    w: ["head", "heels", "nail", "hit", "sand", "hair", "split", "let", "put", "foot"],
    t: 5,
    a: [
      {k: ["head", "heels"], p: "*head* over *heels*", m: "completely, usually in love"},
      {k: ["hit", "nail", "head"], p: "*hit* the *nail* on the *head*", m: "say exactly the right thing"},
      {k: ["head", "sand"], p: "bury your *head* in the *sand*", m: "ignore a problem and hope it goes away"},
      {k: ["split", "hair"], p: "*split* *hairs*", m: "argue over tiny, unimportant differences"},
      {k: ["let", "hair"], p: "*let* your *hair* down", m: "relax and enjoy yourself"},
      {k: ["put", "foot"], p: "*put* your *foot* in it", m: "say something tactless (also: put your foot down)"},
      {k: ["put", "head"], p: "*put* your *heads* together", m: "work something out between you"}
    ],
    near: [
      {k: ["head", "foot"], say: "From head to foot is a real phrase, but it's not on today's list."}
    ]
  },
  {
    w: ["beans", "spill", "cake", "piece", "butter", "bread", "pie", "sky", "eat", "slice"],
    t: 6,
    a: [
      {k: ["spill", "beans"], p: "*spill* the *beans*", m: "reveal a secret"},
      {k: ["piece", "cake"], p: "a *piece* of *cake*", m: "very easy"},
      {k: ["pie", "sky"], p: "*pie* in the *sky*", m: "a nice idea that won't happen"},
      {k: ["bread", "butter"], p: "*bread* and *butter*", m: "your main source of income or everyday work"},
      {k: ["eat", "cake"], p: "have your *cake* and *eat* it", m: "want two things you can't both have"},
      {k: ["eat", "pie"], p: "*eat* humble *pie*", m: "admit you were wrong"},
      {k: ["slice", "bread"], p: "the best thing since *sliced* *bread*", m: "a brilliant new thing"},
      {k: ["piece", "pie"], p: "a *piece* of the *pie*", m: "a share of the money or rewards"}
    ],
    near: [
      {k: ["slice", "cake"], say: "A slice of the cake works too, but today's list has it the other way."}
    ]
  },
  {
    w: ["weather", "under", "storm", "cloud", "nine", "silver", "rain", "check", "time", "nick"],
    t: 6,
    a: [
      {k: ["under", "weather"], p: "*under* the *weather*", m: "feeling a bit ill"},
      {k: ["weather", "storm"], p: "*weather* the *storm*", m: "get through a difficult time"},
      {k: ["cloud", "nine"], p: "on *cloud* *nine*", m: "extremely happy"},
      {k: ["cloud", "silver"], p: "every *cloud* has a *silver* lining", m: "something good comes out of a bad situation"},
      {k: ["under", "cloud"], p: "*under* a *cloud*", m: "under suspicion or out of favour"},
      {k: ["rain", "check"], p: "take a *rain* *check*", m: "turn something down for now but hope to do it later"},
      {k: ["nick", "time"], p: "in the *nick* of *time*", m: "only just in time"},
      {k: ["time", "nine"], p: "a stitch in *time* saves *nine*", m: "fix a small problem now to avoid a bigger one"}
    ],
    near: [
      {k: ["rain", "storm"], say: "A rainstorm is real, but it's not an idiom."}
    ]
  },
  {
    w: ["bull", "horns", "china", "red", "rag", "shop", "line", "draw", "tape", "sand"],
    t: 5,
    a: [
      {k: ["bull", "horns"], p: "take the *bull* by the *horns*", m: "tackle a problem head on"},
      {k: ["bull", "china", "shop"], p: "a *bull* in a *china* *shop*", m: "someone clumsy or tactless"},
      {k: ["red", "rag", "bull"], p: "like a *red* *rag* to a *bull*", m: "sure to make someone angry"},
      {k: ["red", "tape"], p: "*red* *tape*", m: "pointless rules and paperwork"},
      {k: ["red", "line"], p: "cross a *red* *line*", m: "go past a limit that mustn't be crossed"},
      {k: ["draw", "line"], p: "*draw* the *line*", m: "set a limit on what you'll accept"},
      {k: ["line", "sand"], p: "a *line* in the *sand*", m: "a point beyond which you won't go", alt: [["draw", "line", "sand"]]}
    ],
    near: []
  },
  {
    w: ["fish", "water", "kettle", "sea", "boat", "rock", "miss", "out", "plenty", "different"],
    t: 4,
    a: [
      {k: ["fish", "out", "water"], p: "a *fish* *out* of *water*", m: "someone uncomfortable in unfamiliar surroundings"},
      {k: ["different", "kettle", "fish"], p: "a *different* *kettle* of *fish*", m: "a completely different matter"},
      {k: ["plenty", "fish", "sea"], p: "*plenty* more *fish* in the *sea*", m: "there are lots of other people or chances"},
      {k: ["rock", "boat"], p: "*rock* the *boat*", m: "cause trouble or upset a calm situation"},
      {k: ["miss", "boat"], p: "*miss* the *boat*", m: "be too late to take an opportunity"}
    ],
    near: [
      {k: ["out", "sea"], say: "Out at sea is a real phrase, but not an idiom on today's list."}
    ]
  },
  {
    w: ["light", "dark", "shot", "end", "tunnel", "bright", "side", "look", "early", "bird"],
    t: 4,
    a: [
      {k: ["light", "end", "tunnel"], p: "*light* at the *end* of the *tunnel*", m: "a sign that a hard time is nearly over"},
      {k: ["shot", "dark"], p: "a *shot* in the *dark*", m: "a wild guess"},
      {k: ["look", "bright", "side"], p: "*look* on the *bright* *side*", m: "stay cheerful despite problems"},
      {k: ["early", "bird"], p: "the *early* *bird* catches the worm", m: "getting started early pays off"},
      {k: ["bright", "early"], p: "*bright* and *early*", m: "very early in the morning"}
    ],
    near: [
      {k: ["dark", "side"], say: "The dark side is a real phrase, but not an idiom on today's list."}
    ]
  },
  {
    w: ["penny", "drop", "pound", "time", "money", "burn", "hole", "pocket", "worth", "spend"],
    t: 6,
    a: [
      {k: ["penny", "drop"], p: "the *penny* *drops*", m: "someone finally understands"},
      {k: ["penny", "pound"], p: "in for a *penny*, in for a *pound*", m: "once you've started, you may as well go all the way"},
      {k: ["time", "money"], p: "*time* is *money*", m: "wasting time wastes money"},
      {k: ["money", "burn"], p: "*money* to *burn*", m: "more money than you need"},
      {k: ["burn", "hole", "pocket"], p: "*burn* a *hole* in your *pocket*", m: "money you're itching to spend"},
      {k: ["spend", "penny"], p: "*spend* a *penny*", m: "go to the loo (an old British euphemism)"},
      {k: ["worth", "penny"], p: "*worth* every *penny*", m: "good value, despite the cost"},
      {k: ["money", "worth"], p: "get your *money's* *worth*", m: "get full value for what you paid"}
    ],
    near: [
      {k: ["pocket", "money"], say: "Pocket money is real, but not an idiom on today's list."}
    ]
  },
  {
    w: ["heart", "sleeve", "gold", "stone", "kill", "two", "bird", "throw", "mouth", "sink"],
    t: 6,
    a: [
      {k: ["heart", "sleeve"], p: "wear your *heart* on your *sleeve*", m: "show your feelings openly"},
      {k: ["heart", "gold"], p: "a *heart* of *gold*", m: "a very kind nature"},
      {k: ["heart", "stone"], p: "a *heart* of *stone*", m: "no pity or feeling"},
      {k: ["kill", "two", "bird", "stone"], p: "*kill* *two* *birds* with one *stone*", m: "get two things done with one action"},
      {k: ["stone", "throw"], p: "a *stone's* *throw*", m: "a very short distance"},
      {k: ["heart", "mouth"], p: "your *heart* in your *mouth*", m: "very frightened or nervous"},
      {k: ["heart", "sink"], p: "your *heart* *sinks*", m: "you suddenly feel disappointed"}
    ],
    near: [
      {k: ["bird", "two"], say: "A bird in the hand is worth two in the bush, but there's no hand today."}
    ]
  },
  {
    w: ["clock", "time", "against", "race", "kill", "beat", "around", "work", "once", "moon"],
    t: 5,
    a: [
      {k: ["against", "clock"], p: "*against* the *clock*", m: "in a hurry, to beat a deadline"},
      {k: ["race", "against", "time"], p: "a *race* *against* *time*", m: "a rush to finish before it's too late", alt: [["race", "against", "clock"]]},
      {k: ["kill", "time"], p: "*kill* *time*", m: "do something to pass the time while waiting"},
      {k: ["beat", "clock"], p: "*beat* the *clock*", m: "finish before the time runs out"},
      {k: ["around", "clock"], p: "*around* the *clock*", m: "all day and all night", alt: [["work", "around", "clock"]]},
      {k: ["once", "moon"], p: "*once* in a blue *moon*", m: "very rarely"}
    ],
    near: [
      {k: ["beat", "around"], say: "Beat around the bush is real, but there's no bush today."},
      {k: ["once", "time"], say: "Once upon a time is a real phrase, but not an idiom on today's list."}
    ]
  },
  {
    w: ["sweet", "tooth", "nail", "fight", "long", "grapes", "sour", "nothing", "short", "story"],
    t: 6,
    a: [
      {k: ["sweet", "tooth"], p: "a *sweet* *tooth*", m: "a love of sugary things"},
      {k: ["fight", "tooth", "nail"], p: "*fight* *tooth* and *nail*", m: "fight very fiercely"},
      {k: ["long", "tooth"], p: "*long* in the *tooth*", m: "getting old"},
      {k: ["sour", "grapes"], p: "*sour* *grapes*", m: "pretending not to want what you can't have"},
      {k: ["sweet", "nothing"], p: "*sweet* *nothings*", m: "loving, whispered words"},
      {k: ["short", "sweet"], p: "*short* and *sweet*", m: "brief and to the point"},
      {k: ["long", "short"], p: "the *long* and the *short* of it", m: "the basic facts"},
      {k: ["long", "story", "short"], p: "to cut a *long* *story* *short*", m: "to get to the point"}
    ],
    near: []
  },
  {
    w: ["paint", "town", "red", "black", "sheep", "white", "lie", "blue", "bolt", "handed"],
    t: 5,
    a: [
      {k: ["paint", "town", "red"], p: "*paint* the *town* *red*", m: "go out and celebrate wildly"},
      {k: ["black", "sheep"], p: "the *black* *sheep*", m: "the odd one out in a family, usually the troublemaker"},
      {k: ["white", "lie"], p: "a *white* *lie*", m: "a harmless little lie"},
      {k: ["bolt", "blue"], p: "a *bolt* from the *blue*", m: "a complete surprise"},
      {k: ["red", "handed"], p: "caught *red*-*handed*", m: "caught in the act"},
      {k: ["black", "white"], p: "in *black* and *white*", m: "in writing, or clear-cut"},
      {k: ["black", "blue"], p: "*black* and *blue*", m: "covered in bruises"}
    ],
    near: []
  },
  {
    w: ["leg", "arm", "pull", "break", "cost", "twist", "foot", "bill", "shake", "chance"],
    t: 5,
    a: [
      {k: ["pull", "leg"], p: "*pull* someone's *leg*", m: "tease someone by telling them something untrue"},
      {k: ["break", "leg"], p: "*break* a *leg*", m: "good luck (said to performers)"},
      {k: ["cost", "arm", "leg"], p: "*cost* an *arm* and a *leg*", m: "be very expensive"},
      {k: ["twist", "arm"], p: "*twist* someone's *arm*", m: "persuade someone to do something"},
      {k: ["foot", "bill"], p: "*foot* the *bill*", m: "pay for something"},
      {k: ["shake", "leg"], p: "*shake* a *leg*", m: "hurry up"},
      {k: ["chance", "arm"], p: "*chance* your *arm*", m: "take a risk, try your luck"}
    ],
    near: []
  },
  {
    w: ["wall", "fly", "brick", "head", "back", "banging", "writing", "drive", "up", "off"],
    t: 5,
    a: [
      {k: ["fly", "wall"], p: "a *fly* on the *wall*", m: "an unseen observer"},
      {k: ["writing", "wall"], p: "the *writing* on the *wall*", m: "a sign that something bad is coming"},
      {k: ["drive", "up", "wall"], p: "*drive* someone *up* the *wall*", m: "annoy someone intensely"},
      {k: ["banging", "head", "brick", "wall"], p: "*banging* your *head* against a *brick* *wall*", m: "trying hard and getting nowhere"},
      {k: ["off", "wall"], p: "*off* the *wall*", m: "unusual and eccentric"},
      {k: ["back", "wall"], p: "with your *back* to the *wall*", m: "in serious trouble, with no way out"}
    ],
    near: [
      {k: ["fly", "off"], say: "Fly off the handle is real, but there's no handle today."}
    ]
  },
  {
    w: ["horse", "gift", "mouth", "cart", "before", "high", "dark", "stable", "door", "bolted"],
    t: 4,
    a: [
      {k: ["gift", "horse", "mouth"], p: "don't look a *gift* *horse* in the *mouth*", m: "don't find fault with a present"},
      {k: ["cart", "before", "horse"], p: "put the *cart* *before* the *horse*", m: "do things in the wrong order"},
      {k: ["high", "horse"], p: "get on your *high* *horse*", m: "act as if you're better than others"},
      {k: ["dark", "horse"], p: "a *dark* *horse*", m: "someone with hidden talents"},
      {k: ["stable", "door", "horse", "bolted"], p: "shut the *stable* *door* after the *horse* has *bolted*", m: "act too late to prevent a problem"},
      {k: ["horse", "mouth"], p: "straight from the *horse's* *mouth*", m: "from someone who really knows"}
    ],
    near: []
  },
  {
    w: ["nose", "grindstone", "joint", "turn", "pay", "nail", "coffin", "last", "straw", "up"],
    t: 5,
    a: [
      {k: ["nose", "grindstone"], p: "keep your *nose* to the *grindstone*", m: "work hard without a break"},
      {k: ["nose", "joint"], p: "put someone's *nose* out of *joint*", m: "offend or upset someone"},
      {k: ["turn", "nose", "up"], p: "*turn* your *nose* *up* at", m: "reject something as not good enough"},
      {k: ["pay", "nose"], p: "*pay* through the *nose*", m: "pay far too much"},
      {k: ["nail", "coffin"], p: "a *nail* in the *coffin*", m: "something that helps bring about failure", alt: [["last", "nail", "coffin"]]},
      {k: ["last", "straw"], p: "the *last* *straw*", m: "the final problem that makes a situation unbearable"}
    ],
    near: []
  },
  {
    w: ["ball", "court", "drop", "odd", "league", "own", "goal", "field", "level", "playing"],
    t: 5,
    a: [
      {k: ["ball", "court"], p: "the *ball* is in your *court*", m: "it's your turn to act"},
      {k: ["drop", "ball"], p: "*drop* the *ball*", m: "make a careless mistake"},
      {k: ["own", "goal"], p: "an *own* *goal*", m: "something that backfires on you"},
      {k: ["level", "playing", "field"], p: "a *level* *playing* *field*", m: "a fair situation for everyone"},
      {k: ["odd", "ball"], p: "an *odd**ball*", m: "a strange or eccentric person"},
      {k: ["league", "own"], p: "in a *league* of its *own*", m: "far better than anything else"}
    ],
    near: []
  },
  {
    w: ["cat", "curiosity", "killed", "bag", "nine", "lives", "cream", "got", "tongue", "swing"],
    t: 5,
    a: [
      {k: ["curiosity", "killed", "cat"], p: "*curiosity* *killed* the *cat*", m: "being nosy can get you into trouble"},
      {k: ["cat", "got", "tongue"], p: "*cat* *got* your *tongue*?", m: "why aren't you saying anything?"},
      {k: ["cat", "nine", "lives"], p: "a *cat* has *nine* *lives*", m: "someone keeps surviving narrow escapes"},
      {k: ["cat", "got", "cream"], p: "like the *cat* that *got* the *cream*", m: "very pleased with yourself"},
      {k: ["swing", "cat"], p: "no room to *swing* a *cat*", m: "very cramped"},
      {k: ["cat", "bag"], p: "let the *cat* out of the *bag*", m: "give away a secret"}
    ],
    near: []
  },
  {
    w: ["ear", "music", "play", "eye", "catch", "see", "eagle", "ground", "face", "lend"],
    t: 6,
    a: [
      {k: ["music", "ear"], p: "*music* to my *ears*", m: "very welcome news"},
      {k: ["play", "ear"], p: "*play* it by *ear*", m: "decide as you go, without a plan"},
      {k: ["catch", "eye"], p: "*catch* someone's *eye*", m: "get someone's attention"},
      {k: ["see", "eye"], p: "*see* *eye* to eye", m: "agree"},
      {k: ["eagle", "eye"], p: "an *eagle* *eye*", m: "very sharp eyesight or attention to detail"},
      {k: ["ear", "ground"], p: "keep your *ear* to the *ground*", m: "stay alert to what's going on"},
      {k: ["face", "music"], p: "*face* the *music*", m: "accept the consequences"},
      {k: ["lend", "ear"], p: "*lend* an *ear*", m: "listen sympathetically"}
    ],
    near: [
      {k: ["play", "ground"], say: "Playground is a real word, but not an idiom on today's list."}
    ]
  },
  {w:["hand","glove","iron","fist","cold","shoulder","feet","heart","chip","wear"],t:6,a:[
    {k:["hand","glove"],p:"*hand* in *glove*",m:"working very closely together"},
    {k:["iron","fist"],p:"rule with an *iron* *fist*",m:"control people harshly",alt:[["iron","hand"]]},
    {k:["cold","shoulder"],p:"give someone the *cold* *shoulder*",m:"deliberately ignore someone"},
    {k:["cold","feet"],p:"get *cold* *feet*",m:"lose your nerve"},
    {k:["chip","shoulder"],p:"a *chip* on your *shoulder*",m:"a lasting grudge"},
    {k:["wear","heart"],p:"*wear* your *heart* on your sleeve",m:"show your feelings openly"},
    {k:["hand","heart"],p:"*hand* on *heart*",m:"honestly"}],
   near:[{k:["cold","heart"],say:"Cold-hearted is a real word, but not an idiom on today's list."},{k:["hand","feet"],say:"Close: it's hand and foot. Not on today's list."}]},
  {w:["cat","bag","dog","sick","horse","mouth","gift","bee","bonnet","tired"],t:6,a:[
    {k:["cat","bag"],p:"let the *cat* out of the *bag*",m:"give away a secret"},
    {k:["sick","dog"],p:"*sick* as a *dog*",m:"very ill"},
    {k:["gift","horse","mouth"],p:"never look a *gift* *horse* in the *mouth*",m:"don't find fault with a present",alt:[["gift","horse"]]},
    {k:["horse","mouth"],p:"straight from the *horse*'s *mouth*",m:"from the person who really knows"},
    {k:["bee","bonnet"],p:"a *bee* in your *bonnet*",m:"an idea you can't stop going on about"},
    {k:["dog","tired"],p:"*dog*-*tired*",m:"exhausted"},
    {k:["sick","tired"],p:"*sick* and *tired*",m:"fed up"},
    {k:["cat","dog"],p:"fight like *cat* and *dog*",m:"argue all the time"}],
   near:[{k:["bag","dog"],say:"A doggy bag is real, but not an idiom on today's list."}]},
  {w:["bread","butter","fingers","cake","piece","cherry","pick","walk","bean","spill"],t:5,a:[
    {k:["bread","butter"],p:"*bread* and *butter*",m:"your basic income or everyday work"},
    {k:["butter","fingers"],p:"*butter*-*fingers*",m:"someone who keeps dropping things"},
    {k:["piece","cake"],p:"a *piece* of *cake*",m:"very easy"},
    {k:["cake","walk"],p:"a *cake*-*walk*",m:"an easy win"},
    {k:["cherry","pick"],p:"*cherry*-*pick*",m:"choose only the best bits"},
    {k:["spill","bean"],p:"*spill* the *beans*",m:"reveal a secret"}],
   near:[]},
  {w:["rain","check","storm","teacup","under","weather","cloud","nine","silver","lining"],t:6,a:[
    {k:["rain","check"],p:"take a *rain* *check*",m:"put something off until later"},
    {k:["storm","teacup"],p:"a *storm* in a *teacup*",m:"a fuss about nothing"},
    {k:["under","weather"],p:"*under* the *weather*",m:"slightly ill"},
    {k:["cloud","nine"],p:"on *cloud* *nine*",m:"blissfully happy"},
    {k:["cloud","silver","lining"],p:"every *cloud* has a *silver* *lining*",m:"something good comes out of bad times",alt:[["silver","lining"]]},
    {k:["under","cloud"],p:"*under* a *cloud*",m:"under suspicion or in disgrace"},
    {k:["weather","storm"],p:"*weather* the *storm*",m:"get through a difficult time"}],
   near:[{k:["rain","storm"],say:"A rainstorm is real weather, but not an idiom on today's list."}]},
  {w:["tongue","cheek","bite","bullet","leg","pull","break","arm","cost","twist"],t:6,a:[
    {k:["tongue","cheek"],p:"*tongue* in *cheek*",m:"not meant seriously"},
    {k:["bite","bullet"],p:"*bite* the *bullet*",m:"face something unpleasant"},
    {k:["pull","leg"],p:"*pull* someone's *leg*",m:"tease someone"},
    {k:["break","leg"],p:"*break* a *leg*",m:"good luck (said to performers)"},
    {k:["cost","arm","leg"],p:"*cost* an *arm* and a *leg*",m:"be very expensive",alt:[["arm","leg"]]},
    {k:["bite","tongue"],p:"*bite* your *tongue*",m:"stop yourself saying something"},
    {k:["twist","arm"],p:"*twist* someone's *arm*",m:"persuade someone"}],
   near:[{k:["break","arm"],say:"Painful, but not an idiom on today's list."}]},
  {w:["time","kill","nick","once","blue","moon","day","call","late","better"],t:6,a:[
    {k:["kill","time"],p:"*kill* *time*",m:"do something while you wait"},
    {k:["nick","time"],p:"in the *nick* of *time*",m:"only just in time"},
    {k:["once","blue","moon"],p:"*once* in a *blue* *moon*",m:"very rarely",alt:[["blue","moon"]]},
    {k:["call","day"],p:"*call* it a *day*",m:"stop working"},
    {k:["better","late"],p:"*better* *late* than never",m:"it's good that it happened at all"},
    {k:["call","time"],p:"*call* *time* on something",m:"bring it to an end"},
    {k:["once","time"],p:"*once* upon a *time*",m:"long ago, as stories begin"}],
   near:[{k:["day","time"],say:"Daytime is a real word, but not an idiom on today's list."}]},
  {w:["red","tape","green","eyed","monster","black","sheep","white","lie","handed"],t:6,a:[
    {k:["red","tape"],p:"*red* *tape*",m:"tiresome official rules"},
    {k:["green","eyed","monster"],p:"the *green*-*eyed* *monster*",m:"jealousy",alt:[["green","eyed"],["green","monster"]]},
    {k:["black","sheep"],p:"the *black* *sheep*",m:"the family member who doesn't fit in"},
    {k:["white","lie"],p:"a *white* *lie*",m:"a harmless untruth"},
    {k:["red","handed"],p:"caught *red*-*handed*",m:"caught in the act"},
    {k:["black","white"],p:"in *black* and *white*",m:"in writing; or clear-cut"}],
   near:[{k:["red","eyed"],say:"Red-eyed is real, but not an idiom on today's list."}]},
  {w:["fish","out","water","hot","deep","end","drop","ocean","bucket","kick"],t:5,a:[
    {k:["fish","out","water"],p:"a *fish* *out* of *water*",m:"someone in unfamiliar surroundings",alt:[["fish","water"]]},
    {k:["hot","water"],p:"in *hot* *water*",m:"in trouble"},
    {k:["deep","end"],p:"thrown in at the *deep* *end*",m:"made to start something hard without help"},
    {k:["drop","ocean"],p:"a *drop* in the *ocean*",m:"far too little to matter",alt:[["drop","bucket"]]},
    {k:["kick","bucket"],p:"*kick* the *bucket*",m:"die"},
    {k:["deep","water"],p:"in *deep* *water*",m:"in serious trouble"}],
   near:[]},
  {w:["penny","drop","pound","flesh","cash","cow","cheap","chips","dirt","spend"],t:6,a:[
    {k:["penny","drop"],p:"the *penny* *drops*",m:"someone finally understands"},
    {k:["pound","flesh"],p:"a *pound* of *flesh*",m:"a harsh demand that's legally owed"},
    {k:["cash","cow"],p:"a *cash* *cow*",m:"a reliable source of money"},
    {k:["dirt","cheap"],p:"*dirt* *cheap*",m:"very cheap"},
    {k:["cash","chips"],p:"*cash* in your *chips*",m:"die; or take your winnings and stop"},
    {k:["penny","pound"],p:"in for a *penny*, in for a *pound*",m:"if you've started, you may as well go all the way"},
    {k:["cheap","chips"],p:"*cheap* as *chips*",m:"very cheap"},
    {k:["spend","penny"],p:"*spend* a *penny*",m:"go to the loo"}],
   near:[]},
  {w:["head","over","heels","clouds","hit","nail","screw","loose","lose","shoulders"],t:6,a:[
    {k:["head","over","heels"],p:"*head* *over* *heels*",m:"completely in love",alt:[["head","heels"]]},
    {k:["head","clouds"],p:"*head* in the *clouds*",m:"daydreaming"},
    {k:["hit","nail","head"],p:"*hit* the *nail* on the *head*",m:"get something exactly right",alt:[["hit","nail"]]},
    {k:["screw","loose"],p:"a *screw* *loose*",m:"slightly mad"},
    {k:["lose","head"],p:"*lose* your *head*",m:"panic or lose your temper"},
    {k:["head","shoulders"],p:"*head* and *shoulders* above",m:"far better than the rest"},
    {k:["over","head"],p:"go *over* someone's *head*",m:"go to their boss; or be too hard for them"}],
   near:[{k:["hit","head"],say:"Ouch. Not an idiom on today's list."}]},
  {w:["book","cover","judge","chapter","verse","word","mouth","last","open","straw"],t:5,a:[
    {k:["judge","book","cover"],p:"don't *judge* a *book* by its *cover*",m:"don't go by appearances",alt:[["book","cover"]]},
    {k:["chapter","verse"],p:"*chapter* and *verse*",m:"every exact detail"},
    {k:["word","mouth"],p:"*word* of *mouth*",m:"passed on by people talking"},
    {k:["last","word"],p:"have the *last* *word*",m:"make the final remark in an argument"},
    {k:["last","straw"],p:"the *last* *straw*",m:"the final annoyance that's too much"},
    {k:["open","book"],p:"an *open* *book*",m:"someone easy to read"}],
   near:[]},
  {w:["light","tunnel","see","dark","shot","flash","pan","bright","side","horse"],t:5,a:[
    {k:["light","tunnel"],p:"*light* at the end of the *tunnel*",m:"signs that a hard time is ending"},
    {k:["shot","dark"],p:"a *shot* in the *dark*",m:"a wild guess"},
    {k:["flash","pan"],p:"a *flash* in the *pan*",m:"a short-lived success"},
    {k:["bright","side"],p:"look on the *bright* *side*",m:"be cheerful about it"},
    {k:["dark","horse"],p:"a *dark* *horse*",m:"someone with hidden talents"},
    {k:["see","light"],p:"*see* the *light*",m:"finally understand"}],
   near:[{k:["dark","side"],say:"The dark side is real, but not an idiom on today's list."}]},
  {w:["ball","court","drop","hat","level","playing","field","own","goal","day"],t:5,a:[
    {k:["ball","court"],p:"the *ball* is in your *court*",m:"it's your turn to act"},
    {k:["drop","hat"],p:"at the *drop* of a *hat*",m:"instantly"},
    {k:["level","playing","field"],p:"a *level* *playing* *field*",m:"fair conditions for everyone",alt:[["level","field"],["playing","field"]]},
    {k:["own","goal"],p:"an *own* *goal*",m:"a mistake that harms yourself"},
    {k:["field","day"],p:"have a *field* *day*",m:"have a great time doing something"},
    {k:["drop","ball"],p:"*drop* the *ball*",m:"make a careless mistake"}],
   near:[]},
  {w:["house","fire","roof","hit","home","truths","glass","stones","throw","dry"],t:5,a:[
    {k:["house","fire"],p:"get on like a *house* on *fire*",m:"get on very well"},
    {k:["hit","roof"],p:"*hit* the *roof*",m:"get very angry"},
    {k:["home","truths"],p:"*home* *truths*",m:"unwelcome facts about yourself"},
    {k:["glass","house","throw","stones"],p:"people in *glass* *houses* shouldn't *throw* *stones*",m:"don't criticise others for faults you have",alt:[["glass","house"],["throw","stones"]]},
    {k:["home","dry"],p:"*home* and *dry*",m:"safely finished"},
    {k:["hit","home"],p:"*hit* *home*",m:"be fully understood, often painfully"}],
   near:[]}
];
