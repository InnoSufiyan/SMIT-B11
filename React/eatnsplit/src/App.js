import logo from "./logo.svg";
import "./App.css";
import Friends from "./Components/Friends";
import AddFriend from "./Components/AddFriend";
import SplitBill from "./Components/SplitBill";
import { useState } from "react";

function App() {
  const [openAddFriend, setOpenAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, setFriends] = useState([
    {
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
      name: "Yasir",
      payment: 20,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbsB8JQHddPH1KvZYLJAUfjFJ5FTr9jd0wsn2mB968OxOaNP_IZSUEP_yo_Aii4GvQ9Zg&usqp=CAU",
      name: "Tanzeel",
      payment: -500,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiSOVbczZ77VRyMfk0ZqxmSKNg-4VRzunINHjAPtWn42U_WqoOnaur-d73kx-pP1EWV0w&usqp=CAU",
      name: "umer",
      payment: 0,
    },
  ]);

  const closeHandler = () => {
    setOpenAddFriend(false);
  };
  const openHandler = () => {
    setOpenAddFriend(true);
  };

  return (
    <div className="mainApp">
      <div
        style={{
          width: "50%",
        }}
      >
        <Friends friends={friends} setSelectedFriend={setSelectedFriend} />
        {openAddFriend && (
          <AddFriend friends={friends} setFriends={setFriends} />
        )}
        <div>
          {openAddFriend ? (
            <button onClick={closeHandler}>Close</button>
          ) : (
            <button onClick={openHandler}>Add Friend</button>
          )}
        </div>
      </div>
      <div
        style={{
          width: "50%",
        }}
      >
        {selectedFriend && (
          <SplitBill friends={friends} selectedFriend={selectedFriend} />
        )}
      </div>
    </div>
  );
}

export default App;
