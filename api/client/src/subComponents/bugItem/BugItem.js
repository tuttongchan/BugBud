import React from 'react';
import { Link } from 'react-router-dom';
import './bugitem.css';

const BugItem = ({ bug }) => {
  return (
    <Link
      to={`/bug/${bug._id}`}
      style={{ textDecoration: 'none', color: '#000' }}
    >
      <div className="bugitem-card">
        <div className="bugitem-heading-container">
          <h3 className="bugitem-heading">{bug.bugName}</h3>
        </div>
        <div className="bugitem-language-container">
          {/* <div style={{ width: '5rem' }}> */}
          <div className="bugitem-language-heading-container">
            <h5 className="bugitem-language-heading">Tech💻:</h5>
          </div>
          <span className="bugitem-language-span">{bug.language}</span>
        </div>

        <div className="bugitem-desc-container">
          {/* <div style={{ width: '5rem' }}> */}
          <div className="bugitem-desc-heading-container">
            <span className="bugitem-desc-heading">Info📚:</span>
          </div>
          <p className="bugitem-desc">{bug.desc}</p>
        </div>
        <div className="bugitem-links-container">
          {/* <div style={{ width: '5rem' }}> */}
          <div className="bugitem-links-heading-container">
            <span className="bugitem-links-span">Links🔗:</span>
          </div>
          <a className="bugitem-links" href={bug.links}>
            {bug.links}
          </a>
        </div>
        {!bug.code ? null : (
          <div className="bugitem-code-container">
            <p className="bugitem-code">{bug.code}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default BugItem;
