import React, { useEffect } from 'react';
import './tabbugs.css';
import BugList from '../bugList/BugList';

const TabBugs = () => {
  return (
    <div className="tabbugs-container">
      <h1 className="tabbugs-heading">Bugs</h1>

      <BugList />
    </div>
  );
};

export default TabBugs;
