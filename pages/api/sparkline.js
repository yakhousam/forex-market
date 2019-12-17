import fetch from "isomorphic-unfetch";


export default async (req, res) => {
  const key = "4d2553a2b5a8f7c320ea1593e5d7ec92&ids";
  const start = "2019-01-01T00:00:00Z";
  const url = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h'
  console.log(url)
  try {
    // const response = await fetch(
    //   `https://api.nomics.com/v1/currencies/sparkline?key=${key}&start=${start}`
    // );
    const response = await fetch(url)
    // if (response.status === 200) {
      const json = await response.json();
      console.log("json =", json);
     
      res.status(200).json(json);
    // }
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};
