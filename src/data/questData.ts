import { dialogueSections, type DialogueChoice } from "./dialogueData";

export type QuestType = "main" | "side" | "gwent" | "collectible";

export interface Quest {
  id: string;
  name: string;
  type: QuestType;
  spoilerTip?: string;
  dialogueContext?: string;
  dialogues?: DialogueChoice[];
}

export interface QuestSection {
  title: string;
  id: string;
  quests: Quest[];
}

export interface QuestTab {
  id: string;
  label: string;
  sections: QuestSection[];
}

export const questTabs: QuestTab[] = [
  {
    id: "main",
    label: "Main Quests",
    sections: [
      {
        title: "Prologue & White Orchard",
        id: "prologue",
        quests: [
          { id: "p1", name: "Lilac and Gooseberries", type: "main", spoilerTip: "⚠️ Explore White Orchard fully before leaving — you can't return easily. Visit the herbalist for a Swallow potion recipe." },
          { id: "p2", name: "Imperial Audience", type: "main", spoilerTip: "⚠️ Your dialogue with Emhyr doesn't affect the ending but sets tone. Be respectful or sarcastic — no consequences." },
          { id: "p4", name: "The Nilfgaardian Connection", type: "main", spoilerTip: "⚠️ This opens the Velen investigation arc. Grab nearby notice boards first so side content unlocks naturally." },
          { id: "p3", name: "The Beast of White Orchard", type: "main", spoilerTip: "⚠️ Use Igni on the Griffin's nest. Stock up on Thunderbolt potions. Dodge the dive attacks." },
        ],
      },
      {
        title: "Velen & Novigrad",
        id: "velen",
        quests: [
          { id: "v1", name: "Hunting a Witch", type: "main", spoilerTip: "⚠️ Keira Metz becomes a romance option. Be careful with dialogue — 'Let's go somewhere more private' leads to romance." },
          { id: "v2", name: "Wandering in the Dark", type: "main", spoilerTip: "⚠️ Follow Keira closely. Use Aard on walls. The White Frost illusion requires you to follow the lights." },
          { id: "v9", name: "Bloody Baron", type: "main", spoilerTip: "⚠️ Central Velen chain quest. Do not rush it before finishing local side quests and contracts." },
          { id: "v10", name: "Ciri's Room", type: "main", spoilerTip: "⚠️ Investigative step in Crow's Perch. Loot and inspect everything to avoid backtracking." },
          { id: "v3", name: "Family Matters", type: "main", spoilerTip: "⚠️ CRITICAL: The Bloody Baron's fate depends on choices in 'Ladies of the Wood'. Freeing the spirit saves the children but kills Anna. Killing the spirit saves Anna but dooms the children." },
          { id: "v11", name: "Destination: Skellige", type: "main", spoilerTip: "⚠️ Bring extra crowns before sailing. Early Skellige repairs and crafting costs stack quickly." },
          { id: "v4", name: "A Matter of Life and Death", type: "main", spoilerTip: "⚠️ This is Triss's romance quest. Kiss her at the party to start the romance. You CAN romance both Triss and Yennefer but it ends badly." },
          { id: "v5", name: "Pyres of Novigrad", type: "main", spoilerTip: "⚠️ Help Triss get the mages out. If you tell Triss to stay AND say 'I love you', she stays — this locks in Triss romance." },
          { id: "v6", name: "Count Reuven's Treasure", type: "main", spoilerTip: "⚠️ Let Dijkstra break Whoreson Junior's legs — don't interfere or you lose an ally for the Battle of Kaer Morhen." },
          { id: "v7", name: "Get Junior", type: "main", spoilerTip: "⚠️ You can spare or kill Whoreson Junior. Killing him gives satisfaction but sparing lets him live in misery." },
          { id: "v8", name: "Now or Never", type: "main", spoilerTip: "⚠️ ROMANCE LOCK: Tell Triss 'I love you' at the docks to lock in Triss romance. If you've also romanced Yennefer, bad things happen." },
        ],
      },
      {
        title: "Skellige Isles",
        id: "skellige",
        quests: [
          { id: "s1", name: "The King is Dead – Long Live the King", type: "main", spoilerTip: "⚠️ ROMANCE: Yennefer romance scene — agree to help her and follow through. Don't refuse the djinn quest later." },
          { id: "s2", name: "The Lord of Undvik", type: "main", spoilerTip: "⚠️ Save Hjalmar's crew members for bonus rewards. The Ice Giant is weak to Igni and Ogroid Oil." },
          { id: "s3", name: "King's Gambit", type: "main", spoilerTip: "⚠️ Help Cerys = she becomes queen (better for Skellige). Help Hjalmar = he becomes king (warrior path). Both are valid." },
          { id: "s4", name: "The Last Wish", type: "main", spoilerTip: "⚠️ ROMANCE LOCK: Tell Yennefer you love her after the djinn battle. This locks Yen romance. If you said it to Triss too — both dump you." },
          { id: "s6", name: "Ugly Baby", type: "main", spoilerTip: "⚠️ This begins the late-game lockout chain toward Isle of Mists. Clear unfinished side quests first." },
          { id: "s7", name: "Disturbance", type: "main", spoilerTip: "⚠️ Kaer Morhen setup step. Short quest, but part of required progression before the Trials." },
          { id: "s8", name: "To Bait a Forktail...", type: "main", spoilerTip: "⚠️ Bring Draconid prep before starting. Keep crossbow ready for aerial pressure." },
          { id: "s9", name: "The Final Trial", type: "main", spoilerTip: "⚠️ Follow Lambert's lead and fully loot Kaer Morhen side paths for upgrade materials." },
          { id: "s10", name: "No Place Like Home", type: "main", spoilerTip: "⚠️ Character-heavy quest. Complete companion interactions for extra dialogue outcomes." },
          { id: "s11", name: "Va Fail, Elaine", type: "main", spoilerTip: "⚠️ Story transition quest before Isle of Mists. Keep inventory stocked for Act 3 pacing." },
          { id: "s5", name: "Isle of Mists", type: "main", spoilerTip: "⚠️ POINT OF NO RETURN for many side quests! Complete all Novigrad/Velen side quests before starting this. You find Ciri here." },
        ],
      },
      {
        title: "Battle of Kaer Morhen & Endgame",
        id: "kaermorhen",
        quests: [
          { id: "k1", name: "Battle of Kaer Morhen", type: "main", spoilerTip: "⚠️ Vesemir dies regardless of choices. More allies = easier battle. Make sure you recruited everyone possible." },
          { id: "k2", name: "Blood on the Battlefield", type: "main", spoilerTip: "⚠️ CRITICAL FOR ENDING: Let Ciri vent her anger (don't say 'calm down'). Go with her to the Lodge — but let HER speak to them." },
          { id: "k3", name: "Final Preparations", type: "main", spoilerTip: "⚠️ Visit the Emperor with Ciri — but DON'T take the money he offers. Taking money = bad ending indicator." },
          { id: "k4", name: "Through Time and Space", type: "main", spoilerTip: "⚠️ Follow Avallac'h closely. Don't fight the sandcrabs — run past them. Stock up on food for healing." },
          { id: "k5", name: "The Sunstone", type: "main", spoilerTip: "⚠️ Side with Ermion or Lugos — both work. Just don't antagonize both." },
          { id: "k6", name: "On Thin Ice", type: "main", spoilerTip: "⚠️ Final boss fights. Eredin is weak to Quen + fast attacks. Dodge his teleport strikes. Keep Swallow and Thunderbolt active." },
          { id: "k7", name: "Something Ends, Something Begins", type: "main", spoilerTip: "⚠️ ENDING DETERMINED BY: 5 key Ciri choices throughout the game. 3+ positive = Ciri lives. Snowball fight, visiting Skjall's grave, and letting her speak to the Lodge are positive choices." },
          { id: "k8", name: "Brothers in Arms: Novigrad", type: "main", spoilerTip: "⚠️ Recruit all available Novigrad allies before the Battle of Kaer Morhen for easier defense phases." },
          { id: "k9", name: "Brothers in Arms: Skellige", type: "main", spoilerTip: "⚠️ Resolve Skellige leadership and support quests first to maximize who answers the call." },
          { id: "k10", name: "Brothers in Arms: Velen", type: "main", spoilerTip: "⚠️ Keira, Letho, and Baron's outcomes directly influence this ally pool." },
        ],
      },
      {
        title: "Hearts of Stone",
        id: "hos",
        quests: [
          { id: "h1", name: "Evil's Soft First Touches", type: "main", spoilerTip: "⚠️ Recommended level 32+. Olgierd's story is tragic — pay attention to his wishes." },
          { id: "h2", name: "Dead Man's Party", type: "main", spoilerTip: "⚠️ Enjoy the wedding! Dance, drink, eat. Let Shani lead — fun sequence." },
          { id: "h3", name: "Open Sesame!", type: "main", spoilerTip: "⚠️ Choose your heist crew carefully. The Safecracker is better than the Demolitionist for a clean heist." },
          { id: "h4", name: "Scenes From a Marriage", type: "main", spoilerTip: "⚠️ The Painted World is one of the best sequences. Explore everything. The Caretaker boss is tough — use Quen." },
          { id: "h5", name: "Whatsoever a Man Soweth...", type: "main", spoilerTip: "⚠️ CRITICAL: You can save Olgierd by solving Gaunter O'Dimm's riddle. The answer involves looking at the world 'through a mirror'. Save Olgierd = you get the Viper Venomous Silver Sword." },
        ],
      },
      {
        title: "Blood and Wine",
        id: "btw",
        quests: [
          { id: "b1", name: "The Beast of Toussaint", type: "main", spoilerTip: "⚠️ Recommended level 34+. Toussaint is gorgeous — explore! Visit the notice boards for great side content." },
          { id: "b2", name: "La Cage au Fou", type: "main", spoilerTip: "⚠️ The Wight curse can be lifted! Don't eat without her — eat WITH her at the table. She becomes human again." },
          { id: "b3", name: "The Night of Long Fangs", type: "main", spoilerTip: "⚠️ BIG CHOICE: Go to Orianna's or Unseen Elder. Unseen Elder = shorter but you skip vampire lore. Orianna = more story." },
          { id: "b4", name: "Beyond Hill and Dale...", type: "main", spoilerTip: "⚠️ The fairy tale world is amazing. Jack and the Beanstalk, Rapunzel references. Enjoy it!" },
          { id: "b5", name: "Tesham Mutna", type: "main", spoilerTip: "⚠️ Tough vampire fight. Stock up on Black Blood, Moon Dust bombs, and Vampire Oil." },
          { id: "b6", name: "Be It Ever So Humble...", type: "main", spoilerTip: "⚠️ Your ending determines who visits Corvo Bianco. Romance partner, Ciri, or Dandelion — based on main game choices." },
        ],
      },
    ],
  },
  {
    id: "side",
    label: "Side Quests",
    sections: [
      {
        title: "White Orchard",
        id: "woSide",
        quests: [
          { id: "ws1", name: "Twisted Firestarter", type: "side", spoilerTip: "⚠️ The arsonist is the dwarf. You can turn him in or let him go — letting him go gives Crowns." },
          { id: "ws2", name: "Missing in Action", type: "side", spoilerTip: "⚠️ Search the battlefield carefully. The dog helps you find the body. Deliver news to the wife for XP." },
          { id: "ws3", name: "On Death's Bed", type: "side", spoilerTip: "⚠️ Gather Buckthorn underwater (use Killer Whale potion). Brew the Swallow potion for the herbalist." },
          { id: "ws4", name: "Precious Cargo", type: "side", spoilerTip: "⚠️ The merchant is lying — confront him about the real cargo. You get more crowns." },
          { id: "ws5", name: "A Frying Pan, Spick and Span", type: "side", spoilerTip: "⚠️ Simple fetch quest. Return the pan to the old woman near the river crossing." },
          { id: "ws6", name: "Devil by the Well", type: "side", spoilerTip: "⚠️ Contract: Noon Wraith. Use Yrden sign and Specter Oil. Burn the bones in the well." },
          { id: "ws7", name: "Funeral Pyres", type: "side", spoilerTip: "⚠️ Help the priest burn the bodies. Ghouls attack — use Necrophage Oil." },
          { id: "ws8", name: "Deserter Gold", type: "side" },
        ],
      },
      {
        title: "Velen",
        id: "velenSide",
        quests: [
          { id: "vs1", name: "Ladies of the Wood", type: "side", spoilerTip: "⚠️ CRITICAL: Free the tree spirit = children live but Anna dies. Kill the spirit = Anna lives but children die. This affects the Bloody Baron's fate." },
          { id: "vs2", name: "A Towerful of Mice", type: "side", spoilerTip: "⚠️ DON'T take the curse to Graham — Annabelle is actually a Plague Maiden. Let Keira lift the curse instead." },
          { id: "vs3", name: "For the Advancement of Learning", type: "side", spoilerTip: "⚠️ IMPORTANT: Convince Keira to go to Kaer Morhen (don't let her go to Radovid — she dies). This adds her as an ally." },
          { id: "vs4", name: "An Invitation from Keira Metz", type: "side", spoilerTip: "⚠️ This is Keira's dinner date. Leads to optional romance scene. Fun but doesn't affect main romance." },
          { id: "vs5", name: "A Favor for Radovid", type: "side", spoilerTip: "⚠️ Do this quest but be aware it feeds into Radovid's paranoia." },
          { id: "vs6", name: "Cabaret", type: "side", spoilerTip: "⚠️ Help Dandelion set up his cabaret. Fun side content with no major consequences." },
          { id: "vs7", name: "Carnal Sins", type: "side", spoilerTip: "⚠️ The real killer is NOT the obvious suspect. Investigate thoroughly — check the morgue, use Witcher senses on every crime scene." },
          { id: "vs8", name: "A Dangerous Game", type: "side", spoilerTip: "⚠️ Collect all three Gwent cards for the best reward. Don't sell them individually." },
          { id: "vs9", name: "Fists of Fury: Velen", type: "side", spoilerTip: "⚠️ Win all fights for the champion title. Dodge and counter — don't just mash attack." },
          { id: "vs10", name: "Ghosts of the Past", type: "side", spoilerTip: "⚠️ Help Letho = he comes to Kaer Morhen as an ally. Great fighter to have." },
          { id: "vs11", name: "Haunted House", type: "side", spoilerTip: "⚠️ Use Yrden in the house. The Hym feeds on guilt — you need to trick it." },
          { id: "vs12", name: "Last Rites", type: "side" },
          { id: "vs13", name: "Lynch Mob", type: "side" },
          { id: "vs14", name: "Magic Lamp", type: "side" },
          { id: "vs15", name: "Of Swords and Dumplings", type: "side", spoilerTip: "⚠️ Hattori needs protection. Help him and he becomes a master swordsmith — crafts the best steel swords." },
          { id: "vs16", name: "Reason of State", type: "side", spoilerTip: "⚠️ CRITICAL: Help assassinate Radovid = mages survive but Nilfgaard wins. Refuse = Radovid lives and persecutes mages." },
          { id: "vs17", name: "Return to Crookback Bog", type: "side", spoilerTip: "⚠️ Tied to the Baron questline. Outcomes depend on Ladies of the Wood choices." },
          { id: "vs18", name: "The Fall of the House of Reardon", type: "side" },
          { id: "vs19", name: "The Gangs of Novigrad", type: "side" },
          { id: "vs20", name: "The Play's the Thing", type: "side", spoilerTip: "⚠️ Choose the 'serious' play version for the best scene. All three options work but comedy is funniest." },
          { id: "vs21", name: "Where the Cat and Wolf Play...", type: "side", spoilerTip: "⚠️ You meet a Witcher from the Cat School. You can fight or let him go — he killed the village but had reasons." },
          { id: "vs22", name: "Wild at Heart", type: "side", spoilerTip: "⚠️ The werewolf is Niellen. You can tell his wife the truth or lie. Truth = she attacks him." },
          { id: "vs23", name: "Ciri's Story: The Race", type: "side" },
          { id: "vs24", name: "Ciri's Story: Out of the Shadows", type: "side" },
          { id: "vs25", name: "Ciri's Story: Fleeing the Bog", type: "side" },
          { id: "vs26", name: "The Whispering Hillock", type: "side", spoilerTip: "⚠️ Same as Ladies of the Wood choice. Free the spirit or kill it — massive consequences either way." },
          { id: "vs27", name: "Contract: The Phantom of Eldberg", type: "side", spoilerTip: "⚠️ Penitent wraith. Use Yrden + Moon Dust bomb." },
          { id: "vs28", name: "Contract: The Oxenfurt Drunk", type: "side", spoilerTip: "⚠️ Katakan vampire. Use Vampire Oil and Black Blood potion." },
          { id: "vs29", name: "Contract: Woodland Beast", type: "side" },
          { id: "vs30", name: "Contract: Swamp Thing", type: "side" },
          { id: "vs31", name: "Contract: The Creature from Oxenfurt Forest", type: "side" },
          { id: "vs32", name: "Contract: Deadly Delights", type: "side", spoilerTip: "⚠️ Succubus contract. You can spare her — she's not evil, just hungry." },
          { id: "vs33", name: "Contract: An Elusive Thief", type: "side" },
          { id: "vs34", name: "Contract: Lord of the Wood", type: "side" },
          { id: "vs35", name: "Contract: Jenny o' the Woods", type: "side", spoilerTip: "⚠️ Night Wraith. Use Yrden and Specter Oil. She appears only at night near the fields." },
          { id: "vs36", name: "Contract: Shrieker", type: "side" },
          { id: "vs37", name: "Contract: The Griffin from the Highlands", type: "side" },
          { id: "vs38", name: "Contract: The Merry Widow", type: "side" },
        ],
      },
      {
        title: "Skellige",
        id: "skelligeSide",
        quests: [
          { id: "ss1", name: "Fists of Fury: Skellige", type: "side" },
          { id: "ss2", name: "The Cave of Dreams", type: "side" },
          { id: "ss3", name: "The Phantom of Eldberg", type: "side" },
          { id: "ss4", name: "Stranger in a Strange Land", type: "side" },
          { id: "ss5", name: "Flesh for Sale", type: "side" },
          { id: "ss6", name: "In Wolf's Clothing", type: "side", spoilerTip: "⚠️ Morkvarg is cursed. Feed him his own flesh to lift the curse. Using the fang gives a different outcome." },
          { id: "ss7", name: "Iron Maiden", type: "side" },
          { id: "ss8", name: "Missing Persons", type: "side" },
          { id: "ss9", name: "Possession", type: "side", spoilerTip: "⚠️ The Hym — trick it by fake endangering the baby. Cerys's plan works." },
          { id: "ss10", name: "The Nithing", type: "side", spoilerTip: "⚠️ Reverse the curse onto the caster or confront them." },
          { id: "ss11", name: "Echoes of the Past", type: "side" },
          { id: "ss12", name: "Following the Thread", type: "side" },
          { id: "ss13", name: "Coronation", type: "side" },
          { id: "ss14", name: "The Path of Warriors", type: "side" },
          { id: "ss15", name: "Free Spirit", type: "side" },
          { id: "ss16", name: "Contract: The Dragon of Fyresdal", type: "side", spoilerTip: "⚠️ It's actually a Forktail, not a dragon. Use Draconid Oil and Aard." },
          { id: "ss17", name: "Contract: Muire D'yaeblen", type: "side" },
          { id: "ss18", name: "Contract: Here Comes the Groom", type: "side" },
          { id: "ss19", name: "Contract: The Phantom of Eldberg", type: "side" },
          { id: "ss20", name: "Contract: Strange Beast", type: "side" },
          { id: "ss26", name: "Contract: Missing Son", type: "side" },
          { id: "ss21", name: "Skellige's Most Wanted", type: "side" },
          { id: "ss22", name: "The Towers Outta Nowheres", type: "side" },
          { id: "ss23", name: "Master Armorers", type: "side", spoilerTip: "⚠️ Complete this to unlock Mastercrafted armor. You need the acid gland from Archgriffin." },
          { id: "ss24", name: "Of Dairy and Darkness", type: "side" },
          { id: "ss25", name: "Practicum in Advanced Alchemy", type: "side" },
        ],
      },
      {
        title: "Hearts of Stone Side Quests",
        id: "hosSide",
        quests: [
          { id: "hs1", name: "Enchanting: Quality Has Its Price", type: "side", spoilerTip: "⚠️ Fund the Ofieri runewright — expensive but unlocks amazing enchantments like Severance (extends Whirl/Rend range)." },
          { id: "hs2", name: "From Ofier's Distant Shores", type: "side" },
          { id: "hs3", name: "A Dark Legacy", type: "side" },
          { id: "hs4", name: "Without a Trace", type: "side" },
          { id: "hs5", name: "Rose on a Red Field", type: "side" },
          { id: "hs6", name: "An Eye for an Eye", type: "side" },
          { id: "hs7", name: "Avid Collector", type: "side" },
          { id: "hs8", name: "The Drakenborg Redemption", type: "side" },
          { id: "hs9", name: "A Midnight Clear", type: "side" },
          { id: "hs10", name: "Wild Animals", type: "side" },
          { id: "hs11", name: "The Taxman Cometh", type: "side" },
          { id: "hs12", name: "Contract: The Apiarian Phantom", type: "side" },
          { id: "hs13", name: "Contract: Doors Slamming Shut", type: "side" },
          { id: "hs14", name: "Contract: Patrol Gone Missing", type: "side" },
        ],
      },
      {
        title: "Blood and Wine Side Quests",
        id: "btwSide",
        quests: [
          { id: "bs1", name: "Paperchase", type: "side", spoilerTip: "⚠️ Hilarious bureaucracy quest. Just follow the chain — it's a commentary on red tape." },
          { id: "bs2", name: "Goodness, Gracious, Great Balls of Granite!", type: "side" },
          { id: "bs3", name: "Warble of a Smitten Knight", type: "side", spoilerTip: "⚠️ Tournament quest — you can enter all events. Win the tourney for Geralt's own set of Toussaint armor." },
          { id: "bs4", name: "Big Game Hunter", type: "side" },
          { id: "bs5", name: "Feet as Cold as Ice", type: "side" },
          { id: "bs6", name: "Mutual of Beauclair's Wild Kingdom", type: "side" },
          { id: "bs7", name: "Duck, Duck, Goosed!", type: "side" },
          { id: "bs8", name: "A Knight's Tales", type: "side" },
          { id: "bs9", name: "Equine Phantoms", type: "side", spoilerTip: "⚠️ Yes, Roach actually talks. It's not a glitch, it's the quest. Enjoy it!" },
          { id: "bs10", name: "Turn and Face the Strange", type: "side", spoilerTip: "⚠️ Unlocks MUTATIONS — incredibly powerful upgrades. Euphoria mutation is the best in the game." },
          { id: "bs11", name: "Wine Wars: Coronata", type: "side" },
          { id: "bs12", name: "Wine Wars: Vermentino", type: "side" },
          { id: "bs13", name: "Wine Wars: Belgaard", type: "side" },
          { id: "bs14", name: "Wine Wars: The Deus in the Machina", type: "side" },
          { id: "bs15", name: "There Can Be Only One", type: "side", spoilerTip: "⚠️ Prove all 5 chivalric virtues to get Aerondight — the BEST silver sword in the game. It levels with you!" },
          { id: "bs16", name: "Scavenger Hunt: Grandmaster Wolven Gear", type: "side" },
          { id: "bs17", name: "Scavenger Hunt: Grandmaster Feline Gear", type: "side" },
          { id: "bs18", name: "Scavenger Hunt: Grandmaster Ursine Gear", type: "side" },
          { id: "bs19", name: "Scavenger Hunt: Grandmaster Griffin Gear", type: "side" },
          { id: "bs20", name: "Scavenger Hunt: Grandmaster Manticore Gear", type: "side" },
          { id: "bs21", name: "Contract: Bovine Blues", type: "side" },
          { id: "bs22", name: "Contract: The Tufo Monster", type: "side" },
          { id: "bs23", name: "Contract: The Beast of Honorton", type: "side" },
          { id: "bs24", name: "Contract: Equine Phantoms", type: "side" },
          { id: "bs25", name: "Contract: The Suffering of Young Ferdinand", type: "side" },
          { id: "bs26", name: "Contract: Father Knows Worst", type: "side" },
          { id: "bs27", name: "Contract: The White Lady", type: "side" },
        ],
      },
    ],
  },
  {
    id: "bestiary",
    label: "Bestiary",
    sections: [
      {
        title: "Necrophages",
        id: "necrophages",
        quests: [
          { id: "m1", name: "Drowners", type: "collectible", spoilerTip: "🗡️ Oil: Necrophage. Sign: Igni. Found near water. Weak attacks but grab move is dangerous. Water Hags are the elite version — mud spit blinds you." },
          { id: "m2", name: "Ghouls & Alghouls", type: "collectible", spoilerTip: "🗡️ Oil: Necrophage. Sign: Axii (Alghouls). Alghouls raise spines — use Axii to lower them, then attack. Never hit raised spines!" },
          { id: "m3", name: "Rotfiends", type: "collectible", spoilerTip: "🗡️ Oil: Necrophage. Sign: Aard. THEY EXPLODE on death! When HP is low they charge and self-destruct. Aard pushes them away." },
          { id: "m4", name: "Foglets", type: "collectible", spoilerTip: "🗡️ Oil: Necrophage. Sign: Quen + Moon Dust. Vanish in fog, reappear for surprise attacks. Moon Dust forces them visible." },
          { id: "m5", name: "Grave Hags", type: "collectible", spoilerTip: "🗡️ Oil: Necrophage. Sign: Quen. Long tongue lash. Summons ghouls. Kill adds first. High damage but squishy." },
        ],
      },
      {
        title: "Specters",
        id: "specters",
        quests: [
          { id: "m6", name: "Wraiths (Noon & Night)", type: "collectible", spoilerTip: "🗡️ Oil: Specter. Sign: Yrden (REQUIRED). Moon Dust prevents phasing. Yrden makes them solid — attack inside the circle only." },
          { id: "m7", name: "Noonwraith", type: "collectible", spoilerTip: "🗡️ Oil: Specter. Sign: Yrden. Splits into copies — real one flickers. Place Yrden, wait for real one." },
          { id: "m8", name: "Nightwraith", type: "collectible", spoilerTip: "🗡️ Oil: Specter. Sign: Yrden. Summons 3 copies that walk toward her — if they reach her she heals. Kill copies FAST." },
          { id: "m9", name: "The Hym", type: "collectible", spoilerTip: "🗡️ Oil: Specter. Feeds on guilt. Can't kill normally. Trick it (Cerys's plan) or confrontation." },
          { id: "m10", name: "Pesta (Plague Maiden)", type: "collectible", spoilerTip: "🗡️ Oil: Specter. Sign: Yrden. Very fast, toxic cloud. Yrden + dodge." },
        ],
      },
      {
        title: "Cursed Ones",
        id: "cursedOnes",
        quests: [
          { id: "m11", name: "Werewolves", type: "collectible", spoilerTip: "🗡️ Oil: Cursed. Sign: Igni + Moon Dust. #1 rule: STOP THE REGEN. Moon Dust prevents healing. Igni burns and staggers." },
          { id: "m12", name: "Botchlings", type: "collectible", spoilerTip: "🗡️ Oil: Cursed. Sign: Axii. Use Axii to calm it → becomes Lubberkin (helpful spirit). Better outcome." },
          { id: "m13", name: "Ulfhedinn (Ice Werewolf)", type: "collectible", spoilerTip: "🗡️ Oil: Cursed. Sign: Igni + Moon Dust. Skellige variant. Freezing attacks. Igni thaws movement debuff." },
          { id: "m14", name: "Striga", type: "collectible", spoilerTip: "🗡️ Oil: Cursed. Sign: Yrden + Quen. Extremely aggressive. Quen absorbs charges, Yrden slows." },
        ],
      },
      {
        title: "Relicts",
        id: "relicts",
        quests: [
          { id: "m15", name: "Fiends", type: "collectible", spoilerTip: "🗡️ Oil: Relict. Bomb: Samum. Third eye HYPNOTIZES. Samum breaks trance. Stay behind them. Very high HP." },
          { id: "m16", name: "Leshens", type: "collectible", spoilerTip: "🗡️ Oil: Relict. Sign: Igni + Dimeritium. Summon wolves and crows. Igni burns roots. Dimeritium stops summons." },
          { id: "m17", name: "Ancient Leshens", type: "collectible", spoilerTip: "🗡️ Oil: Relict. Top 3 hardest enemies. Teleport between trees. Bring Swallow, Thunderbolt, full Relict Oil. Level 20+." },
          { id: "m18", name: "Chorts", type: "collectible", spoilerTip: "🗡️ Oil: Relict. Sign: Aard. Mini-fiends. Charge attack is devastating. Dodge sideways." },
        ],
      },
      {
        title: "Draconids",
        id: "draconids",
        quests: [
          { id: "m19", name: "Wyverns", type: "collectible", spoilerTip: "🗡️ Oil: Draconid. Crossbow to ground them. Aard when hovering. Dodge tail swipes. Grapeshot bombs." },
          { id: "m20", name: "Cockatrices", type: "collectible", spoilerTip: "🗡️ Oil: Draconid. Like wyverns but faster. Ground them first. They spit poison — Golden Oriole helps." },
          { id: "m21", name: "Basilisks", type: "collectible", spoilerTip: "🗡️ Oil: Draconid. Petrifying gaze — dodge sideways. Can fly. Crossbow or Aard to ground." },
          { id: "m22", name: "Forktails", type: "collectible", spoilerTip: "🗡️ Oil: Draconid. Biggest draconid besides actual dragons. Same tactics but much more HP." },
        ],
      },
      {
        title: "Vampires",
        id: "vampires",
        quests: [
          { id: "m23", name: "Katakans", type: "collectible", spoilerTip: "🗡️ Oil: Vampire. Potion: Black Blood. Turn invisible! Moon Dust reveals them. Black Blood damages on hit." },
          { id: "m24", name: "Ekimmaras", type: "collectible", spoilerTip: "🗡️ Oil: Vampire. Sign: Igni. Grab and drain health. Dodge the grab. Igni burns them off." },
          { id: "m25", name: "Bruxae & Alps", type: "collectible", spoilerTip: "🗡️ Oil: Vampire. Sign: Yrden + Moon Dust. Turn invisible and shriek. Their scream has huge range — dodge sideways." },
          { id: "m26", name: "Higher Vampires (B&W)", type: "collectible", spoilerTip: "🗡️ Oil: Vampire. Potion: Black Blood Superior. UNKILLABLE in lore. Superior Black Blood reflects damage. They regen in mist — wait it out." },
          { id: "m27", name: "Garkains", type: "collectible", spoilerTip: "🗡️ Oil: Vampire. Terrifying screech stuns. Quen blocks the stun. Very aggressive." },
        ],
      },
      {
        title: "Elementa & Ogroids",
        id: "elementa",
        quests: [
          { id: "m28", name: "Golems", type: "collectible", spoilerTip: "🗡️ Oil: Elementa. Bomb: Dimeritium. Immune to most signs. Heavy attacks only." },
          { id: "m29", name: "Earth Elementals", type: "collectible", spoilerTip: "🗡️ Oil: Elementa. Ground pound sends shockwaves — jump over them. Slow but hits like a truck." },
          { id: "m30", name: "Ice Elementals", type: "collectible", spoilerTip: "🗡️ Oil: Elementa. Sign: Igni (slightly effective). Freeze attacks slow you. Keep moving." },
          { id: "m31", name: "Trolls (Often Friendly!)", type: "collectible", spoilerTip: "🗡️ Oil: Ogroid. Many trolls can be TALKED TO — hilarious dialogue. Only fight if necessary. If fighting: dodge + fast attacks." },
          { id: "m32", name: "Nekkers", type: "collectible", spoilerTip: "🗡️ Oil: Ogroid. Sign: Yrden. Dangerous in groups. Yrden slows them, then Whirl attack clears the pack." },
          { id: "m33", name: "Ice Giant (Lord of Undvik)", type: "collectible", spoilerTip: "🗡️ Oil: Ogroid. Sign: Igni. Boss fight. Dodge the sweeping attacks. Igni staggers. Attack the legs." },
        ],
      },
    ],
  },
  {
    id: "weapons",
    label: "Weapons & Armor",
    sections: [
      {
        title: "Witcher School Gear Sets",
        id: "gearSets",
        quests: [
          { id: "w1", name: "Cat/Feline School Gear", type: "collectible", spoilerTip: "⚔️ LIGHT ARMOR — Fast attack + critical hit builds.\n\nBase: Scavenger hunts Novigrad/Velen (Lv 17). Enhanced: Lv 23. Superior: Lv 29. Mastercrafted: Lv 34.\nGrandmaster (B&W) Lv 40: 6-piece bonus gives +100% crit damage on charged strong attacks.\n\nPair with: Cat School Techniques, Muscle Memory, Precise Blows, Whirl." },
          { id: "w2", name: "Griffin School Gear", type: "collectible", spoilerTip: "⚔️ MEDIUM ARMOR — Sign intensity builds.\n\nBase: Dragonslayer's Grotto (Lv 11).\nGrandmaster 6-piece: Next sign cast within 3 sec has double intensity.\n\nPair with: Griffin School Techniques, Melt Armor, Active Shield, Sustained Glyphs." },
          { id: "w3", name: "Bear/Ursine School Gear", type: "collectible", spoilerTip: "⚔️ HEAVY ARMOR — Tank/strong attack builds.\n\nBase: Skellige (Lv 20). Huge armor + resistance.\nGrandmaster 6-piece: Quen auto-casts when vitality drops below 33%.\n\nPair with: Bear School Techniques, Rend, Crushing Blows, Razor Focus." },
          { id: "w4", name: "Wolf School Gear", type: "collectible", spoilerTip: "⚔️ MEDIUM ARMOR — Hybrid/balanced builds.\n\nBase: Kaer Morhen (Lv 14). Good offense + defense balance.\nGrandmaster 6-piece: Bonuses to both attack power and Sign intensity.\n\nPair with: Any school technique. Jack of all trades." },
          { id: "w5", name: "Manticore School Gear (B&W Only)", type: "collectible", spoilerTip: "⚔️ LIGHT ARMOR — Alchemy/toxicity builds.\n\nOnly Grandmaster tier (Lv 40). 6-piece: +3 max charges on ALL bombs.\nMassive alchemy bonuses + extra toxicity.\n\nPair with: Acquired Tolerance, Synergy, Killing Spree, Euphoria mutation." },
          { id: "w6", name: "Viper School Gear", type: "collectible", spoilerTip: "⚔️ LIGHT ARMOR — Poison damage.\n\nBase: White Orchard (Lv 2) — great early swords.\nVenomous versions: Hearts of Stone (Lv 39). Save Olgierd = silver sword.\n\nPoison stacks deal % max HP damage." },
        ],
      },
      {
        title: "Legendary & Unique Weapons",
        id: "legendaryWeapons",
        quests: [
          { id: "w7", name: "Aerondight — Best Silver Sword", type: "collectible", spoilerTip: "⚔️ LEGENDARY (B&W). From 'There Can Be Only One' — prove all 5 chivalric virtues.\n\nEach hit adds a charge (max 10). At 10 charges, kills permanently increase base damage. SCALES INFINITELY. The only weapon you'll never replace." },
          { id: "w8", name: "Iris' Default — Best Steel Sword", type: "collectible", spoilerTip: "⚔️ UNIQUE (HoS). Olgierd's sword. Charges during combat — fully charged heavy attack does MASSIVE damage (drains 15% vitality). Worth the trade." },
          { id: "w9", name: "Toussaint Knight's Steel Sword", type: "collectible", spoilerTip: "⚔️ Won from 'Warble of a Smitten Knight' tournament. Lv 39. +15% Aard Sign intensity." },
          { id: "w10", name: "Hen Gaidth Steel Sword", type: "collectible", spoilerTip: "⚔️ Found in Unseen Elder's cave (B&W). Very high damage. Only if you choose the Unseen Elder path." },
          { id: "w11", name: "Gesheft — Silver Sword", type: "collectible", spoilerTip: "⚔️ Relic silver sword (B&W). High critical hit damage. Hidden treasure in Toussaint." },
          { id: "w12", name: "Blave — Steel Sword", type: "collectible", spoilerTip: "⚔️ Relic steel sword (B&W). High base damage + bleeding bonus." },
        ],
      },
      {
        title: "Crossbows & Bolts",
        id: "crossbows",
        quests: [
          { id: "w13", name: "Crossbow Usage Guide", type: "collectible", spoilerTip: "🏹 INSTANT KILL underwater vs Drowners/Sirens. Use while sailing in Skellige. Aim up for flying enemies. Auto-aim in combat with quick-fire." },
          { id: "w14", name: "Ursine Crossbow — Highest damage", type: "collectible", spoilerTip: "🏹 Part of Bear School Gear. Best raw damage. +50% crit on bolts." },
          { id: "w15", name: "Feline Crossbow — Best crits", type: "collectible", spoilerTip: "🏹 Part of Cat School Gear. Lower base but massive crit multiplier. Pairs with Cat crit build." },
          { id: "w16", name: "Bolt Types: Exploding, Blunt, Split, Tracking", type: "collectible", spoilerTip: "🏹 EXPLODING: AoE damage. BLUNT: Knockdown. SPLIT: Multi-target. TRACKING: Homes on target. Always carry Exploding + Tracking." },
        ],
      },
      {
        title: "Crafting & Upgrades",
        id: "armorCrafting",
        quests: [
          { id: "w17", name: "Master Armorer — Fergus Graem", type: "collectible", spoilerTip: "⚔️ Quest: 'Master Armorers' in Crow's Perch. Bring Archgriffin acid gland. REQUIRED for Mastercrafted (Lv 34) armor!" },
          { id: "w18", name: "Master Swordsmith — Hattori", type: "collectible", spoilerTip: "⚔️ Quest: 'Of Swords and Dumplings' in Novigrad. REQUIRED for Mastercrafted (Lv 34) weapons!" },
          { id: "w19", name: "Grandmaster — Lazare Lafargue (B&W)", type: "collectible", spoilerTip: "⚔️ Beauclair. Crafts Grandmaster Lv 40 gear. Needs rare materials: enriched dimeritium, acid extract, infused dust." },
          { id: "w20", name: "Runewright — Ofieri Enchantments (HoS)", type: "collectible", spoilerTip: "⚔️ Fund his workshop (15,000 crowns total!). GAME-CHANGERS:\n• Severance: Extends Whirl/Rend range\n• Preservation: Permanent grindstone bonuses\n• Levity: Heavy armor → treated as Light (use with Cat techniques!)\n• Invigoration: Bonus damage at full HP" },
        ],
      },
    ],
  },
  {
    id: "alchemy",
    label: "Alchemy",
    sections: [
      {
        title: "Essential Potions",
        id: "potions",
        quests: [
          { id: "a1", name: "Swallow — Health Regeneration", type: "collectible", spoilerTip: "🧪 YOUR #1 POTION. Base: 80 vit/sec for 20s. Enhanced: 100/s for 25s. Superior: heals during combat too.\n\nRecipe: Dwarven Spirit + Celandine + Drowner Brain. Craft ASAP. Always equipped." },
          { id: "a2", name: "Thunderbolt — Attack Power", type: "collectible", spoilerTip: "🧪 +30% attack. Enhanced: +35%. Superior: +35% and during storms +100%!\n\nRecipe: Dwarven Spirit + Cortinarius + Endrega Embryo. Every boss fight." },
          { id: "a3", name: "Tawny Owl — Stamina Regen", type: "collectible", spoilerTip: "🧪 +20 stamina/sec = more Signs. Essential for Griffin/Sign builds. Superior: +1/sec per Sign skill." },
          { id: "a4", name: "Black Blood — Anti-Vampire", type: "collectible", spoilerTip: "🧪 Vampires/necrophages take damage when they bite YOU. Superior: 30% reflected + poison.\n\nESSENTIAL for: Katakans, Ekimmaras, all higher vampires." },
          { id: "a5", name: "Cat — Night Vision", type: "collectible", spoilerTip: "🧪 See in the dark. Critical for caves and underwater. Gets VERY bright in daylight — wait it out." },
          { id: "a6", name: "White Honey — Clear Toxicity", type: "collectible", spoilerTip: "🧪 EMERGENCY: Clears ALL potion effects and toxicity instantly. Always keep 1 dose. Saves your life." },
          { id: "a7", name: "Killer Whale — Underwater Breathing", type: "collectible", spoilerTip: "🧪 Extended breath underwater. Required for Skellige smuggler caches. Tons of underwater loot." },
          { id: "a8", name: "Blizzard — Slow Time on Kill", type: "collectible", spoilerTip: "🧪 Kill enemy → time slows 3 sec. Superior: each kill extends duration. Amazing vs groups with Cat build." },
          { id: "a9", name: "Maribor Forest — Adrenaline", type: "collectible", spoilerTip: "🧪 Faster Adrenaline Points. Pairs with Razor Focus, Flood of Anger (use AP for free sign casts)." },
          { id: "a10", name: "Full Moon — Max Vitality", type: "collectible", spoilerTip: "🧪 +1000/1500/2000 vitality. Massive HP cushion before boss fights. Stacks with food." },
        ],
      },
      {
        title: "Sword Oils",
        id: "oils",
        quests: [
          { id: "a11", name: "Necrophage Oil", type: "collectible", spoilerTip: "🗡️ +10/25/50% vs Drowners, Ghouls, Rotfiends, Foglets, Grave Hags, Water Hags. MOST USED OIL — these enemies are everywhere. Silver sword." },
          { id: "a12", name: "Specter Oil", type: "collectible", spoilerTip: "🗡️ +10/25/50% vs all Wraiths, Plague Maidens, The Hym. Silver sword. With Yrden = wraiths die fast." },
          { id: "a13", name: "Cursed Oil", type: "collectible", spoilerTip: "🗡️ +10/25/50% vs Werewolves, Striga, Botchlings, Ulfhedinn. Silver sword. Combined with Moon Dust." },
          { id: "a14", name: "Relict Oil", type: "collectible", spoilerTip: "🗡️ +10/25/50% vs Fiends, Leshens, Chorts. Silver sword. TOUGHEST enemies. Get Superior (50%)." },
          { id: "a15", name: "Vampire Oil", type: "collectible", spoilerTip: "🗡️ +10/25/50% vs all vampires. Silver sword. Essential for Blood & Wine. Stack with Black Blood." },
          { id: "a16", name: "Draconid Oil", type: "collectible", spoilerTip: "🗡️ +10/25/50% vs Wyverns, Cockatrices, Basilisks, Forktails. Silver sword." },
          { id: "a17", name: "Elementa Oil", type: "collectible", spoilerTip: "🗡️ +10/25/50% vs Golems, Elementals. Silver sword. Combined with Dimeritium Bomb. Massive HP fights." },
          { id: "a18", name: "Hybrid Oil", type: "collectible", spoilerTip: "🗡️ +10/25/50% vs Griffins, Harpies, Sirens. Silver sword. Keep applied while sailing in Skellige." },
          { id: "a19", name: "Insectoid Oil", type: "collectible", spoilerTip: "🗡️ +10/25/50% vs Endrega, Arachasae. Silver sword. Apply before entering nests." },
          { id: "a20", name: "Ogroid Oil", type: "collectible", spoilerTip: "🗡️ +10/25/50% vs Trolls, Nekkers, Cyclops, Ice Giants. Silver sword." },
          { id: "a21", name: "Hanged Man's Venom (STEEL)", type: "collectible", spoilerTip: "🗡️ +10/25/50% vs HUMANS. STEEL sword. Only oil for steel. Essential for bandit camps, soldiers." },
          { id: "a22", name: "Beast Oil (STEEL)", type: "collectible", spoilerTip: "🗡️ +10/25/50% vs Bears, Wolves, Dogs, Boars. STEEL sword. Useful in Skellige — bears everywhere." },
        ],
      },
      {
        title: "Bombs",
        id: "bombs",
        quests: [
          { id: "a23", name: "Moon Dust — Anti-Shapeshifting", type: "collectible", spoilerTip: "💣 MOST IMPORTANT BOMB. Stops: Werewolf regen, Wraith phasing, Foglet/Katakan invisibility.\n\nAlways carry max charges. Superior: prevents ALL monster transformations." },
          { id: "a24", name: "Dimeritium Bomb — Anti-Magic", type: "collectible", spoilerTip: "💣 Blocks ALL magic. Weakens Elementals, Golems, enemy mages. Stops Wild Hunt frost magic. Essential for golem fights." },
          { id: "a25", name: "Grapeshot — Shrapnel AoE", type: "collectible", spoilerTip: "💣 Pure AoE damage with silver shrapnel. Best opener — throw into a pack then engage survivors." },
          { id: "a26", name: "Northern Wind — Freeze", type: "collectible", spoilerTip: "💣 FREEZES enemies solid. Frozen = +100% damage. Superior: 100% freeze chance. Freeze → Rend = instant kill. Insanely powerful." },
          { id: "a27", name: "Devil's Puffball — Poison Cloud", type: "collectible", spoilerTip: "💣 Poison cloud damages over time. Lethal to humans at Superior. Pairs with Poisoned Blades skill." },
          { id: "a28", name: "Dancing Star — Fire", type: "collectible", spoilerTip: "💣 Sets enemies on fire. Humans panic and run. Good crowd control alternative to Igni." },
          { id: "a29", name: "Samum — Flash/Stun", type: "collectible", spoilerTip: "💣 Stuns and blinds. ONLY counter to Fiend's hypnosis. Great opener: Samum → fast attacks while stunned." },
          { id: "a30", name: "Cluster Bombs (Skill)", type: "collectible", spoilerTip: "💣 ALCHEMY SKILL: Bombs split into bomblets. With Manticore gear (+3 charges) = carpet bombing. Ridiculously fun." },
        ],
      },
      {
        title: "Decoctions (Mutagen Brews)",
        id: "decoctions",
        quests: [
          { id: "a31", name: "Ekhidna — Heal on Stamina Use", type: "collectible", spoilerTip: "🧪 BEST DECOCTION. Cast signs, jump, sprint = heal. Sign-heavy builds become near-immortal with Quen spam." },
          { id: "a32", name: "Ekimmara — Heal on Damage", type: "collectible", spoilerTip: "🧪 TOP 3. Every attack heals you by % of damage dealt. More damage = more healing. Pairs with Thunderbolt." },
          { id: "a33", name: "Water Hag — Damage at Full HP", type: "collectible", spoilerTip: "🧪 +50% damage when at full health. Glass cannon. Pairs with Quen (stays at full HP behind shield)." },
          { id: "a34", name: "Wyvern — Successive Attack Bonus", type: "collectible", spoilerTip: "🧪 Each hit increases damage until you stop. Rewards aggression. Great with Cat fast attacks." },
          { id: "a35", name: "Archgriffin — Strong Attack % Damage", type: "collectible", spoilerTip: "🧪 Strong attacks consume 1 AP to deal +10% of enemy max HP. Devastating vs bosses." },
          { id: "a36", name: "Succubus — Growing Attack Power", type: "collectible", spoilerTip: "🧪 Attack power grows during combat (up to +30%). Long fights = more damage. Great for bosses." },
          { id: "a37", name: "Troll — Vitality Regen", type: "collectible", spoilerTip: "🧪 Regen in AND out of combat. Steady healing stream. Stack with Swallow for double regen." },
          { id: "a38", name: "Ancient Leshen — Stamina on Sign", type: "collectible", spoilerTip: "🧪 Each Sign cast boosts stamina regen for rest of combat. Cast 3-4 Signs = near-instant refill. Perfect for Griffin builds." },
          { id: "a39", name: "Acquired Tolerance (Skill)", type: "collectible", spoilerTip: "🧪 MUST-HAVE SKILL: +1 max toxicity per known recipe. Learn ALL recipes = huge pool = 3-4 decoctions at once. Game-changing." },
          { id: "a40", name: "Euphoria Mutation (B&W)", type: "collectible", spoilerTip: "🧪 THE STRONGEST MUTATION. Each toxicity point boosts sword damage AND Sign intensity. At max toxicity = +70-80% to everything.\n\nFrom 'Turn and Face the Strange'. With Manticore gear + max decoctions = you are a GOD." },
        ],
      },
    ],
  },
];

