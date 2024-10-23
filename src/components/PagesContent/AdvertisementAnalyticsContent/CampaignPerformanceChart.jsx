// src/components/CampaignPerformanceChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const CampaignPerformanceChart = () => {
  const chartData = {
    series: [{
      name: 'Reach',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'Social Reach',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    options: {
      chart: {
        height: 280,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      },
      colors: ['#FF1654', '#247BA0']
    }
  };

  return (
    <div className="bg-white shadow-lg rounded p-4 overflow-auto">
      <h2 className="text-lg font-semibold mb-4">Advertisement Performance</h2>
      <Chart options={chartData.options} series={chartData.series} type="area" height={280} />
    </div>
  );
};

export default CampaignPerformanceChart;
