import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faMapLocation, faClipboardList, faExchangeAlt, faChartLine, faCog, faSearchDollar, faBars } from '@fortawesome/free-solid-svg-icons';
import '../components/MessageComponent/MessageSideBar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ onMenuClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (menu) => {
    if (typeof onMenuClick === 'function') {
      onMenuClick(menu);
    }
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
        <li className="navbars-item" onClick={() => { handleMenuClick('ads'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faChartLine} /> <span>Rapport</span>
        </li>
        <li className="navbars-item" onClick={() => { handleMenuClick('banner'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faEnvelope} /> <span>Messages</span>
        </li>
        <li className="navbars-item" onClick={() => { handleMenuClick('shipping-setting'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faMapLocation} /> <span>Position</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

