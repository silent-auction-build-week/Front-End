import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AuctionCard from "./AuctionCard";
import newAuction from "./newAuction";


const StyledCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;    
    margin: 1%;   
`;

export default function SearchForm(props) {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect (() => { 
    const data = props.auctions.filter(auctions => auctions.firstName.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(data);
  },[searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 
  return (
    <section className="search-form">
     <form className="search">
       <input type="text" name="textfield" placeholder="Search" value={searchTerm} onChange={handleChange} />
     </form>

        <button onClick={<newAuction newAuction={props.newAuction} setNewAuction={props.setNewAuction} makeNewAuction={props.makeNewAuction} />}>
            Create A New Auction
        </button>

      {
        searchResults.length === 0
        ? (<StyledCard>
        {props.auctions.map(live => (
          <AuctionCard key={live.id} newAuction={props.newAuction} setNewAuction={props.setNewAuction} item={live} />
        ))}
      </StyledCard>) 
      : (<StyledCard>
        {searchResults.map(live => (
          <AuctionCard key={live.id} newAuction={props.newAuction} setNewAuction={props.setNewAuction} item={live} />
        ))}
      </StyledCard>)
      }

  </section>
  );
}
