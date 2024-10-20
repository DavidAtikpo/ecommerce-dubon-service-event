import React, { useState } from 'react';
import VendeurSideBar from './VendeurSideBar';
import VendeurHeardeDashboard from './VendeurHeaderDashboard';


const Vendeur = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false); // Gestion du sidebar
  const [selectedMenu, setSelectedMenu] = useState('analytics'); // Menu sélectionné

  const toggleSidebar = () => setSidebarToggle(!sidebarToggle); // Fonction pour basculer le sidebar

  return (
    <div className="flex">
      {/* Sidebar */}
      <VendeurSideBar 
        sidebarToggle={sidebarToggle} 
        onMenuClick={setSelectedMenu} 
      />

      {/* Contenu principal */}
      <div className={`${sidebarToggle ? '' : 'ml-64'} w-full transition-all duration-300`}>
        {/* Dashboard avec bouton pour basculer le sidebar */}
        <VendeurHeardeDashboard
          sidebarToggle={sidebarToggle} 
          setSidebarToggle={toggleSidebar} 
        />

        {/* Rendu conditionnel basé sur le menu sélectionné */}
        <div className="p-4">
          {selectedMenu === 'analytics' && <h2>en cours de traitement ...</h2>}
          {selectedMenu === 'add-product' && <h2>en cours de traitement ...</h2>}
          {selectedMenu === 'order-history' && <h2>en cours de traitement ...</h2>}
          {selectedMenu === 'products' && <h2>en cours de traitement ...</h2>}
          {selectedMenu === 'order' && <h2>en cours de traitement ...</h2>}
          {selectedMenu === 'message' && <h2>en cours de traitement ...</h2>}
          {selectedMenu === 'livraison' && <h2>en cours de traitement ...</h2>}
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

export default Vendeur;
