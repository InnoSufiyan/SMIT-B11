import "./App.css";

const Friends = ({ friends, setSelectedFriend }) => {
  return (
    <>
      {friends.map((frnd) => (
        <Friend detail={frnd} setSelectedFriend={setSelectedFriend} />
      ))}
    </>
  );
};

export default Friends;

const Friend = ({ detail, setSelectedFriend }) => {
  const selectHandler = () => {
    setSelectedFriend(detail);
  };

  return (
    <div className="mainFriend">
      <div className="image">
        <img src={detail.img} />
      </div>
      <div>
        <h1>{detail.name}</h1>
        <p>{detail.payment}</p>
      </div>
      <button onClick={selectHandler}>Select</button>
    </div>
  );
};
