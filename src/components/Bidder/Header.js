import React from 'react';
import { BrowserRouter as Router, NavLink, Route, withRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../Login';
import SellerDash from '../Seller/SellerDash';
import BidderDash from '../Bidder/BidderDash';



const Hdr = styled.header`
    z-index: 5;
    margin-bottom: 4%;
    width: 100%;
    text-align: center;
    color:  #9370DB
    font-family: 'Baloo Bhai';
    height: 160px;
    background-color: #EEEEEE;
    border: 2px solid #9370DB;
    border-radius: 5px;
    a {
        text-decoration: none;
        padding: 0 6%;
        color: #9370DB;
        font-size: 1.3rem;
        text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
        z-index: 10;
         
    }
    h2 {
        
        width: 100%;
        font-size: 2rem;
        text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
        z-index: 9; 
    }
`
const ImageWrapper = styled.div`
    display: flex;
    
`

const Image = styled.img`
    position: absolute;
    height: 150px;
    margin-top: 
`

const exclusionArray = [
    '../Login.js',
    '../Signup.js'
]

const Header = ({location}) => {

    return (
    <div>
        
        {/* <Router>
          <Hdr>
            <ImageWrapper>
                <Image src={require('./logoforheader.png')} />
            </ImageWrapper>
            <h2>The Dashboard</h2>
            
            <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink  exact to='../Login.js'>Log-In</NavLink>
            <NavLink to='../Bidder/BidderDash.js/'>Bids</NavLink>
            <NavLink to='../Seller/SellerDash.js/'>Auctions</NavLink>
            </nav>
          </Hdr>
          {exclusionArray.indexOf(location.pathname) < 0 && <Header/>}
         <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/log-in' component={Login}/>
            <Route exact path ='/bids' component={BidderDash}/>
            <Route exact path ='/auctions' component={SellerDash}/>
         </Switch>
        </Router> */}
    </div>


    )
}




export default withRouter(Header);
