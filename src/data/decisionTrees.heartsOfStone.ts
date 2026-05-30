import type { DecisionTreeRecord } from "./decisionTrees.types";

export const heartsOfStoneDecisionTrees: DecisionTreeRecord[] = [
  {
    quest_id: "HOS-MQ02",
    quest_name: "Dead Man's Party",
    region: "Hearts of Stone",
    type: "dialogue_alignment",
    tree_id: "DT-HOS-MQ02",
    nodes: [
      { id: "start", label: "Attend wedding with Shani", type: "entry", leads_to: ["behavior_choice"] },
      {
        id: "behavior_choice",
        label: "Choose Geralt's behavior",
        type: "decision",
        options: [
          { choice_id: "polite", label: "Behave politely", leads_to: ["polite_outcome"], flags_set: ["WEDDING_POLITE"] },
          { choice_id: "rowdy", label: "Behave rowdily", leads_to: ["rowdy_outcome"], flags_set: ["WEDDING_ROWDY"] },
        ],
      },
      { id: "polite_outcome", label: "Shani appreciates Geralt's manners", type: "outcome", effects: ["SHANI_APPROVES"] },
      { id: "rowdy_outcome", label: "Shani is amused but embarrassed", type: "outcome", effects: ["SHANI_MIXED_FEELINGS"] },
    ],
  },
  {
    quest_id: "HOS-MQ03",
    quest_name: "Open Sesame!",
    region: "Hearts of Stone",
    type: "heist_planning",
    tree_id: "DT-HOS-MQ03",
    nodes: [
      { id: "start", label: "Plan the Borsodi auction house heist", type: "entry", leads_to: ["crew_choice"] },
      {
        id: "crew_choice",
        label: "Choose heist crew",
        type: "decision",
        options: [
          { choice_id: "ewa", label: "Hire Eveline", leads_to: ["ewa_outcome"], flags_set: ["CREW_EWA"] },
          { choice_id: "quinto", label: "Hire Quinto", leads_to: ["quinto_outcome"], flags_set: ["CREW_QUINTO"] },
        ],
      },
      { id: "ewa_outcome", label: "Eveline joins the heist", type: "outcome", effects: ["CREW_SELECTED"] },
      { id: "quinto_outcome", label: "Quinto joins the heist", type: "outcome", effects: ["CREW_SELECTED"] },
    ],
  },
  {
    quest_id: "HOS-MQ04",
    quest_name: "Scenes From a Marriage",
    region: "Hearts of Stone",
    type: "memory_path",
    tree_id: "DT-HOS-MQ04",
    nodes: [
      { id: "start", label: "Explore Iris' memories", type: "entry", leads_to: ["memory_choice"] },
      {
        id: "memory_choice",
        label: "Choose which memory to explore first",
        type: "decision",
        options: [
          { choice_id: "wedding", label: "Wedding memory", leads_to: ["wedding_outcome"], flags_set: ["MEMORY_WEDDING"] },
          { choice_id: "painting", label: "Painting memory", leads_to: ["painting_outcome"], flags_set: ["MEMORY_PAINTING"] },
        ],
      },
      { id: "wedding_outcome", label: "Witness happier times", type: "outcome", effects: ["WEDDING_MEMORY_VIEWED"] },
      { id: "painting_outcome", label: "Witness decline of marriage", type: "outcome", effects: ["PAINTING_MEMORY_VIEWED"] },
    ],
  },
  {
    quest_id: "HOS-MQ05",
    quest_name: "Whatsoever a Man Soweth...",
    region: "Hearts of Stone",
    type: "binary_moral_finale",
    tree_id: "DT-HOS-MQ05",
    nodes: [
      { id: "start", label: "O'Dimm's bargain", type: "entry", leads_to: ["final_choice"] },
      {
        id: "final_choice",
        label: "Side with O'Dimm or save Olgierd",
        type: "decision",
        options: [
          { choice_id: "odimm", label: "Let O'Dimm take Olgierd", leads_to: ["odimm_wins"], flags_set: ["ODIMM_VICTORY"] },
          { choice_id: "save", label: "Save Olgierd", leads_to: ["olgierd_saved"], flags_set: ["OLGIERD_SAVED"] },
        ],
      },
      { id: "odimm_wins", label: "O'Dimm wins", type: "outcome", effects: ["OLGIERD_DEAD"] },
      { id: "olgierd_saved", label: "Olgierd lives", type: "outcome", effects: ["ODIMM_DEFEATED"] },
    ],
  },
];
