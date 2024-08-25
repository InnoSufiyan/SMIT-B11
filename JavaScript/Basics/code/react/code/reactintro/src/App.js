import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //state kesay banti hai      -->> let advice = 'Rashid' -->> changes reflect hosakeyn is liye state banai hai
  const [advice, setAdvice] = useState("");

  async function adviceFetcher() {
    await fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.slip.advice);
        // const {
        //   slip: { advice },
        // } = res;
        // console.log(advice);

        setAdvice(res.slip.advice);
      });
  }
  return (
    <div>
      <h1>First Project</h1>
      <h1>{advice}</h1>
      <button onClick={adviceFetcher}>Advice le aao</button>
    </div>
  );
}

export default App;
