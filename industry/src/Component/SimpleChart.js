
import Chart from 'chart.js/auto';


//import { Chart, registerables } from 'chart.js';

import React from 'react';
import { Pie } from 'react-chartjs-2';

const SimpleChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
      
    ],
  };

  const options = {
    maintainAspectRatio: true,
    responsive: true,
  
  };

  return (
    <div className="bg-white p-2 rounded-lg shadow-md w-60">
      <h3 className="text-lg font-semibold mb-1">Simple Pie Chart</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default SimpleChart;