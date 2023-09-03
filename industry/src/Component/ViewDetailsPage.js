import React from 'react';
import { useParams } from 'react-router-dom';

const ViewDetailsPage = ({ match }) => {
  const planId = match.params.id; // Get the plan ID from the route parameter

  // Fetch the specific dispatch plan details using the planId
  // You can make an API call to fetch data or use state, based on your implementation

  // For now, let's assume dispatchPlanData is the fetched data
  const dispatchPlanData = {
    id: planId,
    planNumber: 'DP001',
    dispatchDate: '2023-08-30',
    sourceWarehouse: 'West Warehouse',
    destinationServiceCenter: 'Service Center A',
    status: 'In Progress',
    partsList: [
      { name: 'Part A', quantity: 20 },
      { name: 'Part B', quantity: 15 },
      { name: 'Part C', quantity: 30 },
    ],
  };

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-semibold mb-4">View Dispatch Plan Details</h2>
      <div className="bg-white shadow-md rounded-md p-4">
        <h3 className="text-lg font-semibold">
          Dispatch Plan #{dispatchPlanData.planNumber}
        </h3>
        <p>Dispatch Date: {dispatchPlanData.dispatchDate}</p>
        <p>Source Warehouse: {dispatchPlanData.sourceWarehouse}</p>
        <p>Destination Service Center: {dispatchPlanData.destinationServiceCenter}</p>
        <p>Status: {dispatchPlanData.status}</p>
        <div className="mt-2">
          <h4 className="font-semibold">Spare Parts List:</h4>
          <ul className="list-disc ml-6">
            {dispatchPlanData.partsList.map(part => (
              <li key={part.name}>
                {part.name}: {part.quantity} units
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsPage;