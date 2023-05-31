import { useState, useRef, useEffect } from "react";
import Data from "./assets/Uitls/Data.json";
import "./App.css";
import Income from "./components/Income.jsx";
import Expense from "./components/Expense.jsx";
import Balance from "./components/Balance.jsx";
import Total from "./components/Total.jsx";
import AddTransaction from "./components/AddTransaction.jsx";
import TransactionList from "./components/TransactionList.jsx";
// import dotenv from "dotenv";

function App() {
  const today = new Date();

  const newTransaction = {
    id: Math.floor(Math.random() * 10000),
    amount: 0,
    category: "Expense",
    type: "Salary",
    date: today.toLocaleDateString(),
    description: "Monthly salary",
  };

  const inputRef = useRef(null);
  const categoryRef = useRef("Expense");
  const [data, setData] = useState(Data);

  console.log(data.transactions[data.transactions.length - 1]);

  function hanleSubmit(type) {
    const amount = Number(inputRef.current.value);
    if (amount && amount > 0) {
      newTransaction.category = categoryRef.current;
      newTransaction.amount = amount;
      newTransaction.type = type;
      // console.log(newTransaction);
      setData({
        ...data,
        transactions: [...data.transactions, newTransaction],
      });
    }
  }

  function handleCategoryChange(e) {
    console.log(typeof e.target);
    categoryRef.current = e.target.value;
    console.log(categoryRef.current);
  }

  return (
    <section className="card">
      <h1>expense tracker</h1>
      <div className="transaction-card">
        <Income data={data} />
        <Expense data={data} />
        <Balance data={data} />
        <Total data={data} />
      </div>

      <AddTransaction
        type={data.categories}
        ref={inputRef}
        oncategoryChange={handleCategoryChange}
        onSubmit={hanleSubmit}
      />

      <TransactionList list={data.transactions} />
    </section>
  );
}

export default App;
