import React, { useEffect, useState } from 'react';
import './buglist.css';
import { useDispatch, useSelector } from 'react-redux';
import { bugDetails, bugsDetails, createBug } from '../../actions/bugActions';
import LoadingBox from '../../subComponents/loadingBox/LoadingBox';
import BugItem from '../../subComponents/bugItem/BugItem';

const BugList = () => {
  const [bugName, setBugName] = useState('');
  const [language, setLanguage] = useState('');
  const [desc, setDesc] = useState('');
  const [links, setLinks] = useState('');
  const [code, setCode] = useState('');

  // const dispatch = useDispatch();
  // const allBugs = useSelector((state) => state.bugDetails);
  // const { loading, error, bugs } = allBugs;
  // console.log(bugs);

  // useEffect(() => {
  //   dispatch(bugsDetails());
  // }, [dispatch]);

  const dispatch = useDispatch();
  const allBugs = useSelector((state) => state.bugsDetails);
  const { loading, error, bugs } = allBugs;

  console.log(allBugs);

  useEffect(() => {
    dispatch(bugsDetails());
  }, [dispatch]);

  // let rows = [];
  // rows = allBugs.map((bug, i) => {
  //   return (rows = {
  //     id: i + 1,
  //     bugName: bug.bugName,
  //     language: bug.language,
  //     desc: bug.desc,
  //     links: bug.links,
  //     code: bug.code,
  //   });
  // });

  // console.log(rows)

  // const createBugHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(createBug(bugName, language, desc, links, code));
  // };

  return (
    <div className="buglist-container">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <></>
      ) : (
        <div className='bugitem-container'>
          {bugs.map((bug) => (
            <BugItem key={bug._id} bug={bug} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BugList;
