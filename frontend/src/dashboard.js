import React, { Component } from 'react';
import './App.css';
import Camembert from './camembert';
import Histogramme from './histogramme';
import Graphe from './graphe';
import Tableau from './tableau';
import RadarChart from './radar';
import RadialChart from './radialbar';


class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
        
                <div className="dashboard container-fluid">

                    <div className="row">
                    <h1 className="col-12 text-center">Dashboard</h1> 
                    </div>
                    
                    <div className="row justify-content-md-center">
                        <Camembert className="col-4"/> 
                        <Histogramme className="col-4"/> 
                        <Graphe className="col-4"/>
                    </div>

                    <div className="row justify-content-md-center">
                        <RadialChart className="col-6"/>
                        <RadarChart className="col-6"/> 
                    </div>

                    <div className="row justify-content-md-center">
                        <Tableau className="col-12"/>
                    </div>

                </div>
          
        )
    }
}
export default Dashboard;