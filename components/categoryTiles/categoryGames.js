import { useEffect, useState, React } from "react";

const categoryGames = ({ onStateUpdate }) => {
  const [handleCategory, setHandleCategory] = useState();

  const selectCategory = async (id) => {
    setShowLetters(true);
    setHandleCategory(id);
  };
  const handleClick = (value) => {
    onStateUpdate(value);
  };

  const games = ["G", "A", "M", "E", "S"];

  const mixLetters = () => {
    return (
      <div>
        {/*         <div className="category-flex tools"> */}
        {/* Add the category-flex class to the parent div */}
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

  return <div>{mixLetters()}</div>;
};
export default categoryGames;
