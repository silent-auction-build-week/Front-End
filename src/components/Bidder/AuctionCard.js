import React from 'react';
import styled from 'styled-components';



const ItemBox = styled.div `
    
       
    border: 1px solid gray
    margin: 2%;
    width: 42%;
`

const AuctionCard = (props) => {
    console.log('my response', props.item_name)
    return (
    
        <ItemBox>
            {/* add props for auction */}
            <img src={props.image} alt='items' />            
            <h3>{props.item}</h3>
            <p>{props.description}</p>
            <span>${props.price}</span>
            <button>Bid on Item</button> 
            
        </ItemBox>
    
    )

}





export default AuctionCard;