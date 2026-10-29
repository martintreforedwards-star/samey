// Rhymey puzzle lists. Each round type works through its own list in order and starts again from the top when it
// runs out, so keep adding to the end. Lines marked by:ORIG are placeholders for Martin's own verse: swap them for
// your lines whenever you like (keep the same shape).
// Accent rule: only use rhymes that work in every British accent (no bath/trap or foot/strut traps).
const ORIG='Original verse';

// Odd one out. w[0] is the word that DOESN'T rhyme; the other three do. Eye-rhymes make the best traps.
const ODD=[
  {w:['cough','bough','cow','now'],o:'Bough, cow and now all share the <i>ow</i> sound. Cough rhymes with <i>off</i>, even though it is spelt like bough.'},
  {w:['through','though','dough','sew'],o:'Though, dough and sew all rhyme with <i>go</i>. Through rhymes with <i>too</i>: same letters as though, different sound.'},
  {w:['move','love','glove','shove'],o:'Love, glove and shove rhyme. Move rhymes with <i>groove</i>. Poets have been pairing love and move as an eye-rhyme for centuries.'},
  {w:['weight','height','kite','bite'],o:'Height, kite and bite share the <i>eye</i> sound. Weight rhymes with <i>gate</i>, despite looking like height.'},
  {w:['beard','heard','bird','word'],o:'Heard, bird and word all rhyme. Beard rhymes with <i>weird</i>, though it looks like heard with a b.'},
  {w:['treat','great','bait','straight'],o:'Great, bait and straight rhyme with <i>gate</i>. Treat rhymes with <i>sweet</i>, even though it ends just like great.'},
  {w:['tomb','comb','home','roam'],o:'Comb, home and roam rhyme. Tomb rhymes with <i>room</i>, which catches out plenty of readers.'},
  {w:['speak','steak','break','ache'],o:'Steak, break and ache rhyme with <i>cake</i>. Speak rhymes with <i>week</i>, though it looks like steak.'},
  {w:['paid','said','bed','head'],o:'Said, bed and head rhyme. Paid rhymes with <i>made</i>, even though said is spelt like it.'},
  {w:['pour','hour','flower','power'],o:'Hour, flower and power share the <i>ow</i> sound. Pour rhymes with <i>more</i>, despite looking like hour.'},
  {w:['word','sword','board','cord'],o:'Sword (the w is silent), board and cord rhyme. Word rhymes with <i>bird</i>.'},
  {w:['pint','hint','mint','lint'],o:'Hint, mint and lint rhyme. Pint is the famous odd one out: it rhymes with <i>pine</i> + t.'},
  {w:['bone','gone','on','con'],o:'Gone, on and con rhyme. Bone rhymes with <i>stone</i>, even though gone ends with the same letters.'},
  {w:['food','blood','mud','flood'],o:'Blood, mud and flood rhyme. Food rhymes with <i>mood</i>, though blood and flood look like it.'}
];

