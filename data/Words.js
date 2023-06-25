import wordBank from "./wordle-bank.txt"

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
  const wordArr = wordBank.split('\n').map((word) => word.trim()).filter(Boolean);
  wordSet = new Set(wordArr);

  wordSet = new Set(wordArr);
    
  return { wordSet };
};
