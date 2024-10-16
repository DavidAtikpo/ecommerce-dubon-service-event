// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faEnvelope, faShoppingCart, faClipboardList, faExchangeAlt, faList, faCog, faSearchDollar, faBars } from '@fortawesome/free-solid-svg-icons';
// import './MessageSideBar.css';
// import { useNavigate } from 'react-router-dom';

// const MessageNavBar = ({ onMenuClick }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate(); // Utilisation de useNavigate

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
//       <div className="hamburger" onClick={toggleMenu}>
//         <FontAwesomeIcon icon={faBars} />
//       </div>
//       <ul className="navbar-list">
//         <li className="navbar-item" onClick={() => { navigate('/'); setMenuOpen(false); }}>
//           <FontAwesomeIcon icon={faHome} /> Accueil
//         </li>
//         <li className="navbar-item" onClick={() => { onMenuClick('messages'); setMenuOpen(false); }}>
//           <FontAwesomeIcon icon={faEnvelope} /> Messages
//         </li>
//         <li className="navbar-item" onClick={() => { onMenuClick('achat-prospects'); setMenuOpen(false); }}>
//           <FontAwesomeIcon icon={faShoppingCart} /> Achat 
//         </li>
//         <li className="navbar-item" onClick={() => { onMenuClick('commandes'); setMenuOpen(false); }}>
//           <FontAwesomeIcon icon={faClipboardList} /> Commandes
//         </li>
//         <li className="navbar-item" onClick={() => { onMenuClick('transactions'); setMenuOpen(false); }}>
//           <FontAwesomeIcon icon={faExchangeAlt} /> Transactions
//         </li>
//         <li className="navbar-item" onClick={() => { onMenuClick('contacts'); setMenuOpen(false); }}>
//           <FontAwesomeIcon icon={faSearchDollar} /> Devenez vendeur
//         </li>
//         <li className="navbar-item" onClick={() => { onMenuClick('listes'); setMenuOpen(false); }}>
//           <FontAwesomeIcon icon={faList} /> Mes Listes
//         </li>
//         <li className="navbar-item" onClick={() => { onMenuClick('services'); setMenuOpen(false); }}>
//           <FontAwesomeIcon icon={faCog} /> Services
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default MessageNavBar;
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
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="navbar-header">
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
        {/* <h2 className="navbar-title">DUBON SERVICE</h2> */}
      </div>
      <ul className={`navbar-list ${menuOpen ? 'navbar-list-open' : ''}`}>
        <li className="navbar-item" onClick={() => { navigate('/'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faHome} /> <span>Accueil</span>
        </li>
        <li className="navbar-item" onClick={() => { onMenuClick('messages'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faEnvelope} /> <span>Messages</span>
        </li>
        <li className="navbar-item" onClick={() => { onMenuClick('achat-prospects'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faShoppingCart} /> <span>Achat</span>
        </li>
        <li className="navbar-item" onClick={() => { onMenuClick('commandes'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faClipboardList} /> <span>Commandes</span>
        </li>
        <li className="navbar-item" onClick={() => { onMenuClick('transactions'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faExchangeAlt} /> <span>Transactions</span>
        </li>
        <li className="navbar-item" onClick={() => { onMenuClick('contacts'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faSearchDollar} /> <span>Devenez vendeur</span>
        </li>
        <li className="navbar-item" onClick={() => { onMenuClick('listes'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faList} /> <span>Mes Listes</span>
        </li>
        <li className="navbar-item" onClick={() => { onMenuClick('services'); setMenuOpen(false); }}>
          <FontAwesomeIcon icon={faCog} /> <span>Services</span>
        </li>
      </ul>
    </nav>
  );
};

export default MessageNavBar;

