import React, { Component } from 'react';
import './App.css';
import Chart from "react-apexcharts";

class Histogramme extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            series: [{
                name: 'Taux humidité',
                data: [130,120 ,30 ,60 ,120,100,200 ]
              }],

            options: {
                labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi','Vendredi','Samedi','Dimanche'],
                legend: {
                position: 'bottom'
                }
            }    
        };
    }

    render(){
        
        return(
            <div className="chart">
                <br></br>
                <h4 className="text-center">Évolution Taux d'humidité</h4>
                <h4 className="text-center">de la semaine</h4> <br></br>
                <Chart className="element" options={this.state.options} labels={this.state.labels} series={this.state.series} width="350" type="bar" />
                <br></br>
            </div>
        )
    }

}

export default Histogramme;