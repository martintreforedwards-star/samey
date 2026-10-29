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
      {k: ["eye", "ball"], say: "Eyeball is a word, not an idiom. Try adding something."}
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
      {k: ["rain", "day"], p: "save it for a *rainy* *day*", m: "keep something for when you'll need it"}
    ],
    near: [
      {k: ["dog", "bag"], say: "A doggy bag is real, but it's not on today's list."},
      {k: ["dog", "bark"], say: "Dogs do bark, but that's not today's idiom."}
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
  }
];
