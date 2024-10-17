
// import React, { useState, useEffect } from 'react';
// import { FaBars, FaSearch, FaShoppingCart } from 'react-icons/fa';
// import { MdLanguage, MdAccountCircle } from 'react-icons/md';
// import { Badge, IconButton, Menu, MenuItem } from '@mui/material';

// const NavBar = ({ logo, username }) => {
//     const [cartItemsLength, setCartItemsLength] = useState(0);
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [showMobileMenu, setShowMobileMenu] = useState(false);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//         const token = localStorage.getItem('token');
//         setCartItemsLength(storedCart.length);
//         setIsLoggedIn(!!token);
//     }, []);

//     const handleProfileMenuOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleProfileMenuClose = () => {
//         setAnchorEl(null);
//     };

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('cart');
//         setIsLoggedIn(false);
//     };

//     const toggleMobileMenu = () => {
//         setShowMobileMenu(!showMobileMenu);
//     };

//     return (
//         <nav style={styles.navbar}>
//             {/* Logo */}
//             <div style={styles.logoSection}>
//                 <img src={logo} alt="logo" style={styles.logo} />
//             </div>

//             {/* Search Bar */}
//             <div style={styles.searchSection}>
//                 <FaSearch style={styles.searchIcon} />
//                 <input type="text" placeholder="Search for the truth" style={styles.searchInput} />
//             </div>

//             {/* Cart and Profile Icons */}
//             <div style={styles.rightSection}>
//                 <IconButton onClick={() => console.log('Cart clicked')}>
//                     <Badge badgeContent={cartItemsLength} color="secondary">
//                         <FaShoppingCart style={styles.icon} />
//                     </Badge>
//                 </IconButton>

//                 <IconButton onClick={handleProfileMenuOpen}>
//                     <MdAccountCircle style={styles.icon} />
//                 </IconButton>

//                 {/* Profile Menu */}
//                 <Menu
//                     anchorEl={anchorEl}
//                     open={Boolean(anchorEl)}
//                     onClose={handleProfileMenuClose}
//                 >
//                     <MenuItem onClick={() => console.log('Profile clicked')}>Mon Profil</MenuItem>
//                     <MenuItem onClick={() => console.log('Account clicked')}>Mon Compte</MenuItem>
//                     <MenuItem onClick={handleLogout}>Déconnexion</MenuItem>
//                 </Menu>
//             </div>

//             {/* Hamburger Menu */}
//             <FaBars style={styles.hamburgerMenu} onClick={toggleMobileMenu} />

//             {/* Mobile Menu Dropdown */}
//             {showMobileMenu && (
//                 <div style={styles.mobileMenuDropdown}>
//                     <ul>
//                         <li onClick={() => console.log('Livrer clicked')}>Livrer à</li>
//                         <li onClick={() => console.log('Messages clicked')}>Messages</li>
//                         <li onClick={() => console.log('Cart clicked')}>Panier</li>
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     );
// };

// const styles = {
//     navbar: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         backgroundColor: '#FFC107',
//         padding: '10px',
//         position: 'relative',
//     },
//     logoSection: {
//         flex: 1,
//     },
//     logo: {
//         height: '40px',
//     },
//     searchSection: {
//         flex: 2,
//         display: 'flex',
//         alignItems: 'left',
//         backgroundColor: '#f1f1f1',
//         borderRadius: '5px',
//         padding: '5px',
//     },
//     searchIcon: {
//         marginRight: '10px',
//     },
//     searchInput: {
//         border: 'none',
//         backgroundColor: 'transparent',
//         outline: 'none',
//         width: '100%',
//     },
//     rightSection: {
//         display: 'flex',
//         alignItems: 'center',
//     },
//     icon: {
//         fontSize: '24px',
//         margin: '0 10px',
//         cursor: 'pointer',
//     },
//     hamburgerMenu: {
//         display: 'block',
//         fontSize: '24px',
//         cursor: 'pointer',
//     },
//     mobileMenuDropdown: {
//         position: 'absolute',
//         top: '50px',
//         left: '0',
//         backgroundColor: '#fff',
//         boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//         width: '100%',
//         padding: '10px',
//         zIndex: 100,
//     },
//     mobileMenuItem: {
//         padding: '10px 0',
//     },
// };

// export default NavBar;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {  Menu, MenuItem } from '@mui/material';

// import { AccountCircle } from '@mui/icons-material';
// import logo from '../../assets/favicon.png'
// import profile from '../../assets/images/user-profile-svgrepo-com (1).svg'
// import { FaBars, FaBell,FaShoppingCart, FaSearch } from 'react-icons/fa'; // Pour les icônes de recherche, menu, et notification
// import { MdLanguage } from 'react-icons/md'; // Pour l'icône de langue

