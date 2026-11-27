// Doornail: a daily game of similes and metaphors. 4 rounds a day; No. 1 is a Monday.
// Round types (t):
//   sim  = finish the simile         cls  = simile, metaphor or neither?
//   mix  = mixed metaphor: pick the TWO sayings that collided (a = [two answers])
//   hid  = which one is secretly a metaphor?   poet = whose simile/metaphor is it?
//   boss = Sunday: what's really being described?
// Options: answer first (a), the game shuffles them. Quotes are from poets published before 1929 only.

const LABEL = { sim:"Finish the simile", cls:"Simile or metaphor?", mix:"Mixed metaphor", hid:"Hidden metaphor", poet:"Name the poet", boss:"Sunday boss" };
const CLS = ["Simile","Metaphor","Neither"];

const DAYS = [
  // ===== Week 1 =====
  [ {t:"sim", q:"as good as ___", o:["gold","silver","bread","brass"], why:"Gold was the standard of the genuine article. Good as gold has been said of well-behaved children since the 1800s."},
    {t:"cls", q:"He eats like a horse.", a:"Simile", why:"Like or as is the giveaway: a simile says one thing is like another. A metaphor says it is the other."},
    {t:"mix", q:"It's not rocket surgery.", o:["It's not rocket science","It's not brain surgery","It's not the end of the world","It's not over till the fat lady sings"], a:["It's not rocket science","It's not brain surgery"], why:"Two ways of saying it's not that hard, welded together. Rocket surgery has since become a joke in its own right."},
    {t:"hid", q:"Which flower's name is secretly a metaphor?", o:["daisy","rose","lily","violet"], why:"Daisy is the day's eye, from Old English dæges ēage: it opens at dawn and closes at dusk, like an eye."} ],
  [ {t:"sim", q:"as cool as a ___", o:["cucumber","lettuce","melon","mint leaf"], why:"The inside of a cucumber stays cooler than the air around it. The phrase goes back to the early 1700s."},
    {t:"cls", q:"The classroom was a zoo.", a:"Metaphor", why:"No like, no as: the classroom simply is a zoo. That's a metaphor."},
    {t:"mix", q:"We'll burn that bridge when we come to it.", o:["Burn your bridges","Cross that bridge when you come to it","Water under the bridge","Bridge the gap"], a:["Burn your bridges","Cross that bridge when you come to it"], why:"Cross that bridge when you come to it (deal with it later) meets burn your bridges (leave no way back). The result sounds oddly like a plan."},
    {t:"hid", q:"Which word is secretly a metaphor?", o:["deadline","timetable","weekend","homework"], why:"In a Confederate prison camp in the American Civil War, the dead line was a boundary prisoners were shot for crossing. Newspapers later borrowed it for the time a story had to be in."} ],
  [ {t:"sim", q:"as fit as a ___", o:["fiddle","drum","trumpet","harp"], why:"Fit once meant suitable, in good order. A fiddle in fine fettle was ready to play, and the phrase moved over to people."},
    {t:"cls", q:"The wind howled all night.", a:"Neither", why:"A trap: it's personification, giving a thing a human (or animal) action. No like or as, and the wind isn't being called something else."},
    {t:"mix", q:"Every cloud has a silver spoon.", o:["Every cloud has a silver lining","Born with a silver spoon in your mouth","Silver-tongued","Every dog has its day"], a:["Every cloud has a silver lining","Born with a silver spoon in your mouth"], why:"The silver lining (hope in bad times) meets the silver spoon (born rich). Milton gave us the silver lining, in Comus."},
    {t:"hid", q:"Which word is secretly a metaphor?", o:["broadcast","telephone","radio","television"], why:"To broadcast was to scatter seed by hand across a field. Radio borrowed it in the 1920s for sending a signal out in all directions."} ],
  [ {t:"sim", q:"as daft as a ___", o:["brush","broom","mop","bucket"], why:"A Northern favourite. It may have started as soft as a brush, soft meaning a bit simple."},
    {t:"poet", q:"“O my Luve is like a red, red rose”", o:["Robert Burns","William Wordsworth","Lord Byron","John Keats"], why:"Burns, 1794, written to fit an old Scots tune. One of the most famous similes in the language."},
    {t:"mix", q:"That's the way the cookie bounces.", o:["That's the way the cookie crumbles","That's the way the ball bounces","You can't have your cake and eat it","The proof of the pudding is in the eating"], a:["That's the way the cookie crumbles","That's the way the ball bounces"], why:"Two American shrugs, both meaning that's life. The crumbling cookie won out."},
    {t:"hid", q:"Which road word is secretly a metaphor?", o:["bottleneck","junction","roundabout","crossroads"], why:"A bottleneck narrows like the neck of a bottle, so only a trickle gets through."} ],
  [ {t:"sim", q:"as right as ___", o:["rain","snow","sunshine","thunder"], why:"Nobody's sure why rain is right. The likeliest answer is that it just sounds good: right as rain has been around since the 1890s."},
    {t:"poet", q:"“As idle as a painted ship / Upon a painted ocean”", o:["Samuel Taylor Coleridge","William Blake","Percy Bysshe Shelley","Alfred Tennyson"], why:"Coleridge, The Rime of the Ancient Mariner (1798): the becalmed ship can't move, as if it were in a picture."},
    {t:"mix", q:"You can lead a horse to water, but you can't make it change its spots.", o:["You can lead a horse to water, but you can't make it drink","A leopard can't change its spots","Don't look a gift horse in the mouth","Still waters run deep"], a:["You can lead a horse to water, but you can't make it drink","A leopard can't change its spots"], why:"Two sayings about people not changing, joined at the but."},
    {t:"hid", q:"Which verb is secretly a metaphor when you use it of an idea?", o:["grasp","know","learn","think"], why:"You grasp an idea as if holding it in your hand. Hold, get, catch on: English keeps treating understanding as handling."} ],
  [ {t:"sim", q:"as dead as a ___", o:["doornail","hinge","doorstep","knocker"], why:"It's in Piers Plowman, from the 1300s. One theory: a nail hammered through a door and bent over could never be used again. Dickens wondered about it too, at the start of A Christmas Carol."},
    {t:"cls", q:"“Hope is the thing with feathers” (Emily Dickinson)", a:"Metaphor", why:"Hope isn't like a bird here: it is one, perching in the soul. A metaphor."},
    {t:"mix", q:"Let's not count our chickens until the cows come home.", o:["Don't count your chickens before they hatch","Till the cows come home","Which came first, the chicken or the egg?","Holy cow"], a:["Don't count your chickens before they hatch","Till the cows come home"], why:"Don't count your chickens (don't assume success) meets till the cows come home (for ages). A whole farmyard of caution."},
    {t:"sim", q:"Those two are as thick as ___ (very close friends).", o:["thieves","bricks","glue","twins"], why:"Thick once meant close or intimate, and thieves stick together. Thick as a brick is a different insult altogether."} ],
  [ {t:"boss", q:"“All the world's a stage, / And all the men and women merely players”", o:["life","the theatre","the town","love"], why:"Shakespeare, As You Like It. Life is the play, and we all have our exits and entrances."},
    {t:"boss", q:"Each morning it is born in the east, climbs its blue hill, and sinks at evening, tired and red, into the sea.", o:["the sun","a balloon","a ship","the moon"], why:"Born, climbs, tired: the sun is turned into a traveller. The red at evening rules out the moon."},
    {t:"boss", q:"A thief comes every night. It takes the colour from the garden and the edges from the hills, and gives them all back at dawn.", o:["darkness","fog","winter","sleep"], why:"Every night, and back at dawn: darkness steals the colours and returns them. Fog doesn't keep to a timetable."},
    {t:"boss", q:"Every autumn the tree throws a farewell party: it hangs out red and gold flags, then lets its guests drift away on the wind.", o:["falling leaves","migrating birds","fireworks","bunting"], why:"The flags are the turning leaves and the guests drifting away are the leaves falling. Birds don't hang on the branches in red and gold."} ],
  // ===== Week 2 =====
  [ {t:"sim", q:"as busy as a ___", o:["bee","ant","mouse","clock"], why:"Bees have stood for hard work since Chaucer, who has busy as bees in The Canterbury Tales."},
    {t:"cls", q:"Her smile was as bright as the sun.", a:"Simile", why:"As bright as: the as...as frame makes it a simile."},
    {t:"mix", q:"That's just the tip of the iceberg on the cake.", o:["The tip of the iceberg","The icing on the cake","A piece of cake","Break the ice"], a:["The tip of the iceberg","The icing on the cake"], why:"The tip of the iceberg (only a small part of the problem) meets the icing on the cake (the final nice touch). Not a good combination for a cake."},
    {t:"hid", q:"Which of these is secretly a metaphor?", o:["the leg of a table","a wooden table","a round table","a coffee table"], why:"Tables don't really have legs: we lent them ours. Also the foot of a hill, the arm of a chair, the face of a clock."} ],
  [ {t:"sim", q:"as blind as a ___", o:["bat","mole","owl","cat"], why:"Bats aren't blind: most see well, and many also find their way by echo. Their quick, darting flight probably made people think they were flying blind."},
    {t:"cls", q:"Time is money.", a:"Metaphor", why:"Time simply is money here. Benjamin Franklin popularised the line in 1748, in advice to a young tradesman."},
    {t:"mix", q:"He's a few sandwiches short of a full deck.", o:["A few sandwiches short of a picnic","Not playing with a full deck","Out to lunch","All hands on deck"], a:["A few sandwiches short of a picnic","Not playing with a full deck"], why:"Two jokey ways of saying someone isn't all there. The picnic is British; the deck of cards American."},
    {t:"hid", q:"Which computer word is a metaphor?", o:["mouse","keyboard","monitor","printer"], why:"The mouse was named in the 1960s for its size and the cable trailing behind it like a tail."} ],
  [ {t:"sim", q:"as old as the ___", o:["hills","sea","stars","stones"], why:"The hills seemed to have been there for ever. The phrase echoes the Book of Job, which asks whether you were made before the hills."},
    {t:"cls", q:"The snow was a white blanket over the town.", a:"Metaphor", why:"The snow is a blanket, not like one. Say like a white blanket and it becomes a simile."},
    {t:"mix", q:"Don't put all your eggs on one bandwagon.", o:["Don't put all your eggs in one basket","Jump on the bandwagon","Don't count your chickens","The wheels came off"], a:["Don't put all your eggs in one basket","Jump on the bandwagon"], why:"Don't risk everything on one thing, meet follow the crowd. Eggs on a bandwagon: a recipe for omelette."},
    {t:"hid", q:"Which phrase hides a metaphor?", o:["a head of lettuce","a bag of lettuce","a crisp lettuce","a fresh lettuce"], why:"A lettuce has no head: we gave it one for its round shape."} ],
  [ {t:"sim", q:"as happy as ___", o:["Larry","Harry","Barry","Gary"], why:"Who was Larry? Possibly Larry Foley, a winning Australian boxer of the 1800s; possibly the Australian slang larrikin. Nobody knows for sure."},
    {t:"poet", q:"“She walks in beauty, like the night”", o:["Lord Byron","John Keats","Robert Burns","Christina Rossetti"], why:"Byron, 1814. Said to be written after he saw his cousin's wife at a party in black mourning dress set with spangles."},
    {t:"mix", q:"He was like a fish out of water in a china shop.", o:["Like a fish out of water","Like a bull in a china shop","Plenty more fish in the sea","Not for all the tea in China"], a:["Like a fish out of water","Like a bull in a china shop"], why:"Uncomfortable (fish out of water) meets clumsy (bull in a china shop). A rare double simile pile-up."},
    {t:"hid", q:"Which phrase hides a metaphor?", o:["in the pipeline","in the post","in the kitchen","in the morning"], why:"Plans aren't really in a pipe. In the pipeline borrows from the oil industry: on the way, but not here yet."} ],
  [ {t:"sim", q:"as keen as ___", o:["mustard","pepper","vinegar","cheese"], why:"Keen once meant sharp, and mustard is sharp. The phrase is probably older than the Keen's mustard company it's sometimes credited to."},
    {t:"poet", q:"“I wandered lonely as a cloud”", o:["William Wordsworth","Samuel Taylor Coleridge","John Keats","Percy Bysshe Shelley"], why:"Wordsworth, 1807, inspired by a walk with his sister Dorothy past daffodils by Ullswater."},
    {t:"mix", q:"He's been burning the midnight oil at both ends.", o:["Burning the midnight oil","Burning the candle at both ends","Pouring oil on troubled waters","Burning your bridges"], a:["Burning the midnight oil","Burning the candle at both ends"], why:"Working late meets wearing yourself out. A lamp lit at both ends would be quite something."},
    {t:"hid", q:"Which of these is secretly a metaphor?", o:["a computer virus","a computer desk","a computer cable","a computer printer"], why:"Computer viruses copy themselves and spread from host to host, so the name was borrowed from biology in the 1980s."} ],
  [ {t:"sim", q:"as sick as a ___", o:["parrot","puffin","penguin","pigeon"], why:"A football favourite since the 1970s for a disappointed manager. One theory links it to a parrot fever scare in the 1930s."},
    {t:"cls", q:"“It is the east, and Juliet is the sun.”", a:"Metaphor", why:"Romeo doesn't say Juliet is like the sun: she is the sun, rising at the window. A metaphor."},
    {t:"mix", q:"Look before you leap into the frying pan.", o:["Look before you leap","Out of the frying pan into the fire","Too many cooks spoil the broth","Leap of faith"], a:["Look before you leap","Out of the frying pan into the fire"], why:"Be careful, meet from bad to worse. Sound advice, badly cooked."},
    {t:"poet", q:"“Season of mists and mellow fruitfulness, / Close bosom-friend of the maturing sun”", o:["John Keats","William Wordsworth","John Clare","Alfred Tennyson"], why:"Keats, To Autumn (1819): autumn is a friend of the sun, plotting with it to ripen the fruit."} ],
  [ {t:"boss", q:"“Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage”", o:["life","an actor","a ghost","a king"], why:"Macbeth, near the end. The poor player is the metaphor: life is a bad actor, gone after his hour."},
    {t:"boss", q:"“Hope is the thing with feathers / That perches in the soul”. What is hope being turned into?", o:["a bird","an angel","a pillow","an arrow"], why:"Emily Dickinson: feathers, perches, and later in the poem it sings. Hope is a small bird."},
    {t:"boss", q:"He arrives in December with cold breath, paints the windows white overnight, and leaves ferns drawn on the glass.", o:["frost","snow","Father Christmas","fog"], why:"Fern patterns on the glass are frost's signature. Father Christmas comes in December too, but leaves presents, not ferns."},
    {t:"boss", q:"Every morning it swallows the town at eight, and every evening at six it spits it out again, a little more tired.", o:["the commuter train","the sea","the night","the school"], why:"Swallowed at eight, out at six, more tired: the commuter train. School finishes well before six."} ],
  [
    {t:"sim",q:"as bold as ___",o:["brass","bronze","iron","copper"],why:"Brass has meant cheek since the 1500s, hence a brass neck. A story links the phrase to Brass Crosby, an 18th-century Lord Mayor of London, but it's probably older."},
    {t:"cls",q:"My brother is a couch potato.",a:"Metaphor",why:"He isn't like a potato, he simply is one: a metaphor. Couch potato is American slang from the 1970s."},
    {t:"mix",q:"We'll cross that bridge when it comes home to roost.",o:["Cross that bridge when you come to it","Chickens come home to roost","Burn your bridges","Rule the roost"],a:["Cross that bridge when you come to it","Chickens come home to roost"],why:"Deal with it later meets your mistakes will catch up with you. Not a reassuring combination."},
    {t:"hid",q:"Which plant's name is secretly a metaphor?",o:["dandelion","oak","ivy","fern"],why:"Dandelion is French <i>dent de lion</i>, lion's tooth, from its jagged leaves."}
  ],
  [
    {t:"sim",q:"as bright as a ___",o:["button","penny","star","pin"],why:"Polished brass buttons on uniforms shone. Bright also means clever, so a bright button is a sharp child."},
    {t:"cls",q:"The ice cream was like a cold kiss.",a:"Simile",why:"Like is the giveaway: the ice cream is compared to a kiss, not turned into one."},
    {t:"mix",q:"It's a piece of cake in the park.",o:["A piece of cake","A walk in the park","Have your cake and eat it","Take a hike"],a:["A piece of cake","A walk in the park"],why:"Two ways of saying easy, rolled into one picnic."},
    {t:"hid",q:"Which money phrase is secretly a metaphor?",o:["cash flow","coin","pound","penny"],why:"Money doesn't really flow, but businesses talk about it as if it were water moving in and out."}
  ],
  [
    {t:"sim",q:"as flat as a ___",o:["pancake","plate","board","floor"],why:"Pancakes have been the standard of flatness since the 1500s."},
    {t:"poet",q:"“My heart is like a singing bird”",o:["Christina Rossetti","Elizabeth Barrett Browning","Emily Brontë","Emily Dickinson"],why:"Christina Rossetti, A Birthday (1862). A run of similes builds to the reason: ‘my love is come to me’."},
    {t:"mix",q:"That ship has sailed under the bridge.",o:["That ship has sailed","Water under the bridge","Abandon ship","Cross that bridge when you come to it"],a:["That ship has sailed","Water under the bridge"],why:"Too late meets it's in the past. Both are about moving on, which is how they got tangled."},
    {t:"hid",q:"Which weather word is secretly a metaphor?",o:["heatwave","drizzle","sleet","hail"],why:"Hot air doesn't come in waves; the heat rolls in like the sea."}
  ],
  [
    {t:"sim",q:"as quiet as a ___",o:["mouse","cat","shadow","snail"],why:"Mice creep about without a sound. The phrase goes back at least to the 1500s."},
    {t:"cls",q:"The car coughed and spluttered up the hill.",a:"Neither",why:"A trap: no like or as, and the car isn't called something else. It's personification, giving a machine a cold."},
    {t:"mix",q:"Let sleeping dogs lie in the bed you've made.",o:["Let sleeping dogs lie","You've made your bed, now lie in it","Every dog has its day","Get out of bed on the wrong side"],a:["Let sleeping dogs lie","You've made your bed, now lie in it"],why:"Leave it alone meets live with the consequences. The dog now has your bed."},
    {t:"hid",q:"Which part of a book is secretly a metaphor?",o:["spine","page","paragraph","title"],why:"A book's spine holds it together like a backbone."}
  ],
  [
    {t:"sim",q:"as clean as a ___",o:["whistle","plate","pin","window"],why:"A clean whistle gives a clear note. The phrase also meant completely, as in cut clean as a whistle."},
    {t:"poet",q:"“Shall I compare thee to a summer's day?”",o:["William Shakespeare","Christopher Marlowe","Ben Jonson","John Donne"],why:"Shakespeare, Sonnet 18. He asks the question and then decides the summer's day doesn't measure up."},
    {t:"mix",q:"You're barking up the wrong end of the stick.",o:["Barking up the wrong tree","Get the wrong end of the stick","His bark is worse than his bite","Carrot and stick"],a:["Barking up the wrong tree","Get the wrong end of the stick"],why:"Both mean you've misunderstood. Together they give the dog a stick to chew on."},
    {t:"hid",q:"Which vegetable name is secretly a metaphor?",o:["lady's finger","carrot","pea","leek"],why:"Lady's finger is another name for okra, from its long slim shape."}
  ],
  [
    {t:"sim",q:"as thin as a ___",o:["rake","stick","pin","pole"],why:"Chaucer's poor student in The Canterbury Tales rides a horse ‘as lene… as is a rake’."},
    {t:"cls",q:"Her words were daggers.",a:"Metaphor",why:"The words simply are daggers, sharp and wounding: a metaphor. Hamlet says ‘I will speak daggers to her, but use none’."},
    {t:"mix",q:"Strike while the iron is in the fire.",o:["Strike while the iron is hot","Too many irons in the fire","Fight fire with fire","Rule with an iron fist"],a:["Strike while the iron is hot","Too many irons in the fire"],why:"Act now meets doing too much at once. The blacksmith is very busy."},
    {t:"sim",q:"as nutty as a ___",o:["fruitcake","walnut","squirrel","sponge"],why:"Nutty means mad, and a fruitcake is full of nuts. The phrase took off in 1930s America."}
  ],
  [
    {t:"boss",q:"It has a face but cannot see, two hands but cannot clap, and it has something new to tell you every minute.",o:["a clock","a mirror","a newspaper","a robot"],why:"Face and hands are old metaphors for a clock. A mirror has no hands."},
    {t:"boss",q:"A silver coin is tossed into the night sky and nobody ever catches it. Each night a little more of it is spent, until it's minted fresh again.",o:["the moon","a star","a comet","a streetlamp"],why:"Spent a little each night: the moon wanes, then comes back new."},
    {t:"boss",q:"“Now is the winter of our discontent / Made glorious summer by this sun of York”",o:["hard times","bad weather","old age","the night"],why:"Shakespeare, Richard III. The winter is the gloomy years now over; the sun of York is a pun on Edward IV, son of York."},
    {t:"boss",q:"Every morning, mouths open in the pavement and swallow the people of the city. Every evening they spit them out again.",o:["Tube stations","caves","factories","graves"],why:"Mouths in the pavement swallowing commuters: the Underground entrances at rush hour."}
  ],
  [
    {t:"sim",q:"as pleased as ___",o:["Punch","Judy","a king","a dog"],why:"Mr Punch of Punch and Judy, forever delighted with his own wickedness."},
    {t:"cls",q:"He ran as fast as he could.",a:"Neither",why:"A trap: as... as is here, but he's only compared with himself. A simile compares two different things."},
    {t:"mix",q:"Put that in your pipe and stew in it.",o:["Put that in your pipe and smoke it","Stew in your own juice","Pipe dream","In a stew"],a:["Put that in your pipe and smoke it","Stew in your own juice"],why:"Take that! meets suffer the consequences. Two ways of being told off at once."},
    {t:"hid",q:"Which hill word is secretly a metaphor?",o:["brow","mound","slope","incline"],why:"The brow of a hill is its forehead, the part that juts out at the top."}
  ],
  [
    {t:"sim",q:"as snug as a bug in a ___",o:["rug","mug","jug","rag"],why:"Benjamin Franklin used it in a 1772 letter, though it's older. The rhyme does the work."},
    {t:"cls",q:"The stars were diamonds scattered on black velvet.",a:"Metaphor",why:"The stars are diamonds here, not like them: a metaphor."},
    {t:"mix",q:"You can't have your cake and beat it.",o:["Have your cake and eat it","If you can't beat them, join them","A piece of cake","Beat around the bush"],a:["Have your cake and eat it","If you can't beat them, join them"],why:"You can't have it both ways meets give in and join the winners."},
    {t:"hid",q:"Which word for having ideas is secretly a metaphor?",o:["brainstorm","plan","notion","thought"],why:"A storm in the brain. It once meant a fit of madness, before office meetings took it over."}
  ],
  [
    {t:"sim",q:"as mad as a ___",o:["hatter","hare","hornet","hen"],why:"Hat-makers used mercury to treat felt, and many were poisoned by it. The phrase was around before Alice met the Hatter."},
    {t:"poet",q:"“Life, like a dome of many-coloured glass, / Stains the white radiance of Eternity”",o:["Percy Bysshe Shelley","John Keats","Lord Byron","William Blake"],why:"Shelley, Adonais (1821), his elegy for Keats. Life is like stained glass, colouring the pure white light beyond."},
    {t:"mix",q:"It's six of one and two in the bush.",o:["Six of one and half a dozen of the other","A bird in the hand is worth two in the bush","At sixes and sevens","Beat about the bush"],a:["Six of one and half a dozen of the other","A bird in the hand is worth two in the bush"],why:"No difference meets keep what you've got. The arithmetic doesn't add up."},
    {t:"hid",q:"Which sewing phrase is secretly a metaphor?",o:["the eye of a needle","thread","thimble","stitch"],why:"A needle can't see: the hole is called an eye for its shape."}
  ],
  [
    {t:"sim",q:"as sound as a ___",o:["bell","drum","pound","horn"],why:"A cracked bell sounds wrong, so a bell that rings true is sound all through."},
    {t:"cls",q:"She sings like an angel.",a:"Simile",why:"Like makes it a simile."},
    {t:"mix",q:"It's raining cats and dogs on my parade.",o:["Raining cats and dogs","Rain on my parade","Fight like cat and dog","Right as rain"],a:["Raining cats and dogs","Rain on my parade"],why:"Pouring down meets spoiling the fun. A very soggy parade."},
    {t:"hid",q:"Which car part is secretly a metaphor?",o:["bonnet","wheel","engine","brake"],why:"The bonnet covers the engine like a hat. Americans call it the hood, another hat."}
  ],
  [
    {t:"sim",q:"as proud as a ___",o:["peacock","lion","king","swan"],why:"The peacock's spread tail has stood for pride since the Middle Ages."},
    {t:"poet",q:"“The Assyrian came down like the wolf on the fold”",o:["Lord Byron","Walter Scott","Robert Southey","Thomas Moore"],why:"Byron, The Destruction of Sennacherib (1815). The army falls on the city like a wolf on a sheepfold."},
    {t:"mix",q:"That's the last nail in the camel's back.",o:["The final nail in the coffin","The straw that broke the camel's back","Hit the nail on the head","Get the hump"],a:["The final nail in the coffin","The straw that broke the camel's back"],why:"Two ways of saying the end has come. The camel has a very bad day."},
    {t:"hid",q:"Which word for news is secretly a metaphor?",o:["grapevine","report","bulletin","update"],why:"Heard it on the grapevine: rumours spread along twisting, hidden lines, like a vine."}
  ],
  [
    {t:"sim",q:"as stubborn as a ___",o:["mule","goat","donkey","ox"],why:"Mules are famous for refusing to budge, though owners say they're just being careful."},
    {t:"cls",q:"This cake is as big as that one.",a:"Neither",why:"A plain comparison of two cakes, not a figure of speech. A simile compares things that are different in kind."},
    {t:"mix",q:"There's no use crying over spilt beans.",o:["Don't cry over spilt milk","Spill the beans","Cry wolf","Full of beans"],a:["Don't cry over spilt milk","Spill the beans"],why:"Don't fret about it meets give away the secret."},
    {t:"sim",q:"as fresh as a ___",o:["daisy","rose","tulip","fern"],why:"The daisy opens fresh every morning: its name means day's eye."}
  ],
  [
    {t:"boss",q:"“That time of year thou mayst in me behold / When yellow leaves, or none, or few, do hang”",o:["old age","autumn","a forest","winter"],why:"Shakespeare, Sonnet 73. The autumn is a metaphor: the speaker is growing old."},
    {t:"boss",q:"It runs but never walks, has a mouth but never talks, and has a bed but never sleeps.",o:["a river","a road","a clock","a train"],why:"An old riddle. A river runs, has a mouth at the sea, and lies in its bed."},
    {t:"boss",q:"Overnight a white sheet is laid over the whole county, deep enough to swallow your boots. By noon the sun has started folding it away.",o:["snow","frost","fog","a cloud"],why:"Deep enough to swallow boots: frost is only a thin coat."},
    {t:"boss",q:"Every December a green guest comes in from the cold. It is dressed in lights and jewels, admired for a fortnight, then put out bare in January.",o:["a Christmas tree","a snowman","a robin","holly"],why:"Comes indoors, dressed in lights and baubles, out in January: the Christmas tree."}
  ]
];
