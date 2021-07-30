import axios from "axios";
import { Action } from "./actionTypes";
import { ActionConstants } from "./actionConstants";
import { setUser } from "./actionCreators";
import { UserState } from "./store";

export const TOKEN = "token";

export const me = () => {
  return async (dispatch: Function) => {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      try {
        const { data } = await axios.get("/auth/me", {
          headers: {
            authorization: token,
          },
        });
        const user = data;
        dispatch(setUser(user));
      } catch (error) {
        console.error(error);
      }
    }
  };
};

export const authenticateLogin =
  (email: String, password: String) => async (dispatch: Function) => {
    try {
      const { data } = await axios.post("/auth/login", {
        email,
        password,
      });
      if (data.token) {
        window.localStorage.setItem(TOKEN, data.token);
        dispatch(me());
      }
    } catch (error) {
      console.error(error);
    }
  };

export const authenticateSignup =
  (username: string, email: string, password: String) =>
  async (dispatch: Function) => {
    try {
      const { data } = await axios.post("/auth/signup", {
        username,
        email,
        password,
      });
      if (data.token) {
        window.localStorage.setItem(TOKEN, data.token);
        dispatch(me());
      }
    } catch (error) {
      console.error(error);
    }
  };

export const won = "won";
export const pushed = "pushed";
export const lost = "lost";
export const handDealt = "handDealt";

const initialState = {
  bankroll: 5000,
  correctMoves: 0,
  handsWon: 0,
  handsPushed: 0,
  email: "",
  totalHands: 0,
  totalMoves: 0,
  username: "Guest User",
  isLoggedIn: false,
  lastMoveCorrect: false,
  lastMove: "",
  correctLastMove: "",
  moveUpdated: false,
};

const userReducer = (state: UserState = initialState, action: Action) => {
  switch (action.type) {
    case ActionConstants.SET_USER: {
      return {
        ...action.payload,
        isLoggedIn: true,
        lastMoveCorrect: false,
        moveUpdated: false,
      };
    }
    case ActionConstants.LOG_OUT: {
      window.localStorage.removeItem(TOKEN);
      return initialState;
    }
    case ActionConstants.POST_MOVE_UPDATE: {
      const newTotalMoves = state.totalMoves + 1;
      const newCorrectMoves =
        action.moveWasCorrect === true
          ? state.correctMoves + 1
          : state.correctMoves;
      return {
        ...state,
        correctMoves: newCorrectMoves,
        totalMoves: newTotalMoves,
        lastMoveCorrect: action.moveWasCorrect,
        lastMove: action.lastMove,
        correctLastMove: action.correctLastMove,
        moveUpdated: true,
      };
    }
    case ActionConstants.POST_DEAL_UPDATE: {
      const newTotalHands = state.totalHands + 1;
      return {
        ...state,
        totalHands: newTotalHands,
        lastMoveCorrect: false,
        lastMove: "",
        correctLastMove: "",
        moveUpdated: false,
      };
    }
    case ActionConstants.UPDATE_USER_CORRECT_HANDS: {
      if (action.handOutcome === won) {
        const newHandsWon = state.handsWon + 1;
        return {
          ...state,
          handsWon: newHandsWon,
        };
      } else if (action.handOutcome === pushed) {
        const newHandsPushed = state.handsPushed + 1;
        return {
          ...state,
          handsPushed: newHandsPushed,
        };
      } else {
        return state;
      }
    }
    case ActionConstants.UPDATE_USER_BANKROLL: {
      const newBankroll = state.bankroll + action.amount;
      return {
        ...state,
        bankroll: newBankroll,
      };
    }
    case ActionConstants.CLEAR_USER_STATE: {
      return initialState;
    }
    default:
      return state;
  }
};

export default userReducer;
