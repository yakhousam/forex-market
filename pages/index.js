import React from "react";
import fetch from "isomorphic-unfetch";

function Page({ prices = [] }) {
  return <div>
    <h1>Cryptoasset Prices</h1>
        <p>
          This is a demo of the <a href="https://docs.nomics.com">Nomics Cryptoasset API</a>.
        </p>
        <table>
          <thead>
            <tr>
              <td>Symbol</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {prices.map((p) =>
              <tr key={p.currency}>
                <td>{p.currency}</td>
                <td>{p.price}</td>
              </tr>
            )}
          </tbody>
        </table>
  </div>
}

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.nomics.com/v1/prices?key=4d2553a2b5a8f7c320ea1593e5d7ec92')
  console.log('res =', res.status)
  const data = await res.json()
  return { prices: data }
}

export default Page