import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import EditClientes from './pages/EditCliente';
import AddClientes from './pages/AddCliente';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/edit/:id' component={EditClientes}/>
                <Route path='/add' component={AddClientes}/>
            </Switch>
        </BrowserRouter>
    );

}
