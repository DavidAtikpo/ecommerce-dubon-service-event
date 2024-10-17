// AdminDashboard.js
import Analyties from './Analyties';
import ProductManagement from './ProductManegement';
import UserManegement from './UserManegment';
import OrderManagement from './OrderManegement';
import Navbar from './adminNavBar';
import Sidebar from './SideBar';
import { useState } from 'react';
// import './Dashboard.css';

const AdminDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setIsSidebarOpen(false); // Ferme la sidebar après une sélection
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-dashboard">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar onMenuClick={handleMenuClick} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`dashboard-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {selectedMenu === 'Dashboard' && <Analyties />}
        {selectedMenu === 'Produits' && <ProductManagement />}
        {selectedMenu === 'Utilisateurs' && <UserManegement />}
        {selectedMenu === 'Commandes' && <OrderManagement />}
        {selectedMenu === 'Statistiques' && <Analyties />}
      </div>
    </div>
  );
};

export default AdminDashboard;
