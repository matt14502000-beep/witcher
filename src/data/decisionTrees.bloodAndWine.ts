import type { DecisionTreeRecord } from "./decisionTrees.types";

export const bloodAndWineDecisionTrees: DecisionTreeRecord[] = [
  {
    quest_id: "BAW-MQ09",
    quest_name: "The Night of Long Fangs",
    region: "Blood and Wine",
    type: "branching_story_path",
    tree_id: "DT-BAW-MQ09",
    nodes: [
      { id: "start", label: "Toussaint under attack", type: "entry", leads_to: ["path_choice"] },
      {
        id: "path_choice",
        label: "Choose who to follow",
        type: "decision",
        options: [
          { choice_id: "regis", label: "Follow Regis", leads_to: ["regis_path"], flags_set: ["REGIS_PATH"] },
          { choice_id: "syanna", label: "Search for Syanna", leads_to: ["syanna_path"], flags_set: ["SYANNA_PATH"] },
        ],
      },
      { id: "regis_path", label: "Regis path → Tesham Mutna", type: "outcome", effects: ["TESHAM_MUTNA_ROUTE"] },
      { id: "syanna_path", label: "Syanna path → Fairy Tale world", type: "outcome", effects: ["FAIRYTALE_ROUTE"] },
    ],
  },
  {
    quest_id: "BAW-MQ12",
    quest_name: "Pomp and Strange Circumstance",
    region: "Blood and Wine",
    type: "ending_trial",
    tree_id: "DT-BAW-MQ12",
    nodes: [
      { id: "start", label: "Ducal court trial begins", type: "entry", leads_to: ["trial_flags"] },
      {
        id: "trial_flags",
        label: "Outcome depends on Syanna flags",
        type: "outcome",
        effects: [
          "IF SYANNA_FORGIVEN AND RIBBON_SAVED → GOOD_ENDING",
          "IF SYANNA_FORGIVEN AND RIBBON_LOST → BITTERSWEET_ENDING",
          "IF SYANNA_NOT_FORGIVEN → TRAGIC_ENDING",
        ],
      },
    ],
  },
  {
    quest_id: "BAW-SQ05",
    quest_name: "The Warble of a Smitten Knight",
    region: "Blood and Wine",
    type: "tournament_branch",
    tree_id: "DT-BAW-SQ05",
    nodes: [
      { id: "start", label: "Enter the tournament", type: "entry", leads_to: ["tournament_choice"] },
      {
        id: "tournament_choice",
        label: "Choose how to compete",
        type: "decision",
        options: [
          { choice_id: "fair", label: "Compete fairly", leads_to: ["fair_outcome"], flags_set: ["TOURNAMENT_FAIR"] },
          { choice_id: "cheat", label: "Use tricks or advantages", leads_to: ["cheat_outcome"], flags_set: ["TOURNAMENT_CHEAT"] },
        ],
      },
      { id: "fair_outcome", label: "Fair competition outcome", type: "outcome", effects: ["HONOR_RECOGNIZED"] },
      { id: "cheat_outcome", label: "Cheating outcome", type: "outcome", effects: ["HONOR_LOST"] },
    ],
  },
  {
    quest_id: "BAW-SQ10",
    quest_name: "There Can Be Only One",
    region: "Blood and Wine",
    tree_id: "DT-BAW-SQ10",
    type: "virtue_check",
    nodes: [
      { id: "start", label: "Hermit tests Geralt", type: "entry", leads_to: ["virtue_check"] },
      {
        id: "virtue_check",
        label: "Check if all five virtues are met",
        type: "outcome",
        effects: [
          "IF COMPASSION AND HONOR AND GENEROSITY AND WISDOM AND VALOR → GRANDMASTER_TRIAL_SUCCESS",
          "IF FOUR_VIRTUES_MET → PARTIAL_SUCCESS",
          "IF THREE_OR_LESS_VIRTUES_MET → TRIAL_FAIL",
        ],
      },
      {
        id: "grandmaster_trial_success",
        label: "Geralt proves worthy of the Lady of the Lake’s blessing",
        type: "outcome",
        effects: ["RECEIVE_AERONDIGHT", "ACHIEVEMENT_GRANDMASTER"],
      },
      {
        id: "partial_success",
        label: "Geralt passes but without full recognition",
        type: "outcome",
        effects: ["RECEIVE_STANDARD_REWARD"],
      },
      {
        id: "trial_fail",
        label: "Geralt fails the trial and is denied the blessing",
        type: "outcome",
        effects: ["NO_REWARD", "TRIAL_FAILED"],
      },
    ],
  },
  {
    quest_id: "BAW-SQ14",
    quest_name: "Knight for Hire",
    region: "Blood and Wine",
    type: "board_completion_state",
    tree_id: "DT-BAW-SQ14",
    nodes: [
      {
        id: "start",
        label: "Geralt accepts knight-errant contracts across Toussaint",
        type: "entry",
        leads_to: ["contract_progress"],
      },
      {
        id: "contract_progress",
        label: "Track completion of all knight-errant tasks",
        type: "decision",
        options: [
          {
            choice_id: "all_complete",
            label: "All knight-errant contracts completed",
            leads_to: ["all_complete_outcome"],
            flags_set: ["ALL_KNIGHT_ERRANT_TASKS_COMPLETE"],
          },
          {
            choice_id: "partial",
            label: "Some tasks completed, others missed",
            leads_to: ["partial_outcome"],
            flags_set: ["PARTIAL_KNIGHT_ERRANT_COMPLETION"],
          },
        ],
      },
      {
        id: "all_complete_outcome",
        label: "Geralt is awarded the title of Honorary Knight",
        type: "outcome",
        effects: ["KNIGHT_TITLE_GRANTED", "FULL_REWARD"],
      },
      {
        id: "partial_outcome",
        label: "Geralt receives a standard reward for his service",
        type: "outcome",
        effects: ["STANDARD_REWARD"],
      },
    ],
  },
];
