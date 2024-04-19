// login.js

import React, { useState } from 'react';
import Navbar from './Navbar'
function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Your login logic here
    console.log("Logging in with: ", loginEmail, loginPassword);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Your registration logic here
    console.log("Registering with: ", registerEmail, registerPassword, confirmPassword);
  };

  return (
    <div>
       <Navbar/>
  
    <div className="login-container">
     
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleRegisterSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
