import { useEffect, useState, React } from "react";

const categoryFood = ({ onStateUpdate }) => {
  const [handleCategory, setHandleCategory] = useState();

  const selectCategory = async (id) => {
    setShowLetters(true);
    setHandleCategory(id);
  };
  const handleClick = (value) => {
    onStateUpdate(value);
  };

  const food = ["F", "O", "O", "D"];

  const mixLetters = () => {
    return (
      <div>
        {/*         <div className="category-flex tools"> */}
        {/* Add the category-flex class to the parent div */}
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

  return <div>{mixLetters()}</div>;
};
export default categoryFood;
