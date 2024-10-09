import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Order from './Components/order';
import Success from './Components/success';
import Home from './Components/home';


function App() {

  return (
    <div>
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/order" component={Order} exact />
      <Route path="/success" component={Success} exact />
      </Switch>
    </div>
  )
}

export default App
