import React, { Component } from "react";
import { scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { select } from "d3-selection";
import { csv } from "d3";
import survey from "./gg_survey_res.csv";

class MedianAppChart extends Component {
  constructor(props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }

  componentDidMount() {
    this.createBarChart();
  }

  componentDidUpdate() {
    this.createBarChart();
  }

  createBarChart() {
    var typeConvert = d => {
      return {
        app_num_encoded: parseFloat(d.app_num_encoded),
        edu_encoded: d.edu_encoded
      };
    };

    csv(survey, typeConvert, function(error, data) {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    });

    /*
    const node = this.node;
    const dataMax = max(data);
    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, this.props.size[1]]);

    const data = select(node)
      .selectAll("rect")
      .data(data);

    data.enter().append("rect");

    data.exit().remove();

    data
      .style("fill", "#fe9922")
      .attr("x", (d, i) => i * 25)
      .attr("y", d => this.props.size[1] - yScale(d))
      .attr("height", d => yScale(d))
      .attr("width", 25);
  */
  }

  render() {
    return <svg ref={node => (this.node = node)} width={500} height={500} />;
  }
}

export default MedianAppChart;
