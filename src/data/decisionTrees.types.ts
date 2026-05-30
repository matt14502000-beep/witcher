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

export interface DecisionTreeRecord {
  quest_id: string;
  quest_name: string;
  region: string;
  tree_id: string;
  type: string;
  nodes: DecisionTreeNode[];
}

export interface LiteDecisionTreeNode {
  id: string;
  t: DecisionNodeType;
  to?: string[];
  o?: Array<{ id: string; to: string[]; f?: string[] }>;
  e?: string[];
}

export interface LiteDecisionTreeRecord {
  q: string;
  tid: string;
  r: string;
  t: string;
  n: LiteDecisionTreeNode[];
}
