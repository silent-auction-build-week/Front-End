import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2%;
  margin-top: 60px;
`;

const SignupInput = styled.input`
  margin: 2%;
`;

const SignupButtons = styled.button`
  margin: 2%;
`;

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
    <>
      <div className="signup">
        <SignupForm onSubmit={handleSubmit}>
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
          <SignupInput
            name="city"
            placeholder="City"
            onChange={handleChange}
            value={newUser.city}
            type="text"
          />
          <SignupInput
            name="state"
            placeholder="State"
            onChange={handleChange}
            value={newUser.state}
            type="text"
          />
          <SignupInput
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
          <select
            name="userType"
            placeholder="User Type"
            onChange={handleChange}
            value={userType}
            type="text"
          >
            <option value="">Please make a selection</option>
            <option value="bidders">Bidder</option>
            <option value="sellers">Seller</option>
          </select>
          <SignupButtons>Submit</SignupButtons>
        </SignupForm>
      </div>
    </>
  );
};

export default SignUp;
