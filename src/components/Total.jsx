import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";

const Total = () => {
  const state = useContext(GlobalContext);

  const totalTransaction = state.transactions.length;

  return (
    <div>
      <h2> {totalTransaction}</h2>
      <p>Total Transaction</p>
    </div>
  );
};
export default Total;