// Build a lookup of dialogue trees by id for attaching to main quests.
const dialogueTrees = Object.fromEntries(
  dialogueSections.flatMap((s) => s.trees).map((t) => [t.id, t]),
);

// Map main quest id -> one or more dialogue tree ids. Choices are flattened.
const questToDialogues: Record<string, { contextId: string; treeIds: string[] }> = {
  p2: { contextId: "dt20", treeIds: ["dt20"] },
  v1: { contextId: "dt21", treeIds: ["dt21"] },
  v3: { contextId: "dt30", treeIds: ["dt30"] },
  v9: { contextId: "dt29", treeIds: ["dt29"] },
  v6: { contextId: "dt22", treeIds: ["dt22"] },
  v7: { contextId: "dt23", treeIds: ["dt23"] },
  v8: { contextId: "dt2", treeIds: ["dt2"] },
  s3: { contextId: "dt19", treeIds: ["dt19"] },
  s4: { contextId: "dt3", treeIds: ["dt3"] },
  k1: { contextId: "dt24", treeIds: ["dt24"] },
  k2: { contextId: "dt4", treeIds: ["dt4"] },
  k3: { contextId: "dt5", treeIds: ["dt5", "dt6", "dt7", "dt8"] },
  k7: { contextId: "dt9", treeIds: ["dt9", "dt10"] },
  h3: { contextId: "dt25", treeIds: ["dt25"] },
  h5: { contextId: "dt11", treeIds: ["dt11"] },
  h2: { contextId: "dt12", treeIds: ["dt12"] },
  b3: { contextId: "dt13", treeIds: ["dt13"] },
  b6: { contextId: "dt15", treeIds: ["dt14", "dt15"] },
  vs17: { contextId: "dt32", treeIds: ["dt32"] },
  vs22: { contextId: "dt34", treeIds: ["dt34"] },
  vs35: { contextId: "dt35", treeIds: ["dt35"] },
};

for (const tab of questTabs) {
  if (tab.id !== "main" && tab.id !== "side") continue;
  for (const section of tab.sections) {
    for (const quest of section.quests) {
      const mapping = questToDialogues[quest.id];
      if (!mapping) continue;
      const ctx = dialogueTrees[mapping.contextId];
      if (ctx) quest.dialogueContext = ctx.context;
      quest.dialogues = mapping.treeIds.flatMap(
        (id) => dialogueTrees[id]?.choices ?? [],
      );
    }
  }
}
