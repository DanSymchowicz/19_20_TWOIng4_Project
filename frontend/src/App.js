import React, { Component } from 'react';
import './App.css';
import Dashboard from './dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Routes from './routes'; 

class App extends Component{
render(){
  return(
   
    <div className = "container-fluid" > 
       
      <div className = "row">
      <div className = "navigateur"  >
      <ul class="nav flex-column">
          <li class="nav-item">
              <Link to="/home"><button className = "accueil">Accueil </button></Link> <br></br> <br></br> <br></br>
          </li>
          <li class="nav-item">
              <Link to="/admin"><button className = "admin">Admin </button></Link>
          </li>                
      </ul>
      </div>
      <Routes/>
        
      </div>

    </div>
  )
}
}
export default App;
