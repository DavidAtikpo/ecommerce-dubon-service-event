// EventDashboard.js
import React, { useState } from 'react';
import EventManagement from './EventManagement';
import Navbar from '../dashboard/adminNavBar';
import Sidebar from './Sidebar';
// import './Dashboard.css';

const EventDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState('Gestion des événements');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setIsSidebarOpen(false); // Fermer la sidebar après sélection
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-dashboard">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar onMenuClick={handleMenuClick} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`dashboard-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {selectedMenu === 'Gestion des événements' && <EventManagement />}
      </div>
    </div>
  );
};

export default EventDashboard;
