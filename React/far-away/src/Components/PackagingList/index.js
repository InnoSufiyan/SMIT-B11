import "./App.css";

const PackagingList = ({ itemList }) => {
  return (
    <div className="packaging">
      <div className="itemList">
        {itemList.map((item) => (
          <ItemList item={item} />
        ))}
      </div>
      <div>
        <select>
          {[1, 2, 3].map((elem) => (
            <option>{elem}</option>
          ))}
        </select>
        <button>Clear List</button>
      </div>
    </div>
  );
};

export default PackagingList;

const ItemList = ({ item }) => {
  return (
    <div className="item">
      <input type="checkbox" />
      <p>{item.itemNumber}</p>
      <p>{item.inputText}</p>
      <button>x</button>
    </div>
  );
};
