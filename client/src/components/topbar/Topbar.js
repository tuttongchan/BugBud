import React from 'react';
import { useDispatch } from 'react-redux';
import { signout } from '../../actions/userActions';
import './topbar.css';

const Topbar = () => {
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
    window.location.replace('/login');
  };

  return (
    <div className="topbar-container">
      <button onClick={signoutHandler}>Signout</button>
    </div>
  );
};

export default Topbar;
