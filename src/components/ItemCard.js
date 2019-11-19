import React from "react";
import ItemForm from "./ItemForm";
import AddItem from "./AddItem";
import styled from "styled-components";

const MainDiv = styled.div`
  border-radius: 10px;
  width: 80vw;
  min-height: 70vh;
  maxwidth: 1024 px;
  margin: 35px auto;
  background: #fff;
  padding: 15px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const ItemBox = styled.div`
border: 1px solid grey;
width: 200px;
height: 250px;
padding: 4%;
margin-left: 4%;
margin-top: -6%
border-radius: 10px;
`;
// const Card = styled.div`
// width: 300px;
// height: 450px;
// border: 1px solid gray;
// margin: 1%;
// box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
// border-radius: 10px;
// text-align: center;
// background-color: #9cd2ff
// `

const ItemCard = props => {
  return (
    <MainDiv>
      <h1>Add Item To Auction</h1>
      <ItemForm />
      <ItemBox />

      <AddItem />
    </MainDiv>
  );
};

export default ItemCard;
