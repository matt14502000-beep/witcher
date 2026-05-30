export interface TimelineAct {
  id: string;
  act: string;
  events: string[];
}

export const timelineActs: TimelineAct[] = [
  {
    id: "act-0",
    act: "ACT 0 — Prelude",
    events: [
      "Ciri trains at Kaer Morhen",
      "Yennefer disappears after Sodden",
      "Nilfgaard invades the North",
      "Wild Hunt begins pursuit of Ciri",
    ],
  },
  {
    id: "act-1",
    act: "ACT 1 — White Orchard",
    events: [
      "Geralt and Vesemir search for Yennefer",
      "Griffin contract resolved",
      "Yennefer reunites with Geralt",
      "Geralt summoned to Vizima",
    ],
  },
  {
    id: "act-2",
    act: "ACT 2 — Vizima",
    events: [
      "Emhyr orders Geralt to find Ciri",
      "Yennefer briefs Geralt on Ciri's trail",
      "Geralt departs for Velen",
    ],
  },
  {
    id: "act-3",
    act: "ACT 3 — Velen",
    events: [
      "Geralt meets the Bloody Baron",
      "Family Matters investigation",
      "Crones of Crookback Bog revealed",
      "Whispering Hillock choice",
      "Ciri's escape from the Bog",
      "Baron storyline concludes",
    ],
  },
  {
    id: "act-4",
    act: "ACT 4 — Novigrad",
    events: [
      "Geralt searches for Dandelion",
      "Triss and the mage escape network",
      "Whoreson Junior investigation",
      "Dijkstra's spy network revealed",
      "Ciri's Breakneck Speed escape",
      "Lead discovered: Ciri fled to Skellige",
    ],
  },
  {
    id: "act-5",
    act: "ACT 5 — Skellige",
    events: [
      "Kingsmoot and clan politics",
      "Crach's children: Hjalmar and Cerys",
      "Missing Persons → Ciri's trail",
      "Nameless (Ciri's memory)",
      "The Calm Before the Storm",
      "King's Gambit → Coronation",
    ],
  },
  {
    id: "act-6",
    act: "ACT 6 — Isle of Mists",
    events: [
      "Geralt finds Ciri",
      "Ciri's fate flags begin",
      "Wild Hunt attacks Kaer Morhen",
    ],
  },
  {
    id: "act-7",
    act: "ACT 7 — Kaer Morhen Defense",
    events: [
      "Wild Hunt siege",
      "Vesemir dies",
      "Ciri's powers explode",
      "Geralt vows vengeance",
    ],
  },
  {
    id: "act-8",
    act: "ACT 8 — Sunstone",
    events: [
      "Search for the Sunstone",
      "Lodge of Sorceresses returns",
      "Preparations to trap Eredin",
    ],
  },
  {
    id: "act-9",
    act: "ACT 9 — Final Battle",
    events: [
      "Battle on Undvik",
      "Geralt defeats Caranthir",
      "Geralt defeats Eredin",
      "Aen Elle plot revealed",
      "Ciri enters the White Frost",
    ],
  },
  {
    id: "act-10",
    act: "ACT 10 — Hearts of Stone",
    events: [
      "Olgierd's pact with O'Dimm",
      "Dead Man's Party",
      "Open Sesame! heist",
      "Scenes From a Marriage",
      "Final choice: Save Olgierd or let O'Dimm win",
    ],
  },
  {
    id: "act-11",
    act: "ACT 11 — Blood and Wine",
    events: [
      "Beast of Toussaint murders",
      "Regis returns",
      "Dettlaff revealed",
      "Syanna's betrayal",
      "Fairy-tale world",
      "Tesham Mutna confrontation",
      "Final trial and ending",
    ],
  },
  {
    id: "act-12",
    act: "ACT 12 — Epilogue",
    events: [
      "Ciri ending (Witcher / Empress / Death)",
      "Political ending (Nilfgaard / Redania / Collapse)",
      "Romance ending (Yen / Triss / Alone)",
      "Toussaint epilogue at Corvo Bianco",
    ],
  },
];
