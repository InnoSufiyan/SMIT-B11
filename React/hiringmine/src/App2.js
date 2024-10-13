import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [statee, setStatee] = useState("a");
  console.log("==>> baahir wala");

  useEffect(() => {
    console.log("==>> useEffect wala");
    setStatee("b");

    //clean up
    return () => {
      console.log("==>>marney se pehley kalma parh raha hun");
    };
  }, [statee]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 className="alignCenter">HiringMine</h1>
    </div>
  );
}

export default App;
