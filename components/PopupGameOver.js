import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../pages/_app";
import Popup from "reactjs-popup";
import Link from "next/link";

function PopupGameOver() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const { gameOver, currAttempt, setGameOver, correctWord } =
    useContext(AppContext);

  const togglePopup = () => {
    setIsPopupOpen((prevIsOpen) => !prevIsOpen);
  };

  const refreshPage = () => {
    location.reload();
  };
  return (
    <div>
      <button className="summary" onClick={togglePopup}>
        {" "}
        Open summary
      </button>

      <Popup open={gameOver.guessedWord && isPopupOpen} onClose={togglePopup}>
        <div className="popup-gameover">
          <div className="popup-info">
            {gameOver.guessedWord ? (
              <h1>You correctly guessed the word! 🥳</h1>
            ) : (
              <h1>"You failed"</h1>
            )}
            <span className="correctText"> The correct word was: </span>
            <span className="correctWord">{correctWord} </span>
            {gameOver.guessedWord && (
              <h1> You guessed the word in {currAttempt.attempt} attempts </h1>
            )}
          </div>
          <Link href="/">
            <button className="popup-home-btn">Home</button>
          </Link>
          <button className="popup-play-btn" onClick={refreshPage}>
            Play again
          </button>
        </div>
      </Popup>
    </div>
  );
}
export default PopupGameOver;
