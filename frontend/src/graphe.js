import React, { Component } from 'react';
import './App.css';
import Chart from "react-apexcharts";

class Graphe extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            series: [{
                name: "Température (°C)",
                data: [1300,1200 ,300 ,600 ,1200,1000,2000,1400,1250,2030,1900,1741]
              },
              {
                name: "Humidité",
                data: [1200,1100 ,600 ,800 ,800,900,1800,2100,1400,1650,989,1800]
              },
              {
                name: "Pollution de lair",
                data: [1400,900 ,1200 ,1100 ,1800,2300,990,1300,1210,2130,1650,1211]
              }],

            options: {
                labels: ['Janvier', 'Février', 'Mars', 'Avril','Mai','Juin','Juillet', 'Aout','Septembre','Octobre', 'Novembre','Décembre'],
                chart: {
                    
                },
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
                <h4 className="text-center">Evolution des </h4>
                <h4 className="text-center">mesures</h4> 
                <Chart className="element" options={this.state.options} labels={this.state.labels} series={this.state.series} type="line" width="450" />
                <br></br>
            </div>
        )
    }

}

export default Graphe;