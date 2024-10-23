import React from 'react';

const AnalyticsCards = () => {
  const data = [
    { title: 'Total Actions', value: 1748 },
    { title: 'Impressions', value: '2.6M' },
    { title: 'Reach', value: '46K' },
    { title: 'Clicks', value: '21K' },
    { title: 'Total Spending', value: '$22.5K' },
    { title: 'CPC', value: '$1.06' },
    { title: 'CTR', value: '8.3%' },
  ];

  return (
    <div className="grid grid-cols-4  gap-4 w-full h-24">
      {data.map((card, index) => (
        <div key={index} className="bg-white shadow-lg rounded p-4">
          <h2 className="text-gray-600 text-sm">{card.title}</h2>
          <p className="text-2xl font-semibold">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsCards;