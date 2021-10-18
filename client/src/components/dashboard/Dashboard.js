import React from 'react';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-list-container">
        <ul className="dashboard-list">
          <li className="dashboard-list-item">Home</li>
          <li className="dashboard-list-item">Bugs</li>
          <li className="dashboard-list-item">Templates</li>
          <li className="dashboard-list-item">My Tickets</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
