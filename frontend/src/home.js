import React, { Component } from 'react';
import './App.css';
import Dashboard from './dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component{
render(){
  return(
   
    <div > 
       
        <Dashboard className = "dashboard col-md-10 "/>

    </div>
  )
}
}
export default Home;