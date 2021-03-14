import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'

import Layout from './components/Layout/Layout'

import './App.css';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder'
import Checkout from './container/checkout/Checkout'
import Orders from './container/Orders/Orders'

class App extends Component {
  render() {
    return (
     
      <div>
        <Layout>
        <Switch>
        <Route path="/checkout"> <Checkout/></Route>
        <Route path="/orders"> <Orders/></Route>
        <Route path="/" exact><BurgerBuilder /></Route>
        </Switch>
          
        </Layout>
      </div>

    );
  }
}

export default App;
