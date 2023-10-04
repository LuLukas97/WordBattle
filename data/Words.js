import wordBank from "./wordle-bank.txt";
import { useState, React, createContext, useEffect, useContext } from "react";

import { AppContext } from "../pages/_app";
import { StateContext } from "../pages/_app";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  const wordArr = wordBank
    .split("\n")
    .map((word) => word.trim())
    .filter(Boolean);
  todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
  wordSet = new Set(wordArr);
  /* console.log(todaysWord, " TODAYS"); // TO CHECK CURRENT WORD, REMOVE AFTERWARDS */

  return { wordSet, todaysWord };
};
