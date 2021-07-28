import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "./redux/store";
import { setBankroll } from "./redux/actionCreators";
import Header from "./components/Header";
import Routes from "./Routes";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: State) => state.user.isLoggedIn);
  const bankroll = useSelector((state: State) => state.game.bankroll);
  useEffect(() => {
    dispatch(setBankroll(bankroll));
  }, [isLoggedIn]);
  return (
    <>
      <Header />
      <Routes />
    </>
  );
};

export default App;
