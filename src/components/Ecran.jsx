import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar'
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import AdminOrdersPage from '../pages/orders/AdminOrders';
import AnalyticsPage from '../pages/admin/dashboard/Analyties';
import AdminMessagesComponent from '../pages/admin/AdminMessage';
import AdminShippingSettings from '../pages/admin/AdminShippingSettings';
// import AddRestaurant from '../pages/adminMenu/AddRestaurant';
// import AddService from '../pages/adminMenu/AddService';
import AdminOrders from '../pages/orders/AdminOrders';
import ProductManagement from '../pages/admin/AdminProduct';
// import AdminShippingSettings from '../pages/admin/AdminShippingSettings';
// import AnalyticsPage from '../pages/admin/AdminAnalytics/Analytics';
import AddProductPage from './AddProductPage';

const Ecran = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true); // Gestion du sidebar
  const [selectedMenu, setSelectedMenu] = useState('analytics'); // Menu sélectionné
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarToggle(!sidebarToggle); // Fonction pour basculer le sidebar

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar 
        sidebarToggle={sidebarToggle} 
        onMenuClick={setSelectedMenu} 
      />

      {/* Contenu principal */}
      <div className={`${sidebarToggle ? '' : 'ml-64'} w-full transition-all duration-300`}>
        {/* Dashboard avec bouton pour basculer le sidebar */}
        <Dashboard 
          sidebarToggle={sidebarToggle} 
          setSidebarToggle={toggleSidebar} 
        />
        <AdminSidebar
        onMenuClick={setSelectedMenu}
        />

        {/* Rendu conditionnel basé sur le menu sélectionné */}
        <div className="p-4">
          {selectedMenu === 'analytics' && <AnalyticsPage/>}
          {selectedMenu === 'add-product' && <AddProductPage />}
          {selectedMenu === 'order-history' && <AdminOrders />}
          {selectedMenu === 'products' && <ProductManagement />}
          {selectedMenu === 'order' && <AdminOrdersPage />}
          {selectedMenu === 'message' && <AdminMessagesComponent />}
          {selectedMenu === 'livraison' && <AdminShippingSettings />}
          {selectedMenu === 'ads' && <h2>en cours de traitement ...</h2>}
          {selectedMenu === 'add-restaurant' &&<h2>en cours de traitement ...</h2>}
          {selectedMenu === 'banner' && <h2>en cours de traitement ...</h2>}
          {selectedMenu === 'add-service' && <h2>en cours de traitement ...</h2>}
          {selectedMenu === 'shipping-setting' && <h2>en cours de traitement ...</h2>}
        </div>
      </div>
    </div>
  );
};

export default Ecran;
