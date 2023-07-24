import wordBank from "./wordle-bank.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
/* const wordArr = wordBank.split('\n').map((word) => word.trim()).filter(Boolean);
const wordSet = new Set(wordArr);
console.log(wordSet); // Set containing unique words from the .txt file */

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  const wordArr = wordBank
    .split("\n")
    .map((word) => word.trim())
    .filter(Boolean);
  todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
  wordSet = new Set(wordArr);
  console.log(todaysWord, " TODAYS"); // TO CHECK CURRENT WORD, REMOVE AFTERWARDS

  return { wordSet, todaysWord };
};
