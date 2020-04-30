import React from "react";

export function BarChart(props) {
  function renderBarChart() {
    if (props.visible) {
      return <h1>{props.value}</h1>;
    }
  }

  return <div>{renderBarChart()}</div>;
}

export default BarChart;
