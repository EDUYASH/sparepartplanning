import React from 'react';

const ActivityFeed = () => {
  const activities = [
    { id: 1, message: 'New job sheet submitted', timestamp: '2023-08-25 10:00 AM' },
    { id: 2, message: 'Dispatch plan completed', timestamp: '2023-08-25 11:30 AM' },
    // ... add more activities
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
      <ul className="space-y-2">
        {activities.map(activity => (
          <li key={activity.id} className="flex justify-between items-center">
            <p className="text-gray-600">{activity.message}</p>
            <span className="text-gray-400">{activity.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;