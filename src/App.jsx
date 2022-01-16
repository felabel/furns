import React from "react";
import {  BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import "./App.css";
import CartPage from "./components/CartPage";
import HomePage from "./components/Hompage";
import Shop from "./components/Shop";
import SingleProduct from "./components/SingleProduct";
import Tabs from "./components/Tabs";
import {connect} from 'react-redux';
import CartTest from "./components/CartTest";
import ProductsTest from "./components/ProductsTest";
import Search from "./components/Search";
import Office from "./components/Office";

function App({ currentItem }) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage}/>

          <Route path='/shop' component={Shop}/>
          <Route path='/tabs' component={Tabs}/>
          <Route path='/cart' component={CartPage}/>
          <Route path='/search' component={Search}/>
          <Route path='/page' component={ProductsTest}/>
          <Route path='/office' component={Office}/>
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