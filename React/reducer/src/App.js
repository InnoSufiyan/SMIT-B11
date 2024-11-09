import logo from "./logo.svg";
import "./App.css";
import { useEffect, useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "themeChanger":
      return { ...state, isDark: !state.isDark };
    case "filteration":
      return { ...state, filteration: action.payload };
    case "jobs":
      return { ...state, jobs: action.payload };
    case "categories":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}

const initialValue = {
  isDark: false,
  filteration: [],
  categories: [],
  jobs: [],
};

function App() {
  // const [counter, setCounter] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(()=> {
    //filteration api
    dispatch({
      type: 'filteration',
      payload: response
    })
    //categories api
    dispatch({
      type: 'categories',
      payload: response
    })
    //jobs api
    dispatch({
      type: 'jobs',
      payload: response
    })
  })

  return (
    <div
      className="App"
      style={{
        backgroundColor: state.isDark ? "black" : "white",
        color: state.isDark ? "white" : "black",
      }}
    >
      <button onClick={descriptionHandler}>Setting Description</button>
      <button onClick={() => dispatch({ type: "themeChanger" })}>
        Change Theme
      </button>
      <div>
        <button onClick={likeHandler}>Like</button>
        <h1>Likes {state.likes}</h1>
        <button onClick={disLikeHandler}>DisLike</button>
      </div>
      <h1>Heading {state.counter}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>

      <div>
        <input type="email" />
        <input type="password" />
        {state.isLoggedIn ? (
          <>
            <button onClick={logoutHandler}>Logout</button>
            <h1>Welcome to our website</h1>
          </>
        ) : (
          <button onClick={loginHandler}>Login</button>
        )}
      </div>
    </div>
  );
}

export default App;
