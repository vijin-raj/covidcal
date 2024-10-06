

import React from 'react';
import Plot from 'react-plotly.js';


const PieChart = ({val}) => {

  const Chartdata = val?.[0] || {}
  const { active, cured, deaths } = Chartdata

  const data = [
    {
      values: [active, cured, deaths],
      labels: ['ActiveCases', 'Recovered', 'Death'],
      type: 'pie',
    },
  ];

  const layout = {
    height: 400,
    width: "100%",
  };

  return (
    <Plot
      data={data}
      layout={layout}
    />
  );
};

export default PieChart;
