import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const { items } = props;

  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No expenses!</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((item) => {
        const { id, title, amount, date } = item;
        return (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
