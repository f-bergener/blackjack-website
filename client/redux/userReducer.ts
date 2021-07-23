import axios from "axios";
import { Action } from "./actionTypes";
import { ActionConstants } from "./actionConstants";
import { setAuth } from "./actionCreators";

const TOKEN = "token";

const me = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      try {
        const { data } = await axios.get("/auth/me", {
          headers: {
            authorization: token,
          },
        });
        console.log(data);
        dispatch(setAuth(data));
      } catch (error) {
        console.error(error);
      }
    }
  };
};

export const authenticateLogin =
  (email: String, password: String) => async (dispatch) => {
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
  (username: String, email: String, password: String) => async (dispatch) => {
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

const initialState = {};

const userReducer = (state: Object = initialState, action: Action) => {
  switch (action.type) {
    case ActionConstants.SET_AUTH: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default userReducer;
