import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";

const Expense = () => {
  // console.log("expense");
  const state = useContext(GlobalContext);

  const expenseFunction = () => {
    let TotalExpense = 0;
    state.transactions.forEach((transaction) => {
      if (transaction.category === "Expense") {
        TotalExpense += transaction.amount;
      }
    });
    return TotalExpense;
  };

  const expense = expenseFunction();

  return (
    <div>
      <h2>$ {expense}</h2>
      <p>Expense</p>
    </div>
  );
};
export default Expense;
