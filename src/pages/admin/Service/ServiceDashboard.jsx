// ServiceDashboard.js
import React, { useState } from 'react';
import Navbar from './NavBar';
import Sidebar from './SideBar';
import ServiceManagement from './ServiceManagement';
// import './Dashboard.css';

const ServiceDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-dashboard">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`dashboard-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <ServiceManagement />
      </div>
    </div>
  );
};

export default ServiceDashboard;
