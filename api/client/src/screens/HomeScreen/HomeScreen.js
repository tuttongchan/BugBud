import React, { useEffect } from 'react';
import './homeScreen.css';
import { useSelector } from 'react-redux';
import Topbar from '../../components/topbar/Topbar';
import Dashboard from '../../components/dashboard/Dashboard';
import { useHistory } from 'react-router';
import TabHome from '../../components/tabHome/TabHome';

const HomeScreen = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  let history = useHistory();

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [userInfo, history]);

  return (
    <div className="homescreen-container">
      <Topbar />
      <div className="bottom-container">
        {/* <Dashboard setTab={setTab} /> */}
        {/* {content} */}

        <Dashboard />
        <TabHome />
        {/* <Content /> */}
      </div>
    </div>
  );
};

export default HomeScreen;
