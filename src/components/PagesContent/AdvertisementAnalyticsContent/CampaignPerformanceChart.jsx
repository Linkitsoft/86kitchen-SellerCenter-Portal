// src/components/CampaignPerformanceChart.js
import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const CampaignPerformanceChart = () => {
  const [selectedMonth, setSelectedMonth] = useState('Jan');

  const months = [
    { name: 'January', value: 'Jan' },
    { name: 'February', value: 'Feb' },
    { name: 'March', value: 'Mar' },
    { name: 'April', value: 'Apr' },
    { name: 'May', value: 'May' },
    { name: 'June', value: 'Jun' },
    { name: 'July', value: 'Jul' },
    { name: 'August', value: 'Aug' },
    { name: 'September', value: 'Sep' },
    { name: 'October', value: 'Oct' },
    { name: 'November', value: 'Nov' },
    { name: 'December', value: 'Dec' },
  ];

  // Function to get dates for the selected month
  const getDatesForMonth = (month) => {
    const monthIndex = months.findIndex(m => m.value === month);
    const daysInMonth = new Date(2024, monthIndex + 1, 0).getDate(); // Assuming a non-leap year for simplicity
    return Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
  };

  const chartData = {
    series: [
      {
        name: 'Reach',
        data: [31, 40, 28, 51, 42, 109, 100,23,123,34,434,34,4,55,12,323,22,3,23,23,33,4,55,6,77,77,88,33,44,55,66,] // Replace with actual data based on month selection
      },
      {
        name: 'Social Reach',
        data: [31, 4, 28, 5, 42, 19, 10,23,123,34,234,34,4,45,12,323,22,3,43,2,31, 40, 28, 51, 42, 109, 100,23,,434]  // Replace with actual data based on month selection
      }
    ],
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
        categories: getDatesForMonth(selectedMonth),
      },
      colors: ['#FF1654', '#247BA0']
    }
  };

  return (
    <div className="bg-white shadow-lg rounded p-4 overflow-auto">
      <div className='flex flex-row justify-between w-full'>
      <h2 className="text-lg font-semibold mb-4">Advertisement Performance</h2>
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        className="mb-4 p-2 !border-[1px] rounded"
      >
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.name}
          </option>
        ))}
      </select>
      </div>
      <Chart options={chartData.options} series={chartData.series} type="area" height={280} />
    </div>
  );
};

export default CampaignPerformanceChart;