// const NavBar = ({ username }) => {
// const [isLoggedIn,setIsLoggedIn] = useState(false);
// const [cartItemsLength, setCartItemsLength] = useState(0)
// const [anchorEl,setAnchorEl] = useState(null)
// const [ showMobileMenu, setShowMobileMenu] = useState(false)
// const navigate = useNavigate()

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setIsLoggedIn(!!token);
//     setCartItemsLength(storedCart.length);
//   }, []);

//   const handleProfileMenuOpen = (event) =>{
//     setAnchorEl(event.currentTarget);
//   };

//   const handleProfileMenuClose = () => {
//     setAnchorEl(null);
//   }
//   const handleLogout = () => {
//     localStorage.removeItem('token')
//     setIsLoggedIn(false)
//     navigate('/')
//   }
//   const toggleMobileMenu = () => {
//     setShowMobileMenu(!setShowMobileMenu);
//   }
//     return (
//         <nav style={styles.navbar}>
//             {/* Logo Section */}
//             <div style={styles.logoSection}>
//                 <img src={logo} alt="logo" style={styles.logo} />
//             </div>

//             {/* Admin/Username Section */}
//             <div style={styles.adminSection}>
//                 <span style={styles.adminLabel}>{'User'}</span>
//             </div>

//             {/* Search Bar Section */}
//             <div style={styles.searchSection}>
//                 <FaSearch style={styles.searchIcon} />
//                 <input type="text" placeholder="Search for the truth" style={styles.searchInput} />
//             </div>

//             {/* Right Section (Language, Notifications, Profile) */}
//             <div style={styles.rightSection}>
//                 {/* Language Icon */}
//                 <MdLanguage style={styles.icon} />
//                 {/* Notification Icon */}
              
//                 <div onClick = {()=> navigate('/cart')} style={styles.notificationBadge}>
//                 </div>
//                 <div content={cartItemsLength} color='secondary'/>
//                 <FaShoppingCart style={styles.icon} />
              
              
//                 {/* Profile Section */}
//                 <div onClick={()=> navigate('/profile')} style={styles.profileSection}>
//                     <img 
//                         src={profile} 
//                         alt="profile" 
//                         style={styles.profileImage} 
//                     />
//                 </div>
//             </div>

//             {/* Hamburger Menu */}
//             <FaBars style={styles.hamburgerMenu} onClick={handleProfileMenuOpen} />
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//              onClose={handleProfileMenuClose}
//            >
//               <MenuItem onClick={() => navigate('/profile')}>Mon Profil</MenuItem>
//               <MenuItem onClick={() => navigate('/gerer-compte')}>Mon Compte</MenuItem>
//               <MenuItem onClick={handleLogout}>Déconnexion </MenuItem>
//               </Menu>
//         </nav>
//     );
// };

// const styles = {
//     navbar: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         backgroundColor: '#FFC107', // couleur jaune pour la barre de navigation
//         padding: '10px',
//     },
//     logoSection: {
//         flex: 1,
//     },
//     logo: {
//         height: '40px',
//     },
//     adminSection: {
//         flex: 1,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     adminLabel: {
//         backgroundColor: '#000',
//         color: '#fff',
//         padding: '5px 10px',
//         borderRadius: '5px',
//     },
//     searchSection: {
//         flex: 3,
//         display: 'flex',
//         alignItems: 'center',
//         backgroundColor: '#f1f1f1',
//         borderRadius: '5px',
//         padding: '5px',
//     },
//     searchIcon: {
//         marginRight: '10px',
//     },
//     searchInput: {
//         border: 'none',
//         backgroundColor: 'transparent',
//         outline: 'none',
//         width: '100%',
//     },
//     rightSection: {
//         display: 'flex',
//         alignItems: 'center',
//         position: 'relative',
//     },
//     icon: {
//         margin: '0 10px',
//         cursor: 'pointer',
//     },
//     notificationBadge: {
//         position: 'absolute',
//         top: '-5px',
//         right: '15px',
//         backgroundColor: '#FFD700',
//         color: '#000',
//         borderRadius: '50%',
//         padding: '2px 5px',
//         fontSize: '12px',
//     },
//     profileSection: {
//         display: 'flex',
//         alignItems: 'center',
//     },
//     profileImage: {
//         borderRadius: '50%',
//         marginRight: '10px',
//         with:'40px',
//         height:'40px'
//     },
//     hamburgerMenu: {
//         display: 'block',
//         fontSize: '24px',
//         cursor: 'pointer',
//     },
// };

