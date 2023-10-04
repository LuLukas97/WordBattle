import {
  useRef,
  useEffect,
  useState,
  React,
  createContext,
  useContext,
} from "react";
import Footer from "../components/footer";
import Link from "next/link";
import { AppContext } from "./_app";
import { boardDefault } from "../data/Words";

const Home = () => {
  const rowRef = useRef(null);

  return (
    <div>
      <div className="wrapper">
        <div className="headerContainer">
          <div className="headerTitle">
            <span className="headerLetter">Word</span>
            <span className="headerDash">Battle</span>
            <div className="dashImg"></div>
          </div>
        </div>
        <h1 className="introText">Welcome to the Ultimate Word Challenge!</h1>
        <h2 className="heroFiller">
          Are you ready to put your vocabulary skills to the test? Our exciting
          word game is about to take you on a linguistic journey like no other.
          Challenge yourself and unlock the power of words with our immersive
          experience.
        </h2>

        <h1 className="introText">What awaits you:</h1>
        <h1 className="heroBulleted">
          <ul>
            <h2 className="heroBulleted">
              <li>
                Word-Guessing Fun: Dive into the excitement of guessing a hidden
                word. WordBattle is simple, yet incredibly addictive.
              </li>
            </h2>
            <h2 className="heroBulleted">
              <li>
                Play at Your Pace: No complicated rules or settings. Just you, a
                few letters, and your brain. It's the perfect game to unwind
                with.
              </li>
            </h2>
            <h2 className="heroBulleted">
              <li>
                Quick and Easy: Each round is a quick and satisfying challenge.
                Can you guess the word in just a few tries?
              </li>
            </h2>
          </ul>
        </h1>
        <Link
          href={{
            pathname: "/play",
          }}
        >
          <button className="ready-btn">Play! </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
