import React from "react";
import CurrencyRow from "../components/CurrencyRow";

const Sidebare = ({ currencies = [], setChartData }) => {
  const currenciesArr = currencies.sort((a, b) => a.name.localeCompare(b.name)).map(currency => {
    return <CurrencyRow {...currency} setChartData={setChartData} />;
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
