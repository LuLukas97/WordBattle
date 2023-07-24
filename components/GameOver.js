import React, { useContext } from "react";
import { AppContext } from "../pages/_app";
import Popup from "./PopupGameOver";

function GameOver() {
  const { gameOver, currAttempt, setGameOver, correctWord } =
    useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        <Popup>
          {gameOver.guessedWord
            ? "You correctly guessed the word!"
            : "You failed"}
          <h1>Correct word: {correctWord}</h1>

          {gameOver.guessedWord && (
            <h3> You guessed the word in {currAttempt.attempt} attempts </h3>
          )}
        </Popup>
      </h3>
    </div>
  );
}

export default GameOver;
