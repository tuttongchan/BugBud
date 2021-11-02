import React from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
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
