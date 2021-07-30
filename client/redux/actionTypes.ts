import { ActionConstants } from "./actionConstants";

// interface resetBankroll {
//   type: ActionConstants.RESET_BANKROLL;
// }
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
  bankroll: number;
}
// Update bankroll and proceed to next hand actions

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

interface clearGameState {
  type: ActionConstants.CLEAR_GAME_STATE;
}

interface postMoveUpdate {
  type: ActionConstants.POST_MOVE_UPDATE;
  payload: boolean;
}

interface postDealUpdate {
  type: ActionConstants.POST_DEAL_UPDATE;
}

interface updateUserCorrectHands {
  type: ActionConstants.UPDATE_USER_CORRECT_HANDS;
  handOutcome: string;
}

interface updateUserBankroll {
  type: ActionConstants.UPDATE_USER_BANKROLL;
  amount: string;
}

interface clearUserState {
  type: ActionConstants.CLEAR_USER_STATE;
}

interface bankrollUpdate {
  type: ActionConstants.BANKROLL_UPDATE;
}

interface splitBankrollUpdate {
  type: ActionConstants.SPLIT_BANKROLL_UPDATE;
}

export type Action =
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
  | nextHand
  | splitNextHand
  // * * User Reducer Actions
  | setUser
  | logOut
  | clearGameState
  | postMoveUpdate
  | postDealUpdate
  | updateUserCorrectHands
  | updateUserBankroll
  | clearUserState
  | bankrollUpdate
  | splitBankrollUpdate;
