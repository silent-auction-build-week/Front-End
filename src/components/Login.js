import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Login = props => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

      const handleSubmit = e => {
        e.preventDefault();
        console.log(user)
        axios
          .post(
            `https://silent-auction-be.herokuapp.com/auth/login/bidders`,
            user
          )
          .then(response => console.log("login response", response))
          .catch(error => console.log(error));
      };

    return(
        <>
        <div className="login">
            <form onSubmit={handleSubmit}>
            <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={user.username}
            type="text"
          />
          <input
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
            type="password"
          />
          <button>Login</button>
          <button><Link to='signup'>Sign Up</Link></button>
            </form>
        </div>
        </>
    )
}

export default Login;