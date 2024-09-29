import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Tab />
      <Tab />
      <Tab />
    </>
  );
}

export default App;

const Tab = () => {
  return (
    <>
      <h1>Tab Component hun main</h1>
    </>
  );
};
