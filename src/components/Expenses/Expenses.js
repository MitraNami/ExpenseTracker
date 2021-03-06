import { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const { items } = props;

  const [year, setYear] = useState("2021");

  const filteredExpenses = items.filter(
    (item) => item.date.getFullYear().toString() === year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectYear={setYear} selectedYear={year} />
      <ExpensesChart items={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
