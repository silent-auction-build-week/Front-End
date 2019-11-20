import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';

const Hdr = styled.header ` 

height: 100px;
a {
  text-decoration: none;
  padding: 0 8%;  
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
