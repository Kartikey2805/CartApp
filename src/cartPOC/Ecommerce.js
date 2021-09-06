import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NavBar from './cartComponents/NavBar';
import ProductPage from './cartComponents/ProductPage';
import Cart from './cartComponents/CartPage';
import HomePage from './cartComponents/HomePage';
console.log(2);

function Ecommerce(props) {
    return (
        <Router>
            <NavBar></NavBar>
            <Switch>
                <Route path='/product' component={ProductPage}></Route>
                <Route path='/cart' component={Cart}></Route>
                <Route path='/' component={HomePage}></Route>
                <Redirect to='/'></Redirect>
            </Switch>
        </Router>)

}

export default Ecommerce;