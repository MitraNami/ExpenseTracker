import "./ChartBar.css";

const ChartBar = (props) => {
  const { label, value, totalValue } = props;

  let barFillHeight = "0%";
  if (totalValue > 0) {
    barFillHeight = Math.round((value / totalValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="char-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
