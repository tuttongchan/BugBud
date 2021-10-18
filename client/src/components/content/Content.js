import React from 'react';
import './content.css';
import PieChart from '../pieChart/PieChart';
import BarGraph from '../barGraph/BarGraph';

const Content = () => {
  return (
    <div className="content-container">
      <div className="content-grid">
        <div className="bargraph-container">
          <BarGraph />
        </div>
        <div className="piechart-container">
          <PieChart />
        </div>
        <div>
          <BarGraph />
        </div>
        <div>
          <BarGraph />
        </div>
      </div>
    </div>
  );
};

export default Content;
