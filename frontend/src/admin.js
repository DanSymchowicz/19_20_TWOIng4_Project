import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";




class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state={  
                pays:"",
                taille:"",
                nombre:0,

                location1:"",
                size1:"",
                nb1:0,

                location2:"",
                size2:"",
                nb2:0,

                location3:"",
                size3:"",
                nb3:0,

                location4:"",
                size4:"",
                nb4:0,

                location5:"",
                size5:"",
                nb5:0,
        }
    }

    componentDidMount (){
        var lui=this;
        console.log("HELLO");
       
        axios.get(`http://127.0.0.1:3000/user/`).then(function (response) {
            // handle success
                var nombrefinal=response.data.lenght;
                console.log(response.data[1].location);
                console.log(response.data[1].houseSize);
                console.log(response.data[1].personsInHouse);
                lui.setState({location1:response.data[1].location, size1:response.data[1].houseSize, nb1:response.data[1].personsInHouse});

                console.log(response.data[2].location);
                console.log(response.data[2].houseSize);
                console.log(response.data[2].personsInHouse);
                lui.setState({location2:response.data[2].location, size2:response.data[2].houseSize, nb2:response.data[2].personsInHouse});

                console.log(response.data[3].location);
                console.log(response.data[3].houseSize);
                console.log(response.data[3].personsInHouse);
                lui.setState({location3:response.data[3].location, size3:response.data[3].houseSize, nb3:response.data[3].personsInHouse});

                console.log(response.data[4].location);
                console.log(response.data[4].houseSize);
                console.log(response.data[4].personsInHouse);
                lui.setState({location4:response.data[4].location, size4:response.data[4].houseSize, nb4:response.data[4].personsInHouse});

                console.log(response.data[5].location);
                console.log(response.data[5].houseSize);
                console.log(response.data[5].personsInHouse);
                lui.setState({location5:response.data[5].location, size5:response.data[5].houseSize, nb5:response.data[5].personsInHouse});
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
              console.log("done");
            // always executed
          });
       
    }

    handleChange_nom = (event) => {
        this.setState({pays: event.target.value});
    }

    handleChange_taille = (event) => {
        this.setState({taille: event.target.value});
    }
    handleChange_nb = (event) => {
        this.setState({nombre: event.target.value});
    }
    
    handleSubmit = (event) => {
        const newUser={
            location:this.state.pays,
            houseSize:this.state.taille,
            personsInHouse:this.state.nombre,
        }
        axios.post(`http://127.0.0.1:3000/user/add`,{newUser}).then(function (response) {
            // handle success
                console.log("on vient de le mettre dans la bdd")
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
              console.log("done");
            // always executed
          });
        /*
        .then(res => {
            this.setState({ persons: res.data});
        })*/
    
    alert('Le nouvel utilisateur a été soumis : pays = ' + this.state.pays +' // taille de la maison = ' + this.state.taille +' // accueillant = '+this.state.nombre+' personnes.');
    event.preventDefault();
    }
    
    render(){
        
            return (

            <div className="page_admin">
                <div className="container">
                <div className="row justify-content-center">
                <br></br>


                
                <p>{this.state.location}</p>    
                <p>{this.state.nb}</p>   
                <p>{this.state.size}</p>   
              


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
                            <input type="text" placeholder="France" onChange={this.handleChange_nom} name="pays"/>
                        </label> <br></br><br></br>
                
                        <label>
                        Quel est la taille de la maison ? <br></br>
                        <select name="taille" onChange={this.handleChange_taille}>
                            <option value="large">LARGE</option>
                            <option value="medium">MEDIUM</option>
                            <option value="small">SMALL</option>
                        </select>
                        </label> <br></br><br></br>

                        <label>
                            Combien de personne vivent dans la maison ? <br></br>
                            <input type="number" placeholder="4" name="nombre" onChange={this.handleChange_nb}/>personnes
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

                    {/* <button onClick="componentDidMount()">Actualiser</button> */}

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
                                <td className="text-center">{this.state.location1}</td>
                                <td className="text-center">{this.state.size1}</td>
                                <td className="text-center">{this.state.nb1}</td>
                            </tr>
                            <tr>
                                <td className="text-center">{this.state.location2}</td>
                                <td className="text-center">{this.state.size2}</td>
                                <td className="text-center">{this.state.nb2}</td>
                            </tr>
                            <tr>
                                <td className="text-center">{this.state.location3}</td>
                                <td className="text-center">{this.state.size3}</td>
                                <td className="text-center">{this.state.nb3}</td>
                            </tr>
                            <tr>
                                <td className="text-center">{this.state.location4}</td>
                                <td className="text-center">{this.state.size4}</td>
                                <td className="text-center">{this.state.nb4}</td>
                            </tr>
                            <tr>
                                <td className="text-center">{this.state.location5}</td>
                                <td className="text-center">{this.state.size5}</td>
                                <td className="text-center">{this.state.nb5}</td>
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

