import React from 'react';

const SummaryCard = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{value}</p>
    </div>
  );
};

export default SummaryCard;