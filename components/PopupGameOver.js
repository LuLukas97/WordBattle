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
  console.log(isPopupOpen);

  const refreshPage = () => {
    location.reload();
    console.log("hej");
  };
  return (
    <div>
      <button onClick={togglePopup}> Open summary</button>

      <Popup open={gameOver.guessedWord && isPopupOpen} onClose={togglePopup}>
        <div className="popup-gameover">
          <div className="popup-info">
            {gameOver.guessedWord ? (
              <h1>You correctly guessed the word!</h1>
            ) : (
              <h1>"You failed"</h1>
            )}

            <h2> The correct word was: {correctWord} </h2>
            {gameOver.guessedWord && (
              <h1> You guessed the word in {currAttempt.attempt} attempts </h1>
            )}
          </div>
          <Link href={{ pathname: "/" }}>
            <button className="popup-home-btn"> Home </button>
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
