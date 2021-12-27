import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const { items } = props;

  return (
    <div className="expenses">
      {items.map((item) => {
        const { id, title, amount, date } = item;
        return (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        );
      })}
    </div>
  );
};

export default Expenses;
