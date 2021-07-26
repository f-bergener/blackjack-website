import { ActionConstants } from "./actionConstants";

export const restartGame = () => {
  return {
    type: ActionConstants.RESTART_GAME,
  };
};
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

export const deal = () => {
  return {
    type: ActionConstants.DEAL,
  };
};
// Update bankroll and proceed to next hand actions
export const increaseBankroll = () => {
  return {
    type: ActionConstants.INCREASE_BANKROLL,
  };
};

export const blackjackIncreaseBankroll = () => {
  return {
    type: ActionConstants.BLACKJACK_INCREASE_BANKROLL,
  };
};

export const decreaseBankroll = () => {
  return {
    type: ActionConstants.DECREASE_BANKROLL,
  };
};

export const noChangeBankroll = () => {
  return {
    type: ActionConstants.NO_CHANGE_BANKROLL,
  };
};

export const splitIncreaseBankroll = () => {
  return {
    type: ActionConstants.SPLIT_INCREASE_BANKROLL,
  };
};

export const splitDecreaseBankroll = () => {
  return {
    type: ActionConstants.SPLIT_DECREASE_BANKROLL,
  };
};

export const splitNoChangeBankroll = () => {
  return {
    type: ActionConstants.SPLIT_NO_CHANGE_BANKROLL,
  };
};

export const nextHand = () => {
  return {
    type: ActionConstants.NEXT_HAND,
  };
};

// * * User reducer actions
export const setUser = (auth: Object) => {
  return { type: ActionConstants.SET_USER, payload: auth };
};

export const logOut = () => {
  return { type: ActionConstants.LOG_OUT };
};
