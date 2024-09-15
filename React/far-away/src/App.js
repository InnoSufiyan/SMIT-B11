import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import PackagingList from "./Components/PackagingList";
import Stats from "./Components/Stats";

function App() {
  const [itemList, setItemList] = useState([]);

  return (
    <div className="App">
      {/* Logo Component */}
      <Logo />

      {/* Form Component */}
      <Form itemList={itemList} setItemList={setItemList} />

      {/* PackagingList Component */}
      <PackagingList itemList={itemList} />

      {/* Stats Component */}
      <Stats itemList={itemList} />
    </div>
  );
}

export default App;
