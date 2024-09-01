import logo from "./logo.svg";
import "./App.css";
import { getAllData, getSingleData } from "./data";
import { Recipe } from "./Recipe.js";

function App() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Inno - chef
      </h1>
      <p>Meray Resturant ka Menu</p>
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
    </div>
  );
}

export default App;
