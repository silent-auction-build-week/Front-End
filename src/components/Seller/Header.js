import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';

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

const Header = () => {

    return (
        <div>

            <Hdr>
                <ImageWrapper>
                    <Image src="https://via.placeholder.com/150" />
                </ImageWrapper>
                <h2>Dashboard</h2>

                <nav>
                    <NavLink exact to ='/'>Home</NavLink>
                    <NavLink exact to ='#'>Account</NavLink>
                    <NavLink exact to ='#'>Bids</NavLink>
                    <NavLink exact to ='#'>Payment</NavLink>
                </nav>
            </Hdr>

            <Route exact path='' />


        </div>


    )
}

export default Header;