import type { DecisionTreeRecord } from "./decisionTrees.types";

export const skelligeDecisionTrees: DecisionTreeRecord[] = [
  {
    quest_id: "SK-MQ07",
    quest_name: "The Lord of Undvik",
    region: "Skellige",
    type: "branching_path",
    tree_id: "DT-SK-MQ07",
    nodes: [
      { id: "start", label: "Search Undvik for Hjalmar", type: "entry", leads_to: ["approach_choice"] },
      {
        id: "approach_choice",
        label: "Choose how to approach the giant's lair",
        type: "decision",
        options: [
          { choice_id: "stealth", label: "Approach stealthily", leads_to: ["stealth_outcome"], flags_set: ["UNDVIK_STEALTH"] },
          { choice_id: "direct", label: "Charge in directly", leads_to: ["direct_outcome"], flags_set: ["UNDVIK_DIRECT"] },
        ],
      },
      { id: "stealth_outcome", label: "Avoid unnecessary combat", type: "outcome", effects: ["LESS_COMBAT"] },
      { id: "direct_outcome", label: "Fight through the giant's minions", type: "outcome", effects: ["MORE_COMBAT"] },
    ],
  },
  {
    quest_id: "SK-MQ08",
    quest_name: "Possession",
    region: "Skellige",
    type: "binary_solution",
    tree_id: "DT-SK-MQ08",
    nodes: [
      { id: "start", label: "Investigate Udalryk's possession", type: "entry", leads_to: ["solution_choice"] },
      {
        id: "solution_choice",
        label: "Choose how to resolve the possession",
        type: "decision",
        options: [
          { choice_id: "ritual", label: "Perform the ritual", leads_to: ["ritual_outcome"], flags_set: ["POSSESSION_RITUAL"] },
          { choice_id: "confront", label: "Confront the Hym directly", leads_to: ["confront_outcome"], flags_set: ["POSSESSION_CONFRONT"] },
        ],
      },
      { id: "ritual_outcome", label: "Ritual succeeds if Udalryk faces guilt", type: "outcome", effects: ["RITUAL_SUCCESS"] },
      { id: "confront_outcome", label: "Hym defeated through confrontation", type: "outcome", effects: ["HYMN_DEFEATED"] },
    ],
  },
  {
    quest_id: "SK-MQ10",
    quest_name: "King's Gambit",
    region: "Skellige",
    type: "succession_choice",
    tree_id: "DT-SK-MQ10",
    nodes: [
      { id: "start", label: "Attend the feast at Kaer Trolde", type: "entry", leads_to: ["candidate_choice"] },
      {
        id: "candidate_choice",
        label: "Choose who to support for Skellige's throne",
        type: "decision",
        options: [
          { choice_id: "cerys", label: "Support Cerys", leads_to: ["cerys_outcome"], flags_set: ["CERYS_KING"] },
          { choice_id: "hjalmar", label: "Support Hjalmar", leads_to: ["hjalmar_outcome"], flags_set: ["HJALMAR_KING"] },
        ],
      },
      { id: "cerys_outcome", label: "Cerys becomes queen → peaceful Skellige", type: "outcome", effects: ["SKELLIGE_PEACE"] },
      { id: "hjalmar_outcome", label: "Hjalmar becomes king → warrior Skellige", type: "outcome", effects: ["SKELLIGE_WARLIKE"] },
    ],
  },
  {
    quest_id: "SK-SQ03",
    quest_name: "The Last Wish",
    region: "Skellige",
    type: "romance_binary",
    tree_id: "DT-SK-SQ03",
    nodes: [
      { id: "start", label: "Sail with Yennefer to the djinn's lair", type: "entry", leads_to: ["romance_choice"] },
      {
        id: "romance_choice",
        label: "Stay with Yennefer?",
        type: "decision",
        options: [
          { choice_id: "stay", label: "Tell Yennefer you still love her", leads_to: ["yen_romance"], flags_set: ["YEN_ROMANCE"] },
          { choice_id: "end", label: "End the relationship", leads_to: ["yen_break"], flags_set: ["YEN_BREAK"] },
        ],
      },
      { id: "yen_romance", label: "Romance with Yennefer continues", type: "outcome", effects: ["ROMANCE_YEN_ACTIVE"] },
      { id: "yen_break", label: "Relationship ends", type: "outcome", effects: ["ROMANCE_YEN_ENDED"] },
    ],
  },
  {
    quest_id: "SK-SQ11",
    quest_name: "In the Heart of the Woods",
    region: "Skellige",
    type: "faction_vs_monster",
    tree_id: "DT-SK-SQ11",
    nodes: [
      { id: "start", label: "Investigate the woodland spirit", type: "entry", leads_to: ["faction_choice"] },
      {
        id: "faction_choice",
        label: "Side with the elders or the young warriors",
        type: "decision",
        options: [
          { choice_id: "elders", label: "Side with the elders (protect the spirit)", leads_to: ["elders_outcome"], flags_set: ["ELDERS_SIDE"] },
          { choice_id: "warriors", label: "Side with the warriors (kill the spirit)", leads_to: ["warriors_outcome"], flags_set: ["WARRIORS_SIDE"] },
        ],
      },
      { id: "elders_outcome", label: "Spirit lives → elders gain influence", type: "outcome", effects: ["SPIRIT_LIVES"] },
      { id: "warriors_outcome", label: "Spirit dies → warriors gain influence", type: "outcome", effects: ["SPIRIT_DIES"] },
    ],
  },
];
