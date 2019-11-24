import React from "react";
import PriceRow from '../components/PriceRow'

const Sidebare = ({prices=[]}) => {
  const pricesArr = prices.map((p) => {
    return <PriceRow currency={p.currency.slice(0, 4)} price={p.price} />
  }
  )
  return (
    <div>
      {pricesArr}
      <style jsx>{`
        grid-row: 2;
        grid-column: 1;
        border: solid black thin;
        overflow: auto;
      `}</style>
    </div>
  );
};

export default Sidebare;
