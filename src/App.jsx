import React from "react";
import {  BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import "./App.css";
import CartPage from "./components/CartPage";
import HomePage from "./components/Hompage";
import Shop from "./components/Shop";
import SingleProduct from "./components/SingleProduct";

import {connect} from 'react-redux';

function App({ currentItem }) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage}/>

          <Route path='/shop' component={Shop}/>
          <Route path='/cart' component={CartPage}/>
          {!currentItem ? (
            <Redirect to='/'/>
          ) : (
          <Route path='/product/:id' component={SingleProduct}/>

          )}
        </Switch>
      
     

      </div>
    </Router>
    
    
  );
}

const mapStateToProps = (state) => {
  return{
    currentItem: state.shop.currentItem
  }
}

export default connect(mapStateToProps)(App);