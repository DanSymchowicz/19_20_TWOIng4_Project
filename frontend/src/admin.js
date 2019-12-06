import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pays:"",
            taille:"",
            nb:0
        }
    }

    handleChange_nom = (event) => {
        this.setState({pays: event.target.value});
    }

    handleChange_taille = (event) => {
        this.setState({taille: event.target.value});
    }
    handleChange_nb = (event) => {
        this.setState({nb: event.target.value});
    }
    
    handleSubmit = (event) => {
    alert('Le nouvel utilisateur a été soumis : pays = ' + this.state.pays +' // taille de la maison = ' + this.state.taille +' // accueillant = '+this.state.nb+' personnes.');
    event.preventDefault();
    }

    render(){
        return(

            <div className="page_admin">
                <div className="container">
                <div className="row justify-content-center">
                <br></br>
                    <h1>Ajouter des données</h1>
                    <br></br>
                </div>
                </div>
                <div className="ajout">
                <div className="container">
                <div className="row justify-content-center">
                    <br></br>
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
                    <br></br>
                    </div>
                    </div>


                    <br></br>
                    <div className="container">
                    <div className="row justify-content-center">
                    <h4>Utilisateurs existants :</h4>
                    <br></br><br></br>
                    <table className="table table-bordered table-striped table-sm table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>Pays</th>
                                <th>Taille</th>
                                <th>Nombre de personne</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">{this.state.pays}</td>
                                <td className="text-center">{this.state.taille}</td>
                                <td className="text-center">{this.state.nb}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    </div>

                
            </div>


        );
    }


}

export default Admin;



