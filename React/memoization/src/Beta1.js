import { memo, useEffect, useState } from "react";

function Beta1({ pappaState }) {
  console.log("===>> beta1 calling on chowk");
  console.log(17 * 17);
  const [productsArr, setProducts] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  useEffect(() => {}, []);
  return (
    <>
      <h1>
        Main hun Beta 1 <span>{pappaState}</span>
      </h1>
      {productsArr.map((prod) => {
        <h1>{prod}</h1>;
      })}
    </>
  );
}

export const Beta1 = memo(Beta1);
