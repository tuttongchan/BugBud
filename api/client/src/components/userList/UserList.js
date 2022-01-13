import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { bugsDetails } from '../../actions/bugActions';
import LoadingBox from '../../subComponents/loadingBox/LoadingBox';

const UserList = () => {
  const dispatch = useDispatch();
  const allBugs = useSelector((state) => state.bugsDetails.bugs || []);
  const { loading, error } = allBugs;

  useEffect(() => {
    dispatch(bugsDetails());
  }, [dispatch]);

  // console.log(allBugs)

  let rows = [];
  rows = allBugs.map((bug, i) => {
    return (rows = {
      id: i + 1,
      bugName: bug.bugName,
      language: bug.language,
    });
  });

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'bugName',
      headerName: 'Bugs',
      width: 220,
    },
    // {
    //   field: 'bugName',
    //   headerName: 'Bug Name',
    //   width: 220,
    // },
    {
      field: 'language',
      headerName: 'Language',
      width: 220,
    }
    // {
    //   field: 'action',
    //   headerName: 'Action',
    //   width: 160,
    //   renderCell: (params) => {
    //     return <button>ffff</button>;
    //   },
    // },
  ];

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '5px',
      }}
    >
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <></>
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      )}
    </div>
  );
};

export default UserList;
