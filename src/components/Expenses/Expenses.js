import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const { items } = props;

  const [year, setYear] = useState("2021");

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectYear={setYear} selectedYear={year} />
      {items
        .filter((item) => item.date.getFullYear().toString() === year)
        .map((item) => {
          const { id, title, amount, date } = item;
          return (
            <ExpenseItem key={id} title={title} amount={amount} date={date} />
          );
        })}
    </Card>
  );
};

export default Expenses;
