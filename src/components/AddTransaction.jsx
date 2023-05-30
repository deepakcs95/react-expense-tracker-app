import { forwardRef, useRef, useState } from "react";

const AddTransaction = forwardRef(({ oncategoryChange, onSubmit, type }, ref) => {
  const typeRef = useRef(null);
  const [typeofTransaction, setType] = useState("Expense");
  return (
    <div className="transaction-input">
      <form action="">
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
        <div>
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
        </div>
        <select ref={typeRef} name="type" id="type" required>
          {type[typeofTransaction].map((item) => (
            <option key={Math.random() * 100}>{item}</option>
          ))}
        </select>
        cake
      </form>
    </div>
  );
});
export default AddTransaction;
