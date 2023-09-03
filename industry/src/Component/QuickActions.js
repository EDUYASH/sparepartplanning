import React from 'react';
import CreateJobSheet from './CreateJobSheet';
import { Link } from 'react-router-dom';

const QuickActions = () => {
   
  
    const handleCreateJobSheetClick = () => {
      <Link
      to="/Createjobsheets"
      className="block bg-white text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
    >
      Create Job Sheets
    </Link> 
    };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300" onClick={handleCreateJobSheetClick}>
          Create Job Sheet
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
          Prepare Dispatch Plan
        </button>
        {/* Add more quick action buttons */}
        
      </div>
    </div>
  );
};

export default QuickActions;