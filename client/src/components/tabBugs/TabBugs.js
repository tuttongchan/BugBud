import React, { useState } from 'react';
import './tabbugs.css';
import BugList from '../bugList/BugList';
import Modal from 'react-modal';
import { createBug } from '../../actions/bugActions';
import { useDispatch } from 'react-redux';

const TabBugs = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [bugName, setBugName] = useState('');
  const [language, setLanguage] = useState('');
  const [desc, setDesc] = useState('');
  const [links, setLinks] = useState('');
  const [code, setCode] = useState('');

  console.log(language)

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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const dispatch = useDispatch();
  const createBugHandler = (e) => {
    e.preventDefault();
    dispatch(createBug(bugName, language, desc, links, code));
    window.location.reload();
  };

  return (
    <div className="tabbugs-container">
      <div className="tabbugs-top-container">
        <h1 className="tabbugs-heading">Bugs</h1>
        <div className="tabbugs-top-right-container">
          <input
            type="text"
            placeholder="Search..."
            className="tabbugs-input"
          />
          <div className="search-button">
            <i className="fas fa-search"></i>
          </div>
          <div className="addbug-button" onClick={openModal}>
            <i className="fas fa-plus"></i>
            add bug
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-container">
          {/* <button onClick={closeModal}>close</button> */}
          <form onSubmit={createBugHandler}>
            <div className="modal-bugname-container">
              <h4 className="modal-bugname-heading">Bug Name📋:</h4>
              <input type="text" onChange={(e) => setBugName(e.target.value)} />
            </div>
            <div className="modal-language-container">
              <h4 className="modal-language-heading">Tech💻:</h4>
              <select onChange={(e) => setLanguage(e.target.value)}>
                <option value="">Select :</option>
                <option value="CSS">CSS</option>
                <option value="Javascript">Javascript</option>
                <option value="React.js">React.js</option>
                <option value="Redux">Redux</option>
                <option value="Express.js">Express.js</option>
                <option value="MongoDB">MongoDB</option>
              </select>
              {/* <input
                type="text"
                onChange={(e) => setLanguage(e.target.value)}
              /> */}
            </div>
            <div className="modal-desc-container">
              <h4 className="modal-desc-heading">Info📚:</h4>
              <input type="text" onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div className="modal-links-container">
              <h4 className="modal-links-heading">Links🔗:</h4>
              <input type="text" onChange={(e) => setLinks(e.target.value)} />
            </div>
            <div className="modal-code-container">
              <h4 className="modal-code-heading">Code🖥️:</h4>
              <textarea
                name="code"
                id=""
                cols="30"
                rows="10"
                className="modal-code-textarea"
                onChange={(e) => setCode(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="modal-submit-button">
              Add Bug
            </button>
          </form>
        </div>
      </Modal>
      <BugList />
    </div>
  );
};

export default TabBugs;
