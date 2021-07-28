import { ActionConstants } from "./actionConstants";

interface resetBankroll {
  type: ActionConstants.RESET_BANKROLL;
}
// Modify bet actions
interface addToBet {
  type: ActionConstants.ADD_TO_BET;
  payload: number;
}

interface removeFromBet {
  type: ActionConstants.REMOVE_FROM_BET;
  payload: number;
}
// Game actions
interface hit {
  type: ActionConstants.HIT;
}

interface stay {
  type: ActionConstants.STAY;
}

interface doubleDown {
  type: ActionConstants.DOUBLE_DOWN;
}

interface split {
  type: ActionConstants.SPLIT;
}

interface splitHit {
  type: ActionConstants.SPLIT_HIT;
}

interface splitStay {
  type: ActionConstants.SPLIT_STAY;
}

interface deal {
  type: ActionConstants.DEAL;
}
// Update bankroll and proceed to next hand actions
interface increaseBankroll {
  type: ActionConstants.INCREASE_BANKROLL;
}

interface blackjackIncreaseBankroll {
  type: ActionConstants.BLACKJACK_INCREASE_BANKROLL;
}

interface decreaseBankroll {
  type: ActionConstants.DECREASE_BANKROLL;
}

interface noChangeBankroll {
  type: ActionConstants.NO_CHANGE_BANKROLL;
}

interface splitIncreaseBankroll {
  type: ActionConstants.SPLIT_INCREASE_BANKROLL;
}

interface splitDecreaseBankroll {
  type: ActionConstants.SPLIT_DECREASE_BANKROLL;
}

interface splitNoChangeBankroll {
  type: ActionConstants.SPLIT_NO_CHANGE_BANKROLL;
}

interface nextHand {
  type: ActionConstants.NEXT_HAND;
}

interface splitNextHand {
  type: ActionConstants.SPLIT_NEXT_HAND;
}

interface setUser {
  type: ActionConstants.SET_USER;
  payload: Object;
}

interface logOut {
  type: ActionConstants.LOG_OUT;
}

interface clearState {
  type: ActionConstants.CLEAR_STATE;
}

interface postMoveUpdate {
  type: ActionConstants.POST_MOVE_UPDATE;
  payload: boolean;
}

interface postDealUpdate {
  type: ActionConstants.POST_DEAL_UPDATE;
}

interface setBankroll {
  type: ActionConstants.SET_BANKROLL;
  payload: number;
}

interface updateUserBankroll {
  type: ActionConstants.UPDATE_USER_BANKROLL;
  payload: string;
}

export type Action =
  | resetBankroll
  // * * Modify bet actions
  | addToBet
  | removeFromBet
  // * * Game actions
  | hit
  | stay
  | doubleDown
  | split
  | splitHit
  | splitStay
  | deal
  // * * Update bankroll and proceed to next hand actions
  | increaseBankroll
  | blackjackIncreaseBankroll
  | decreaseBankroll
  | noChangeBankroll
  | splitIncreaseBankroll
  | splitDecreaseBankroll
  | splitNoChangeBankroll
  | nextHand
  | splitNextHand
  // * * User Reducer Actions
  | setUser
  | logOut
  | clearState
  | postMoveUpdate
  | postDealUpdate
  | setBankroll
  | updateUserBankroll;
