// src/components/ClicksByCampaignChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const ClicksByCampaignChart = () => {
    const chartData = {
        series: [{
            name: 'Clicks',
            data: [44, 55, 41, 64, 22, 43, 21, 49]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 280
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                }
            },
            xaxis: {
                categories: ['Cleaning', '', 'Holiday', '', 'Internet'],
            },
            colors: ['#FF1654']
        }
    };

    return (
        <div className="bg-white shadow-lg rounded p-4 !overflow-auto ">
            <h2 className="text-lg font-semibold mb-4">Clicks by Advertisement</h2>
            <Chart options={chartData.options} series={chartData.series} type="bar" height={280} />
        </div>
    );
};

export default ClicksByCampaignChart;
