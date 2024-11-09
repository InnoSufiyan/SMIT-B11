import { useDispatch, useSelector } from "react-redux";
import { constants, deposit, widthdraw } from "../redux/constants";

export const Contact = () => {
  const dispatch = useDispatch();
  const { name, balance } = useSelector((state) => state.bankReducer);

  const depositHandler = () => {
    console.log("==>> deposit");
    dispatch({
      type: constants.deposit,
      payload: 5000,
    });
  };
  const withdrawHandler = () => {
    console.log("==>> withdraw");
    dispatch({
      type: constants.withdraw,
      payload: 500,
    });
  };

  return (
    <>
      <h1>Account Balance: {balance}</h1>
      <button onClick={depositHandler}>Deposit</button>
      <button onClick={withdrawHandler}>withdraw</button>
    </>
  );
};
