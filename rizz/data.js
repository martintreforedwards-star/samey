// ---- Rizz puzzle bank ----
// Three lists, one per round. Each day takes the next item from each list; a list starts again from the top when it runs out.
// Sources were checked in Oct 2026 (dictionary announcements and Word of the Year lists). Please check new ones the same way.
// Keep it family-friendly: lots of new slang isn't.

// Round 1 · What's it mean? w = word, a = the real meaning, f = three made-up meanings, o = the story.
const MEAN = [
 {w:"rizz",a:"Charm, especially the kind that wins someone over",f:["A burst of nervous energy before a big moment","Gossip passed on in a group chat","The fizz left in a drink after it goes flat"],o:"Short for <i>charisma</i>. Oxford's Word of the Year for 2023, and added to Merriam-Webster the same year."},
 {w:"doomscroll",a:"To keep scrolling through bad news even though it makes you feel worse",f:["To scroll so fast you miss the post you wanted","To delete old photos to free up space","To read the last page of a book first"],o:"Added to Merriam-Webster in 2023 and to the Oxford English Dictionary in March 2026."},
 {w:"delulu",a:"Believing things that aren't true, usually because you'd rather",f:["Very sleepy after a big meal","Over the moon about something small","Hopelessly lost in a new town"],o:"A playful shortening of <i>delusional</i>. Cambridge Dictionary added it in 2025."},
 {w:"mouse jiggler",a:"A gadget or program that makes it look as if you're at your computer when you aren't",f:["A cat toy that moves by itself","Someone who can't keep still in meetings","A trick for fixing a frozen screen"],o:"Cambridge Dictionary added it in 2025, one of a crop of working-from-home words."},
 {w:"coffee badging",a:"Popping into the office just long enough to be seen, then going home to work",f:["Collecting stamps on a coffee-shop loyalty card","Wearing a name badge to a work social","Bringing coffee for the whole team on your first day"],o:"Swiping your badge, grabbing a coffee, and off you go. Dictionary.com added it in 2025."},
 {w:"touch grass",a:"To get offline and back into the real world for a while",f:["To admit you've lost an argument","To take up gardening as a hobby","To go barefoot to feel calmer"],o:"Usually said to someone who has been online far too long. The Oxford English Dictionary added it in March 2026."},
 {w:"jorts",a:"Denim shorts",f:["Jogging shorts with a built-in phone pocket","Jokes told by sports commentators","Short videos of people jumping into water"],o:"Jeans plus shorts. Added to Merriam-Webster in 2023."},
 {w:"smishing",a:"Scamming people by text message",f:["Squashing a burger flat on a griddle","Sending a kiss emoji by mistake","Smoothing wet plaster with a sponge"],o:"SMS plus phishing. Added to Merriam-Webster in 2023."},
 {w:"nurdle",a:"A tiny plastic pellet that plastic goods are made from, and a common beach pollutant",f:["A small hard sweet sold at the seaside","A clumsy dance move","A lazy nap taken in an armchair"],o:"Huge numbers end up washed onto beaches. Added to Merriam-Webster in 2023."},
 {w:"zhuzh",a:"To give something a quick touch to make it look better",f:["To fizz loudly when opened","To whisper a secret","To sulk in silence"],o:"Usually <i>zhuzh up</i>: zhuzh up a room, an outfit or a salad. Added to Merriam-Webster in 2023."},
 {w:"mid",a:"Average, nothing special",f:["Halfway through a TV series","Slightly damp","Caught in the middle of an argument"],o:"Not bad, not good: just mid. Added to Merriam-Webster in 2023."},
 {w:"bussin'",a:"Really good, especially describing food",f:["Very busy and crowded","Travelling by coach","Gossiping loudly"],o:"If the chips are bussin', they're excellent. Added to Merriam-Webster in 2023."},
 {w:"glow-up",a:"A big improvement in how someone or something looks",f:["Paint that shines in the dark","The first warm day of spring","Getting up very early to see the sunrise"],o:"Added to Merriam-Webster in 2026."},
 {w:"Sunday scaries",a:"The worried feeling that builds as the weekend ends",f:["Ghost stories told on a Sunday night","The rush to buy food before shops shut","A hangover after a Saturday party"],o:"Added to Merriam-Webster in 2026."},
 {w:"trash panda",a:"A raccoon",f:["A messy teenager","A recycling lorry","A bin with a lid shaped like a face"],o:"Raccoons love raiding bins and have a panda-ish mask. Added to Merriam-Webster in 2026."},
 {w:"copium",a:"An imaginary ‘drug’ of denial people take to cope with a disappointment",f:["The metal used to make old pennies","A strong cough medicine","The pleasant smell of a new book"],o:"Cope plus opium. Usually said of fans after their team loses. Added to Merriam-Webster in 2026."},
 {w:"ghost kitchen",a:"A kitchen that only cooks food for delivery, with no restaurant",f:["A kitchen where things go missing","An old kitchen left empty in a house","A cooking show with no presenter"],o:"They spread fast during the pandemic. Added to Merriam-Webster's Collegiate Dictionary in 2025."},
 {w:"agak-agak",a:"Cooking by guesswork, adding ingredients by feel rather than measuring",f:["A noisy argument in a market","A sticky rice pudding","Walking without a destination"],o:"From Malaysian and Singaporean English. The Oxford English Dictionary added it in March 2026."},
 {w:"skibidi",a:"A nonsense word that can mean cool, bad, or nothing at all",f:["A skiing move for beginners","A crisp, cold morning","A small, fast kayak"],o:"From a hugely popular animated YouTube series. Cambridge Dictionary added it in 2025."},
 {w:"Mandela effect",a:"When lots of people share the same false memory",f:["When a leader inspires a whole country","When a famous speech is quoted wrongly","When a song gets stuck in your head"],o:"Named after a false memory many people had about Nelson Mandela's death. Added to Merriam-Webster in 2026."},
 {w:"dumbphone",a:"A basic mobile phone with no apps or internet",f:["A phone that's lost its signal","Someone who never answers their calls","A phone that only does voice messages"],o:"Some people now choose them on purpose to cut down on screen time. Added to Merriam-Webster's Collegiate Dictionary in 2025."}
];

