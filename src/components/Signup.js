import React, { useState } from "react";
import axios from "axios";

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
  const [token, setToken] = useState()

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
        setToken(response.data.token)
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <input
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            value={newUser.firstName}
            type="text"
          />
          <input
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={newUser.lastName}
            type="text"
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={newUser.email}
            type="email"
          />
          <input
            name="streetAddress"
            placeholder="Address"
            onChange={handleChange}
            value={newUser.streetAddress}
            type="text"
          />
          <input
            name="city"
            placeholder="City"
            onChange={handleChange}
            value={newUser.city}
            type="text"
          />
          <input
            name="state"
            placeholder="State"
            onChange={handleChange}
            value={newUser.state}
            type="text"
          />
          <input
            name="zipCode"
            placeholder="Zip"
            onChange={handleChange}
            value={newUser.zipCode}
            type="text"
          />
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={newUser.username}
            type="text"
          />
          <input
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
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
