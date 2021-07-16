export enum ActionConstants {
  // * * Game Reducer Actions
  RESTART_GAME = "RESTART_GAME",
  // Modify bet actions
  ADD_TO_BET = "ADD_TO_BET",
  REMOVE_FROM_BET = "REMOVE_FROM_BET",
  // Game actions
  HIT = "HIT",
  STAY = "STAY",
  DOUBLE_DOWN = "DOUBLE_DOWN",
  SPLIT = "SPLIT",
  SPLIT_HIT = "SPLIT_HIT",
  SPLIT_STAY = "SPLIT_STAY",
  DEAL = "DEAL",
  // Update bankroll and proceed to next hand actions
  INCREASE_BANKROLL_RESET = "INCREASE_BANKROLL_RESET",
  BLACKJACK_INCREASE_BANKROLL_RESET = "BLACKJACK_INCREASE_BANKROLL_RESET",
  DECREASE_BANKROLL_RESET = "DECREASE_BANKROLL_RESET",
  NO_CHANGE_BANKROLL_RESET = "NO_CHANGE_BANKROLL_RESET",
  SPLIT_INCREASE_BANKROLL_RESET = "SPLIT_INCREASE_BANKROLL_RESET",
  SPLIT_DECREASE_BANKROLL_RESET = "SPLIT_DECREASE_BANKROLL_RESET",
  SPLIT_NO_CHANGE_BANKROLL_RESET = "SPLIT_NO_CHANGE_BANKROLL_RESET",
  // * * User Reducer Actions
  SET_AUTH = "SET_AUTH",
}
