import { useState, useRef, useReducer } from "react";
import Data from "./assets/Uitls/Data.json";
import newTransaction from "./assets/Uitls/newData";
import "./App.css";
import Income from "./components/Income.jsx";
import Expense from "./components/Expense.jsx";
import Balance from "./components/Balance.jsx";
import Total from "./components/Total.jsx";
import AddTransaction from "./components/AddTransaction.jsx";
import TransactionList from "./components/TransactionList.jsx";
import EditTransaction from "./components/EditTransaction.jsx";

function reducer(state, action) {
  switch (action.type) {
    case "DELETE_ITEM": {
      const tempTransaction = state.transactions.filter((item) => item.id != action.payload);
      return {
        ...state,
        transactions: [...tempTransaction],
      };
    }

    case "SUBMIT": {
      const amount = Number(action.payload.amount);
      if (amount && amount > 0) {
        newTransaction.category = action.payload.category;
        newTransaction.amount = amount;
        newTransaction.type = action.payload.type;
        return {
          ...state,
          transactions: [...state.transactions, newTransaction],
        };
      }
    }
  }
}

function App() {
  const inputRef = useRef(null);
  const categoryRef = useRef("Expense");
  const [state, dispatch] = useReducer(reducer, Data);

  function hanleSubmit(type) {
    dispatch({
      type: "SUBMIT",
      payload: { type: type, amount: inputRef.current.value, category: categoryRef.current },
    });
  }

  function handleItemDelete(id) {
    dispatch({
      type: "DELETE_ITEM",
      payload: id,
    });
  }

  function handleCategoryChange(e) {
    categoryRef.current = e.target.value;
  }

  return (
    <section className="card">
      <h1>expense tracker</h1>
      <div className="transaction-card">
        <Income data={state} />
        <Expense data={state} />
        <Balance data={state} />
        <Total data={state} />
      </div>
      <AddTransaction
        type={state.categories}
        ref={inputRef}
        oncategoryChange={handleCategoryChange}
        onSubmit={hanleSubmit}
      />
      <TransactionList list={state.transactions} deleteItem={handleItemDelete} />
    </section>
  );
}

export default App;
