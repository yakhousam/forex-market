import React from "react";
import PriceRow from "../components/PriceRow";

const Sidebare = ({ prices = [] }) => {
  const pricesArr = prices.map(p => {
    return <PriceRow key={p.currency} currency={p.currency.slice(0,4)} price={p.price} />;
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
      `}</style>
    </div>
  );
};

export default Sidebare;
