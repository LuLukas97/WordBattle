import { useRef, useEffect, useState, React, createContext } from "react";
import HomePageTiles from "../components/homepageTiles";
import CategoryTools from "../components/categoryTiles/categoryTools";
import CategoryFood from "../components/categoryTiles/categoryFood";
import CategoryRandom from "../components/categoryTiles/categoryRandom";
import CategoryGames from "../components/categoryTiles/categoryGames";
import CategoryMix from "../components/categoryTiles/categoryMix";
import CategoryObjects from "../components/categoryTiles/categoryObjects";
import Footer from "../components/footer";
import Link from "next/link";
import { boardDefault } from "../data/Words";

const home = () => {


const [stateValue, setStateValue] = useState("Random");


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

  useEffect(() => {
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
  }, []);
  console.log(stateValue, " STATE VALUE");

  return (
    <div>
      <div className="wrapper">
        <div className="headerContainer">
          <div className="headerTitle">
            <span className="headerLetter">Wordle</span>
            <span className="headerDash">Battle</span>
            <div className="dashImg"></div>
          </div>
        </div>
        <div className="letterDash">
          <h1 className="introText"> Start by selecting a category:</h1>

          {/*           <h2 className="gameRules"> Start by selecting a category: </h2> */}
          <div className="category-flex" ref={rowRef}>
            {/* TODO: Seperate div for each category 
            ,create new components for each category */}
            <div className="row5">
              {/* Tools */}
              <CategoryTools onStateUpdate={handleStateUpdate} />
            </div>
            <div className="row6" id="row6">
              {/* Random */}
              <CategoryRandom onStateUpdate={handleStateUpdate} />
            </div>
            <div className="row4">
              {/* Food */}
              <CategoryFood onStateUpdate={handleStateUpdate} />
            </div>
            <div className="row5">
              {/* Games */}
              <CategoryGames onStateUpdate={handleStateUpdate} />
            </div>
            <div className="row7">
              {/* Mix */}
              <CategoryObjects onStateUpdate={handleStateUpdate} />
            </div>
            <div className="row3">
              {/* Objects */}
              <CategoryMix onStateUpdate={handleStateUpdate} />
            </div>

            {/* <div className="row25">
              <HomePageTiles onStateUpdate={handleStateUpdate} />
            </div> */}
          </div>

          {/* {stateValue && (
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
          )} */}
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
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default home;
