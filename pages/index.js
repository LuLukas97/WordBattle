import { useEffect, useState, React } from "react";
import HomePageTiles from "../components/homepageTiles";

const home = () => {
  const [handleCategory, setHandleCategory] = useState();
  const [handleRounds, setHandleRounds] = useState();
  const [showLetters, setShowLetters] = useState(false);
  const [stateValue, setStateValue] = useState("");

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

  return (
    <div>
      <div className="wrapper">
        <div className="headerContainer">
          <div className="headerTitle">
            <span className="headerLetter">Letter</span>
            <span className="headerDash">Dash</span>
            <div className="dashImg"></div>
          </div>
        </div>
        <div className="letterDash">
          <h1 className="introText"> Like Wordle, but with categoriesss!</h1>

          <h2 className="gameRules"> Start by selecting a category: </h2>
          <div className="category-flex">
            <HomePageTiles onStateUpdate={handleStateUpdate} />
            <p>State Value: {stateValue}</p>

            <button
              className="category-btn"
              onClick={() => selectCategory("Mix")}
            >
              Mix
            </button>
            <button
              className="category-btn"
              onClick={() => selectCategory("Random")}
            >
              Random
            </button>
            <button
              className="category-btn"
              onClick={() => selectCategory("Food")}
            >
              Food
            </button>
            <button
              className="category-btn"
              onClick={() => selectCategory("Tools")}
            >
              Tools
            </button>
            <button
              className="category-btn"
              onClick={() => selectCategory("Games")}
            >
              Games
            </button>
            <button
              className="category-btn"
              onClick={() => selectCategory("Objects")}
            >
              Objects
            </button>
          </div>
          {showLetters && (
            <div className="cssanimation sequence fadeInBottom">
              <h2> Select amount of letter words: </h2>
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
                Game rules:{" "}
                <span className="summaryRules">{handleCategory}</span> category
                with <span className="summaryRules">{handleRounds}</span>{" "}
                rounds!
              </h2>

              <button className="ready-btn">Ready? Start here! </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default home;
