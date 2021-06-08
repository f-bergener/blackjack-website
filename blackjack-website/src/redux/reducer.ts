import { ActionConstants } from "./actionConstants";
import { Action } from "./actionTypes";
import { card, getDeck, calculateCount } from "../components/data/getDeck";

const hand: card[] = [];

export type State = {
  currentCardDeck: card[];
  bankroll: number;
  bet: number;
  pot: number;
  splitPot: number;
  playerHand: card[];
  dealerHand: card[];
  splitHand: card[];
  playerCount: number;
  dealerCount: number;
  splitCount: number;
  hitBoolean: boolean;
  stayBoolean: boolean;
  doubleDownBoolean: boolean;
  splitBoolean: boolean;
  splitHitBoolean: boolean;
  splitStayBoolean: boolean;
};

const initialState = {
  currentCardDeck: getDeck(),
  bankroll: 5000,
  bet: 0,
  pot: 0,
  splitPot: 0,
  playerHand: hand,
  dealerHand: hand,
  splitHand: hand,
  playerCount: 0,
  dealerCount: 0,
  splitCount: 0,
  hitBoolean: false,
  stayBoolean: false,
  doubleDownBoolean: false,
  splitBoolean: false,
  splitHitBoolean: false,
  splitStayBoolean: false,
};

const gameReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionConstants.RESTART_GAME: {
      return {
        ...state,
        currentCardDeck: getDeck(),
        bankroll: 5000,
        bet: 0,
        pot: 0,
        splitPot: 0,
        playerHand: hand,
        dealerHand: hand,
        splitHand: hand,
        playerCount: 0,
        dealerCount: 0,
        splitCount: 0,
        hitBoolean: false,
        stayBoolean: false,
        doubleDownBoolean: false,
        splitBoolean: false,
        splitHitBoolean: false,
        splitStayBoolean: false,
      };
    }
    case ActionConstants.ADD_TO_BET: {
      const newBet = state.bet + +action.payload;
      const newBankroll = state.bankroll - +action.payload;
      return {
        ...state,
        bet: newBet,
        bankroll: newBankroll,
      };
    }
    case ActionConstants.REMOVE_FROM_BET: {
      let newBet = state.bet - +action.payload;
      let newBankroll = state.bankroll + +action.payload;
      if (newBet < 0) {
        newBankroll = -newBet + newBankroll;
        newBet = 0;
      }
      return {
        ...state,
        bet: newBet,
        bankroll: newBankroll,
      };
    }
    case ActionConstants.DEAL: {
      // Start with empty hands for the player and the dealer
      const newPlayerHand = hand;
      const newDealerHand = hand;
      const newSplitHand = hand;
      const newCardDeck = [...state.currentCardDeck];
      // Deal cards to the player and dealer
      while (newPlayerHand.length < 2 && newDealerHand.length < 2) {
        if (newCardDeck[newCardDeck.length - 1])
          // Adding the ! after newCardDeck.pop() tells TypeScript that I know that this value will not be undefined
          // TypeScript generates an error as pop() returns with the type of T | undefined
          // https://github.com/microsoft/TypeScript/blob/ea93ee6db9441eb51a1d816e114b0468363dcd9c/lib/lib.es5.d.ts#L1236
          // This error is not a concern since a reshuffled deck of 52 cards is generated for each round of play
          newPlayerHand.push(newCardDeck.pop()!);
        if (newCardDeck[newCardDeck.length - 1])
          newDealerHand.push(newCardDeck.pop()!);
      }
      // Get the count for the player and the dealer
      let newPlayerCount = calculateCount(newPlayerHand);
      let newDealerCount = calculateCount(newDealerHand);
      const newBet = 0;
      const newPot = state.bet;
      // Add cards to the dealer's hand until the count is greater
      // than or equal to 17 if the player's count is 21 after the cards are dealt
      if (newPlayerCount === 21 && newDealerCount < 17) {
        while (newDealerCount < 17) {
          newDealerHand.push(newCardDeck.pop()!);
          newDealerCount = calculateCount(newDealerHand);
        }
        return {
          ...state,
          bet: newBet,
          pot: newPot,
          playerHand: newPlayerHand,
          dealerHand: newDealerHand,
          splitHand: newSplitHand,
          currentCardDeck: newCardDeck,
          playerCount: newPlayerCount,
          dealerCount: newDealerCount,
          hitBoolean: false,
          stayBoolean: false,
          doubleDownBoolean: false,
          splitBoolean: false,
          splitHitBoolean: false,
          splitStayBoolean: false,
        };
      }
      // Player wins, so the ability to take any actions is disabled
      else if (
        newPlayerCount === 21 &&
        newDealerCount >= 17 &&
        newDealerCount <= 21
      ) {
        return {
          ...state,
          bet: newBet,
          pot: newPot,
          playerHand: newPlayerHand,
          dealerHand: newDealerHand,
          splitHand: newSplitHand,
          currentCardDeck: newCardDeck,
          playerCount: newPlayerCount,
          dealerCount: newDealerCount,
          hitBoolean: false,
          stayBoolean: false,
          doubleDownBoolean: false,
          splitBoolean: false,
          splitHitBoolean: false,
          splitStayBoolean: false,
        };
      }
      // Giving the player the ability to split their hand or double down
      else if (
        newPlayerHand[0].faceValue === newPlayerHand[1].faceValue &&
        newPlayerHand[0].numberValue === newPlayerHand[1].numberValue &&
        state.bankroll >= newPot
      ) {
        return {
          ...state,
          bet: newBet,
          pot: newPot,
          playerHand: newPlayerHand,
          dealerHand: newDealerHand,
          currentCardDeck: newCardDeck,
          playerCount: newPlayerCount,
          dealerCount: newDealerCount,
          hitBoolean: true,
          stayBoolean: true,
          doubleDownBoolean: true,
          splitBoolean: true,
        };
      }
      // Giving the player the ability to double down
      else if (newPlayerCount < 21 && state.bankroll >= newPot) {
        return {
          ...state,
          bet: newBet,
          pot: newPot,
          playerHand: newPlayerHand,
          dealerHand: newDealerHand,
          currentCardDeck: newCardDeck,
          playerCount: newPlayerCount,
          dealerCount: newDealerCount,
          hitBoolean: true,
          stayBoolean: true,
          doubleDownBoolean: true,
        };
      } else {
        return {
          ...state,
          bet: newBet,
          pot: newPot,
          playerHand: newPlayerHand,
          dealerHand: newDealerHand,
          currentCardDeck: newCardDeck,
          playerCount: newPlayerCount,
          dealerCount: newDealerCount,
          hitBoolean: true,
          stayBoolean: true,
          doubleDownBoolean: false,
        };
      }
    }
    case ActionConstants.STAY: {
      const newCardDeck = [...state.currentCardDeck];
      const newDealerHand = [...state.dealerHand];
      let newDealerCount = state.dealerCount;
      // Add cards to the dealer's hand until the count is greater than or equal to 17
      while (newDealerCount < 17) {
        newDealerHand.push(newCardDeck.pop()!);
        newDealerCount = calculateCount(newDealerHand);
      }
      return {
        ...state,
        dealerHand: newDealerHand,
        currentCardDeck: newCardDeck,
        dealerCount: newDealerCount,
        hitBoolean: false,
        stayBoolean: false,
        doubleDownBoolean: false,
        splitBoolean: false,
      };
    }
    case ActionConstants.HIT: {
      const newCardDeck = [...state.currentCardDeck];
      const newPlayerHand = [...state.playerHand];
      newPlayerHand.push(newCardDeck.pop()!);
      const newPlayerCount = calculateCount(newPlayerHand);
      let newDealerCount = state.dealerCount;
      const newDealerHand = [...state.dealerHand];
      // Add cards to the dealer's hand until the count is greater
      // than or equal to 17 if the player's count is 21 after the player hits
      if (newPlayerCount === 21) {
        while (newDealerCount < 17) {
          newDealerHand.push(newCardDeck.pop()!);
          newDealerCount = calculateCount(newDealerHand);
        }
        return {
          ...state,
          playerHand: newPlayerHand,
          currentCardDeck: newCardDeck,
          playerCount: newPlayerCount,
          dealerHand: newDealerHand,
          dealerCount: newDealerCount,
          hitBoolean: false,
          stayBoolean: false,
          doubleDownBoolean: false,
        };
      }
      // Removing the ability to double down after the player hits
      else if (newPlayerCount < 21) {
        return {
          ...state,
          playerHand: newPlayerHand,
          currentCardDeck: newCardDeck,
          playerCount: newPlayerCount,
          doubleDownBoolean: false,
        };
      }
      // Player busted so removing the ability to take any actions
      else {
        return {
          ...state,
          playerHand: newPlayerHand,
          currentCardDeck: newCardDeck,
          playerCount: newPlayerCount,
          hitBoolean: false,
          stayBoolean: false,
          doubleDownBoolean: false,
        };
      }
    }
    case ActionConstants.DOUBLE_DOWN: {
      const newCardDeck = [...state.currentCardDeck];
      const newPlayerHand = [...state.playerHand];
      newPlayerHand.push(newCardDeck.pop()!);
      const newPlayerCount = calculateCount(newPlayerHand);
      const newDealerHand = [...state.dealerHand];
      const newBankroll = state.bankroll - state.pot;
      const newPot = state.pot * 2;
      let newDealerCount = state.dealerCount;
      if (newPlayerCount <= 21) {
        while (newDealerCount < 17) {
          newDealerHand.push(newCardDeck.pop()!);
          newDealerCount = calculateCount(newDealerHand);
        }
        return {
          ...state,
          pot: newPot,
          bankroll: newBankroll,
          playerHand: newPlayerHand,
          currentCardDeck: newCardDeck,
          playerCount: newPlayerCount,
          dealerHand: newDealerHand,
          dealerCount: newDealerCount,
          hitBoolean: false,
          stayBoolean: false,
          doubleDownBoolean: false,
        };
      } else {
        return {
          ...state,
          pot: newPot,
          bankroll: newBankroll,
          playerHand: newPlayerHand,
          currentCardDeck: newCardDeck,
          playerCount: newPlayerCount,
          hitBoolean: false,
          stayBoolean: false,
          doubleDownBoolean: false,
        };
      }
    }
    case ActionConstants.SPLIT: {
      const newPlayerHand = [...state.playerHand];
      const newSplitHand = [...state.splitHand];
      newSplitHand.push(newPlayerHand.pop()!);
      const newCardDeck = [...state.currentCardDeck];
      newPlayerHand.push(newCardDeck.pop()!);
      newSplitHand.push(newCardDeck.pop()!);
      const newBankroll = state.bankroll - state.pot;
      const newSplitPot = state.pot;
      return {
        ...state,
        playerHand: newPlayerHand,
        splitHand: newSplitHand,
        playerCount: calculateCount(newPlayerHand),
        splitCount: calculateCount(newSplitHand),
        bankroll: newBankroll,
        splitPot: newSplitPot,
        doubleDownBoolean: false,
        splitBoolean: false,
        splitHitBoolean: true,
        splitStayBoolean: true,
      };
    }
    case ActionConstants.SPLIT_HIT: {
      const newSplitHand = [...state.splitHand];
      const newCardDeck = [...state.currentCardDeck];
      newSplitHand.push(newCardDeck.pop()!);
      const newSplitCount = calculateCount(newSplitHand);
      if (newSplitCount === 21) {
        return {
          ...state,
          splitHand: newSplitHand,
          currentCardDeck: newCardDeck,
          splitCount: newSplitCount,
          splitBoolean: false,
          splitHitBoolean: false,
          splitStayBoolean: false,
        };
      } else if (newSplitCount < 21) {
        return {
          ...state,
          splitHand: newSplitHand,
          currentCardDeck: newCardDeck,
          splitCount: newSplitCount,
          splitBoolean: false,
          splitHitBoolean: true,
          splitStayBoolean: true,
        };
      } else {
        return {
          ...state,
          splitHand: newSplitHand,
          currentCardDeck: newCardDeck,
          splitCount: newSplitCount,
          splitBoolean: false,
          splitHitBoolean: false,
          splitStayBoolean: false,
        };
      }
    }
    case ActionConstants.SPLIT_STAY: {
      return {
        ...state,
        splitBoolean: false,
        splitHitBoolean: false,
        splitStayBoolean: false,
        doubleDownBoolean: false,
      };
    }
    case ActionConstants.INCREASE_BANKROLL_RESET: {
      const newBankroll = state.bankroll + state.pot * 2;
      return {
        ...state,
        bankroll: newBankroll,
        pot: 0,
        playerHand: hand,
        dealerHand: hand,
        playerCount: 0,
        dealerCount: 0,
        currentCardDeck: getDeck(),
      };
    }
    case ActionConstants.BLACKJACK_INCREASE_BANKROLL_RESET: {
      const newBankroll = state.bankroll + state.pot * 2 + state.pot * 0.5;
      return {
        ...state,
        bankroll: newBankroll,
        pot: 0,
        playerHand: hand,
        dealerHand: hand,
        playerCount: 0,
        dealerCount: 0,
        currentCardDeck: getDeck(),
      };
    }
    case ActionConstants.DECREASE_BANKROLL_RESET: {
      return {
        ...state,
        pot: 0,
        playerHand: hand,
        dealerHand: hand,
        playerCount: 0,
        dealerCount: 0,
        currentCardDeck: getDeck(),
      };
    }
    case ActionConstants.NO_CHANGE_BANKROLL_RESET: {
      const newBankroll = state.bankroll + state.pot;
      return {
        ...state,
        bankroll: newBankroll,
        pot: 0,
        playerHand: hand,
        dealerHand: hand,
        playerCount: 0,
        dealerCount: 0,
        currentCardDeck: getDeck(),
      };
    }
    case ActionConstants.SPLIT_INCREASE_BANKROLL_RESET: {
      const newBankroll = state.bankroll + state.splitPot * 2;
      return {
        ...state,
        bankroll: newBankroll,
        splitPot: 0,
        splitHand: hand,
        splitCount: 0,
      };
    }
    case ActionConstants.SPLIT_DECREASE_BANKROLL_RESET: {
      return {
        ...state,
        splitPot: 0,
        splitHand: hand,
        splitCount: 0,
      };
    }
    case ActionConstants.SPLIT_NO_CHANGE_BANKROLL_RESET: {
      const newBankroll = state.bankroll + state.splitPot;
      return {
        ...state,
        bankroll: newBankroll,
        splitPot: 0,
        splitHand: hand,
        splitCount: 0,
      };
    }
    default:
      return state;
  }
};

export default gameReducer;
