import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Routes from './routes'; 

class App extends Component{

render(){
  return(
   

    <div className = "container-fluid" >       
      <div className = "row justify-content-center">    
        <Link to="/home"><button className = "bouton">Dashboard</button></Link> 
        <Link to="/admin"><button className = "bouton">Admin</button></Link>             
      </div>

      <div className = "row justify-content-center">
       <Routes/>
      </div> 
      

    </div>

  );
  }
}
export default App;