// Finish the line. The last line ends in ___. a rhymes AND keeps the beat; every decoy fails on one or the other.
const COUPLET=[
  {l:['A little learning is a dangerous thing;','Drink deep, or taste not the Pierian ___'],a:'spring',f:['stream','fountain','offering'],by:'Alexander Pope, 1711',o:'Spring rhymes with thing and lands on the final beat. Offering only rhymes on its weak last syllable, so the line ends with a stumble.'},
  {l:['So long as men can breathe, or eyes can see,','So long lives this, and this gives life to ___'],a:'thee',f:['you','melody','forever'],by:'William Shakespeare, Sonnet 18',o:'Thee rhymes with see and fills the tenth syllable. Melody has the right sound at the end, but too many syllables and the stress in the wrong place.'},
  {l:['Tyger Tyger, burning bright,','In the forests of the ___'],a:'night',f:['day','twilight','midnight'],by:'William Blake, 1794',o:'Night rhymes with bright and ends the line on a strong beat. Midnight and twilight put their stress on the first syllable, so the line goes limp at the end.'},
  {l:['I wandered lonely as a cloud','That floats on high o\'er vales and hills,','When all at once I saw a ___'],a:'crowd',f:['host','throng','multitude'],by:'William Wordsworth, 1807',o:'Crowd rhymes with cloud from the first line (the pattern is ABAB). Host keeps the beat but doesn\'t rhyme: Wordsworth saves it for the next line, <i>A host, of golden daffodils</i>.'},
  {l:['Water, water, every where,','And all the boards did shrink;','Water, water, every where,','Nor any drop to ___'],a:'drink',f:['sip','swallow','drinking'],by:'Samuel Taylor Coleridge, 1798',o:'Drink rhymes with shrink. Drinking adds an extra weak syllable, which breaks both the rhyme and the beat.'},
  {l:['Double, double toil and trouble;','Fire burn and cauldron ___'],a:'bubble',f:['boil','steam','bubbling'],by:'William Shakespeare, Macbeth',o:'Bubble rhymes with trouble: a two-syllable rhyme, stressed on the first. Bubbling has one syllable too many.'},
  {l:['They dined on mince, and slices of quince,','Which they ate with a runcible spoon;','And hand in hand, on the edge of the sand,','They danced by the light of the ___'],a:'moon',f:['stars','lantern','afternoon'],by:'Edward Lear, 1871',o:'Moon rhymes with spoon. Afternoon rhymes too, but crams in two extra syllables and wrecks the bouncy da-da-DUM rhythm.'},
  {l:['If this be error and upon me proved,','I never writ, nor no man ever ___'],a:'loved',f:['cared','wed','beloved'],by:'William Shakespeare, Sonnet 116',o:'Loved rhymes with proved: another eye-rhyme that Shakespeare\'s ear may well have heard as a true one. Beloved adds a syllable and runs past the end of the line.'},
  {l:['The curfew tolls the knell of parting day,','The lowing herd wind slowly o\'er the lea,','The ploughman homeward plods his weary way,','And leaves the world to darkness and to ___'],a:'me',f:['night','him','memory'],by:'Thomas Gray, 1751',o:'Me rhymes with lea (ABAB again). Memory ends in the right sound, but its stress lands on the first syllable and the line overflows.'},
  {l:['O my Luve is like a red, red rose','That\'s newly sprung in June;','O my Luve is like the melodie','That\'s sweetly played in ___'],a:'tune',f:['song','time','afternoon'],by:'Robert Burns, 1794',o:'Tune rhymes with June. Only the second and fourth lines rhyme here (ABCB), the usual pattern for a ballad.'},
  {l:['The kettle\'s on, the biscuits wait;','The post arrives, as always, ___'],a:'late',f:['slow','lately','early'],by:ORIG,o:'Late rhymes with wait and lands on the beat. Lately rhymes on its first syllable, then trails off with an extra one.'},
  {l:['I tried to write a perfect line;','The rhythm slipped, the rhyme was ___'],a:'fine',f:['good','divine','perfect'],by:ORIG,o:'Fine rhymes with line. Divine rhymes too, but its extra syllable makes the rhythm slip, which is a bit too on the nose.'},
  {l:['The sun came out on Margate pier,','The first warm afternoon this ___'],a:'year',f:['month','summer','yesteryear'],by:ORIG,o:'Year rhymes with pier. Yesteryear rhymes but adds two syllables, so the line runs long.'},
  {l:['He asked me why the sky is blue;','I said I hadn\'t got a ___'],a:'clue',f:['hint','notion','residue'],by:ORIG,o:'Clue rhymes with blue. Residue ends with the same sound, but the stress is on <i>RES</i>, so the rhyme falls on a weak syllable.'}
];

