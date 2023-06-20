import "../styles/App.css";
import "../styles/HomeTiles.css";
import "../styles/Footer.css";
import "../styles/wordlePlay.css";
import Board from "../components/Board";
import Keyboard from "../components/Keyboard";
import { boardDefault, generateWordSet, wordBank } from "../data/Words";

import { useState, React, createContext, useEffect } from "react";

export const AppContext = createContext();

function App({ Component, pageProps }) {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());
/*   const [wordSet, setWordSet] = useState(new Set());
 */
  const correctWord = "RIGHT";

  useEffect(() => {
    generateWordSet().then((words) => {
/*       setWordSet(words.wordSet); */
      console.log(words);
    });
  }, [])

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
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
  };
  return (
    <AppContext.Provider
      value={{
        board,
        setBoard,
        currAttempt,
        setCurrAttempt,
        onSelectLetter,
        onDelete,
        onEnter,
        correctWord
      }}
    >
      <Component {...pageProps} />;
    </AppContext.Provider>
  );
}
export default App;
