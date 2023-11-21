// LoginPage.js
import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleLogin = () => {
    nav("/home");
  };
  const handlesignup =() => {
      nav("/Signup")
  };

  return (
    <div className='loginheading'>
      <div className='login-container'>
      
      
        <h2>MEETING SCHEDULE</h2>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <button type="button" onClick={handlesignup}>
            sign up
          </button>
        </form>
      </div>
    </div>
  );
};


export default LoginPage;
