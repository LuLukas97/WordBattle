import React from "react";
import Board from "../components/Board";
import Keyboard from "../components/Keyboard";

function play() {
  return (
    <div>
      <div className="background">
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </div>
    </div>
  );
}

export default play;
