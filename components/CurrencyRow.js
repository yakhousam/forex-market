import React from "react";
import fetch from "isomorphic-unfetch";

const PriceRow = ({
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
    const key = "4d2553a2b5a8f7c320ea1593e5d7ec92&ids";
    const start = "2019-12-11T00:00:00Z";
    try {
      const res = await fetch(
        `https://api.nomics.com/v1/currencies/sparkline?key=${key}&start=${start}`
      );
      if (res.status === 200) {
        const json = await res.json();
        console.log("json =", json);
        const sparkline = json.find(el => el.currency === currency);
        console.log("sparkline =", sparkline);
        setChartData(sparkline);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="price-row" onClick={getSparkline}>
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

export default PriceRow;
