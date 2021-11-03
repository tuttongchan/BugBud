import React, { useEffect } from 'react';
import './tabsinglebug.css';
import { useDispatch, useSelector } from 'react-redux';
import { bugDetails, deleteBug } from '../../actions/bugActions';
import LoadingBox from '../../subComponents/loadingBox/LoadingBox';
import { useHistory } from 'react-router';

const TabSingleBug = ({ productId }) => {
  const history = useHistory();

  console.log(productId);
  const dispatch = useDispatch();

  const bugSingle = useSelector((state) => state.bugDetails);
  const { loading, error, bug } = bugSingle;
  console.log(bugSingle);

  const bugDelete = useSelector((state) => state.bugDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
  } = bugDelete;

  useEffect(() => {
    dispatch(bugDetails(productId));
  }, [dispatch, productId]);

  const deleteHandler = (id) => {
    dispatch(deleteBug(id));
    history.push('/bugs');
    window.location.reload();
  };

  return (
    <div className="tabsinglebug-container">
      {loadingDelete && <LoadingBox />}
      {errorDelete && <></>}
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <></>
      ) : (
        <div>
          <div className="tabsinglebug-name-container">
            <h1>{bug.bugName}</h1>
            <i className="fa-solid fa-pen-to-square"></i>
            <i
              className="fa-solid fa-trash-can"
              onClick={() => deleteHandler(bug._id)}
            ></i>
          </div>
          <div className="tabsinglebug-language-container">
            <h4 className="tabsinglebug-language-heading">Tech💻:</h4>
            <h4 className="tabsinglebug-language">{bug.language}</h4>
          </div>
          <div className="tabsinglebug-desc-container">
            <h4 className="tabsinglebug-desc-heading">Info📚:</h4>
            <h4 className="tabsinglebug-desc">{bug.desc}</h4>
          </div>
          <div className="tabsinglebug-links-container">
            <h4 className="tabsinglebug-links-heading">Links🔗: </h4>
            <h4 className="tabsinglebug-links">{bug.links}</h4>
          </div>
          <h4 className="tabsinglebug-code-heading">Code Snippet:</h4>
          <div className="tabsinglebug-code-container">
            <p className="tabsinglebug-code">{bug.code}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabSingleBug;
