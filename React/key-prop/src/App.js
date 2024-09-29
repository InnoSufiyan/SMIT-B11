import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);

  const tabHandler = () => {
    console.log(counter, "===>> counter");
    if (counter > 2) {
      setCounter(1);
      return;
    }
    setCounter(counter + 1);
  };

  return (
    <>
      {counter == 1 ? (
        <Tab text="tab 1" />
      ) : counter == 2 ? (
        <Tab text="tab 2" />
      ) : (
        <Tab text="tab 3" />
      )}
      {/* <Tab text="tab 1" />
      <Tab text="tab 2" />
      <Tab text="tab 3" /> */}
      <button onClick={tabHandler}>Tab Changer</button>
    </>
  );
}

export default App;

const Tab = ({ text }) => {
  const [likes, setLikes] = useState(0);

  function likeHandler() {
    setLikes(likes + 1);
  }

  return (
    <>
      <h1>{`Main ek ${text} hun`}</h1>
      <p>{likes} likes on this post</p>
      <button onClick={likeHandler}>Like this post</button>
    </>
  );
};
