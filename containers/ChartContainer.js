import React from "react";
import Chart from '../components/Chart'

const ChartContainer = (props) => {
  
  return (
    <div>
      <Chart {...props} />
      <style jsx>{`
        grid-row: 2;
        grid-column: 2;
        border: solid black thin;
        background-color: #1e3b4b;
        padding-top: 20px;
      `}</style>
    </div>
  );
};

export default ChartContainer;
