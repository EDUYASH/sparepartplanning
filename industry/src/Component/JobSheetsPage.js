import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CheckInventoryForm from './CheckInventoryForm';
import * as reactRouterDom from 'react-router-dom';

const JobSheetsPage = () => {
  const [jobSheets, setJobSheets] = useState([]);

  useEffect(() => {
    // Make API call to fetch job sheets and update state
    axios.get('http://localhost:8080/api/job-sheets')
      .then(response => {
        // Assuming response.data contains the fetched job sheets data
        setJobSheets(response.data);
      })
      .catch(error => {
        console.error('Error fetching job sheets:', error);
      });
  }, []);

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-semibold mb-4">Job Sheets Page</h2>
      <ul>
        {jobSheets.map(jobSheet => (
          <li
            key={jobSheet.id}
            className="bg-white shadow-md rounded-md p-4 mb-4"
          >
            <h3 className="text-lg font-semibold mb-2">Job Number: {jobSheet.id}</h3>
            <p><strong>Customer Name:</strong> {jobSheet.customerName}</p>
            <p><strong>Device Model:</strong> {jobSheet.deviceModel}</p>
            <p><strong>Issue Description:</strong> {jobSheet.issueDescription}</p>
            <p><strong>Job Status:</strong> {jobSheet.jobStatus}</p>
            <p><strong>Date:</strong> {jobSheet.date}</p>
            <p><strong>Service Center:</strong> {jobSheet.serviceCenter.location} - {jobSheet.serviceCenter.warehouseZone}</p>
            <p><strong>Service Center ID :</strong> {jobSheet.serviceCenter.centerId}</p>
            <reactRouterDom.Link
            to={`/check-inventory/${jobSheet.id}/${jobSheet.serviceCenter.centerId}`}
            className="block bg-white text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
          >
          Diagnosis          
        </reactRouterDom.Link> 
          </li>
          
        ))}
      </ul>
      
    </div>
  );
};

export default JobSheetsPage;
