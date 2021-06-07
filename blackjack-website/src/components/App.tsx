import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import Game from "./Game";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route path="/game" component={Game} />
    </Router>
  );
};

export default App;
