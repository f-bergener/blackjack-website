import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Game from "./components/Game";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/game" component={Game} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Routes;
