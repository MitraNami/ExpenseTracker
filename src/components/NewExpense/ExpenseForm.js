import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const { onAddNewExpense, onCloseForm } = props;

  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (evt) => {
    setNewExpense((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    for (const key of Object.keys(newExpense)) {
      if (newExpense[key] === "") {
        setError(true);
        return;
      }
    }
    // Because you close the ExpenseForm component after passing
    // the data it's not necessary to reset the error state
    // setError(false);
    const expenseData = {
      id: Math.random().toString(),
      ...newExpense,
      amount: Number(newExpense.amount),
      date: new Date(newExpense.date),
    };
    onAddNewExpense(expenseData);
    // setNewExpense({ title: "", amount: "", date: "" });
    onCloseForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controllers">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={newExpense.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            onChange={handleChange}
            value={newExpense.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            onChange={handleChange}
            value={newExpense.date}
          />
        </div>
        {error && <div className="error">⚠️All fields must be filled!</div>}
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCloseForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
