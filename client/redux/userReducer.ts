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
        const user = data[0];
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

const initialState = {
  bankroll: 0,
  correctMoves: 0,
  handsWon: 0,
  email: "",
  totalHands: 0,
  totalMoves: 0,
  username: "Guest User",
  isLoggedIn: false,
};

const userReducer = (state: UserState = initialState, action: Action) => {
  switch (action.type) {
    case ActionConstants.SET_USER: {
      return { ...action.payload, isLoggedIn: true };
    }
    case ActionConstants.LOG_OUT: {
      window.localStorage.removeItem(TOKEN);
      return initialState;
    }
    case ActionConstants.POST_MOVE_UPDATE: {
      const newTotalMoves = state.totalMoves + 1;
      const newCorrectMoves =
        action.payload === true ? state.correctMoves + 1 : state.correctMoves;
      return {
        ...state,
        correctMoves: newCorrectMoves,
        totalMoves: newTotalMoves,
      };
    }
    case ActionConstants.POST_DEAL_UPDATE: {
      const newTotalHands = state.totalHands + 1;
      return {
        ...state,
        totalHands: newTotalHands,
      };
    }
    case ActionConstants.UPDATE_USER_BANKROLL: {
      const localStorageState = window.localStorage.getItem("state");
      const bankroll = JSON.parse(localStorageState).game.bankroll;
      return {
        ...state,
        bankroll: bankroll,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
