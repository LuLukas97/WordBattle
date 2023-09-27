import React, { useContext, useEffect } from "react";

import Board from "../components/Board";
import Keyboard from "../components/Keyboard";
import GameOver from "../components/GameOver";
import { AppContext } from "../pages/_app";

function play() {
  const { gameOver, currAttempt, setGameOver, correctWord } =
    useContext(AppContext);

  return (
    <div>
      <div className="background">
        {/*         <div className="game">
          <Board />
          <Keyboard /> */}
        <div className="game">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
          {/*           </div> */}
        </div>
      </div>
    </div>
  );
}

export default play;
