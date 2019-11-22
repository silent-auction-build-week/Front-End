/* ------------------------------------------------*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AuctionCard from './AuctionCard';

import SearchForm from './SearchForm';

/* ------------------------------------------------*/

const MainDiv = styled.div `
    width: 100%;
`

/* ------------------------------------------------*/

const HeaderWrapper = styled.div `
    width: 100%
   

`
/* ------------------------------------------------*/

const BidderWrapper = styled.div `
    align-items: center;
    
    width: 800px;
    font-family: 'Baloo Bhai';
    border-radius: 3px;
  
`

/* ------------------------------------------------*/

const SellerDash = () => {
  const [activeAuctions, setActiveAuctions] = useState([]);
  const userId = localStorage.getItem("userId")

  const axiosWithAuth = () => {
    return axios.create({
      headers: {
        authorization: localStorage.getItem("token")
      }
    });
  };

/* ------------------------------------------------*/

const [newAuction, setNewAuction] = useState({
    itemId: Date.now(),
    auction_start: "",
    auction_end: ""
});

/* ------------------------------------------------*/

  useEffect(() => {
    axios
      .get("https://silent-auction-be.herokuapp.com/api/auctions")
      .then(response => {
        console.log(response.data);
        setActiveAuctions(response.data.auctions);
      })
      .catch(error => {
        console.log("Your data was lost, try again", error);
      });
  }, []);

/* ------------------------------------------------*/

  const makeNewAuction = (e, item) => {
    const authAxios = axiosWithAuth();
    e.preventDefault();
    authAxios
    .post(`https://silent-auction-be.herokuapp.com/${userId}/${newAuction.itemId}/auctions`, newAuction.auction_start, newAuction.auction_end)
    .then(response => {
        // let newAuctions = activeAuctions.filter(items => items.id !== item.id);
        // newAuctions.push(response.data.updatedItem[0]);

        // setActiveAuctions(newAuctions);
      })
      .catch(error => console.log(error));
  };

/* ------------------------------------------------*/

  return (
    <MainDiv>

    <SearchForm auctions={activeAuctions} newAuction={newAuction} setNewAuction={setNewAuction} makeNewAuction={makeNewAuction} /> 
      
             <BidderWrapper>{}
                   
          </BidderWrapper>
      </MainDiv>
  );
};

/* ------------------------------------------------*/

export default SellerDash;

/* ------------------------------------------------*/