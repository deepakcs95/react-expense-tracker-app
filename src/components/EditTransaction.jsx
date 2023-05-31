import { AiFillDelete } from "react-icons/Ai";

const EditTransaction = ({ id, data }) => {
  const item = data.filter((item) => item.id === id);
  console.log(item[0]);
  return (
    <div className="edit-transaction">
      <h2>
        Transaction details <AiFillDelete className="delete-icon" />
      </h2>
      <p>{item[0].category}</p>
      <p>$ {item[0].amount}</p>
      <p>{item[0].type}</p>
      <p>{item[0].date}</p>
    </div>
  );
};
export default EditTransaction;
