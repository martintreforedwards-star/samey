// Phoney puzzle lists. Each round type works through its own list in order and starts again from the top when it
// runs out, so keep adding to the end.
// Accent rule: answers should hold for most British speakers. Spot the stop is always "in a London accent".

// Silent partner. w = the word, s = position of the silent letter (counting from 0). One silent letter per word,
// and no words ending in a "magic e" (that would count as a second silent letter).
const SILENT=[
  {w:'salmon',s:2,o:'Renaissance scholars added the l to echo Latin <i>salmo</i>. English speakers never started saying it.'},
  {w:'island',s:1,o:'Old English had <i>igland</i>. The s was slipped in during the 1500s by people who wrongly linked it to Latin <i>insula</i>.'},
  {w:'knot',s:0,o:'The k was really spoken in Old English. It faded out of speech around the 1600s, as in knee and knight.'},
  {w:'debt',s:2,o:'Middle English spelt it <i>dette</i>. The b was added to make it look like Latin <i>debitum</i>.'},
  {w:'autumn',s:5,o:'The n wakes up in <i>autumnal</i>, where a vowel follows it.'},
  {w:'honest',s:0,o:'It came from French, where the h was already silent. Hour and heir work the same way.'},
  {w:'foreign',s:5,o:'Middle English had <i>forein</i>. The g was added later, copying words like reign and sovereign.'},
  {w:'wrist',s:0,o:'The w was spoken in Old English. Wr- words lost it in the 1600s: write, wrong, wrap.'},
  {w:'doubt',s:3,o:'Middle English had <i>doute</i>. The b was added to match Latin <i>dubitare</i>.'},
  {w:'fasten',s:3,o:'You hear the t in <i>fast</i>, but it drops out when -en follows, as in listen and soften.'},
  {w:'receipt',s:5,o:'The p was added to echo Latin <i>recepta</i>. Its cousin receive never got one.'},
  {w:'column',s:5,o:'The n comes back in <i>columnar</i>, where a vowel follows it.'},
  {w:'thumb',s:4,o:'Old English had <i>thuma</i>, with no b at all. It was added in the Middle Ages, perhaps copying dumb.'},
  {w:'answer',s:3,o:'Old English <i>andswaru</i> had a spoken w. It wore away centuries ago, as in sword.'},
  {w:'ghost',s:1,o:'Old English had <i>gast</i>. Early printers added the h, probably under Flemish influence.'},
  {w:'Christmas',s:5,o:'You hear the t in Christ. Squeezed between s and m, it goes quiet.'},
  {w:'folk',s:2,o:'The l was spoken in Old English <i>folc</i>. It has gone quiet in folk, talk, walk and chalk.'},
  {w:'sword',s:1,o:'The w was spoken in Old English. It dropped out after s, before the o sound.'},
  {w:'gnaw',s:0,o:'The g was spoken in Old English. Gn- words lost it: gnat, gnome, gnash.'},
  {w:'solemn',s:5,o:'The n comes back in <i>solemnity</i>.'},
  {w:'plumber',s:4,o:'From Latin <i>plumbum</i>, lead: plumbers once worked with lead pipes. The b stopped being said centuries ago.'},
  {w:'campaign',s:6,o:'The gn spelling comes from French, where it made a "ny" sound. English kept the letters and dropped the sound.'},
  {w:'lamb',s:3,o:'After m, a final b fell silent centuries ago: lamb, comb, climb, tomb.'}
];

