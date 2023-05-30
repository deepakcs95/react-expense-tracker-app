const Total = ({ data }) => {
  const totalTransaction = data.transactions.length;

  return (
    <div>
      <h2> {totalTransaction}</h2>
      <p>Total Transaction</p>
    </div>
  );
};
export default Total;
