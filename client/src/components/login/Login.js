import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-top-container">
        <h1>Login</h1>
      </div>
      <div className="login-bottom-container">
        <input type="text" />
        <input type="text" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
