import { useContext, useRef, useReducer } from "react";
import Data from "./assets/Uitls/Data.json";
import "./App.css";
import Income from "./components/Income.jsx";
import Expense from "./components/Expense.jsx";
import Balance from "./components/Balance.jsx";
import Total from "./components/Total.jsx";
import AddTransaction from "./components/AddTransaction.jsx";
import TransactionList from "./components/TransactionList.jsx";
import GlobalContext from "./Context/GlobalContext.js";

// Reducer function of UseReducer
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
      const today = new Date();

      const AMOUNT = Number(action.payload.amount);
      const CATEGORY = action.payload.category;
      const TYPE = action.payload.type;
      const ID = Math.floor(Math.random() * 10000);

      const newItem = {
        id: ID,
        amount: AMOUNT,
        category: CATEGORY,
        type: TYPE,
        date: today.toLocaleDateString(),
      };

      return {
        ...state,
        transactions: [...state.transactions, newItem],
      };
    }
  }
}

function App() {
  const inputRef = useRef(null);
  const categoryRef = useRef("Expense");
  const [state, dispatch] = useReducer(reducer, Data);

  console.log(...state.transactions);

  // adding transaction
  function hanleSubmit(type) {
    if (inputRef.current.value > 0) {
      dispatch({
        type: "SUBMIT",
        payload: { type: type, amount: inputRef.current.value, category: categoryRef.current },
      });
    }
  }

  // deleting transaction
  function handleItemDelete(id) {
    dispatch({
      type: "DELETE_ITEM",
      payload: id,
    });
  }

  // handling income/expense category change
  function handleCategoryChange(e) {
    categoryRef.current = e.target.value;
  }

  return (
    <section className="card">
      <GlobalContext.Provider value={state}>
        <h1>Expense Tracker</h1>
        <div className="transaction-card">
          <Income />
          <Expense />
          <Balance />
          <Total />
        </div>
        <AddTransaction
          ref={inputRef}
          oncategoryChange={handleCategoryChange}
          onSubmit={hanleSubmit}
        />
        <TransactionList list={state?.transactions} deleteItem={handleItemDelete} />
      </GlobalContext.Provider>
    </section>
  );
}

export default App;
