// BasicAreaChart.js
import React from 'react';
import Chart from 'react-apexcharts';
const AreaChart = ({ filterView }) => {
    const chartData = {
        options: {
            chart: {
                id: 'basic-area',
            },
            xaxis: {
                categories: filterView === "All" ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
                    25, 26, 27, 28, 29, 30, 31],
            },
            fill: {
                opacity: 0.4, // Area fill opacity
            },
            stroke: {
                show: true,
                width: 2, // Line width
                curve: 'smooth',
            },
            yaxis: {
                labels: {
                    formatter: (value) => `$${value}`,
                },
            },
            tooltip: {
                enabled: true,
                shared: false,
                followCursor: true,
                intersect: false,
                custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                    const product = filterView === "All"
                        ? [350, 440, 565, 450, 499, 960, 350, 440, 565, 450, 499, 960][dataPointIndex]
                        : [350, 440, 565, 450, 499, 960, 350, 440, 565, 450, 499, 960, 350, 440, 565, 450, 499, 960, 350, 440, 565, 450, 499, 960, 350, 440, 565, 450, 499, 960, 350][dataPointIndex];
                    return `<div style="padding: 10px; background-color: #fff; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                                <div>Sales: $${product}</div>
                            </div>`;
                },
            },
            dataLabels: {
                enabled: true,
                formatter: (value) => `$${value}`,
                style: {
                    fontSize: '12px',
                    // colors: ["#304758"]
                }
            },
        },
        series: [
            {
                name: 'Sales',
                data: filterView === "All"
                    ? [350, 440, 565, 450, 499, 960, 350, 440, 565, 450, 499, 960]
                    : [350, 440, 565, 450, 499, 960, 350, 440, 565, 450, 499, 960, 350, 440, 565, 450, 499, 960, 350, 440, 565, 450, 499, 960, 350, 440, 565, 450, 499, 960, 350],
            },
        ],
    };
    return (
        <div>
            <Chart options={chartData.options} series={chartData.series} type="area" height="350" />
        </div>
    );
};
export default AreaChart;