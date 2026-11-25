// Gamey puzzles, by day of the week (Monday first). Sunday is hobbies and pastimes.
// DAYS is a run of whole weeks; the game picks today's weekday, cycling through the weeks.
// Five rounds a day:
//   p = "Which pursuit?"   t = the term, h = a short clue, c = the right pursuit, o = three wrong ones, n = note shown after
//   s = "Where's it from?" t = an everyday saying, c = the pursuit it came from, o = three wrong ones, n = note
//   x = "Odd one out"      w = three terms from one pursuit (named in f), odd = the interloper, n = note
//   q = "Put in order"     ask = what to order by, i = [term, value] pairs in the RIGHT order, n = note
//   m = "Match them"       four [term, pursuit] pairs
//   w = "Who said it?"     optional (Fridays): t = a famous commentary line, c = the commentator, o = three others, n = note.
// Any of p, s, x, q and w can be a list instead: each time the weeks come round again, the next one in the list
// is used (first time round uses [0], then [1], and so on, looping). Lists let new material in without dropping old.
//                          When a day has w, it takes the place of that day's "Where's it from?" round.
const DAYS = [
  /* ---------- Week 1 ---------- */
  /* Mon */ {
    p: {t: "can of corn", h: "An easy, lofted catch.", c: "Baseball", o: ["Cricket", "Rounders", "Lacrosse"], n: "An easy fly ball. One story says it comes from grocers tipping tins off high shelves and catching them in their aprons."},
    s: {t: "par for the course", c: "Golf", o: ["Horse racing", "Sailing", "Snooker"], n: "Par is the score a good golfer is expected to make, so “par for the course” came to mean normal, just what you'd expect."},
    x: {f: "Cricket", w: ["yorker", "gully", "nightwatchman"], odd: "dormie", n: "Dormie is golf: leading a match by as many holes as are left to play, so you can't lose."},
    q: {ask: "Lowest to highest usual value in chess", i: [["pawn", "1 point"], ["knight", "3 points"], ["rook", "5 points"], ["queen", "9 points"]], n: "The king has no value: lose it and the game is over."},
    m: [["condor", "Golf"], ["golden duck", "Cricket"], ["tiebreak", "Tennis"], ["touchdown", "American football"]]
  },
  /* Tue */ {
    p: {t: "doosra", h: "A spinner's ball that turns the other way.", c: "Cricket", o: ["Baseball", "Kabaddi", "Hurling"], n: "Hindi and Urdu for “the other one” or “the second”. Pakistan's Saqlain Mushtaq made it famous in the 1990s."},
    s: {t: "snookered", c: "Snooker", o: ["Bowls", "Darts", "Golf"], n: "Left with no clear shot at the ball you have to hit, so stuck with no good way forward."},
    x: {f: "Golf", w: ["divot", "mulligan", "fairway"], odd: "googly", n: "A googly is cricket: a leg-spinner's ball that turns the “wrong” way."},
    q: {ask: "Earliest to latest in the tennis year", i: [["Australian Open", "January"], ["French Open", "May to June"], ["Wimbledon", "June to July"], ["US Open", "August to September"]], n: "Together they make the four Grand Slams."},
    m: [["dohyo", "Sumo"], ["ippon", "Judo"], ["chow", "Mahjong"], ["castling", "Chess"]]
  },
  /* Wed */ {
    p: {t: "five-hole", h: "The gap between a goalie's legs.", c: "Ice hockey", o: ["Netball", "Volleyball", "Polo"], n: "Shooters number the spots around a goalie. The corners are one to four, and the gap between the pads is five."},
    s: {t: "below the belt", c: "Boxing", o: ["Fencing", "Judo", "Sumo"], n: "Punches below the waist are against the rules in boxing, so anything “below the belt” is unfair."},
    x: {f: "Tennis", w: ["let", "deuce", "love"], odd: "ruck", n: "A ruck is from rugby (and Aussie rules): the scrum of players over a ball on the ground."},
    q: {ask: "Lowest to highest sumo rank", i: [["maegashira", "rank and file"], ["sekiwake", "junior champion"], ["ozeki", "champion"], ["yokozuna", "grand champion"]], n: "Komusubi sits between maegashira and sekiwake. Once made yokozuna, a wrestler can't be demoted, only retire."},
    m: [["deke", "Ice hockey"], ["bunt", "Baseball"], ["torp", "Aussie rules"], ["alley-oop", "Basketball"]]
  },
  /* Thu */ {
    p: {t: "speccy", h: "A spectacular leaping catch, often off an opponent's back.", c: "Aussie rules", o: ["Rugby union", "Basketball", "Netball"], n: "Short for spectacular. In Aussie rules a clean catch is a mark, and the best are taken high on someone else's shoulders."},
    s: {t: "hat-trick", c: "Cricket", o: ["Football", "Ice hockey", "Horse racing"], n: "Cricket got there first. In 1858 H. H. Stephenson took three wickets with three balls and was given a hat paid for by a collection."},
    x: {f: "Baseball", w: ["shortstop", "bullpen", "Mendoza line"], odd: "wicket", n: "A wicket is cricket (and croquet). The Mendoza line is a batting average of about .200, named after a weak-hitting shortstop."},
    q: {ask: "Fewest to most strokes on a golf hole", i: [["albatross", "3 under par"], ["eagle", "2 under"], ["birdie", "1 under"], ["bogey", "1 over"]], n: "Rarer still is the condor, four under par: a hole in one on a par 5."},
    m: [["hog line", "Curling"], ["jack", "Bowls"], ["kiss", "Snooker"], ["Shanghai", "Darts"]]
  },
  /* Fri */ {
    w: [{t: "Gatting at fine leg: that's a contradiction in terms.", c: "Richie Benaud", o: ["Geoffrey Boycott", "Murray Walker", "Dan Maskell"], n: "Richie Benaud, the voice of cricket, on England's Mike Gatting in the field during the 1990s Ashes."},
        {t: "One of the good things about rain in Scotland is that most of it ends up as Scotch.", c: "Peter Alliss", o: ["Bill McLaren", "Richie Benaud", "Sid Waddell"], n: "Peter Alliss, the BBC's voice of golf for almost 60 years, on a soggy tournament in Scotland."}],
    p: {t: "Zamballi", h: "The little caged buggy that sweeps up after practice.", c: "Golf", o: ["Ice hockey", "Tennis", "Cricket"], n: "The machine that collects balls on a driving range, its driver protected by a cage. A pun on the Zamboni, which resurfaces ice rinks."},
    s: {t: "a Hail Mary", c: "American football", o: ["Baseball", "Basketball", "Rugby union"], n: "In 1975 Roger Staubach won a play-off with a last-second long pass, then said he'd closed his eyes and said a Hail Mary. Now it's any desperate last try."},
    x: {f: "Darts", w: ["oche", "double top", "Robin Hood"], odd: "bunker", n: "A bunker is golf's sand trap. In darts a Robin Hood is a dart that sticks in the back of another."},
    q: {ask: "Lowest to highest value in snooker", i: [["yellow", "2 points"], ["brown", "4 points"], ["pink", "6 points"], ["black", "7 points"]], n: "Reds are 1, green 3 and blue 5. A maximum break, all reds with blacks then the colours, is 147."},
    m: [["scrum", "Rugby union"], ["layup", "Basketball"], ["nutmeg", "Football"], ["kitchen", "Pickleball"]]
  },
  /* Sat */ {
    p: {t: "atari", h: "Stones with only one liberty left, about to be captured.", c: "Go", o: ["Mahjong", "Shogi", "Chess"], n: "A warning a bit like “check”. The games company Atari took its name from it."},
    s: {t: "show someone the ropes", c: "Sailing", o: ["Boxing", "Climbing", "Bell ringing"], n: "New hands on sailing ships had to learn which of dozens of ropes worked which sail."},
    x: {f: "Chess", w: ["fianchetto", "zugzwang", "en passant"], odd: "sente", n: "Sente is from Go: having the initiative, so your opponent has to answer you."},
    q: {ask: "Lowest to highest score in darts", i: [["madhouse", "double 1, so 2"], ["bed and breakfast", "26"], ["ton", "100"], ["maximum", "180"]], n: "Bed and breakfast (20, 5 and 1) is said to be what B&B once cost: two shillings and sixpence."},
    m: [["dogleg", "Golf"], ["break point", "Tennis"], ["sliotar", "Hurling"], ["Fosbury flop", "High jump"]]
  },
  /* Sun */ {
    p: {t: "frogging", h: "Ripping out rows of stitches.", c: "Knitting", o: ["Fly fishing", "Pottery", "Origami"], n: "Because you “rip it, rip it”, which sounds like a frog."},
    s: {t: "hook, line and sinker", c: "Angling", o: ["Sailing", "Archery", "Rock climbing"], n: "A fish so hungry it swallows the lot, not just the bait. So someone fooled completely."},
    x: {f: "Birdwatching", w: ["dip", "LBJ", "lifer"], odd: "meeple", n: "A meeple is a little wooden board-game person. In birding a dip is missing the bird, an LBJ is a little brown job and a lifer is your first ever sighting of a species."},
    q: {ask: "Weakest to strongest rank in Go", i: [["10 kyu", "beginner"], ["1 kyu", "strong club player"], ["1 dan", "first master grade"], ["9 dan", "top professional"]], n: "Kyu grades count down as you improve; dan grades count up."},
    m: [["barrel", "Surfing"], ["ollie", "Skateboarding"], ["crimp", "Climbing"], ["peal", "Bell ringing"]]
  },
  /* ---------- Week 2 ---------- */
  /* Mon */ {
    p: {t: "pick six", h: "An interception run back for a touchdown.", c: "American football", o: ["Rugby league", "Aussie rules", "Lacrosse"], n: "An interception is a “pick”, and a touchdown is worth six points."},
    s: {t: "stalemate", c: "Chess", o: ["Draughts", "Bridge", "Go"], n: "A player who can't move but isn't in check: the game is drawn. Now any deadlock."},
    x: {f: "Snooker", w: ["plant", "cannon", "spider"], odd: "bias", n: "Bias is from bowls: the weighting that makes a bowl curve. In snooker a spider is a long-legged rest."},
    q: {ask: "Lowest to highest loft on a golf club", i: [["driver", "about 10°"], ["3-wood", "about 15°"], ["5-iron", "about 25°"], ["pitching wedge", "about 45°"]], n: "More loft sends the ball higher and shorter."},
    m: [["silly mid-off", "Cricket"], ["Gordie Howe hat trick", "Ice hockey"], ["turkey", "Ten-pin bowling"], ["birdie", "Badminton"]]
  },
  /* Tue */ {
    p: {t: "nutmeg", h: "Putting the ball through an opponent's legs.", c: "Football", o: ["Cricket", "Tennis", "Golf"], n: "Nobody's sure why. One theory links it to tricks in the old nutmeg trade, making a fool of someone."},
    s: {t: "step up to the plate", c: "Baseball", o: ["Cricket", "Golf", "Darts"], n: "The batter steps up to home plate to face the pitcher. Now taking on a responsibility."},
    x: {f: "Golf", w: ["the beach", "worm burner", "son-in-law"], odd: "dead rubber", n: "A dead rubber is a match played after a series is already decided, in tennis, cricket and more. In golf the beach is a bunker, a worm burner skims along the grass, and a son-in-law is a shot that's not what you wanted, but you'll take it."},
    q: {ask: "Lightest to heaviest boxing weight", i: [["flyweight", "up to 8 st"], ["bantamweight", "up to 8 st 6 lb"], ["featherweight", "up to 9 st"], ["lightweight", "up to 9 st 9 lb"]], n: "Professional limits; there are “super” and “light” divisions in between."},
    m: [["Garryowen", "Rugby union"], ["jaffa", "Cricket"], ["power forward", "Basketball"], ["peloton", "Cycling"]]
  },
  /* Wed */ {
    p: {t: "leaving chicken on the bone", h: "Not finishing the job, so there's an awkward bit left.", c: "Golf", o: ["Darts", "Snooker", "Bowls"], n: "Said when a putt stops short of a tap-in, leaving a tricky one still to hole. Like a plate sent back with meat still on it."},
    s: {t: "down to the wire", c: "Horse racing", o: ["Athletics", "Cycling", "Motor racing"], n: "American racecourses once strung a wire above the finish line, so a race decided at the very end went down to the wire."},
    x: {f: "Basketball", w: ["and-one", "triple-double", "brick"], odd: "fly-half", n: "A fly-half plays rugby. In basketball a brick is a clumsy miss, and an and-one is a basket scored while fouled, plus a free throw."},
    q: {ask: "Fewest to most points in American football", i: [["extra point", "1"], ["safety", "2"], ["field goal", "3"], ["touchdown", "6"]], n: "A two-point conversion can replace the extra kick after a touchdown."},
    m: [["bed and breakfast", "Darts"], ["fore", "Golf"], ["maiden", "Cricket"], ["keirin", "Cycling"]]
  },
  /* Thu */ {
    p: {t: "right club", h: "A cheeky compliment when the pace was perfect but the aim wasn't.", c: "Golf", o: ["Bowls", "Snooker", "Curling"], n: "Said when a putt is struck just hard enough but sails past on the wrong line. Only the club choice gets any praise."},
    s: {t: "jump the gun", c: "Athletics", o: ["Shooting", "Horse racing", "Motor racing"], n: "Leaving before the starting pistol fires."},
    x: {f: "Rugby", w: ["scrum", "line-out", "up-and-under"], odd: "behind", n: "A behind is Aussie rules: one point for missing between the big posts but going through the small ones."},
    q: {ask: "Shortest to longest form of cricket", i: [["The Hundred", "100 balls an innings"], ["T20", "120 balls"], ["One-Day International", "300 balls"], ["Test", "up to five days"]], n: "A Test innings has no ball limit."},
    m: [["chukka", "Polo"], ["hole in one", "Golf"], ["full house", "Poker"], ["cox", "Rowing"]]
  },
  /* Fri */ {
    w: [{t: "The greatest comeback since Lazarus!", c: "Sid Waddell", o: ["Murray Walker", "John Motson", "Peter Alliss"], n: "Sid Waddell, a history graduate who loved a grand comparison."},
        {t: "Oh, I say!", c: "Dan Maskell", o: ["Peter Alliss", "Ted Lowe", "Murray Walker"], n: "Dan Maskell, the BBC's voice of Wimbledon from 1951 to 1991, saved it for a really special shot."}],
    p: {t: "kong", h: "A set of four identical tiles.", c: "Mahjong", o: ["Dominoes", "Scrabble", "Rummikub"], n: "Three of a kind is a pung, and a run of three is a chow."},
    s: {t: "a sticky wicket", c: "Cricket", o: ["Croquet", "Golf", "Baseball"], n: "A pitch drying out after rain made the ball do unpredictable things. So a tricky spot."},
    x: {f: "Ice hockey", w: ["icing", "biscuit", "slapshot"], odd: "southpaw", n: "Southpaw (a left-hander) comes from baseball and is now mostly used in boxing. In hockey the biscuit is the puck."},
    q: {ask: "Smallest to biggest bet, in British slang", i: [["pony", "£25"], ["ton", "£100"], ["monkey", "£500"], ["bag of sand", "£1,000"]], n: "Bag of sand is rhyming slang for grand."},
    m: [["Texas Leaguer", "Baseball"], ["goofy foot", "Surfing"], ["waza-ari", "Judo"], ["en garde", "Fencing"]]
  },
  /* Sat */ {
    p: {t: "taxi!", h: "Shouted as a ball races past its target and keeps going.", c: "Golf", o: ["Bowls", "Curling", "Snooker"], n: "Yelled as a putt zips past the hole: it's going so far it'll need a cab. Cruel, and very satisfying when it's your opponent's."},
    s: {t: "skating on thin ice", c: "Ice skating", o: ["Curling", "Skiing", "Sledging"], n: "Taking a big risk, as skaters on thin ice do."},
    x: {f: "Go", w: ["ko", "gote", "joseki"], odd: "pung", n: "A pung is three of a kind in mahjong. In Go, joseki are standard opening sequences in a corner."},
    q: {ask: "Lowest to highest shirt number in rugby union", i: [["loosehead prop", "1"], ["hooker", "2"], ["scrum-half", "9"], ["full-back", "15"]], n: "Forwards wear 1 to 8, backs 9 to 15."},
    m: [["skip", "Curling"], ["LBW", "Cricket"], ["slam dunk", "Basketball"], ["pit stop", "Motor racing"]]
  },
  /* Sun */ {
    p: {t: "twitcher", h: "Someone who rushes off to see rare birds.", c: "Birdwatching", o: ["Falconry", "Angling", "Orienteering"], n: "The name is said to come from the nervous state of one 1950s birder on his trips."},
    s: {t: "pass the buck", c: "Poker", o: ["Bridge", "Croquet", "Horse racing"], n: "A marker, often a buckhorn-handled knife, showed whose turn it was to deal. Passing it passed the job on."},
    x: {f: "Knitting", w: ["purl", "cast on", "tink"], odd: "crimp", n: "A crimp is a tiny climbing hold. Tink is “knit” backwards: undoing stitches one at a time."},
    q: {ask: "Fewest to most bells, in bell ringing", i: [["Minimus", "4 bells"], ["Doubles", "5 bells"], ["Minor", "6 bells"], ["Major", "8 bells"]], n: "Triples is 7 bells, and Royal 10."},
    m: [["muggle", "Geocaching"], ["beta", "Climbing"], ["leather-hard", "Pottery"], ["dummy", "Bridge"]]
  },
  /* ---------- Week 3 ---------- */
  /* Mon */ {
    p: [{t: "red zone", h: "The last 20 yards before the end zone.", c: "American football", o: ["Rugby league", "Ice hockey", "Lacrosse"], n: "Inside the opponent's 20-yard line, where scoring chances are best. Teams are judged on how often they score from there."},
        {t: "up the chimney", h: "When the ball goes almost straight up into the sky.", c: "Cricket", o: ["Baseball", "Tennis", "Rounders"], n: "A top edge that sends the ball skywards, leaving some poor fielder a long, nervous wait underneath it."}],
    s: {t: "throw in the towel", c: "Boxing", o: ["Swimming", "Tennis", "Cricket"], n: "A boxer's corner throws a towel into the ring to stop the fight. Now giving up on anything."},
    x: {f: "Tennis", w: ["tweener", "moonball", "foot fault"], odd: "fried egg", n: "A fried egg is golf: a ball half-buried in a bunker. A tweener is a tennis shot hit between the legs."},
    q: {ask: "Lowest to highest point score in a game of tennis", i: [["love", "0"], ["fifteen", "1 point"], ["thirty", "2 points"], ["forty", "3 points"]], n: "Nobody's sure why. One idea is a clock face, with 45 later shortened to 40. “Love” may come from “nothing”, as in playing for love."},
    m: [["buzzer-beater", "Basketball"], ["catch a crab", "Rowing"], ["follow-on", "Cricket"], ["telemark", "Skiing"]]
  },
  /* Tue */ {
    p: [{t: "cant", h: "Chanting the game's name, in one breath, while you raid.", c: "Kabaddi", o: ["Sepak takraw", "Polo", "Cricket"], n: "Traditionally a raider chants “kabaddi, kabaddi” to show they're still holding one breath. Stop chanting and you're out."},
        {t: "chogey", h: "Throwing away a great chance and dropping a shot.", c: "Golf", o: ["Darts", "Snooker", "Tennis"], n: "A choke and a bogey rolled into one, like three-putting from 20 feet when you were looking at a birdie."}],
    s: {t: "touché", c: "Fencing", o: ["Tennis", "Chess", "Rugby union"], n: "French for “touched”: what a fencer says on being hit. Now an admission that someone's made a good point."},
    x: {f: "Cricket", w: ["Nelson", "rabbit", "a pair"], odd: "Brooklyn", n: "A Brooklyn is ten-pin bowling: hitting the pocket on the wrong side. In cricket a pair is two ducks in one match, a rabbit is a hopeless batter, and Nelson is a score of 111."},
    q: {ask: "Cheapest to dearest on a London Monopoly board", i: [["Old Kent Road", "£60"], ["The Angel Islington", "£100"], ["Pall Mall", "£140"], ["Mayfair", "£400"]], n: "Prices from the classic UK board."},
    m: [["empty-netter", "Ice hockey"], ["Cruyff turn", "Football"], ["eggbeater", "Water polo"], ["hoop", "Croquet"]]
  },
  /* Wed */ {
    p: {t: "nice catch", h: "A sly dig when a ball only just drops in.", c: "Golf", o: ["Cricket", "Baseball", "Rounders"], n: "Said to a golfer whose putt barely toppled over the lip, as if the hole caught it. Best used when there's a little money on the round."},
    s: {t: "a dark horse", c: "Horse racing", o: ["Chess", "Polo", "Poker"], n: "A little-known horse that surprises everyone. Benjamin Disraeli used it in an 1831 novel."},
    x: {f: "Baseball", w: ["hot corner", "Baltimore chop", "Uncle Charlie"], odd: "checkside", n: "A checkside is an Aussie rules kick that curls off the outside of the boot. Uncle Charlie is a curveball, and the hot corner is third base."},
    q: {ask: "First to last on day one of a decathlon", i: [["100 m", "event 1"], ["long jump", "event 2"], ["shot put", "event 3"], ["high jump", "event 4"]], n: "Day one ends with the 400 m. Day two is 110 m hurdles, discus, pole vault, javelin and 1500 m."},
    m: [["crosse", "Lacrosse"], ["kickflip", "Skateboarding"], ["no-trump", "Bridge"], ["Yurchenko", "Gymnastics"]]
  },
  /* Thu */ {
    p: {t: "red lipstick", h: "A nickname for the most popular target there is.", c: "Darts", o: ["Archery", "Snooker", "Bowls"], n: "Double 20, the red band at the very top of the board. Sid Waddell made it famous, usually at full volume."},
    s: {t: "knocked for six", c: "Cricket", o: ["Baseball", "Boxing", "Golf"], n: "Hitting the ball over the boundary without a bounce scores six. Being knocked for six is being hit hard by bad news."},
    x: {f: "Football", w: ["rabona", "offside trap", "VAR"], odd: "penhold", n: "Penhold is a table tennis grip. A rabona is a kick with your leg wrapped behind your standing one."},
    q: {ask: "Earliest to latest in the men's golf year", i: [["The Masters", "April"], ["PGA Championship", "May"], ["US Open", "June"], ["The Open", "July"]], n: "Together they're golf's four majors."},
    m: [["chicane", "Motor racing"], ["flick serve", "Badminton"], ["blindside", "Rugby union"], ["uchi mata", "Judo"]]
  },
  /* Fri */ {
    w: [{t: "The atmosphere is so tense, if Elvis walked in with a portion of chips, you could hear the vinegar sizzle on them.", c: "Sid Waddell", o: ["Ted Lowe", "Peter Alliss", "Kenneth Wolstenholme"], n: "Sid Waddell, setting the scene at the oche."},
        {t: "They think it's all over… it is now!", c: "Kenneth Wolstenholme", o: ["John Motson", "David Coleman", "Murray Walker"], n: "Kenneth Wolstenholme, as Geoff Hurst scored England's fourth goal in the 1966 World Cup final, with fans already spilling on to the pitch."}],
    p: {t: "flèche", h: "A running attack, launched in one burst.", c: "Fencing", o: ["Archery", "Ballet", "Gymnastics"], n: "French for “arrow”. It's been banned in sabre since 1994."},
    s: {t: "move the goalposts", c: "Football", o: ["Golf", "Tennis", "Cricket"], n: "Changing the rules or target halfway through, as if the goal had been shifted mid-match."},
    x: {f: "American football", w: ["audible", "blitz", "end zone"], odd: "the T", n: "The T is the spot in the middle of a squash court. An audible is a quarterback changing the play at the line."},
    q: {ask: "Corner to centre on White's back row, starting on the queen's side", i: [["rook", "a1"], ["knight", "b1"], ["bishop", "c1"], ["queen", "d1"]], n: "“Queen on her own colour”: the white queen starts on a light square."},
    m: [["maillot jaune", "Cycling"], ["seven-metre throw", "Handball"], ["tokin", "Shogi"], ["the going", "Horse racing"]]
  },
  /* Sat */ {
    p: {t: "golden set", h: "Winning a set without losing a single point.", c: "Tennis", o: ["Volleyball", "Darts", "Squash"], n: "Yaroslava Shvedova played one at Wimbledon in 2012, the first at a Grand Slam in the Open era."},
    s: [{t: "go to the mat", c: "Wrestling", o: ["Judo", "Yoga", "Gymnastics"], n: "To fight hard for something, like wrestlers grappling it out on the mat."},
        {t: "the corridor of uncertainty", c: "Cricket", o: ["Tennis", "Archery", "Bowls"], n: "The narrow line just outside off stump, where a batter can't decide whether to play or leave. Geoffrey Boycott made it famous; now it's any awkward grey area."}],
    x: {f: "Golf", w: ["gimme", "Texas wedge", "tee"], odd: "baulk", n: "Baulk is snooker: the end of the table you break from. A Texas wedge is a putter used from off the green."},
    q: {ask: "Weakest to strongest poker hand", i: [["one pair", "two cards of a rank"], ["straight", "five in a row"], ["flush", "five of one suit"], ["full house", "three plus a pair"]], n: "Above a full house come four of a kind, a straight flush and the royal flush."},
    m: [["Sicilian", "Chess"], ["duck dive", "Surfing"], ["wood", "Bowls"], ["TKO", "Boxing"]]
  },
  /* Sun */ {
    p: [{t: "gricer", h: "A dedicated railway enthusiast.", c: "Trainspotting", o: ["Birdwatching", "Plane spotting", "Ham radio"], n: "Nobody's quite sure where it comes from. One theory links it to grouse shooting."},
        {t: "cover the queen", h: "What you must do straight after sinking the red piece.", c: "Carrom", o: ["Snooker", "Draughts", "Chess"], n: "In carrom, the red queen only counts if you pocket one of your own carrom men right after it. Fail, and she goes back to the centre."}],
    s: {t: "level pegging", c: "Cribbage", o: ["Golf", "Croquet", "Darts"], n: "Cribbage scores are kept with pegs on a board, so level pegging means neck and neck."},
    x: {f: "Knitting", w: ["stash", "UFO", "swatch"], odd: "fat quarter", n: "A fat quarter is a quilter's piece of fabric. To knitters a UFO is an unfinished object."},
    q: {ask: "Finest to thickest knitting yarn", i: [["lace", "the finest"], ["4-ply", "sock weight"], ["double knitting", "DK, the all-rounder"], ["chunky", "quick to knit"]], n: "Beyond chunky comes super chunky."},
    m: [["bokeh", "Photography"], ["chitting", "Gardening"], ["proving", "Baking"], ["plié", "Ballet"]]
  },
  /* ---------- Week 4 ---------- */
  /* Mon */ {
    p: [{t: "posterize", h: "Dunking over a defender so hard it belongs on a poster.", c: "Basketball", o: ["Volleyball", "Netball", "Handball"], n: "The defender ends up as the unlucky background on someone's bedroom wall."},
        {t: "double teapot", h: "Standing with both hands on hips, fed up.", c: "Cricket", o: ["Darts", "Snooker", "Tennis"], n: "Elbows out like two teapot handles: the classic pose of a bowler after a dropped catch or a ball that just beat the bat."}],
    s: {t: "the ball's in your court", c: "Tennis", o: ["Football", "Golf", "Cricket"], n: "Your opponent has hit it to your side, so now it's your move."},
    x: {f: "Rugby league", w: ["dummy half", "play-the-ball", "State of Origin"], odd: "lineout", n: "Lineouts belong to rugby union; league has none. State of Origin is New South Wales against Queensland."},
    q: {ask: "Lowest to highest traditional shirt number in football", i: [["goalkeeper", "1"], ["right-back", "2"], ["centre-half", "5"], ["centre-forward", "9"]], n: "From the days when the starting eleven wore 1 to 11 by position."},
    m: [["walk-off", "Baseball"], ["solo", "Gaelic football"], ["nick", "Squash"], ["épée", "Fencing"]]
  },
  /* Tue */ {
    p: [{t: "ferret", h: "A batter even worse than a rabbit, sent in after them.", c: "Cricket", o: ["Baseball", "Rounders", "Croquet"], n: "A ferret “goes in after the rabbits”, so it's the very last batter, usually a hopeless one."},
        {t: "cow corner", h: "Where the wildest slogs tend to land.", c: "Cricket", o: ["Baseball", "Golf", "Rounders"], n: "Deep midwicket for a right-handed batter. The name is usually linked to a field with grazing cows; either way, few textbook shots go there."}],
    s: {t: "turn the tables", c: "Backgammon", o: ["Snooker", "Chess", "Bridge"], n: "Backgammon used to be called tables. Turning them round meant swapping places with your opponent."},
    x: {f: "Ice hockey", w: ["Zamboni", "enforcer", "Stanley Cup"], odd: "the Ashes", n: "The Ashes is cricket's England v Australia series. A Zamboni is the machine that resurfaces the ice."},
    q: {ask: "Shortest to longest British horse race", i: [["Nunthorpe Stakes", "5 furlongs"], ["2,000 Guineas", "1 mile"], ["The Derby", "about 1½ miles"], ["Grand National", "about 4¼ miles"]], n: "A furlong is an eighth of a mile, about 200 metres."},
    m: [["kumite", "Karate"], ["caman", "Shinty"], ["boneyard", "Dominoes"], ["Annie's room", "Darts"]]
  },
  /* Wed */ {
    p: [{t: "lanterne rouge", h: "The rider in last place overall.", c: "Cycling", o: ["Motor racing", "Sailing", "Horse racing"], n: "French for “red lantern”, after the light on the back of a train's last carriage."},
        {t: "do-or-die raid", h: "A must-score attack after two that came back empty-handed.", c: "Kabaddi", o: ["Kho-kho", "Handball", "Rugby league"], n: "After two empty raids in a row, the third raider has to score, or they're out and the defenders get a point."}],
    s: {t: "Monday-morning quarterback", c: "American football", o: ["Baseball", "Basketball", "Ice hockey"], n: "Someone who knows exactly what should have been done, once the weekend's game is over."},
    x: {f: "Golf", w: ["dead sheep", "UBE", "shank"], odd: "jaffa", n: "A jaffa is cricket: an unplayable ball. A dead sheep is a putt left short (still ewe), a UBE is ugly but effective, and a shank flies off sideways from the club's neck."},
    q: {ask: "Lowest to highest suit in bridge", i: [["clubs", "♣"], ["diamonds", "♦"], ["hearts", "♥"], ["spades", "♠"]], n: "No-trumps outranks them all."},
    m: [["shepherd", "Aussie rules"], ["tack", "Sailing"], ["kote", "Kendo"], ["split", "Ten-pin bowling"]]
  },
  /* Thu */ {
    p: {t: "no pictures on the scorecard", h: "Said when an ugly shot still does the job.", c: "Golf", o: ["Darts", "Bowls", "Archery"], n: "The card only counts how many shots you took, not how pretty they were."},
    s: {t: "poker face", c: "Poker", o: ["Bridge", "Chess", "Snooker"], n: "Card players keep a blank face to give nothing away."},
    x: [{f: "Cycling", w: ["domestique", "bonk", "echelon"], odd: "marbles", n: "Marbles are motor racing's bits of tyre rubber off the racing line. A cyclist who bonks has run out of energy."},
        {f: "Kabaddi", w: ["antis", "empty raid", "super tackle"], odd: "pole dive", n: "A pole dive is kho-kho: tagging a runner while gripping one of the poles. In kabaddi, antis are the defenders, an empty raid scores nothing, and a super tackle is stopping a raider with three or fewer defenders left."}],
    q: {ask: "First to last in an individual medley swim", i: [["butterfly", "1st leg"], ["backstroke", "2nd leg"], ["breaststroke", "3rd leg"], ["freestyle", "4th leg"]], n: "In a medley relay the order changes: backstroke goes first, because it starts in the water."},
    m: [["Mankad", "Cricket"], ["hane", "Go"], ["photo finish", "Horse racing"], ["fletching", "Archery"]]
  },
  /* Fri */ {
    w: [{t: "He's about as predictable as a wasp on speed.", c: "Sid Waddell", o: ["Murray Walker", "Peter Alliss", "Ted Lowe"], n: "Sid Waddell, the voice of darts, famous for wild comparisons like this one."},
        {t: "When Alexander of Macedonia was 33, he cried salt tears because there were no more worlds to conquer…", c: "Sid Waddell", o: ["Peter Alliss", "Richie Benaud", "Bill McLaren"], n: "…“Bristow's only 27.” Sid Waddell, as Eric Bristow won his fourth world darts title in 1985."},
        {t: "Start the car!", c: "David Lloyd", o: ["Geoffrey Boycott", "Richie Benaud", "Murray Walker"], n: "David Lloyd, Accrington's own Bumble, bellowed it at decisive moments in the commentary box. It became the title of his book, Start the Car: The World According to Bumble."},
        {t: "That wee ball's gone so high there'll be snow on it when it comes down.", c: "Bill McLaren", o: ["Peter Alliss", "David Lloyd", "Richie Benaud"], n: "Bill McLaren, the BBC's voice of rugby for half a century, and a PE teacher in his home town of Hawick."}],
    p: {t: "box, box", h: "A radio call telling the driver to come in.", c: "Motor racing", o: ["Boxing", "Cycling", "Sailing"], n: "From the German “Boxenstopp” for a pit stop. It's also short and clear over a noisy radio."},
    s: {t: "rain check", c: "Baseball", o: ["Cricket", "Tennis", "Golf"], n: "Fans at a rained-off game got a ticket stub, a rain check, to come back another day."},
    x: [{f: "Chess", w: ["j'adoube", "patzer", "fork"], odd: "tesuji", n: "Tesuji is Go: a clever, sharp move. J'adoube is French for “I adjust”, said when you touch a piece only to straighten it."},
        {f: "Cricket", w: ["shouldering arms", "dolly", "rags"], odd: "mulligan", n: "A mulligan is golf: a free do-over after a bad shot. In cricket, shouldering arms is lifting the bat out of the way to leave a ball, a dolly is an easy catch, and a ball that rags turns sharply."}],
    q: {ask: "Lowest to highest letter value in English Scrabble", i: [["E", "1 point"], ["D", "2 points"], ["K", "5 points"], ["Z", "10 points"]], n: "Q is also worth 10."},
    m: [["rikishi", "Sumo"], ["double fault", "Tennis"], ["gammon", "Backgammon"], ["baton", "Athletics"]]
  },
  /* Sat */ {
    p: [{t: "cochonnet", h: "The little ball everyone aims at.", c: "Pétanque", o: ["Bowls", "Croquet", "Curling"], n: "French for “piglet”. In bowls it would be the jack."},
        {t: "kho", h: "Said while tapping a crouching teammate's back to send them chasing.", c: "Kho-kho", o: ["Kabaddi", "Relay running", "Tag rugby"], n: "The game takes its name from it: kho-kho comes from Marathi, and kho imitates the sound players make as they hand over the chase."}],
    s: [{t: "take the wind out of someone's sails", c: "Sailing", o: ["Gliding", "Golf", "Archery"], n: "Sailing upwind of another boat steals its wind and slows it down."},
        {t: "on the back foot", c: "Cricket", o: ["Fencing", "Tennis", "Ballet"], n: "A batter rocked back to defend against a short ball, instead of stepping forward to attack. So, on the defensive."}],
    x: {f: "Poker", w: ["the nuts", "the river", "tell"], odd: "ruff", n: "A ruff is bridge: trumping a trick. In poker the nuts is the best possible hand and the river is the last card dealt."},
    q: {ask: "Earliest to latest in the cycling year", i: [["Paris–Roubaix", "April"], ["Giro d'Italia", "May"], ["Tour de France", "July"], ["Vuelta a España", "late August"]], n: "The Giro, Tour and Vuelta are cycling's three Grand Tours."},
    m: [["suplex", "Wrestling"], ["shuttlecock", "Badminton"], ["centre pass", "Netball"], ["zwischenzug", "Chess"]]
  },
  /* Sun */ {
    p: [{t: "sally", h: "The striped woollen grip on a rope.", c: "Bell ringing", o: ["Sailing", "Knitting", "Weaving"], n: "Ringers pull the sally on the handstroke and the rope's tail end on the backstroke."},
        {t: "flying general", h: "Two leaders may never face each other along an empty line.", c: "Xiangqi", o: ["Shogi", "Go", "Mahjong"], n: "In Chinese chess, if the two generals stare each other down with nothing in between, one can fly across the board and take the other, so it's never allowed."}],
    s: {t: "life isn't all beer and skittles", c: "Skittles", o: ["Bowls", "Darts", "Shove ha'penny"], n: "Beer and skittles meant an easy, fun time at the pub. Life isn't all that."},
    x: {f: "Birdwatching", w: ["patch", "stringer", "gripped"], odd: "gricer", n: "A gricer is a railway enthusiast. Birders are gripped when someone sees a bird they missed; a stringer claims birds they didn't really see."},
    q: {ask: "Easiest to hardest traditional British climbing grade", i: [["Moderate", "M"], ["Difficult", "D"], ["Very Difficult", "VD"], ["Severe", "S"]], n: "After Severe come Hard Severe, Very Severe and the E grades. The names have aged oddly."},
    m: [["amigurumi", "Crochet"], ["bisque", "Pottery"], ["TFTC", "Geocaching"], ["speedrun", "Video games"]]
  },
  /* ---------- Week 5 ---------- */
  /* Mon */ {
    p: [{t: "Panenka", h: "A penalty chipped gently down the middle.", c: "Football", o: ["Rugby union", "Hockey", "Water polo"], n: "Named after Antonín Panenka, who won Czechoslovakia the 1976 European Championship with one."},
        {t: "military medium", h: "Steady, honest pace with nothing to frighten anyone.", c: "Cricket", o: ["Baseball", "Tennis", "Ten-pin bowling"], n: "Medium-pace bowling that's accurate but unthreatening, as regular as soldiers on parade. The more “military” it is, the gentler it gets."}],
    s: {t: "a slam dunk", c: "Basketball", o: ["Volleyball", "Tennis", "Baseball"], n: "A shot that can't miss, so something certain to succeed."},
    x: {f: "Volleyball", w: ["pancake", "dig", "libero"], odd: "tekong", n: "The tekong serves in sepak takraw, Southeast Asia's kick volleyball. A pancake is a save with your hand flat on the floor."},
    q: {ask: "Earliest to latest men's football World Cup host", i: [["England", "1966"], ["Mexico", "1986"], ["Japan and South Korea", "2002"], ["Qatar", "2022"]], n: "2002 was the first World Cup shared by two countries."},
    m: [["raider", "Kabaddi"], ["seventh-inning stretch", "Baseball"], ["box kick", "Rugby union"], ["Fair Isle", "Knitting"]]
  },
  /* Tue */ {
    p: [{t: "a cup of coffee", h: "A brief spell in the top league before being sent back down.", c: "Baseball", o: ["Cricket", "Rugby union", "Golf"], n: "Just long enough to drink a cup of coffee."},
        {t: "roll spike", h: "A mid-air flip that kicks the ball over your own shoulder.", c: "Sepak takraw", o: ["Volleyball", "Football", "Capoeira"], n: "Sepak takraw is volleyball played with the feet. Its name joins Malay sepak, “kick”, and Thai takraw, a woven rattan ball."}],
    s: {t: "an opening gambit", c: "Chess", o: ["Poker", "Bridge", "Fencing"], n: "A gambit is an opening that gives up a pawn for an advantage, from an Italian word for tripping someone up."},
    x: [{f: "Bridge", w: ["finesse", "rubber", "slam"], odd: "muggins", n: "Muggins is a cribbage rule: if you miss points, your opponent can claim them. In bridge a rubber is a best-of-three set of games."},
        {f: "Golf", w: ["sandy", "chili dip", "quality miss"], odd: "nurdle", n: "To nurdle is cricket: nudging the ball into a gap for a single. In golf a sandy is getting up and down from a bunker, a chili dip is a chip hit fat, and a quality miss is a bad strike that ends up somewhere good."}],
    q: {ask: "Earliest to latest Summer Olympics", i: [["Seoul", "1988"], ["Sydney", "2000"], ["Beijing", "2008"], ["Paris", "2024"]], n: "Los Angeles is next, in 2028."},
    m: [["quarterback sneak", "American football"], ["hurley", "Hurling"], ["riposte", "Fencing"], ["all in", "Poker"]]
  },
  /* Wed */ {
    p: [{t: "riichi", h: "Declaring you're one tile away from winning.", c: "Mahjong", o: ["Shogi", "Go", "Bridge"], n: "In Japanese mahjong you bet a 1,000-point stick on it, and can't change your hand after."},
        {t: "TFC", h: "A mock award for someone who contributed nothing all match.", c: "Cricket", o: ["Football", "Rugby union", "Hockey"], n: "“Thanks for coming.” In club cricket it goes to a player who didn't bat, didn't bowl and didn't take a catch."}],
    s: {t: "at full tilt", c: "Jousting", o: ["Horse racing", "Fencing", "Archery"], n: "To tilt was to charge at an opponent with a lance. Full tilt was a charge at top speed."},
    x: {f: "Croquet", w: ["roquet", "peel", "pegging out"], odd: "toucher", n: "A toucher is a bowl that touches the jack. In croquet a roquet is hitting another ball with yours."},
    q: {ask: "Shortest to longest odds at the bookies", i: [["1/2", "odds-on"], ["evens", "double your money"], ["5/1", "a decent chance"], ["100/1", "a rank outsider"]], n: "At odds-on you win less than you stake."},
    m: [["the 19th hole", "Golf"], ["gutter ball", "Ten-pin bowling"], ["six again", "Rugby league"], ["valley fold", "Origami"]]
  },
  /* Thu */ {
    p: [{t: "blot", h: "A single piece left alone on a point, open to attack.", c: "Backgammon", o: ["Draughts", "Dominoes", "Chess"], n: "Hit a blot and it goes back to the bar to start again."},
        {t: "chapandaz", h: "A master rider in a rough, centuries-old contest.", c: "Buzkashi", o: ["Polo", "Horse racing", "Show jumping"], n: "A buzkashi player. The name means “goat grabbing”: it's Afghanistan's national sport, a bit like polo, with a goat carcass instead of a ball."}],
    s: [{t: "follow suit", c: "Card games", o: ["Darts", "Horse racing", "Sailing"], n: "In whist and bridge you must play a card of the suit that was led if you can. Now doing what others have just done."},
        {t: "never up, never in", c: "Golf", o: ["Darts", "Snooker", "Bowls"], n: "A putt that stops short of the hole can never drop. Now said of any attempt that's too timid to succeed."}],
    x: {f: "Sumo", w: ["kinboshi", "mono-ii", "chonmage"], odd: "shinai", n: "A shinai is kendo's bamboo sword. A kinboshi (gold star) is won by beating a yokozuna from the ranks; a chonmage is the topknot."},
    q: {ask: "Centre to edge of an archery target", i: [["gold", "10 and 9"], ["red", "8 and 7"], ["blue", "6 and 5"], ["black", "4 and 3"]], n: "The outer ring is white, worth 2 and 1."},
    m: [["chin music", "Cricket"], ["intarsia", "Knitting"], ["the wall", "Mahjong"], ["slalom", "Skiing"]]
  },
  /* Fri */ {
    w: [{t: "Unless I'm very much mistaken… I AM very much mistaken!", c: "Murray Walker", o: ["Sid Waddell", "John Motson", "Dan Maskell"], n: "Murray Walker, the voice of Formula 1, put himself right mid-sentence. “Unless I'm Very Much Mistaken” became the title of his autobiography."},
        {t: "I reckon my mum could have caught that in her pinny!", c: "Geoffrey Boycott", o: ["David Lloyd", "Richie Benaud", "Peter Alliss"], n: "Geoffrey Boycott, after Australia's Shane Watson dropped a catch in 2014. A pinny is an apron."},
        {t: "Those props are as cunning as a bag o' weasels.", c: "Bill McLaren", o: ["Sid Waddell", "Geoffrey Boycott", "Peter Alliss"], n: "Bill McLaren, the voice of rugby, on the front-row forwards. His other famous line: “They'll be dancing in the streets tonight.”"}],
    p: {t: "boast", h: "A shot hit into a side wall first.", c: "Squash", o: ["Tennis", "Badminton", "Table tennis"], n: "The ball angles off the side wall to the front, often catching an opponent at the back."},
    s: {t: "stumped", c: "Cricket", o: ["Baseball", "Chess", "Golf"], n: "A batter out of their ground is stumped when the keeper breaks the wicket. Now completely baffled."},
    x: {f: "Skiing", w: ["mogul", "schuss", "piste"], odd: "kook", n: "A kook is a surfing beginner. A schuss is skiing straight down at full speed."},
    q: {ask: "Order of the round winds in mahjong", i: [["East", "1st round"], ["South", "2nd round"], ["West", "3rd round"], ["North", "4th round"]], n: "Not the order on a compass: going anticlockwise round a mahjong table, east is followed by south."},
    m: [["send", "Climbing"], ["furlong", "Horse racing"], ["sin bin", "Rugby league"], ["tumble turn", "Swimming"]]
  },
  /* Sat */ {
    p: {t: "Bingo Bango Bongo", h: "A side game with three points up for grabs each time.", c: "Golf", o: ["Croquet", "Bowls", "Darts"], n: "Bingo for first onto the green, bango for closest to the pin once everyone's on, bongo for first in the hole. Playing order counts as much as skill, so anyone can pick up points."},
    s: {t: "neck and neck", c: "Horse racing", o: ["Motor racing", "Rowing", "Athletics"], n: "Two horses so close their necks are level."},
    x: {f: "Basketball", w: ["airball", "sixth man", "swish"], odd: "cradle", n: "Cradling is lacrosse: rocking the stick to keep the ball in its net. An airball misses everything, rim included."},
    q: {ask: "Closest to furthest from the batter, in cricket", i: [["silly point", "almost on the bat"], ["gully", "close catcher"], ["cover", "saving one"], ["long-off", "on the boundary"]], n: "“Silly” fielders stand near enough to be in real danger."},
    m: [["pike", "Diving"], ["rope-a-dope", "Boxing"], ["no-ball", "Cricket"], ["gybe", "Sailing"]]
  },
  /* Sun */ {
    p: {t: "wedging", h: "Kneading clay to push out the air bubbles.", c: "Pottery", o: ["Baking", "Gardening", "Woodwork"], n: "Trapped air can make a pot crack or burst in the kiln."},
    s: {t: "the one that got away", c: "Angling", o: ["Hunting", "Horse racing", "Birdwatching"], n: "Every angler has a story about a huge fish that slipped the hook. Now any lost chance."},
    x: {f: "Crosswords", w: ["setter", "anagrind", "nina"], odd: "bingo", n: "A bingo is Scrabble: using all seven tiles in one go. An anagrind is a word that signals an anagram; a nina is a message hidden in the grid."},
    q: {ask: "Widest to narrowest lens opening in photography", i: [["f/2", "widest"], ["f/4", "wide"], ["f/8", "narrow"], ["f/16", "narrowest"]], n: "Bigger numbers mean smaller openings, letting in less light."},
    m: [["pishing", "Birdwatching"], ["touch", "Bell ringing"], ["downward dog", "Yoga"], ["respawn", "Video games"]]
  }
];
