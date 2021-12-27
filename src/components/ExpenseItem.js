import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { date, title, amount } = props;

  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price ">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
