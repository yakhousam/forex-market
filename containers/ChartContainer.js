import React from "react";
import Chart from "../components/Chart";

const ChartContainer = ({ chartData, setUpdateChartData}) => {
 

 

  return (
    <div>
      <Chart chartData={chartData} />
      <style jsx>{`
        div {
          grid-row: 2;
          grid-column: 2;
          border: solid black thin;
          background-color: #1e3b4b;
          padding-top: 20px;
         
          overflow: auto;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default ChartContainer;
