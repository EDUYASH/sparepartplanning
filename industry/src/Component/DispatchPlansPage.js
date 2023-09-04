
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DispatchPlanPage = () => {
  const [dispatchPlans, setDispatchPlans] = useState([]);

  useEffect(() => {
    // Make API call to fetch dispatch plans and update state
    axios.get('http://localhost:8080/api/planning/part-requirements?date=2023-09-02')
      .then(response => {
        setDispatchPlans(response.data);
      })
      .catch(error => {
        console.error('Error fetching dispatch plans:', error);
      });
  }, []);

  const handlePrepareDispatch = async (planId, serviceCenterId, sku, quantity) => {
    console.log('handlePrepareDispatch called with planId:', planId);
    console.log('serviceCenterId:', serviceCenterId);
    try {
      const inventoryQuantityMap = {
        [sku]: quantity
      };

      const requestBody = {
        inventoryQuantityMap
      };
      console.log('Request Body:', requestBody);
      
      const response = await axios.post(
        `http://localhost:8080/api/add-inventory/${serviceCenterId}`,
        requestBody
      );
      console.log('API Response:', response.data);
      
      if (response.status === 200) {
        alert('Dispatch successful');
        setDispatchPlans(prevPlans => prevPlans.filter(plan => plan.id !== planId));
      }
    } catch (error) {
      console.error('Error preparing dispatch plan:', error);
      // Handle error scenario here
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-3xl font-semibold mb-4">Dispatch Plan Page</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-wrap">
          {dispatchPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-lg shadow-md p-4 mr-4 mb-4"
              style={{ flex: '0 0 calc(33.33% - 1rem)' }}
            >
              <h3 className="text-xl font-semibold mb-2">Plan ID: {plan.id}</h3>
              <p>SKU: {plan.sku.sku}</p>
              <p>Name: {plan.sku.name}</p>
              <p>Quantity: {plan.quantity}</p>
              <p>Service Center: {plan.serviceCenter.location}</p>
              <p>Job ID: {plan.jobId}</p>
              <p>Date: {plan.date.join('-')}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-2"
                onClick={() => handlePrepareDispatch(plan.id, plan.serviceCenter.centerId, plan.sku.sku, plan.quantity)}
              >
                Prepare Dispatch Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DispatchPlanPage;
