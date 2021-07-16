import axios from "axios";
import { initialHandGetBestMove } from "../components/data/table";
import { ActionConstants } from "./actionConstants";
import { setAuth } from "./actionCreators";

const TOKEN = "token";

export const me = () => async (dispatch: Function) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    try {
      const { data } = await axios.get("/auth/me", {
        headers: {
          authorization: token,
        },
      });
      return dispatch(setAuth(data));
    } catch (error) {
      console.error(error);
    }
  }
};

export const authenticateLogin =
  (email: String, password: String) => async (dispatch: Function) => {
    try {
      const { data } = await axios.post("/auth/login", {
        email,
        password,
      });
      window.localStorage.setItem(TOKEN, data.token);
      dispatch(me());
    } catch (error) {
      console.error(error);
    }
  };

export const authenticateSignup =
  (username: String, email: String, password: String) =>
  async (dispatch: Function) => {
    try {
      const res = await axios.post("/auth/signup", {
        username,
        email,
        password,
      });
      window.localStorage.setItem(TOKEN, res.data.token);
      dispatch(me());
    } catch (error) {
      console.error(error);
    }
  };

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionConstants.SET_AUTH: {
    }
  }
};
