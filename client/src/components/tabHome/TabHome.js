// import React, { useEffect } from 'react';
import './tabhome.css';
import PieChart from '../pieChart/PieChart';
import BarGraph from '../barGraph/BarGraph';
// import { useSelector, useDispatch } from 'react-redux';
// import { detailsBug } from '../../actions/bugActions';
import UserList from '../userList/UserList';
// import { useDispatch, useSelector } from 'react-redux';
// import { bugsDetails } from '../../actions/bugActions';

const TabHome = () => {
  // const dispatch = useDispatch();
  // const allBugs = useSelector((state) => state.bugDetails);
  // const { loading, error, bugs } = allBugs;

  // useEffect(() => {
  //   dispatch(detailsBug());
  // }, [dispatch]);

  return (
    <div className="tabhome-container">
      <div className="content-grid">
        {/* <div className="content-grid-item"> */}

        {/* --- Notification Grid --- */}
        <div className="notification-grid">
          <div className="notification-container">
            <div className="notification-left-container">
              <span className="notification-span-number">10</span>
            </div>
            <div className="notification-right-container">
              <div className="notification-right-spans-container">
                <span className="notification-span-blue">Bugs this month</span>
                <span className="notification-span-black">
                  Completed this month
                </span>
              </div>
              <div className="notification-arrow-container">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="notification-container">
            <div className="notification-left-container">
              <span className="notification-span-number">10</span>
            </div>
            <div className="notification-right-container">
              <div className="notification-right-spans-container">
                <span className="notification-span-red">Bugs this month</span>
                <span className="notification-span-black">
                  Completed this month
                </span>
              </div>
              <div className="notification-arrow-container">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="notification-container">
            <div className="notification-left-container">
              <span className="notification-span-number">10</span>
            </div>
            <div className="notification-right-container">
              <div className="notification-right-spans-container">
                <span className="notification-span-blue">Bugs this month</span>
                <span className="notification-span-black">
                  Completed this month
                </span>
              </div>
              <div className="notification-arrow-container">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="notification-container">
            <div className="notification-left-container">
              <span className="notification-span-number">10</span>
            </div>
            <div className="notification-right-container">
              <div className="notification-right-spans-container">
                <span className="notification-span-red">Bugs this month</span>
                <span className="notification-span-black">
                  Completed this month
                </span>
              </div>
              <div className="notification-arrow-container">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="notification-container">
            <div className="notification-left-container">
              <span className="notification-span-number">10</span>
            </div>
            <div className="notification-right-container">
              <div className="notification-right-spans-container">
                <span className="notification-span-blue">Bugs this month</span>
                <span className="notification-span-black">
                  Completed this month
                </span>
              </div>
              <div className="notification-arrow-container">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="notification-container">
            <div className="notification-left-container">
              <span className="notification-span-number">10</span>
            </div>
            <div className="notification-right-container">
              <div className="notification-right-spans-container">
                <span className="notification-span-red">Bugs this month</span>
                <span className="notification-span-black">
                  Completed this month
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

          {/* {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>{error}</h1>
            ) : (
              <div className="row center">
              {bugs.map((bug) => (
                <h1 key={bug.bugName}>{bug.bugName}</h1>
                ))}
                </div>
              )} */}
        </div>
        <div
          className="content-grid-item-chart"
          style={{ flexDirection: 'column' }}
        >
          <div style={{ padding: '1rem .5rem 0 .5rem' }}>
          {/* <div> */}
            <h1>Bugs per Month</h1>
          </div>
          <div className="bargraph-container">
            <BarGraph />
            {/* <PieChart /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabHome;
