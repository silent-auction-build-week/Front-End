import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AuctionCard from './AuctionCard';
import Hdr from './Header';

const MainDiv = styled.div `
    width: 100%;
`

const HeaderWrapper = styled.div `
    width: 100%
   

`

const BidderWrapper = styled.div `
    align-items: center;
    
    width: 800px;
    font-family: 'Baloo Bhai';
    border-radius: 3px;
  
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
     <MainDiv>
       <HeaderWrapper>         
         <Hdr/>
       </HeaderWrapper>
         <BidderWrapper>
            {activeAuctions.map(live =>                
                <AuctionCard    
                    key={live.id} 
                    item={live}
                />)} 
                   
          </BidderWrapper>
      </MainDiv>
    )
}


export default BidderDash;