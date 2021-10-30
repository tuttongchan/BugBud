import React from 'react';
import { Link } from 'react-router-dom';
import './bugitem.css';

const BugItem = ({ bug }) => {
  console.log(bug._id);

  return (
    <Link to={`/bug/${bug._id}`} style={{ textDecoration: 'none', color: '#000' }}>
      <div className="bugitem-card">
        <h3 className="bugitem-heading">{bug.bugName}</h3>
        <h5 className="bugitem-language-heading">
          Tech💻: <span className="bugitem-language-span">{bug.language}</span>
        </h5>
        <div className="bugitem-desc-container">
          <p className="bugitem-desc">
            <span className="bugitem-desc-span">Info📚:</span> {bug.desc}
          </p>
        </div>
        <div className="bugitem-links-container">
          <p className="bugitem-links">
            <span className="bugitem-links-span">Links🔗:</span> {bug.links}
          </p>
        </div>
        <div className="bugitem-code-container">
          <p className="bugitem-code">{bug.code}</p>
        </div>
      </div>
    </Link>
  );
};

export default BugItem;
