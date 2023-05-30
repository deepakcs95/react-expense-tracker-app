const Income = ({ data }) => {
  const incomeFunction = () => {
    let Totalincome = 0;
    data.transactions.forEach((transaction) => {
      if (transaction.category === "Income") {
        Totalincome += transaction.amount;
      }
    });
    return Totalincome;
  };

  const income = incomeFunction();

  return (
    <div>
      <h2>$ {income}</h2>
      <p>Income</p>
    </div>
  );
};

export default Income;
