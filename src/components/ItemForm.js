import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  <div>
    {console.log(name)}
    <form onSubmit={event => handleSubmit(event)}>
      <label>
        Item Name:
        <input type="text" onChange={event => handleChange(event)} />
      </label>
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
  </div>
);
}




export default ItemForm;
