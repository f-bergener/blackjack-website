export enum ActionConstants {
  // * * Game Reducer Actions
  RESET_BANKROLL = "RESET_BANKROLL",
  // * * Modify bet actions
  ADD_TO_BET = "ADD_TO_BET",
  REMOVE_FROM_BET = "REMOVE_FROM_BET",
  // * * Game actions
  HIT = "HIT",
  STAY = "STAY",
  DOUBLE_DOWN = "DOUBLE_DOWN",
  SPLIT = "SPLIT",
  SPLIT_HIT = "SPLIT_HIT",
  SPLIT_STAY = "SPLIT_STAY",
  DEAL = "DEAL",
  // * * Update bankroll and proceed to next hand actions
  INCREASE_BANKROLL = "INCREASE_BANKROLL",
  BLACKJACK_INCREASE_BANKROLL = "BLACKJACK_INCREASE_BANKROLL",
  DECREASE_BANKROLL = "DECREASE_BANKROLL",
  NO_CHANGE_BANKROLL = "NO_CHANGE_BANKROLL",
  SPLIT_INCREASE_BANKROLL = "SPLIT_INCREASE_BANKROLL",
  SPLIT_DECREASE_BANKROLL = "SPLIT_DECREASE_BANKROLL",
  SPLIT_NO_CHANGE_BANKROLL = "SPLIT_NO_CHANGE_BANKROLL",
  NEXT_HAND = "NEXT_HAND",
  SPLIT_NEXT_HAND = "SPLIT_NEXT_HAND",
  // * * Clear game state
  CLEAR_GAME_STATE = "CLEAR_GAME_STATE",
  // * * User Reducer Actions
  SET_USER = "SET_USER",
  LOG_OUT = "LOG_OUT",
  POST_MOVE_UPDATE = "POST_MOVE_UPDATE",
  POST_DEAL_UPDATE = "POST_DEAL_UPDATE",
  SET_BANKROLL = "SET_BANKROLL",
  UPDATE_USER_BANKROLL = "UPDATE_USER_BANKROLL",
  CLEAR_USER_STATE = "CLEAR_USER_STATE",
}
