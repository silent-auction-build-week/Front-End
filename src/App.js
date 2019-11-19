import React from 'react';

import './App.css';
import ItemCard from './components/ItemCard';


import { BrowserRouter as Router, Route } from "react-router-dom"
import { connect } from 'react-redux';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  return (
    <Router>
    <div className="App">

      <ItemCard/>
      
     
 


      <Route exact path="/" component={Login} />
      <Route exact path='/signup' component={SignUp} />

    </div>
    </Router>
  );
}

export default connect(state => state)(App);
