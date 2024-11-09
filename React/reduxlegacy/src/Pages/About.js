import { useSelector } from "react-redux";

export const About = () => {
  const { balance, name } = useSelector((state) => state.bankReducer);
  return (
    <>
      <h1>About</h1>
      <h1>Balance from Store {balance}</h1>
    </>
  );
};
