import React, { useState, useEffect } from 'react';
import './loginScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { signin } from '../../actions/userActions';
import TextField from '@mui/material/TextField';
// import LoadingBox from '../../subComponents/loadingBox/LoadingBox';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  // const { loading, error, userInfo } = userSignin;
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  const guestHandler = (e) => {
    e.preventDefault();
    dispatch(signin('guest@example.com', '123'));
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
          <h1>
            BugBud
            <i className="fas fa-bug" style={{marginLeft: '5px', fontSize: '1.7rem'}}></i>
          </h1>
        </div>
        <form>
          <div className="login-bottom-container">
            <TextField
              id="standard-basic"
              label="Email"
              style={{
                marginBottom: '.9rem',
                fontFamily: 'Poppins,sans-serif',
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Password"
              style={{ marginBottom: '1rem' }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={submitHandler} style={{ marginBottom: '.7rem' }}>
              Login
            </button>
            <button onClick={guestHandler}>Guest</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
