import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/home";
import Order from './Components/order';

function App() {

  return (
    <div>
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/order" component={Order} exact />
      </Switch>
    </div>
  )
}

export default App
