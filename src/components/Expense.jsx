const Expense = ({ data }) => {
  // console.log("expense");

  const expenseFunction = () => {
    let TotalExpense = 0;
    data.transactions.forEach((transaction) => {
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
