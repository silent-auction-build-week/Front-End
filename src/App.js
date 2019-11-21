import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import styled from 'styled-components';
import ItemCard from "./components/ItemCard";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import BidderDash from './components/Bidder/BidderDash';
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

// start styling app

const AppDiv = styled.div `
  
`


function App() {
  return (
     <Router>
      <AppDiv>
        {/* <BidderDash/> */}
        {/* <ItemCard/> */}
        <PrivateRoute exact path="/bidder-dash" component={BidderDash}/>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/item-card" component={ItemCard} />
      </AppDiv>
    </Router> 
  );
}

export default connect(state => state)(App);
