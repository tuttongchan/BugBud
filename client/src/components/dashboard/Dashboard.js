import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-list-container">
        <ul className="dashboard-list">
          <Link className="dashboard-list-item" to="/">
            <li>Home</li>
          </Link>
          <Link className="dashboard-list-item" to="/bugs">
            <li>Bugs</li>
          </Link>
          <li className="dashboard-list-item">Templates</li>
          <li className="dashboard-list-item">My Tickets</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
