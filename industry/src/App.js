import HomePage from './Component/HomePage';
import JobSheetsPage from './Component/JobSheetsPage';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import NavigationBar from './Component/NavigationBar';
import DispatchPlansPage from './Component/DispatchPlansPage';
import ViewDetailsPage from './Component/ViewDetailsPage';
import DashboardPage from './Component/DashboardPage';
import CustomerQueryPage from './Component/CustomerQueryPage';
import AuthenticationPage from './Component/AuthenticationPage';
import WarehouseManagementPage from './Component/WareHouseManagementPage';
import LoginSignupPage from './Component/LoginSignupPage';
import CreateJobSheet from './Component/CreateJobSheet';
import CheckInventoryForm from './Component/CheckInventoryForm';



function App() {
  return (
    <div className="App">
           <NavigationBar/>

     <Router>
    <Routes>
    <Route path="/" exact element={<LoginSignupPage/>} />
    <Route path="/Home" exact element={<HomePage/>} />
    <Route path="/job-sheets" element={<JobSheetsPage/>} />
    <Route path="/dispatch-plans" element={<DispatchPlansPage/>}/>
     <Route path="/dispatch-plans/${dispatchPlans.id}" element={<ViewDetailsPage id="${dispatchPlans.id}"/>}/> 
    <Route path="/dashboard" element={<DashboardPage/>}/>
    {/* <Route path="/CustomerQuery" element={<CustomerQueryPage/>}/> */}
    {/* <Route path="/warehouse" element={<WarehouseManagementPage/>}/> */}
    <Route path="/login" element={<LoginSignupPage/>}/>
     <Route path="/" element={<AuthenticationPage />} />
     <Route path="/Createjobsheets" element={<CreateJobSheet />} />
     {/* <Route path="/Check" element={<CheckInventoryForm />} /> */}
     <Route path="/check-inventory/:jobId/:serviceCenterId" element={<CheckInventoryForm />} />
   </Routes>
    
  </Router>
   
    {/* <ViewDetailsPage match={"id"="1"}/> */}
    </div>
  );
}

export default App;
