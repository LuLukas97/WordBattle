import "../styles/App.css";
import "../styles/HomeTiles.css";
import "../styles/Footer.css";
import "../styles/wordlePlay.css";
import "../styles/popup-content.css";

import Board from "../components/Board";
import KeyBoard from "../components/Keyboard";
import { boardDefault, generateWordSet } from "../data/Words";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { useState, React, createContext, useEffect } from "react";

export const AppContext = createContext();

function App({ Component, pageProps }) {
  const [appState, setAppState] = useState({});

  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctWord, setCorrectWord] = useState("");
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, [appState]);

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("Word not found");
    }

    if (currWord.toLowerCase() === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  };

  return (
    <AppContext.Provider
      value={{
        appState,
        setAppState,
        board,
        setBoard,
        currAttempt,
        setCurrAttempt,
        onSelectLetter,
        onDelete,
        onEnter,
        correctWord,
        setDisabledLetters,
        disabledLetters,
        setGameOver,
        gameOver,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
export default App;
