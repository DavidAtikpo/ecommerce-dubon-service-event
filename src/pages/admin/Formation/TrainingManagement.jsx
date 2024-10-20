import React, { useState } from 'react';
import TrainingSidebar from './TrainingSidebar';
import TrainingHeader from './TrainingHeader';
import AddTraining from './AddTraining'
import EnrollmentManagement from './EnrollmentManagement';
import TrainingList from './TrainingList';


const Event = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true); // Gestion du sidebar
  const [selectedMenu, setSelectedMenu] = useState('analytics'); // Menu sélectionné

  const toggleSidebar = () => setSidebarToggle(!sidebarToggle); // Fonction pour basculer le sidebar

  return (
    <div className="flex">
      {/* Sidebar */}
      <TrainingSidebar
        sidebarToggle={sidebarToggle} 
        onMenuClick={setSelectedMenu} 
      />

      {/* Contenu principal */}
      <div className={`${sidebarToggle ? '' : 'ml-64'} w-full transition-all duration-300`}>
        {/* Dashboard avec bouton pour basculer le sidebar */}
        <TrainingHeader
          sidebarToggle={sidebarToggle} 
          setSidebarToggle={toggleSidebar} 
        />

        {/* Rendu conditionnel basé sur le menu sélectionné */}
        <div className="p-4">
          {selectedMenu === 'analytics' && <h2>en cours de traitement ...</h2>}
          {selectedMenu === 'add-formation' && <AddTraining/>}
          {selectedMenu === 'gestions' &&  <EnrollmentManagement/>}
          {selectedMenu === 'liste' &&  <TrainingList/>}
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

export default Event;
