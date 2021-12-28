import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleChange = (evt) => {
    setNewExpense((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const expenseData = { ...newExpense, date: new Date(newExpense.date) };
    console.log(expenseData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controllers">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="title" onChange={handleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2020-12-31"
            name="date"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
