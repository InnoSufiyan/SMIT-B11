import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function stepIncrementHandler() {
    setStep(step + 1);
  }
  function countIncrementHandler() {
    setCount(count + step);
  }

  const [currentDate, setCurrentDate] = useState(new Date());

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "September",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <StepCounter title="Step" value={step} setValue={stepIncrementHandler} />
      <StepCounter
        title="Count"
        value={count}
        setValue={countIncrementHandler}
      />
      <p>
        aaj sey {count} din baad, tareekh aur din hoga{" "}
      </p>
    </div>
  );
}




function StepCounter({ title, value, setValue }) {
  function incrementHandler() {
    setValue();
  }
  function decrementHandler() {}

  return (
    <div id="step" style={{ display: "flex" }}>
      <button onClick={incrementHandler}>+</button>
      <h1>
        {title}: {value}
      </h1>
      <button onClick={decrementHandler}>-</button>
    </div>
  );
}