// export default NavBar;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import logo from '../../assets/favicon.png';
import profile from '../../assets/images/user-profile-svgrepo-com (1).svg';
import { FaBars, FaShoppingCart, FaSearch, FaBell } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
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
    <nav style={styles.navbars}>
      {/* Logo Section */}
      
      <div style={styles.logoSections}>
        <img src={logo} alt="logo" style={styles.logos} />
      </div>

      {/* Admin/Username Section */}
      {isLoggedIn ? (
        <div style={styles.adminSections}>
          <span style={styles.adminLabels}>{'User'}</span>
        </div>
      ) : (
        <div style={styles.adminSections}>
          <span onClick={()=> navigate('/register')} role="img" aria-label="signup" style={styles.signupEmojis}>
             Inscription
          </span>
        </div>
      )}
      
      {/* Search Bar Section */}
      <div style={styles.searchSections}>
        <FaSearch style={styles.searchIcons} />
        <input type="text" placeholder="Recherche des produits" style={styles.searchInputs} />
      </div>

      {/* Right Section (Language, Notifications, Cart, Profile) */}
      <div style={styles.rightSections}>
        {/* Language Icon */}
        <FaBell style={styles.icons} />
        
        {/* Cart Icon with Item Count */}
        <div onClick={() => navigate('/cart')} style={styles.cartSections}>
          <FaShoppingCart style={styles.icons} />
          {cartItemsLength > 0 && (
            <div style={styles.cartBadges}>{cartItemsLength}</div>
          )}
        </div>

        {/* Profile Section */}
        {isLoggedIn ? (
          <div onClick={() => navigate('/profilePhoto')} style={styles.profileSections}>
            <img src={profile} alt="profile" style={styles.profileImages} />
          </div>
        ) : (
          <div onClick={() => navigate('/login')} style={styles.buttonSections}>
            connexion
          </div>
        )}
      </div>

      {/* Hamburger Menu */}
      {isLoggedIn ? (
        <FaBars style={styles.hamburgerMenus} onClick={handleProfileMenuOpen} />
      ) : (
        <div onClick={() => navigate('/login')} style={styles.hamburgerMenus}>
          <AccountCircle style={styles.icons} />
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
  navbars: {
    display: 'flex',
    position:"fixed",
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFC107',
    border:"1px 1px 2px solid #0808cd",
    padding: '10px',
    position: 'sticky',
    zIndex:'10',
    flexWrap: 'wrap', // Allow elements to wrap on mobile
  },

  logoSections: {
    flex: 1,
  },
  logos: {
    height: '40px',
  },
  adminSections: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease', // Smooth transition on change
  },
  adminLabels: {
    backgroundColor: '#0808cd',
    color: '#fff',
    padding: '5px 7px',
    borderRadius: '5px',
  },
  signupEmojis: {
    fontSize: '16px',
    cursor: 'pointer',
  },
  searchSections: {
    flex: 3, // Au lieu de 5
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: '8px', // Optionnel: Réduire légèrement le rayon des coins
    padding: '0.5px 10px', // Ajuster le padding vertical et horizontal
    margin: '0 30px', // Réduire la marge
    transition: 'all 0.3s ease',
  },
  
  
  searchIcons: {
    marginRight: '10px',
    color:'#0808cd'
  },
  searchInputs: {
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    width: '90%', // Réduire un peu l'espace occupé par l'input
  },
  
  rightSections: {
    display: 'flex',
    justifyContent:'space-between',
    padding:'0 30px',
    alignItems: 'center',
    position: 'relative',
  },
  icons: {
    margin: '0 10px',
    cursor: 'pointer',
  },
  cartSections: {
    position: 'relative',
    cursor: 'pointer',
    padding:'0 20px',
    
  },
  cartBadges: {
    position: 'absolute',
    top: '-5px',
    right: '15px',
    backgroundColor: '#FF0000',
    color: '#fff',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '12px',
  },
  profileSections: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  profileImages: {
    borderRadius: '50%',
    width: '30px',
    height: '30px',
  },
  buttonSections: {
    width: '80px',
    textAlign: 'center',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  hamburgerMenus: {
    fontSize: '24px',
    cursor: 'pointer',
    color:'#0808cd'
  },
  mobileMenuDropdowns: {
    display: 'none',
  },
  // Mobile-specific styles
  '@media (max-width: 768px)': {
    navbars: {
      flexDirection: 'column', // Stack the items in column for mobile
    },
    searchSections: {
      width: '100%',
      margin: '10px 0', // Move search bar below other elements
    },
    rightSections: {
      flex: 1,
      justifyContent: 'space-between',
      width: '100%',
    },
    buttonSections: {
      width: 'auto',
      fontSize: '14px',
      padding: '5px',
    },
    hamburgerMenus: {
      display: 'block',
      marginBottom: '10px', // Separate the hamburger menu for better alignment
    },
    profileSections: {
      display: 'block',
      width: '100%',
      textAlign: 'center', // Center the profile section on mobile
      marginBottom: '10px',
    },
    adminSections: {
      display: 'block',
      width: '100%',
      textAlign: 'center',
      marginBottom: '10px',
    },
    mobileMenuDropdowns: {
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

