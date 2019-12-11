import fetch from "isomorphic-unfetch";


export default async (req, res) => {
  const key = "4d2553a2b5a8f7c320ea1593e5d7ec92&ids";
  const start = "2019-12-11T00:00:00Z";
  try {
    const response = await fetch(
      `https://api.nomics.com/v1/currencies/sparkline?key=${key}&start=${start}`
    );
    if (response.status === 200) {
      const json = await response.json();
      // console.log("json =", json);
     
      res.status(200).json(json);
    }
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};
