import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';

const Hdr = styled.header `
    color: white
    text-align: center; 
    font-family: 'Baloo Bhai';
    height: 100px;
    background-color: #9370DB;
    border-radius: 3px;
    a {
        text-decoration: none;
        padding: 0 8%;
        color: white; 
         
    }
    h2 {
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
            The 
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
