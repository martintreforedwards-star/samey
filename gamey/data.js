// Gamey puzzles, by day of the week (Monday first). Sunday is hobbies and pastimes.
// DAYS is a run of whole weeks; the game picks today's weekday, cycling through the weeks.
// Five rounds a day:
//   p = "Which pursuit?"   t = the term, h = a short clue, c = the right pursuit, o = three wrong ones, n = note shown after
//   s = "Where's it from?" t = an everyday saying, c = the pursuit it came from, o = three wrong ones, n = note
//   x = "Odd one out"      w = three terms from one pursuit (named in f), odd = the interloper, n = note
//   q = "Put in order"     ask = what to order by, i = [term, value] pairs in the RIGHT order, n = note
//   m = "Match them"       four [term, pursuit] pairs
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
    p: {t: "henka", h: "Stepping aside at the charge so your opponent stumbles.", c: "Sumo", o: ["Judo", "Kendo", "Karate"], n: "Perfectly legal, but frowned on, especially from a yokozuna."},
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
    x: {f: "Sumo", w: ["dohyo", "mawashi", "kachi-koshi"], odd: "tatami", n: "Tatami mats are for judo. Sumo is fought on a dohyo, a raised ring of clay. Kachi-koshi is a winning record in a tournament."},
    q: {ask: "Lightest to heaviest boxing weight", i: [["flyweight", "up to 8 st"], ["bantamweight", "up to 8 st 6 lb"], ["featherweight", "up to 9 st"], ["lightweight", "up to 9 st 9 lb"]], n: "Professional limits; there are “super” and “light” divisions in between."},
    m: [["Garryowen", "Rugby union"], ["jaffa", "Cricket"], ["power forward", "Basketball"], ["peloton", "Cycling"]]
  },
  /* Wed */ {
    p: {t: "hammer", h: "Having the last stone of an end.", c: "Curling", o: ["Bowls", "Pétanque", "Snooker"], n: "A big advantage, since nobody can knock your last stone away."},
    s: {t: "down to the wire", c: "Horse racing", o: ["Athletics", "Cycling", "Motor racing"], n: "American racecourses once strung a wire above the finish line, so a race decided at the very end went down to the wire."},
    x: {f: "Basketball", w: ["and-one", "triple-double", "brick"], odd: "fly-half", n: "A fly-half plays rugby. In basketball a brick is a clumsy miss, and an and-one is a basket scored while fouled, plus a free throw."},
    q: {ask: "Fewest to most points in American football", i: [["extra point", "1"], ["safety", "2"], ["field goal", "3"], ["touchdown", "6"]], n: "A two-point conversion can replace the extra kick after a touchdown."},
    m: [["bed and breakfast", "Darts"], ["fore", "Golf"], ["maiden", "Cricket"], ["keirin", "Cycling"]]
  },
  /* Thu */ {
    p: {t: "bagel", h: "Winning a set six games to love.", c: "Tennis", o: ["Squash", "Badminton", "Darts"], n: "The 0 looks like a bagel. Win 6–1 and it's a breadstick."},
    s: {t: "jump the gun", c: "Athletics", o: ["Shooting", "Horse racing", "Motor racing"], n: "Leaving before the starting pistol fires."},
    x: {f: "Rugby", w: ["scrum", "line-out", "up-and-under"], odd: "behind", n: "A behind is Aussie rules: one point for missing between the big posts but going through the small ones."},
    q: {ask: "Shortest to longest form of cricket", i: [["The Hundred", "100 balls an innings"], ["T20", "120 balls"], ["One-Day International", "300 balls"], ["Test", "up to five days"]], n: "A Test innings has no ball limit."},
    m: [["chukka", "Polo"], ["hole in one", "Golf"], ["full house", "Poker"], ["cox", "Rowing"]]
  },
  /* Fri */ {
    p: {t: "kong", h: "A set of four identical tiles.", c: "Mahjong", o: ["Dominoes", "Scrabble", "Rummikub"], n: "Three of a kind is a pung, and a run of three is a chow."},
    s: {t: "a sticky wicket", c: "Cricket", o: ["Croquet", "Golf", "Baseball"], n: "A pitch drying out after rain made the ball do unpredictable things. So a tricky spot."},
    x: {f: "Ice hockey", w: ["icing", "biscuit", "slapshot"], odd: "southpaw", n: "Southpaw (a left-hander) comes from baseball and is now mostly used in boxing. In hockey the biscuit is the puck."},
    q: {ask: "Smallest to biggest bet, in British slang", i: [["pony", "£25"], ["ton", "£100"], ["monkey", "£500"], ["bag of sand", "£1,000"]], n: "Bag of sand is rhyming slang for grand."},
    m: [["Texas Leaguer", "Baseball"], ["goofy foot", "Surfing"], ["waza-ari", "Judo"], ["en garde", "Fencing"]]
  },
  /* Sat */ {
    p: {t: "hang ten", h: "Riding with all ten toes over the nose of the board.", c: "Surfing", o: ["Rowing", "Sailing", "Diving"], n: "A classic longboard move from the 1950s and 60s."},
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
  }
];
