export type DecisionNodeType = "entry" | "decision" | "outcome";

export interface DecisionTreeOption {
  choice_id: string;
  label: string;
  leads_to: string[];
  flags_set?: string[];
}

export interface DecisionTreeNode {
  id: string;
  label: string;
  type: DecisionNodeType;
  leads_to?: string[];
  options?: DecisionTreeOption[];
  effects?: string[];
}

export interface DecisionTreeSchemaRecord {
  quest_id: string;
  quest_name: string;
  region: string;
  type: string;
  tree_id: string;
  nodes: DecisionTreeNode[];
}

export interface DecisionTreeIndexRecord {
  quest_id: string;
  region: string;
  tree_id: string;
  type: string;
}

export const decisionTreeSchema: DecisionTreeSchemaRecord = {
  quest_id: "STRING",
  quest_name: "STRING",
  region: "STRING",
  type: "STRING",
  tree_id: "STRING",
  nodes: [
    {
      id: "STRING",
      label: "STRING",
      type: "entry",
      leads_to: ["STRING"],
    },
    {
      id: "STRING",
      label: "STRING",
      type: "decision",
      options: [
        {
          choice_id: "STRING",
          label: "STRING",
          leads_to: ["STRING"],
          flags_set: ["STRING"],
        },
      ],
    },
    {
      id: "STRING",
      label: "STRING",
      type: "outcome",
      effects: ["STRING"],
    },
  ],
};

export const decisionTreeIndex: DecisionTreeIndexRecord[] = [
  { quest_id: "WO-CT01", tree_id: "DT-WO-CT01", region: "White Orchard", type: "contract_outcome" },
  { quest_id: "VEL-MQ01", tree_id: "DT-VEL-MQ01", region: "Velen", type: "dialogue_alignment" },
  { quest_id: "VEL-MQ04", tree_id: "DT-VEL-MQ04", region: "Velen", type: "binary_moral" },
  { quest_id: "VEL-MQ07", tree_id: "DT-VEL-MQ07", region: "Velen", type: "binary_moral" },
  { quest_id: "VEL-MQ08", tree_id: "DT-VEL-MQ08", region: "Velen", type: "binary_moral" },
  { quest_id: "VEL-MQ10", tree_id: "DT-VEL-MQ10", region: "Velen", type: "flag_locked_outcome" },
  { quest_id: "VEL-SQ11", tree_id: "DT-VEL-SQ11", region: "Velen", type: "binary_faction" },
  { quest_id: "VEL-SQ17", tree_id: "DT-VEL-SQ17", region: "Velen", type: "investigation" },
  { quest_id: "VEL-CT02", tree_id: "DT-VEL-CT02", region: "Velen", type: "contract_negotiation" },
  { quest_id: "NOV-MQ04", tree_id: "DT-NOV-MQ04", region: "Novigrad", type: "multi_path_dialogue" },
  { quest_id: "NOV-MQ05", tree_id: "DT-NOV-MQ05", region: "Novigrad", type: "interrogation_branch" },
  { quest_id: "NOV-SQ01", tree_id: "DT-NOV-SQ01", region: "Novigrad", type: "romance_softlock" },
  { quest_id: "NOV-SQ02", tree_id: "DT-NOV-SQ02", region: "Novigrad", type: "binary_romance" },
  { quest_id: "NOV-SQ06", tree_id: "DT-NOV-SQ06", region: "Novigrad", type: "endgame_political" },
  { quest_id: "NOV-SQ14", tree_id: "DT-NOV-SQ14", region: "Novigrad", type: "investigation" },
  { quest_id: "NOV-CT01", tree_id: "DT-NOV-CT01", region: "Novigrad", type: "spare_or_kill" },
  { quest_id: "SK-MQ07", tree_id: "DT-SK-MQ07", region: "Skellige", type: "branching_path" },
  { quest_id: "SK-MQ08", tree_id: "DT-SK-MQ08", region: "Skellige", type: "binary_solution" },
  { quest_id: "SK-MQ10", tree_id: "DT-SK-MQ10", region: "Skellige", type: "succession_choice" },
  { quest_id: "SK-SQ03", tree_id: "DT-SK-SQ03", region: "Skellige", type: "romance_binary" },
  { quest_id: "SK-SQ11", tree_id: "DT-SK-SQ11", region: "Skellige", type: "faction_vs_monster" },
  { quest_id: "HOS-MQ02", tree_id: "DT-HOS-MQ02", region: "Hearts of Stone", type: "dialogue_alignment" },
  { quest_id: "HOS-MQ03", tree_id: "DT-HOS-MQ03", region: "Hearts of Stone", type: "heist_planning" },
  { quest_id: "HOS-MQ04", tree_id: "DT-HOS-MQ04", region: "Hearts of Stone", type: "memory_path" },
  { quest_id: "HOS-MQ05", tree_id: "DT-HOS-MQ05", region: "Hearts of Stone", type: "binary_moral_finale" },
  { quest_id: "HOS-SQ01", tree_id: "DT-HOS-SQ01", region: "Hearts of Stone", type: "romance_softlock" },
  { quest_id: "BAW-MQ09", tree_id: "DT-BAW-MQ09", region: "Blood and Wine", type: "branching_story_path" },
  { quest_id: "BAW-MQ12", tree_id: "DT-BAW-MQ12", region: "Blood and Wine", type: "ending_trial" },
  { quest_id: "BAW-SQ05", tree_id: "DT-BAW-SQ05", region: "Blood and Wine", type: "tournament_branch" },
  { quest_id: "BAW-SQ10", tree_id: "DT-BAW-SQ10", region: "Blood and Wine", type: "virtue_check" },
  { quest_id: "BAW-SQ14", tree_id: "DT-BAW-SQ14", region: "Blood and Wine", type: "board_completion_state" },
];
