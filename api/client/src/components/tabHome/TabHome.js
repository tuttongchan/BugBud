import { useEffect } from 'react';
import React from 'react';
import './tabhome.css';
import PieChart from '../pieChart/PieChart';
import BarGraph from '../barGraph/BarGraph';
import UserList from '../userList/UserList';
import { useDispatch, useSelector } from 'react-redux';
import { bugsDetails } from '../../actions/bugActions';
import CodeEditor from '@uiw/react-textarea-code-editor';

const TabHome = () => {
  const dispatch = useDispatch();
  const allBugs = useSelector((state) => state.bugsDetails.bugs || []);
  // const { loading, error } = allBugs;

  // const [code, setCode] = React.useState(
  //   `function add(a, b) {\n  return a + b;\n}`
  // );

  useEffect(() => {
    dispatch(bugsDetails());
  }, [dispatch]);

  let rows = [];
  rows = allBugs.map((bug, i) => {
    return (rows = {
      id: i + 1,
      bugName: bug.bugName,
      language: bug.language,
      createdAt: bug.createdAt,
    });
  });

  const react = rows
    .filter((row) => {
      return row.language === 'React.js';
    })
    .map((item) => {
      return item.language;
    });

  const redux = rows
    .filter((row) => {
      return row.language === 'Redux';
    })
    .map((item) => {
      return item.language;
    });

  const express = rows
    .filter((row) => {
      return row.language === 'Express.js';
    })
    .map((item) => {
      return item.language;
    });

  const mongoDB = rows
    .filter((row) => {
      return row.language === 'MongoDB';
    })
    .map((item) => {
      return item.language;
    });

  return (
    <div className="tabhome-container">
      <div className="content-grid">
        {/* <div className="content-grid-item"> */}
        {/* --- Notification Grid --- */}
        <div className="notification-grid">
          <div className="notification-container">
            <div className="notification-left-container">
              <span className="notification-span-number">{rows.length}</span>
            </div>
            <div className="notification-right-container">
              <div className="notification-right-spans-container">
                <span className="notification-span-black">Total Bugs</span>
              </div>
              <div className="notification-arrow-container">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="notification-container">
            <div className="notification-left-container">
              <span className="notification-span-number">2</span>
            </div>
            <div className="notification-right-container">
              <div className="notification-right-spans-container">
                <span className="notification-span-black">Total Users</span>
              </div>
              <div className="notification-arrow-container">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="notification-container">
            <div className="notification-left-container">
              <span className="notification-span-number">{react.length}</span>
            </div>
            <div className="notification-right-container">
              <div className="notification-right-spans-container">
                <span className="notification-span-blue">React Bugs</span>
                <span className="notification-span-black">
                </span>
              </div>
              <div className="notification-arrow-container">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="notification-container">
            <div className="notification-left-container">
              <span className="notification-span-number">{redux.length}</span>
            </div>
            <div className="notification-right-container">
              <div className="notification-right-spans-container">
                <span className="notification-span-red">Redux Bugs</span>
                <span className="notification-span-black">
                </span>
              </div>
              <div className="notification-arrow-container">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="notification-container">
            <div className="notification-left-container">
              <span className="notification-span-number">{express.length}</span>
            </div>
            <div className="notification-right-container">
              <div className="notification-right-spans-container">
                <span className="notification-span-blue">Express Bugs</span>
                <span className="notification-span-black">
                </span>
              </div>
              <div className="notification-arrow-container">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="notification-container">
            <div className="notification-left-container">
              <span className="notification-span-number">{mongoDB.length}</span>
            </div>
            <div className="notification-right-container">
              <div className="notification-right-spans-container">
                <span className="notification-span-red">MongoDB Bugs</span>
                <span className="notification-span-black">
                </span>
              </div>
              <div className="notification-arrow-container">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div
          className="content-grid-item-chart"
          style={{ flexDirection: 'column' }}
        >
          <div style={{ padding: '1rem .5rem 0 .5rem' }}>
            <h1>Total Bugs</h1>
          </div>
          <div className="piechart-container" style={{ padding: '0 0 1rem 0' }}>
            <PieChart />
          </div>
        </div>
        <div>
          <UserList />
        </div>
        <div
          className="content-grid-item-chart"
          style={{ flexDirection: 'column' }}
        >
          <div style={{ padding: '1rem .5rem 0 .5rem' }}>
            <h1>Bugs per Month</h1>
          </div>
          <div className="bargraph-container">
            <BarGraph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabHome;
