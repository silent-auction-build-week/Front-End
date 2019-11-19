import React, { useState } from 'react';
import styled from 'styled-components';


 const ItemName = styled.label`
    
    font-size: 1.2rem;   
 `
 const NameInput = styled.input`
    width: 70%;
    height: 5%;
    margin-bottom: 10%;
 `

 
    
    


const ItemForm = () => {
const [name, setName] = useState("");

const handleChange = event => {
  setName(event.target.value);
};

const handleSubmit = event => {
  event.preventDefault();
  console.log(name);
};

return (
  <>
    {/* {console.log(name)} */}
    <form className='form-text' onSubmit={event => handleSubmit(event)}>
      <ItemName>
        Item Name:
        <NameInput type="text" onChange={event => handleChange(event)} />
      </ItemName>
      <br/>
      <label>
        Description:
        <input type="text" onChange={event => handleChange(event)} />
      </label>
      <br/>
      <label>
        Starting Bid:
        <input type="text" onChange={event => handleChange(event)} />
      </label>
      <br/>
      <button>Submit!</button>
    </form>
  </>
);
}




export default ItemForm;
