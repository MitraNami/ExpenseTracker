import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const { onAddnewExpense } = props;
  return (
    <div className="new-expense">
      <ExpenseForm onAddNewExpense={onAddnewExpense} />
    </div>
  );
};

export default NewExpense;
