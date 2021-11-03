import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../../actions/userActions';
import './topbar.css';

const Topbar = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
    window.location.replace('/login');
  };

  return (
    <div className="topbar-container">
      <div className="topbar-logo-container">
        <Link to='/' style={{ textDecoration: 'none', color: '#000' }}>
          <h4>BugBud</h4>
        </Link>
        <i className="fas fa-bug"></i>
      </div>
      <div className="topbar-right-container">
        <div className="topbar-profile-container">
          <h5>{userInfo.name[0].toUpperCase()}</h5>
        </div>
        <div className="topbar-dropdown-container">
          <div onClick={signoutHandler}>
            <i className="fas fa-sign-out-alt"></i> Signout
          </div>
        </div>
        <i className="fas fa-caret-down"></i>
      </div>
    </div>
  );
};

export default Topbar;