// Fix the line. The [bracketed] word breaks the metre; a puts it right. Every decoy still breaks it.
const FIX=[
  {l:'Shall I compare thee to a [summertime] day?',a:'summer\'s',f:['glorious','midsummer\'s','beautiful'],by:'William Shakespeare, Sonnet 18',p:'shall i com-PARE thee TO a SUM-mer\'s DAY',o:'Ten syllables, five da-DUM beats. Summer\'s fits in two syllables, stressed on the first. The others need three, so the beat trips.'},
  {l:'Tyger Tyger, [incandescent] bright',a:'burning',f:['aflame','ablaze','luminous'],by:'William Blake, 1794',p:'TY-ger TY-ger BURN-ing BRIGHT',o:'The line goes DUM-da, so the missing word needs its stress first. Aflame and ablaze are stressed on the second syllable, and luminous has one syllable too many.'},
  {l:'The [contented] herd wind slowly o\'er the lea',a:'lowing',f:['bellowing','cow','unhappy'],by:'Thomas Gray, 1751',p:'the LOW-ing HERD wind SLOW-ly O\'ER the LEA',o:'The gap needs two syllables, stressed on the first. Lowing (mooing, gently) does the job. Cow is too short and the others too long.'},
  {l:'I wandered [solitary] as a cloud',a:'lonely',f:['alone','sad','forlorn'],by:'William Wordsworth, 1807',p:'i WAN-dered LONE-ly AS a CLOUD',o:'Eight syllables, four da-DUM beats. Lonely is stressed on the first syllable, as the beat needs. Alone and forlorn are stressed on the second, and sad is one short.'},
  {l:'The morning train is [unfortunately] late again',a:'running',f:['delayed','slow','extremely'],by:ORIG,p:'the MOR-ning TRAIN is RUN-ning LATE a-GAIN',o:'The line wants a DUM-da word. Delayed is da-DUM, so two stresses bump together. Slow is a syllable short and extremely is one too long.'},
  {l:'Now is the [wintertime] of our discontent',a:'winter',f:['chill','December','frost'],by:'William Shakespeare, Richard III',p:'NOW is the WIN-ter OF our DIS-con-TENT',o:'Winter keeps it to ten syllables. Chill and frost are one short; December and wintertime are one too long.'},
  {l:'Was this the face that launched [innumerable] ships',a:'a thousand',f:['countless','millions of','a myriad of'],by:'Christopher Marlowe, c. 1592',p:'was THIS the FACE that LAUNCHED a THOU-sand SHIPS',o:'A thousand fills three syllables as da-DUM-da. Countless leaves the line a syllable short; the others overload it.'},
  {l:'Season of mists and [ripe] fruitfulness',a:'mellow',f:['sweet','overripe','abundant'],by:'John Keats, 1819',p:'SEA-son of MISTS and MEL-low FRUIT-ful-NESS',o:'Keats needs two syllables here, stressed on the first. Mellow is perfect. Sweet and ripe are one short; overripe and abundant are one too many.'}
];

