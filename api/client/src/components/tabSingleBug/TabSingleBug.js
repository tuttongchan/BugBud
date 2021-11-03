import React, { useEffect, useState } from 'react';
import './tabsinglebug.css';
import { useDispatch, useSelector } from 'react-redux';
import { bugDetails, deleteBug, updateBug } from '../../actions/bugActions';
import LoadingBox from '../../subComponents/loadingBox/LoadingBox';
import { useHistory } from 'react-router';
import Modal from 'react-modal';
import { set } from 'mongoose';

const TabSingleBug = ({ productId }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [bugName, setBugName] = useState('');
  const [language, setLanguage] = useState('');
  const [desc, setDesc] = useState('');
  const [links, setLinks] = useState('');
  const [code, setCode] = useState('');

  const history = useHistory();

  console.log(productId);
  const dispatch = useDispatch();

  const bugSingle = useSelector((state) => state.bugDetails);
  const { loading, error, bug } = bugSingle;
  console.log(bugSingle);

  const bugUpdateSingle = useSelector((state) => state.bugUpdate);
  const {
    // loading: loadingUpdate,
    // error: errorUpdate,
    success: successUpdate,
  } = bugUpdateSingle;

  const bugDelete = useSelector((state) => state.bugDelete);
  const { loading: loadingDelete, error: errorDelete } = bugDelete;

  useEffect(() => {
    if (successUpdate) {
      history.push('/bugs');
    } else if (!bug || bug._id !== productId || successUpdate) {
      dispatch(bugDetails(productId));
    } else {
      setBugName(bug.bugName);
      setLanguage(bug.language);
      setDesc(bug.desc);
      setLinks(bug.links);
      setCode(bug.code);
    }
  }, [dispatch, productId, bug, successUpdate, history]);

  // Modal logic
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateBug({
        _id: productId,
        bugName,
        language,
        desc,
        links,
        code,
      })
    );
    window.location.reload();
  };

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
            <i className="fa-solid fa-pen-to-square" onClick={openModal}></i>
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
            <a
              className="tabsinglebug-links"
              href={bug.links}
              rel="noreferrer"
              target="_blank"
            >
              {bug.links}
            </a>
          </div>
          <h4 className="tabsinglebug-code-heading">Code Snippet:</h4>
          <div className="tabsinglebug-code-container">
            <p className="tabsinglebug-code">{bug.code}</p>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="modal-container">
              <form onSubmit={updateHandler}>
                <div className="modal-bugname-container">
                  <h4 className="modal-bugname-heading">Bug Name📋:</h4>
                  <input
                    type="text"
                    value={bugName}
                    onChange={(e) => setBugName(e.target.value)}
                  />
                </div>
                <div className="modal-language-container">
                  <h4 className="modal-language-heading">Tech💻:</h4>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option value="">Select :</option>
                    <option value="CSS">CSS</option>
                    <option value="Javascript">Javascript</option>
                    <option value="React.js">React.js</option>
                    <option value="Redux">Redux</option>
                    <option value="Express.js">Express.js</option>
                    <option value="MongoDB">MongoDB</option>
                  </select>
                </div>
                <div className="modal-desc-container">
                  <h4 className="modal-desc-heading">Info📚:</h4>
                  <input
                    type="text"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>
                <div className="modal-links-container">
                  <h4 className="modal-links-heading">Links🔗:</h4>
                  <input
                    type="text"
                    value={links}
                    onChange={(e) => setLinks(e.target.value)}
                  />
                </div>
                <div className="modal-code-container">
                  <h4 className="modal-code-heading">Code🖥️:</h4>
                  <textarea
                    name="code"
                    id=""
                    cols="30"
                    rows="10"
                    value={code}
                    className="modal-code-textarea"
                    onChange={(e) => setCode(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="modal-submit-button">
                  Update Bug
                </button>
              </form>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default TabSingleBug;