// Say the place. a = how locals say it, f = three wrong versions. Capitals mark the stressed syllable.
const PLACE=[
  {p:'Leominster',c:'Herefordshire',a:'LEM-ster',f:['LEE-oh-min-ster','LEM-in-ster','LYE-min-ster'],o:'Centuries of everyday use have worn it down to two syllables. The spelling kept the old shape.'},
  {p:'Bicester',c:'Oxfordshire',a:'BISS-ter',f:['BYE-sester','BISS-es-ter','BYE-ster'],o:'The -cester ending (from Latin <i>castra</i>, a camp) usually shrinks to -ster, as in Leicester.'},
  {p:'Keswick',c:'Cumbria',a:'KEZ-ick',f:['KES-wick','KEZ-wick','KEE-zick'],o:'The w in -wick place names often vanishes, as in Alnwick and Warwick.'},
  {p:'Happisburgh',c:'Norfolk',a:'HAZE-bruh',f:['HAP-is-burg','HAP-iz-bruh','HAPS-burg'],o:'One of England\'s most baffling: the whole middle has melted into HAZE.'},
  {p:'Slough',c:'Berkshire',a:'rhymes with cow',f:['rhymes with stuff','rhymes with too','rhymes with go'],o:'Slough rhymes with plough and bough. -ough is English\'s worst spelling: it has at least six sounds.'},
  {p:'Alnwick',c:'Northumberland',a:'AN-ick',f:['ALN-wick','AWL-nick','AL-nick'],o:'Both the l and the w have gone quiet.'},
  {p:'Mousehole',c:'Cornwall',a:'MOW-zul',f:['MOUSE-hole','MOOZ-hole','MUZZ-ul'],o:'MOW as in cow. It rhymes with tousle, and has nothing to do with mice or holes.'},
  {p:'Belvoir',c:'Leicestershire',a:'BEE-ver',f:['BEL-vwar','BEL-voy','BEL-vor'],o:'The name is Norman French for "beautiful view", but locals have said it the English way for centuries.'},
  {p:'Teignmouth',c:'Devon',a:'TIN-muth',f:['TAYN-mouth','TEEN-muth','TIGN-mouth'],o:'Mouth at the end of a place name is nearly always said <i>muth</i>, as in Plymouth.'},
  {p:'Keighley',c:'West Yorkshire',a:'KEETH-lee',f:['KAY-lee','KEE-lee','KYE-lee'],o:'The gh survives as a th sound, a leftover of an older throaty sound that most English words lost.'},
  {p:'Wymondham',c:'Norfolk',a:'WIN-dum',f:['WYE-mund-um','WIM-un-dam','WY-mond-ham'],o:'Watch out: the Wymondham in Leicestershire is said WYE-mund-um.'},
  {p:'Ightham',c:'Kent',a:'ITE-um',f:['IG-tham','IT-tham','ICK-tum'],o:'The gh is silent and the h of -ham drops away, a common pattern in -ham names.'},
  {p:'Fowey',c:'Cornwall',a:'FOY',f:['FOW-ee','FOH-ee','FOO-ee'],o:'One syllable, rhyming with boy.'},
  {p:'Loughborough',c:'Leicestershire',a:'LUFF-bruh',f:['LOO-bruh','LOCK-bruh','LOW-bruh'],o:'Two different -ough sounds in one word: the first is <i>uff</i>, the second shrinks to <i>bruh</i>.'},
  {p:'Hawick',c:'Scottish Borders',a:'HOYK',f:['HAW-ick','HAY-wick','HOW-ick'],o:'One syllable, rhyming with the oy of boy.'},
  {p:'Towcester',c:'Northamptonshire',a:'TOH-ster',f:['TOW-ses-ter','TOO-ster','TOW-ster'],o:'TOH rhymes with toe. Another -cester that has shrunk to -ster.'},
  {p:'Wrotham',c:'Kent',a:'ROOT-um',f:['ROTH-um','RAW-tham','ROT-um'],o:'The w is silent, as in wrong, and the th is just a t.'},
  {p:'Milngavie',c:'East Dunbartonshire',a:'mul-GUY',f:['MILN-gav-ee','mil-GAH-vee','MILL-ing-guy'],o:'The spelling comes from Gaelic, and the -gavie part is said <i>guy</i>.'},
  {p:'Southwark',c:'London',a:'SUTH-uk',f:['SOUTH-wark','SOUTH-uk','SUTH-wark'],o:'South shortens to <i>suth</i> (as in southern) and the w vanishes.'},
  {p:'Frome',c:'Somerset',a:'FROOM',f:['FROHM','FRUM','FROM'],o:'It rhymes with broom. The town is named after the River Frome.'},
  {p:'Trottiscliffe',c:'Kent',a:'TROSS-lee',f:['TROT-is-cliff','TROT-ee-sly','TROSS-cliff'],o:'Kent\'s trickiest: four written syllables collapse into two.'},
  {p:'Gloucester',c:'Gloucestershire',a:'GLOSS-ter',f:['GLOW-ses-ter','GLOO-ster','GLOW-ster'],o:'Like Bicester and Leicester, the middle syllable disappears.'},
  {p:'Kirkcudbright',c:'Dumfries and Galloway',a:'kur-KOO-bree',f:['KIRK-cud-bright','kirk-CUD-bree','KUR-kub-rite'],o:'It means the church of St Cuthbert. The stress lands on the middle.'},
  {p:'Ruislip',c:'London',a:'RYE-slip',f:['ROO-iss-lip','RWEE-slip','RUSS-lip'],o:'The ui is said like the eye in rise.'},
  {p:'Costessey',c:'Norfolk',a:'KOSS-ee',f:['KOS-tess-ee','KOST-uh-see','kos-TESS-ee'],o:'Norfolk likes to squash its place names: three written syllables become two.'}
];

