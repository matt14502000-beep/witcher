export type GwentFaction = "Northern Realms" | "Nilfgaard" | "Scoia'tael" | "Monsters" | "Neutral";

export interface GwentCard {
  id: string;
  name: string;
  faction: GwentFaction;
  strength: number;
  ability?: string;
  hero: boolean;
  row: "Close" | "Ranged" | "Siege" | "Leader" | "Special";
  location: string;
}

export const gwentFactions: GwentFaction[] = ["Northern Realms", "Nilfgaard", "Scoia'tael", "Monsters", "Neutral"];

export const gwentCards: GwentCard[] = [
  // === NORTHERN REALMS ===
  // Leaders
  { id: "nr-foltest-steel", name: "Foltest – The Steel-Forged", faction: "Northern Realms", strength: 0, hero: false, row: "Leader", ability: "Clear weather", location: "Default leader" },
  { id: "nr-foltest-siege", name: "Foltest – The Siegemaster", faction: "Northern Realms", strength: 0, hero: false, row: "Leader", ability: "Double siege row", location: "Beat merchant in White Orchard tavern" },
  { id: "nr-foltest-son", name: "Foltest – Son of Medell", faction: "Northern Realms", strength: 0, hero: false, row: "Leader", ability: "Destroy enemy siege", location: "Beat Sigismund Dijkstra at Passiflora" },
  { id: "nr-foltest-lord", name: "Foltest – Lord Commander of the North", faction: "Northern Realms", strength: 0, hero: false, row: "Leader", ability: "Boost all units by 1", location: "Win Gwent tournament at Passiflora" },
  // Hero Cards
  { id: "nr-vernon-roche", name: "Vernon Roche", faction: "Northern Realms", strength: 10, hero: true, row: "Close", location: "Win from Thaler at Seven Cats Inn" },
  { id: "nr-john-natalis", name: "John Natalis", faction: "Northern Realms", strength: 10, hero: true, row: "Close", location: "Win from Bloody Baron at Crow's Perch" },
  { id: "nr-esterad-thyssen", name: "Esterad Thyssen", faction: "Northern Realms", strength: 10, hero: true, row: "Close", location: "Win from Dijkstra at Passiflora bathhouse" },
  { id: "nr-philippa", name: "Philippa Eilhart", faction: "Northern Realms", strength: 10, hero: true, row: "Ranged", location: "Win from Zoltan at tavern in Novigrad" },
  // Unit Cards
  { id: "nr-siegfried", name: "Siegfried of Denesle", faction: "Northern Realms", strength: 5, hero: false, row: "Close", location: "Random merchant in Novigrad" },
  { id: "nr-ves", name: "Ves", faction: "Northern Realms", strength: 5, hero: false, row: "Close", location: "Win from Stjepan, The Alchemy innkeep" },
  { id: "nr-yarpen", name: "Yarpen Zigrin", faction: "Northern Realms", strength: 2, hero: false, row: "Close", location: "Innkeeper in Oxenfurt" },
  { id: "nr-sigismund", name: "Sigismund Dijkstra", faction: "Northern Realms", strength: 4, hero: false, row: "Close", location: "Random merchant in Novigrad" },
  { id: "nr-prince-stennis", name: "Prince Stennis", faction: "Northern Realms", strength: 5, hero: false, row: "Close", location: "Claywich merchant in Velen" },
  { id: "nr-trebuchet1", name: "Trebuchet (1)", faction: "Northern Realms", strength: 6, hero: false, row: "Siege", location: "White Orchard innkeeper" },
  { id: "nr-trebuchet2", name: "Trebuchet (2)", faction: "Northern Realms", strength: 6, hero: false, row: "Siege", location: "Merchant at Midcopse" },
  { id: "nr-ballista1", name: "Ballista (1)", faction: "Northern Realms", strength: 6, hero: false, row: "Siege", location: "Bought from innkeeper at Inn at the Crossroads" },
  { id: "nr-ballista2", name: "Ballista (2)", faction: "Northern Realms", strength: 6, hero: false, row: "Siege", location: "Won from blacksmith in Oxenfurt" },
  { id: "nr-catapult1", name: "Catapult (1)", faction: "Northern Realms", strength: 8, hero: false, row: "Siege", ability: "Tight Bond", location: "Bought from trader at Crow's Perch" },
  { id: "nr-catapult2", name: "Catapult (2)", faction: "Northern Realms", strength: 8, hero: false, row: "Siege", ability: "Tight Bond", location: "Won from blacksmith at Kaer Trolde" },
  { id: "nr-siege-tower", name: "Siege Tower", faction: "Northern Realms", strength: 6, hero: false, row: "Siege", location: "Win from armorsmith at Hierarch Square" },
  { id: "nr-kaedweni1", name: "Kaedweni Siege Expert (1)", faction: "Northern Realms", strength: 1, hero: false, row: "Siege", ability: "Morale Boost", location: "White Orchard merchant" },
  { id: "nr-kaedweni2", name: "Kaedweni Siege Expert (2)", faction: "Northern Realms", strength: 1, hero: false, row: "Siege", ability: "Morale Boost", location: "Merchant at Midcopse" },
  { id: "nr-sheldon", name: "Sheldon Skaggs", faction: "Northern Realms", strength: 4, hero: false, row: "Ranged", location: "Win from blacksmith at Oxenfurt" },
  { id: "nr-dethmold", name: "Dethmold", faction: "Northern Realms", strength: 6, hero: false, row: "Ranged", location: "Won from trader at Crow's Perch" },
  { id: "nr-keira-metz", name: "Keira Metz", faction: "Northern Realms", strength: 5, hero: false, row: "Ranged", location: "Won from blacksmith in Midcopse" },
  { id: "nr-sile", name: "Síle de Tansarville", faction: "Northern Realms", strength: 5, hero: false, row: "Ranged", location: "Won from merchant in Novigrad market" },
  { id: "nr-sabrina", name: "Sabrina Glevissig", faction: "Northern Realms", strength: 4, hero: false, row: "Ranged", location: "Won from innkeeper at Cunny of the Goose" },
  { id: "nr-blue-stripes1", name: "Blue Stripes Commando (1)", faction: "Northern Realms", strength: 4, hero: false, row: "Close", ability: "Tight Bond", location: "Merchant at Claywich" },
  { id: "nr-blue-stripes2", name: "Blue Stripes Commando (2)", faction: "Northern Realms", strength: 4, hero: false, row: "Close", ability: "Tight Bond", location: "Innkeeper at Inn at the Crossroads" },
  { id: "nr-blue-stripes3", name: "Blue Stripes Commando (3)", faction: "Northern Realms", strength: 4, hero: false, row: "Close", ability: "Tight Bond", location: "Blacksmith at Oxenfurt" },
  { id: "nr-poor-infantry1", name: "Poor F***ing Infantry (1)", faction: "Northern Realms", strength: 1, hero: false, row: "Close", ability: "Tight Bond", location: "White Orchard innkeeper" },
  { id: "nr-poor-infantry2", name: "Poor F***ing Infantry (2)", faction: "Northern Realms", strength: 1, hero: false, row: "Close", ability: "Tight Bond", location: "Merchant at Midcopse" },
  { id: "nr-dun-banner", name: "Dun Banner Medic", faction: "Northern Realms", strength: 5, hero: false, row: "Siege", ability: "Medic", location: "Won from innkeeper at Seven Cats Inn" },
  { id: "nr-redanian-foot1", name: "Redanian Foot Soldier (1)", faction: "Northern Realms", strength: 1, hero: false, row: "Close", location: "White Orchard merchant" },
  { id: "nr-redanian-foot2", name: "Redanian Foot Soldier (2)", faction: "Northern Realms", strength: 1, hero: false, row: "Close", location: "Innkeeper at Cunny of the Goose" },

  // === NILFGAARD ===
  // Leaders
  { id: "ng-emhyr-imperial", name: "Emhyr var Emreis – His Imperial Majesty", faction: "Nilfgaard", strength: 0, hero: false, row: "Leader", ability: "Draw a card from opponent's discard", location: "Default leader" },
  { id: "ng-emhyr-emperor", name: "Emhyr var Emreis – Emperor of Nilfgaard", faction: "Nilfgaard", strength: 0, hero: false, row: "Leader", ability: "Cancel leader ability", location: "Beat innkeeper at Inn at the Crossroads" },
  { id: "ng-emhyr-white", name: "Emhyr var Emreis – The White Flame", faction: "Nilfgaard", strength: 0, hero: false, row: "Leader", ability: "Play a card from your discard pile", location: "Beat the Bloody Baron" },
  { id: "ng-emhyr-relentless", name: "Emhyr var Emreis – The Relentless", faction: "Nilfgaard", strength: 0, hero: false, row: "Leader", ability: "Draw opponent's random card", location: "Beat Mousesack at Kaer Trolde" },
  // Hero Cards
  { id: "ng-letho", name: "Letho of Gulet", faction: "Nilfgaard", strength: 10, hero: true, row: "Close", location: "Win from innkeeper at Inn at the Crossroads" },
  { id: "ng-menno", name: "Menno Coehoorn", faction: "Nilfgaard", strength: 10, hero: true, row: "Close", ability: "Medic", location: "Beat Vimme Vivaldi in Novigrad" },
  { id: "ng-morvran", name: "Morvran Voorhis", faction: "Nilfgaard", strength: 10, hero: true, row: "Siege", location: "Beat a merchant near Oxenfurt Gate" },
  { id: "ng-tibor", name: "Tibor Eggebracht", faction: "Nilfgaard", strength: 10, hero: true, row: "Ranged", location: "Win from Marquise Serenity at Passiflora" },
  // Unit Cards
  { id: "ng-stefan-skellen", name: "Stefan Skellen", faction: "Nilfgaard", strength: 9, hero: false, row: "Close", ability: "Spy", location: "Bookkeeper in Oxenfurt" },
  { id: "ng-vattier", name: "Vattier de Rideaux", faction: "Nilfgaard", strength: 4, hero: false, row: "Close", ability: "Spy", location: "Trader near Oxenfurt Gate" },
  { id: "ng-shilard", name: "Shilard Fitz-Oesterlen", faction: "Nilfgaard", strength: 7, hero: false, row: "Close", ability: "Spy", location: "Won from innkeeper at Cunny of the Goose" },
  { id: "ng-cynthia", name: "Cynthia", faction: "Nilfgaard", strength: 4, hero: false, row: "Ranged", ability: "Spy", location: "Won from trader at Crow's Perch" },
  { id: "ng-assire", name: "Assire var Anahid", faction: "Nilfgaard", strength: 6, hero: false, row: "Ranged", location: "Won from trader at Crow's Perch" },
  { id: "ng-fringilla", name: "Fringilla Vigo", faction: "Nilfgaard", strength: 6, hero: false, row: "Ranged", location: "Won from trader at Midcopse" },
  { id: "ng-vanhemar", name: "Vanhemar", faction: "Nilfgaard", strength: 4, hero: false, row: "Ranged", location: "Won from blacksmith at Crow's Perch" },
  { id: "ng-morteisen", name: "Morteisen", faction: "Nilfgaard", strength: 3, hero: false, row: "Close", location: "White Orchard innkeeper" },
  { id: "ng-vreemde", name: "Vreemde", faction: "Nilfgaard", strength: 2, hero: false, row: "Close", location: "Won from innkeeper at Cunny of the Goose" },
  { id: "ng-rotten", name: "Rotten Mangonel", faction: "Nilfgaard", strength: 3, hero: false, row: "Siege", location: "Trader at Midcopse" },
  { id: "ng-zerri-battalion", name: "Zerrikanian Fire Scorpion", faction: "Nilfgaard", strength: 5, hero: false, row: "Siege", location: "Won from merchant at Novigrad market" },
  { id: "ng-siege-engineer", name: "Siege Engineer", faction: "Nilfgaard", strength: 6, hero: false, row: "Siege", location: "Won from blacksmith in Oxenfurt" },
  { id: "ng-heavy-zerri", name: "Heavy Zerrikanian Fire Scorpion", faction: "Nilfgaard", strength: 10, hero: false, row: "Siege", location: "Won from armorer at Kaer Trolde" },
  { id: "ng-nausicaa1", name: "Nausicaa Cavalry Rider (1)", faction: "Nilfgaard", strength: 2, hero: false, row: "Close", ability: "Tight Bond", location: "Merchant at Midcopse" },
  { id: "ng-nausicaa2", name: "Nausicaa Cavalry Rider (2)", faction: "Nilfgaard", strength: 2, hero: false, row: "Close", ability: "Tight Bond", location: "Innkeeper at Inn at the Crossroads" },
  { id: "ng-nausicaa3", name: "Nausicaa Cavalry Rider (3)", faction: "Nilfgaard", strength: 2, hero: false, row: "Close", ability: "Tight Bond", location: "Won from trader at Claywich" },
  { id: "ng-impera1", name: "Impera Brigade Guard (1)", faction: "Nilfgaard", strength: 3, hero: false, row: "Close", ability: "Tight Bond", location: "Won from innkeeper at Seven Cats Inn" },
  { id: "ng-impera2", name: "Impera Brigade Guard (2)", faction: "Nilfgaard", strength: 3, hero: false, row: "Close", ability: "Tight Bond", location: "Won from merchant at Novigrad market" },
  { id: "ng-impera3", name: "Impera Brigade Guard (3)", faction: "Nilfgaard", strength: 3, hero: false, row: "Close", ability: "Tight Bond", location: "Won from blacksmith at Hierarch Square" },
  { id: "ng-impera4", name: "Impera Brigade Guard (4)", faction: "Nilfgaard", strength: 3, hero: false, row: "Close", ability: "Tight Bond", location: "Won from armorer at Crow's Perch" },
  { id: "ng-albrich", name: "Albrich", faction: "Nilfgaard", strength: 2, hero: false, row: "Ranged", location: "Innkeeper at Oxenfurt" },
  { id: "ng-sweers", name: "Sweers", faction: "Nilfgaard", strength: 2, hero: false, row: "Ranged", location: "Blacksmith at Novigrad" },
  { id: "ng-puttkammer", name: "Puttkammer", faction: "Nilfgaard", strength: 3, hero: false, row: "Ranged", location: "Blacksmith at Midcopse" },
  { id: "ng-cahir", name: "Cahir Mawr Dyffryn aep Ceallach", faction: "Nilfgaard", strength: 6, hero: false, row: "Close", location: "Win during 'A Matter of Life and Death' quest" },
  { id: "ng-siege-technician", name: "Siege Technician", faction: "Nilfgaard", strength: 0, hero: false, row: "Siege", ability: "Medic", location: "Won from merchant in White Orchard" },
  { id: "ng-young-emissary1", name: "Young Emissary (1)", faction: "Nilfgaard", strength: 5, hero: false, row: "Close", ability: "Tight Bond", location: "Trader at Crow's Perch" },
  { id: "ng-young-emissary2", name: "Young Emissary (2)", faction: "Nilfgaard", strength: 5, hero: false, row: "Close", ability: "Tight Bond", location: "Merchant at Oxenfurt" },

  // === SCOIA'TAEL ===
  // Leaders
  { id: "st-francesca-beautiful", name: "Francesca Findabair – The Beautiful", faction: "Scoia'tael", strength: 0, hero: false, row: "Leader", ability: "Double ranged row", location: "Default leader" },
  { id: "st-francesca-daisy", name: "Francesca Findabair – Daisy of the Valley", faction: "Scoia'tael", strength: 0, hero: false, row: "Leader", ability: "Draw extra card", location: "Win from merchant at Midcopse" },
  { id: "st-francesca-queen", name: "Francesca Findabair – Queen of Dol Blathanna", faction: "Scoia'tael", strength: 0, hero: false, row: "Leader", ability: "Destroy enemy ranged", location: "Win from innkeeper at Inn at the Crossroads" },
  { id: "st-francesca-pureblood", name: "Francesca Findabair – Pureblood Elf", faction: "Scoia'tael", strength: 0, hero: false, row: "Leader", ability: "Pick a Biting Frost from discard", location: "Win from Eredin during Old Pals quest" },
  // Hero Cards
  { id: "st-isengrim", name: "Isengrim Faoiltiarna", faction: "Scoia'tael", strength: 10, hero: true, row: "Close", ability: "Morale Boost", location: "Win from merchant near Oxenfurt Gate" },
  { id: "st-eithne", name: "Eithné", faction: "Scoia'tael", strength: 10, hero: true, row: "Ranged", location: "Win from trader at Midcopse" },
  { id: "st-saesenthessis", name: "Saesenthessis", faction: "Scoia'tael", strength: 10, hero: true, row: "Ranged", location: "Win during 'Gwent: Big City Players' quest" },
  { id: "st-iorveth", name: "Iorveth", faction: "Scoia'tael", strength: 10, hero: true, row: "Ranged", location: "Win from innkeeper at Cunny of the Goose" },
  // Unit Cards
  { id: "st-toruviel", name: "Toruviel", faction: "Scoia'tael", strength: 2, hero: false, row: "Ranged", ability: "Spy", location: "Won from blacksmith at Crow's Perch" },
  { id: "st-ciaran", name: "Ciaran aep Easnillien", faction: "Scoia'tael", strength: 3, hero: false, row: "Close", ability: "Agile", location: "Won from merchant in Novigrad" },
  { id: "st-dennis-cranmer", name: "Dennis Cranmer", faction: "Scoia'tael", strength: 6, hero: false, row: "Close", location: "Won from innkeeper at Seven Cats Inn" },
  { id: "st-milva", name: "Milva", faction: "Scoia'tael", strength: 6, hero: false, row: "Ranged", ability: "Morale Boost", location: "Won from trader near Oxenfurt" },
  { id: "st-ida-emean", name: "Ida Emean aep Sivney", faction: "Scoia'tael", strength: 6, hero: false, row: "Ranged", location: "Won from Innkeeper at Cunny of the Goose" },
  { id: "st-filavandrel", name: "Filavandrel aén Fidháil", faction: "Scoia'tael", strength: 6, hero: false, row: "Close", ability: "Agile", location: "Won from merchant at Midcopse" },
  { id: "st-yaevinn", name: "Yaevinn", faction: "Scoia'tael", strength: 6, hero: false, row: "Close", ability: "Agile", location: "Won from trader at Claywich" },
  { id: "st-barclay", name: "Barclay Els", faction: "Scoia'tael", strength: 6, hero: false, row: "Close", ability: "Agile", location: "Won from blacksmith at Oxenfurt" },
  { id: "st-havekar-smuggler1", name: "Havekar Smuggler (1)", faction: "Scoia'tael", strength: 5, hero: false, row: "Close", ability: "Muster", location: "White Orchard innkeeper" },
  { id: "st-havekar-smuggler2", name: "Havekar Smuggler (2)", faction: "Scoia'tael", strength: 5, hero: false, row: "Close", ability: "Muster", location: "Merchant at Midcopse" },
  { id: "st-havekar-smuggler3", name: "Havekar Smuggler (3)", faction: "Scoia'tael", strength: 5, hero: false, row: "Close", ability: "Muster", location: "Innkeeper at Inn at the Crossroads" },
  { id: "st-vrihedd-brigade1", name: "Vrihedd Brigade Recruit (1)", faction: "Scoia'tael", strength: 4, hero: false, row: "Close", ability: "Agile", location: "Trader at Crow's Perch" },
  { id: "st-vrihedd-brigade2", name: "Vrihedd Brigade Recruit (2)", faction: "Scoia'tael", strength: 4, hero: false, row: "Close", ability: "Agile", location: "Merchant at Novigrad market" },
  { id: "st-mahakaman1", name: "Mahakaman Defender (1)", faction: "Scoia'tael", strength: 5, hero: false, row: "Close", ability: "Agile", location: "Won from blacksmith at Hierarch Square" },
  { id: "st-mahakaman2", name: "Mahakaman Defender (2)", faction: "Scoia'tael", strength: 5, hero: false, row: "Close", ability: "Agile", location: "Won from merchant at Claywich" },
  { id: "st-mahakaman3", name: "Mahakaman Defender (3)", faction: "Scoia'tael", strength: 5, hero: false, row: "Close", ability: "Agile", location: "Won from innkeeper at Oxenfurt" },
  { id: "st-mahakaman4", name: "Mahakaman Defender (4)", faction: "Scoia'tael", strength: 5, hero: false, row: "Close", ability: "Agile", location: "Won from armorer in Novigrad" },
  { id: "st-mahakaman5", name: "Mahakaman Defender (5)", faction: "Scoia'tael", strength: 5, hero: false, row: "Close", ability: "Agile", location: "Won from trader at Kaer Trolde" },
  { id: "st-elven-skirmisher1", name: "Elven Skirmisher (1)", faction: "Scoia'tael", strength: 2, hero: false, row: "Ranged", ability: "Muster", location: "White Orchard merchant" },
  { id: "st-elven-skirmisher2", name: "Elven Skirmisher (2)", faction: "Scoia'tael", strength: 2, hero: false, row: "Ranged", ability: "Muster", location: "Innkeeper at Cunny of the Goose" },
  { id: "st-elven-skirmisher3", name: "Elven Skirmisher (3)", faction: "Scoia'tael", strength: 2, hero: false, row: "Ranged", ability: "Muster", location: "Blacksmith at Midcopse" },
  { id: "st-dol-blathanna1", name: "Dol Blathanna Scout (1)", faction: "Scoia'tael", strength: 6, hero: false, row: "Close", ability: "Agile", location: "Trader at Midcopse" },
  { id: "st-dol-blathanna2", name: "Dol Blathanna Scout (2)", faction: "Scoia'tael", strength: 6, hero: false, row: "Close", ability: "Agile", location: "Innkeeper at Seven Cats Inn" },
  { id: "st-dol-blathanna3", name: "Dol Blathanna Scout (3)", faction: "Scoia'tael", strength: 6, hero: false, row: "Close", ability: "Agile", location: "Blacksmith at Crow's Perch" },

  // === MONSTERS ===
  // Leaders
  { id: "mo-eredin-bringer", name: "Eredin – Bringer of Death", faction: "Monsters", strength: 0, hero: false, row: "Leader", ability: "Double close row", location: "Default leader" },
  { id: "mo-eredin-destroyer", name: "Eredin – Destroyer of Worlds", faction: "Monsters", strength: 0, hero: false, row: "Leader", ability: "Restore card from graveyard", location: "Beat merchant at Midcopse" },
  { id: "mo-eredin-commander", name: "Eredin – Commander of the Red Riders", faction: "Monsters", strength: 0, hero: false, row: "Leader", ability: "Draw extra card", location: "Beat innkeeper at Cunny of the Goose" },
  { id: "mo-eredin-king", name: "Eredin – King of the Wild Hunt", faction: "Monsters", strength: 0, hero: false, row: "Leader", ability: "Pick any weather card", location: "Won during 'Gwent: Old Pals' quest" },
  // Hero Cards
  { id: "mo-kayran", name: "Kayran", faction: "Monsters", strength: 8, hero: true, row: "Close", ability: "Morale Boost", location: "Won from innkeeper at Inn at the Crossroads" },
  { id: "mo-leshen", name: "Leshen", faction: "Monsters", strength: 10, hero: true, row: "Ranged", location: "Won from merchant near Novigrad Gate" },
  { id: "mo-imlerith", name: "Imlerith", faction: "Monsters", strength: 10, hero: true, row: "Close", location: "Won during 'Gwent: Velen Players' quest" },
  { id: "mo-draug", name: "Draug", faction: "Monsters", strength: 10, hero: true, row: "Close", location: "Won from Madame de la Valette at Vizima" },
  // Unit Cards
  { id: "mo-earth-elemental", name: "Earth Elemental", faction: "Monsters", strength: 6, hero: false, row: "Siege", location: "Won from blacksmith at Oxenfurt" },
  { id: "mo-fire-elemental", name: "Fire Elemental", faction: "Monsters", strength: 6, hero: false, row: "Siege", location: "Won from trader at Crow's Perch" },
  { id: "mo-fiend", name: "Fiend", faction: "Monsters", strength: 6, hero: false, row: "Close", location: "Won from innkeeper at Cunny of the Goose" },
  { id: "mo-plague-maiden", name: "Plague Maiden", faction: "Monsters", strength: 5, hero: false, row: "Close", location: "Won from merchant at Midcopse" },
  { id: "mo-griffin", name: "Griffin", faction: "Monsters", strength: 5, hero: false, row: "Close", location: "White Orchard innkeeper" },
  { id: "mo-werewolf", name: "Werewolf", faction: "Monsters", strength: 5, hero: false, row: "Close", location: "Won from blacksmith at Midcopse" },
  { id: "mo-frightener", name: "Frightener", faction: "Monsters", strength: 5, hero: false, row: "Close", location: "Won from trader at Claywich" },
  { id: "mo-ice-giant", name: "Ice Giant", faction: "Monsters", strength: 5, hero: false, row: "Siege", location: "Won from armorer at Kaer Trolde" },
  { id: "mo-forktail", name: "Forktail", faction: "Monsters", strength: 5, hero: false, row: "Close", location: "Won from innkeeper at Seven Cats Inn" },
  { id: "mo-foglet", name: "Foglet", faction: "Monsters", strength: 2, hero: false, row: "Close", location: "Merchant at Midcopse" },
  { id: "mo-wyvern", name: "Wyvern", faction: "Monsters", strength: 2, hero: false, row: "Ranged", location: "White Orchard merchant" },
  { id: "mo-endrega", name: "Endrega", faction: "Monsters", strength: 2, hero: false, row: "Ranged", location: "Innkeeper at Inn at the Crossroads" },
  { id: "mo-harpy", name: "Harpy", faction: "Monsters", strength: 2, hero: false, row: "Close", ability: "Agile", location: "Trader at Crow's Perch" },
  { id: "mo-cockatrice", name: "Cockatrice", faction: "Monsters", strength: 2, hero: false, row: "Ranged", location: "Blacksmith at Crow's Perch" },
  { id: "mo-gargoyle", name: "Gargoyle", faction: "Monsters", strength: 2, hero: false, row: "Ranged", location: "Won from merchant in Novigrad" },
  { id: "mo-celaeno-harpy", name: "Celaeno Harpy", faction: "Monsters", strength: 2, hero: false, row: "Close", ability: "Agile", location: "Won from innkeeper at Oxenfurt" },
  { id: "mo-grave-hag", name: "Grave Hag", faction: "Monsters", strength: 5, hero: false, row: "Ranged", location: "Won from armorer at Hierarch Square" },
  { id: "mo-crone-whispess", name: "Crone: Whispess", faction: "Monsters", strength: 6, hero: false, row: "Close", ability: "Muster", location: "Won during 'Gwent: Velen Players' quest" },
  { id: "mo-crone-weavess", name: "Crone: Weavess", faction: "Monsters", strength: 6, hero: false, row: "Close", ability: "Muster", location: "Won during 'Gwent: Velen Players' quest" },
  { id: "mo-crone-brewess", name: "Crone: Brewess", faction: "Monsters", strength: 6, hero: false, row: "Close", ability: "Muster", location: "Won during 'Gwent: Velen Players' quest" },
  { id: "mo-arachas1", name: "Arachas (1)", faction: "Monsters", strength: 4, hero: false, row: "Close", ability: "Muster", location: "Won from White Orchard innkeeper" },
  { id: "mo-arachas2", name: "Arachas (2)", faction: "Monsters", strength: 4, hero: false, row: "Close", ability: "Muster", location: "Won from merchant at Midcopse" },
  { id: "mo-arachas3", name: "Arachas (3)", faction: "Monsters", strength: 4, hero: false, row: "Close", ability: "Muster", location: "Won from innkeeper at Inn at the Crossroads" },
  { id: "mo-arachas-behemoth", name: "Arachas Behemoth", faction: "Monsters", strength: 6, hero: false, row: "Siege", ability: "Muster", location: "Won from blacksmith at Novigrad" },
  { id: "mo-nekker1", name: "Nekker (1)", faction: "Monsters", strength: 2, hero: false, row: "Close", ability: "Muster", location: "White Orchard innkeeper" },
  { id: "mo-nekker2", name: "Nekker (2)", faction: "Monsters", strength: 2, hero: false, row: "Close", ability: "Muster", location: "Merchant at Midcopse" },
  { id: "mo-nekker3", name: "Nekker (3)", faction: "Monsters", strength: 2, hero: false, row: "Close", ability: "Muster", location: "Trader at Crow's Perch" },
  { id: "mo-ghoul1", name: "Ghoul (1)", faction: "Monsters", strength: 1, hero: false, row: "Close", ability: "Muster", location: "White Orchard merchant" },
  { id: "mo-ghoul2", name: "Ghoul (2)", faction: "Monsters", strength: 1, hero: false, row: "Close", ability: "Muster", location: "Innkeeper at Cunny of the Goose" },
  { id: "mo-ghoul3", name: "Ghoul (3)", faction: "Monsters", strength: 1, hero: false, row: "Close", ability: "Muster", location: "Blacksmith at Midcopse" },

  // === NEUTRAL ===
  // Hero Cards
  { id: "ne-geralt", name: "Geralt of Rivia", faction: "Neutral", strength: 15, hero: true, row: "Close", location: "Starting card / Won during 'Collect 'Em All' quest" },
  { id: "ne-ciri", name: "Cirilla Fiona Elen Riannon", faction: "Neutral", strength: 15, hero: true, row: "Close", location: "Starting card / Won during 'Collect 'Em All' quest" },
  { id: "ne-yennefer", name: "Yennefer of Vengerberg", faction: "Neutral", strength: 7, hero: true, row: "Ranged", ability: "Medic", location: "Starting card / Won during 'Collect 'Em All' quest" },
  { id: "ne-triss", name: "Triss Merigold", faction: "Neutral", strength: 7, hero: true, row: "Close", location: "Starting card / Won during 'Collect 'Em All' quest" },
  { id: "ne-dandelion", name: "Dandelion", faction: "Neutral", strength: 2, hero: false, row: "Close", ability: "Commander's Horn", location: "Won from Zoltan at tavern" },
  { id: "ne-zoltan", name: "Zoltan Chivay", faction: "Neutral", strength: 5, hero: false, row: "Close", location: "Won from Hanmarvyn's Blue Dream" },
  { id: "ne-emiel", name: "Emiel Regis Rohellec Terzieff", faction: "Neutral", strength: 5, hero: false, row: "Close", location: "Won from merchant in Novigrad" },
  { id: "ne-vesemir", name: "Vesemir", faction: "Neutral", strength: 6, hero: false, row: "Close", location: "Won from innkeeper at Old Vizima" },
  { id: "ne-villentretenmerth", name: "Villentretenmerth", faction: "Neutral", strength: 7, hero: false, row: "Close", ability: "Scorch - Close", location: "Won during 'Gwent: Big City Players' quest" },
  { id: "ne-avallach", name: "Avallac'h", faction: "Neutral", strength: 0, hero: true, row: "Close", ability: "Spy", location: "Won during Passiflora tournament" },
  // Special Cards
  { id: "sp-decoy1", name: "Decoy (1)", faction: "Neutral", strength: 0, hero: false, row: "Special", ability: "Decoy", location: "White Orchard innkeeper" },
  { id: "sp-decoy2", name: "Decoy (2)", faction: "Neutral", strength: 0, hero: false, row: "Special", ability: "Decoy", location: "Merchant at Midcopse" },
  { id: "sp-decoy3", name: "Decoy (3)", faction: "Neutral", strength: 0, hero: false, row: "Special", ability: "Decoy", location: "Innkeeper at Inn at the Crossroads" },
  { id: "sp-horn1", name: "Commander's Horn (1)", faction: "Neutral", strength: 0, hero: false, row: "Special", ability: "Commander's Horn", location: "White Orchard merchant" },
  { id: "sp-horn2", name: "Commander's Horn (2)", faction: "Neutral", strength: 0, hero: false, row: "Special", ability: "Commander's Horn", location: "Trader at Crow's Perch" },
  { id: "sp-horn3", name: "Commander's Horn (3)", faction: "Neutral", strength: 0, hero: false, row: "Special", ability: "Commander's Horn", location: "Blacksmith at Oxenfurt" },
  { id: "sp-scorch1", name: "Scorch (1)", faction: "Neutral", strength: 0, hero: false, row: "Special", ability: "Scorch", location: "Merchant at Midcopse" },
  { id: "sp-scorch2", name: "Scorch (2)", faction: "Neutral", strength: 0, hero: false, row: "Special", ability: "Scorch", location: "Innkeeper at Cunny of the Goose" },
  { id: "sp-scorch3", name: "Scorch (3)", faction: "Neutral", strength: 0, hero: false, row: "Special", ability: "Scorch", location: "Blacksmith at Hierarch Square" },
];
