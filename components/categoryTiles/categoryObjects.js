import { useEffect, useState, React } from "react";

const categoryObjects = ({ onStateUpdate }) => {
  const [handleCategory, setHandleCategory] = useState();

  const selectCategory = async (id) => {
    setShowLetters(true);
    setHandleCategory(id);
  };
  const handleClick = (value) => {
    onStateUpdate(value);
  };

  const objects = ["O", "B", "J", "E", "C", "T", "S"];

  const mixLetters = () => {
    return (
      <div>
        {/*         <div className="category-flex tools"> */}
        {/* Add the category-flex class to the parent div */}
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

  return <div>{mixLetters()}</div>;
};
export default categoryObjects;
