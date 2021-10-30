import React, { useEffect } from 'react';
import './bugsScreen.css';
import { useSelector } from 'react-redux';
import Topbar from '../../components/topbar/Topbar';
import Dashboard from '../../components/dashboard/Dashboard';
import { useHistory } from 'react-router';
import TabBugs from '../../components/tabBugs/TabBugs';

const BugsScreen = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  // console.log(userSignin)
  // console.log(userInfo)
  
  let history = useHistory();
  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [userInfo, history]);

  return (
    <div className="bugscreens-container">
      <Topbar />
      <div className="bottom-container">

        <Dashboard />
        <TabBugs />
        {/* <TabSingleBug /> */}
      </div>
    </div>
  );
};

export default BugsScreen;