// Stress test. s = sentence with the word in [brackets], a = the right stress, f = the other. Capitals = stressed.
const STRESS=[
  {s:'The council will [record] the meeting.',a:'reCORD',f:'REcord',o:'It\'s a verb here, so the stress moves to the end. The noun is a REcord.'},
  {s:'She wrapped a [present] for her sister.',a:'PRESent',f:'preSENT',o:'A noun, so the stress is at the front. The verb is to preSENT.'},
  {s:'I [object] to that remark.',a:'obJECT',f:'OBject',o:'Verbs in these pairs usually stress the second syllable. An OBject is a thing.'},
  {s:'Hand your [project] in by Friday.',a:'PROject',f:'proJECT',o:'Noun, so front stress. To proJECT is to throw forward or show on a screen.'},
  {s:'Who will [conduct] the orchestra?',a:'conDUCT',f:'CONduct',o:'A verb. Your CONduct is how you behave.'},
  {s:'You need a [permit] to park here.',a:'PERmit',f:'perMIT',o:'A noun. Teachers perMIT things; councils issue PERmits.'},
  {s:'Prices will [increase] in April.',a:'inCREASE',f:'INcrease',o:'A verb. "There was an INcrease" uses the noun.'},
  {s:'He was a [rebel] at school.',a:'REBel',f:'reBEL',o:'A noun, said REB-ul. To reBEL is the verb.'},
  {s:'Don\'t [insult] the referee.',a:'inSULT',f:'INsult',o:'A verb. Shouting an INsult is the noun.'},
  {s:'Tea was once the town\'s main [export].',a:'EXport',f:'exPORT',o:'A noun. Countries exPORT goods.'},
  {s:'Workers plan to [protest] outside.',a:'proTEST',f:'PROtest',o:'In British English the verb takes the stress on -TEST. Americans often say PROtest for both.'},
  {s:'The cat looked [content] by the fire.',a:'conTENT',f:'CONtent',o:'An adjective meaning happy. The CONtent of a book is what\'s in it.'},
  {s:'Your ticket is [invalid].',a:'inVALid',f:'INvalid',o:'Not valid. The noun INvalid (a person who is ill) is a different word with the same spelling.'},
  {s:'The bins are full of [refuse].',a:'REFuse',f:'reFUSE',o:'Rubbish, said REF-yooss: the vowel changes as well as the stress. To reFUSE is to say no.'},
  {s:'The jury may [convict] him.',a:'conVICT',f:'CONvict',o:'A verb. A CONvict is someone in prison.'},
  {s:'Wipe your feet at the [entrance].',a:'ENtrance',f:'enTRANCE',o:'A way in. To enTRANCE someone is to put them under a spell.'},
  {s:'Can you [produce] a receipt?',a:'proDUCE',f:'PROduce',o:'A verb. PROduce is fruit and veg.'},
  {s:'The camel crossed the [desert].',a:'DEsert',f:'deSERT',o:'Sand and heat. To deSERT is to abandon, and pudding is a deSSERT.'},
  {s:'The talks ended in [conflict].',a:'CONflict',f:'conFLICT',o:'A noun. Two dates can conFLICT.'},
  {s:'The magazine prints a weekly [digest].',a:'DIgest',f:'diGEST',o:'A noun: a summary. Your stomach will diGEST lunch.'}
];

