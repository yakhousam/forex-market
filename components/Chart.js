import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const Chart = ({chartData}) => {
  console.log('chartdata =', chartData)
  const svgRef = useRef();
  // const arr = [...props]

  useEffect(() => {
    const margin = {top: 20, right: 20, bottom: 20, left: 50  }
    const width = svgRef.current.clientWidth - margin.left - margin.right ;
    const height = svgRef.current.clientHeight - margin.top - margin.bottom;
   
    console.log("width, height", width, height);
    const svg = d3.select(svgRef.current);
    //clean the svg element
    svg.selectAll('*').remove();
   

    let x = d3
      .scaleLinear()
      .domain([0, chartData.length])
      .range([0, width]);
    svg
      .append("g")
      .style("stroke", "orange")
      .attr("transform", `translate(${margin.left}, ${height} )`)
      .call(d3.axisBottom(x));

    let y = d3
      .scaleLinear()
      .domain([
        d3.min(chartData.map(el => el[3])),
        d3.max(chartData.map(el => el[2]))
      ])
      .range([height, 0]);
    svg
      .append("g")
      .attr("stroke", "orange")
      .attr("transform", `translate(${margin.left})`)
      .call(d3.axisLeft(y));

    svg
      .append('g')
      .attr("transform", `translate(${margin.left})`)
      .append("path")
      .datum(chartData)
      .attr("fill", "none")
      .attr("stroke", "#6de576")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .line()
          .x((d, i) => {
            return x(i);
          })
          .y(d => {
            return y(d[4]);
          })
      );
  }, [chartData]);

 
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
