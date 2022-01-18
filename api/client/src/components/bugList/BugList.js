import React, { useEffect } from 'react';
import './buglist.css';
import { useDispatch, useSelector } from 'react-redux';
import { bugsDetails } from '../../actions/bugActions';
import LoadingBox from '../../subComponents/loadingBox/LoadingBox';
import BugItem from '../../subComponents/bugItem/BugItem';

const BugList = ({ search }) => {
  const dispatch = useDispatch();
  const allBugs = useSelector((state) => state.bugsDetails);
  const { loading, error, bugs } = allBugs;

  console.log(allBugs);

  useEffect(() => {
    dispatch(bugsDetails());
  }, [dispatch]);

  return (
    <div className="buglist-container">
      {/* {loading ? (
        <LoadingBox />
      ) : error ? (
        <></>
      ) : (
        <div className="bugitem-container">
          {bugs.map((bug) => (
            <BugItem key={bug._id} bug={bug} />
          ))}
        </div>
      )} */}

      {loading ? (
        <LoadingBox />
      ) : error ? (
        <></>
      ) : (
        <div className="bugitem-container">
          {bugs
            .filter((bug) => {
              if (search === '') {
                return bug;
              } else if (
                bug.bugName.toLowerCase().includes(search.toLowerCase())
              ) {
                return bug;
              }
            })
            .map((bug) => (
              <BugItem key={bug._id} bug={bug} />
            ))}
        </div>
      )}
    </div>
  );
};

export default BugList;
