import { createStore, applyMiddleware } from "redux";
import loggingMiddleware from "redux-logger";
import gameReducer from "./gameReducer";
import { card } from "../components/data/getDeck";

export type State = {
  activeGame: boolean;
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
  playerHandBestMove: string;
  splitHandBestMove: string;
  totalMoves: number;
  correctMoves: number;
  totalHands: number;
  handsWon: number;
};

const store = createStore(gameReducer, applyMiddleware(loggingMiddleware));

export default store;
