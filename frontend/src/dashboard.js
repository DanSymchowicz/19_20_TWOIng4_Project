import React, { Component } from 'react';
import './App.css';
import Compteur from './compteur';
import Camembert from './camembert';
import Histogramme from './histogramme';
import Graphe from './graphe';
import Tableau from './tableau';
import Pays from './pays';


class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div className="dashboard">
                <div className="container-fluid">

                    <div className="row">
                    <h1 className="col-12 text-center">Dashboard</h1> 
                    </div>
<<<<<<< HEAD
                    
=======
>>>>>>> feature/page
                    <div className="row justify-content-md-center">
                        <Camembert className="col-4"/> 
                        <Histogramme className="col-4"/> 
                        <Graphe className="col-4"/>
                    </div>
                    <div className="row justify-content-md-center">
<<<<<<< HEAD
        
                        <Compteur className="col-12"/> <br></br> 
                      
                    </div>
=======
                        <Compteur className="col-12"/> <br></br>   
                    </div>
                   
>>>>>>> feature/page
                    <div className="row justify-content-md-center">
                        <Tableau className="col-12"/>
                    </div>
                    <div className="row justify-content-md-center">
                        <Pays className="col-12"/>
                    </div>

                </div>
            </div>
        )
    }
}
export default Dashboard;