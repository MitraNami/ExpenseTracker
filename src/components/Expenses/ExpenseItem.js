import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const {
    date: expenseDate,
    title: expenseTitle,
    amount: expenseAmount,
  } = props;

  const [title, setTitle] = useState(expenseTitle);

  const clickHandler = () => {
    console.log("Clicked");
    setTitle("Title Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price ">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
