import { useState, useEffect } from "react";
import EditTransaction from "./EditTransaction.jsx";

const TransactionList = ({ list, deleteItem }) => {
  const [editBox, setEditBox] = useState({ show: false, id: null });

  return (
    <div
      onClick={(e) => {
        if (!editBox.show) {
          const item = e.target.closest(".transaction-list");
          const key = item.getAttribute("itemkey");

          setEditBox({ show: true, id: key });
        }
      }}
    >
      {list.map((item) => {
        return (
          <div
            itemkey={item.id}
            key={item.id}
            className={item.category === "Expense" ? "transaction-list" : "transaction-list income"}
          >
            <p>{item.category}</p>
            <p>$ {item.amount}</p>
            <p>{item.type}</p>
            <p>{item.date}</p>
          </div>
        );
      })}
    </div>
  );
};
export default TransactionList;
