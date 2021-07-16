import React from "react";

const LogIn: React.FC = () => {
  return (
    <form>
      <label>
        Username: <input type="username" placeholder="text" required />
      </label>
      <label>
        Email: <input type="email" placeholder="Email" required />
      </label>
      <label>
        Password: <input type="password" placeholder="Password" required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LogIn;
