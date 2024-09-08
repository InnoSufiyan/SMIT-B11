import logo from "./logo.svg";
import "./App.css";
import { getAllData, getSingleData } from "./data";
import { Recipe } from "./Recipe.js";

function App() {
  const recipes = [
    {
      id: 1,
      title: "Biryani",
      img: "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4=",
      description: "Bht piyari biryani",
      stock: 5,
    },
    {
      id: 2,
      title: "Nihari",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNboeupuKaxNBPAXC8JuBPWp3NFVmO5K9IAA&s",
      description: "Bht piyari Nihari",
      stock: null,
    },
    {
      id: 3,
      title: "daal chawal",
      img: "https://www.masala.tv/wp-content/uploads/2019/11/Daal-Chawal.jpg",
      description: "Bht piyarey daal chawal",
      stock: 20,
    },
    {
      id: 4,
      title: "Chinese",
      img: "https://i.ytimg.com/vi/nDGBYktRSKQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA9kJxMKMem_-p2X9y4ooPltI_cwg",
      description: "Bht piyari Chinese",
      stock: 0,
    },
    {
      id: 5,
      title: "Mandi",
      img: "https://i0.wp.com/kabsaexpress.com/wp-content/uploads/2023/06/Mutton-Mandi-%D9%85%D9%B9%D9%86-%D9%85%D9%86%D8%AF%DB%8C.jpg?fit=1800%2C1232&ssl=1",
      description: "Bht piyari Mandi",
      stock: 2,
    },
    {
      id: 6,
      title: "Karahi",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mkNvgBKVcWLgHUxleKosq6Qd5m8x5zMGJQ&s",
      description: "Bht piyari Karahi",
      stock: 4,
    },
  ];

  return (
    <div>
      <Header />
      <Para />
      <Button text="sufiyan" bgColor="green" />
      <Button text="two" bgColor="blue" />
      <Button text="three" />
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default App;

function Button({ text, bgColor }) {
  return (
    <button
      style={{
        backgroundColor: bgColor || "yellow",
      }}
    >
      {text}
    </button>
  );
}

function Header() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Inno - chef
      </h1>
    </div>
  );
}

function Para() {
  return <p>Meray Resturant ka Menu</p>;
}

function RecipesList({ recipes }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {recipes
        ?.filter((dish) => dish.stock > 3)
        ?.map((dish) => (
          <Recipe dish={dish} /> //recipe(dish)
        ))}
    </div>
  );
}
