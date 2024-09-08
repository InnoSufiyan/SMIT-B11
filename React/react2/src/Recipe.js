export function Recipe({ dish }) {
  console.log(dish);
  return (
    <div
      style={{
        display: "flex",
        width: "48%",
        backgroundColor: "lightgray",
        border: "2px solid black",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
        }}
      >
        <img
          style={{
            width: "100%",
          }}
          src={dish.img}
        />
      </div>
      <div>
        <h1>{dish.title}</h1>
        <p>{dish.description}</p>
        <button>{dish.stock ?? "out of stock"}</button>
      </div>
    </div>
  );
}
