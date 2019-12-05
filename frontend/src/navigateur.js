import React, { Component } from 'react';
import './App.css';
import Dashboard from './dashboard';
import Admin from './admin';

class Navigateur extends React.Component{


    constructor(props){
        super(props);
        this.state={
            accueil : null
        };
        
    }

    click_accueil = () => { 
        this.setState({accueil:"actif"});
    }

    click_admin = () => {
        this.setState({accueil:null});
    }

    render(){
       if(this.state.accueil==="actif"){
        return(
            <div className="container">
            <div className="row justify-content-center">
            
                    <button className = "accueil" onClick={this.click_accueil}>Accueil </button> 
                
                    <button className = "admin" onClick={this.click_admin}>Admin </button>

            </div>
            <div className = "row justify-content-center">
            <Dashboard />
            </div>    
            </div>
        );
       }
       else if(this.state.accueil===null){
           return(
        <div className="container">
        <div className="row justify-content-center">
        
                <button className = "accueil" onClick={this.click_accueil}>Accueil </button> 
         
                <button className = "admin" onClick={this.click_admin}>Admin </button>

        </div>
        <div className = "row justify-content-center">
        <Admin/>
        </div>    
        </div>
           );
       }
    }
}
export default Navigateur;