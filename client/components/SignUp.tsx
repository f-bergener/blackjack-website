import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateSignup } from "../redux/userReducer";
import history from "../history";

const LogIn: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(authenticateSignup(username, email, password));
        history.push("/");
      }}
    >
      <label>
        Username:{" "}
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
          required
        />
      </label>
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
