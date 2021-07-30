import { ActionConstants } from "./actionConstants";

// * * Game Reducer Actions
// Modify bet actions
export const addToBet = (value: number) => {
  return {
    type: ActionConstants.ADD_TO_BET,
    payload: value,
  };
};

export const removeFromBet = (value: number) => {
  return {
    type: ActionConstants.REMOVE_FROM_BET,
    payload: value,
  };
};
// Game actions
export const hit = () => {
  return {
    type: ActionConstants.HIT,
  };
};

export const stay = () => {
  return {
    type: ActionConstants.STAY,
  };
};

export const doubleDown = () => {
  return {
    type: ActionConstants.DOUBLE_DOWN,
  };
};

export const split = () => {
  return {
    type: ActionConstants.SPLIT,
  };
};

export const splitHit = () => {
  return {
    type: ActionConstants.SPLIT_HIT,
  };
};

export const splitStay = () => {
  return {
    type: ActionConstants.SPLIT_STAY,
  };
};

export const deal = (bankroll: number) => {
  return {
    type: ActionConstants.DEAL,
    bankroll,
  };
};
// Update bankroll and proceed to next hand actions

export const nextHand = () => {
  return {
    type: ActionConstants.NEXT_HAND,
  };
};

export const splitNextHand = () => {
  return {
    type: ActionConstants.SPLIT_NEXT_HAND,
  };
};
// Clear game state action
export const clearGameState = () => {
  return { type: ActionConstants.CLEAR_GAME_STATE };
};

// * * User reducer actions
export const setUser = (auth: Object) => {
  return { type: ActionConstants.SET_USER, payload: auth };
};

export const logOut = () => {
  return { type: ActionConstants.LOG_OUT };
};

export const postMoveUpdate = (
  moveWasCorrect: boolean,
  lastMove: string,
  correctLastMove: string
) => {
  return {
    type: ActionConstants.POST_MOVE_UPDATE,
    moveWasCorrect,
    lastMove,
    correctLastMove,
  };
};

export const postDealUpdate = () => {
  return {
    type: ActionConstants.POST_DEAL_UPDATE,
  };
};

export const updateUserCorrectHands = (handOutcome: string) => {
  return {
    type: ActionConstants.UPDATE_USER_CORRECT_HANDS,
    handOutcome,
  };
};

export const updateUserBankroll = (amount: number) => {
  return {
    type: ActionConstants.UPDATE_USER_BANKROLL,
    amount,
  };
};

export const clearUserState = () => {
  return {
    type: ActionConstants.CLEAR_USER_STATE,
  };
};

export const bankrollUpdate = () => {
  return {
    type: ActionConstants.BANKROLL_UPDATE,
  };
};

export const splitBankrollUpdate = () => {
  return {
    type: ActionConstants.SPLIT_BANKROLL_UPDATE,
  };
};
