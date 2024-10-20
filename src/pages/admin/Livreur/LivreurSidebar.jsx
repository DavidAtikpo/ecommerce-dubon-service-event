import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faShoppingCart, faClipboardList, faExchangeAlt, faList, faCog, faSearchDollar, faBars } from '@fortawesome/free-solid-svg-icons';
import '../../../components/MessageComponent/MessageSideBar.css';
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
        <li className="navbars-item" onClick={() => { onMenuClick('commande'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faClipboardList} /> <span>Liste de commande</span>
        </li>
        <li className="navbars-item" onClick={() => { onMenuClick('messages'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faEnvelope} /> <span>Messages</span>
        </li>
        <li className="navbars-item" onClick={() => { onMenuClick('achat-prospects'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faCog} /> <span>Parametre</span>
        </li>
      </ul>
    </nav>
  );
};

export default MessageNavBar;

