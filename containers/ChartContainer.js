import React from "react";

const ChartContainer = ({currency, prices=[], timestamps=[]}) => {
  console.log('currency =', currency)
  console.log('prices =', prices)
  console.log('timestamps =', timestamps)
  return (
    <div>
      ChartContainer
      <style jsx>{`
        grid-row: 2;
        grid-column: 2;
        border: solid black thin;
        background-color: #1e3b4b;
      `}</style>
    </div>
  );
};

export default ChartContainer;
