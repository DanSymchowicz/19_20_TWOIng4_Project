import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import Dashboard from './dashboard';
=======
import Navigateur from './navigateur';
>>>>>>> feature/page
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Routes from './routes'; 

class App extends Component{
  
render(){
  return(
   
<<<<<<< HEAD
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
=======
    <div className = "container-fluid" style={{
      backgroundColor: '#FC0C0C0',
      width: '100%',
      height: '200%'
    }}> 
      <div className="row justify-content-center">
      <Navigateur/>
      </div>
      
    </div>
  );
  }

>>>>>>> feature/page
}
export default App;
