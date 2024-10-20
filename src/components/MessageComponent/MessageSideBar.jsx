import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faShoppingCart, faClipboardList, faExchangeAlt, faList, faCog, faSearchDollar, faBars } from '@fortawesome/free-solid-svg-icons';
import './MessageSideBar.css';
import { useNavigate } from 'react-router-dom';

const MessageNavBar = ({ onMenuClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbars ${menuOpen ? 'open' : ''}`}>
      <div className="navbars-header">
        <div className="hamburgers" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
        {/* <h2 className="navbar-title">DUBON SERVICE</h2> */}
      </div>
      <ul className={`navbars-list ${menuOpen ? 'navbar-list-open' : ''}`}>
        <li className="navbars-item" onClick={() => { navigate('/'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faHome} /> <span>Accueil</span>
        </li>
        <li className="navbars-item" onClick={() => { onMenuClick('messages'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faEnvelope} /> <span>Messages</span>
        </li>
        <li className="navbars-item" onClick={() => { onMenuClick('achat-prospects'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faShoppingCart} /> <span>Achat</span>
        </li>
        <li className="navbars-item" onClick={() => { onMenuClick('commandes'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faClipboardList} /> <span>Commandes</span>
        </li>
        <li className="navbars-item" onClick={() => { onMenuClick('transactions'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faExchangeAlt} /> <span>Transactions</span>
        </li>
        <li className="navbars-item" onClick={() => { onMenuClick('contacts'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faSearchDollar} /> <span>Devenez vendeur</span>
        </li>
        <li className="navbars-item" onClick={() => { onMenuClick('listes'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faList} /> <span>Mes Listes</span>
        </li>
        <li className="navbars-item" onClick={() => { onMenuClick('services'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faCog} /> <span>Services</span>
        </li>
      </ul>
    </nav>
  );
};

export default MessageNavBar;