// Round 2 · When did it land? w = word, by = who named it, a = the year, f = three wrong years, o = the story.
const WHEN = [
 {w:"selfie",by:"Oxford",a:2013,f:[2009,2011,2015],o:"A photo you take of yourself. Its use shot up that year as camera phones took over."},
 {w:"vibe coding",by:"Collins",a:2025,f:[2022,2023,2024],o:"Making software by describing what you want to an AI and letting it write the code."},
 {w:"youthquake",by:"Oxford",a:2017,f:[2012,2015,2019],o:"Big change driven by young people. The word itself goes back to the 1960s."},
 {w:"photobomb",by:"Collins",a:2014,f:[2010,2012,2016],o:"Sneaking into the background of someone else's photo."},
 {w:"nomophobia",by:"Cambridge (public vote)",a:2018,f:[2014,2016,2020],o:"Fear of being without your mobile phone: <i>no-mobile-phobia</i>. Chosen by the public as Cambridge's People's Word."},
 {w:"goblin mode",by:"Oxford",a:2022,f:[2019,2020,2023],o:"Being unashamedly lazy and scruffy. The first Oxford Word of the Year picked by public vote."},
 {w:"podcast",by:"Oxford (US)",a:2005,f:[2001,2003,2008],o:"iPod plus broadcast. Oxford's US dictionary team chose it."},
 {w:"permacrisis",by:"Collins",a:2022,f:[2018,2020,2024],o:"A long stretch of instability and worry."},
 {w:"brain rot",by:"Oxford",a:2024,f:[2020,2022,2025],o:"The supposed decline of your mind from too much trivial online content. Oxford found it first used by Henry David Thoreau in 1854."},
 {w:"binge-watch",by:"Collins",a:2015,f:[2011,2013,2017],o:"Watching lots of episodes of a show in one go."},
 {w:"omnishambles",by:"Oxford (UK)",a:2012,f:[2008,2010,2014],o:"A mess from every angle. First heard on the TV satire <i>The Thick of It</i>."},
 {w:"parasocial",by:"Cambridge",a:2025,f:[2021,2023,2024],o:"A one-sided connection with someone famous who doesn't know you exist."},
 {w:"truthiness",by:"Merriam-Webster",a:2006,f:[2002,2004,2009],o:"Believing something because it feels true, whatever the facts. Coined by the comedian Stephen Colbert."},
 {w:"single-use",by:"Collins",a:2018,f:[2014,2016,2020],o:"Made to be used once and thrown away, especially plastics."},
 {w:"unfriend",by:"Oxford (US)",a:2009,f:[2005,2007,2011],o:"Removing someone as a friend on social media."},
 {w:"rage bait",by:"Oxford",a:2025,f:[2021,2023,2024],o:"Posts designed to make you angry, so you click and comment."},
 {w:"upcycling",by:"Cambridge",a:2019,f:[2015,2017,2021],o:"Turning old or unwanted things into something better."},
 {w:"credit crunch",by:"Oxford (UK)",a:2008,f:[2004,2006,2010],o:"A sudden shortage of money that banks will lend."},
 {w:"w00t",by:"Merriam-Webster",a:2007,f:[2003,2005,2010],o:"A gamer's cry of joy, spelt with two zeros."},
 {w:"lockdown",by:"Collins",a:2020,f:[2016,2018,2021],o:"Strict limits on where people can go and who they can meet."},
 {w:"vape",by:"Oxford",a:2014,f:[2010,2012,2016],o:"To breathe in vapour from an e-cigarette."},
 {w:"manifest",by:"Cambridge",a:2024,f:[2020,2022,2025],o:"Picturing what you want so that it comes true. Celebrities and social media made it a buzzword."},
 {w:"hashtag",by:"the American Dialect Society",a:2012,f:[2008,2010,2014],o:"The # sign that groups posts on a topic."},
 {w:"brat",by:"Collins",a:2024,f:[2021,2022,2025],o:"A confident, carefree attitude, from Charli XCX's album of the same name."},
 {w:"carbon footprint",by:"Oxford (UK)",a:2007,f:[2003,2005,2009],o:"How much carbon dioxide your activities produce."},
 {w:"dumpster fire",by:"the American Dialect Society",a:2016,f:[2012,2014,2018],o:"A chaotic disaster that's out of control."},
 {w:"blog",by:"Merriam-Webster",a:2004,f:[2000,2002,2007],o:"Short for <i>weblog</i>, an online diary."},
 {w:"NFT",by:"Collins",a:2021,f:[2017,2019,2023],o:"Non-fungible token: a digital certificate saying you own something online."},
 {w:"simples",by:"Oxford (UK)",a:2009,f:[2005,2007,2011],o:"Catchphrase of the meerkats in a price-comparison TV advert."},
 {w:"vax",by:"Oxford",a:2021,f:[2017,2019,2022],o:"Short for vaccine or vaccinate."},
 {w:"hypermiling",by:"Oxford (US)",a:2008,f:[2004,2006,2010],o:"Driving in a way that gets as many miles as possible from your fuel."},
 {w:"bovvered",by:"Oxford (UK)",a:2006,f:[2002,2004,2008],o:"From Catherine Tate's sulky schoolgirl Lauren: ‘Am I bovvered?’"},
 {w:"locavore",by:"Oxford (US)",a:2007,f:[2003,2005,2009],o:"Someone who tries to eat only food grown nearby."},
 {w:"to be plutoed",by:"the American Dialect Society",a:2006,f:[2002,2004,2008],o:"To be demoted, just as Pluto was demoted from planet that year."},
 {w:"tweet",by:"the American Dialect Society",a:2009,f:[2005,2007,2011],o:"A post on Twitter, and the act of posting one."},
 {w:"app",by:"the American Dialect Society",a:2010,f:[2006,2008,2012],o:"Short for application, as smartphones took off."}
];

