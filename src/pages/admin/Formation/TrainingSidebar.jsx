// Sidebar.js
import React, { useState } from 'react';
import { 
  FaRegFileAlt, FaPoll, FaRegEnvelope, FaCog, 
  FaChartLine, FaBookOpen, FaClipboardList, FaUsers, FaBoxOpen 
} from 'react-icons/fa';
import { MdEvent, MdDashboard, MdExpandLess, MdExpandMore } from 'react-icons/md';

const TrainingSidebar = ({ sidebarToggle, onMenuClick }) => {
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false); // État pour le sous-menu Catalogue

  const handleMenuClick = (menu) => {
    if (typeof onMenuClick === 'function') {
      onMenuClick(menu);
    }
  };

  const toggleCatalogue = () => setIsCatalogueOpen(!isCatalogueOpen); // Bascule le sous-menu Catalogue

  return (
    <div className={`${sidebarToggle ? 'hidden' : 'block'} w-64 bg-gray-500 fixed h-full px-4 py-2`}>
      <div className="my-2 mb-4">
        <h1 className="text-1xl text-white font-bold">Tableau Formation</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">

        <li 
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
          onClick={() => handleMenuClick('analytics')}
        >
          <MdDashboard className="inline-block w-6 h-6 mr-2 -mt-2" />
          Analytique
        </li>

        {/* Catalogue avec sous-menu */}
        <li 
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer flex justify-between items-center"
          onClick={toggleCatalogue}
        >
          <span>
            <FaBoxOpen className="inline-block w-6 h-6 mr-2 -mt-2" />
             Formation
          </span>
          {isCatalogueOpen ? <MdExpandLess /> : <MdExpandMore />}
        </li>

        {isCatalogueOpen && (
          <ul className="pl-8">
             <li 
              className="mb-2 hover:bg-blue-400 py-1 rounded cursor-pointer"
              onClick={() => handleMenuClick('add-formation')}
            >
               Creer une formation
            </li>
            <li 
              className="mb-2 hover:bg-blue-400 py-1 rounded cursor-pointer"
              onClick={() => handleMenuClick('gestions')}
            >
              Gestion
            </li>
            <li 
              className="mb-2 hover:bg-blue-400 py-1 rounded cursor-pointer"
              onClick={() => handleMenuClick('liste')}
            >
              Liste
            </li>

          </ul>
        )}

        {/* <li 
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
          onClick={() => handleMenuClick('blogs')}
        >
          <FaRegFileAlt className="inline-block w-6 h-6 mr-2 -mt-2" />
          Blogs
        </li> */}

        {/* <li 
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
          onClick={() => handleMenuClick('rapport')}
        >
          <FaPoll className="inline-block w-6 h-6 mr-2 -mt-2" />
          Rapport
        </li> */}

        <li 
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
          onClick={() => handleMenuClick('message')}
        >
          <FaRegEnvelope className="inline-block w-6 h-6 mr-2 -mt-2" />
          Message
        </li>

        <li 
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
          onClick={() => handleMenuClick('parametres')}
        >
          <FaCog className="inline-block w-6 h-6 mr-2 -mt-2" />
          Paramètres
        </li>
        <li 
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
          onClick={() => handleMenuClick('utilisateurs')}
        >
          <FaUsers className="inline-block w-6 h-6 mr-2 -mt-2" />
          Utilisateurs
        </li>
      </ul>
    </div>
  );
};

export default TrainingSidebar;
