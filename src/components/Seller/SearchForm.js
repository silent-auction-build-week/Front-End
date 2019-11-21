import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AuctionCard from "./AuctionCard";

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

      {
        searchResults.length === 0
        ? (<StyledCard>
        {props.auctions.map(live => (
          <AuctionCard key={live.id} item={live} />
        ))}
      </StyledCard>) 
      : (<StyledCard>
        {searchResults.map(live => (
          <AuctionCard key={live.id} item={live} />
        ))}
      </StyledCard>)
      }

  </section>
  );
}

//

