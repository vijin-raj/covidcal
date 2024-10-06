import React from 'react';
import Plot from 'react-plotly.js';

const LineChart = ({ val, selectedState }) => {
    const stateData = val?.find(item => item.state === selectedState);
    const monthlyData = stateData?.monthlyData || [];

     const months = monthlyData?.map(item => item.month);
    const activeCases = monthlyData?.map(item => item.active);
    const curedCases = monthlyData?.map(item => item.cured);
    const deathCases = monthlyData?.map(item => item.deaths);

    const trace1 = {
        type: 'scatter',
        x: months,   
        y: activeCases, 
        mode: 'lines',
        name: 'Active Cases',
        line: {
            color: 'rgb(219, 64, 82)',
            width: 3,
        },
    };

    const trace2 = {
        type: 'scatter',
        x: months,   
        y: curedCases,  
        mode: 'lines',
        name: 'Recovered',
        line: {
            color: 'rgb(55, 128, 191)',
            width: 2,
        },
    };

    const trace3 = {
        type: 'scatter',
        x: months,    
        y: deathCases,  
        mode: 'lines',
        name: 'Deaths',
        line: {
            color: 'rgb(50, 205, 50)',
            width: 2,
        },
    };

    const data = [trace1, trace2, trace3];

    const layout = {
        height: 400,
        width: "100%",
        title: `COVID-19 Statistics for ${selectedState}`,
        xaxis: {
            title: 'Months',
        },
        yaxis: {
            title: 'Number of Cases',
        },
    };

    return <Plot data={data} layout={layout} />;
};

export default LineChart;
