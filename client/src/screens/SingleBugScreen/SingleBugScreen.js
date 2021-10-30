import React from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import TabSingleBug from '../../components/tabSingleBug/TabSingleBug';
import Topbar from '../../components/topbar/Topbar';
import './singleBugScreen.css';

const SingleBugScreen = (props) => {
  const productId = props.match.params.id;
  console.log(productId);
  return (
    <div className="singlebugscreen-container">
      <Topbar />
      <div className="bottom-container">
        <Dashboard />
        <TabSingleBug productId={productId} />
      </div>
    </div>
  );
};

export default SingleBugScreen;
