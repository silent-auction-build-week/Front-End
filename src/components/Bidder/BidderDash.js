import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuctionCard from './AuctionCard'

const BidderDash = () => {
    
    const[activeAuctions, setActiveAuctions] = useState([]);
    // set active auctions to state


//retrieve active auctions
    useEffect(() => {
        axios
        .get( 'https://silent-auction-be.herokuapp.com/api/auctions')
        .then(response => {
            console.log(response.data)
            setActiveAuctions(response.data);
        })
        .catch(error => {
            console.log('Your data was lost, try again', error)
        })
    }, [])

// display active auctions
    const auctions = activeAuctions.map(live => <AuctionCard key={live.id}/>)

// retrieve items bid on

// display items bid on


    return (
        <div>
            {auctions}
         
         
         
                
                          
         
      

        </div>
    )
}


export default BidderDash;