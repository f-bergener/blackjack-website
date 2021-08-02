import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateLogin } from "../redux/userReducer";
import { clearGameState } from "../redux/actionCreators";
import history from "../history";

const LogIn: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className="container regular-page"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(authenticateLogin(email, password));
        dispatch(clearGameState());
        history.push("/");
      }}
    >
      <label>
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          required
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LogIn;
