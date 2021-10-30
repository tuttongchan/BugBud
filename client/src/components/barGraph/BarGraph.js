import React from 'react';
import { Bar } from 'react-chartjs-2';

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
      borderWidth: 2,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const BarGraph = () => {
  return (
    <div>
      <div className="header">
        <div className="links">
        </div>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;

// ---------------------------------------------------

// import React from 'react';
// import { VictoryChart, VictoryAxis, VictoryBar } from 'victory';
// const data = [
//   { quarter: 1, earnings: 13000 },
//   { quarter: 2, earnings: 16500 },
//   { quarter: 3, earnings: 14250 },
//   { quarter: 4, earnings: 19000 },
// ];

// const BarGraph = () => {
//   return (
//     <div>
//       <VictoryChart
//         // domainPadding will add space to each side of VictoryBar to
//         // prevent it from overlapping the axis
//         domainPadding={20}
//       >
//         <VictoryAxis
//           // tickValues specifies both the number of ticks and where
//           // they are placed on the axis
//           tickValues={[1, 2, 3, 4]}
//           tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
//         />
//         <VictoryAxis
//           dependentAxis
//           // tickFormat specifies how ticks should be displayed
//           tickFormat={(x) => `$${x / 1000}k`}
//         />
//         <VictoryBar data={data} x="quarter" y="earnings" />
//       </VictoryChart>
//     </div>
//   );
// };

// export default BarGraph;