// Round 3 · Real or rizz? r = three real words [word, meaning, where it was added], k = the one we made up [word, meaning].
const FAKE = [
 {r:[["cutscene","A scene in a video game you watch rather than play","Merriam-Webster, 2023"],["nerf","To make something weaker in a video game","Merriam-Webster, 2023"],["speedrun","To finish a game as fast as possible","Merriam-Webster, 2023"]],k:["respawnsy","Groggy and dazed after a long gaming session"]},
 {r:[["cold brew","Coffee steeped in cold water for hours","Merriam-Webster, 2025"],["cheffy","Fancy and showy, the way a chef cooks","Merriam-Webster, 2023"],["superfood","A food packed with nutrients","Merriam-Webster, 2026"]],k:["brunchover","Sluggishness after an enormous brunch"]},
 {r:[["quiet quit","To do only the bare minimum at work","Merriam-Webster, 2023"],["WFH","Working from home","Merriam-Webster, 2025"],["hard pass","A firm ‘no thanks’","Merriam-Webster, 2025"]],k:["deskdrift","Slowly moving your desk nearer the window over months"]},
 {r:[["doggo","A dog","Merriam-Webster, 2023"],["bingo card","The things you expected might happen","Merriam-Webster, 2023"],["cromulent","Perfectly acceptable (said as a joke)","Merriam-Webster, 2023"]],k:["woofle","A dog's half-hearted bark in its sleep"]},
 {r:[["crate-dig","To hunt through second-hand record bins","Merriam-Webster, 2023"],["yacht rock","Smooth, soft rock of the late 1970s and early 80s","Merriam-Webster, 2026"],["Rickroll","To trick someone into watching a Rick Astley video","Merriam-Webster, 2026"]],k:["earwhack","A song so catchy it starts to annoy you"]},
 {r:[["smashburger","A burger pressed thin on a hot griddle","Merriam-Webster, 2023"],["cake pop","A ball of cake on a stick","Merriam-Webster, 2026"],["chili crisp","Crunchy chilli oil to spoon on food","Merriam-Webster, 2026"]],k:["crumbfall","The bits that drop out of a sandwich as you eat it"]},
 {r:[["passkey","A way to log in with your face or fingerprint","Merriam-Webster, 2023"],["generative AI","AI that makes text or pictures when you ask","Merriam-Webster, 2023"],["AGI","Artificial general intelligence","Merriam-Webster, 2026"]],k:["promptlag","The pause while you think what to ask a chatbot"]},
 {r:[["rage quit","To give up on something in a temper","Merriam-Webster, 2023"],["jump scare","A sudden moment in a film meant to make you jump","Merriam-Webster, 2023"],["beast mode","A burst of fierce energy and effort","Merriam-Webster, 2023"]],k:["flinchback","Rewatching a scary bit to see what made you jump"]},
 {r:[["pineapple bun","A Hong Kong sweet bun with no pineapple in it","Oxford English Dictionary, 2026"],["boodle fight","A shared feast laid out on banana leaves and eaten by hand","Oxford English Dictionary, 2026"],["jelly","Jealous","Oxford English Dictionary, 2026"]],k:["biscuit lag","The gap between dunking and your biscuit collapsing"]},
 {r:[["meme stock","A share whose price soars on online hype","Merriam-Webster, 2023"],["meme coin","A cryptocurrency inspired by a joke or meme","Merriam-Webster, 2026"],["microtransaction","A small purchase made inside a game or app","Merriam-Webster, 2023"]],k:["pennydrip","A bank charge so small you never notice it"]},
 {r:[["tiny house","A very small home","Merriam-Webster, 2023"],["rewild","To let land go back to nature","Merriam-Webster, 2023"],["forever chemical","A harmful chemical that never breaks down","Cambridge Dictionary, 2025"]],k:["puddlescaping","Designing a garden so rain makes puddles for birds"]},
 {r:[["superyacht","A huge, luxurious yacht","Dictionary.com, 2025"],["ultrawide","Much wider than usual, like a screen","Dictionary.com, 2025"],["superintelligence","Intelligence far beyond any human's","Dictionary.com, 2025"]],k:["supersnooze","Setting six alarms a minute apart"]},
 {r:[["finsta","A secret second Instagram account","Merriam-Webster, 2023"],["'grammable","Worth posting on Instagram","Merriam-Webster, 2023"],["chef's kiss","A kiss of the fingertips meaning ‘perfect’","Merriam-Webster, 2023"]],k:["plateglow","Extra-flattering restaurant lighting for food photos"]},
 {r:[["tabata","A workout of 20 seconds' effort and 10 seconds' rest","Merriam-Webster, 2023"],["bracketology","Predicting who will win a knockout tournament","Merriam-Webster, 2023"],["kiss cam","A stadium camera that puts couples on the big screen","Dictionary.com, 2025"]],k:["stepnap","A sit-down halfway through a walk to hit your step count"]},
 {r:[["voxel","A tiny cube used to build a 3D image","Dictionary.com, 2025"],["geolocate","To pinpoint where something is using GPS","Dictionary.com, 2025"],["compute","Computing power, as a noun","Merriam-Webster, 2026"]],k:["pixeltwin","A digital copy of a real place built from photos"]},
 {r:[["ngl","Not gonna lie","Merriam-Webster, 2023"],["TFW","That feeling when","Merriam-Webster, 2023"],["GOATED","Considered the greatest of all time","Merriam-Webster, 2023"]],k:["TWL","That was lovely"]},
 {r:[["promposal","An elaborate way of asking someone to the prom","Merriam-Webster, 2026"],["adulting","Doing grown-up jobs like paying bills","Merriam-Webster, 2025"],["girlboss","An ambitious, successful businesswoman","Merriam-Webster, 2023"]],k:["chorescore","A points chart for sharing out household jobs"]},
 {r:[["dashcam","A camera on a car's dashboard","Merriam-Webster, 2025"],["dad bod","A comfy, less-than-gym-toned physique","Merriam-Webster, 2025"],["shapewear","Tight underwear that smooths your outline","Merriam-Webster, 2026"]],k:["carpark karma","Finding a space right by the door"]},
 {r:[["side-eye","A sideways look of disapproval","Merriam-Webster, 2025"],["padawan","A beginner learning from an expert","Merriam-Webster, 2023"],["logline","A one-sentence summary of a story","Merriam-Webster, 2023"]],k:["sidewit","A clever reply you only think of afterwards"]}
];

