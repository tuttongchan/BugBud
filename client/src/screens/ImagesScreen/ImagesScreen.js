import React from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import TabBugs from '../../components/tabBugs/TabBugs';
import Topbar from '../../components/topbar/Topbar';
import TabImages from '../../components/tabImages/TabImages'
import './imagesScreen.css';

const ImagesScreen = () => {
  return (
    <div className="imagesscreen-container">
      <Topbar />
      <div className="bottom-container">
        <Dashboard />
        <TabImages />
      </div>
    </div>
  );
};

export default ImagesScreen;
