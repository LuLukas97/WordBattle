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
  const mix = ["M", "i", "x"];
  const random = ["R", "A", "N", "D", "O", "M"];

  const mixLetters = () => {
    return (
      <button onClick={() => handleClick("Mix")} className="row3">
        {mix.map((letter, index) => (
          <div className="box" key={index}>
            {letter}
          </div>
        ))}
      </button>
    );
  };

  const randomLetters = () => {
    return (
      <button onClick={() => handleClick("Random")} className="row6">
        {random.map((letter, index) => (
          <div className="box" key={index}>
            {letter}
          </div>
        ))}
      </button>
    );
  };

  return (
    <div>
      {mixLetters()}
      {randomLetters()}
    </div>
  );
};
export default HomePageTiles;
