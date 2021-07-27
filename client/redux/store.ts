import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import gameReducer from "./gameReducer";
import userReducer from "./userReducer";
import { card } from "../components/data/getDeck";

export type GameState = {
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
  bankrollUpdated: boolean;
  splitBankrollUpdated: boolean;
};

export type UserState = {
  bankroll: number;
  correctMoves: number;
  handsWon: number;
  email: string;
  isAdmin: boolean;
  totalHands: number;
  totalMoves: number;
  username: string;
  isLoggedIn: boolean;
};

export type State = {
  game: GameState;
  user: UserState;
};

const combinedReducer = combineReducers({
  game: gameReducer,
  user: userReducer,
});

const store = createStore(
  combinedReducer,
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

export default store;
