import React, { Component } from 'react';
import './App.css';

class Navigateur extends React.Component{
    constructor(props){
        super(props);
        this.state={
            accueil : "actif",
            admin : null
        };
        
    }
    render(){
        return(
            <div className = "navigateur"  >
            <ul class="nav flex-column">
                <li class="nav-item">
                    <button className = "accueil">Accueil </button> <br></br> <br></br> <br></br>
                </li>
                <li class="nav-item">
                    <button className = "admin">Admin </button>
                </li>                
            </ul>
            </div>
        )
    }
}
export default Navigateur;