// Name the metre. p shows the stresses in capitals. Answer must be one of the four in METRES.
const METRES=[['Iambic','da-DUM'],['Trochaic','DUM-da'],['Anapaestic','da-da-DUM'],['Dactylic','DUM-da-da']];
const METRE=[
  {l:'But soft, what light through yonder window breaks?',a:'Iambic',by:'William Shakespeare, Romeo and Juliet',p:'but SOFT, what LIGHT through YON-der WIN-dow BREAKS',o:'Five da-DUM beats: iambic pentameter, the most common line in English verse.'},
  {l:'Tyger Tyger, burning bright',a:'Trochaic',by:'William Blake, 1794',p:'TY-ger TY-ger BURN-ing BRIGHT',o:'DUM-da beats, with the last weak syllable dropped so the line ends with a thump.'},
  {l:'\'Twas the night before Christmas, when all through the house',a:'Anapaestic',by:'Clement Clarke Moore, 1823',p:'\'twas the NIGHT be-fore CHRIST-mas, when ALL through the HOUSE',o:'Da-da-DUM, four times. Anapaests gallop, which is why they suit comic and festive verse.'},
  {l:'This is the forest primeval. The murmuring pines and the hemlocks',a:'Dactylic',by:'Henry Wadsworth Longfellow, 1847',p:'THIS is the FOR-est pri-MEV-al. The MUR-mur-ing PINES and the HEM-locks',o:'DUM-da-da: dactylic hexameter, the metre of Homer, which Longfellow borrowed for <i>Evangeline</i>.'},
  {l:'The Assyrian came down like the wolf on the fold',a:'Anapaestic',by:'Lord Byron, 1815',p:'the as-SYR-ian came DOWN like the WOLF on the FOLD',o:'Da-da-DUM, four times over: the rhythm of galloping horses, which suits a charging army.'},
  {l:'Once upon a midnight dreary, while I pondered, weak and weary',a:'Trochaic',by:'Edgar Allan Poe, 1845',p:'ONCE up-ON a MID-night DREAR-y, WHILE i PON-dered, WEAK and WEAR-y',o:'Eight DUM-da beats. Poe\'s trochees give <i>The Raven</i> its hypnotic, chanting feel.'},
  {l:'The curfew tolls the knell of parting day',a:'Iambic',by:'Thomas Gray, 1751',p:'the CUR-few TOLLS the KNELL of PART-ing DAY',o:'Five steady da-DUM beats: iambic pentameter, slow and solemn like a bell.'},
  {l:'Just for a handful of silver he left us',a:'Dactylic',by:'Robert Browning, 1845',p:'JUST for a HAND-ful of SIL-ver he LEFT us',o:'DUM-da-da, DUM-da-da, then a shortened last foot. Dactyls have a falling, lilting feel.'},
  {l:'By the shores of Gitche Gumee',a:'Trochaic',by:'Henry Wadsworth Longfellow, 1855',p:'BY the SHORES of GIT-che GU-mee',o:'DUM-da, four times. <i>The Song of Hiawatha</i> is trochaic all the way through, all 5,000-odd lines.'},
  {l:'Half a league, half a league, half a league onward',a:'Dactylic',by:'Alfred, Lord Tennyson, 1854',p:'HALF a league, HALF a league, HALF a league ON-ward',o:'DUM-da-da, like hooves. <i>The Charge of the Light Brigade</i> is the classic English dactylic poem.'},
  {l:'At the end of the line, by the sea, in the rain',a:'Anapaestic',by:ORIG,p:'at the END of the LINE, by the SEA, in the RAIN',o:'Four da-da-DUM beats, each landing on the key word.'},
  {l:'Because I could not stop for Death',a:'Iambic',by:'Emily Dickinson, 1890',p:'be-CAUSE i COULD not STOP for DEATH',o:'Four da-DUM beats. Dickinson used the iambic rhythms of hymns throughout her poems.'}
];

