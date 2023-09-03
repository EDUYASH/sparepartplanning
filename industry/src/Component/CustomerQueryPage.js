import React, { useState } from 'react';

const CustomerQueryPage = () => {
  const [queries, setQueries] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      contactDetails: 'john@example.com',
      queryDescription: 'Product not working properly',
      queryStatus: 'Open',
      createdAt: '2023-08-25',
    },
    {
      id: 121,
      customerName: 'Dheeraj',
      contactDetails: 'john@example.com',
      queryDescription: 'Product not working properly',
      queryStatus: 'Open',
      createdAt: '2023-08-22',
    },
    {
      id: 101,
      customerName: 'Yash',
      contactDetails: 'john@example.com',
      queryDescription: 'Product not working properly',
      queryStatus: 'Open',
      createdAt: '2023-08-29',
    },
    {
      id: 122,
      customerName: 'Jeet',
      contactDetails: 'john@example.com',
      queryDescription: 'Product not working properly',
      queryStatus: 'Open',
      createdAt: '2023-08-26',
    },
    // More query data...
  ]);

  const [selectedQuery, setSelectedQuery] = useState(null);
  const [response, setResponse] = useState('');
  const [queryStatus, setQueryStatus] = useState('');
  const [isResponseSent, setIsResponseSent] = useState(false);
  const [isUpdateSent, setIsUpdateSent] = useState(false);

  const handleResponseSubmit = () => {
    // Perform the response submission logic here
    // For demonstration, let's assume the response is successfully sent
    setIsResponseSent(true);
    // Reset the response and queryStatus state
    setResponse('');
    setQueryStatus('');
    setTimeout(() => {
      setIsResponseSent(false);
    }, 2000);

  };
  const handleUpdateSubmit = () => {
    // Perform the response submission logic here
    // Four demonstration, let's assume the response is successfully sent
    setIsUpdateSent(true);
    // Reset the response and queryStatus state
    setResponse('');
    setQueryStatus('');
    setTimeout(() => {
      setIsUpdateSent(false);
    }, 2000);

  };


  const handleQueryClick = (query) => {
    setSelectedQuery(query);
    setResponse('');
    setQueryStatus('');
  };

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleStatusChange = (event) => {
    setQueryStatus(event.target.value);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Customer Query Page</h2>
      <div className="flex">
        <div className="w-1/3 pr-4">
          <h3 className="text-lg font-semibold mb-2">Customer Queries</h3>
          <ul className="bg-gray-100 p-2 rounded-md">
            {queries.map((query) => (
              <li
                key={query.id}
                onClick={() => handleQueryClick(query)}
                className={`p-2 cursor-pointer ${
                  selectedQuery === query ? 'bg-blue-500 text-white' : 'bg-white'
                }`}
              >
                {query.customerName} - {query.queryStatus}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 pl-4">
          <h3 className="text-lg font-semibold mb-2">Query Details</h3>
          {selectedQuery && (
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="mb-2">
                <span className="font-semibold">Customer Name:</span>{' '}
                {selectedQuery.customerName}
              </p>
              {/* ... other details ... */}
              <h4 className="text-lg font-semibold mt-4">Response</h4>
              <textarea
                value={response}
                onChange={handleResponseChange}
                className="w-full p-2 border rounded-md"
                placeholder="Type your response..."
              />
              <h4 className="text-lg font-semibold mt-4">Query Status</h4>
              <select
                value={queryStatus}
                onChange={handleStatusChange}
                className="w-full p-2 border rounded-md"
              >
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Closed">Closed</option>

              </select>
                      <button
                       className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                        onClick={handleResponseSubmit}
                       >
                         Send Response
                          </button>
                          {isResponseSent && (
                              <p className="text-green-600 mt-2">Response sent successfully!</p>
                            )}


                       <button
                       className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md"
                        onClick={handleUpdateSubmit}
                       >
                         Update Response
                          </button>
                          {isUpdateSent && (
                               <p className="text-green-600 mt-2">Updated successfully!</p>
     
                              
                            )}
                            
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

export default CustomerQueryPage;