// ---------- Rounds added on 28 Oct 2026 ----------
// The standard shape: w = the word, a = the right answer, f = three wrong answers, o = the story shown afterwards.

// Blend it · which two words were squashed together?
const BLEND = [
 {w:"copium",a:"cope + opium",f:["copy + delirium","cop + premium","cope + optimism"],o:"An imaginary ‘drug’ of denial after a disappointment. Added to Merriam-Webster in 2026."},
 {w:"smishing",a:"SMS + phishing",f:["smash + fishing","smirk + wishing","small + phishing"],o:"Scamming people by text message. Added to Merriam-Webster in 2023."},
 {w:"jorts",a:"jeans + shorts",f:["jogging + shorts","joke + sports","jersey + skirts"],o:"Denim shorts. Added to Merriam-Webster in 2023."},
 {w:"staycation",a:"stay + vacation",f:["station + vacation","stay + location","stack + occasion"],o:"A holiday at or near home. It caught on during the money worries of 2008."},
 {w:"glamping",a:"glamorous + camping",f:["glam rock + camping","glamour + clamping","gleaming + damping"],o:"Camping with comfy beds, proper loos and fairy lights."},
 {w:"mansplain",a:"man + explain",f:["mansion + plain","manly + complain","man + plainly"],o:"When a man explains something, often patronisingly, to someone who already knows it. The Oxford English Dictionary added it in 2018."},
 {w:"bromance",a:"brother + romance",f:["brolly + romance","broken + romance","brother + bromide"],o:"A close, non-romantic friendship between two men. <i>Bro</i> is short for brother."},
 {w:"frenemy",a:"friend + enemy",f:["French + enemy","frenzy + enemy","friend + memory"],o:"Someone who acts like a friend but is really a rival. It's older than you might think: the American columnist Walter Winchell used it in 1932."},
 {w:"vlog",a:"video + blog",f:["voice + log","visual + logic","vinyl + blog"],o:"A video diary posted online."},
 {w:"webinar",a:"web + seminar",f:["web + binary","weekly + seminar","website + dinner"],o:"A talk or class held online."},
 {w:"emoticon",a:"emotion + icon",f:["emoji + cartoon","emote + continue","emotion + cone"],o:"A face made of keyboard symbols, like :-). It came before the emoji."},
 {w:"phablet",a:"phone + tablet",f:["photo + tablet","phantom + tablet","phone + Bluetooth"],o:"A phone so big it's almost a tablet."},
 {w:"sharenting",a:"sharing + parenting",f:["share + renting","sharp + parenting","sharing + tenting"],o:"Parents posting lots of photos and news about their children online."},
 {w:"tradwife",a:"traditional + wife",f:["trading + wife","tradesman's + wife","tradition + midwife"],o:"A wife and mother who cooks and cleans at home and posts about it online. Cambridge Dictionary added it in 2025."},
 {w:"athleisure",a:"athletic + leisure",f:["athlete + pleasure","Athens + leisure","athletic + treasure"],o:"Sports clothes worn as everyday clothes."},
 {w:"Brexit",a:"Britain + exit",f:["breakfast + exit","British + extra","break + exit"],o:"The UK leaving the European Union. Collins Word of the Year for 2016."},
 {w:"permacrisis",a:"permanent + crisis",f:["permafrost + crisis","permission + crisis","perfect + crisis"],o:"A long stretch of instability and worry. Collins Word of the Year for 2022."},
 {w:"cosplay",a:"costume + play",f:["cosy + play","cosmic + display","costly + replay"],o:"Dressing up as a character from a film, comic or game."},
 {w:"chillax",a:"chill + relax",f:["chilli + relax","chill + tax","children + relax"],o:"To calm down and take it easy."}
];

