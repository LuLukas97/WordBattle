import { useEffect, useState, React } from "react";

const categoryTools = ({ onStateUpdate }) => {
  const [handleCategory, setHandleCategory] = useState();

  const selectCategory = async (id) => {
    setShowLetters(true);
    setHandleCategory(id);
  };
  const handleClick = (value) => {
    onStateUpdate(value);
  };

  const tools = ["T", "O", "O", "L", "S"];

  const mixLetters = () => {
    return (
      <div>
        {/*         <div className="category-flex tools"> */}
        {/* Add the category-flex class to the parent div */}
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

  return <div>{mixLetters()}</div>;
};
export default categoryTools;
