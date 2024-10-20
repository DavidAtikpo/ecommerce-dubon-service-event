import React, { useState } from 'react';
import { Box, CssBaseline, Toolbar, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Footer from '../../../components/Footer';
import LivreurHeader from './LivreurHeader'
import LivreurSidebar from './LivreurSidebar' // Import de la nouvelle NavBar
import { useNavigate } from 'react-router-dom';
import OrderList from './OrderList'
import BeforeFooter from '../../../components/BeforeFooter';
// import './MessagePage.css';

const MessagePage = () => {
  const [selectedMenu, setSelectedMenu] = useState('commande');

  const theme = useTheme();
  const navigate = useNavigate()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div>
      <CssBaseline />
      <LivreurHeader/>
      <LivreurSidebar onMenuClick={handleMenuClick} /> 
      
      <Box sx={{ p: 3 }}>
        <Toolbar /> {/* Espace pour le TopBar */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={8}>
            {/* Affichage du contenu basé sur le menu sélectionné */}
            {selectedMenu === 'commande' && <OrderList />}
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <BeforeFooter/>
      <Footer />
    </div>
  );
};

export default MessagePage;
