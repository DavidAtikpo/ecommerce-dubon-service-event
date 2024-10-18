// Sidebar.js
import React from 'react';
import { FaBars, FaChartLine, FaBox, FaClipboardList, FaUsers, FaCog, FaCalendarAlt } from 'react-icons/fa';
// import '../dashboard/SideBar.css';

const Sidebar = ({ onMenuClick, isOpen, toggleSidebar }) => {
  return (
    <>
      <div className="sidebar-toggle-mobile" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <ul>
          <li className="list-item" onClick={() => onMenuClick('Dashboard')}>
            <FaChartLine /> Dashboard
          </li>
          <li className="list-item" onClick={() => onMenuClick('Produits')}>
            <FaBox /> Produits
          </li>
          <li className="list-item" onClick={() => onMenuClick('Commandes')}>
            <FaClipboardList /> Commandes
          </li>
          <li className="list-item" onClick={() => onMenuClick('Utilisateurs')}>
            <FaUsers /> Utilisateurs
          </li>
          <li className="list-item" onClick={() => onMenuClick('Gestion des événements')}>
            <FaCalendarAlt /> Gestion des événements
          </li>
          <li className="list-item" onClick={() => onMenuClick('Paramètres')}>
            <FaCog /> Paramètres
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
