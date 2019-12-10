import React, { Component } from 'react';
import './App.css';
import Chart from "react-apexcharts";
import axios from "axios";

class Histogramme extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            series: [{
                name: 'Taux humidité',
                data: [50,51,20 ]
              }],

            options: {
                labels: ['Humidité','Température','Pollution'],
                legend: {
                position: 'bottom'
                }
            }    
        };
    }

    componentDidMount (){
        var lui=this;
        var prchum=0;
        var prctemp=0;
        var prcpoll=0;

        axios.get(`http://127.0.0.1:3000/measure/humidi`).then(function (response) {
            // handle success
                console.log(response.data.nbv);
                prchum=response.data.nbv;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
              console.log("done");
            // always executed
          });

          axios.get(`http://127.0.0.1:3000/measure/tempo`).then(function (response) {
            // handle success
                console.log(response.data.nbv);
                prctemp=response.data.nbv;
            
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
              console.log("done");
            // always executed
          });

          axios.get(`http://127.0.0.1:3000/measure/polluda`).then(function (response) {
            // handle success
                console.log(response.data.nbv);
                prcpoll=response.data.nbv;
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
                <h4 className="text-center">Moyenne des valeurs</h4>
                <h4 className="text-center">enregistrées</h4> <br></br>
                <Chart className="element" options={this.state.options} labels={this.state.labels} series={this.state.series} width="350" type="bar" />
                <br></br>
            </div>
        )
    }

}

export default Histogramme;