import React, { useEffect } from 'react';
import './tabbugs.css';
import { useDispatch, useSelector } from 'react-redux';
import { detailsBug } from '../../actions/bugActions';
import BugList from '../bugList/BugList';

const TabBugs = () => {
  const dispatch = useDispatch();
  const allBugs = useSelector((state) => state.bugDetails);
  const { loading, error, bugs } = allBugs;

  useEffect(() => {
    dispatch(detailsBug());
  }, [dispatch]);

  return (
    <div className="tabbugs-container">
      <h1 className='tabbugs-heading'>Bugs</h1>

      <div className="tabbugs-bugs-container">
        <BugList bugs={bugs} />
      </div>

      {/* {loading ? (
        <></>
      ) : error ? (
        <></>
      ) : (
        <div className="row center">
          {bugs.map((bug) => (
            <h1 key={bug._id}>{bug.bugName}</h1>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default TabBugs;
