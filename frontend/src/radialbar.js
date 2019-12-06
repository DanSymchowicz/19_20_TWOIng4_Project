import React, { Component } from 'react';
import './App.css';
import Chart from "react-apexcharts";

class RadialChart extends React.Component {
      
    constructor(props) {
      super(props);

      this.state = {
        options: {
          plotOptions: {
            radialBar: {
              offsetY: -10,
              startAngle: 0,
              endAngle: 270,
              hollow: {
                margin: 5,
                size: '30%',
                background: 'transparent',
                image: undefined,
              },
              dataLabels: {
                name: {
                  show: false,

                },
                value: {
                  show: false,
                }
              }
            }
          },
          colors: ['#4A90E2','#FD95FF','#F8CD1C', '#42CE20'],
          labels: ['France', 'Grèce', 'Espagne', 'Italy'],
          legend: {
            show: true,
            fontSize: '15px',
            position: 'bottom',
            labels: {
                useSeriesColors: true,
            },
            formatter: function(seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            },
            itemMargin: {
                horizontal: 1,
            }
          },
          responsive: [{
              breakpoint: 480,
              options: {
                  legend: {
                      show: false
                  }
              }
          }]
        },
        series: [76, 67, 61, 90],
      }
    }

    render() {
      return (
        

        <div className="chart">
            <br></br>
            <h4 className="text-center">Nombre utilisateurs</h4>
            <h4 className="text-center">par pays</h4>
            <br></br>
          <Chart className="element" options={this.state.options} series={this.state.series} type="radialBar" height="350" />
        </div>


      );
    }
  }

export default RadialChart;
