import logo from "./logo.svg";
import "./App.css";
import { createContext } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Portfolio } from "./Pages/Portfolio";
import { Contact } from "./Pages/Contact";

function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </Provider>
    </>
  );
}

export default App;
