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
        <Tab text="Rashid" key="rashid" />
      ) : counter == 2 ? (
        <Tab text="Danish" key="danish" />
      ) : (
        <Tab text="Khalid" key="khalid" />
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
  const [khana, setKhana] = useState(false);

  function likeHandler() {
    setLikes((likes) => likes + 1); // 0
    setLikes((likes) => likes + 5); // 0
    setLikes((likes) => likes + 15); // 0
    console.log(likes, "==>> likes");
  }

  function khanaHandler() {
    setKhana(true);
  }

  console.log("==>> main hun tab k baahir wala console.log ", likes);

  return (
    <>
      <h1>{`Main ek ${text} hun`}</h1>
      <p>{likes} likes on this post</p>
      <button onClick={likeHandler}>Like this post</button>
      {khana ? (
        <p>Khana khaa chukay ho baar baar nai aao</p>
      ) : (
        <p>Khana khaogey ??</p>
      )}
      <button onClick={khanaHandler}>Kha liya</button>
    </>
  );
};
