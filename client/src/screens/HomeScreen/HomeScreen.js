import React from 'react';
import './homeScreen.css';
import { useSelector } from 'react-redux';
import Topbar from '../../components/topbar/Topbar';
import Dashboard from '../../components/dashboard/Dashboard';
import Content from '../../components/content/Content';
import { useHistory } from 'react-router';

const HomeScreen = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  let history = useHistory()
  if (!userInfo) {
    history.push('/login');
  }

  return (
    <div>
      <Topbar />
      <div className="bottom-container">
        <Dashboard />
        <Content />
      </div>
    </div>
  );
};

export default HomeScreen;