// Odd sound out. w[0] is the odd one; the other three share a sound. [Brackets] mark the letters to listen to.
// t = the letters named in the question.
const ODD=[
  {t:'ch',w:['[ch]ef','[ch]ip','[ch]op','[ch]eese'],o:'Chef keeps its French <i>sh</i> sound. The others have the English <i>ch</i>.'},
  {t:'th',w:['[th]in','[th]is','[th]at','[th]em'],o:'Put your hand on your throat: this, that and them buzz (voiced <i>th</i>). Thin doesn\'t.'},
  {t:'c',w:['[c]at','[c]ity','[c]ell','[c]ent'],o:'Before e, i and y, c usually goes soft, like <i>s</i>. Cat keeps the hard <i>k</i>.'},
  {t:'s',w:['do[s]e','ro[s]e','no[s]e','ho[s]e'],o:'Rose, nose and hose have a <i>z</i> sound. Dose keeps a hissing <i>s</i>.'},
  {t:'ea',w:['b[ea]d','br[ea]d','h[ea]d','d[ea]d'],o:'Bread, head and dead have a short <i>e</i>. Bead has a long <i>ee</i>.'},
  {t:'ed',w:['want[ed]','walk[ed]','jump[ed]','kiss[ed]'],o:'After t or d, -ed adds a whole syllable (<i>want-id</i>). Walked, jumped and kissed just end in a <i>t</i> sound.'},
  {t:'ow',w:['l[ow]','c[ow]','n[ow]','h[ow]'],o:'Cow, now and how share the <i>ow!</i> sound. Low rhymes with go.'},
  {t:'ch',w:['[ch]eap','[ch]orus','[ch]oir','[ch]emist'],o:'Chorus, choir and chemist come from Greek and say <i>k</i>. Cheap has the English <i>ch</i>.'},
  {t:'g',w:['[g]ift','[g]em','[g]in','[g]iraffe'],o:'Gem, gin and giraffe have a soft <i>j</i> sound. Gift keeps the hard <i>g</i>, despite the i after it.'},
  {t:'ed',w:['hop[ed]','play[ed]','clean[ed]','call[ed]'],o:'After a voiced sound, -ed sounds like <i>d</i>. Hoped ends in a <i>t</i> sound, because p is unvoiced.'},
  {t:'x',w:['[x]ylophone','bo[x]','fo[x]','si[x]'],o:'At the start of a word, x says <i>z</i>. Everywhere else it\'s usually <i>ks</i>.'},
  {t:'ph',w:['she[ph]erd','[ph]one','gra[ph]','[ph]oto'],o:'Shepherd is <i>sheep + herd</i>, so the p and h are said apart (and the h drops). The others say <i>f</i>.'},
  {t:'s',w:['cat[s]','dog[s]','bee[s]','car[s]'],o:'A plural s after a voiced sound says <i>z</i>. After t it stays as <i>s</i>.'},
  {t:'ei',w:['v[ei]n','rec[ei]ve','c[ei]ling','s[ei]ze'],o:'Receive, ceiling and seize say <i>ee</i>. Vein says <i>ay</i>.'},
  {t:'gh',w:['thou[gh]','lau[gh]','cou[gh]','enou[gh]'],o:'In laugh, cough and enough, gh says <i>f</i>. In though it\'s silent.'},
  {t:'th',w:['[th]ose','[th]umb','[th]ick','[th]ought'],o:'Those has the buzzing, voiced <i>th</i>. Thumb, thick and thought don\'t buzz.'},
  {t:'c',w:['o[c]ean','[c]ar','[c]up','[c]ake'],o:'Ocean\'s c says <i>sh</i>. The others are a plain hard <i>k</i>.'},
  {t:'s',w:['mea[s]ure','pre[ss]ure','trea[s]ure','plea[s]ure'],o:'Pressure has an <i>sh</i>. Measure, treasure and pleasure have the rarer <i>zh</i> sound, as in vision.'},
  {t:'ch',w:['[ch]ain','[ch]ampagne','[ch]alet','[ch]ute'],o:'Champagne, chalet and chute are French and say <i>sh</i>. Chain has the English <i>ch</i>.'},
  {t:'s',w:['[s]ugar','[s]un','[s]it','[s]ad'],o:'Sugar starts with an <i>sh</i> sound, like sure. The others are a plain <i>s</i>.'}
];

