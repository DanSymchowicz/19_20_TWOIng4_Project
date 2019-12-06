import React, { Component } from 'react';
import './App.css';
import Chart from "react-apexcharts";

class RadarChart extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
        options: {
          chart: {
            dropShadow: {
              enabled: true,
              blur: 1,
              left: 1,
              top: 1
            },
          },
          labels: ['kitchen', 'livingRoom', 'bedroom', 'bathroom', 'entrance', 'general'],
          stroke: {
            width: 0
          },
          fill: {
            opacity: 0.4
          },
          markers: {
            size: 0
          }
        },
        series: [{
            name: 'Température',
            data: [80, 50, 30, 40, 100, 20],
        }, {
            name: 'Humidité',
            data: [20, 30, 40, 80, 20, 80],
        }, {
            name: 'Pollution air',
            data: [44, 76, 78, 13, 43, 10],
        }]
      }
    }

    render() {
      return (
        

          <div className="chart">
              <br></br>
            <h4 className="text-center">Répartition des données</h4>
            <h4 className="text-center">par pièce</h4>
            <br></br>
            <Chart className="element" options={this.state.options} series={this.state.series} type="radar" height="320" width="320"/>
          </div>
  

        );
      }
    }

export default RadarChart;