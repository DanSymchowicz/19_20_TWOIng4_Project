import React, { Component } from 'react';
import './App.css';

class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:"",
            taille:"",
            nb:0
        }
    }

    handleChange_nom = (event) => {
        this.setState({value: event.target.value});
    }

    handleChange_taille = (event) => {
        this.setState({taille: event.target.value});
    }
    handleChange_nb = (event) => {
        this.setState({nb: event.target.value});
    }
    
    handleSubmit = (event) => {
    alert('Le nouvel utilisateur a été soumis : pays : ' + this.state.value +' maison de la taille de ' + this.state.taille +' accueillant '+this.state.taille+' personnes.');
    event.preventDefault();
    }

    render(){
        return(
            <div className="page_admin">
                <div className="row justify-content-center">
                    <h1>Ajouter des données</h1>
                </div>
                <div className="row justify-content-center">
                    <h4>Ajouter un utilisateur</h4>
                </div> <br></br>
                <div className="row justify-content-center">
                    <form className="text-center" onSubmit={this.handleSubmit}>

                        <label>
                            Insérer le pays : 
                            <input type="text" placeholder="France" onChange={this.handleChange_nom} name="pais"/>
                        </label> <br></br><br></br>


                        <label>
                        Quel est la taille de la maison ? <br></br>
                        <select name="taile" onChange={this.handleChange_taille}>
                            <option value="large">LARGE</option>
                            <option value="medium">MEDIUM</option>
                            <option value="small">SMALL</option>
                        </select>
                        </label> <br></br><br></br>

                        <label>
                            Combien de personne vivent dans la maison ? <br></br>
                            <input type="number" placeholder="4" name="perso" onChange={this.handleChange_nb}/>personnes
                        </label> <br></br><br></br> 
                        
                        <input type="submit" value="Enregistrer" />
                    </form>

                </div>
            </div>


        );
    }


}

export default Admin;



