import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const Chart = ({ chartData }) => {
  console.log("chartdata =", chartData);
  const svgRef = useRef();
  // const arr = [...props]

  useEffect(() => {
    const margin = { top: 20, right: 20, bottom: 20, left: 50 };
    const width =
      chartData.length * 10 ||
      svgRef.current.clientWidth - margin.left - margin.right;
    const height = svgRef.current.clientHeight - margin.top - margin.bottom;

    console.log("width, height", width, height);
    const svg = d3.select(svgRef.current).attr("width", width);
    //clean the svg element
    // svg.selectAll("*").remove();

    // x = d3.scaleBand()
    // .domain(d3.timeDay
    //     .range(data[0].date, +data[data.length - 1].date + 1)
    //     .filter(d => d.getDay() !== 0 && d.getDay() !== 6))
    // .range([margin.left, width - margin.right])
    // .padding(0.2)

    let x = d3
      .scaleLinear()
      .domain([0, chartData.length])
      .range([0, width]);
    // svg
    //   .append("g")
    //   .style("stroke", "orange")
    //   .attr("transform", `translate(${margin.left}, ${height} )`)
    //   .call(d3.axisBottom(x));

    let y = d3
      .scaleLinear()
      .domain([
        d3.min(chartData.map(el => el[3])) / 1.01,
        d3.max(chartData.map(el => el[2]))
      ])
      .range([height, 0]);
    // svg
    //   .append("g")
    //   .attr("stroke", "orange")
    //   .attr("transform", `translate(${margin.left})`)
    //   .call(d3.axisLeft(y));

    // var circle = svg.selectAll("circle").data(data);

    // circle.exit().remove();

    // circle
    //   .enter()
    //   .append("circle")
    //   .attr("r", 2.5)
    //   .merge(circle)
    //   .attr("cx", function(d) {
    //     return d.x;
    //   })
    //   .attr("cy", function(d) {
    //     return d.y;
    //   });

    const candle = svg.selectAll(".candle").data(chartData);

    candle.exit().remove();

    const enter = candle
      .enter()
      .append("g")
      .attr("class", "candle")
      .attr("transform", (d, i) => {
        console.log("i =", i, margin.left + x(i));
        return `translate(${margin.left + x(i)})`;
      });

    enter
      .append("line")
      .attr("stroke", "white")
      .attr("y1", d => y(d[2]))
      .attr("y2", d => y(d[3]));

    enter
      .append("line")
      .attr("y1", d => y(d[1]))
      .attr("y2", d => y(d[4]))
      .attr("stroke", d =>
        d[1] > d[4]
          ? d3.schemeSet1[0]
          : d[4] > d[1]
          ? d3.schemeSet1[2]
          : d3.schemeSet1[8]
      )
      .attr("stroke-width", 10);

    candle.merge(candle);

    // svg
    //   .append('g')
    //   .attr("transform", `translate(${margin.left})`)
    //   .append("path")
    //   .datum(chartData)
    //   .attr("fill", "none")
    //   .attr("stroke", "#6de576")
    //   .attr("stroke-width", 1.5)
    //   .attr(
    //     "d",
    //     d3
    //       .line()
    //       .x((d, i) => {
    //         return x(i);
    //       })
    //       .y(d => {
    //         return y(d[4]);
    //       })
    //   );
    console.log("chart use effect....................");
    console.log("chart length =", chartData.length);
  }, [chartData, chartData.length]);

  return (
    <>
      <svg ref={svgRef} />
      <style jsx>{`
        svg {
          height: 100%;
          min-width: 100%;
        }
      `}</style>
    </>
  );
};

export default Chart;
