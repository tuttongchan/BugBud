import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { bugsDetails } from '../../actions/bugActions';
import moment from 'moment';

const BarGraph = () => {
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
      createdAt: moment(bug.createdAt).format('MMM Do YY').slice(0, 3),
    });
  });

  // const september = rows
  //   .filter((row) => {
  //     return row.createdAt === 'Sep';
  //   })
  //   .map((item) => {
  //     return item.createdAt;
  //   });

  // const october = rows
  //   .filter((row) => {
  //     return row.createdAt === 'Oct';
  //   })
  //   .map((item) => {
  //     return item.createdAt;
  //   });

  const november = rows
    .filter((row) => {
      return row.createdAt === 'Nov';
    })
    .map((item) => {
      return item.createdAt;
    });

  const december = rows
    .filter((row) => {
      return row.createdAt === 'Dec';
    })
    .map((item) => {
      return item.createdAt;
    });

  const january = rows
    .filter((row) => {
      return row.createdAt === 'Jan';
    })
    .map((item) => {
      return item.createdAt;
    });

  const data = {
    labels: ['Nov', 'Dec', 'Jan'],
    datasets: [
      {
        label: '# of Bugs',
        data: [november.length, december.length, january.length],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <div className="header">
        <div className="links"></div>
      </div>
      <Bar data={data} />
    </div>
  );
};

export default BarGraph;
