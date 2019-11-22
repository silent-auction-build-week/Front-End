import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AuctionCard from "./AuctionCard";
import newAuction from "./newAuction";


const StyledCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;    
    margin: 1%;   
`
const Button = styled.button `
   width: 30%;
   background-color: #9370DB;
   border-radius: 3px;
   height: 30px;
   margin-bottom: 3%;
`
const Form = styled.form `
    font-size: 1.1rem;
    color: #9370DB;
    margin-bottom: 3%;

`

export default function SearchForm(props) {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [addingAuction, setAddingAuction] = useState(false)

  useEffect (() => { 
    const data = props.auctions.filter(auctions => auctions.firstName.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(data);
  },[searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const changeHandler = event => {
    props.setNewAuction({...props.newAuction, [event.target.name]: event.target.value });
  };
 
  return (
    <section className="search-form">
     <form className="search">
       <input type="text" name="textfield" placeholder="Search" value={searchTerm} onChange={handleChange} />
     </form>

        {/* <button onClick={<newAuction newAuction={props.newAuction} setNewAuction={props.setNewAuction} makeNewAuction={props.makeNewAuction} />}>
            Create A New Auction
        </button> */}
        <Button onClick={() => setAddingAuction(true)}>Create A New Auction</Button>
        {addingAuction && (

          <Form  onSubmit={(e) => props.makeNewAuction(e)}>

            {/* <legend>place bid</legend> */}
            <label htmlFor="auctionStart">
              Set Auction Start:
              </label>
              <input
                name="auctionStart"
                id="auctionStart"
                type="datetime-local"
                onChange={changeHandler}
                value={props.newAuction.auction_start}
              />
            
            <label htmlFor="auctionEnd">
              Set Auction End:
              </label>
              <input
                name="auctionEnd"
                id="auctionEnd"
                type="datetime-local"
                onChange={changeHandler}
                value={props.newAuction.auction_end}
              />

            <div className="button-row">
              <Button type="submit">Create</Button>
            </div>
          </Form >
        )}

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
