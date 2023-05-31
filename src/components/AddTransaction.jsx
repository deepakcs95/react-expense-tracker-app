import { forwardRef, useRef, useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const AddTransaction = forwardRef(({ oncategoryChange, onSubmit }, ref) => {
  // ref used to get the category element
  const typeRef = useRef(null);
  const [typeofTransaction, setType] = useState("Expense");
  const state = useContext(GlobalContext);

  return (
    <div className="transaction-input">
      <form action="">
        <div className="text-input">
          <label htmlFor="input">Enter Amount</label>
          <input ref={ref} type="number" name="input" />
          <button
            onClick={(e) => {
              e.preventDefault();
              onSubmit(typeRef.current.value);
            }}
          >
            Add
          </button>
        </div>
        <div className="category-input">
          <input
            type="radio"
            name="category"
            value="Expense"
            defaultChecked
            required
            onClick={(e) => {
              oncategoryChange(e);
              setType("Expense");
            }}
          />
          <label htmlFor="expense">Expense</label>
          <input
            type="radio"
            name="category"
            value="Income"
            required
            onClick={(e) => {
              oncategoryChange(e);
              setType("Income");
            }}
          />
          <label htmlFor="income">Income</label>
          <select ref={typeRef} name="type" id="type" required>
            {state.categories[typeofTransaction].map((item) => (
              <option key={Math.random() * 100}>{item}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
});
export default AddTransaction;
