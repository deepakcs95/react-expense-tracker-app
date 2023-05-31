const today = new Date();

const newTransaction = {
  id: Math.floor(Math.random() * 10000),
  amount: 0,
  category: "Expense",
  type: "Salary",
  date: today.toLocaleDateString(),
  description: "Monthly salary",
};
export default newTransaction;
