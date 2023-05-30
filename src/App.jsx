import { useState, useRef, useEffect } from "react";
import Data from "./assets/Uitls/Data.json";
import "./App.css";
import Income from "./components/Income.jsx";
import Expense from "./components/Expense.jsx";
import Balance from "./components/Balance.jsx";
import Total from "./components/Total.jsx";
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
  console.log(data);

  function hanleSubmit(e) {
    e.preventDefault();
    const amount = Number(inputRef.current.value);
    if (amount && amount > 0) {
      newTransaction.category = categoryRef.current.value;
      newTransaction.amount = amount;
      console.log(newTransaction);
      setData({
        ...data,
        transactions: [...data.transactions, newTransaction],
      });
    }
  }

  function handleCategoryChange(e) {
    categoryRef.current.value = e.target.value;
    console.log(categoryRef.current.value);
  }

  return (
    <>
      <section className="card">
        <h1>expense tracker</h1>
        <div className="transaction-card">
          <Income data={data} />
          <Expense data={data} />
          <Balance data={data} />
          <Total data={data} />
        </div>

        <div>
          <label htmlFor="input">Enter Amount</label>
          <input ref={inputRef} type="number" name="input" />
          <button onClick={(e) => hanleSubmit(e)}>Add</button>
          <div ref={categoryRef}>
            <input
              type="radio"
              name="category"
              value="Expense"
              defaultChecked
              onClick={(e) => handleCategoryChange(e)}
            />
            <label htmlFor="expense">Expense</label>
            <input
              type="radio"
              name="category"
              value="Income"
              onClick={(e) => handleCategoryChange(e)}
            />
            <label htmlFor="income">Income</label>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
