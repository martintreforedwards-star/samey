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
