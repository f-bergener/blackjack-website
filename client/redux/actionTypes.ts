import { ActionConstants } from "./actionConstants";

interface restartGame {
  type: ActionConstants.RESTART_GAME;
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
interface increaseBankrollReset {
  type: ActionConstants.INCREASE_BANKROLL_RESET;
}

interface blackjackIncreaseBankrollReset {
  type: ActionConstants.BLACKJACK_INCREASE_BANKROLL_RESET;
}

interface decreaseBankrollReset {
  type: ActionConstants.DECREASE_BANKROLL_RESET;
}

interface noChangeBankrollReset {
  type: ActionConstants.NO_CHANGE_BANKROLL_RESET;
}

interface splitIncreaseBankrollReset {
  type: ActionConstants.SPLIT_INCREASE_BANKROLL_RESET;
}

interface splitDecreaseBankrollReset {
  type: ActionConstants.SPLIT_DECREASE_BANKROLL_RESET;
}

interface splitNoChangeBankrollReset {
  type: ActionConstants.SPLIT_NO_CHANGE_BANKROLL_RESET;
}

export type Action =
  | restartGame
  // Modify bet actions
  | addToBet
  | removeFromBet
  // Game actions
  | hit
  | stay
  | doubleDown
  | split
  | splitHit
  | splitStay
  | deal
  // Update bankroll and proceed to next hand actions
  | increaseBankrollReset
  | blackjackIncreaseBankrollReset
  | decreaseBankrollReset
  | noChangeBankrollReset
  | splitIncreaseBankrollReset
  | splitDecreaseBankrollReset
  | splitNoChangeBankrollReset;
