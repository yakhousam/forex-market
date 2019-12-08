import React from "react";
import PriceRow from "../components/PriceRow";

const Sidebare = ({ prices = [] }) => {
  const pricesArr = prices.map(p => {
    return <PriceRow {...p} />;
  });
  return (
    <div>
      {pricesArr}
      <style jsx>{`
        grid-row: 2;
        grid-column: 1;
        overflow: auto;
        background-color: #1e3b4b;
        scrollbar-color: #1e3b4b #1d3341;
        color: white;
      `}</style>
    </div>
  );
};

export default Sidebare;
