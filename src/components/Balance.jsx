const Balance = ({ data }) => {
  const balance = incomeAndExpense(data);
  return (
    <div>
      <h2>$ {balance}</h2>
      <p>Blance</p>
    </div>
  );
};
export default Balance;

function incomeAndExpense(data) {
  let Totalexpense = 0;
  let Totalincome = 0;
  data.transactions.forEach((transaction) => {
    if (transaction.category === "Expense") {
      Totalexpense += transaction.amount;
    } else if (transaction.category === "Income") {
      Totalincome += transaction.amount;
    }
  });
  return Totalincome - Totalexpense;
}
