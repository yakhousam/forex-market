import React from "react";
import CurrencyRow from "../components/CurrencyRow";

const Sidebare = ({ currencies = [] }) => {
  const currenciesArr = currencies.map(currency => {
    return <CurrencyRow {...currency} />;
  });
  return (
    <div>
      {currenciesArr}
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
