import React from 'react';
import ReactApexCharts from 'react-apexcharts';

const SalesAnalysisChart = ({ data }) => {
    const topProducts = data.slice(0, 5);
    const topSellingProduct = data.reduce((prev, current) =>
        prev.sales > current.sales ? prev : current
    );
    const highestCommissionedProduct = data.reduce((prev, current) =>
        prev.commission > current.commission ? prev : current
    );

    const options = {

        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: 'top',
                },
                columnWidth: '50%',
            },
        },
        dataLabels: {
            enabled: true,
            formatter: (value) => `$${value}`,
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
        },
        xaxis: {
            categories: topProducts.map((product) => product.name),
        },
        yaxis: {
            labels: {
                formatter: (value) => `$${value}`,
            },
        },
        tooltip: {
            x: {
                formatter: (value) => value,
            },
            enabled: true,
            shared: false,
            followCursor: true,
            intersect: false,
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                const product = topProducts[dataPointIndex];
                return `<div style="padding: 10px; background-color: #fff; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <div>${product.name}</div>
                            <div>Sales: $${product.sales}</div>
                            <div>Price: $${product.price}</div>
                            <div>Commission: ${product.commission}</div>
                        </div>`;
            },
        },
    };

    const series = [
        {
            name: 'Sales',
            data: topProducts.map((product) => product.sales),
        },
    ];

    return (
        <div className='dashboard_areaChart'>
            <h2>Top 5 Products</h2>
            <ReactApexCharts options={options} series={series} type="bar" height={350} />
        </div>
    );
};

export default SalesAnalysisChart;
