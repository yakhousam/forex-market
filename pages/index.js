import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import { Header, Sidebare, ChartContainer, Footer } from "../containers";

function Page({ currencies = [] }) {
  const [state, setState] = useState({
    currency: '',
    chartData: {}
  })
  const setChartData = (data) => {
    setState({...state, chartData:{...data}})
  }
  
  return (
    <div className="grid-container">
      <Header />
      <Sidebare currencies={currencies} setChartData={setChartData} />
      <ChartContainer />
      <Footer />
      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template: 80px 1fr 50px / 300px 1fr;
          height: 100vh;
          background-color: #1d3341;
        }
      `}</style>
      <style global jsx>{`
        html, body{
          margin: 0;
          padding: 0;
        }
        *{
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

Page.getInitialProps = async ({ req }) => {
  const currencies = 'BTC,ETH,XRP,LTC,BCH'
  const res = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=4d2553a2b5a8f7c320ea1593e5d7ec92&ids=${currencies}`)
  console.log("res =", res.status);
  const data = await res.json();
  return { currencies: data };
};

export default Page;