// Old word, new trick · old = what it used to mean; a = the new meaning.
const TRICK = [
 {w:"jelly",old:"a wobbly pudding",a:"Jealous",f:["Very tired","Nervous and shaky","Overexcited"],o:"Short for jealous. The Oxford English Dictionary added this meaning in March 2026."},
 {w:"nerf",old:"a make of soft foam toys",a:"To make something weaker, especially in a video game",f:["To fire foam darts at a friend","To pad something so it's safe","To make something look cuter"],o:"From the squashy Nerf toys. Added to Merriam-Webster in 2023."},
 {w:"hallucinate",old:"to see things that aren't there",a:"When an AI makes something up and presents it as fact",f:["When a screen flickers","When a computer runs slowly","When a phone shows a fake alert"],o:"Cambridge Dictionary and Dictionary.com both made it Word of the Year in 2023."},
 {w:"boss",old:"the person in charge at work",a:"A big enemy you must beat to move on in a video game",f:["The best player on a team","The person who sets up an online game","A secret level in a game"],o:"Added to Merriam-Webster in 2023."},
 {w:"ghost",old:"the spirit of a dead person",a:"To suddenly stop replying to someone, with no explanation",f:["To follow someone online without posting","To sneak into a party uninvited","To pretend to be ill"],o:"One day they're chatting, the next they've vanished."},
 {w:"troll",old:"a creature from folk tales that lives under a bridge",a:"Someone who posts things online just to upset people",f:["Someone who reads everything but never posts","A fake account run by a computer","Someone who deletes their posts quickly"],o:"Possibly also from <i>trolling</i>, dragging a fishing line to see what bites."},
 {w:"cloud",old:"a mass of water drops in the sky",a:"Storage and computing on the internet, not on your own device",f:["A slow internet connection","A blurry photo","A group of people online at once"],o:"Your photos ‘in the cloud’ are really on computers somewhere else."},
 {w:"stream",old:"a small river",a:"To watch or listen to something over the internet as it plays",f:["To download lots of files at once","To cry while watching a film","To type very fast"],o:"The video flows to you, like water."},
 {w:"spam",old:"a tinned meat",a:"Unwanted junk messages sent to lots of people",f:["A message sent by mistake","A very short email","A deleted message"],o:"From a Monty Python sketch where everything on the menu comes with Spam, whether you want it or not."},
 {w:"catfish",old:"a fish with whiskers",a:"To trick someone online by pretending to be someone else",f:["To post lots of pet photos","To fish for compliments online","To send someone a silly picture"],o:"From the 2010 documentary film <i>Catfish</i>."},
 {w:"salty",old:"tasting of salt",a:"Bitter or annoyed, especially after losing",f:["Rude and swearing a lot","Very sweaty after exercise","Funny in a clever way"],o:"Lost the match and still moaning about it? You're salty."},
 {w:"extra",old:"more than usual",a:"Over the top, making a big fuss",f:["Staying late at work","Always hungry","Very generous"],o:"A birthday with fireworks, a choir and a horse? That's extra."},
 {w:"tea",old:"a hot drink",a:"Gossip",f:["A short break from your phone","Good advice","An awkward silence"],o:"Usually <i>spill the tea</i>: tell us everything."},
 {w:"flex",old:"to bend",a:"To show off",f:["To change your plans","To exercise in public","To agree to anything"],o:"From flexing your muscles. A new car on Instagram? That's a flex."},
 {w:"viral",old:"caused by a virus",a:"Shared very quickly by huge numbers of people online",f:["Full of fake news","Damaged by a computer bug","Popular with teenagers only"],o:"It spreads from person to person, like a virus."},
 {w:"charismatic",old:"full of charm",a:"Describing animals, like pandas, that people love and want to protect",f:["Describing a pet that obeys commands","Describing a famous person who gives to charity","Describing a city that's good for tourists"],o:"Cute animals help conservation charities raise money. The Oxford English Dictionary added this meaning in March 2026."},
 {w:"basic",old:"simple",a:"Unoriginal: liking whatever everyone else likes",f:["Rich but mean","Shy in big groups","Bad at technology"],o:"Pumpkin spice latte in a cosy jumper? Some would call that basic."},
 {w:"cap",old:"a hat",a:"A lie",f:["A joke","A promise","A secret"],o:"<i>No cap</i> means ‘no lie, honestly’."}
];

