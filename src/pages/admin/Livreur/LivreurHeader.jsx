import React, { useState } from 'react';
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';

const TrainingHeader = ({ sidebarToggle, setSidebarToggle }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-blue-800 px-4 py-3 flex justify-between items-center">
      {/* Logo et Toggler Sidebar */}
      <div className="flex items-center">
        <FaBars
          className="text-blue mr-4 cursor-pointer"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
        <span className="text-white font-semibold text-xl">
          Dubon Service Event
        </span>
      </div>

      {/* Barre de Recherche et Notifications */}
      <div className="flex items-center gap-5">
        {/* Champ de Recherche */}
        <div className="relative hidden md:flex items-center">
          <FaSearch className="absolute left-3 text-gray-400" />
          <input
            // type="text"
            placeholder="Search..."
            className="w-64 pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Notifications */}
        <div className="text-white">
          <FaBell className="w-6 h-6" />
        </div>

        {/* Menu Profil avec Dropdown */}
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="text-white focus:outline-none"
          >
            <FaUserCircle className="w-6 h-6 mt-1" />
          </div>
          {isDropdownOpen && (
            <div className="absolute bg-white rounded-lg shadow w-32 top-full right-0 z-10">
              <ul className="py-2 text-sm text-gray-950">
                <li className="hover:bg-gray-200 px-4 py-2">
                  <a href="#">Profile</a>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <a href="#">Activité</a>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <a href="#">Settings</a>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <a href="#">Centre d'aide</a>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <a href="#">Déconnexion</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TrainingHeader;
