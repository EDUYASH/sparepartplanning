import React from 'react';
 import * as reactRouterDom from 'react-router-dom';
 import JobSheetsPage from './JobSheetsPage';
 import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
 import './Home.css';
 import NavigationBar from './NavigationBar';

const HomePage = ({ userName, userRole }) => {
  
  return (
  
    <div className="Home bg-image">
    <div className="bg-gradient-to-r from-blue-400 to-purple-600 p-8 text-white ">
      <h1 className="text-4xl font-semibold mb-2">Welcome, {userName}!</h1>
      <p className="text-xl text-gray-200">Your Role: {userRole}</p>
      <div className="mt-6">
        {/* Quick access links based on userRole */}
        {/* <a
          href="/job-sheets"
          className="block bg-white text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
        >
          View Job Sheets
        </a> */}
        
         <reactRouterDom.Link
          to="/job-sheets"
          className="block bg-white text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
        >
          View Job Sheets
        </reactRouterDom.Link> 
        <reactRouterDom.Link
          to="/dispatchPlans"
          className="block bg-white text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
        >
         Prepare Dispatch Plans
        </reactRouterDom.Link> 
        {/* <reactRouterDom.Link
          to="/CustomerQuery"
          className="block bg-white text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
        >
         View Customer Query
        </reactRouterDom.Link> 
        <reactRouterDom.Link
          to="/warehouse"
          className="block bg-white text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
        >
         Ware-House Management
        </reactRouterDom.Link>  */}
        {/* <Link
          to="/login"
          className="block bg-white text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
        >
        Login SignUp Page
        </Link>  */}
          <reactRouterDom.Link
          to="/Createjobsheets"
          className="block bg-white text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
        >
          Create Job Sheets
        </reactRouterDom.Link> 
      </div>
      
    </div>
    </div>
  );
};

export default HomePage;