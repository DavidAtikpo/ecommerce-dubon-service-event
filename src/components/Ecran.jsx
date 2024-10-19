import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
// import AdminAdForm from './AdminAdForm';
// import ManageBanners from './ManageBanners';
// import AddRestaurant from '../pages/adminMenu/AddRestaurant';
// import AddService from '../pages/adminMenu/AddService';
// import AdminOrders from '../pages/orders/AdminOrders';
// import ProductManagement from '../pages/admin/AdminProduct';
// import AdminShippingSettings from '../pages/admin/AdminShippingSettings';
import AnalyticsPage from '../pages/admin/AdminAnalytics/Analytics';
import AddProductPage from './AddProductPage';

const Ecran = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false); // Gestion du sidebar
  const [selectedMenu, setSelectedMenu] = useState('analytics'); // Menu sélectionné

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

        {/* Rendu conditionnel basé sur le menu sélectionné */}
        <div className="p-4">
          {selectedMenu === 'analytics' && <AnalyticsPage />}
          {selectedMenu === 'add-product' && <AddProductPage />}
          {selectedMenu === 'order-history' && <h2>en cours de traitement ...</h2>}
          {selectedMenu === 'products' && <h2>en cours de traitement ...</h2>}
          {selectedMenu === 'categories' && <h2>en cours de traitement ...</h2>}
          {selectedMenu === 'calendar' && <h2>en cours de traitement ...</h2>}
          {selectedMenu === 'tables' && <h2>en cours de traitement ...</h2>}
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
