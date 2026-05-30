export interface DecisionTreeUiMetadata {
  entry_color: string;
  decision_color: string;
  outcome_color: string;
  node_spacing: number;
  branch_spacing: number;
  font: string;
  icons: {
    entry: string;
    decision: string;
    outcome: string;
  };
}

export const decisionTreeUiMetadata: DecisionTreeUiMetadata = {
  entry_color: "#4FC3F7",
  decision_color: "#FFCA28",
  outcome_color: "#66BB6A",
  node_spacing: 32,
  branch_spacing: 48,
  font: "WitcherCodexUI",
  icons: {
    entry: "icon_entry.png",
    decision: "icon_decision.png",
    outcome: "icon_outcome.png",
  },
};
