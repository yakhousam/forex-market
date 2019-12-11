import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import * as d3 from "d3";

const Chart = ({ currency, prices = [], timestamps = [] }) => {
  const svgRef = useRef();
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  useLayoutEffect(() => {
    console.log('uselayout effect')
    setWidth(svgRef.current.clientWidth);
    setHeight(svgRef.current.clientHeight);
  },[svgRef.current])
  useEffect(() => {
    console.log('width, height', width, height)
    const svg = d3.select(svgRef.current);
    // svg.append("g").attr("transform", "translate(10px, 10px)");
  
    let x = d3
      .scaleLinear()
      .domain([0, timestamps.length])
      .range([0, width]);
    svg
      .append("g")
      .style("stroke", "orange")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    let y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(prices, function(d) {
          return +d.value;
        })
      ])
      .range([height, 0]);
    svg
      .append("g")
      .attr("stroke", "orange")
      .call(d3.axisLeft(y));
  },[height, width]);

  console.log("currency =", currency);
  console.log("prices =", prices);
  console.log("timestamps =", timestamps);
  return (
    <>
      <svg ref={svgRef} />
      <style jsx>{`
        svg {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default Chart;
