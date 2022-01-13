import React, { useEffect } from 'react';
import './buglist.css';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { bugsDetails } from '../../actions/bugActions';
import LoadingBox from '../../subComponents/loadingBox/LoadingBox';
import BugItem from '../../subComponents/bugItem/BugItem';

const BugList = ({ search }) => {
  const dispatch = useDispatch();
  const allBugs = useSelector((state) => state.bugsDetails);
  const { loading, error, bugs } = allBugs;

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
  //   });
  // });

  // const columns = [
  //   { field: 'id', headerName: 'ID', width: 100 },
  //   {
  //     field: 'bugName',
  //     headerName: 'Bugs',
  //     width: 220,
  //   },
  //   {
  //     field: 'language',
  //     headerName: 'Language',
  //     width: 220,
  //   },
  //   {
  //     field: 'desc',
  //     headerName: 'Description',
  //     width: 220,
  //   },
  //   {
  //     field: 'links',
  //     headerName: 'Links',
  //     width: 260,
  //   },
  //   {
  //     field: 'action',
  //     headerName: 'Action',
  //     width: 160,
  //     renderCell: (params) => {
  //       return <button>ffff</button>;
  //     },
  //   },
  // ];

  return (
    // <div
    // style={{
    //   height: '100%',
    //   width: '100%',
    //   backgroundColor: '#fff',
    //   borderRadius: '5px',
    // }}
    // >
    <div className="buglist-container">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <></>
      ) : (
        // <DataGrid
        //   rows={rows}
        //   columns={columns}
        //   pageSize={15}
        //   rowsPerPageOptions={[5]}
        //   // checkboxSelection
        // />

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
