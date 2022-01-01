import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const { dataPoints, totalValue } = props;
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        const { label, value } = dataPoint;
        return (
          <ChartBar
            key={label}
            label={label}
            value={value}
            totalValue={totalValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
