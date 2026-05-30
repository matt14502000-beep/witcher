import type { DecisionTreeRecord } from "./decisionTrees.types";

export const whiteOrchardDecisionTrees: DecisionTreeRecord[] = [
  {
    quest_id: "WO-CT01",
    quest_name: "Devil by the Well",
    region: "White Orchard",
    tree_id: "DT-WO-CT01",
    type: "contract_outcome",
    nodes: [
      { id: "start", label: "Investigate the Noonwraith", type: "entry", leads_to: ["reward_choice"] },
      {
        id: "reward_choice",
        label: "Negotiate reward",
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
