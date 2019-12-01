import React, { Component } from 'react';
import './App.css';
import Chart from "react-apexcharts";

class Albums extends React.Component{
    constructor(props){
        super(props);
        this.state={
            album1:{
                name:"Ce monde est cruel",
                artiste:"Vald",
                img:"cemondeestcruel.jpg"
            },
            album2:{
                name:"Resurection", 
                artiste:"Amy Winehouse",
                img:"back_to_black.jpg"
            },
            album3:{
                name:"Bad",
                artiste:"Micheal Jackson",
                img:"bad_mj.jpg"
            },
            album4:{
                name:"La vie en rose",
                artiste:"Edith Piaf",
                img:"lavieenrose.jpg"
            },
            album5:{
                name:"She knows why",
                artiste:"The Box Tops",
                img:"theletter.jpg"
            }
        };
    }

    render(){
        return(

            <div className="album">
                <div className="container-fluid">
                <h4 className="text-center">Albums sortis cette semaine</h4> <br></br>
                <div className="row justify-content-center">
                    <div className="col-sm-2">
                    <div className="zoom">
                        <p className="text-center">{this.state.album1.name}</p>
                        <p className="artiste text-center">{this.state.album1.artiste}</p>
                        <img src={this.state.album1.img} width="90" height="90"></img>
                    </div>
                    </div>
                    <div className="col-sm-2">
                    <div className="zoom">
                        <p className="text-center">{this.state.album2.name}</p>
                        <p className="artiste text-center">{this.state.album2.artiste}</p>
                        <img src={this.state.album2.img} width="90" height="90"></img>
                    </div>
                    </div>
                    <div className="col-sm-2">
                    <div className="zoom">
                        <p className="text-center">{this.state.album3.name}</p>
                        <p className="artiste text-center">{this.state.album3.artiste}</p>
                        <img src={this.state.album3.img} width="90" height="90"></img>
                    </div>
                    </div>
                    <div className="col-sm-2">
                    <div className="zoom">
                        <p className="text-center">{this.state.album4.name}</p>
                        <p className="artiste text-center">{this.state.album4.artiste}</p>
                        <img src={this.state.album4.img} width="90" height="90"></img>
                    </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="zoom">
                        <p className="text-center">{this.state.album5.name}</p>
                        <p className="artiste text-center">{this.state.album5.artiste}</p>
                        <img src={this.state.album5.img} width="90" height="90"></img>
                        </div>
                    </div>

                </div>


                </div>

            </div>
        )
    }
}

export default Albums;
