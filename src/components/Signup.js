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
    zipCode: 0,
    username: "",
    password: "",
    organization: "",
    userType: ""
  });

  const handleChange = e => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(
        `https://silent-auction-be.herokuapp.com/auth/register/${newUser.userType}`,
        newUser
      )
      .then(response => console.log("registration response", response))
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
            type="number"
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
          <input
            name="organization"
            placeholder="Organization"
            onChange={handleChange}
            value={newUser.organization}
            type="text"
          />
          <select
            name="userType"
            placeholder="User Type"
            onChange={handleChange}
            value={newUser.userType}
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
