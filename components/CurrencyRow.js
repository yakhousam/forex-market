import React from "react";
import fetch from "isomorphic-unfetch";

const CurrencyRow = ({
  name,
  price,
  logo_url,
  currency,
  setChartData
}) => {
  let formatPrice = parseFloat(price);
  formatPrice =
    formatPrice < 1
      ? formatPrice.toFixed(6)
      : formatPrice < 10
      ? formatPrice.toFixed(4)
      : formatPrice.toFixed(2);

  const getSparkline = async () => {
    try {
      const res = await fetch('api/sparkline');
      console.log('res status =', res.status)
      if (res.status === 200) {
        const json = await res.json();
        console.log("json =", json);
       
        setChartData(json);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="price-row" >
      <img src={logo_url} />
      <div className="name">{name}</div>
      <div className="price">${formatPrice}</div>
      <style jsx>{`
        .price-row {
          display: flex;
          border: thin solid black;
          align-items: center;
          padding: 5px;
        }
        .price {
          flex: 1;
          text-align: right;
        }
        .name {
          flex: 1;
        }
        img {
          height: 40px;
          width: 40px;
          margin-right: 5px;
        }
      `}</style>
    </div>
  );
};

export default CurrencyRow;
