import React, { Component } from 'react';
import './App.css';
import Chart from "react-apexcharts";
import axios from "axios";

class Camembert extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options: {
                labels: ['Humidité', 'Température', 'Pollution de l air'],
                chart: {
                width: 20
                },
                legend: {
                position: 'bottom'
                },
            },
           
            series: [201, 434, 345]
                 
        };
    }

    componentDidMount (){
        var lui=this;
        var prchum=0;
        var prctemp=0;
        var prcpoll=0;

        axios.get(`http://127.0.0.1:3000/measure/hum`).then(function (response) {
            // handle success
                
                prchum=response.data.prct;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
              console.log("done");
            // always executed
          });

          axios.get(`http://127.0.0.1:3000/measure/temp`).then(function (response) {
            // handle success
               
                prctemp=response.data.prct;
            
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
              console.log("done");
            // always executed
          });

          axios.get(`http://127.0.0.1:3000/measure/pollu`).then(function (response) {
            // handle success
              
                prcpoll=response.data.prct;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
              console.log("done");
            // always executed
          });

          const newSeries = [];
        newSeries.push(36);
        newSeries.push(31);
        newSeries.push(33);
            
        this.setState({
        series: newSeries
        })

        console.log(newSeries);
    
    }

    render(){
    
        return(
            <div className="chart">
                <br></br>
                <h4 className="text-center">Répartition des types</h4>
                <h4 className="text-center"> de mesures</h4> <br></br>
            
                <Chart className="element" options={this.state.options} labels={this.state.labels} series={this.state.series} type="donut" />
                <br></br>
            </div>
        )
    }

}

export default Camembert;