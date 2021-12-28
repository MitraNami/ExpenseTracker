import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const { items } = props;

  return (
    <Card className="expenses">
      {items.map((item) => {
        const { id, title, amount, date } = item;
        return (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        );
      })}
    </Card>
  );
};

export default Expenses;
