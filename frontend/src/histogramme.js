import React, { Component } from 'react';
import './App.css';
import Chart from "react-apexcharts";

class Histogramme extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            series: [{
                name: 'Taux humidité',
                data: [130,100,200 ]
              }],

            options: {
                labels: ['Humidité','Température','Pollution'],
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
                <h4 className="text-center">Moyenne des valeurs</h4>
                <h4 className="text-center">enregistrées</h4> <br></br>
                <Chart className="element" options={this.state.options} labels={this.state.labels} series={this.state.series} width="350" type="bar" />
                <br></br>
            </div>
        )
    }

}

export default Histogramme;