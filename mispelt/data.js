// Mispelt puzzles, by day of the week. Difficulty rises Monday to Friday; weekends are medium.
// DAYS is a run of whole weeks, Monday first. The game picks today's weekday from the current week,
// cycling through the weeks.
// Five rounds a day, always in this order:
//   pick  = Which is right?   c = correct spelling, x = wrong spellings
//   spot  = Spot the mistake  s = sentence, w = the misspelled word as it appears, c = how it should be spelt
//   uk    = British or American?  b = British spelling, a = American spelling, ctx (optional) = which meaning
//   fix   = Fix it (type it)  w = shown misspelled, c = correct spelling
//   hard  = Which is right? (tricky, four choices)  c, x as for pick
// Every wrong option should be wrong in British dictionaries too, not an accepted variant.
const LEVELS = ["Gentle", "Easy", "Medium", "Hard", "Fiendish", "Medium", "Medium"];
const DAYS = [
  // ---- Week A ----
  /* Mon */ {pick: {c: "separate", x: ["seperate", "separete"]}, spot: {s: "I'll definately be there on Friday.", w: "definately", c: "definitely"}, uk: {b: "colour", a: "color"}, fix: {w: "recieve", c: "receive"}, hard: {c: "accommodate", x: ["accomodate", "acommodate", "accommadate"]}},
  /* Tue */ {pick: {c: "weird", x: ["wierd", "weerd"]}, spot: {s: "The restaraunt was fully booked for weeks.", w: "restaraunt", c: "restaurant"}, uk: {b: "centre", a: "center"}, fix: {w: "tommorow", c: "tomorrow"}, hard: {c: "millennium", x: ["millenium", "milennium", "millenneum"]}},
  /* Wed */ {pick: {c: "embarrass", x: ["embarass", "embarras"]}, spot: {s: "We need to liase with the other team before Monday.", w: "liase", c: "liaise"}, uk: {b: "travelled", a: "traveled"}, fix: {w: "occurence", c: "occurrence"}, hard: {c: "questionnaire", x: ["questionaire", "questionnair", "questionnare"]}},
  /* Thu */ {pick: {c: "conscientious", x: ["concientious", "conscientous"]}, spot: {s: "The committee agreed to accommodate the guests in the newly refurbished pavillion.", w: "pavillion", c: "pavilion"}, uk: {b: "manoeuvre", a: "maneuver"}, fix: {w: "mischievious", c: "mischievous"}, hard: {c: "idiosyncrasy", x: ["idiosyncracy", "idiosyncrisy", "idiosincrasy"]}},
  /* Fri */ {pick: {c: "sacrilegious", x: ["sacreligious", "sacrilegeous"]}, spot: {s: "Her inadvertant remark caused a minor diplomatic incident in the Philippines.", w: "inadvertant", c: "inadvertent"}, uk: {b: "haemorrhage", a: "hemorrhage"}, fix: {w: "dessicated", c: "desiccated"}, hard: {c: "chrysanthemum", x: ["chrysanthemam", "chrysanthimum", "crysanthemum"]}},
  /* Sat */ {pick: {c: "February", x: ["Febuary", "Feburary"]}, spot: {s: "He took a deep breath and stepped over the threshhold.", w: "threshhold", c: "threshold"}, uk: {b: "jewellery", a: "jewelry"}, fix: {w: "rythm", c: "rhythm"}, hard: {c: "bureaucracy", x: ["beaurocracy", "bureacracy", "bureaucrasy"]}},
  /* Sun */ {pick: {c: "guarantee", x: ["garantee", "guarentee"]}, spot: {s: "It's a real priviledge to be here tonight.", w: "priviledge", c: "privilege"}, uk: {b: "pyjamas", a: "pajamas"}, fix: {w: "harrass", c: "harass"}, hard: {c: "Fahrenheit", x: ["Farenheit", "Fahrenhiet", "Farenhite"]}},
  // ---- Week B ----
  /* Mon */ {pick: {c: "believe", x: ["beleive", "belive"]}, spot: {s: "The cemetary is at the end of the lane.", w: "cemetary", c: "cemetery"}, uk: {b: "aluminium", a: "aluminum"}, fix: {w: "goverment", c: "government"}, hard: {c: "fluorescent", x: ["flourescent", "florescent", "fluorecent"]}},
  /* Tue */ {pick: {c: "library", x: ["libary", "librery"]}, spot: {s: "The weather this summer has been truely awful.", w: "truely", c: "truly"}, uk: {b: "defence", a: "defense"}, fix: {w: "calender", c: "calendar"}, hard: {c: "pharaoh", x: ["pharoah", "pharaoe", "pharoh"]}},
  /* Wed */ {pick: {c: "address", x: ["adress", "addres"]}, spot: {s: "I didn't realise the shop was shut untill I got there.", w: "untill", c: "until"}, uk: {b: "sceptical", a: "skeptical"}, fix: {w: "independant", c: "independent"}, hard: {c: "Mediterranean", x: ["Mediteranean", "Meditteranean", "Mediterannean"]}},
  /* Thu */ {pick: {c: "occasion", x: ["ocassion", "occassion"]}, spot: {s: "Our neighbour's dachshund has an extraordinary repetoire of tricks.", w: "repetoire", c: "repertoire"}, uk: {b: "anaesthetist", a: "anesthetist"}, fix: {w: "aquiesce", c: "acquiesce"}, hard: {c: "onomatopoeia", x: ["onomatopeia", "onomatopoea", "onamatopoeia"]}},
  /* Fri */ {pick: {c: "mnemonic", x: ["mneumonic", "nmemonic"]}, spot: {s: "The rhododendrons in the vicarage garden were a magnificient sight.", w: "magnificient", c: "magnificent"}, uk: {b: "paediatrician", a: "pediatrician"}, fix: {w: "camraderie", c: "camaraderie"}, hard: {c: "fuchsia", x: ["fuschia", "fushia", "fuchia"]}},
  /* Sat */ {pick: {c: "vacuum", x: ["vaccum", "vacum"]}, spot: {s: "We had broccolli and roast potatoes for tea.", w: "broccolli", c: "broccoli"}, uk: {b: "moustache", a: "mustache"}, fix: {w: "persistant", c: "persistent"}, hard: {c: "connoisseur", x: ["connoiseur", "conoisseur", "connoissuer"]}},
  /* Sun */ {pick: {c: "misspell", x: ["mispell", "misspel"]}, spot: {s: "The play was written by a famous playwrite from Dublin.", w: "playwrite", c: "playwright"}, uk: {b: "tyre", a: "tire", ctx: "on a car"}, fix: {w: "concensus", c: "consensus"}, hard: {c: "Caribbean", x: ["Carribean", "Carribbean", "Caribean"]}}
];
