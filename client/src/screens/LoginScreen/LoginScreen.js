import React, { useState, useEffect } from 'react';
import './loginScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { signin } from '../../actions/userActions';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  const history = useHistory();
  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [userInfo, history]);

  return (
    <div className="loginscreen-container">
      <div className="login-container">
        <div className="login-top-container">
          <h1>Login</h1>
        </div>
        <form onSubmit={submitHandler}>
          <div className="login-bottom-container">
            <input
              type="text"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">
              Login
            </button>
          </div>
        </form>
        {error ? <h1>{error}</h1> : null}
      </div>
    </div>
  );
};

export default LoginScreen;
