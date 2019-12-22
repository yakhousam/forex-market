import React, { useState } from "react";
import PropTypes from 'prop-types'
import fetch from "isomorphic-unfetch";
import { Header, Sidebare, ChartContainer, Footer } from "../containers";

// eslint-disable-next-line react/prop-types
function Page({ currencies = [] }) {
  const [state, setState] = useState({
    currency: '',
    chartData:[]
  })
  const setChartData = (data) => {
    setState({...state, chartData:[...data]})
  }
  const setUpdateChartData = async(data) => {
    // console.log('chart container update........................................=', data)
    console.log('chartData length', state.chartData.length)
    if(state.chartData.length === 0) return
    console.log("--------------------comparaison-----------------",state.chartData.slice(-1)[0][0], data[0])
    if(state.chartData.slice(-1)[0][0] === data[0]){
      setState({...state, chartData:[...state.chartData.slice(0,-1),data]})
    }else{
      const chartdata = await getSparkline()
      console.log('new chartdata =', chartdata)
      setState({...state, chartData:[...chartdata,data]})
    }   
   
  }
  const getSparkline = async () => {
    try {
      const res = await fetch('api/sparkline');
      console.log('res status =', res.status)
      if (res.status === 200) {
        const json = await res.json();
        console.log("json =", json);
       
        return(json);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  
  return (
    <div className="grid-container">
      <Header />
      <Sidebare currencies={currencies} setChartData={setChartData} />
      <ChartContainer chartData={state.chartData}  setUpdateChartData={setUpdateChartData} />
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
Page.propTypes = {
  currencies: PropTypes.array
}

Page.getInitialProps = async () => {
  const currencies = 'BTC,ETH,XRP,LTC,BCH'
  const res = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=4d2553a2b5a8f7c320ea1593e5d7ec92&ids=${currencies}`)
  console.log("res =", res.status);
  const data = await res.json();
  return { currencies: data };
};

export default Page;
