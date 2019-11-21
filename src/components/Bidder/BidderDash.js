import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AuctionCard from './AuctionCard';
import ProfileCard from './Header';

const BidderWrapper = styled.div `
    background-color: #EEEEEE;
    font-family: 'Baloo Bhai';
    border-radius: 3px;
  
`

const Footer = styled.footer `
width: 100%;
height: 150px;
border: 1px solid #FFCC66;;
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

// retrieve items bid on

// display items bid on


    return (
        <BidderWrapper>

            <ProfileCard/>


            {activeAuctions.map(live =>                
                <AuctionCard    
                    key={live.id} 
                    item={live}
                />)} 
            <Footer>
                
            </Footer>                   
        </BidderWrapper>
    )
}


export default BidderDash;