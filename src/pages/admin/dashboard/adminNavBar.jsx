// Navbar.js
import React, { useState, useEffect } from 'react';
// import './adminNavBar.css';
import logo from '../../../assets/favicon.png';

const Navbar = ({ toggleSidebar }) => {
  const [profilePicture, setProfilePicture] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  useEffect(() => {
    const storedProfilePicture = localStorage.getItem('profilePicture');
    if (storedProfilePicture) setProfilePicture(storedProfilePicture);

    const fetchNotifications = async () => {
      try {
        const response = await fetch('/api/notifications');
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des notifications:', error);
      }
    };

    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/messages');
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des messages:', error);
      }
    };

    fetchNotifications();
    fetchMessages();
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Company" className="company-logo" onClick={toggleSidebar} />
        <span className="user-role">Admin</span>
      </div>

      <div className="navbar-center">
        <input type="text" className="search-bar" placeholder="Rechercher des produits, utilisateurs, etc..." />
      </div>

      <div className="navbar-right">
        <div className="navbar-icons">
          <div className="notification-icon" onClick={() => setIsNotifOpen(!isNotifOpen)}>
            <i className="fas fa-bell"></i>
            {notifications.length > 0 && <span className="notification-count">{notifications.length}</span>}
            {isNotifOpen && (
              <div className="dropdown-menu">
                {notifications.map((notif, index) => (
                  <div key={index} className="dropdown-item">{notif.message}</div>
                ))}
              </div>
            )}
          </div>

          <div className="message-icon" onClick={() => setIsMessageOpen(!isMessageOpen)}>
            <i className="fas fa-envelope"></i>
            {messages.length > 0 && <span className="message-count">{messages.length}</span>}
            {isMessageOpen && (
              <div className="dropdown-menu">
                {messages.map((msg, index) => (
                  <div key={index} className="dropdown-item">{msg.text}</div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="profile-section" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <img src={profilePicture || '/path/to/default-profile.png'} alt="Profile" className="profile-picture" />
          {isDropdownOpen && (
            <div className="profile-dropdown">
              <div className="dropdown-item">Gérer le compte</div>
              <div className="dropdown-item">Paramètres & Confidentialité</div>
              <div className="dropdown-item">Postes & Activité</div>
              <div className="dropdown-item">Centre d'aide</div>
              <div className="dropdown-item">Déconnexion</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
