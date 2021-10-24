import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  //   { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fullName', headerName: 'Full Name', width: 200 },
  //   { field: 'firstName', headerName: 'First name', width: 130 },
  //   { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Bugs',
    type: 'number',
    width: 120,
  },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.getValue(params.id, 'firstName') || ''} ${
  //         params.getValue(params.id, 'lastName') || ''
  //       }`,
  //   },
];

// const rows = [
//   { id: 1, age: 35 },
//   { id: 2, age: 42 },
//   { id: 3, age: 45 },
//   { id: 4, age: 16 },
//   { id: 5, age: null },
//   { id: 6, age: 150 },
//   { id: 7, age: 44 },
//   { id: 8, age: 36 },
//   { id: 9, age: 65 },
// ];

const rows = [
  { id: 1, fullName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, fullName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, fullName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, fullName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, fullName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, fullName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, fullName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, fullName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, fullName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const userList = () => {
  return (
    <div
      style={{
        // height: 400,
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '5px',
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default userList;