// Where did it come from? · a = what the word was born in.
// Never use a wrong answer the word also passed through (for example a film of the book).
const SOURCE = [
 {w:"cyberspace",a:"Sci-fi story",f:["Film","Song","Video game"],o:"Coined by William Gibson in a 1982 science-fiction story, years before most people had heard of the internet."},
 {w:"muggle",a:"Children's book",f:["Song","TV cartoon","Poem"],o:"A person with no magic powers, from J.K. Rowling's Harry Potter books."},
 {w:"gaslighting",a:"Film",f:["Novel","Song","Video game"],o:"From the 1944 film <i>Gaslight</i>, in which a husband tricks his wife into doubting her own mind. It was based on a 1938 play. Merriam-Webster's Word of the Year for 2022."},
 {w:"stan",a:"Song",f:["Film","Novel","Video game"],o:"A super-fan. From Eminem's 2000 song ‘Stan’, about an obsessive fan."},
 {w:"grok",a:"Novel",f:["Song","Video game","TV cartoon"],o:"To understand something completely. From Robert Heinlein's 1961 science-fiction novel <i>Stranger in a Strange Land</i>."},
 {w:"Big Brother",a:"Novel",f:["Song","Video game","TV advert"],o:"From George Orwell's 1949 novel <i>Nineteen Eighty-Four</i>. The reality TV show borrowed the name decades later."},
 {w:"Catch-22",a:"Novel",f:["Song","Radio show","TV advert"],o:"A no-win situation. From Joseph Heller's 1961 novel about airmen in the Second World War."},
 {w:"Jedi",a:"Film",f:["Novel","Song","Poem"],o:"The wise warriors of <i>Star Wars</i>, first seen in 1977."},
 {w:"chortle",a:"Poem",f:["Song","TV comedy","Film"],o:"Chuckle plus snort, made up by Lewis Carroll in his 1871 poem ‘Jabberwocky’."},
 {w:"Scrooge",a:"Novel",f:["Song","Poem","TV cartoon"],o:"A mean person. Ebenezer Scrooge is the miser in Charles Dickens's <i>A Christmas Carol</i> (1843)."},
 {w:"hobbit",a:"Children's book",f:["Song","Poem","TV comedy"],o:"From J.R.R. Tolkien's <i>The Hobbit</i> (1937)."},
 {w:"d'oh",a:"TV cartoon",f:["Film","Novel","Song"],o:"Homer Simpson's cry of annoyance. The Oxford English Dictionary added it in 2001."},
 {w:"Tardis",a:"Sci-fi TV show",f:["Novel","Film","Song"],o:"From <i>Doctor Who</i>, first shown in 1963. Now used for anything that's bigger on the inside than it looks."},
 {w:"bazinga",a:"TV comedy",f:["Video game","Film","Novel"],o:"Sheldon's catchphrase in <i>The Big Bang Theory</i>, after he's played a joke on someone."}
];

// Older than you think · a = when it was first written down.
const OLDER = [
 {w:"unfriend",a:"1650s",f:["1880s","1950s","2000s"],o:"In 1659 Thomas Fuller wrote: ‘I hope, Sir, that we are not mutually un-friended by this difference.’ Facebook came along 345 years later."},
 {w:"influencer",a:"1660s",f:["1890s","1970s","2000s"],o:"It meant any person or thing with influence. Being one as a job came much later."},
 {w:"OMG",a:"1910s",f:["1960s","1980s","1990s"],o:"In a 1917 letter to Winston Churchill from the retired admiral Lord Fisher."},
 {w:"hangry",a:"1950s",f:["1990s","2000s","2010s"],o:"Hungry plus angry. It goes back to at least the 1950s, though the Oxford English Dictionary only added it in 2018."},
 {w:"nerd",a:"1950s",f:["1890s","1920s","1970s"],o:"First found in Dr Seuss's 1950 book <i>If I Ran the Zoo</i>, as one of his imaginary creatures."},
 {w:"brunch",a:"1890s",f:["1950s","1970s","1990s"],o:"In 1895: ‘when a man makes lunch his first meal of the day it becomes brunch’."},
 {w:"smog",a:"1900s",f:["1950s","1960s","1970s"],o:"Smoke plus fog, first recorded in 1905 and said to describe London."},
 {w:"dude",a:"1880s",f:["1950s","1960s","1980s"],o:"It first mocked a fussy, overdressed man about town."},
 {w:"legit",a:"1890s",f:["1960s","1980s","2000s"],o:"Theatre slang for ‘legitimate’ drama, as opposed to music hall and burlesque."},
 {w:"hipster",a:"1930s",f:["1960s","1990s","2000s"],o:"From the late 1930s, for someone ahead of the latest trends."},
 {w:"ginormous",a:"1940s",f:["1970s","1990s","2000s"],o:"Gigantic plus enormous. It started as military slang and was in a British newspaper by 1942."},
 {w:"meme",a:"1970s",f:["1990s","2000s","2010s"],o:"Coined by the biologist Richard Dawkins in his 1976 book <i>The Selfish Gene</i>, for an idea that spreads from person to person."},
 {w:"OK",a:"1830s",f:["1910s","1940s","1960s"],o:"First printed in a Boston newspaper in 1839, as a jokey short form of ‘oll korrect’."}
];