// Spot the stop: tap every t that a London accent swaps for a glottal stop.
// In p, write # for a t that becomes a stop (## for a double tt). Plain t's are decoys that stay as t.
// A t before h (the, than) isn't a t sound and isn't tappable.
// The rule: London speech swaps t for a stop at the end of a word, or between vowels when the next syllable
// isn't stressed. A t that starts a word or a stressed syllable stays.
const STOP=[
  {p:'Ge# a bi# of wa#er',o:'The classic: three t\'s, all at the end of a word or between vowels in an unstressed spot.'},
  {p:'Take a li##le bo##le',o:'Take keeps its t because it starts the word. Little and bottle lose theirs.'},
  {p:'Pu# the ke##le on',o:'Put loses its final t before the. Kettle\'s tt comes before an unstressed -le, so it goes too.'},
  {p:'No# a lo# of time',o:'Not and lot end in t, so they become stops. Time starts with t, so it stays.'},
  {p:'Ten to eigh#',o:'Ten and to start with t, so they keep it. Only eight, with t at the end, loses it.'},
  {p:'Wha# a pre##y ci#y',o:'Three stops. Pretty and city have t between vowels, before an unstressed syllable.'},
  {p:'Return to the ci#y',o:'Return keeps its t because the stress falls on -TURN. To starts with t, so it stays. Only city loses it.'},
  {p:'Tea a# eigh#',o:'Tea starts with t, so it stays. At and eight end in t, so they become stops.'},
  {p:'Si# a# the compu#er',o:'Sit and at end in t. In computer, the t comes before an unstressed -er, so it goes too.'},
  {p:'Turn i# up a bi#',o:'Turn starts with t, so it stays. It and bit lose theirs.'},
  {p:'Sa#urday nigh#',o:'Saturday\'s t comes after the stressed SAT, before an unstressed vowel. Night ends in t.'},
  {p:'Wai# a minu#e',o:'Both t sounds end a word (the e in minute is silent), so both go.'},
  {p:'A li##le bi# of bu##er',o:'Three stops: little, bit and butter.'},
  {p:'Le# me ge# i#',o:'Every t here ends a word, so all three become stops.'},
  {p:'Too ho# to si# ou#side',o:'Too and to start with t, so they stay. Hot, sit and outside lose theirs.'},
  {p:'Ho# wa#er bo##le',o:'All three go. Hot ends in t; water and bottle have t before an unstressed syllable.'}
];

// Sunday special: Sound it out. i = the word in phonetic script (IPA, British), a = the word, f = three decoys.
// Never use a decoy that sounds the same as the answer (kernel for colonel, quire for choir).
const IPA=[
  {i:'jɒt',a:'yacht',f:['jot','yet','yeti'],o:'In IPA, <i>j</i> is the y sound in yes, and <i>ɒ</i> is the short o in hot. The ch in yacht is silent.'},
  {i:'ˈkɜːnl',a:'colonel',f:['colony','column','kennel'],o:'<i>ɜː</i> is the long vowel in bird. Colonel sounds exactly like kernel, thanks to an old French spelling mix-up.'},
  {i:'ˈkwaɪə',a:'choir',f:['query','quiver','coir'],o:'<i>aɪ</i> is the eye sound and <i>ə</i> is the quick uh. The ch says k, and a w slips in.'},
  {i:'ˈθʌrə',a:'thorough',f:['through','thought','throw'],o:'<i>θ</i> is the th in thin and <i>ʌ</i> is the u in cup.'},
  {i:'ˈaɪlənd',a:'island',f:['Iceland','eyelid','Ireland'],o:'No s sound anywhere: <i>aɪ</i> then <i>lənd</i>.'},
  {i:'ˈrɪðəm',a:'rhythm',f:['rhyme','writhe','written'],o:'<i>ð</i> is the buzzing th in this. Rhythm has no vowel letter after the y, but you say one: <i>ə</i>.'},
  {i:'ˈnɒlɪdʒ',a:'knowledge',f:['nobody','knowing','ledger'],o:'<i>dʒ</i> is the j sound. The k is silent and the ow is a short o, unlike in know.'},
  {i:'ˈskwɪrəl',a:'squirrel',f:['squirm','swirl','sequel'],o:'British English says <i>skwi-rul</i>, with a short i. Many Americans say <i>skwurl</i>.'},
  {i:'ˈʒɒnrə',a:'genre',f:['general','junior','gender'],o:'<i>ʒ</i> is the zh sound in measure. Genre kept its French sound.'},
  {i:'ˈʃəʊfə',a:'chauffeur',f:['shower','shover','chef'],o:'<i>ʃ</i> is sh and <i>əʊ</i> is the British oh sound.'},
  {i:'ˈwʊstə',a:'Worcester',f:['worsted','wasted','whistle'],o:'<i>ʊ</i> is the short oo in book. Worcester squashes three written syllables into two.'}
];
