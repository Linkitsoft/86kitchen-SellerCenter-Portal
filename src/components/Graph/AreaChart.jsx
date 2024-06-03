// BasicAreaChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const AreaChart = () => {
    const chartData = {
        options: {
            chart: {
                id: 'basic-area',
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            },
            fill: {
                // colors: ['#FF5252'], // Area fill color
                opacity: 0.4, // Area fill opacity
            },
            stroke: {
                show: true,
                // colors: ['#FF5252'], // Line and border color
                width: 2, // Line width
            },
        },
        series: [
            {
                name: 'Sales',
                data: [30, 40, 35, 50, 49, 60, 2, 10, 34, 10, 22, 0],
            },
        ],
    };

    return (
        <div className='dashboard_areaChart'>
            <Chart options={chartData.options} series={chartData.series} type="area" height="385" />
        </div>
    );
};

export default AreaChart;
