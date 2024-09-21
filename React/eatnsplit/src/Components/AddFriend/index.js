import { useState } from "react";

const AddFriend = ({ friends, setFriends }) => {
  const [name, setName] = useState("");
  const [img, setImage] = useState("");

  const addHandler = () => {
    console.log(name, img);
    const friendsCopy = [...friends];
    friendsCopy.push({
      name: name,
      img: img,
      payment: 0,
    });
    setFriends(friendsCopy);
    setName("");
    setImage("");
  };

  return (
    <>
      <div>
        <h1>Name</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="name"
          type="text"
        />
      </div>
      <div>
        <h1>Image</h1>
        <input
          onChange={(e) => setImage(e.target.value)}
          value={img}
          placeholder="name"
          type="text"
        />
      </div>
      <button onClick={addHandler}>Add</button>
    </>
  );
};

export default AddFriend;
