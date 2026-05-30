import type { DecisionTreeRecord } from "./decisionTrees.types";

export const velenDecisionTrees: DecisionTreeRecord[] = [
  {
    quest_id: "VEL-MQ01",
    quest_name: "Bloody Baron",
    region: "Velen",
    tree_id: "DT-VEL-MQ01",
    type: "dialogue_alignment",
    nodes: [
      { id: "start", label: "Meet the Baron", type: "entry", leads_to: ["tone_choice"] },
      {
        id: "tone_choice",
        label: "Choose tone with the Baron",
        type: "decision",
        options: [
          { choice_id: "respectful", label: "Be respectful", leads_to: ["respect_outcome"], flags_set: ["BARON_FRIENDLY"] },
          { choice_id: "hostile", label: "Be hostile", leads_to: ["hostile_outcome"], flags_set: ["BARON_HOSTILE"] },
        ],
      },
      { id: "respect_outcome", label: "Baron becomes cooperative", type: "outcome", effects: ["BARON_HELP_EASIER"] },
      { id: "hostile_outcome", label: "Baron becomes defensive", type: "outcome", effects: ["BARON_HELP_HARDER"] },
    ],
  },
  {
    quest_id: "VEL-MQ04",
    quest_name: "Family Matters",
    region: "Velen",
    tree_id: "DT-VEL-MQ04",
    type: "binary_moral",
    nodes: [
      { id: "start", label: "Investigate the Baron's home", type: "entry", leads_to: ["botchling_choice"] },
      {
        id: "botchling_choice",
        label: "Deal with the Botchling",
        type: "decision",
        options: [
          { choice_id: "kill", label: "Kill the Botchling", leads_to: ["kill_outcome"], flags_set: ["BOTCHLING_KILLED"] },
          { choice_id: "save", label: "Lift the curse (Lubberkin)", leads_to: ["save_outcome"], flags_set: ["BOTCHLING_SAVED"] },
        ],
      },
      { id: "kill_outcome", label: "Harder ritual, fewer clues", type: "outcome", effects: ["PEL_RITUAL_HARD", "LESS_INFO"] },
      { id: "save_outcome", label: "Lubberkin reveals more clues", type: "outcome", effects: ["PEL_RITUAL_EASY", "MORE_INFO"] },
    ],
  },
  {
    quest_id: "VEL-MQ08",
    quest_name: "The Whispering Hillock",
    region: "Velen",
    tree_id: "DT-VEL-MQ08",
    type: "binary_moral",
    nodes: [
      { id: "start", label: "Meet the spirit", type: "entry", leads_to: ["spirit_choice"] },
      {
        id: "spirit_choice",
        label: "Kill or free the spirit",
        type: "decision",
        options: [
          { choice_id: "kill", label: "Kill the spirit", leads_to: ["kill_outcome"], flags_set: ["SPIRIT_KILLED"] },
          { choice_id: "free", label: "Free the spirit", leads_to: ["free_outcome"], flags_set: ["SPIRIT_FREED"] },
        ],
      },
      { id: "kill_outcome", label: "Children die, Downwarren survives", type: "outcome", effects: ["CHILDREN_DEAD", "DOWNWARREN_SAFE"] },
      { id: "free_outcome", label: "Children saved, Downwarren destroyed", type: "outcome", effects: ["CHILDREN_SAVED", "DOWNWARREN_DESTROYED"] },
    ],
  },
  {
    quest_id: "VEL-MQ10",
    quest_name: "Return to Crookback Bog",
    region: "Velen",
    tree_id: "DT-VEL-MQ10",
    type: "flag_locked_outcome",
    nodes: [
      { id: "start", label: "Return with the Baron", type: "entry", leads_to: ["ending"] },
      {
        id: "ending",
        label: "Outcome based on earlier flags",
        type: "outcome",
        effects: [
          "IF BOTCHLING_SAVED AND SPIRIT_KILLED → BARON_REDEEMS",
          "IF BOTCHLING_KILLED OR SPIRIT_FREED → BARON_TRAGEDY",
        ],
      },
    ],
  },
  {
    quest_id: "VEL-SQ11",
    quest_name: "Forefathers' Eve",
    region: "Velen",
    tree_id: "DT-VEL-SQ11",
    type: "binary_faction",
    nodes: [
      { id: "start", label: "Attend ritual", type: "entry", leads_to: ["ritual_choice"] },
      {
        id: "ritual_choice",
        label: "Side with Pellar or villagers",
        type: "decision",
        options: [
          { choice_id: "pellar", label: "Defend the Pellar", leads_to: ["pellar_outcome"], flags_set: ["PELLAR_SUPPORTED"] },
          { choice_id: "villagers", label: "Side with villagers", leads_to: ["villager_outcome"], flags_set: ["VILLAGERS_SUPPORTED"] },
        ],
      },
      { id: "pellar_outcome", label: "Pellar survives, ritual succeeds", type: "outcome", effects: ["PELLAR_LIVES"] },
      { id: "villager_outcome", label: "Pellar injured, ritual fails", type: "outcome", effects: ["PELLAR_HURT"] },
    ],
  },
  {
    quest_id: "VEL-SQ17",
    quest_name: "Wild at Heart",
    region: "Velen",
    tree_id: "DT-VEL-SQ17",
    type: "investigation",
    nodes: [
      { id: "start", label: "Investigate Margrit's disappearance", type: "entry", leads_to: ["accuse_choice"] },
      {
        id: "accuse_choice",
        label: "Choose who to accuse",
        type: "decision",
        options: [
          { choice_id: "margrit", label: "Accuse Margrit", leads_to: ["margrit_outcome"] },
          { choice_id: "niellen", label: "Accuse Niellen", leads_to: ["niellen_outcome"] },
        ],
      },
      { id: "margrit_outcome", label: "Wrong accusation → tragic ending", type: "outcome", effects: ["NIELLEN_DIES"] },
      { id: "niellen_outcome", label: "Correct accusation → Niellen killed as werewolf", type: "outcome", effects: ["NIELLEN_WEREWOLF_KILLED"] },
    ],
  },
  {
    quest_id: "VEL-CT02",
    quest_name: "Jenny o' the Woods",
    region: "Velen",
    tree_id: "DT-VEL-CT02",
    type: "contract_negotiation",
    nodes: [
      { id: "start", label: "Investigate the wraith", type: "entry", leads_to: ["contract_choice"] },
      {
        id: "contract_choice",
        label: "Negotiate or accept base reward",
        type: "decision",
        options: [
          { choice_id: "haggle", label: "Negotiate higher pay", leads_to: ["haggle_outcome"], flags_set: ["PAY_INCREASED"] },
          { choice_id: "accept", label: "Accept base pay", leads_to: ["accept_outcome"], flags_set: ["PAY_BASE"] },
        ],
      },
      { id: "haggle_outcome", label: "Higher reward", type: "outcome", effects: ["REWARD_HIGH"] },
      { id: "accept_outcome", label: "Standard reward", type: "outcome", effects: ["REWARD_STANDARD"] },
    ],
  },
];
