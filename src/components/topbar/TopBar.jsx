import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import logo from '../../assets/favicon.png';
import profile from '../../assets/images/user-profile-svgrepo-com (1).svg';
import { FaBars, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import shadows from '@mui/material/styles/shadows';
// import zIndex from '@mui/material/styles/zIndex';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItemsLength, setCartItemsLength] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setIsLoggedIn(!!token);
    setCartItemsLength(storedCart.length);
  }, []);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget); // Anchor the menu to the clicked element
    setShowMobileMenu(true); // Set this to true to show the dropdown
  };
  
  const handleProfileMenuClose = () => {
    setAnchorEl(null); // Reset anchorEl to hide the dropdown
    setShowMobileMenu(false); // Set this to false to hide the dropdown
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  // const toggleMobileMenu = () => {
  //   setShowMobileMenu(!showMobileMenu);
  // };

  return (
    <nav style={styles.navbar}>
      {/* Logo Section */}
      
      <div style={styles.logoSection}>
        <img src={logo} alt="logo" style={styles.logo} />
      </div>

      {/* Admin/Username Section */}
      {isLoggedIn ? (
        <div style={styles.adminSection}>
          <span style={styles.adminLabel}>{'User'}</span>
        </div>
      ) : (
        <div style={styles.adminSection}>
          <span onClick={()=> navigate('/register')} role="img" aria-label="signup" style={styles.signupEmoji}>
             Inscription
          </span>
        </div>
      )}
      
      {/* Search Bar Section */}
      <div style={styles.searchSection}>
        <FaSearch style={styles.searchIcon} />
        <input type="text" placeholder="Recherche des produits" style={styles.searchInput} />
      </div>

      {/* Right Section (Language, Notifications, Cart, Profile) */}
      <div style={styles.rightSection}>
        {/* Language Icon */}
        <MdLanguage style={styles.icon} />
        
        {/* Cart Icon with Item Count */}
        <div onClick={() => navigate('/cart')} style={styles.cartSection}>
          <FaShoppingCart style={styles.icon} />
          {cartItemsLength > 0 && (
            <div style={styles.cartBadge}>{cartItemsLength}</div>
          )}
        </div>

        {/* Profile Section */}
        {isLoggedIn ? (
          <div onClick={() => navigate('/profilePhoto')} style={styles.profileSection}>
            <img src={profile} alt="profile" style={styles.profileImage} />
          </div>
        ) : (
          <div onClick={() => navigate('/login')} style={styles.buttonSection}>
            connexion
          </div>
        )}
      </div>

      {/* Hamburger Menu */}
      {isLoggedIn ? (
        <FaBars style={styles.hamburgerMenu} onClick={handleProfileMenuOpen} />
      ) : (
        <div onClick={() => navigate('/login')} style={styles.hamburgerMenu}>
          <AccountCircle style={styles.icon} />
        </div>
      )}

      {/* Dropdown Menu for Mobile Hamburger */}
      {showMobileMenu && isLoggedIn && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleProfileMenuClose}
        >
          <MenuItem onClick={() => navigate('/message-page')}>Mon Bureau</MenuItem>
          <MenuItem onClick={() => navigate('/gerer-compte')}>Mon Compte</MenuItem>
          <MenuItem onClick={() => navigate('/shipping-address')}>Mon Address</MenuItem>
          <MenuItem onClick={() => navigate('/message-page')}>Mes Commandes</MenuItem>
          <MenuItem onClick={handleLogout}>Déconnexion</MenuItem>
        </Menu>
      )}
      
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    // border: '1px solid #0808cd',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    position: 'sticky', // Garder la barre en haut de l'écran
    top: 0,             // Positionner la barre en haut de la page
    zIndex: '10',
    flexWrap: 'wrap', // Permettre aux éléments de se replier sur mobile
  },
  section1:{
    // display:'flex',
    backgroundColor:'#fff'
  },
  logoSection: {
    flex: 1,
  },
  logo: {
    height: '40px',
  },
  adminSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease', // Smooth transition on change
  },
  adminLabel: {
    backgroundColor: '#0808cd',
    color: '#fff',
    padding: '5px 7px',
    borderRadius: '5px',
  },
  signupEmoji: {
    fontSize: '16px',
    cursor: 'pointer',
  },
  searchSection: {
    flex: 4,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: '5px',
    padding: '5px',
    margin: '0 50px',
    transition: 'all 0.3s ease', // Smooth transition on change
  },
  searchIcon: {
    marginRight: '10px',
    color:'#0808cd'
  },
  searchInput: {
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    width: '100%',
  },
  rightSection: {
    display: 'flex',
    justifyContent:'space-between',
    padding:'0 30px',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    margin: '0 10px',
    cursor: 'pointer',
  },
  cartSection: {
    position: 'relative',
    cursor: 'pointer',
    padding:'0 20px',
    
  },
  cartBadge: {
    position: 'absolute',
    top: '-5px',
    right: '15px',
    backgroundColor: '#FF0000',
    color: '#fff',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '12px',
  },
  profileSection: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  profileImage: {
    borderRadius: '50%',
    width: '30px',
    height: '30px',
  },
  buttonSection: {
    width: '80px',
    textAlign: 'center',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  hamburgerMenu: {
    fontSize: '24px',
    cursor: 'pointer',
    color:'#0808cd'
  },
  mobileMenuDropdown: {
    display: 'none',
  },
  // Mobile-specific styles
  '@media (max-width: 768px)': {
    navbar: {
      flexDirection: 'column', // Stack the items in column for mobile
    },
    searchSection: {
      width: '100%',
      margin: '10px 0', // Move search bar below other elements
    },
    rightSection: {
      flex: 1,
      justifyContent: 'space-between',
      width: '100%',
    },
    buttonSection: {
      width: 'auto',
      fontSize: '14px',
      padding: '5px',
    },
    hamburgerMenu: {
      display: 'block',
      marginBottom: '10px', // Separate the hamburger menu for better alignment
    },
    profileSection: {
      display: 'block',
      width: '100%',
      textAlign: 'center', // Center the profile section on mobile
      marginBottom: '10px',
    },
    adminSection: {
      display: 'block',
      width: '100%',
      textAlign: 'center',
      marginBottom: '10px',
    },
    mobileMenuDropdown: {
      display: 'block', // Dropdown for mobile menu
      position: 'absolute',
      top: '50px',
      right: '10px',
      backgroundColor: '#FFC107',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '5px',
      padding: '10px',
    },
  },
};
export default NavBar;

