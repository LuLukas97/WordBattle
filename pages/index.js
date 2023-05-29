import { useRef, useEffect, useState, React } from "react";
import HomePageTiles from "../components/homepageTiles";

const home = () => {
  const rowRef = useRef(null);

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
          <h1 className="introText"> Like Wordle, but with categories!</h1>

          <h2 className="gameRules"> Start by selecting a category: </h2>
          <div className="category-flex" ref={rowRef}>
            <HomePageTiles onStateUpdate={handleStateUpdate} />
          </div>
          <p>State Value: {stateValue}</p>

          {stateValue && (
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
                Game rules: <span className="summaryRules">{stateValue}</span>{" "}
                category with{" "}
                <span className="summaryRules">{handleRounds}</span> rounds!
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
