import React, { Component } from "react";
import { scaleLinear } from "d3-scale";
import { max, histogram } from "d3-array";
import { select } from "d3-selection";
import { tsvParse } from "d3-dsv";
import axios from "axios";
import { parse } from "querystring";
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
        app_num: +d.app_num_encoded,
        edu: d.edu_encoded
      };
    };

    var plot = rawData => {
      let hist = histogram().value(d => d.app_num);
      let bins = hist(rawData);
      console.log(bins);
    };

    axios
      .get("survey_res.tsv")
      .then(r => {
        return r.data;
      })
      .then(data => {
        return tsvParse(data, data => {
          var parsed = typeConvert(data);
          return parsed;
        });
      })
      .then(rawData => plot(rawData));
  }

  render() {
    return <svg ref={node => (this.node = node)} width={500} height={500} />;
  }
}

export default MedianAppChart;
