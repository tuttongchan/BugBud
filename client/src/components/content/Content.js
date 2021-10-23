import React, { useEffect } from 'react';
import './content.css';
import PieChart from '../pieChart/PieChart';
import BarGraph from '../barGraph/BarGraph';
import { useSelector, useDispatch } from 'react-redux';
import { detailsBug } from '../../actions/bugActions';
import UserList from '../userList/UserList'
// import { bugDetails } from './actions/bugActions';

const Content = () => {
  const dispatch = useDispatch();
  const allBugs = useSelector((state) => state.bugDetails);
  const { loading, error, bugs } = allBugs;
  console.log(bugs);

  useEffect(() => {
    dispatch(detailsBug());
  }, [dispatch]);

  return (
    <div className="content-container">
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
                <i class="fas fa-arrow-right"></i>
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
                <i class="fas fa-arrow-right"></i>
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
                <i class="fas fa-arrow-right"></i>
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
                <i class="fas fa-arrow-right"></i>
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
                <i class="fas fa-arrow-right"></i>
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
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="content-grid-item-chart">
          <div className="piechart-container">
            <PieChart />
          </div>
        </div>
        <div>
          
            <UserList />

            {/* <PieChart /> */}

            {/* <BarGraph /> */}

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
        <div className="content-grid-item-chart">
          <div className="bargraph-container">
            <BarGraph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
