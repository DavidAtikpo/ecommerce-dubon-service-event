// TrainingDashboard.js
import React, { useState } from 'react';
import Navbar from './NavBar';
import Sidebar from './SideBar';
import TrainingManagement from './TrainingManagement';
// import './Dashboard.css';

const TrainingDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-dashboard">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`dashboard-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <TrainingManagement />
      </div>
    </div>
  );
};

export default TrainingDashboard;
