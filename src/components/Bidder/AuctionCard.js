import React from 'react';
import styled from 'styled-components';



const AuctionBox = styled.div `           
    border: 1px solid gray
    margin: 2%;
    width: 100%;
    // margin-left: 10%;
  
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
    font-size: .75rem;
    p {
        font-size: 1rem;
        padding: 2%;
    }
`
const AuctionBody = styled.div `
    max-width: 75%;
    display: flex;

`



const AuctionCard = (props) => {
    console.log('my response', props.item_name)
    return (
      
        <AuctionBody>
            <AuctionBox>
                {/* add props for auction */}
                <img src={props.image} alt='items' />            
                <h4>{props.item}</h4>
                <div>
                <p>{props.description}</p>
                </div>
                <span>${props.price}</span>
                <button>Bid on Item</button> 
            
            </AuctionBox>
        </AuctionBody>
       
    
    )

}





export default AuctionCard;