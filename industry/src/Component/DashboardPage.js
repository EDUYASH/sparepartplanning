import React from 'react';
import SummaryCard from './SummaryCard';
import SimpleChart from './SimpleChart';
import ActivityFeed from './ActivityFeed';
import QuickActions from './QuickActions';

const DashboardPage = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-6">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Summary Cards */}
        <SummaryCard title="Active Job Sheets" value="25" />
        <SummaryCard title="Pending Dispatch Plans" value="10" />
        {/* ... Add more summary cards here */}
      </div>
{/* 
    //Charts and Graphs  */}
       <div  >
         <SimpleChart />
         <SimpleChart />
         
      </div> 
  


      {/* Recent Activity Feed */}
      <div className="mt-6">
        <ActivityFeed />
      </div>

      {/* Quick Actions */}
      <div className="mt-6">
        <QuickActions />
      </div>
    </div>
  );
};

export default DashboardPage;