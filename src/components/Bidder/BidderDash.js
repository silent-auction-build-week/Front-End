<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import AuctionCard from "./AuctionCard";
import ProfileCard from "./Header";

const Footer = styled.footer`
  width: 100%;
  height: 150px;
  border: 1px solid gray;
`;
const Sidebar = styled.div`
    display: flex:
    flex-direction: row-reverse;
    width: 30%;
    border: 1px solid gray;
`;
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AuctionCard from './AuctionCard';
import Hdr from './Header';

const MainDiv = styled.div `
    width: 100%;
`

const HeaderWrapper = styled.div `
    width: 100%
   

`

const BidderWrapper = styled.div `
    align-items: center;
    
    width: 800px;
    font-family: 'Baloo Bhai';
    border-radius: 3px;
  
`

const Footer = styled.footer `
width: 100%;
height: 100%;
border: 1px solid #FFCC66;;
`
>>>>>>> ca440e7a575eab18d605a4ee95db26518dcc33dc



const BidderDash = () => {
  const [activeAuctions, setActiveAuctions] = useState([]);
  // set active auctions to state
  const axiosWithAuth = () => {
    return axios.create({
      headers: {
        authorization: localStorage.getItem("token")
      }
    });
  };
  //console.log(props.auctions);

  //retrieve active auctions
  useEffect(() => {
    axios
      .get("https://silent-auction-be.herokuapp.com/api/items")
      .then(response => {
        //console.log('response from server', response.data.items)
        console.log(response.data);
        setActiveAuctions(response.data.items);
      })
      .catch(error => {
        console.log("Your data was lost, try again", error);
      });
  }, []);

  // display active auctions
  //const auctions = activeAuctions

<<<<<<< HEAD
  // retrieve items bid on
=======
// display active auctions
>>>>>>> ca440e7a575eab18d605a4ee95db26518dcc33dc

  // display items bid on
  const saveBid = (e, item) => {
    //authAxios PUT request
    const authAxios = axiosWithAuth();
    e.preventDefault();
    authAxios
      .put(`https://silent-auction-be.herokuapp.com/api/items/${item.id}`, item)
      .then(response => {
        let newAuctions = activeAuctions.filter(items => items.id !== item.id);
        newAuctions.push(response.data.updatedItem[0]);
        //console.log(newAuctions);
        setActiveAuctions(newAuctions);
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <ProfileCard />
      <Sidebar>
        <p>Hello</p>
      </Sidebar>
      {activeAuctions.map(live => (
        <AuctionCard key={live.id} item={live} saveBid={saveBid} />
      ))}
      <Footer></Footer>
    </div>
  );
};

<<<<<<< HEAD
export default BidderDash;
=======

    return (
     <MainDiv>
       <HeaderWrapper>         
         <Hdr/>
       </HeaderWrapper>
         <BidderWrapper>
            {activeAuctions.map(live =>                
                <AuctionCard    
                    key={live.id} 
                    item={live}
                />)}; 
            <Footer>
                
            </Footer>                   
          </BidderWrapper>
      </MainDiv>
    )
}


export default BidderDash;
>>>>>>> ca440e7a575eab18d605a4ee95db26518dcc33dc
