import whiteOrchardMap from "@/assets/maps/white-orchard.png";
import velenMap from "@/assets/maps/velen.png";
import novigradMap from "@/assets/maps/novigrad.png";
import skelligeMap from "@/assets/maps/skellige.png";
import toussaintMap from "@/assets/maps/toussaint.png";
import kaerMorhenMap from "@/assets/maps/kaer-morhen.png";
import vizimaMap from "@/assets/maps/vizima.png";
import isleOfMistsMap from "@/assets/maps/isle-of-mists.png";
import oxenfurtMap from "@/assets/maps/oxenfurt.png";

export interface MapPin {
  id: string;
  name: string;
  type: "quest" | "merchant" | "signpost" | "place_of_power" | "monster_nest" | "treasure" | "poi" | "herbalist" | "armorer" | "tavern" | "notice_board" | "alchemist";
  description: string;
  x: number;
  y: number;
}

export interface MapRegion {
  id: string;
  name: string;
  description: string;
  level: string;
  image: string;
  pins: MapPin[];
}

export const mapRegions: MapRegion[] = [
  {
    id: "white-orchard",
    image: whiteOrchardMap,
    name: "White Orchard",
    description: "A small, war-torn region where Geralt begins his journey. Tutorial area with introductory quests and basic crafting materials.",
    level: "Lv. 1–5",
    pins: [
      { id: "wo-1", name: "White Orchard Inn", type: "tavern", description: "Merchant, notice board, and Gwent players. Buy the Temerian Armor set here early. Play the innkeep for your first Gwent card.", x: 35, y: 40 },
      { id: "wo-2", name: "Nilfgaardian Garrison", type: "quest", description: "Main quest: Lilac and Gooseberries. Meet the Nilfgaardian commander for info on Yennefer.", x: 60, y: 30 },
      { id: "wo-3", name: "Griffin's Nest", type: "monster_nest", description: "First boss fight — the Royal Griffin. Use Aard and crossbow when airborne. Apply Hybrid Oil.", x: 75, y: 15 },
      { id: "wo-4", name: "Place of Power (Aard)", type: "place_of_power", description: "Free ability point! Located near the river crossing south of the village.", x: 25, y: 65 },
      { id: "wo-5", name: "Tomira — Herbalist", type: "herbalist", description: "Buy crafting recipes, herbs, and the Swallow potion formula. Essential for alchemy builds. Sells Manuscript Page: White Raffard's Decoction.", x: 45, y: 55 },
      { id: "wo-6", name: "Abandoned Site", type: "treasure", description: "Clear the ghouls to unlock a fast travel signpost and merchant.", x: 15, y: 35 },
      { id: "wo-7", name: "Mill Signpost", type: "signpost", description: "Fast travel point near the Noonwraith contract location.", x: 55, y: 70 },
      { id: "wo-8", name: "Notice Board — Village", type: "notice_board", description: "Pick up Devil by the Well contract (Noonwraith) and On Death's Bed side quest. Always check notice boards!", x: 38, y: 42 },
      { id: "wo-9", name: "Willis — Armorer", type: "armorer", description: "The only armorer in White Orchard. Can craft basic armor. Complete his quest 'Twisted Firestarter' for discount.", x: 40, y: 38 },
      { id: "wo-10", name: "Place of Power (Igni)", type: "place_of_power", description: "Hidden in the woods east of the village. Another free ability point — don't miss it!", x: 70, y: 50 },
      { id: "wo-11", name: "Place of Power (Axii)", type: "place_of_power", description: "Near the riverside south. Grab all 6 Places of Power in White Orchard for 6 free ability points.", x: 30, y: 75 },
      { id: "wo-12", name: "Merchant — Sawmill", type: "merchant", description: "Sells crafting materials. Unlock by clearing the monster nest nearby.", x: 50, y: 25 },
      { id: "wo-13", name: "Noonwraith Contract Area", type: "quest", description: "Contract: Devil by the Well. Level 2 Noonwraith. Use Yrden sign and Specter Oil. Reward: ~20 Crowns.", x: 58, y: 65 },
    ],
  },
  {
    id: "velen",
    image: velenMap,
    name: "Velen (No Man's Land)",
    description: "A vast, war-ravaged swampland. Home to the Bloody Baron questline, the Crones, and countless side quests. The largest explorable region.",
    level: "Lv. 3–20",
    pins: [
      { id: "v-1", name: "Crow's Perch (Bloody Baron)", type: "quest", description: "Major questline hub. The Baron's story has multiple outcomes based on dialogue choices with the Crones.", x: 40, y: 25 },
      { id: "v-2", name: "Crookback Bog", type: "quest", description: "Home of the three Crones. Critical choices here affect the orphans AND the Baron. Save before entering.", x: 30, y: 60 },
      { id: "v-3", name: "Oxenfurt", type: "merchant", description: "University city with armorers, swordsmiths, and Gwent players. Buy Redanian maps here.", x: 70, y: 15 },
      { id: "v-4", name: "Fyke Isle", type: "quest", description: "Side quest: A Towerful of Mice. Bring Keira Metz here. WARNING: Your choice about the lamp affects a later quest.", x: 80, y: 45 },
      { id: "v-5", name: "Whispering Hillock", type: "quest", description: "CRITICAL CHOICE: Free or kill the spirit. Freeing it saves the orphans but dooms the Baron's wife. No perfect outcome.", x: 25, y: 50 },
      { id: "v-6", name: "Hanged Man's Tree", type: "signpost", description: "Starting signpost in Velen. Notice board with contracts nearby.", x: 35, y: 15 },
      { id: "v-7", name: "Place of Power (Igni)", type: "place_of_power", description: "Hidden in the cave system south of Downwarren. Bring a torch.", x: 20, y: 70 },
      { id: "v-8", name: "Keira Metz's Hideout", type: "quest", description: "Romanceable character. Complete her quests to recruit her for Kaer Morhen. DON'T let her go to Radovid!", x: 65, y: 35 },
      { id: "v-9", name: "Dragonslayer Grotto", type: "treasure", description: "Contains the Feline School Gear diagrams (basic set). Great for fast-attack builds.", x: 50, y: 40 },
      { id: "v-10", name: "Notice Board — Midcopse", type: "notice_board", description: "Contracts: Jenny o' the Woods (Nightwraith), Woodland Beast. Side quests: Forefather's Eve with Pellar.", x: 32, y: 45 },
      { id: "v-11", name: "Notice Board — Oreton", type: "notice_board", description: "Contract: Shrieker (Cockatrice). Multiple treasure hunt starters.", x: 45, y: 55 },
      { id: "v-12", name: "Notice Board — Oxenfurt", type: "notice_board", description: "Contracts and side quests for Lv. 10-15 range. Gwent players in the tavern.", x: 72, y: 18 },
      { id: "v-13", name: "Herbalist — Pellar's Hut", type: "herbalist", description: "The Pellar sells rare herbs and alchemy recipes. Also involved in the Forefather's Eve quest.", x: 28, y: 40 },
      { id: "v-14", name: "Herbalist — Halfling", type: "herbalist", description: "South of Oxenfurt. Sells Alchemy recipes including Superior oil formulas.", x: 60, y: 30 },
      { id: "v-15", name: "Armorer — Crow's Perch", type: "armorer", description: "Journeyman armorer at Baron's castle. Can craft up to Journeyman-level gear.", x: 42, y: 27 },
      { id: "v-16", name: "Armorer — Oxenfurt", type: "armorer", description: "Master Armorer. Can craft enhanced Witcher gear sets. Complete Master Armorers quest for access.", x: 68, y: 13 },
      { id: "v-17", name: "Tavern — Cunny of the Goose", type: "tavern", description: "Gwent player inside. Rest spot. Notice board outside with contracts.", x: 55, y: 50 },
      { id: "v-18", name: "Tavern — Seven Cats", type: "tavern", description: "Fist-fighting quest location. Gwent player. Contract board nearby.", x: 75, y: 35 },
      { id: "v-19", name: "Alchemist — Downwarren", type: "alchemist", description: "Basic alchemy supplies. Near the Whispering Hillock quest area.", x: 22, y: 55 },
      { id: "v-20", name: "Keira Metz — Quests Route", type: "quest", description: "Route: Hunting a Witch → Wandering in the Dark → A Towerful of Mice → For the Advancement of Learning. Critical order!", x: 62, y: 38 },
      { id: "v-21", name: "Bloody Baron Route", type: "quest", description: "Route: Family Matters → Ladies of the Wood → Whispering Hillock → Return to Crookback Bog. Choices cascade!", x: 36, y: 35 },
      { id: "v-22", name: "Place of Power (Quen)", type: "place_of_power", description: "Underwater cave entrance west of Fyke Isle. Dive down to find it.", x: 78, y: 50 },
      { id: "v-23", name: "Place of Power (Yrden)", type: "place_of_power", description: "In the ruins near Dragonslayer Grotto. Guarded by wraiths.", x: 48, y: 42 },
    ],
  },
  {
    id: "novigrad",
    image: novigradMap,
    name: "Novigrad",
    description: "The largest city in the Northern Kingdoms. Hub for Triss's questline, criminal underworld, and the best merchants. Witch hunter danger zone.",
    level: "Lv. 10–25",
    pins: [
      { id: "n-1", name: "Hierarch Square", type: "signpost", description: "City center. Noticeboard, barber, and merchants. Fast travel hub.", x: 50, y: 30 },
      { id: "n-2", name: "Triss's Hideout", type: "quest", description: "Now or Never quest. CRITICAL: If you want to romance Triss, tell her you love her at the docks. Last chance!", x: 35, y: 45 },
      { id: "n-3", name: "Dijkstra's Bathhouse", type: "quest", description: "Quest hub for the Novigrad crime storyline. Contains the Blindingly Obvious quest.", x: 55, y: 55 },
      { id: "n-4", name: "Hattori (Master Swordsmith)", type: "merchant", description: "Complete his quest to unlock the best swordsmith in the game. Can craft Mastercrafted gear.", x: 40, y: 65 },
      { id: "n-5", name: "Vivaldi Bank", type: "poi", description: "Exchange Florens and Orens for Crowns. Don't forget to cash in foreign currency!", x: 60, y: 25 },
      { id: "n-6", name: "Passiflora", type: "tavern", description: "High-stakes Gwent tournament location. Win all rounds for a unique card. Also a brothel.", x: 45, y: 40 },
      { id: "n-7", name: "Temple Isle", type: "quest", description: "Eternal Fire headquarters. Several side quests involving witch hunters.", x: 30, y: 20 },
      { id: "n-8", name: "The Bits", type: "poi", description: "Sketchy district. Fencing stolen goods and underground fighting ring.", x: 65, y: 50 },
      { id: "n-9", name: "Notice Board — Hierarch Square", type: "notice_board", description: "Main city notice board. Contracts: Deadly Delights (Succubus), The Creature from Oxenfurt Forest.", x: 52, y: 32 },
      { id: "n-10", name: "Notice Board — Harbor", type: "notice_board", description: "Harbor-area contracts and treasure hunts. Check for smuggler cache quests.", x: 38, y: 70 },
      { id: "n-11", name: "Herbalist — Golden Sturgeon", type: "herbalist", description: "Sells rare herbs, alchemy formulas, and crafting materials near the harbor.", x: 42, y: 60 },
      { id: "n-12", name: "Armorer — Lazare Lafargue", type: "armorer", description: "Grandmaster Armorer (after Blood & Wine). Best armor crafting in the base game.", x: 48, y: 35 },
      { id: "n-13", name: "Alchemist — Gremist", type: "alchemist", description: "Not in Novigrad but referenced here — actually in Skellige. Sells Superior-level alchemy formulas.", x: 58, y: 48 },
      { id: "n-14", name: "Tavern — Kingfisher Inn", type: "tavern", description: "Dandelion's establishment. Central meeting point for many quests. Gwent players upstairs.", x: 50, y: 45 },
      { id: "n-15", name: "Tavern — Golden Sturgeon", type: "tavern", description: "Dockside tavern. Fist-fighting matches. Important quest NPCs.", x: 40, y: 58 },
      { id: "n-16", name: "Triss Quests Route", type: "quest", description: "Route: A Matter of Life and Death → Now or Never (romance lock). Complete BEFORE Isle of Mists!", x: 33, y: 48 },
      { id: "n-17", name: "Dandelion Route", type: "quest", description: "Route: Broken Flowers → Get Junior → Count Reuven's Treasure → Poet Under Pressure. Long chain!", x: 53, y: 38 },
      { id: "n-18", name: "Barber (Hairdresser)", type: "poi", description: "Change Geralt's hairstyle and beard. Located near Hierarch Square.", x: 47, y: 28 },
    ],
  },
  {
    id: "skellige",
    image: skelligeMap,
    name: "Skellige Isles",
    description: "A rugged archipelago of Viking-inspired islands. Home to Yennefer's questline, the King's succession, and powerful monsters.",
    level: "Lv. 16–30",
    pins: [
      { id: "s-1", name: "Kaer Trolde Harbor", type: "signpost", description: "Main arrival point. Armor and weapon shops. Start of Skellige main quests.", x: 45, y: 35 },
      { id: "s-2", name: "Lugos's Castle", type: "quest", description: "King's Gambit quest. CRITICAL: Your choice between Hjalmar and Cerys determines Skellige's ruler. Cerys = better ending.", x: 35, y: 20 },
      { id: "s-3", name: "Yennefer's Room (Kaer Trolde)", type: "quest", description: "The Last Wish quest. CRITICAL ROMANCE: Choose 'I love you' or break up forever. Affects ending.", x: 50, y: 30 },
      { id: "s-4", name: "Undvik", type: "quest", description: "Hjalmar's quest to kill an Ice Giant. Great loot and XP. Explore thoroughly for the Ursine gear diagrams.", x: 70, y: 25 },
      { id: "s-5", name: "Druid's Grove — Places of Power", type: "place_of_power", description: "Multiple Places of Power on Ard Skellig. Free ability points! 4 total in this area.", x: 40, y: 50 },
      { id: "s-6", name: "Whale Graveyard", type: "treasure", description: "Smuggler's caches in the water. Use the boat! Contains rare crafting materials.", x: 25, y: 60 },
      { id: "s-7", name: "Tower of Mice", type: "monster_nest", description: "Wraith-infested location. Use Yrden and Moon Dust bombs.", x: 60, y: 45 },
      { id: "s-8", name: "Morkvarg's Lair", type: "quest", description: "In Wolf's Clothing quest. Feed Morkvarg his own flesh to lift the curse (or kill him).", x: 55, y: 65 },
      { id: "s-9", name: "Notice Board — Kaer Trolde", type: "notice_board", description: "Contracts: Dragon (actually a Forktail), The Phantom of Eldberg. High-level contracts here.", x: 47, y: 37 },
      { id: "s-10", name: "Notice Board — Holmstein's Port", type: "notice_board", description: "More Skellige contracts. Missing person quests lead to treasure.", x: 30, y: 45 },
      { id: "s-11", name: "Herbalist — Ard Skellig", type: "herbalist", description: "Sells unique Skellige herbs not found elsewhere. Look for Pimpernel and Hornwort.", x: 38, y: 55 },
      { id: "s-12", name: "Armorer — Kaer Trolde", type: "armorer", description: "Master Armorer. Can craft Enhanced and Superior Ursine gear. Sells Skellige-style armor.", x: 43, y: 33 },
      { id: "s-13", name: "Gremist — Master Alchemist", type: "alchemist", description: "CRITICAL: Complete 'Practicum in Advanced Alchemy' to access Superior and Master alchemy formulas. 3-part quest.", x: 32, y: 40 },
      { id: "s-14", name: "Tavern — New Port Inn", type: "tavern", description: "Rest location, Gwent players, quest NPCs. Fist fighting matches available.", x: 48, y: 40 },
      { id: "s-15", name: "Yennefer Route", type: "quest", description: "Route: Ugly Baby → The Last Wish → No Place Like Home → Battle of Kaer Morhen. Romance locks in!", x: 52, y: 28 },
      { id: "s-16", name: "Smuggler Cache Routes (Boat)", type: "treasure", description: "100+ smuggler caches in the water. Each gives 100-500 Crowns worth of loot. USE YOUR BOAT. Best money farm.", x: 20, y: 50 },
      { id: "s-17", name: "Place of Power (Axii)", type: "place_of_power", description: "On the small island south of Ard Skellig. Swim or boat to reach it.", x: 35, y: 70 },
      { id: "s-18", name: "Place of Power (Quen)", type: "place_of_power", description: "Mountain cave on Undvik. Near the Ice Giant's lair.", x: 72, y: 30 },
    ],
  },
  {
    id: "toussaint",
    image: toussaintMap,
    name: "Toussaint (Blood & Wine)",
    description: "A beautiful, fairy-tale duchy in the south. Features Geralt's vineyard home, vampire intrigue, and the highest-level content in the game.",
    level: "Lv. 34–50",
    pins: [
      { id: "t-1", name: "Beauclair Palace", type: "quest", description: "Main hub for Blood & Wine. Meet Duchess Anna Henrietta. Multiple endings based on your investigation choices.", x: 50, y: 30 },
      { id: "t-2", name: "Corvo Bianco (Your Vineyard)", type: "poi", description: "Geralt's retirement home! Upgrade it with gold. Armor stand, weapon rack, alchemy lab, and guest room.", x: 35, y: 55 },
      { id: "t-3", name: "Grandmaster Smith", type: "armorer", description: "ONLY smith who can craft Grandmaster Witcher gear. Located in Beauclair. Bring diagrams + materials.", x: 55, y: 25 },
      { id: "t-4", name: "Tesham Mutna", type: "quest", description: "Ancient vampire ruins. Boss fight with Detlaff. Use Black Blood potion and Yrden.", x: 70, y: 50 },
      { id: "t-5", name: "Land of a Thousand Fables", type: "quest", description: "Fairy tale dimension! Fight Rapunzel, the Big Bad Wolf, and more. Unique loot inside.", x: 25, y: 40 },
      { id: "t-6", name: "Hanse Bases", type: "monster_nest", description: "Three bandit camps to clear. Excellent XP and loot. Each has a boss-level enemy.", x: 60, y: 65 },
      { id: "t-7", name: "Mutation Lab", type: "poi", description: "Unlock the mutation system here. Euphoria mutation is the strongest build in the game.", x: 40, y: 70 },
      { id: "t-8", name: "Tourney Grounds", type: "poi", description: "Participate in the knights' tournament. Win for unique rewards and story progression.", x: 45, y: 15 },
      { id: "t-9", name: "Notice Board — Beauclair", type: "notice_board", description: "B&W contracts: Big Feet to Fill (Giant), The Tufo Monster. Side quests: Wine Wars, Paperchase.", x: 52, y: 33 },
      { id: "t-10", name: "Notice Board — Francollarts", type: "notice_board", description: "Additional contracts and treasure hunts. Wine merchant quests.", x: 30, y: 45 },
      { id: "t-11", name: "Herbalist — Toussaint", type: "herbalist", description: "Sells unique herbs like Ducal Water and Toussaint-only alchemy ingredients. Near Corvo Bianco.", x: 37, y: 52 },
      { id: "t-12", name: "Alchemist — Beauclair", type: "alchemist", description: "Sells Grandmaster-level alchemy formulas and rare mutagen recipes.", x: 48, y: 28 },
      { id: "t-13", name: "Tavern — Pheasantry", type: "tavern", description: "Main Beauclair tavern. Gwent tournament. Rest and quest hub.", x: 53, y: 35 },
      { id: "t-14", name: "B&W Main Route", type: "quest", description: "Route: Beast of Toussaint → The Night of Long Fangs → Tesham Mutna → Final choice: Save or pursue Syanna.", x: 62, y: 40 },
      { id: "t-15", name: "Grandmaster Gear Diagrams", type: "treasure", description: "All 5 Grandmaster Witcher sets scattered across Toussaint. Each requires a scavenger hunt quest.", x: 42, y: 60 },
      { id: "t-16", name: "Place of Power (All Signs)", type: "place_of_power", description: "4 Places of Power in Toussaint. All in caves or ruins. Check map markers.", x: 28, y: 35 },
    ],
  },
  {
    id: "kaer-morhen",
    image: kaerMorhenMap,
    name: "Kaer Morhen",
    description: "The ancient Witcher stronghold in the Blue Mountains. Hub for the climactic Battle of Kaer Morhen and home to key story moments.",
    level: "Lv. 19–24",
    pins: [
      { id: "km-1", name: "Main Keep", type: "quest", description: "Central hub for the Battle of Kaer Morhen quest. Prepare defenses, assign allies, and make critical strategy choices.", x: 50, y: 35 },
      { id: "km-2", name: "Triss's Lab", type: "poi", description: "Alchemy lab with rare formulas. After the battle, check for loot left behind by allies.", x: 40, y: 30 },
      { id: "km-3", name: "Place of Power (Igni)", type: "place_of_power", description: "On the cliffs east of the keep. Free ability point. Reachable via the mountain path.", x: 70, y: 25 },
      { id: "km-4", name: "Place of Power (Aard)", type: "place_of_power", description: "Near the lake south of the fortress. Guarded by a water hag at higher levels.", x: 45, y: 65 },
      { id: "km-5", name: "Place of Power (Yrden)", type: "place_of_power", description: "In the old signal tower ruins west of the keep. Climb the scaffolding to reach it.", x: 25, y: 40 },
      { id: "km-6", name: "Bastion Ruins", type: "treasure", description: "Collapsed tower with hidden chest containing Enhanced Wolven gear diagrams.", x: 60, y: 50 },
      { id: "km-7", name: "Lake — Boat Access", type: "signpost", description: "Boat dock for crossing the lake. Access to underwater smuggler caches and a sunken chest.", x: 35, y: 70 },
      { id: "km-8", name: "Circle of Elements", type: "place_of_power", description: "Ancient circle with a Place of Power (Quen). Activate for ability point and lore.", x: 55, y: 55 },
      { id: "km-9", name: "Armorer's Table", type: "armorer", description: "Crafting station where you can repair and craft gear. No NPC smith — bring materials.", x: 48, y: 32 },
      { id: "km-10", name: "Eskel's Trail", type: "quest", description: "Follow Eskel's witcher trail for side dialogue and a hidden monster contract against a Leshen.", x: 30, y: 50 },
      { id: "km-11", name: "Old Watch Tower", type: "monster_nest", description: "Harpy nest on the crumbling tower. Clear it for crafting materials and a nearby chest.", x: 65, y: 20 },
      { id: "km-12", name: "Vesemir's Grave", type: "poi", description: "After the Battle of Kaer Morhen, pay respects here. Emotional scene with Ciri.", x: 52, y: 45 },
    ],
  },
  {
    id: "vizima",
    image: vizimaMap,
    name: "Vizima — Royal Palace",
    description: "The Temerian capital serves as Nilfgaard's northern headquarters. Brief but crucial story location with Emperor Emhyr.",
    level: "Lv. 1 / 30+",
    pins: [
      { id: "vz-1", name: "Throne Room", type: "quest", description: "Meet Emperor Emhyr var Emreis. Receive the contract to find Ciri. Return here at endgame for final decisions.", x: 50, y: 30 },
      { id: "vz-2", name: "Yennefer's Quarters", type: "poi", description: "Speak with Yennefer before departing. Pick up the letter and key items on the desk.", x: 40, y: 40 },
      { id: "vz-3", name: "Palace Garden", type: "poi", description: "Walk through after the audience. NPC conversations reveal political context and worldbuilding.", x: 55, y: 50 },
      { id: "vz-4", name: "Chamberlain", type: "merchant", description: "Exchange foreign currency and buy court attire. Sells unique Nilfgaardian gear.", x: 45, y: 35 },
      { id: "vz-5", name: "Palace Gate — Exit", type: "signpost", description: "Fast travel point. Use to return to Velen after the audience scene.", x: 50, y: 65 },
      { id: "vz-6", name: "War Room", type: "quest", description: "Endgame location where Geralt reports on Ciri's fate. Your choices throughout determine what Emhyr learns.", x: 60, y: 25 },
    ],
  },
  {
    id: "isle-of-mists",
    image: isleOfMistsMap,
    name: "Isle of Mists",
    description: "A mysterious, mist-shrouded island where Ciri has been hiding. Point of no return for many side quests.",
    level: "Lv. 22",
    pins: [
      { id: "im-1", name: "Dwarven Hut", type: "quest", description: "Find the dwarves guarding Ciri. Help each one before entering the main hut. Emotional reunion scene.", x: 40, y: 40 },
      { id: "im-2", name: "Ciri's Refuge", type: "quest", description: "⚠️ POINT OF NO RETURN: Entering starts Act 3. Complete ALL side quests, romances, and Gwent games first!", x: 50, y: 35 },
      { id: "im-3", name: "Shipwreck Cove", type: "treasure", description: "Wrecked ship on the south shore. Contains relic-tier sword and crafting materials.", x: 35, y: 65 },
      { id: "im-4", name: "Foglet Nest", type: "monster_nest", description: "Foglets guard the eastern path. Use Quen and Moon Dust bombs. Drops Foglet mutagen.", x: 65, y: 50 },
      { id: "im-5", name: "Ancient Lighthouse", type: "poi", description: "Climb for a panoramic view. Contains a journal with lore about the Conjunction of the Spheres.", x: 55, y: 20 },
      { id: "im-6", name: "Hidden Cave", type: "treasure", description: "Underwater entrance on the west side. Swim through for a chest with Greater Glyph of Quen.", x: 25, y: 55 },
    ],
  },
  {
    id: "oxenfurt",
    image: oxenfurtMap,
    name: "Oxenfurt",
    description: "University city east of Novigrad. Home to scholars, alchemists, and some of the best craftsmen in the Northern Kingdoms.",
    level: "Lv. 8–15",
    pins: [
      { id: "ox-1", name: "Oxenfurt Academy", type: "poi", description: "The famous university. Multiple NPCs offer side quests related to research and artifacts.", x: 50, y: 30 },
      { id: "ox-2", name: "Master Armorer", type: "armorer", description: "Can craft Enhanced Witcher gear. Complete the 'Master Armorers' quest to unlock full services.", x: 45, y: 40 },
      { id: "ox-3", name: "Oxenfurt Tavern", type: "tavern", description: "Gwent players, fist fighting, and quest NPCs. Good source of Gwent cards early on.", x: 55, y: 45 },
      { id: "ox-4", name: "Notice Board — Oxenfurt", type: "notice_board", description: "Contracts and treasure hunts for Lv. 10-15. Check regularly for new postings.", x: 48, y: 35 },
      { id: "ox-5", name: "Herbalist — University", type: "herbalist", description: "Sells advanced alchemy formulas. One of the best herb vendors in the game.", x: 42, y: 28 },
      { id: "ox-6", name: "Bridge to Novigrad", type: "signpost", description: "Fast travel point connecting Oxenfurt to Novigrad. Guarded checkpoint.", x: 30, y: 50 },
      { id: "ox-7", name: "Blacksmith — Master Swordsmith", type: "merchant", description: "After completing his quest chain, crafts Mastercrafted swords. Essential for endgame builds.", x: 60, y: 35 },
      { id: "ox-8", name: "Sewers Entrance", type: "quest", description: "Leads to a hidden Vampire contract. Lv. 14 Katakan. Bring Vampire Oil and Black Blood.", x: 52, y: 55 },
    ],
  },
];

export const pinTypeStyles: Record<string, { color: string; label: string }> = {
  quest: { color: "bg-quest-main", label: "Quest" },
  merchant: { color: "bg-quest-side", label: "Merchant" },
  signpost: { color: "bg-primary", label: "Signpost" },
  place_of_power: { color: "bg-success", label: "Place of Power" },
  monster_nest: { color: "bg-destructive", label: "Monster Nest" },
  treasure: { color: "bg-warning", label: "Treasure" },
  poi: { color: "bg-accent", label: "Point of Interest" },
  herbalist: { color: "bg-[hsl(150,60%,40%)]", label: "Herbalist" },
  armorer: { color: "bg-[hsl(220,60%,50%)]", label: "Armorer" },
  tavern: { color: "bg-[hsl(30,80%,50%)]", label: "Tavern" },
  notice_board: { color: "bg-[hsl(280,50%,50%)]", label: "Notice Board" },
  alchemist: { color: "bg-[hsl(60,70%,40%)]", label: "Alchemist" },
};
