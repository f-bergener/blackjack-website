import { ActionConstants } from "./actionConstants";

export const restartGame = () => {
  return {
    type: ActionConstants.RESTART_GAME,
  };
};
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

export const deal = () => {
  return {
    type: ActionConstants.DEAL,
  };
};
// Update bankroll and proceed to next hand actions
export const increaseBankrollReset = () => {
  return {
    type: ActionConstants.INCREASE_BANKROLL_RESET,
  };
};

export const blackjackIncreaseBankrollReset = () => {
  return {
    type: ActionConstants.BLACKJACK_INCREASE_BANKROLL_RESET,
  };
};

export const decreaseBankrollReset = () => {
  return {
    type: ActionConstants.DECREASE_BANKROLL_RESET,
  };
};

export const noChangeBankrollReset = () => {
  return {
    type: ActionConstants.NO_CHANGE_BANKROLL_RESET,
  };
};

export const splitIncreaseBankrollReset = () => {
  return {
    type: ActionConstants.SPLIT_INCREASE_BANKROLL_RESET,
  };
};

export const splitDecreaseBankrollReset = () => {
  return {
    type: ActionConstants.SPLIT_DECREASE_BANKROLL_RESET,
  };
};

export const splitNoChangeBankrollReset = () => {
  return {
    type: ActionConstants.SPLIT_NO_CHANGE_BANKROLL_RESET,
  };
};
