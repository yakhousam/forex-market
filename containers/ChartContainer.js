import React from "react";
import Chart from '../components/Chart'

const ChartContainer = ({chartData, setChartData}) => {
  
  return (
    <div>
      <button
      onClick={() => {
        setChartData([...chartData ,[0,6500,6460,6520,6520]])
      }}
      
      >click me</button>
      <Chart chartData={chartData} />
      <style jsx>{`
       div{
        grid-row: 2;
        grid-column: 2;
        border: solid black thin;
        background-color: #1e3b4b;
        padding-top: 20px;
        overflow-y: hidden;
        overflow-x: auto;
        position: relative;
       }
      `}</style>
    </div>
  );
};

export default ChartContainer;
