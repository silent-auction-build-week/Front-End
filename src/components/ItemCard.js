import React, { useState, useCallback } from "react";

import ItemForm from "./ItemForm";

import styled from "styled-components";
import axios from 'axios';



const MainDiv = styled.div`
display: flex;
flex-direction: column;
border-radius: 10px;
width: 40vw;
min-height: 70vh;
max width: 440 px;
margin: 35px auto;
background: #fff;
padding: 1%;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`
const MainTitle = styled.h1 `
margin-bottom: 6%;

`
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

            <MainTitle>Add Item To Auction</MainTitle>

            <ItemForm/>
                 
          
                
        </MainDiv>

        );
};

export default ItemCard;
