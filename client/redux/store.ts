import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import gameReducer from "./gameReducer";
import userReducer from "./userReducer";
import { card } from "../components/data/getDeck";
import { loadState } from "../localStorage";

export type GameState = {
  activeGame: boolean;
  currentCardDeck: card[];
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
  bankrollUpdated: boolean;
  splitBankrollUpdated: boolean;
};

export type UserState = {
  bankroll: number;
  correctMoves: number;
  handsWon: number;
  handsPushed: number;
  email: string;
  totalHands: number;
  totalMoves: number;
  username: string;
  isLoggedIn: boolean;
  lastMoveCorrect: boolean;
  lastMove: string;
  correctLastMove: string;
  moveUpdated: boolean;
};

export type State = {
  game: GameState;
  user: UserState;
};

const combinedReducer = combineReducers({
  game: gameReducer,
  user: userReducer,
});
const persistedState = loadState();
const store = createStore(
  combinedReducer,
  persistedState,
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

export default store;
