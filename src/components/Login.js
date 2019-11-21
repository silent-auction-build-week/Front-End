import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle `
  body {
   
  }
  #root {
    
  }
`
const Bodywrapper = styled.div `
 
`

const LoginWrapper = styled.div `
  
  font-family: 'Baloo Bhai';
  border: 2px solid #9370DB;  
  margin-left: 37%;
  margin-top: 5%;
  width: 230px;
  height: 20rem;
  background-color: #EEEEEE;
  border-radius: 7px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.7);
  font-size: .75rem;
  h1 {
    text-align: center;
    margin-bottom: -6%;
    color: #9370DB

   

  }
  h2 {
    text-align: center;
    color: #9370DB
    font-size: 1.3rem;

    
  }
`
const Image = styled.img `
  
  width: 230px;
  height: 30%;
  
  
`

const LoginForm = styled.form`
 
  display: flex;
  flex-direction: column;
  padding: 2%;
  margin-top: 10%;

`;

const LoginInput = styled.input`
  
  margin: 2%;
  border: 2px solid #FFCC66;
  border-radius: 5px;
`;

const LoginButtons = styled.button`
  font-family: 'Baloo Bhai';
  font-size: .90rem;
  margin-top: 10%;
  border: 2px solid #FFCC66;
  border-radius: 5px;
  width: 50%;
  height: 3vh;
  align-items: center;
  margin-left: 3.5rem;
  color: #9370DB;
  


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
            localStorage.setItem('userId', response.data.user.id)
            if(userType === "bidders"){
              props.history.push('/bidder-dash')
            } else {
              props.history.push('/seller-dash')
            }
          })
          .catch(error => console.log(error));
      };

    return(
    
     
        <LoginWrapper  >
         <h1>Bids of Silence</h1>
         <h2>Log-In</h2>
        
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
      </LoginWrapper>
     
    
        
    )
}

export default Login;