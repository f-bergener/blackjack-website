import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../redux/reducer";
import PreDealDisplay from "./PreDealDisplay";

// When the game starts, the first components that should be displayed are
// the chips and the deal button
// Once the cards are dealt, display the card and game button components

const Game = () => {
  const pot = useSelector((state: State) => state.pot);
  const bankroll = useSelector((state: State) => state.bankroll);
  const bet = useSelector((state: State) => state.bet);
  const splitPot = useSelector((state: State) => state.splitPot);
  const playerHand = useSelector((state: State) => state.playerHand);
  const splitHand = useSelector((state: State) => state.splitHand);
  const dealerHand = useSelector((state: State) => state.dealerHand);
  const playerCount = useSelector((state: State) => state.playerCount);
  const splitCount = useSelector((state: State) => state.splitCount);
  const dealerCount = useSelector((state: State) => state.dealerCount);
  const hitBoolean = useSelector((state: State) => state.hitBoolean);
  const stayBoolean = useSelector((state: State) => state.stayBoolean);
  const doubleDownBoolean = useSelector(
    (state: State) => state.doubleDownBoolean
  );
  const splitBoolean = useSelector((state: State) => state.splitBoolean);
  const splitHitBoolean = useSelector((state: State) => state.splitHitBoolean);
  const splitStayBoolean = useSelector(
    (state: State) => state.splitStayBoolean
  );

  // const ActiveHandDisplay = () => {
  //   return (
  //     <>
  //       <h2>Bet: ${pot.toLocaleString("en")}</h2>
  //       {splitPot ? (
  //         <h2>Split Bet: ${splitPot.toLocaleString("en")}</h2>
  //       ) : (
  //         <></>
  //       )}
  //       <div id="hand-section">
  //         <div className="hand-subsection">
  //           {playerHand.length >= 2 ? (
  //             <>
  //               <div className="hand">{displayPlayerHand(playerHand)}</div>
  //               <h1 className="count">Player Count: {playerCount}</h1>
  //             </>
  //           ) : (
  //             <></>
  //           )}
  //           <div className="game-buttons">
  //             {hitBoolean && !splitStayBoolean ? displayHit() : <></>}
  //             {stayBoolean && !splitStayBoolean ? displayStay() : <></>}
  //             {doubleDownBoolean ? displayDoubleDown() : <></>}
  //             {splitBoolean && splitHand.length < 2 ? displaySplit() : <></>}
  //           </div>
  //         </div>
  //         <div className="hand-subsection">
  //           {splitHand.length >= 2 ? (
  //             <>
  //               <div className="hand">{displayPlayerHand(splitHand)}</div>
  //               <h1 className="count">Split Count: {splitCount}</h1>
  //             </>
  //           ) : (
  //             <></>
  //           )}
  //           <div className="game-buttons">
  //             {splitHitBoolean ? displaySplitHit() : <></>}
  //             {splitStayBoolean ? displaySplitStay() : <></>}
  //           </div>
  //         </div>
  //         <div className="hand-subsection">
  //           {!stayBoolean && dealerHand.length >= 2 ? (
  //             <div className="hand">{displayDealerHand()}</div>
  //           ) : (
  //             <div className="hand">{displayDealerTwoCardHand()}</div>
  //           )}
  //           {!stayBoolean && dealerHand.length >= 2 ? (
  //             <h1 className="count">Dealer Count: {dealerCount}</h1>
  //           ) : (
  //             ""
  //           )}
  //         </div>
  //       </div>
  //     </>
  //   );
  // };

  return (
    <>
      <h1>Game</h1>
      {!pot ? <PreDealDisplay /> : <ActiveHandDisplay />}
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </>
  );
};

export default Game;
