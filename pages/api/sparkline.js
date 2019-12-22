import fetch from "isomorphic-unfetch";


export default async (req, res) => {
  const {symbol} =  req.query;
  console.log('req =', req.query)
  const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1m&limit=500`
  console.log(url)
  try {
    // const response = await fetch(
    //   `https://api.nomics.com/v1/currencies/sparkline?key=${key}&start=${start}`
    // );
    const response = await fetch(url)
    if (response.status === 200) {
      const json = await response.json();
      console.log("json =", json);
     
      res.status(200).json(json);
    }else{
      res.status(response.status).end()
    }
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};
