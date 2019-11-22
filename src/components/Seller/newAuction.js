/* ------------------------------------------------*/
import React from 'react';
import styled from "styled-components";
/* ------------------------------------------------*/
const Form = styled.form`
    font-size: 1.1rem;
    color: #9370DB;
    margin-bottom: 3%;
    

`
/* ------------------------------------------------*/
const newAuction = props => {
  const changeHandler = event => {
    props.setNewAuction({ ...props.newAuction, [event.target.name]: event.target.value });
  };
  /* ------------------------------------------------*/
  return (
    /* ------------------------------------------------*/
    <Form onSubmit={props.makeNewAuction}>
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
      </div>
    </Form >
    /* ------------------------------------------------*/
  )
}
/* ------------------------------------------------*/
export default newAuction;
/* ------------------------------------------------*/