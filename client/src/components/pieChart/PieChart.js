import React from 'react';
import { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { bugsDetails } from '../../actions/bugActions';

const PieChart = () => {
  const dispatch = useDispatch();
  const allBugs = useSelector((state) => state.bugsDetails.bugs || []);
  const { loading, error } = allBugs;

  useEffect(() => {
    dispatch(bugsDetails());
  }, [dispatch]);

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

  let rows = [];
  rows = allBugs.map((bug, i) => {
    return (rows = {
      id: i + 1,
      bugName: bug.bugName,
    });
  });

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div>
        <div></div>
      </div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;

// import React from 'react';

// const PieChart = () => {
//   return (
//     <div>
//       <VictoryPie
//         data={[
//           { x: 'Cats', y: 35 },
//           { x: 'Dogs', y: 40 },
//           { x: 'Birds', y: 55 },
//         ]}
//       />
//     </div>
//   );
// };

// export default PieChart;
