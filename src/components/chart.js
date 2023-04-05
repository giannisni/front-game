//import React, { Component } from 'react';
//import { Chart } from 'chart.js';
//
//
//class ChartComponent extends Component {
//  chartRef = React.createRef();
//
//  componentDidMount() {
//    this.buildChart();
//  }
//
//  componentWillUnmount() {
//    this.chart.destroy();
//  }
//
//  buildChart = () => {
//    const myChartRef = this.chartRef.current.getContext('2d');
//    const { data, options } = this.props;
//
//    this.chart = new Chart(myChartRef, {
//      type: 'line',
//      data: data,
//      options: options,
//    });
//  };
//
//  render() {
//    return <canvas id="myChart" ref={this.chartRef} />;
//  }
//}
//
//export default ChartComponent;
