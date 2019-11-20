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
            console.log('reponse from server', response.data.auctions)
            
            setActiveAuctions(response.data.auctions);
        })
        .catch(error => {
            console.log('Your data was lost, try again', error)
        })
    }, [])

// display active auctions
    const auctions = activeAuctions

// retrieve items bid on

// display items bid on


    return (
        <div>

            {auctions.map((live, index) => 
   
                <AuctionCard 
    
                    key={index} 
                    item={live.item_name}
                    image={live.img_url}
                    description={live.description}
                    price={live.price}
    
                />)}                    
        </div>
    )
}


export default BidderDash;