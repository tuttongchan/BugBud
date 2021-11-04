import { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { bugsDetails } from '../../actions/bugActions';

const PieChart = () => {
  const dispatch = useDispatch();
  const allBugs = useSelector((state) => state.bugsDetails.bugs || []);
  // const { loading, error } = allBugs;

  useEffect(() => {
    dispatch(bugsDetails());
  }, [dispatch]);

  let rows = [];
  rows = allBugs.map((bug, i) => {
    return (rows = {
      id: i + 1,
      bugName: bug.bugName,
      language: bug.language,
    });
  });

  const CSS = rows
    .filter((row) => {
      return row.language === 'CSS';
    })
    .map((item) => {
      return item.language;
    });

  const javascript = rows
    .filter((row) => {
      return row.language === 'Javascript';
    })
    .map((item) => {
      return item.language;
    });

  const react = rows
    .filter((row) => {
      return row.language === 'React.js';
    })
    .map((item) => {
      return item.language;
    });

  const redux = rows
    .filter((row) => {
      return row.language === 'Redux';
    })
    .map((item) => {
      return item.language;
    });

  const express = rows
    .filter((row) => {
      return row.language === 'Express.js';
    })
    .map((item) => {
      return item.language;
    });

  const mongoDB = rows
    .filter((row) => {
      return row.language === 'MongoDB';
    })
    .map((item) => {
      return item.language;
    });

  const data = {
    labels: ['Javascript', 'React.js', 'Redux', 'Express.js', 'MongoDB', 'CSS'],
    datasets: [
      {
        label: '# of Votes',
        data: [
          javascript.length,
          react.length,
          redux.length,
          express.length,
          mongoDB.length,
          CSS.length,
        ],
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
