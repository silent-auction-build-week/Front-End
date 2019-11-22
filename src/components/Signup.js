import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';


const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: #EEEEEE;
  border-radius: 7px;
  font-size: 1.2rem;
  font-family: 'Baloo Bhai';
  border: 2px solid #9370DB;
  h1 {
    text-align: center;
    margin-bottom: -3%;
    color: #9370DB;
  }
  h2 {
    text-align: center;
    color: #9370DB;
    font-size: 1.3rem;
    
  }
  
  // padding: 2%;
  // margin-top: 60px;
  
  
`

const SignupInput = styled.input`
  margin: 2%;
  border-radius: 1px;
  height: 20px;
  width: 70%;
  font-size: 1.2rem;
  border: 2px solid #9370DB;
  align-items: center;
`
const ZipInput = styled.input`
  margin: 2%;
  border-radius: 1px;
  height: 20px;
  width: 150px;
  font-size: 1.2rem;
  border: 2px solid #9370DB;
`
const StateInput = styled.input`
  margin: 2%;
  border-radius: 1px;
  height: 20px;
  width: 50px;
  font-size: 1.2rem;
  border: 2px solid #9370DB;
`
const CityInput = styled.input`
  
  margin: 2%;
  border-radius: 1px;
  height: 20px;
  
  font-size: 1.2rem;
  border: 2px solid #9370DB;
`
const SignUpSelect = styled.select`
  display: flex;
  height: 25px;
  width: 50%;
  margin-left: 2%;
  align-content: center;
  font-size: .75rem;
  border: 2px solid #9370DB;

`

const SignupButtons = styled.button`
  margin: 4%;
  width: 30%;
  height: 25px;
  border-radius: 7px;
  font-size: 1rem;
  border: 2px solid #9370DB;
`
// start of Component

const SignUp = props => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    username: "",
    password: ""
  });
  const [userType, setUserType] = useState();

  const handleChange = e => {
    if(e.target.name === "userType"){
      setUserType(e.target.value);
    }else{
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(newUser)
    // console.log(userType)
    axios
      .post(
        `https://silent-auction-be.herokuapp.com/auth/register/${userType}`,
        newUser
      )
      .then(response => {
        console.log("registration response", response)
        localStorage.setItem('token', response.data.token)
      })
      .catch(error => console.log(error));
  };

  return (
    

      <div className="signup">
        <SignupForm onSubmit={handleSubmit}>
        <h1>Bids of Silence</h1>
        <h2>Sign-Up</h2>
          <SignupInput
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            value={newUser.firstName}
            type="text"
          />
          <SignupInput
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={newUser.lastName}
            type="text"
          />
          <SignupInput
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={newUser.email}
            type="email"
          />
          <SignupInput
            name="streetAddress"
            placeholder="Address"
            onChange={handleChange}
            value={newUser.streetAddress}
            type="text"
          />
          <CityInput
            name="city"
            placeholder="City"
            onChange={handleChange}
            value={newUser.city}
            type="text"
          />
          <StateInput
            name="state"
            placeholder="State"
            onChange={handleChange}
            value={newUser.state}
            type="text"
          />
          <ZipInput
            name="zipCode"
            placeholder="Zip"
            onChange={handleChange}
            value={newUser.zipCode}
            type="text"
          />
          <SignupInput
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={newUser.username}
            type="text"
          />
          <SignupInput
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={newUser.password}
            type="password"
          />
          <SignUpSelect
            name="userType"
            placeholder="User Type"
            onChange={handleChange}
            value={userType}
            type="text"
          >
            <option value="">Please make a selection</option>
            <option value="bidders">Bidder</option>
            <option value="sellers">Seller</option>
          </SignUpSelect>
          <SignupButtons>Submit</SignupButtons>
        </SignupForm>
      </div>
    
  );
};

export default SignUp;
