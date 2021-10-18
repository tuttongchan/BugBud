import React from 'react';
import { VictoryPie } from 'victory';

// import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

// const data = [
//   { quarter: 1, earnings: 13000 },
//   { quarter: 2, earnings: 16500 },
//   { quarter: 3, earnings: 14250 },
//   { quarter: 4, earnings: 19000 },
// ];

const PieChart = () => {
  return (
    <div>
      {/* <svg width={300} height={300}>
        <circle cx={150} cy={150} r={50} fill="#c43a31" />
        <VictoryPie
          standalone={false}
          width={300}
          height={300}
          innerRadius={75}
          // data={sampleData}
          data={[
            { x: 'Cats', y: 35 },
            { x: 'Dogs', y: 40 },
            { x: 'Birds', y: 55 },
          ]}
        />
      </svg> */}

      <VictoryPie
        data={[
          { x: 'Cats', y: 35 },
          { x: 'Dogs', y: 40 },
          { x: 'Birds', y: 55 },
        ]}
      />

      {/* <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => `$${x / 1000}k`}
        />
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart> */}
    </div>
  );
};

export default PieChart;
