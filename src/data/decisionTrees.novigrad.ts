import type { DecisionTreeRecord } from "./decisionTrees.types";

export const novigradDecisionTrees: DecisionTreeRecord[] = [
  {
    quest_id: "NOV-MQ04",
    quest_name: "Get Junior",
    region: "Novigrad",
    type: "multi_path_dialogue",
    tree_id: "DT-NOV-MQ04",
    nodes: [
      { id: "start", label: "Investigate Whoreson Junior", type: "entry", leads_to: ["approach_choice"] },
      {
        id: "approach_choice",
        label: "Choose approach to interrogate Junior's associates",
        type: "decision",
        options: [
          { choice_id: "aggressive", label: "Use aggressive intimidation", leads_to: ["aggressive_outcome"], flags_set: ["JUNIOR_AGGRESSIVE"] },
          { choice_id: "deceptive", label: "Use deception or disguise", leads_to: ["deceptive_outcome"], flags_set: ["JUNIOR_DECEPTIVE"] },
          { choice_id: "cooperative", label: "Cooperate with Dijkstra/Radovid agents", leads_to: ["cooperative_outcome"], flags_set: ["JUNIOR_COOPERATIVE"] },
        ],
      },
      { id: "aggressive_outcome", label: "Junior's men become hostile", type: "outcome", effects: ["HOSTILITY_INCREASED"] },
      { id: "deceptive_outcome", label: "Gain access without direct conflict", type: "outcome", effects: ["STEALTH_ENTRY"] },
      { id: "cooperative_outcome", label: "Shared intel with political factions", type: "outcome", effects: ["FACTION_INVOLVEMENT"] },
    ],
  },
  {
    quest_id: "NOV-MQ05",
    quest_name: "Count Reuven's Treasure",
    region: "Novigrad",
    type: "interrogation_branch",
    tree_id: "DT-NOV-MQ05",
    nodes: [
      { id: "start", label: "Interrogate Menge", type: "entry", leads_to: ["interrogation_choice"] },
      {
        id: "interrogation_choice",
        label: "Choose interrogation strategy",
        type: "decision",
        options: [
          { choice_id: "ask_about_dandelion", label: "Ask about Dandelion", leads_to: ["dandelion_outcome"], flags_set: ["ASKED_DANDELION"] },
          { choice_id: "ask_about_treasure", label: "Ask about Reuven's treasure", leads_to: ["treasure_outcome"], flags_set: ["ASKED_TREASURE"] },
        ],
      },
      { id: "dandelion_outcome", label: "Learn Dandelion's location but blow cover", type: "outcome", effects: ["DANDELION_INFO", "COVER_BLOWN"] },
      { id: "treasure_outcome", label: "Learn treasure location but lose Dandelion lead", type: "outcome", effects: ["TREASURE_INFO", "NO_DANDELION_INFO"] },
    ],
  },
  {
    quest_id: "NOV-SQ01",
    quest_name: "A Matter of Life and Death",
    region: "Novigrad",
    type: "romance_softlock",
    tree_id: "DT-NOV-SQ01",
    nodes: [
      { id: "start", label: "Attend masquerade ball with Triss", type: "entry", leads_to: ["kiss_choice"] },
      {
        id: "kiss_choice",
        label: "Kiss Triss on the balcony?",
        type: "decision",
        options: [
          { choice_id: "kiss", label: "Kiss Triss", leads_to: ["kiss_outcome"], flags_set: ["TRISS_KISS"] },
          { choice_id: "decline", label: "Do not kiss", leads_to: ["no_kiss_outcome"], flags_set: ["TRISS_NO_KISS"] },
        ],
      },
      { id: "kiss_outcome", label: "Romance path begins", type: "outcome", effects: ["ROMANCE_FLAG_SET"] },
      { id: "no_kiss_outcome", label: "Romance path weakened", type: "outcome", effects: ["ROMANCE_FLAG_WEAK"] },
    ],
  },
  {
    quest_id: "NOV-SQ02",
    quest_name: "Now or Never",
    region: "Novigrad",
    type: "binary_romance",
    tree_id: "DT-NOV-SQ02",
    nodes: [
      { id: "start", label: "Escort mages to the ship", type: "entry", leads_to: ["dock_choice"] },
      {
        id: "dock_choice",
        label: "Confess feelings to Triss?",
        type: "decision",
        options: [
          { choice_id: "confess", label: "Tell Triss you love her", leads_to: ["romance"], flags_set: ["TRISS_ROMANCE"] },
          { choice_id: "silent", label: "Say nothing", leads_to: ["no_romance"], flags_set: ["TRISS_NO_ROMANCE"] },
        ],
      },
      { id: "romance", label: "Triss stays in Novigrad", type: "outcome", effects: ["ROMANCE_ACTIVE"] },
      { id: "no_romance", label: "Triss leaves on the ship", type: "outcome", effects: ["ROMANCE_LOCKED"] },
    ],
  },
  {
    quest_id: "NOV-SQ06",
    quest_name: "Reason of State",
    region: "Novigrad",
    type: "endgame_political",
    tree_id: "DT-NOV-SQ06",
    nodes: [
      { id: "start", label: "Meet with Roche, Dijkstra, and Thaler", type: "entry", leads_to: ["political_choice"] },
      {
        id: "political_choice",
        label: "Choose who to support",
        type: "decision",
        options: [
          { choice_id: "kill_radovid", label: "Support assassination of Radovid", leads_to: ["radovid_dead"], flags_set: ["RADOVID_KILLED"] },
          { choice_id: "refuse", label: "Refuse to participate", leads_to: ["radovid_lives"], flags_set: ["RADOVID_LIVES"] },
        ],
      },
      { id: "radovid_dead", label: "Radovid dies → Nilfgaard likely wins the war", type: "outcome", effects: ["NILFGAARD_VICTORY_PATH"] },
      { id: "radovid_lives", label: "Radovid survives → Redania dominates the North", type: "outcome", effects: ["REDANIA_VICTORY_PATH"] },
    ],
  },
  {
    quest_id: "NOV-SQ14",
    quest_name: "Carnal Sins",
    region: "Novigrad",
    type: "investigation",
    tree_id: "DT-NOV-SQ14",
    nodes: [
      { id: "start", label: "Investigate the murders", type: "entry", leads_to: ["suspect_choice"] },
      {
        id: "suspect_choice",
        label: "Choose who to accuse",
        type: "decision",
        options: [
          { choice_id: "priscilla_attacker", label: "Accuse the coroner", leads_to: ["wrong_outcome"], flags_set: ["WRONG_SUSPECT"] },
          { choice_id: "true_killer", label: "Accuse the real killer", leads_to: ["correct_outcome"], flags_set: ["TRUE_KILLER"] },
        ],
      },
      { id: "wrong_outcome", label: "Wrong suspect → killer escapes", type: "outcome", effects: ["KILLER_ESCAPES"] },
      { id: "correct_outcome", label: "Correct suspect → killer stopped", type: "outcome", effects: ["KILLER_STOPPED"] },
    ],
  },
  {
    quest_id: "NOV-CT01",
    quest_name: "The Doppler Effect",
    region: "Novigrad",
    type: "spare_or_kill",
    tree_id: "DT-NOV-CT01",
    nodes: [
      { id: "start", label: "Confront the doppler", type: "entry", leads_to: ["doppler_choice"] },
      {
        id: "doppler_choice",
        label: "Spare or kill the doppler",
        type: "decision",
        options: [
          { choice_id: "spare", label: "Spare the doppler", leads_to: ["spare_outcome"], flags_set: ["DOPPLER_SPARED"] },
          { choice_id: "kill", label: "Kill the doppler", leads_to: ["kill_outcome"], flags_set: ["DOPPLER_KILLED"] },
        ],
      },
      { id: "spare_outcome", label: "Doppler spared → peaceful resolution", type: "outcome", effects: ["PEACEFUL_ENDING"] },
      { id: "kill_outcome", label: "Doppler killed → contract fulfilled", type: "outcome", effects: ["CONTRACT_COMPLETE"] },
    ],
  },
];
