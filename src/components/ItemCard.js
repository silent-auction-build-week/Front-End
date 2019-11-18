import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
width: 300px;
height: 450px;
border: 1px solid gray;
margin: 1%;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
border-radius: 10px;
text-align: center;
background-color: #9cd2ff

`

const ItemCard = (props) => {
    return (
    <div>
        <Card>
       
            <Img src={props.url}/>
            <h1>Add Items To Auction</h1>
            
            <p> {props.name} </p>
            <p>Gender: {props.gender} </p>
            <p>Species: {props.species} </p>
            <p>Status {props.status} </p>

        </Card>
    </div>

    )
}




export default ItemCard