import axios from "axios";
import { Action } from "./actionTypes";
import { ActionConstants } from "./actionConstants";
import { setUser } from "./actionCreators";
import { UserState } from "./store";

const TOKEN = "token";

const me = () => {
  return async (dispatch: Function) => {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      try {
        const { data } = await axios.get("/auth/me", {
          headers: {
            authorization: token,
          },
        });
        console.log(data);
        dispatch(setUser(data));
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
  isAdmin: false,
  totalHands: 0,
  totalMoves: 0,
  username: "",
};

const userReducer = (state: UserState = initialState, action: Action) => {
  switch (action.type) {
    case ActionConstants.SET_USER: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default userReducer;
