import React, { Component } from 'react';
import './App.css';
import Chart from "react-apexcharts";

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