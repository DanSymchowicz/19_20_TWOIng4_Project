import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Admin from './admin';
import Home from "./home";
//import NotFound from "./container/NotFound";


export default () => (
    <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/admin" exact component={Admin}/>
    </Switch>
);