import React, { useState, useEffect } from 'react';

const WarehouseManagementPage = () => {
  const [dispatchPlans, setDispatchPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Fetch dispatch plans data (example)
  useEffect(() => {
    // Make API call to fetch dispatch plans and update state
    // For now, let's assume dispatchPlansData is the fetched data
    const dispatchPlansData = [
      { id: 1, name: 'Plan A', status: 'In Progress', items: [], /* other properties */ },
      { id: 2, name: 'Plan B', status: 'Pending', items: [], /* other properties */ },
      // ... more dispatch plans
    ];
    setDispatchPlans(dispatchPlansData);
  }, []);

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Warehouse Management Page</h2>
      <div className="flex">
        {/* List of Dispatch Plans */}
        <div className="w-1/3 pr-6">
          <h3 className="text-lg font-semibold mb-2">Dispatch Plans</h3>
          <ul className="space-y-2">
            {dispatchPlans.map((plan) => (
              <li
                key={plan.id}
                onClick={() => handlePlanClick(plan)}
                className={`cursor-pointer rounded-md p-2 ${selectedPlan === plan ? 'bg-blue-100' : ''}`}
              >
                {plan.name} - {plan.status}
              </li>
            ))}
          </ul>
        </div>

        {/* Plan Details */}
        <div className="w-2/3">
          {selectedPlan && (
            <div className="bg-white rounded-md p-4 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Plan Details</h3>
              {/* Display plan details here */}
              <p className="mb-1"><span className="font-semibold">Name:</span> {selectedPlan.name}</p>
              <p className="mb-1"><span className="font-semibold">Status:</span> {selectedPlan.status}</p>
              {/* Display other plan details */}
            </div>
          )}
          {/* Plan Actions */}
          {selectedPlan && (
            <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Plan Actions</h3>
            {/* Include options for plan actions */}
            <div className="space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Complete Plan</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Confirm Dispatch</button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Update Quantities</button>
            </div>
            </div>
          )}
          {/* Search and Filters */}
          <div>
          <h3 className="text-lg font-semibold mb-2">Search and Filters</h3>
          {/* Include search and filtering functionality */}
          <div className="flex space-x-4">
            <input type="text" className="border p-2 rounded-md flex-1" placeholder="Search plans..." />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Search</button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">Reset</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseManagementPage;