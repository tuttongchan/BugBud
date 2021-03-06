import React, { useEffect, useState } from 'react';
import './tabbugs.css';
import BugList from '../bugList/BugList';
import Modal from 'react-modal';
import { bugsDetails, createBug } from '../../actions/bugActions';
import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import CodeEditor from '@uiw/react-textarea-code-editor';

const TabBugs = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const [bugName, setBugName] = useState('');
  const [language, setLanguage] = useState('');
  const [desc, setDesc] = useState('');
  const [links, setLinks] = useState('');
  const [code, setCode] = useState('');

  const dispatch = useDispatch();
  // const allBugs = useSelector((state) => state.bugsDetails);
  // const { loading, error, bugs } = allBugs;

  useEffect(() => {
    dispatch(bugsDetails());
  }, [dispatch]);

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
          <div className="input-search-bugs">
            <input
              type="text"
              placeholder="Search..."
              className="tabbugs-input"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="search-button">
              <i className="fas fa-search"></i>
            </div>
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
              <h4 className="modal-bugname-heading">Bug Name????:</h4>
              <input type="text" onChange={(e) => setBugName(e.target.value)} />
            </div>
            <div className="modal-language-container">
              <h4 className="modal-language-heading">Tech????:</h4>
              <select onChange={(e) => setLanguage(e.target.value)}>
                <option value="">Select :</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="Javascript">Javascript</option>
                <option value="React.js">React.js</option>
                <option value="Redux">Redux</option>
                <option value="Node.js">Node.js</option>
                <option value="Express.js">Express.js</option>
                <option value="MongoDB">MongoDB</option>
                <option value="Python">Python</option>
                <option value="other">other</option>
              </select>
            </div>
            <div className="modal-desc-container">
              <h4 className="modal-desc-heading">Info????:</h4>
              <input type="text" onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div className="modal-links-container">
              <h4 className="modal-links-heading">Links????:</h4>
              <input type="text" onChange={(e) => setLinks(e.target.value)} />
            </div>
            <div className="modal-code-container">
              <h4 className="modal-code-heading">Code???????:</h4>
              <CodeEditor
                value={code}
                language="js"
                placeholder="Please enter JS code."
                onChange={(e) => setCode(e.target.value)}
                padding={15}
                style={{
                  width: '100%',
                  height: '100%',
                  marginBottom: '1rem',
                  fontSize: 16,
                  backgroundColor: '#f5f5f5',
                  fontFamily:
                    'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
              />
            </div>
            <button type="submit" className="modal-submit-button">
              Add Bug
            </button>
          </form>
        </div>
      </Modal>
      <BugList search={search} />
    </div>
  );
};

export default TabBugs;
