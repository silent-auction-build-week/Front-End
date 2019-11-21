import React, { useState } from "react";
import styled from "styled-components";

const AuctionBox = styled.div`           
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
`;
const AuctionBody = styled.div`
  max-width: 75%;
  display: flex;
`;

const AuctionCard = props => {
  //console.log('my response', props.auctions)
  const [bidding, setBidding] = useState(false);
  const [itemToBidOn, setItemToBidOn] = useState({
    item_name: props.item.item_name,
    description: props.item.description,
    img_url: props.item.img_url,
    price: props.item.price,
    id: props.item.id
  });

  const itemBidding = item => {
    setBidding(true);
    setItemToBidOn(item);
  };

  return (
    <AuctionBody>
      <AuctionBox>
        {/* add props for auction */}
        <img src={props.item.img_url} alt="items" />
        <h4>{props.item.item_name}</h4>
        <div>
          <p>{props.item.description}</p>
        </div>
        <span>${props.item.price}</span>
        <button onClick={() => itemBidding(props.item)}>Bid on Item</button>
        {bidding && (
          <form onSubmit={e => props.saveBid(e, itemToBidOn)}>
            <legend>place bid</legend>
            <label>
              bid amount:
              <input
                onChange={e =>
                  setItemToBidOn({ ...itemToBidOn, price: e.target.value })
                }
                value={itemToBidOn.price}
              />
            </label>
            <div className="button-row">
              <button type="submit">place bid</button>
              <button onClick={() => setBidding(false)}>cancel</button>
            </div>
          </form>
        )}
      </AuctionBox>
    </AuctionBody>
  );
};

export default AuctionCard;
