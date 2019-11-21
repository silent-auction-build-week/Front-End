import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';


const Hdr = styled.header `
    margin-bottom: 4%;
    width: 100%;
    color:  #9370DB
    text-align: center; 
    font-family: 'Baloo Bhai';
    height: 120px;
    background-color: #EEEEEE;;
    border-radius: 3px;
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
         
    }
    h2 {
        font-size: 2rem;
        text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000; 
    }
`




const Header = () => {

    return (
    <div>
        <Hdr>
            <h2>Bidder Dashboard</h2>
            
            <nav>
            <NavLink to='home'>Home</NavLink>
            <NavLink to='account'>Account</NavLink>
            <NavLink to='bids'>Bids</NavLink>
            <NavLink to='auctions'>Payment</NavLink>
            </nav>
        </Hdr>

            <Route exact path=''/>


    </div>


    )
}




export default Header;
