import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // [state, setState] = useState(initialValue)

  const [advice, setAdvice] = useState("Advices show hongi");
  const [darkThemeHandler, setDarkThemeHandler] = useState(false);
  const [counter, setCounter] = useState(0);

  async function adviceLaao() {
    // //api call karwaounga
    const data = await fetch("https://api.adviceSlip.com/advice");

    // //api json
    const {
      slip: { advice: adviceFromApi },
    } = await data.json();

    // //api response ko ek state main store karungaٓ
    setAdvice(adviceFromApi);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setDarkThemeHandler(!darkThemeHandler);
  }

  useEffect(() => {
    //jesay hi component load hoga wesay hi useEffect chaleyga
    console.log("explore kar raha hun useEffect k ander");
    adviceLaao();
  }, []);
  
  return (
    <div
      style={{
        backgroundColor: darkThemeHandler ? "black" : "white",
        color: darkThemeHandler ? "white" : "black",
      }}
    >
      <h1>{advice}</h1>
      <button onClick={adviceLaao}>Click karo advice pao</button>
      <p>Ab tak aap ne {counter} dafa advices parh li hain</p>
    </div>
  ); //JSX
}

export default App;