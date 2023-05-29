import { useEffect, useState, React } from "react";

const HomePageTiles = ({ onStateUpdate }) => {
  const [handleCategory, setHandleCategory] = useState();

  const selectCategory = async (id) => {
    setShowLetters(true);
    setHandleCategory(id);
  };
  const handleClick = (value) => {
    onStateUpdate(value);
  };
  const mix = ["M", "I", "X"];
  const random = ["R", "A", "N", "D", "O", "M"];
  const food = ["F", "O", "O", "D"];
  const games = ["G", "A", "M", "E", "S"];
  const tools = ["T", "O", "O", "L", "S"];
  const objects = ["O", "B", "J", "E", "C", "T", "S"];

  const mixLetters = () => {
    return (
      <div className="category-flex">
        {/* Add the category-flex class to the parent div */}
        <button onClick={() => handleClick("Mix")} className="row3">
          {mix.map((letter, index) => (
            <div className="box3" key={index}>
              {letter}
            </div>
          ))}
        </button>
      </div>
    );
  };

  const randomLetters = () => {
    return (
      <div className="category-flex">
        <button onClick={() => handleClick("Random")} className="row6">
          {random.map((letter, index) => (
            <div className="box6" key={index}>
              {letter}
            </div>
          ))}
        </button>
      </div>
    );
  };
  const foodLetters = () => {
    return (
      <div className="category-flex">
        <button onClick={() => handleClick("Food")} className="row4">
          {food.map((letter, index) => (
            <div className="box4" key={index}>
              {letter}
            </div>
          ))}
        </button>
      </div>
    );
  };
  const gamesLetters = () => {
    return (
      <div className="category-flex">
        <button onClick={() => handleClick("Games")} className="row5">
          {games.map((letter, index) => (
            <div className="box5" key={index}>
              {letter}
            </div>
          ))}
        </button>
      </div>
    );
  };
  const toolsLetters = () => {
    return (
      <div className="category-flex">
        <button onClick={() => handleClick("Tools")} className="row5">
          {tools.map((letter, index) => (
            <div className="box5" key={index}>
              {letter}
            </div>
          ))}
        </button>
      </div>
    );
  };
  const objectLetters = () => {
    return (
      <div className="category-flex">
        <button onClick={() => handleClick("Objects")} className="row7">
          {objects.map((letter, index) => (
            <div className="box7" key={index}>
              {letter}
            </div>
          ))}
        </button>
      </div>
    );
  };

  return (
    <div>
      {mixLetters()}
      {randomLetters()}
      {foodLetters()}
      {gamesLetters()}
      {toolsLetters()}
      {objectLetters()}
    </div>
  );
};
export default HomePageTiles;
