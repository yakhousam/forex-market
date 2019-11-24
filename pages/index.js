import React from "react";
import fetch from "isomorphic-unfetch";
import { Header, Sidebare, ChartContainer, Footer } from "../containers";

function Page({ prices = [] }) {
  return (
    <div>
      <Header />
      <Sidebare />
      <ChartContainer />
      <Footer />
    </div>
  );
}

Page.getInitialProps = async ({ req }) => {
  // const res = await fetch('https://api.nomics.com/v1/prices?key=4d2553a2b5a8f7c320ea1593e5d7ec92')
  // console.log("res =", res.status);
  // const data = await res.json();
  return { prices: 'data' };
};

export default Page;
