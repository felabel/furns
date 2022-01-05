import React from "react";
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "./App.css";
import CartPage from "./components/CartPage";
import HomePage from "./components/Hompage";
import Products from "./components/Products";
import ProductView from "./components/ProductView";
import Shop from "./components/Shop";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage}/>

          <Route path='/shop' component={Shop}/>
          <Route path='/product' component={ProductView}/>
          <Route path='/cart' component={CartPage}/>
          <Route path='/products' component={Products}/>
        </Switch>
      
     

      </div>
    </Router>
    
    
  );
}

export default App;