import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2%;
  margin-top: 60px;
`;

const LoginInput = styled.input`
  margin: 2%;
`;

const LoginButtons = styled.button`
  margin: 2%;
`;

const Login = props => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const [userType, setUserType] = useState();

    const handleChange = e => {
      if(e.target.name === "userType"){
        setUserType(e.target.value);
      }else{
        setUser({ ...user, [e.target.name]: e.target.value });
      }
        
      };

      const handleSubmit = e => {
        e.preventDefault();
        console.log(user)
        axios
          .post(
            `https://silent-auction-be.herokuapp.com/auth/login/${userType}`,
            user
          )
          .then(response => {
            console.log("registration response", response)
            localStorage.setItem('token', response.data.token)
            if(userType === "bidders"){
              props.history.push('/bidder-dash')
            } else {
              props.history.push('/seller-dash')
            }
          })
          .catch(error => console.log(error));
      };

    return(
        <>
        <div className="login">
            <LoginForm onSubmit={handleSubmit}>
            <LoginInput
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={user.username}
            type="text"
          />
          <LoginInput
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
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
          <LoginButtons>Login</LoginButtons>
          <LoginButtons><Link to='signup'>Sign Up</Link></LoginButtons>
            </LoginForm>
        </div>
        </>
    )
}

export default Login;