import { useEffect, useState, React } from "react";

const categoryMix = ({ onStateUpdate }) => {
  const [handleCategory, setHandleCategory] = useState();

  const selectCategory = async (id) => {
    setShowLetters(true);
    setHandleCategory(id);
  };
  const handleClick = (value) => {
    onStateUpdate(value);
  };

  const mix = ["M", "I", "X"];

  const mixLetters = () => {
    return (
      <div>
        {/*         <div className="category-flex tools"> */}
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

  return <div>{mixLetters()}</div>;
};
export default categoryMix;
