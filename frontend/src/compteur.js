import React, { Component } from 'react';
import './App.css';
import SemiCircleProgressBar from "react-progressbar-semicircle";

class Compteur extends React.Component{
    constructor(props){
        super(props);
        this.state={
            max:100,
            actu:46,
            color: "#F0B20D"
        };
    }

    render(){

        return (
        <div className="chart">
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-8">
                    <h4 className="text-center"> Temps d'écoute du jour</h4> <br></br>
                        <SemiCircleProgressBar percentage={this.state.actu} background="#C0C0C0" stroke={this.state.color} strokeWidth="40" showPercentValue />
                    </div>
                    <div className="col-4">
                        <br></br> <br></br>
                        <h3 className="text-center">Aujourd'hui,</h3>
                        <h1 className="text-center">3H30</h1>
                        <h3 className="text-center"> d'écoute</h3>
                    </div>
                </div>
            </div>
        </div>
        );
    }

}

export default Compteur;