// Use it right · a = the one sentence that uses the word properly.
const USE = [
 {w:"mid",a:"Honestly, the film was a bit mid. I wouldn't watch it again.",f:["That film was so mid, I've watched it five times!","I'll meet you mid, by the clock tower.","She's very mid: always first with the answer."],o:"<i>Mid</i> means average, nothing special."},
 {w:"delulu",a:"He thinks he'll play for England next week. He's totally delulu.",f:["I'm so delulu after that long run, I need a nap.","The pasta was delulu, so I had seconds.","We got delulu on the way home and had to ask directions."],o:"<i>Delulu</i> means believing things that aren't true, usually because you'd rather."},
 {w:"rizz",a:"He's got so much rizz, everyone at the party wanted to talk to him.",f:["I spilt rizz all over the kitchen floor.","Don't shake the bottle or the rizz will go flat.","She rizzed on for an hour about her day at work."],o:"<i>Rizz</i> is charm, the kind that wins people over."},
 {w:"doomscroll",a:"I meant to sleep at ten, but I doomscrolled the news until midnight.",f:["I doomscrolled through the recipe book to find the cake.","He doomscrolled the old wallpaper off the wall.","She doomscrolled her essay and got top marks."],o:"To <i>doomscroll</i> is to keep scrolling through bad news even though it makes you feel worse."},
 {w:"zhuzh",a:"The room's nearly done. It just needs a cushion to zhuzh it up.",f:["The lemonade zhuzhed everywhere when I opened it.","He zhuzhed off without saying goodbye.","Please zhuzh quietly, the baby's asleep."],o:"To <i>zhuzh</i> something is to give it a quick touch to make it look better."},
 {w:"bussin'",a:"These chips are bussin'! Can I have the recipe?",f:["The station was bussin', so we couldn't get a seat.","I'm bussin' to school today, the car's broken.","Stop bussin' and let me finish my sentence."],o:"<i>Bussin'</i> means really good, especially food."},
 {w:"touch grass",a:"You've been gaming all weekend. Go and touch grass.",f:["After the exam I touched grass: I got every answer right.","She touched grass and finally became famous.","The team touched grass by scoring in the last minute."],o:"To <i>touch grass</i> is to get offline and back into the real world."},
 {w:"glow-up",a:"Have you seen the old town hall since they did it up? What a glow-up.",f:["We had a glow-up at the fireworks last night.","Turn the glow-up down, it's too bright.","I've got a glow-up meeting at nine."],o:"A <i>glow-up</i> is a big improvement in how someone or something looks."},
 {w:"Sunday scaries",a:"About six o'clock every Sunday, the Sunday scaries kick in.",f:["We watched the Sunday scaries on TV with popcorn.","The Sunday scaries are on at the cinema.","I bought some Sunday scaries for Halloween."],o:"The <i>Sunday scaries</i> are the worried feeling as the weekend ends."},
 {w:"coffee badging",a:"She went in at ten, said hello, and was home by eleven. Classic coffee badging.",f:["I'm coffee badging: I've had five cups today.","He's coffee badging, saving stamps for a free drink.","They're coffee badging the new staff with name tags."],o:"<i>Coffee badging</i> is popping into the office just long enough to be seen."},
 {w:"copium",a:"‘We'll win the league next year,’ said the fan, high on copium.",f:["Add a spoonful of copium to the stew.","He copied the homework using copium.","The new roof is made of copium."],o:"<i>Copium</i> is the imaginary ‘drug’ of denial after a let-down."},
 {w:"sanewash",a:"The report sanewashed his rambling speech, making it sound sensible.",f:["She sanewashed the car before selling it.","I always sanewash my hands before cooking.","The jumper needs a sanewash on a cool cycle."],o:"To <i>sanewash</i> is to make something extreme or odd sound reasonable. Dictionary.com added it in 2025."},
 {w:"quiet quit",a:"He's quiet quitting: he does his hours and not a minute more.",f:["She quiet quit the choir by singing very softly.","They quiet quit the library to avoid being shushed.","I quiet quit my car so it wouldn't wake the neighbours."],o:"To <i>quiet quit</i> is to do only the bare minimum at work."},
 {w:"lowkey",a:"I'm lowkey excited about the school fair, but don't tell anyone.",f:["Turn the music lowkey, I'm on the phone.","The lowkey is under the mat if you're locked out.","He sang the whole song in lowkey."],o:"<i>Lowkey</i> means a bit, or secretly."}
];

// Spell it out · a = what the letters stand for.
const SPELL = [
 {w:"ngl",a:"not gonna lie",f:["never gonna leave","nice game, lads","no good luck"],o:"Added to Merriam-Webster in 2023."},
 {w:"TFW",a:"that feeling when",f:["thanks for waiting","too far west","the final word"],o:"Used to start a relatable moment. Added to Merriam-Webster in 2023."},
 {w:"TTYL",a:"talk to you later",f:["thanks, try your luck","take the year long","time to yell loudly"],o:"Added to Merriam-Webster in 2023."},
 {w:"WFH",a:"working from home",f:["waiting for help","weekend family holiday","wish for happiness"],o:"Added to Merriam-Webster in 2025."},
 {w:"GOAT",a:"greatest of all time",f:["game over, all together","going out at teatime","get out and train"],o:"<i>GOATED</i>, meaning considered the greatest, was added to Merriam-Webster in 2023."},
 {w:"AGI",a:"artificial general intelligence",f:["automatic game interface","advanced graphics input","all-generation internet"],o:"An AI that could match people at almost any task. Added to Merriam-Webster in 2026."},
 {w:"FOMO",a:"fear of missing out",f:["friends of my office","full of more options","fun on Mondays only"],o:"The worry that everyone else is having fun without you."},
 {w:"IRL",a:"in real life",f:["I'm really late","instant reply link","in Rome lately"],o:"As opposed to online."},
 {w:"IYKYK",a:"if you know, you know",f:["if you keep, you keep","I'm young, keep young, kids","if you're kind, you're kind"],o:"For an in-joke that only some people will get."},
 {w:"POV",a:"point of view",f:["proof of video","picture of value","pop-up video"],o:"Very popular for videos showing a scene through someone's eyes."},
 {w:"OOTD",a:"outfit of the day",f:["out of the door","one of those days","order on Thursday"],o:"Posted with a photo of what you're wearing."},
 {w:"TBH",a:"to be honest",f:["the best half","thanks, big help","time before home"],o:"Usually just before something blunt."},
 {w:"ICYMI",a:"in case you missed it",f:["I can't yet mention it","if conditions yield more info","I'm calling you, my idol"],o:"Used when sharing something again."},
 {w:"SMH",a:"shaking my head",f:["so much happiness","send me help","see my house"],o:"For something silly or disappointing."},
 {w:"TIL",a:"today I learned",f:["till I leave","tell it loudly","time is limited"],o:"Before an interesting fact you've just found out."},
 {w:"BRB",a:"be right back",f:["bring rain boots","big round of biscuits","be really brave"],o:"One of the oldest bits of chat-room shorthand."},
 {w:"AFK",a:"away from keyboard",f:["always fun and kind","ask for kindness","all friends know"],o:"Gamers say it when they step away."},
 {w:"DM",a:"direct message",f:["daily meme","dream moment","don't mind"],o:"A private message on social media."},
 {w:"FWIW",a:"for what it's worth",f:["fine, whatever, I win","friends with internet wifi","for when I'm working"],o:"A modest way to offer an opinion."}
];

