// import React from 'react';
// import './Header.css';
// import profile from '../assets/images/user-profile-svgrepo-com (1).svg'
// import logo from '../assets/logo.png'; // Remplacez par votre logo

// const CustomHeader = ({ onDrawerToggle }) => {
//   return (
//     <header className="custom-header">
//       {/* Section gauche (logo + badge) */}
//       <div className="header-left">
//         <div className="logo-container">
//           <img src={logo} alt="Logo" className="header-logo" />
//           <span className="admin-badge">ADMIN</span>
//         </div>
//       </div>

//       {/* Section droite (hamburger, search, profil, etc.) */}
//       <div className="header-right">
//         {/* Menu Hamburger */}
//         <button className="menu-button" onClick={onDrawerToggle} aria-label="Menu">
//           &#9776;
//         </button>

//         {/* Barre de recherche */}
//         <div className="header-search">
//           {/* <span className="search-icon"></span> */}
//           <input type="text" placeholder="Search for the truth" className="search-input" />
//         </div>

//         {/* Langue + Notifications */}
//         <div className="header-icons">
//           <div className="lang-flag">
//             <span role="img" aria-label="German Flag"></span>
//           </div>
//           <button className="header-icon">
//             <span className="badge">3</span>
//             <span className="icon">🔔</span>
//           </button>
//         </div>

//         {/* Profil utilisateur */}
//         <div className="user-profile">
//           <img
//             src={profile}
//             alt="User"
//             className="user-avatar"
//           />
//           <div className="user-info">
//             <span className="user-name"></span>
//             {/* <span className="user-email">stroyka@example.com</span> */}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default CustomHeader;


import React from 'react';
import './Header.css';
import profile from '../assets/images/user-profile-svgrepo-com (1).svg';
import logo from '../assets/logo.png'; // Remplacez par votre logo
import { Box, AppBar, Toolbar, IconButton, Typography, Badge, InputBase, Avatar } from '@mui/material';
import { Menu as MenuIcon, Notifications as NotificationsIcon, Search as SearchIcon } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const CustomHeader = ({ onDrawerToggle }) => {
  const adminProfile = JSON.parse(localStorage.getItem('adminProfile'));
  const userName = adminProfile?.name || 'Admin';
  const userRole = adminProfile?.role || 'ADMIN';

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#fff', color: '#333', boxShadow: 1 }}>
      <Toolbar>
        {/* Hamburger Menu */}
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={onDrawerToggle} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        {/* Logo and Badge */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ height: 40, marginRight: 8 }} />
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#0808cd' }}>
            {userRole}
          </Typography>
        </Box>
        {/* Search Bar */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search for the truth..." inputProps={{ 'aria-label': 'search' }} />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        {/* Icons (Notifications, Profile) */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Notifications */}
          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          {/* User Profile */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <Avatar alt="User" src={profile} sx={{ width: 40, height: 40, mr: 1 }} />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {userName}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {userRole}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomHeader;
