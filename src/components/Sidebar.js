import React, { useState } from 'react';
import { 
  FaRegFileAlt, FaPoll, FaRegEnvelope, FaCog, 
  FaChartLine, FaBookOpen, FaClipboardList, FaUsers, FaBoxOpen 
} from 'react-icons/fa';
import { MdEvent, MdDashboard, MdExpandLess, MdExpandMore } from 'react-icons/md';

const Sidebar = ({ sidebarToggle, onMenuClick }) => {
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false); // État pour le sous-menu Catalogue

  const handleMenuClick = (menu) => {
    if (typeof onMenuClick === 'function') {
      onMenuClick(menu);
    }
  };

  const toggleCatalogue = () => setIsCatalogueOpen(!isCatalogueOpen); // Bascule le sous-menu Catalogue

  return (
    <div
      className={`${
        sidebarToggle ? 'hidden' : 'block'
      } w-64 bg-blue-800 fixed top-0 left-0 h-full overflow-y-auto px-4 py-2`}
    >
      <div className="my-2 mb-4">
        <h1 className="text-1xl text-white font-bold">Tableau de super Admin</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        <li
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
          onClick={() => handleMenuClick('analytics')}
        >
          <MdDashboard className="inline-block w-6 h-6 mr-2 -mt-1" />
          Dashboard
        </li>

        {/* Catalogue avec sous-menu */}
        <li
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer flex justify-between items-center"
          onClick={toggleCatalogue}
        >
          <span>
            <FaBoxOpen className="inline-block w-6 h-6 mr-2 -mt-1" />
            Catalogue
          </span>
          {isCatalogueOpen ? <MdExpandLess /> : <MdExpandMore />}
        </li>

        {isCatalogueOpen && (
          <ul className="pl-8">
            <li
              className="mb-2 hover:bg-blue-400 py-1 rounded cursor-pointer"
              onClick={() => handleMenuClick('add-product')}
            >
              Ajouter Produits
            </li>
            <li
              className="mb-2 hover:bg-blue-400 py-1 rounded cursor-pointer"
              onClick={() => handleMenuClick('products')}
            >
              Produits
            </li>
            <li
              className="mb-2 hover:bg-blue-400 py-1 rounded cursor-pointer"
              onClick={() => handleMenuClick('livraison')}
            >
              Paramètre de livraison
            </li>
            <li
              className="mb-2 hover:bg-blue-400 py-1 rounded cursor-pointer"
              onClick={() => handleMenuClick('order')}
            >
              Commandes
            </li>
          </ul>
        )}

        <li
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
          onClick={() => handleMenuClick('rapport')}
        >
          <FaPoll className="inline-block w-6 h-6 mr-2 -mt-1" />
          Rapport
        </li>

        <li
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
          onClick={() => handleMenuClick('message')}
        >
          <FaRegEnvelope className="inline-block w-6 h-6 mr-2 -mt-1" />
          Message
        </li>

        <li
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
          onClick={() => handleMenuClick('parametres')}
        >
          <FaCog className="inline-block w-6 h-6 mr-2 -mt-1" />
          Paramètres
        </li>

        <li
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
          onClick={() => handleMenuClick('evenement')}
        >
          <MdEvent className="inline-block w-6 h-6 mr-2 -mt-1" />
          Événement
        </li>

        <li
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
          onClick={() => handleMenuClick('formation')}
        >
          <FaBookOpen className="inline-block w-6 h-6 mr-2 -mt-1" />
          Formation
        </li>

        <li
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
          onClick={() => handleMenuClick('commandes')}
        >
          <FaClipboardList className="inline-block w-6 h-6 mr-2 -mt-1" />
          Commandes
        </li>

        <li
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
          onClick={() => handleMenuClick('utilisateurs')}
        >
          <FaUsers className="inline-block w-6 h-6 mr-2 -mt-1" />
          Utilisateurs
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
