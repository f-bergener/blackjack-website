import { ActionConstants } from "./actionConstants";
import { Action } from "./actionTypes";
import { card, getDeck, calculateCount } from "../components/data/getDeck";
import {
  initialHandGetBestMove,
  postFirstMoveGetBestHand,
} from "../components/data/table";
import { GameState } from "./store";

const hand: card[] = [];

const initialState = {
  activeGame: false,
  currentCardDeck: getDeck(),
  bet: 0,
  pot: 0,
  splitPot: 0,
  playerHand: [...hand],
  dealerHand: [...hand],
  splitHand: [...hand],
  playerCount: 0,
  dealerCount: 0,
  splitCount: 0,
  hitBoolean: false,
  stayBoolean: false,
  doubleDownBoolean: false,
  splitBoolean: false,
  splitHitBoolean: false,
  splitStayBoolean: false,
  playerHandBestMove: "",
  splitHandBestMove: "",
  bankrollUpdated: false,
  splitBankrollUpdated: false,
};

const gameReducer = (state: GameState = initialState, action: Action) => {
  switch (action.type) {
    // --------------------------------------------------------
    // Modify bet actions
    case ActionConstants.ADD_TO_BET: {
      const newBet = state.bet + +action.payload;
      return {
        ...state,
        bet: newBet,
      };
    }
    case ActionConstants.REMOVE_FROM_BET: {
      let newBet = state.bet - +action.payload;
      if (newBet < 0) {
        newBet = 0;
      }
      return {
        ...state,
        bet: newBet,
      };
    }
    // --------------------------------------------------------
    // --------------------------------------------------------
    // Game actions
    case ActionConstants.DEAL: {
      const newPlayerHand = [...state.playerHand];
      const newDealerHand = [...state.dealerHand];
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
      const leftoverBankroll = action.bankroll - newPot;
      // Add cards to the dealer's hand until the count is greater
      // than or equal to 17 if the player's count is 21 after the cards are dealt
      if (newPlayerCount === 21 && newDealerCount < 17) {
        while (newDealerCount < 17) {
          newDealerHand.push(newCardDeck.pop()!);
          newDealerCount = calculateCount(newDealerHand);
        }
        return {
          ...state,
          activeGame: true,
          bet: newBet,
          pot: newPot,
          playerHand: newPlayerHand,
          dealerHand: newDealerHand,
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
          activeGame: true,
          bet: newBet,
          pot: newPot,
          playerHand: newPlayerHand,
          dealerHand: newDealerHand,
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
        leftoverBankroll >= newPot
      ) {
        return {
          ...state,
          activeGame: true,
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
          playerHandBestMove: initialHandGetBestMove(
            newPlayerHand,
            newDealerHand,
            newPlayerCount
          ),
        };
      }
      // Giving the player the ability to double down, but not the ability to split
      else if (newPlayerCount < 21 && leftoverBankroll >= newPot) {
        return {
          ...state,
          activeGame: true,
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
          playerHandBestMove: initialHandGetBestMove(
            newPlayerHand,
            newDealerHand,
            newPlayerCount
          ),
        };
      }
      // Giving the player the ability to only hit or stay since
      // they do not have enough chips to double down
      else {
        return {
          ...state,
          activeGame: true,
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
          playerHandBestMove: initialHandGetBestMove(
            newPlayerHand,
            newDealerHand,
            newPlayerCount
          ),
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
        playerHandBestMove: "",
        splitHandBestMove: "",
      };
    }
    case ActionConstants.HIT: {
      // Adding one card to the player's hand
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
          splitBoolean: false,
          playerHandBestMove: "",
        };
      }
      // Removing the ability to double down or split after the player hits
      else if (newPlayerCount < 21) {
        return {
          ...state,
          playerHand: newPlayerHand,
          currentCardDeck: newCardDeck,
          playerCount: newPlayerCount,
          doubleDownBoolean: false,
          splitBoolean: false,
          playerHandBestMove: postFirstMoveGetBestHand(
            newDealerHand,
            newPlayerCount
          ),
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
          playerHandBestMove: "",
        };
      }
    }
    case ActionConstants.DOUBLE_DOWN: {
      // Doubling the player's bet and adding one card to their hand
      const newCardDeck = [...state.currentCardDeck];
      const newPlayerHand = [...state.playerHand];
      newPlayerHand.push(newCardDeck.pop()!);
      const newPlayerCount = calculateCount(newPlayerHand);
      const newDealerHand = [...state.dealerHand];
      const newPot = state.pot * 2;
      let newDealerCount = state.dealerCount;
      // Player's count is less than 21 and cannot hit and if
      // the dealer's count is less than 17, the dealer will hit until their
      // count reaches 17
      if (newPlayerCount <= 21) {
        while (newDealerCount < 17) {
          newDealerHand.push(newCardDeck.pop()!);
          newDealerCount = calculateCount(newDealerHand);
        }
        return {
          ...state,
          pot: newPot,
          playerHand: newPlayerHand,
          currentCardDeck: newCardDeck,
          playerCount: newPlayerCount,
          dealerHand: newDealerHand,
          dealerCount: newDealerCount,
          hitBoolean: false,
          stayBoolean: false,
          doubleDownBoolean: false,
          playerHandBestMove: "",
        };
      }
      // Player busted
      else {
        return {
          ...state,
          pot: newPot,
          playerHand: newPlayerHand,
          currentCardDeck: newCardDeck,
          playerCount: newPlayerCount,
          hitBoolean: false,
          stayBoolean: false,
          doubleDownBoolean: false,
          playerHandBestMove: "",
        };
      }
    }
    case ActionConstants.SPLIT: {
      // Creating a second hand and drawing from the deck twice to
      // get two complete hands
      const newPlayerHand = [...state.playerHand];
      const newSplitHand = [...state.splitHand];
      newSplitHand.push(newPlayerHand.pop()!);
      const newCardDeck = [...state.currentCardDeck];
      newPlayerHand.push(newCardDeck.pop()!);
      newSplitHand.push(newCardDeck.pop()!);
      const newSplitPot = state.pot;
      const newPlayerCount = calculateCount(newPlayerHand);
      const newSplitCount = calculateCount(newSplitHand);
      // Removing the ability to split or double down and adding
      // the ability to hit or stay on the split hand
      return {
        ...state,
        playerHand: newPlayerHand,
        splitHand: newSplitHand,
        playerCount: newPlayerCount,
        splitCount: newSplitCount,
        splitPot: newSplitPot,
        doubleDownBoolean: false,
        splitBoolean: false,
        splitHitBoolean: true,
        splitStayBoolean: true,
        playerHandBestMove: postFirstMoveGetBestHand(
          state.dealerHand,
          newPlayerCount
        ),
        splitHandBestMove: postFirstMoveGetBestHand(
          state.dealerHand,
          newSplitCount
        ),
      };
    }
    case ActionConstants.SPLIT_HIT: {
      // Adding a card to the player's split hand
      const newSplitHand = [...state.splitHand];
      const newCardDeck = [...state.currentCardDeck];
      newSplitHand.push(newCardDeck.pop()!);
      const newSplitCount = calculateCount(newSplitHand);
      // Removing the ability for the player to take any
      // actions because the count is 21
      if (newSplitCount === 21) {
        return {
          ...state,
          splitHand: newSplitHand,
          currentCardDeck: newCardDeck,
          splitCount: newSplitCount,
          splitBoolean: false,
          splitHitBoolean: false,
          splitStayBoolean: false,
          splitHandBestMove: "",
        };
      }
      // Count is less than 21, player can still hit or stay
      else if (newSplitCount < 21) {
        return {
          ...state,
          splitHand: newSplitHand,
          currentCardDeck: newCardDeck,
          splitCount: newSplitCount,
          splitBoolean: false,
          splitHitBoolean: true,
          splitStayBoolean: true,
          splitHandBestMove: postFirstMoveGetBestHand(
            state.dealerHand,
            newSplitCount
          ),
        };
      }
      // Player busted
      else {
        return {
          ...state,
          splitHand: newSplitHand,
          currentCardDeck: newCardDeck,
          splitCount: newSplitCount,
          splitBoolean: false,
          splitHitBoolean: false,
          splitStayBoolean: false,
          splitHandBestMove: "",
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
        splitHandBestMove: "",
      };
    }
    // --------------------------------------------------------
    // --------------------------------------------------------
    // Update bankroll and proceed to next hand actions
    case ActionConstants.NEXT_HAND: {
      return {
        ...state,
        pot: 0,
        playerHand: [...hand],
        dealerHand: [...hand],
        playerCount: 0,
        dealerCount: 0,
        playerHandBestMove: "",
        currentCardDeck: getDeck(),
        bankrollUpdated: false,
      };
    }
    case ActionConstants.SPLIT_NEXT_HAND: {
      return {
        ...state,
        splitPot: 0,
        splitHand: [...hand],
        splitCount: 0,
        splitHandBestMove: "",
        splitBankrollUpdated: false,
      };
    }
    case ActionConstants.CLEAR_GAME_STATE: {
      return initialState;
    }
    case ActionConstants.BANKROLL_UPDATE: {
      return { ...state, bankrollUpdated: true };
    }
    case ActionConstants.SPLIT_BANKROLL_UPDATE: {
      return { ...state, splitBankrollUpdated: true };
    }
    // --------------------------------------------------------
    default:
      return state;
  }
};

export default gameReducer;
