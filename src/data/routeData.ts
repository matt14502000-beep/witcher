export interface RouteStep {
  id: string;
  quest: string;
  type: "main" | "side" | "contract" | "witcher_gear" | "gwent" | "exploration";
  level: number;
  region: string;
  note: string;
  missable?: boolean;
}

export interface RoutePhase {
  id: string;
  name: string;
  levelRange: string;
  region: string;
  steps: RouteStep[];
}

const typeLabels: Record<string, string> = {
  main: "Main Quest",
  side: "Side Quest",
  contract: "Contract",
  witcher_gear: "Witcher Gear",
  gwent: "Gwent",
  exploration: "Exploration",
};

const typeColors: Record<string, string> = {
  main: "bg-primary text-primary-foreground",
  side: "bg-secondary text-secondary-foreground",
  contract: "bg-destructive text-destructive-foreground",
  witcher_gear: "bg-accent text-accent-foreground",
  gwent: "bg-muted text-muted-foreground",
  exploration: "bg-card text-card-foreground border border-border",
};

export { typeLabels, typeColors };

export const routePhases: RoutePhase[] = [
  {
    id: "phase-1",
    name: "White Orchard — The Beginning",
    levelRange: "1–3",
    region: "White Orchard",
    steps: [
      { id: "r1", quest: "Lilac and Gooseberries", type: "main", level: 1, region: "White Orchard", note: "Follow the main quest. Loot everything you see." },
      { id: "r2", quest: "Collect All 6 Places of Power", type: "exploration", level: 1, region: "White Orchard", note: "6 free ability points! Do this before leaving. Check every ? on the map." },
      { id: "r3", quest: "Twisted Firestarter", type: "side", level: 2, region: "White Orchard", note: "Unlocks discount at Willis the armorer. Quick XP." },
      { id: "r4", quest: "On Death's Bed", type: "side", level: 2, region: "White Orchard", note: "Get the Swallow potion from Tomira first. Easy quest." },
      { id: "r5", quest: "Devil by the Well (Noonwraith)", type: "contract", level: 2, region: "White Orchard", note: "Use Yrden + Specter Oil. Your first contract — good practice." },
      { id: "r6", quest: "Precious Cargo", type: "side", level: 2, region: "White Orchard", note: "Don't let the merchant deceive you. Expose the lies for bonus XP." },
      { id: "r7", quest: "Missing in Action", type: "side", level: 2, region: "White Orchard", note: "Search the battlefield. Emotional but straightforward." },
      { id: "r8", quest: "The Beast of White Orchard", type: "main", level: 3, region: "White Orchard", note: "Griffin boss fight. Apply Hybrid Oil, use Aard when airborne, crossbow to force landing." },
      { id: "r9", quest: "Play the Innkeep at Gwent", type: "gwent", level: 1, region: "White Orchard", note: "Win your first Gwent card! Start your collection early." },
    ],
  },
  {
    id: "phase-2",
    name: "Velen — The Bloody Baron",
    levelRange: "3–10",
    region: "Velen",
    steps: [
      { id: "r10", quest: "The Nilfgaardian Connection", type: "main", level: 3, region: "Velen", note: "Arrives in Velen. Explore Hanged Man's Tree area first." },
      { id: "r11", quest: "Collect Velen Notice Boards", type: "exploration", level: 3, region: "Velen", note: "Hit Midcopse, Oreton, Oxenfurt boards. Unlocks contracts + map markers." },
      { id: "r12", quest: "Hunting a Witch (Keira Metz)", type: "main", level: 5, region: "Velen", note: "Start of Keira's chain. She's a future Kaer Morhen ally." },
      { id: "r13", quest: "Wandering in the Dark", type: "main", level: 5, region: "Velen", note: "Dungeon with Keira. Good loot inside. Use Igni on gas clouds." },
      { id: "r14", quest: "Forefather's Eve", type: "side", level: 5, region: "Velen", note: "Atmospheric quest with the Pellar. Do before advancing Baron line." },
      { id: "r15", quest: "Jenny o' the Woods (Nightwraith)", type: "contract", level: 6, region: "Velen", note: "Use Yrden + Moon Dust. Found via Midcopse notice board." },
      { id: "r81", quest: "Woodland Beast", type: "contract", level: 6, region: "Velen", note: "Trail-and-ambush style contract near the Novigrad roads. Good early combat tracking practice." },
      { id: "r16", quest: "Family Matters", type: "main", level: 6, region: "Velen", note: "Bloody Baron questline begins. One of the game's best stories." },
      { id: "r17", quest: "Feline School Gear (Basic)", type: "witcher_gear", level: 7, region: "Velen", note: "Dragonslayer Grotto. Best early-game light armor for fast attack builds." },
      { id: "r18", quest: "Ladies of the Wood", type: "main", level: 7, region: "Velen", note: "Meet the Crones. SAVE before Whispering Hillock." },
      { id: "r19", quest: "The Whispering Hillock", type: "main", level: 7, region: "Velen", missable: true, note: "⚠️ CRITICAL: Free spirit = saves orphans, dooms Anna. Kill spirit = orphans die, Anna lives (barely). NO perfect choice." },
      { id: "r20", quest: "A Towerful of Mice", type: "side", level: 6, region: "Velen", note: "Keira Metz quest on Fyke Isle. Choice about the lamp matters later!" },
      { id: "r76", quest: "A Favor for a Friend", type: "side", level: 7, region: "Velen", missable: true, note: "Follow Keira's chain immediately after Fyke Isle. Keeps her storyline aligned before her final decision quest." },
      { id: "r21", quest: "Shrieker (Cockatrice)", type: "contract", level: 8, region: "Velen", note: "Grapeshot bombs + Draconid Oil. From Crow's Perch notice board." },
      { id: "r82", quest: "The Griffin from the Highlands", type: "contract", level: 11, region: "Velen", note: "Crow's Perch contract with a strong aerial target. Bring Hybrid Oil and your crossbow for forced landings." },
      { id: "r83", quest: "Swamp Thing", type: "contract", level: 12, region: "Velen", note: "Foggy marsh contract with heavy visibility pressure. Use enhanced senses and keep anti-necrophage prep ready." },
      { id: "r22", quest: "For the Advancement of Learning", type: "side", level: 8, region: "Velen", missable: true, note: "⚠️ Keira's final quest. DO NOT let her go to Radovid (she dies). Send her to Kaer Morhen!" },
      { id: "r77", quest: "A Princess in Distress", type: "side", level: 5, region: "Velen", note: "Short Pellar quest that naturally complements Forefather's Eve and rounds out the Velen side arc." },
      { id: "r23", quest: "Return to Crookback Bog", type: "main", level: 9, region: "Velen", note: "Baron conclusion. Outcome depends on Whispering Hillock choice." },
    ],
  },
  {
    id: "phase-3",
    name: "Novigrad — The Free City",
    levelRange: "10–16",
    region: "Novigrad",
    steps: [
      { id: "r24", quest: "Broken Flowers", type: "main", level: 10, region: "Novigrad", note: "Search for Dandelion through Novigrad's underworld." },
      { id: "r25", quest: "Exchange Currency at Vivaldi Bank", type: "exploration", level: 10, region: "Novigrad", note: "Convert Florens/Orens to Crowns. Free money!" },
      { id: "r26", quest: "A Matter of Life and Death", type: "side", level: 11, region: "Novigrad", missable: true, note: "⚠️ Triss romance quest. Must complete before Isle of Mists or it's gone forever." },
      { id: "r27", quest: "Get Junior", type: "main", level: 12, region: "Novigrad", note: "Combat-heavy main quest. Multiple approaches available." },
      { id: "r28", quest: "Count Reuven's Treasure", type: "main", level: 12, region: "Novigrad", note: "Dijkstra's bathhouse quest. Ties into the crime storyline." },
      { id: "r29", quest: "Now or Never (Triss Romance)", type: "side", level: 14, region: "Novigrad", missable: true, note: "⚠️ ROMANCE LOCK: Say 'I love you' at the docks or lose Triss forever. Complete BEFORE Isle of Mists!" },
      { id: "r78", quest: "A Deadly Plot", type: "side", level: 12, region: "Novigrad", missable: true, note: "Starts political chain toward Reason of State. Do before endgame lockouts if you want Northern politics outcomes." },
      { id: "r79", quest: "Redania's Most Wanted", type: "side", level: 12, region: "Novigrad", missable: true, note: "Critical setup for anti-Radovid questline. Keep this with Roche/Dijkstra quests before Isle of Mists." },
      { id: "r30", quest: "Gwent: Big City Players", type: "gwent", level: 10, region: "Novigrad", note: "Play all Novigrad Gwent opponents. Win unique cards." },
      { id: "r84", quest: "An Elusive Thief", type: "contract", level: 13, region: "Novigrad", note: "Short city contract that fits naturally between Dijkstra and Triss arcs. Fast XP and crowns." },
      { id: "r85", quest: "The Merry Widow", type: "contract", level: 10, region: "Novigrad", note: "Novigrad graveyard contract with a cleaner detective loop than most early contracts." },
      { id: "r31", quest: "High Stakes Gwent Tournament", type: "gwent", level: 14, region: "Novigrad", missable: true, note: "⚠️ MISSABLE: Passiflora tournament. Win all rounds for unique cards + 4500 crowns." },
      { id: "r32", quest: "Swords and Dumplings (Hattori)", type: "side", level: 12, region: "Novigrad", note: "Unlock Hattori, the Master Swordsmith. Essential for endgame crafting." },
      { id: "r33", quest: "Of Swords and Dumplings", type: "side", level: 14, region: "Novigrad", note: "Unlocks best swordsmith in the game. Can craft Mastercrafted weapons." },
      { id: "r93", quest: "Feline School Gear (Enhanced)", type: "witcher_gear", level: 17, region: "Novigrad / Velen", note: "Second Cat set tier. Craft this before Skellige so your fast-attack build stays ahead of enemy scaling." },
      { id: "r34", quest: "Deadly Delights (Succubus)", type: "contract", level: 13, region: "Novigrad", note: "Choice: kill or spare. Spare for Succubus mutagen + decoction recipe." },
      { id: "r35", quest: "Poet Under Pressure", type: "main", level: 15, region: "Novigrad", note: "Rescue Dandelion. End of the Novigrad main arc." },
    ],
  },
  {
    id: "phase-4",
    name: "Skellige — The Isles",
    levelRange: "16–24",
    region: "Skellige",
    steps: [
      { id: "r36", quest: "Destination: Skellige", type: "main", level: 16, region: "Skellige", note: "Sail to Skellige. Shipwreck intro — enjoy the Viking vibes." },
      { id: "r37", quest: "The King is Dead — Long Live the King", type: "main", level: 17, region: "Skellige", note: "Attend the wake with Yennefer. Leads to major quest branches." },
      { id: "r38", quest: "The Last Wish", type: "side", level: 17, region: "Skellige", missable: true, note: "⚠️ ROMANCE LOCK: Yennefer romance. Say 'I love you' or break up forever. Choose before Isle of Mists!" },
      { id: "r39", quest: "Echoes of the Past", type: "main", level: 17, region: "Skellige", note: "Explore with Yennefer. Garden of Freya section." },
      { id: "r40", quest: "Practicum in Advanced Alchemy", type: "side", level: 19, region: "Skellige", note: "Complete Gremist's 3-part quest to unlock Superior alchemy formulas. Essential for alchemy builds!" },
      { id: "r41", quest: "The Lord of Undvik", type: "side", level: 18, region: "Skellige", note: "Help Hjalmar kill the Ice Giant. Affects who rules Skellige." },
      { id: "r42", quest: "Possession", type: "side", level: 17, region: "Skellige", note: "Help Cerys solve the Jarl's baby mystery. Affects who rules Skellige." },
      { id: "r43", quest: "King's Gambit", type: "side", level: 20, region: "Skellige", missable: true, note: "⚠️ CRITICAL: Support Cerys (better ruler, peaceful ending) or Hjalmar (warrior king). Affects epilogue." },
      { id: "r80", quest: "The Phantom of Eldberg", type: "side", level: 17, region: "Skellige", note: "Good mid-Skellige side stop with strong atmosphere and practical combat prep against specter-style threats." },
      { id: "r44", quest: "In Wolf's Clothing (Morkvarg)", type: "contract", level: 18, region: "Skellige", note: "Feed Morkvarg his own flesh to lift the curse. Creative solution." },
      { id: "r86", quest: "Skellige's Most Wanted", type: "contract", level: 29, region: "Skellige", note: "Late-game contract with multiple monster types and social payoff. Save this for a mature build." },
      { id: "r87", quest: "Missing Son", type: "contract", level: 29, region: "Skellige", note: "Hard-hitting late Skellige contract with strong narrative weight. Bring top-tier oils and decoctions." },
      { id: "r45", quest: "Ursine School Gear (Enhanced)", type: "witcher_gear", level: 20, region: "Skellige", note: "Undvik has diagrams. Best heavy armor set for tank builds." },
      { id: "r46", quest: "Smuggler Caches (Boat Route)", type: "exploration", level: 16, region: "Skellige", note: "100+ water caches. Best money farm in the game. Each gives 100-500 Crowns of loot." },
      { id: "r47", quest: "Collect Skellige Places of Power", type: "exploration", level: 16, region: "Skellige", note: "Multiple free ability points across the islands. Check Ard Skellig thoroughly." },
      { id: "r94", quest: "Feline School Gear (Superior)", type: "witcher_gear", level: 23, region: "Skellige / Velen", note: "Third Cat tier. Upgrade before the Isle of Mists chain if you're committed to fast-attack DPS." },
    ],
  },
  {
    id: "phase-5",
    name: "The Home Stretch — Kaer Morhen & Endgame",
    levelRange: "22–30",
    region: "Multiple",
    steps: [
      { id: "r48", quest: "Complete ALL Side Quests First!", type: "exploration", level: 22, region: "Multiple", missable: true, note: "⚠️ POINT OF NO RETURN WARNING: Isle of Mists locks out many side quests. Clear your log!" },
      { id: "r49", quest: "Ugly Baby → Isle of Mists", type: "main", level: 22, region: "Multiple", missable: true, note: "⚠️ MAJOR LOCK: Starting this fails unfinished side quests. Make sure Triss, Keira, and romance quests are DONE." },
      { id: "r50", quest: "Battle of Kaer Morhen", type: "main", level: 24, region: "Kaer Morhen", note: "Epic battle. Allies you recruited appear here. Vesemir's fate is sealed regardless." },
      { id: "r51", quest: "Bald Mountain — Ciri Choice 1", type: "main", level: 26, region: "Velen", missable: true, note: "⚠️ CIRI DECISION: Let Ciri fight the Lodge ALONE (✅ good) or go with her (❌ bad). She needs independence." },
      { id: "r52", quest: "Final Preparations", type: "main", level: 26, region: "Novigrad", note: "Prepare for the final battle. Last chance for shopping and crafting." },
      { id: "r53", quest: "Ciri Choice 2 — Snowball Fight", type: "main", level: 26, region: "Kaer Morhen", missable: true, note: "⚠️ Choose SNOWBALL FIGHT (✅ good) over 'drinking'. She needs to relax, not numb herself." },
      { id: "r54", quest: "Ciri Choice 3 — Emhyr's Money", type: "main", level: 26, region: "Multiple", missable: true, note: "⚠️ REFUSE the coin from Emhyr (✅ good). Taking money = treating Ciri as a transaction." },
      { id: "r55", quest: "Ciri Choice 4 — Skjall's Grave", type: "main", level: 26, region: "Skellige", missable: true, note: "⚠️ Visit Skjall's grave with Ciri (✅ good). She needs closure." },
      { id: "r56", quest: "Ciri Choice 5 — Destroy the Lab", type: "main", level: 27, region: "Multiple", missable: true, note: "⚠️ Let Ciri DESTROY Avallac'h's lab (✅ good). She needs to vent her anger." },
      { id: "r57", quest: "Through Time and Space → Final Battle", type: "main", level: 28, region: "Multiple", note: "Point of no return for the main story. The Wild Hunt ends here." },
      { id: "r95", quest: "Feline School Gear (Mastercrafted)", type: "witcher_gear", level: 30, region: "Novigrad", note: "Craft at the master smith after unlocking him. This is your pre-DLC Cat power spike." },
    ],
  },
  {
    id: "phase-6",
    name: "Hearts of Stone (DLC)",
    levelRange: "30–35",
    region: "Novigrad / Oxenfurt",
    steps: [
      { id: "r89", quest: "Hearts of Stone Prep Check", type: "exploration", level: 30, region: "Novigrad", note: "Before starting, restock Superior Swallow, Tawny Owl, Golden Oriole, and repair kits. HoS spikes harder than base-game level 30 content." },
      { id: "r58", quest: "Evil's Soft First Touches", type: "main", level: 30, region: "Novigrad", note: "Meet Olgierd von Everec. Toad Prince boss — use Golden Oriole + Cursed Oil." },
      { id: "r90", quest: "Contract: The Oxenfurt Drunk", type: "contract", level: 28, region: "Oxenfurt", note: "Good warm-up contract right before the HoS core arc. Quick payout and solid combat refresher." },
      { id: "r59", quest: "Dead Man's Party (Wedding)", type: "main", level: 32, region: "Novigrad", note: "One of the best quests in the game. Bring a ghost to a wedding!" },
      { id: "r60", quest: "Open Sesame (The Heist)", type: "main", level: 32, region: "Oxenfurt", note: "Ocean's Eleven-style heist. Choose your crew carefully." },
      { id: "r91", quest: "Rose on a Red Field", type: "side", level: 33, region: "Oxenfurt", note: "Strong HoS side quest with good atmosphere and rewards. Fits naturally between heist and painted-world quests." },
      { id: "r61", quest: "Scenes From a Marriage", type: "main", level: 34, region: "Novigrad", note: "Enter the painted world. Emotional and dark." },
      { id: "r62", quest: "Whatsoever a Man Soweth", type: "main", level: 35, region: "Novigrad", missable: true, note: "⚠️ FINAL CHOICE: Save Olgierd (solve the riddle) or let O'Dimm take him. Saving = Viper swords reward." },
      { id: "r92", quest: "From Ofier's Distant Shores", type: "exploration", level: 33, region: "Novigrad / Oxenfurt", note: "Optional treasure route that pairs well with HoS progression and helps fund late-game crafting." },
      { id: "r63", quest: "Runewright Unlocked", type: "exploration", level: 30, region: "Novigrad", note: "Invest 15,000 → 10,000 → 5,000 Crowns to unlock all 3 Runewright tiers. Expensive but powerful." },
    ],
  },
  {
    id: "phase-7",
    name: "Blood and Wine (DLC)",
    levelRange: "34–50",
    region: "Toussaint",
    steps: [
      { id: "r64", quest: "Beast of Toussaint", type: "main", level: 34, region: "Toussaint", note: "Arrive in Toussaint. Gorgeous new region. Meet Duchess Anna Henrietta." },
      { id: "r65", quest: "Upgrade Corvo Bianco (Your Vineyard)", type: "exploration", level: 34, region: "Toussaint", note: "Geralt's retirement home! Upgrade armor stand, alchemy lab, bed (XP bonus), stables." },
      { id: "r66", quest: "Unlock Mutations (Lab)", type: "exploration", level: 35, region: "Toussaint", note: "Mutation system unlocks. EUPHORIA mutation is the strongest build in the entire game." },
      { id: "r67", quest: "Grandmaster Witcher Gear (All 5 Sets)", type: "witcher_gear", level: 40, region: "Toussaint", note: "Scavenger hunts for all 5 Grandmaster sets. Each requires specific diagrams + materials." },
      { id: "r96", quest: "Grandmaster Feline Set (Cat Final Tier)", type: "witcher_gear", level: 40, region: "Toussaint", note: "Final Cat checklist step. Pair with Aerondight + Severance for peak fast-attack build performance." },
      { id: "r68", quest: "The Night of Long Fangs", type: "main", level: 38, region: "Toussaint", missable: true, note: "⚠️ CRITICAL PATH: Investigate BOTH Orianna AND Syanna for the best ending." },
      { id: "r69", quest: "Tesham Mutna", type: "main", level: 40, region: "Toussaint", note: "Boss fight with Detlaff. Use Black Blood potion + Yrden. Tough fight." },
      { id: "r70", quest: "Land of a Thousand Fables", type: "main", level: 42, region: "Toussaint", note: "Fairy tale dimension! Fight twisted versions of fairy tale characters." },
      { id: "r71", quest: "Wine Wars", type: "side", level: 36, region: "Toussaint", note: "Choose between Coronata and Vermentino vineyards. Fun side content." },
      { id: "r72", quest: "Big Feet to Fill (Giant)", type: "contract", level: 38, region: "Toussaint", note: "Giant contract. Use Ogroid Oil + Quen. High reward." },
      { id: "r88", quest: "Strange Beast", type: "contract", level: 35, region: "Toussaint", note: "Strong mid-Blood and Wine contract that complements your mutation unlock timing." },
      { id: "r73", quest: "Clear All 3 Hanse Bases", type: "exploration", level: 44, region: "Toussaint", note: "Major bandit strongholds. Excellent XP and loot. Each has a boss." },
      { id: "r74", quest: "B&W Final Choice", type: "main", level: 45, region: "Toussaint", missable: true, note: "⚠️ BEST ENDING: Get Syanna and Duchess to reconcile. Requires finding the ribbon in the fairy tale world." },
      { id: "r75", quest: "Be It Ever So Humble (Epilogue)", type: "main", level: 45, region: "Toussaint", note: "Geralt retires to Corvo Bianco. Your romance partner visits. The end of an era." },
    ],
  },
];
