import logo from "./logo.svg";
import "./App.css";
import { getAllData, getSingleData } from "./data";

function App() {
  // const {
  //   title,
  //   id,
  //   author,
  //   khuwahishOfNumberOfShadis: [first, ...otherBiwis],
  // } = getSingleData(3);

  const singleData = getSingleData(2);

  console.log(singleData?.timeOfShadi?.year);   //undefined ->> year

  return <div>Hamara Project</div>;
}

export default App;
