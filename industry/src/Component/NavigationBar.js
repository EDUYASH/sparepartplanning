import React from 'react';
import { FaHome, FaClipboardList, FaTruck } from 'react-icons/fa';

const NavigationBar = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-xl">Your App Name</div>
        <ul className="flex space-x-6">
          <li>
            <a
              href="/"
              className="text-white hover:text-gray-200 flex items-center"
            >
              <FaHome className="mr-2" />Home
            </a>
          </li>
          <li>
            <a
              href="/dashboard"
              className="text-white hover:text-gray-200 flex items-center"
            >
              <FaClipboardList className="mr-2" />Dashboard
            </a>
          </li>
          <li>
            <a
              href="/job-sheets"
              className="text-white hover:text-gray-200 flex items-center"
            >
              <FaClipboardList className="mr-2" />Job Sheets
            </a>
          </li>
          <li>
            <a
              href="/dispatch-plans"
              className="text-white hover:text-gray-200 flex items-center"
            >
              <FaTruck className="mr-2" />Dispatch Plans
            </a>
          </li>
          
          {/* Add more links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;