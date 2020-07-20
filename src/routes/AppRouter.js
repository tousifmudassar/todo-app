import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../Components/Login/LoginContainer';
import Dashboard from '../Components/Dashboard/Dashboard';
import Profile from '../Components/Profile/Profile';
import NotFound from '../Components/NotFound';
import PrivateRoute from './PrivateRoute';

const AppRouter = () =>{
    return(
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <PrivateRoute path="/profile" component={Profile}/>
            <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    )
}

export default AppRouter;