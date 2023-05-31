import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";

const Income = () => {
  const state = useContext(GlobalContext);

  const incomeFunction = () => {
    let Totalincome = 0;
    state.transactions.forEach((transaction) => {
      if (transaction.category === "Income") {
        Totalincome += transaction.amount;
      }
    });
    return Totalincome;
  };

  // const income = "incomeFunction()";
  const income = incomeFunction();

  return (
    <div>
      <h2>$ {income}</h2>
      <p>Income</p>
    </div>
  );
};

export default Income;
