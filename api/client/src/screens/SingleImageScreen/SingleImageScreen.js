import React from 'react';
import './singleImageScreen.css';
import Dashboard from '../../components/dashboard/Dashboard';
import TabSingleImage from '../../components/tabSingleImage/TabSingleImage';
import Topbar from '../../components/topbar/Topbar';

const SingleImageScreen = (props) => {
  const imageId = props.match.params.id;
  return (
    <div className="singleimagecreen-container">
      <Topbar />
      <div className="bottom-container">
        <Dashboard />
        <TabSingleImage imageId={imageId} />
      </div>
    </div>
  );
};

export default SingleImageScreen;
