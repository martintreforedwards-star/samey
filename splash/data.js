// Splash: a daily game of newspaper headlines. 5 rounds a day (Sunday adds a 6th, Stop press); DAYS run Monday first.
// Round types (t):
//   pun  = hold the front page: fill the missing word (q has ___)
//   hl   = headlinese: what does it mean in plain English?
//   cb   = crash blossom: what did the paper actually mean?
//   who  = whose splash? which paper ran it?
//   real = real or fake? only one of these ran in a local paper
//   ord  = Sunday's Stop press: put them in date order (o is in the right order, y = years)
// Options: answer first (o[0]); the game shuffles them.
// Sourcing: famous splashes checked against reporting of them. The headlinese examples and the fake local
// headlines were written for the game. "Real" local headlines are from the 2023 Readly poll of favourite local
// headlines and a BBC piece celebrating local news. Crash blossoms other than the JAL one are classics whose first
// printing is hard to trace, and the explainers say so.

const LABEL = { pun:"Hold the front page", hl:"Headlinese", cb:"Crash blossom", who:"Whose splash?", real:"Real or fake?", ord:"Stop press" };

const DAYS = [
  // ===== Week 1 =====
  // Mon
  [ {t:"pun", q:"FREDDIE STARR ATE MY ___", o:["HAMSTER","GERBIL","BUDGIE","GOLDFISH"], why:"The Sun, March 1986. The story wasn't true, but it's still the paper's most famous headline."},
    {t:"hl", q:"PM SLAMS PROBE BID", o:["The prime minister strongly criticises an attempt to start an investigation","The prime minister shuts the door on a science project","The prime minister wins an auction for a space probe","The prime minister bids to join an inquiry"], why:"Slam = criticise, probe = investigation, bid = attempt. Short words fit narrow columns."},
    {t:"cb", q:"VIOLINIST LINKED TO JAL CRASH BLOSSOMS", o:["A violinist whose father died in a 1985 JAL crash has a flourishing career","Police link a violinist to flowers left at a crash site","A violinist is blamed for an air crash","JAL names a new aircraft colour scheme Crash Blossoms"], why:"Japan Today, 2009. Copy editors online wondered what a crash blossom was, and the headline gave the whole genre its name."},
    {t:"who", q:"HEADLESS BODY IN TOPLESS BAR", o:["New York Post","The Sun","Daily Star","New York Daily News"], why:"15 April 1983, written by Vincent Musetto. Staff had to check that the Queens bar really was topless before it ran."},
    {t:"real", q:"Only one of these really ran in a local paper. Which?", o:["PANIC AS MAN BURNS CRUMPETS","VICAR'S FURY AT ROGUE MARROW","BIN LORRY ENDS UP IN DUCK POND AGAIN"], why:"Real. It made a 2023 poll of the UK's favourite local headlines."} ],
  // Tue
  [ {t:"pun", q:"SWEDES 2 ___ 1", o:["TURNIPS","CARROTS","SPROUTS","LEEKS"], why:"The Sun, 18 June 1992, after England lost to Sweden at Euro 92. Graham Taylor's head was mocked up as a turnip."},
    {t:"hl", q:"COUNCIL AXES BIN ROUND", o:["The council scraps a rubbish collection","The council chops up a wheelie bin","A councillor buys a round of drinks","The council cuts the bin men by a quarter"], why:"Axe = scrap or cut. Nobody in the story actually holds an axe."},
    {t:"cb", q:"BRITISH LEFT WAFFLES ON FALKLANDS", o:["The British political left can't make its mind up about the Falklands","British troops left their breakfast on the islands","Britain dropped waffles on the Falklands","A British ship left a cargo of waffles"], why:"1982. Language writers quote it constantly as the textbook example."},
    {t:"who", q:"GOTCHA", o:["The Sun","Daily Mirror","Daily Express","Daily Mail"], why:"4 May 1982, on the sinking of the General Belgrano. As the scale of the deaths became clear, the paper changed it in later editions."},
    {t:"real", q:"Only one of these really ran in a local paper. Which?", o:["FOUL MOUTHED PARROT ON LOOSE","PENSIONER'S HEDGE SPOTTED FROM SPACE","LOCAL MAN'S MARROW BIGGER THAN HIS CAR"], why:"Real. It topped a 2023 poll of the UK's favourite local headlines."} ],
  // Wed
  [ {t:"pun", q:"STICK IT UP YOUR ___", o:["JUNTA","GAUCHO","TANGO","PAMPAS"], why:"The Sun, 1982, answering Argentine peace proposals during the Falklands War. It became the paper's catchphrase for the war."},
    {t:"hl", q:"TV STAR QUIZZED IN FRAUD PROBE", o:["Police question a TV celebrity as part of a fraud investigation","A TV star hosts a quiz show about fraud","A TV star cheats on a quiz show","A TV star investigates fraud"], why:"Quizzed = questioned, usually by the police."},
    {t:"cb", q:"EIGHTH ARMY PUSH BOTTLES UP GERMANS", o:["An advance by the Eighth Army traps German forces","The Eighth Army puts German soldiers in bottles","The army throws bottles at the Germans","The army pushes a drinks ban on Germans"], why:"A Second World War classic, though its first printing is hard to trace. Push is a noun here and bottles up is the verb."},
    {t:"who", q:"DEWEY DEFEATS TRUMAN", o:["Chicago Daily Tribune","New York Times","Washington Post","New York Post"], why:"3 November 1948. The paper went to press before the votes were counted, and Truman won."},
    {t:"real", q:"Only one of these really ran in a local paper. Which?", o:["PEA-SIZED PEAR AT BROGDALE","KENT FARMER GROWS BANANA SHAPED LIKE KENT","RECORD TURNIP STOLEN FROM SHOW"], why:"Real. Brogdale, near Faversham, is home to the National Fruit Collection."} ],
  // Thu
  [ {t:"pun", q:"SUPER CALEY GO BALLISTIC, CELTIC ARE ___", o:["ATROCIOUS","FEROCIOUS","PRECOCIOUS","AUDACIOUS"], why:"The Sun (Scottish edition), February 2000, after Inverness Caledonian Thistle beat Celtic 3-1 in the Scottish Cup."},
    {t:"hl", q:"BOFFINS HAIL TOT'S FIND", o:["Scientists praise a small child's discovery","Scientists call a taxi for a child","Weather experts forecast hail","A toddler finds a lost scientist"], why:"Boffin = scientist, hail = praise, tot = small child."},
    {t:"cb", q:"SQUAD HELPS DOG BITE VICTIM", o:["A team helps someone who was bitten by a dog","A team helps a dog bite somebody","A dog called Squad bites someone","A football squad is bitten by a dog"], why:"An often-quoted classic, though its first printing is hard to trace."},
    {t:"who", q:"ENEMIES OF THE PEOPLE", o:["Daily Mail","The Sun","Daily Express","Daily Telegraph"], why:"4 November 2016, over photos of the three High Court judges who ruled that Parliament must vote on triggering Article 50."},
    {t:"real", q:"Only one of these really ran in a local paper. Which?", o:["GEORGE BERNARD SHAW'S SHED EXPLODES","WOMAN WINS FIGHT WITH SEAGULL OVER PASTY","DICKENS'S DESK FOUND IN CHARITY SHOP"], why:"Real. Shaw wrote in a revolving hut at the bottom of his garden."} ],
  // Fri
  [ {t:"pun", q:"___ ME UP BEFORE YOU GO GO", o:["ZIP","LOCK","BUTTON","TIE"], why:"The Sun, 1998, after George Michael's arrest in Beverly Hills, punning on Wham!'s 1984 hit Wake Me Up Before You Go-Go."},
    {t:"hl", q:"BOSS MULLS EXIT AFTER FANS' FURY", o:["A manager considers leaving after supporters get angry","A boss warms wine by the exit","A boss is pushed out of a fire exit","Fans think about leaving the ground"], why:"Mull = consider, exit = departure, fury = anger."},
    {t:"cb", q:"RED TAPE HOLDS UP NEW BRIDGE", o:["Bureaucracy delays a new bridge","A new bridge is held together with red sticky tape","Red tape is used to support a bridge","A gang called Red Tape robs a bridge"], why:"An often-quoted classic, though its first printing is hard to trace."},
    {t:"who", q:"FORD TO CITY: DROP DEAD", o:["New York Daily News","New York Post","New York Times","Detroit Free Press"], why:"30 October 1975, after President Ford refused New York a federal bailout. Ford never actually said drop dead."},
    {t:"real", q:"Only one of these really ran in a local paper. Which?", o:["DRUNK FOUGHT INVISIBLE MAN","COUNCIL APOLOGISES TO GOOSE","MAN SUES HIMSELF OVER CAR CRASH"], why:"Real. It was third in a 2023 poll of the UK's favourite local headlines."} ],
  // Sat
  [ {t:"pun", q:"THE WALLY WITH THE ___", o:["BROLLY","TROLLEY","LOLLY","JOLLY"], why:"November 2007. Steve McClaren stood under an umbrella as England lost 3-2 to Croatia and missed Euro 2008. The tag was all over the tabloids the next day."},
    {t:"hl", q:"LOVE RAT MP IN EXPENSES ROW", o:["An unfaithful MP is caught up in a dispute about expenses","An MP who keeps rats is in a queue","An MP loves a row of expensive houses","An MP rows a boat on expenses"], why:"Love rat = cheating partner, row (rhymes with cow) = dispute."},
    {t:"cb", q:"MINERS REFUSE TO WORK AFTER DEATH", o:["Miners stop work after a colleague is killed","Miners won't work in the afterlife","Miners refuse to dig up the dead","Miners are too tired to work"], why:"An often-quoted classic, though its first printing is hard to trace."},
    {t:"who", q:"WORLD WAR 2 BOMBER FOUND ON MOON", o:["Sunday Sport","Daily Star","Weekly World News","The Sun"], why:"April 1988. A few months later the bomber vanished again, on another front page."},
    {t:"real", q:"Only one of these really ran in a local paper. Which?", o:["HACKNEY POOL TOO WET TO SWIM","SWIMMING POOL CLOSED AFTER BEING FILLED WITH GRAVY","LIDO TOO COLD FOR POLAR BEARS"], why:"Real. It was in the top 20 of a 2023 poll of the UK's favourite local headlines."} ],
  // Sun
  [ {t:"pun", q:"UP YOURS ___", o:["DELORS","JACQUES","BRUSSELS","MONSIEUR"], why:"The Sun, 1 November 1990, aimed at European Commission president Jacques Delors."},
    {t:"hl", q:"MINISTER BLASTS NHS CHIEFS", o:["A minister strongly criticises NHS managers","A minister is hurt in an explosion at a hospital","A minister fires NHS bosses out of a cannon","NHS bosses criticise a minister"], why:"Blast = criticise, unless the story is about an actual explosion. Headline writers have to choose with care."},
    {t:"cb", q:"KIDS MAKE NUTRITIOUS SNACKS", o:["Children prepare healthy snacks","Children are healthy to eat","Young goats make snacks","Snacks are made out of children"], why:"An often-quoted classic, though its first printing is hard to trace."},
    {t:"who", q:"CRISIS? WHAT CRISIS?", o:["The Sun","Daily Mirror","The Times","Daily Mail"], why:"January 1979, in the Winter of Discontent. James Callaghan never said those words: they were the paper's paraphrase."},
    {t:"real", q:"Only one of these really ran in a local paper. Which?", o:["POLICE ADMIT 'BIGGEST-EVER' COCAINE HAUL IS DENTAL POWDER","VILLAGE FETE CANCELLED AFTER SCONE FEUD","FIREFIGHTERS RESCUE MAN FROM GIANT TEAPOT"], why:"Real. It was second in a 2023 poll of the UK's favourite local headlines."},
    {t:"ord", q:"Put this week's headlines in date order, oldest first.", o:["GOTCHA","FREDDIE STARR ATE MY HAMSTER","SWEDES 2 TURNIPS 1","SUPER CALEY GO BALLISTIC","THE WALLY WITH THE BROLLY"], y:[1982,1986,1992,2000,2007], why:"Falklands (1982), Freddie Starr (1986), Euro 92, the Scottish Cup in 2000, and the rain at Wembley in 2007."} ],

  // ===== Week 2 =====
  // Mon
  [ {t:"pun", q:"WALL ST. LAYS AN ___", o:["EGG","BRICK","ANCHOR","OMELETTE"], why:"Variety, the showbiz paper, 30 October 1929, the day after Black Tuesday. In theatre slang, a show that flopped laid an egg."},
    {t:"hl", q:"PEER QUITS IN SLEAZE ROW", o:["A member of the House of Lords resigns in a dispute over misconduct","Someone stops looking through a window","A lord gives up rowing","A friend leaves a dirty party"], why:"Peer = member of the House of Lords, quits = resigns, sleaze = misconduct, row = dispute."},
    {t:"cb", q:"IRAQI HEAD SEEKS ARMS", o:["Iraq's leader is trying to get weapons","A head is looking for a body","An Iraqi sculptor needs arms for a statue","An Iraqi headteacher wants a hug"], why:"An often-quoted classic, though its first printing is hard to trace. Head = leader, arms = weapons."},
    {t:"who", q:"NOUS SOMMES TOUS AMÉRICAINS (We are all Americans)", o:["Le Monde","Libération","Le Figaro","Le Parisien"], why:"Le Monde, September 2001, the day after the 11 September attacks: editor Jean-Marie Colombani's editorial, echoing Kennedy's Ich bin ein Berliner."},
    {t:"real", q:"Only one of these really ran in a local paper. Which?", o:["MAN TRIED TO SELL HIMSELF ON EBAY","WOMAN SELLS HUSBAND'S SHED WHILE HE IS IN IT","GNOME RETURNS HOME AFTER 12 YEARS"], why:"Real. It made a 2023 poll of the UK's favourite local headlines."} ],
  // Tue
  [ {t:"pun", q:"IT'S THE SUN WOT ___ IT", o:["WON","DONE","SWUNG","BOUGHT"], why:"The Sun, 11 April 1992, claiming credit for the Conservatives' surprise general election win after a campaign against Labour leader Neil Kinnock."},
    {t:"hl", q:"COPS NAB CABBIE", o:["Police arrest a taxi driver","Police take a cabbage","Police steal a taxi","A taxi driver joins the police"], why:"Nab = arrest, cabbie = taxi driver. Cops for police is borrowed from American English."},
    {t:"cb", q:"STOLEN PAINTING FOUND BY TREE", o:["A stolen painting is found next to a tree","A tree discovers a stolen painting","A painting of a tree is stolen","A painter called Tree finds his work"], why:"An often-quoted classic, though its first printing is hard to trace. By can mean next to, or who did it."},
    {t:"who", q:"HORSE DOPE SENSATION", o:["The Sun","Daily Mirror","Racing Post","Daily Star"], why:"The front page of the very first tabloid Sun, 17 November 1969: an exclusive that was soon forgotten."},
    {t:"real", q:"Only one of these really ran in a local paper. Which?", o:["FUGITIVE SAUSAGE DOG CAUSES MAYHEM","RUNAWAY PIG WINS VILLAGE FUN RUN","POODLE ELECTED TO PARISH COUNCIL"], why:"Real. It made a 2023 poll of the UK's favourite local headlines."} ],
  // Wed
  [ {t:"pun", q:"IF KINNOCK WINS TODAY WILL THE LAST PERSON TO LEAVE BRITAIN PLEASE TURN OUT THE ___", o:["LIGHTS","HEATING","GAS","TELLY"], why:"The Sun, election day, 9 April 1992, two days before IT'S THE SUN WOT WON IT."},
    {t:"hl", q:"SOAP STAR TO WED", o:["An actor in a TV soap opera is getting married","A soap advert star is getting married on Wednesday","A bar of soap wins an award","A TV star launches a soap"], why:"Soap = TV soap opera, wed = marry. Wed also saves space over married."},
    {t:"cb", q:"ENRAGED COW INJURES FARMER WITH AXE", o:["An angry cow hurts a farmer who was holding an axe","An angry cow attacks a farmer using an axe","A farmer hurts a cow with an axe","A cow and a farmer fight over an axe"], why:"An often-quoted classic, though its first printing is hard to trace. Who had the axe?"},
    {t:"who", q:"ARSÈNE WHO?", o:["London Evening Standard","The Sun","Daily Mirror","Daily Express"], why:"Autumn 1996, when Arsenal named a little-known Frenchman as manager. Arsenal's press officer at the time says it was on the Standard's street posters rather than its front page. Wenger stayed 22 years."},
    {t:"real", q:"Only one of these really ran in a local paper. Which?", o:["MYSTERY OF RESTAURANT'S EXPLODING TEA TOWELS","CAFE'S TEAPOT 'POSSESSED', SAYS OWNER","MAN ORDERS PIZZA TO HIS OWN FRONT GARDEN"], why:"Real. It made a 2023 poll of the UK's favourite local headlines."} ],
  // Thu
  [ {t:"pun", q:"THAT'S YER ___", o:["ALLOTMENT","TURNIP","LOT","PATCH"], why:"The Sun, November 1993, the day Graham Taylor quit as England manager. The turnip jokes had started with SWEDES 2 TURNIPS 1."},
    {t:"hl", q:"MPS BACK BAN BID", o:["MPs support an attempt to bring in a ban","MPs turn their backs on a band","MPs return a ban","MPs bet on a banned horse"], why:"Back = support, bid = attempt. Three-letter words are a headline writer's friends."},
    {t:"cb", q:"GRANDMOTHER OF EIGHT MAKES HOLE IN ONE", o:["A grandmother with eight grandchildren gets a hole in one at golf","A grandmother digs a hole for eight people","Eight grandmothers make one hole","A grandmother has a hole in her jumper"], why:"An often-quoted classic, though its first printing is hard to trace."},
    {t:"who", q:"ACHTUNG! SURRENDER", o:["Daily Mirror","The Sun","Daily Star","Daily Express"], why:"24 June 1996, before England met Germany in the Euro 96 semi-final. The war jokes went down badly, and editor Piers Morgan later said the paper got it wrong. Germany won on penalties."},
    {t:"real", q:"Only one of these really ran in a local paper. Which?", o:["NEIGHBOUR FINED FOR LISTENING TO ELTON JOHN","MAN BANNED FROM WHISTLING IN OWN HOUSE","COUPLE FINED FOR NOISY CROSSWORD"], why:"Real. It made a 2023 poll of the UK's favourite local headlines."} ],
  // Fri
  [ {t:"pun", q:"___ ME UP BEFORE I CAN GO-GO", o:["LOCK","WAKE","ZIP","TIE"], why:"The Sun, September 2010, when George Michael was jailed for eight weeks for driving under the influence. It's a second go at the Wham! pun the paper first used in 1998."},
    {t:"hl", q:"HEAD SLAMS PARENTS", o:["A headteacher strongly criticises parents","Someone bangs their head into parents","A head of state shuts the door on parents","Parents criticise a headteacher"], why:"Head = headteacher, slam = criticise."},
    {t:"cb", q:"LOCAL HIGH SCHOOL DROPOUTS CUT IN HALF", o:["The number of pupils leaving school early has halved","Pupils who left school have been cut in two","A school has been cut in half","Half the school has dropped out"], why:"An often-quoted classic, though its first printing is hard to trace."},
    {t:"who", q:"QUEEN BACKS BREXIT", o:["The Sun","Daily Express","Daily Mail","Daily Telegraph"], why:"9 March 2016. After Buckingham Palace complained, the press regulator IPSO ruled the headline significantly misleading. The paper stood by its story."},
    {t:"real", q:"Only one of these really ran in a local paper. Which?", o:["POSTMAN BEATEN BY LAVENDER BUSH","LOLLIPOP LADY STOPS TRAFFIC FOR DUCKS AGAIN","GARDEN GNOME BLAMED FOR BURGLARY"], why:"Real. It made a 2023 poll of the UK's favourite local headlines."} ],
  // Sat
  [ {t:"pun", q:"STICKS NIX HICK ___", o:["PIX","FLIX","CHIX","TIX"], why:"Variety, 17 July 1935: people in the countryside (the sticks) reject (nix) films (pix) about country folk (hicks). The most famous headlinese of all."},
    {t:"hl", q:"PM'S AIDE IN LEAK STORM", o:["A prime minister's adviser is at the centre of a row about leaked information","A prime minister's helper is caught in bad weather","A prime minister's adviser fixes a leaking roof","A prime minister's aide sails into a storm"], why:"Aide = adviser, leak = information given out without permission, storm = row."},
    {t:"cb", q:"MILK DRINKERS ARE TURNING TO POWDER", o:["Milk drinkers are switching to powdered milk","People who drink milk are crumbling to dust","Milk is turning into powder","Powder makers are drinking milk"], why:"An often-quoted classic, though its first printing is hard to trace."},
    {t:"who", q:"HOW CAN 59,054,087 PEOPLE BE SO DUMB?", o:["Daily Mirror","The Guardian","The Independent","New York Daily News"], why:"4 November 2004, after George W. Bush was re-elected. The number was his vote count."},
    {t:"real", q:"Only one of these really ran in a local paper. Which?", o:["EXETER SEAGULLS TURNED OFF MY TV","PLYMOUTH SEAGULL STEALS CAR KEYS","TORQUAY PIGEON LEARNS TO USE CASHPOINT"], why:"Real. It made a 2023 poll of the UK's favourite local headlines."} ],
  // Sun
  [ {t:"pun", q:"WALL STREET, SON OF ___", o:["EGG","CHICKEN","OMELETTE","YOLK"], why:"Variety again, 1962, when shares fell sharply: a sequel to its own 1929 headline WALL ST. LAYS AN EGG."},
    {t:"hl", q:"VICAR'S PLEA AS FETE AXED", o:["A vicar makes an appeal after a church fete is cancelled","A vicar pleads guilty to damaging a fete","A vicar is hit with an axe at a fete","A vicar's fate is decided"], why:"Plea = appeal, axed = cancelled. Fete and fate sound alike, but only one has a tombola."},
    {t:"cb", q:"MCDONALD'S FRIES THE HOLY GRAIL FOR POTATO FARMERS", o:["Supplying McDonald's chips is the big prize for potato farmers","McDonald's has fried the Holy Grail","McDonald's cooks for potato farmers","Potato farmers are searching for the Holy Grail"], why:"Fries looks like a verb, but it's a noun here. A favourite of the Language Log blog."},
    {t:"who", q:"LONDON BUS FOUND FROZEN IN ANTARCTIC ICE", o:["Sunday Sport","Daily Star","The Sun","Evening Standard"], why:"Sunday Sport, the paper famous for front pages nobody was meant to believe. It also found a Second World War bomber on the Moon."},
    {t:"real", q:"Only one of these really ran in a local paper. Which?", o:["BANANAMAN RESCUED FROM ROUNDABOUT","SPIDER-MAN STUCK IN LIFT FOR SIX HOURS","SUPERMAN CAUGHT SPEEDING ON A314"], why:"Real. It made a 2023 poll of the UK's favourite local headlines."},
    {t:"ord", q:"Put this week's headlines in date order, oldest first.", o:["WALL ST. LAYS AN EGG","STICKS NIX HICK PIX","HORSE DOPE SENSATION","ACHTUNG! SURRENDER","QUEEN BACKS BREXIT"], y:[1929,1935,1969,1996,2016], why:"The Wall Street Crash (1929), Variety's slang (1935), the first tabloid Sun (1969), Euro 96, and the EU referendum year (2016)."} ]
];
