import {
  useRef,
  useEffect,
  useState,
  React,
  createContext,
  useContext,
} from "react";
import HomePageTiles from "../components/homepageTiles";
import CategoryTools from "../components/categoryTiles/categoryTools";
import CategoryFood from "../components/categoryTiles/categoryFood";
import CategoryRandom from "../components/categoryTiles/categoryRandom";
import CategoryGames from "../components/categoryTiles/categoryGames";
import CategoryMix from "../components/categoryTiles/categoryMix";
import CategoryObjects from "../components/categoryTiles/categoryObjects";
import Footer from "../components/footer";
import Link from "next/link";
import { AppContext } from "./_app";
import { boardDefault } from "../data/Words";

const home = () => {
  const { setAppState } = useContext(AppContext);
  const [stateValue, setStateValue] = useState("Random");

  useEffect(() => {
    console.log("useEffect", stateValue);

    setAppState(stateValue);
  });

  const rowRef = useRef(null);

  const [handleCategory, setHandleCategory] = useState();
  const [handleRounds, setHandleRounds] = useState();
  const [showLetters, setShowLetters] = useState(false);

  const selectCategory = async (id) => {
    setShowLetters(true);
    setHandleCategory(id);
  };
  const selectRounds = async (id) => {
    setHandleRounds(id);
  };

  const handleStateUpdate = (value) => {
    setStateValue(value);
  };
  useEffect(() => {
    const handleFocusChange = (event) => {
      if (rowRef.current && rowRef.current.contains(event.target)) {
        rowRef.current.classList.add("focused");
      } else if (rowRef.current) {
        rowRef.current.classList.remove("focused");
      }
    };

    document.addEventListener("focusin", handleFocusChange);
    document.addEventListener("focusout", handleFocusChange);

    return () => {
      document.removeEventListener("focusin", handleFocusChange);
      document.removeEventListener("focusout", handleFocusChange);
    };
  }, []);

  /*   useEffect(() => {
    // Get the random container div
    const randomContainer = document.getElementById("row6");

    // Create a hidden button element
    const hiddenButton = document.createElement("button");
    hiddenButton.style.position = "absolute";
    hiddenButton.style.left = "-9999px"; // Move it off-screen to hide it

    // Append the hidden button to the random container
    randomContainer.appendChild(hiddenButton);

    // Set focus to the hidden button
    hiddenButton.focus();
  }, []); */

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
        {/* <div className="letterDash">

          <div className="category-flex" ref={rowRef}>
            <div className="row5">
              <CategoryTools onStateUpdate={handleStateUpdate} />
            </div>
            <div className="row6" id="row6">

              <CategoryRandom onStateUpdate={handleStateUpdate} />
            </div>
            <div className="row4">
              <CategoryFood onStateUpdate={handleStateUpdate} />
            </div>
            <div className="row5">
              <CategoryGames onStateUpdate={handleStateUpdate} />
            </div>
            <div className="row7">
              <CategoryObjects onStateUpdate={handleStateUpdate} />
            </div>
            <div className="row3">
              <CategoryMix onStateUpdate={handleStateUpdate} />
            </div>

            <div className="row25">
              <HomePageTiles onStateUpdate={handleStateUpdate} />
            </div> 
          </div>

          {stateValue && (
            <div className="cssanimation sequence fadeInBottom">
              <h2 className="introText"> Select amount of characters: </h2>
              <div className="letterAmount-flex">
                <button
                  className="letterAmount-btn"
                  onClick={() => selectRounds(3)}
                >
                  3
                </button>
                <button
                  className="letterAmount-btn"
                  onClick={() => selectRounds(5)}
                >
                  5
                </button>
                <button
                  className="letterAmount-btn"
                  onClick={() => selectRounds(7)}
                >
                  7
                </button>
              </div>
              <h2>
                Game rules: <span className="summaryRules">{stateValue}</span>{" "}
                category with{" "}
                <span className="summaryRules">{handleRounds}</span> rounds!
              </h2>

              <Link
                href={{
                  pathname: "/play",
                  state: { state1: handleCategory, rounds: handleRounds },
                }}
              >
                <button className="ready-btn">Ready? Start here! </button>
              </Link>
            </div>
          )} 
          <h2>
            Game rules: <span className="summaryRules">{stateValue}</span>
          </h2>

          <div className="cssanimation sequence fadeInBottom">
            <Link
              href={{
                pathname: "/play",
                state1: { stateValue: stateValue },
              }}
            >
              <button className="ready-btn">Ready? Start here! </button>
            </Link>
          </div>
        </div> */}
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

export default home;
