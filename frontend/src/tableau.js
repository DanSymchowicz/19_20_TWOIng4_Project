import React, { Component } from 'react';
import './App.css';

class Tableau extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mesure1:{
                date:"12-12-18",
                type:"Humidité",
                mesure:300,
                unite: "g/m3",
                img:"cpt_humidity.jpg"
            },
            mesure2:{
                date:"2-10-19",
                type:"Humidité",
                mesure:280,
                unite: "g/m3",
                img:"cpt_humidity.jpg"
            },
            mesure3:{
                date:"3-12-19",
                type:"Température",
                mesure:24,
                unite: "°C",
                img:"cpt_temp.jpg"
            },
            mesure4:{
                date:"18-10-19",
                type:"Température",
                mesure:30,
                unite: "°C",
                img:"cpt_temp.jpg"
            },
            mesure5:{
                date:"22-11-19",
                type:"Pollution de l'air",
                mesure:290,
                unite: "ppm",
                img:"cpt_pollution.jpg"
            },
            mesure6:{
                date:"30-11-19",
                type:"Pollution de l'air",
                mesure:450,
                unite: "ppm",
                img:"cpt_pollution.jpg"
            },
        };
    }



    render(){
        return(
            <div className="tableau_cont">
                  <h4 className="text-center">
                        Mesures records de la semaine
                    </h4> <br></br>
                <table className="table table-bordered table-striped table-sm table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Date mesure</th>
                        <th>Type de capteur</th>
                        <th>Mesure</th>
                        <th>Unité</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                    <td className="text-center">{this.state.mesure1.date}</td>
                    <td className="text-center">{this.state.mesure1.type}</td>
                    <td className="text-center">{this.state.mesure1.mesure}</td>
                    <td className="text-center">{this.state.mesure1.unite}</td>
                    <td>
                        <img src={this.state.mesure1.img} width="70" height="70"></img>
                    </td>
                    </tr>

                    <tr>
                    <td className="text-center">{this.state.mesure2.date}</td>
                    <td className="text-center">{this.state.mesure2.type}</td>
                    <td className="text-center">{this.state.mesure2.mesure}</td>
                    <td className="text-center">{this.state.mesure2.unite}</td>
                    <td>
                        <img src={this.state.mesure2.img} width="70" height="70"></img>
                    </td>
                    </tr>
                    
                    <tr>
                    <td className="text-center">{this.state.mesure3.date}</td>
                    <td className="text-center">{this.state.mesure3.type}</td>
                    <td className="text-center">{this.state.mesure3.mesure}</td>
                    <td className="text-center">{this.state.mesure3.unite}</td>
                    <td>
                        <img src={this.state.mesure3.img} width="70" height="70"></img>
                    </td>
                    </tr>

                    <tr>
                    <td className="text-center">{this.state.mesure4.date}</td>
                    <td className="text-center">{this.state.mesure4.type}</td>
                    <td className="text-center">{this.state.mesure4.mesure}</td>
                    <td className="text-center">{this.state.mesure4.unite}</td>
                    <td>
                        <img src={this.state.mesure4.img} width="70" height="70"></img>
                    </td>
                    </tr>

                    <tr>
                    <td className="text-center">{this.state.mesure5.date}</td>
                    <td className="text-center">{this.state.mesure5.type}</td>
                    <td className="text-center">{this.state.mesure5.mesure}</td>
                    <td className="text-center">{this.state.mesure5.unite}</td>
                    <td>
                        <img src={this.state.mesure5.img} width="70" height="70"></img>
                    </td>
                    </tr>

                    <tr>
                    <td className="text-center">{this.state.mesure6.date}</td>
                    <td className="text-center">{this.state.mesure6.type}</td>
                    <td className="text-center">{this.state.mesure6.mesure}</td>
                    <td className="text-center">{this.state.mesure6.unite}</td>
                    <td>
                        <img src={this.state.mesure6.img} width="70" height="70"></img>
                    </td>
                    </tr>

                </tbody>

                </table>
            </div>

        )
    }
}

export default Tableau;