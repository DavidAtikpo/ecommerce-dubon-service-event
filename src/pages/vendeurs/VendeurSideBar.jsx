// Sidebar.js
import React, { useState } from 'react';
import { 
   FaPoll, FaRegEnvelope, FaCog, 
   FaBoxOpen 
} from 'react-icons/fa';
import { MdDashboard, MdExpandLess, MdExpandMore } from 'react-icons/md';

const Sidebar = ({ sidebarToggle, onMenuClick }) => {
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false); // État pour le sous-menu Catalogue

  const handleMenuClick = (menu) => {
    if (typeof onMenuClick === 'function') {
      onMenuClick(menu);
    }
  };

  const toggleCatalogue = () => setIsCatalogueOpen(!isCatalogueOpen); // Bascule le sous-menu Catalogue

  return (
    <div className={`${sidebarToggle ? 'hidden' : 'block'} w-64 bg-blue-500 fixed h-full px-4 py-2`}>
      <div className="my-2 mb-4">
        <h1 className="text-1xl text-white font-bold">Page d'accueil</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">

        <li 
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
          onClick={() => handleMenuClick('analytics')}
        >
          <MdDashboard className="inline-block w-6 h-6 mr-2 -mt-2" />
          Dashboard
        </li>

        {/* Catalogue avec sous-menu */}
        <li 
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer flex justify-between items-center"
          onClick={toggleCatalogue}
        >
          <span>
            <FaBoxOpen className="inline-block w-6 h-6 mr-2 -mt-2" />
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

        {/* <li 
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
          onClick={() => handleMenuClick('blogs')}
        >
          <FaRegFileAlt className="inline-block w-6 h-6 mr-2 -mt-2" />
          Blogs
        </li> */}

        <li 
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
          onClick={() => handleMenuClick('rapport')}
        >
          <FaPoll className="inline-block w-6 h-6 mr-2 -mt-2" />
          Rapport
        </li>

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

       
      </ul>
    </div>
  );
};

export default Sidebar;
