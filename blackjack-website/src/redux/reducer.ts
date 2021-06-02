import {
  RESTART_GAME,
  ADD_TO_BET,
  REMOVE_FROM_BET,
  HIT,
  STAY,
  DOUBLE_DOWN,
  SPLIT,
  SPLIT_HIT,
  SPLIT_STAY,
  DEAL,
  INCREASE_BANKROLL_RESET,
  BLACKJACK_INCREASE_BANKROLL_RESET,
  DECREASE_BANKROLL_RESET,
  NO_CHANGE_BANKROLL_RESET,
  SPLIT_INCREASE_BANKROLL_RESET,
  SPLIT_DECREASE_BANKROLL_RESET,
  SPLIT_NO_CHANGE_BANKROLL_RESET,
} from "./actionConstants";
// import getDeck from "../components/data/getDeck";

// Notes
// I added @ts-ignore above each line where I remove a card from the deck and add it to a player's hand
// TypeScript generates an error as pop() returns T | undefined https://github.com/microsoft/TypeScript/blob/ea93ee6db9441eb51a1d816e114b0468363dcd9c/lib/lib.es5.d.ts#L1236
// Arrays with the type of hand are expecting objects with the type of card, so TypeScript generates an error
// This error is not legitimate as a reshuffled deck of 52 cards is generated for each round of play

interface card {
  suit: string;
  numberValue: number;
  faceValue: string;
  id: number;
}

const suits = ["spades", "diamonds", "clubs", "hearts"];
const faceCardValues = ["A", "J", "Q", "K"];
const numberCardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const getDeck = (): card[] => {
  const deck: card[] = [];
  let y = 0;
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < numberCardValues.length; j++) {
      const card = {
        suit: suits[i],
        numberValue: numberCardValues[j],
        faceValue: "",
        id: y,
      };
      deck.push(card);
      y++;
    }
    for (let j = 0; j < faceCardValues.length; j++) {
      const card = {
        suit: suits[i],
        numberValue: 0,
        faceValue: faceCardValues[j],
        id: y,
      };
      deck.push(card);
      y++;
    }
  }
  for (let i = 0; i < 2000; i++) {
    const location1 = Math.floor(Math.random() * deck.length);
    const location2 = Math.floor(Math.random() * deck.length);
    [deck[location1], deck[location2]] = [deck[location2], deck[location1]];
  }
  return deck;
};

const hand: card[] = [];

const calculateCount = (hand: card[]) => {
  const faceCardArray: string[] = [];
  const numberCardArray: number[] = [];
  const aceArray: string[] = [];
  let count = 0;
  hand.forEach((card) => {
    if (card.faceValue === "A") {
      aceArray.push(card.faceValue);
    } else if (card.faceValue) {
      faceCardArray.push(card.faceValue);
    } else numberCardArray.push(card.numberValue);
  });
  faceCardArray.forEach(() => (count += 10));
  numberCardArray.forEach((card) => (count += card));
  if (aceArray.length === 1) {
    if (count >= 11) {
      count += 1;
    } else {
      count += 11;
    }
  } else if (!aceArray.length) {
    count += 0;
  } else {
    if (count < 10) {
      count += aceArray.length - 1;
      if (count <= 10) {
        count += 11;
      }
    } else {
      count += aceArray.length;
    }
  }
  return count;
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

interface action {
  type: string;
  payload: number;
}

const gameReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case RESTART_GAME: {
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
    case ADD_TO_BET: {
      const newBet = state.bet + +action.payload;
      const newBankroll = state.bankroll - +action.payload;
      return {
        ...state,
        bet: newBet,
        bankroll: newBankroll,
      };
    }
    case REMOVE_FROM_BET: {
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
    case DEAL: {
      // Start with empty hands for the player and the dealer
      const newPlayerHand = hand;
      const newDealerHand = hand;
      const newSplitHand = hand;
      const newCardDeck = [...state.currentCardDeck];
      // Deal cards to the player and dealer
      while (newPlayerHand.length < 2 && newDealerHand.length < 2) {
        if (newCardDeck[newCardDeck.length - 1])
          // @ts-ignore
          newPlayerHand.push(newCardDeck.pop());
        if (newCardDeck[newCardDeck.length - 1])
          // @ts-ignore
          newDealerHand.push(newCardDeck.pop());
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
          // @ts-ignore
          newDealerHand.push(newCardDeck.pop());
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
      }
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
    case STAY: {
      const newCardDeck = [...state.currentCardDeck];
      const newDealerHand = [...state.dealerHand];
      let newDealerCount = state.dealerCount;
      // Add cards to the dealer's hand until the count is greater than or equal to 17
      while (newDealerCount < 17) {
        // @ts-ignore
        newDealerHand.push(newCardDeck.pop());
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
    case HIT: {
      const newCardDeck = [...state.currentCardDeck];
      const newPlayerHand = [...state.playerHand];
      // @ts-ignore
      newPlayerHand.push(newCardDeck.pop());
      const newPlayerCount = calculateCount(newPlayerHand);
      let newDealerCount = state.dealerCount;
      const newDealerHand = [...state.dealerHand];
      // Add cards to the dealer's hand until the count is greater
      // than or equal to 17 if the player's count is 21 after the player hits
      if (newPlayerCount === 21) {
        while (newDealerCount < 17) {
          // @ts-ignore
          newDealerHand.push(newCardDeck.pop());
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
    case DOUBLE_DOWN: {
      const newCardDeck = [...state.currentCardDeck];
      const newPlayerHand = [...state.playerHand];
      // @ts-ignore
      newPlayerHand.push(newCardDeck.pop());
      const newPlayerCount = calculateCount(newPlayerHand);
      const newDealerHand = [...state.dealerHand];
      const newBankroll = state.bankroll - state.pot;
      const newPot = state.pot * 2;
      let newDealerCount = state.dealerCount;
      if (newPlayerCount <= 21) {
        while (newDealerCount < 17) {
          // @ts-ignore
          newDealerHand.push(newCardDeck.pop());
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
      } else
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
    case SPLIT: {
      const newPlayerHand = [...state.playerHand];
      const newSplitHand = [...state.splitHand];
      // @ts-ignore
      newSplitHand.push(newPlayerHand.pop());
      const newCardDeck = [...state.currentCardDeck];
      // @ts-ignore
      newPlayerHand.push(newCardDeck.pop());
      // @ts-ignore
      newSplitHand.push(newCardDeck.pop());
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
    case SPLIT_HIT: {
      const newSplitHand = [...state.splitHand];
      const newCardDeck = [...state.currentCardDeck];
      // @ts-ignore
      newSplitHand.push(newCardDeck.pop());
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
    case SPLIT_STAY: {
      return {
        ...state,
        splitBoolean: false,
        splitHitBoolean: false,
        splitStayBoolean: false,
        doubleDownBoolean: false,
      };
    }
    case INCREASE_BANKROLL_RESET: {
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
    case BLACKJACK_INCREASE_BANKROLL_RESET: {
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
    case DECREASE_BANKROLL_RESET: {
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
    case NO_CHANGE_BANKROLL_RESET: {
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
    case SPLIT_INCREASE_BANKROLL_RESET: {
      const newBankroll = state.bankroll + state.splitPot * 2;
      return {
        ...state,
        bankroll: newBankroll,
        splitPot: 0,
        splitHand: hand,
        splitCount: 0,
      };
    }
    case SPLIT_DECREASE_BANKROLL_RESET: {
      return {
        ...state,
        splitPot: 0,
        splitHand: hand,
        splitCount: 0,
      };
    }
    case SPLIT_NO_CHANGE_BANKROLL_RESET: {
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
