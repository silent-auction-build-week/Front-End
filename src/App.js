import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import styled from 'styled-components';
import ItemCard from "./components/ItemCard";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import BidderDash from './components/Bidder/BidderDash';
import PrivateRoute from "./components/PrivateRoute";
import SellerDash from "./components/Seller/SellerDash";
import newAuction from "./components/Seller/newAuction";
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
        <PrivateRoute exact path="/newAuction" component={newAuction} />
        <PrivateRoute exact path="/bidder-dash" component={BidderDash}/>
        <PrivateRoute exact path="/seller-dash" component={SellerDash}/>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/item-card" component={ItemCard} />
      </AppDiv>
    </Router> 
  );
}

export default connect(state => state)(App);
