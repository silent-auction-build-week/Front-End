/* ------------------------------------------------*/
import React, { useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown-now";
/* ------------------------------------------------*/
const AuctionBox = styled.div`
    font-family: 'Baloo Bhai';
    background-color:  #EEEEEE;         
    border: 2px solid #9370DB;
    margin: 5% 0;
    margin: 2%;
    width: 400px;
    height: 100%;    
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);
    font-size: .75rem;  
    p {
        font-size: 1rem;
        margin: 2%      
    }
    h1 {
       margin: 2%;
        color: #black;
    }
`
/* ------------------------------------------------*/
const AuctionBody = styled.div`
  // max-width: 100%;
  height: 100%;
`
/* ------------------------------------------------*/
const Prices = styled.span`
    margin: 0 20%;
    color: #black;
    font-size: 1.5rem;
    align-items: center;
`

const Button = styled.button `
   font-family: 'Baloo Bhai';
   width: 30%;
   background-color: #9370DB;
   border-radius: 3px;
   height: 30px;
   margin-bottom: 3%;
`
/* ------------------------------------------------*/
const Form = styled.form`
    font-size: 1.1rem;
    color: #black;
    margin-bottom: 3%;

`
/* ------------------------------------------------*/
const ImgItem = styled.img`
    display: block;
    width: 100%;
    height: 275px; 
    border-radius: 10px; 
`
/* ------------------------------------------------*/
const AuctionCard = props => {
  const [bidding, setBidding] = useState(false);
  const [itemToBidOn, setItemToBidOn] = useState({
    item_name: props.item.item_name,
    description: props.item.description,
    img_url: props.item.img_url,
    price: props.item.price,
    id: props.item.id
  });
  const changeHandler = event => {
    props.setNewAuction({ ...props.newAuction, [event.target.name]: event.target.value });
  };
  /* ------------------------------------------------*/
  const itemBidding = item => {
    setBidding(true);
    setItemToBidOn(item);
  };
  /* ------------------------------------------------*/
  return (
    <AuctionBody>
      <AuctionBox>
        {}
        <div>
        </div>
        <h1>{props.item.item_name}</h1>
        <div>
          <h1> Auction Created By {props.item.firstName} {props.item.lastName} </h1>
          <h1> Countdown <Countdown date={props.item.auction_end} /> </h1>
        </div>
        <Prices>${props.item.price}</Prices>
        <Button onClick={() => itemBidding(props.item)}>Edit Auction</Button>
        {bidding && (
          <Form onSubmit={(e) => props.saveBid(e, itemToBidOn)}>
            {}
            <label>
              Set Auction Start:
              <input
                type="datetime-local"
                onChange={changeHandler}
                value={props.newAuction.auction_start}
              />
            </label>
            <label>
              Set Auction End:
              <input
                type="datetime-local"
                onChange={changeHandler}
                value={props.newAuction.auction_end}
              />
            </label>
            <div className="button-row">
              <button type="submit">Create</button>
              <button onClick={() => setBidding(false)}>Cancel</button>
            </div>
          </Form >
        )}
      </AuctionBox>
    </AuctionBody>
  );
};
/* ------------------------------------------------*/
export default AuctionCard;
/* ------------------------------------------------*/