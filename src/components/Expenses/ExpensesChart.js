import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const { items } = props;

  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Des", value: 0 },
  ];

  let totalValue = 0;
  for (const item of items) {
    const month = item.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[month].value += item.amount;
    totalValue += item.amount;
  }

  return <Chart dataPoints={chartDataPoints} totalValue={totalValue} />;
};

export default ExpensesChart;
