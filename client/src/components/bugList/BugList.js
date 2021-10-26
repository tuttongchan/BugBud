import React, { useEffect, useState } from 'react';
import './buglist.css';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { bugDetails, bugsDetails, createBug } from '../../actions/bugActions';
import Modal from 'react-modal';

// Modal styles
const customStyles = {
  content: {
    // height: '25rem',
    // width: '25rem',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const BugList = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [bugName, setBugName] = useState('');
  const [language, setLanguage] = useState('');
  const [desc, setDesc] = useState('');
  const [links, setLinks] = useState('');
  const [code, setCode] = useState('');

  // Modal logic
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const dispatch = useDispatch();
  const allBugs = useSelector((state) => state.bugsDetails.bugs || []);

  useEffect(() => {
    dispatch(bugsDetails());
  }, [dispatch]);

  let rows = [];
  rows = allBugs.map((bug, i) => {
    return (rows = {
      id: i + 1,
      bugName: bug.bugName,
      language: bug.language,
      desc: bug.desc,
      links: bug.links,
      code: bug.code,
    });
  });

  let columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'bugName', headerName: 'Bug Name', width: 250 },
    {
      field: 'action',
      headerName: 'View, Edit, Delete',
      width: 200,
      renderCell: (params) => {
        console.log(params);
        return (
          <>
            <i className="far fa-eye" onClick={openModal}></i>
            <i className="fas fa-pencil-alt"></i>
            <i className="far fa-trash-alt"></i>
            {allBugs.map((bug) => {
              console.log(bug);
            })}

            {allBugs.map((bug, i) => (
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Example Modal"
              >
                <div className="modal-container">
                  <h3>{bug.bugName}</h3>
                  {/* <h1>{bug._id}</h1> */}
                  {/* <h3>{bug.links}</h3> */}
                </div>
              </Modal>
            ))}

          </>
        );
      },
    },
    { field: 'language', headerName: 'Language', width: 200 },
    { field: 'desc', headerName: 'Description', width: 200 },
    { field: 'links', headerName: 'Links', width: 200 },
    { field: 'code', headerName: 'Code Snippet', width: 400 },
  ];

  const createBugHandler = (e) => {
    e.preventDefault();
    dispatch(createBug(bugName, language, desc, links, code));
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />

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

      {/* {allBugs.map((bug) => (
        <>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
            contentLabel="Example Modal"
          >
            <div className="modal-container">
              <h1>{bug._id}</h1>
              <h3>{bug.bugName}</h3>
              <h3>{bug.links}</h3>
            </div>
          </Modal>
        </>
      ))} */}

      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <div className="modal-container">
          <button onClick={closeModal}>close</button>
          <h1 className="modal-heading"></h1>
          <form onSubmit={createBugHandler}>
            <input type="text" onChange={(e) => setBugName(e.target.value)} />
            <input type="text" onChange={(e) => setLanguage(e.target.value)} />
            <input type="text" onChange={(e) => setDesc(e.target.value)} />
            <input type="text" onChange={(e) => setLinks(e.target.value)} />
            <input type="text" onChange={(e) => setCode(e.target.value)} />

            <button type="submit">Click</button>
          </form>
        </div>
      </Modal> */}
    </div>
  );
};

export default BugList;