// Rhyme scheme. Answer is one of SCHEMES.
const SCHEMES=['AABB','ABAB','ABBA','ABCB'];
const SCHEME=[
  {l:['Tyger Tyger, burning bright,','In the forests of the night;','What immortal hand or eye,','Could frame thy fearful symmetry?'],a:'AABB',by:'William Blake, 1794',o:'Two rhyming pairs: bright/night, then eye/symmetry. That second pair is a near-rhyme that still catches readers out.'},
  {l:['I wandered lonely as a cloud','That floats on high o\'er vales and hills,','When all at once I saw a crowd,','A host, of golden daffodils;'],a:'ABAB',by:'William Wordsworth, 1807',o:'Cloud/crowd and hills/daffodils: the rhymes alternate.'},
  {l:['Ring out, wild bells, to the wild sky,','The flying cloud, the frosty light:','The year is dying in the night;','Ring out, wild bells, and let him die.'],a:'ABBA',by:'Alfred, Lord Tennyson, 1850',o:'Sky/die wrap around light/night. Tennyson used this enclosed pattern for all of <i>In Memoriam</i>.'},
  {l:['Day after day, day after day,','We stuck, nor breath nor motion;','As idle as a painted ship','Upon a painted ocean.'],a:'ABCB',by:'Samuel Taylor Coleridge, 1798',o:'Only motion/ocean rhyme. Lines one and three are left free: the classic ballad stanza.'},
  {l:['O my Luve is like a red, red rose','That\'s newly sprung in June;','O my Luve is like the melodie','That\'s sweetly played in tune.'],a:'ABCB',by:'Robert Burns, 1794',o:'June/tune is the only rhyme. Burns wrote it to be sung, and ballad tunes love ABCB.'},
  {l:['The curfew tolls the knell of parting day,','The lowing herd wind slowly o\'er the lea,','The ploughman homeward plods his weary way,','And leaves the world to darkness and to me.'],a:'ABAB',by:'Thomas Gray, 1751',o:'Day/way and lea/me alternate: the elegiac stanza.'},
  {l:['Because I could not stop for Death –','He kindly stopped for me –','The Carriage held but just Ourselves –','And Immortality.'],a:'ABCB',by:'Emily Dickinson, 1890',o:'Me/Immortality is the only rhyme, and a slanted one, as Dickinson liked.'},
  {l:['Loveliest of trees, the cherry now','Is hung with bloom along the bough,','And stands about the woodland ride','Wearing white for Eastertide.'],a:'AABB',by:'A. E. Housman, 1896',o:'Now/bough, then ride/Eastertide: two rhyming couplets.'},
  {l:['I hold it true, whate\'er befall;','I feel it when I sorrow most;','\'Tis better to have loved and lost','Than never to have loved at all.'],a:'ABBA',by:'Alfred, Lord Tennyson, 1850',o:'Befall/all wrap around most/lost. That is the <i>In Memoriam</i> stanza again, and the source of a very famous saying.'},
  {l:['I have a little shadow that goes in and out with me,','And what can be the use of him is more than I can see.','He is very, very like me from the heels up to the head;','And I see him jump before me, when I jump into my bed.'],a:'AABB',by:'Robert Louis Stevenson, 1885',o:'Me/see, then head/bed: rhyming couplets, perfect for reading aloud.'},
  {l:['The platform clock says ten past eight,','The coffee\'s cold, the sky is grey;','The train, of course, is running late –','Another ordinary day.'],a:'ABAB',by:ORIG,o:'Eight/late and grey/day alternate.'},
  {l:['In the bleak mid-winter','Frosty wind made moan,','Earth stood hard as iron,','Water like a stone;'],a:'ABCB',by:'Christina Rossetti, 1872',o:'Moan/stone is the only rhyme. The short lines make it feel like a hymn.'}
];

// Tap the stress (Sunday boss). Words split by spaces, syllables by ·. b has one digit per syllable: 1 = stressed.
// Only use lines where every stressed beat is a word you'd naturally stress, so there's one fair answer.
const STRESS=[
  {t:'The cur·few tolls the knell of part·ing day',b:'0101010101',m:'Iambic pentameter',by:'Thomas Gray, 1751'},
  {t:'Ty·ger Ty·ger, burn·ing bright',b:'1010101',m:'Trochaic tetrameter, last syllable dropped',by:'William Blake, 1794'},
  {t:'\'Twas the night be·fore Christ·mas, when all through the house',b:'001001001001',m:'Anapaestic tetrameter',by:'Clement Clarke Moore, 1823'},
  {t:'Just for a hand·ful of sil·ver he left us',b:'10010010010',m:'Dactylic, with a shortened last foot',by:'Robert Browning, 1845'},
  {t:'Once up·on a mid·night drear·y',b:'10101010',m:'Trochaic tetrameter',by:'Edgar Allan Poe, 1845'},
  {t:'The cof·fee\'s cold, the train is late',b:'01010101',m:'Iambic tetrameter',by:ORIG},
  {t:'Dou·ble, dou·ble toil and trou·ble',b:'10101010',m:'Trochaic tetrameter',by:'William Shakespeare, Macbeth'},
  {t:'He kind·ly stopped for me',b:'010101',m:'Iambic trimeter',by:'Emily Dickinson, 1890'}
];
