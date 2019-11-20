import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AuctionCard from './AuctionCard';
import ProfileCard from './Header';

const Footer = styled.footer `
width: 100%;
height: 150px;
border: 1px solid gray;
`
const Sidebar = styled.div `
    display: flex:
    flex-direction: row-reverse;
    width: 30%;
    border: 1px solid gray;
`

const BidderDash = () => {
    
    const[activeAuctions, setActiveAuctions] = useState([]);
    // set active auctions to state


//retrieve active auctions
    useEffect(() => {
        axios
        .get( 'https://silent-auction-be.herokuapp.com/api/items')
        .then(response => {
            console.log('reponse from server', response.data.items)
            
            setActiveAuctions(response.data.items);
        })
        .catch(error => {
            console.log('Your data was lost, try again', error)
        })
    }, [])

// display active auctions
    //const auctions = activeAuctions

// retrieve items bid on

// display items bid on


    return (
        <div>

            <ProfileCard/>
            <Sidebar>
                <p>Hello</p>
            </Sidebar>
            {activeAuctions.map(live =>                
                <AuctionCard    
                    key={live.id} 
                    item={live}
                />)} 
            <Footer>
                
            </Footer>                   
        </div>
    )
}


export default BidderDash;