import React, { useEffect } from 'react';
import './buglist.css';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { detailsBug } from '../../actions/bugActions';

const BugList = () => {
  const dispatch = useDispatch();
  const allBugs = useSelector((state) => state.bugDetails.bugs || []);

  useEffect(() => {
    dispatch(detailsBug());
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
        return (
          <>
            <i className="far fa-eye"></i>
            <i className="fas fa-pencil-alt"></i>
            <i className="far fa-trash-alt"></i>
          </>
        );
      },
    },
    { field: 'language', headerName: 'Language', width: 200 },
    { field: 'desc', headerName: 'Description', width: 200 },
    { field: 'links', headerName: 'Links', width: 200 },
    { field: 'code', headerName: 'Code Snippet', width: 400 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
};

export default BugList;
