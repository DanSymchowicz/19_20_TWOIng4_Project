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
          labels: ['Big', 'Medium', 'Small'],
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
            data: [80, 50, 30],
        }, {
            name: 'Humidité',
            data: [20, 30, 40],
        }, {
            name: 'Pollution air',
            data: [44, 76, 78],
        }]
      }
    }

    render() {
      return (
        

          <div className="chart">
              <br></br>
            <h4 className="text-center">Répartition des tailles de</h4>
            <h4 className="text-center">pièce parmis les users</h4>
            <br></br>
            <Chart className="element" options={this.state.options} series={this.state.series} type="radar" height="320" width="320"/>
          </div>
  

        );
      }
    }

export default RadarChart;