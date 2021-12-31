import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const { onAddnewExpense } = props;

  const [isFormDisplayed, setIsFormDisplayed] = useState(false);

  const displayForm = () => setIsFormDisplayed(true);
  const closeForm = () => setIsFormDisplayed(false);

  return (
    <div className="new-expense">
      {isFormDisplayed ? (
        <ExpenseForm
          onAddNewExpense={onAddnewExpense}
          onCloseForm={closeForm}
        />
      ) : (
        <button onClick={displayForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
