import React, { useState } from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {axiosWithAuth} from '../../actions';

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
  //console.log('my response', props.item_name)
  const [bidding, setBidding] = useState(false);
  const [itemToBidOn, setItemToBidOn] = useState({
      item_name: props.item.item_name,
      description: props.item.description,
      img_url: props.item.img_url,
      price: props.item.price
  });

  const itemBidding = item => {
    setBidding(true);
    setItemToBidOn(item);
  };

const saveBid = e => {
    //authAxios PUT request
    const authAxios = axiosWithAuth();
    e.preventDefault();
    authAxios.put(`https://silent-auction-be.herokuapp.com/api/items/${props.item.id}`, itemToBidOn)
    .then(response => {
        console.log(response);
    })
    .catch(error => console.log(error))
}

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
          <form onSubmit={saveBid}>
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

const mapDispatchToProps = {
    axiosWithAuth
}

export default connect(state => state, mapDispatchToProps)(AuctionCard);