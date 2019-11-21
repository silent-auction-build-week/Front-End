/* ------------------------------------------------*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AuctionCard from './AuctionCard';
import Hdr from './Header';
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

const BidderDash = () => {
  const [activeAuctions, setActiveAuctions] = useState([]);

  const axiosWithAuth = () => {
    return axios.create({
      headers: {
        authorization: localStorage.getItem("token")
      }
    });
  };

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

  const saveBid = (e, item) => {
    const authAxios = axiosWithAuth();
    e.preventDefault();
    authAxios
      .put(`https://silent-auction-be.herokuapp.com/api/items/${item.id}`, item)
      .then(response => {
        let newAuctions = activeAuctions.filter(items => items.id !== item.id);
        newAuctions.push(response.data.updatedItem[0]);

        setActiveAuctions(newAuctions);
      })
      .catch(error => console.log(error));
  };

/* ------------------------------------------------*/

  return (
    <MainDiv>
       <HeaderWrapper>         
         <Hdr/>
       </HeaderWrapper>
       <SearchForm auctions={activeAuctions} /> 
      
             <BidderWrapper>
            {/* {activeAuctions.map(live =>                
                <AuctionCard    
                    key={live.id} 
                    item={live}
                    saveBid={saveBid}
                />)}  */}
                   
          </BidderWrapper>
      </MainDiv>
  );
};

/* ------------------------------------------------*/

export default BidderDash;

/* ------------------------------------------------*/