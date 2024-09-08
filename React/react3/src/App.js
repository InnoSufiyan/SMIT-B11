import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);

  function nextHandler() {
    setCounter(counter + 1);
  }
  function previousHandler() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <p
          style={{
            backgroundColor: counter == 1 ? "blue" : "white",
            border: "black",
            padding: "5px",
            color: counter == 1 ? "white" : "black",
          }}
        >
          1
        </p>
        <p
          style={{
            backgroundColor: counter == 2 ? "blue" : "white",
            border: "black",
            padding: "5px",
            color: counter == 2 ? "white" : "black",
          }}
        >
          2
        </p>
        <p
          style={{
            backgroundColor: counter == 3 ? "blue" : "white",
            border: "black",
            padding: "5px",
            color: counter == 3 ? "white" : "black",
          }}
        >
          3
        </p>
      </div>
      <button onClick={previousHandler}>Previous</button>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
}

export default App;
