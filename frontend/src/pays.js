import React, { Component } from 'react';
import './App.css';
import Chart from "react-apexcharts";

class Pays extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pays1:{
                pays:"France",
                nb_prs:3,
                house_size:"medium",
                img:"france.jpg"
            },
            pays2:{
                pays:"Angleterre",
                nb_prs:5,
                house_size:"large",
                img:"angleterre.jpg"
            },
            pays3:{
                pays:"Italie",
                nb_prs:5,
                house_size:"medium",
                img:"italie.jpeg"
            },
            pays4:{
                pays:"Espagne",
                nb_prs:6,
                house_size:"large",
                img:"espagne.jpg"
            },
            pays5:{
                pays:"Grèce",
                nb_prs:3,
                house_size:"small",
                img:"grece.jpg"
            }
        };
    }

    render(){
        return(

            <div className="div_pays">
                <div className="container-fluid">

                <h4 className="text-center">Albums sortis cette semaine</h4> <br></br>

                <div className="row justify-content-center">

                    <div className="chart col-sm-2">
                    <div className="zoom">
                        <br></br>
                        <p className="country text-center">{this.state.pays1.pays}</p>
                        <p className="pays text-center">{this.state.pays1.nb_prs} personnes</p>
                        <p className="text-center">Taille: {this.state.pays1.house_size}</p>
                        <img className="img_pays" src={this.state.pays1.img} width="90" height="90"></img>
                    </div>
                    </div>

                    <div className="chart col-sm-2">
                    <div className="zoom">
                        <br></br>
                        <p className="country text-center">{this.state.pays2.pays}</p>
                        <p className="pays text-center">{this.state.pays2.nb_prs} personnes</p>
                        <p className="text-center">Taille: {this.state.pays2.house_size}</p>
                        <img className="img_pays" src={this.state.pays2.img} width="90" height="90"></img>
                    </div>
                    </div>

                    <div className="chart col-sm-2">
                    <div className="zoom">
                        <br></br>
                        <p className="country text-center">{this.state.pays3.pays}</p>
                        <p className="pays text-center">{this.state.pays3.nb_prs} personnes</p>
                        <p className="text-center">Taille: {this.state.pays3.house_size}</p>
                        <img className="img_pays" src={this.state.pays3.img} width="90" height="90"></img>
                    </div>
                    </div>

                    <div className="chart col-sm-2">
                    <div className="zoom">
                        <br></br>
                        <p className="country text-center">{this.state.pays4.pays}</p>
                        <p className="pays text-center">{this.state.pays4.nb_prs} personnes</p>
                        <p className="text-center">Taille: {this.state.pays4.house_size}</p>
                        <img className="img_pays" src={this.state.pays4.img} width="90" height="90"></img>
                    </div>
                    </div>

                    <div className="chart col-sm-2">
                    <div className="zoom">
                        <br></br>
                        <p className="country text-center">{this.state.pays5.pays}</p>
                        <p className="pays text-center">{this.state.pays5.nb_prs} personnes</p>
                        <p className="text-center">Taille: {this.state.pays5.house_size}</p>
                        <img className="img_pays" src={this.state.pays5.img} width="90" height="90"></img>
                    </div>
                    </div>

                </div>

            </div>
            </div>
        )
    }
}

export default Pays;
