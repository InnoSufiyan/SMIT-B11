import { useState } from "react";
import "./App.css";

const Form = ({ itemList, setItemList }) => {
  const [inputText, setInputText] = useState("");
  const [itemNumber, setItemNumber] = useState(0);

  const addHandler = () => {
    const myList = [...itemList];
    myList.push({
      inputText,
      itemNumber,
    });
    setItemList(myList);
  };

  return (
    <div className="form">
      {/* text */}
      <p>Kya kya chahiye hai trip k liye??</p>

      {/* dropdown */}
      <select onChange={(e) => setItemNumber(e.target.value)}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem) => (
          <option>{elem}</option>
        ))}
      </select>

      {/* input */}
      <input
        onChange={(e) => setInputText(e.target.value)}
        placeholder="items you need"
        value={inputText}
      />

      {/* button */}
      <button onClick={addHandler}>Add</button>
    </div>
  );
};

export default Form;