// Translate it · Sundays only, as the last round. w = a sentence full of new words; a = the right plain-English version.
const TRANSLATE = [
 {w:"Ngl, that smashburger was bussin', no cap.",a:"Honestly, that burger was delicious. I mean it.",f:["Honestly, that burger was too greasy, I'm afraid.","I didn't order the burger, but it looked good.","That burger was overpriced, but I'm not complaining."],o:"<i>ngl</i> = not gonna lie · <i>bussin'</i> = really good · <i>no cap</i> = no lie."},
 {w:"He's so delulu. He thinks he's got rizz, but it's pure copium.",a:"He's kidding himself. He thinks he's charming, but he's just in denial.",f:["He's confused. He thinks he's clever, but he's just tired.","He's very lucky. He's charming and he knows it.","He's grumpy. He thinks he's ill, but he's just hungry."],o:"<i>delulu</i> = believing what isn't true · <i>rizz</i> = charm · <i>copium</i> = denial."},
 {w:"The Sunday scaries hit hard, so I doomscrolled till midnight. Need to touch grass.",a:"I was dreading Monday, so I read bad news online for hours. I need to get outside.",f:["I had nightmares on Sunday, so I read a scary book till midnight. I need to mow the lawn.","I was bored on Sunday, so I played games till midnight. I need a holiday.","I was excited about Monday, so I couldn't sleep. I need to go for a run."],o:"<i>Sunday scaries</i> = worry as the weekend ends · <i>doomscroll</i> = keep reading bad news · <i>touch grass</i> = go offline."},
 {w:"The café had a total glow-up, but the cake's lowkey mid.",a:"The café looks much better after its makeover, but honestly the cake is just average.",f:["The café has new lights, but the cake is quietly excellent.","The café looks the same, but the cake is half price.","The café is very bright, and the cake is the best in town."],o:"<i>glow-up</i> = big improvement · <i>lowkey</i> = a bit, or secretly · <i>mid</i> = average."},
 {w:"He was coffee badging again, then ghosted the team chat. Not GOATed behaviour.",a:"He popped into the office briefly again, then stopped answering the team's messages. Not great.",f:["He bought everyone coffee again, then sent the team a spooky message. Very kind.","He forgot his office pass again, then left the team chat. Not his fault.","He drank too much coffee again, then talked non-stop in the team chat. Typical."],o:"<i>coffee badging</i> = showing your face at the office · <i>ghost</i> = stop replying · <i>GOATed</i> = the greatest."},
 {w:"Ngl, I'm lowkey jelly of your jorts.",a:"Honestly, I'm secretly a bit jealous of your denim shorts.",f:["Honestly, I've spilt jelly on your jogging shorts.","Honestly, your shorts are a bit too small for you.","Honestly, I'd like to borrow your jumper tonight."],o:"<i>ngl</i> = not gonna lie · <i>lowkey</i> = secretly · <i>jelly</i> = jealous · <i>jorts</i> = denim shorts."},
 {w:"TFW the update nerfs your best character and your mate rage quits. SMH.",a:"That feeling when the game update weakens your best character and your friend storms off in a temper. Shaking my head.",f:["That feeling when the update makes your character stronger and your friend wins. Well done.","That feeling when the update deletes your saved game and your friend laughs. So funny.","That feeling when your friend gets hit by a foam dart and leaves the team. Ouch."],o:"<i>TFW</i> = that feeling when · <i>nerf</i> = weaken · <i>rage quit</i> = give up in a temper · <i>SMH</i> = shaking my head."},
 {w:"Tbh the sequel was mid, but the cutscenes? Chef's kiss.",a:"To be honest, the sequel was only average, but the film scenes between the gameplay were brilliant.",f:["To be honest, the sequel was brilliant, but the trailers were too long.","To be honest, I fell asleep halfway, but the popcorn was lovely.","To be honest, the sequel was cut short, but the actors blew kisses."],o:"<i>tbh</i> = to be honest · <i>mid</i> = average · <i>cutscene</i> = a scene you watch rather than play · <i>chef's kiss</i> = perfect."},
 {w:"My friend's finsta is full of OOTD pics. Very 'grammable, ngl.",a:"My friend's secret second Instagram account is full of outfit photos. They look great on Instagram, honestly.",f:["My friend's fitness app is full of workout photos. Very tiring, honestly.","My friend's new phone is full of old photos. Very blurry, honestly.","My friend's photo album is full of holiday snaps. Very boring, honestly."],o:"<i>finsta</i> = a secret Instagram account · <i>OOTD</i> = outfit of the day · <i>'grammable</i> = worth posting · <i>ngl</i> = not gonna lie."}
];
