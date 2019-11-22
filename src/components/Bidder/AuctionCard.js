import React, { useState } from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {axiosWithAuth} from '../../actions';
const ImgItem = styled.img `
    display: block;
    width: 100%;
    height: 275px; 
    border-radius: 10px; 
`

const AuctionBox = styled.div`
    
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
        margin: 2% 4%;      
    }
    h1 {
        margin: 2%;
        color: #9370DB;
    }
    
    
`
const AuctionBody = styled.div`
  width: 100%;
  height: 100%;
  
  
  

`
const Prices = styled.span `
    margin: 0 20%;
    color: #9370DB;
    font-size: 1.2rem;
    align-items: center;
`

const Button = styled.button `
   width: 30%;
   background-color: #9370DB;
   border-radius: 3px;
   height: 30px;
   margin-bottom: 3%;
   font-family: 'Baloo Bhai';
   font-size: 1.3rem;
`

const Form = styled.form `
    font-size: 1.1rem;
    color: #9370DB;
    margin-bottom: 3%;

`
// start of Component
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
        <div>
        <ImgItem src={props.item.img_url} alt="items" />
        </div>
        <h1>{props.item.item_name}</h1>
        <div>
          <p>{props.item.description}</p>
        </div>
        
        <Prices>${props.item.price}</Prices>
        <Button onClick={() => itemBidding(props.item)}>Bid</Button>
        {bidding && (
          <Form  onSubmit={saveBid}>
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
              <Button type="submit">place bid</Button>
              <Button onClick={() => setBidding(false)}>cancel</Button>
            </div>
          </Form >
        )}
      </AuctionBox>
    </AuctionBody>
  );
};

const mapDispatchToProps = {
    axiosWithAuth
}

export default connect(state => state, mapDispatchToProps)(AuctionCard);
