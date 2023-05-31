import { useState, useEffect } from "react";

const TransactionList = ({ list, deleteItem }) => {
  return (
    <div>
      {list.map((item) => {
        return (
          <div
            key={item.id}
            className={item.category === "Expense" ? "transaction-list" : "transaction-list income"}
          >
            <p>{item.category}</p>
            <p>$ {item.amount}</p>
            <p>{item.type}</p>
            <p>{item.date}</p>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default TransactionList;
