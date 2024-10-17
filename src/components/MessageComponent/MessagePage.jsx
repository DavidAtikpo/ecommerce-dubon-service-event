import React, { useState } from 'react';
import { Box, CssBaseline, Toolbar, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MessageTopBar from './MessageTopBar'
import Footer from '../Footer';
import MessageNavBar from './MessageSideBar'; // Import de la nouvelle NavBar
import AccueilComponent from './AccueilComponent';
import MessagesComponent from './MessagesComponent';
import AchatProspectsComponent from './AchatProspectsComponent';
import UserOrders from '../MonCompte/UserOrder';
import TransactionCenterComponent from '../MonCompte/TransactionHistoryComponent';
import MesListesComponent from './MesListesComponent';
import ServicesComponent from './ServicesComponent';
import VendeurSelection from '../../pages/vendeurs/vendeurSelection';
import { useNavigate } from 'react-router-dom';
import './MessagePage.css';

const MessagePage = () => {
  const [selectedMenu, setSelectedMenu] = useState('accueil');

  const theme = useTheme();
  const navigate = useNavigate()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div>
      <CssBaseline />
      <MessageTopBar />
      <MessageNavBar onMenuClick={handleMenuClick} /> {/* Nouvelle NavBar */}
      
      <Box sx={{ p: 3 }}>
        <Toolbar /> {/* Espace pour le TopBar */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={8}>
            {/* Affichage du contenu basé sur le menu sélectionné */}
            {selectedMenu === 'accueil' && <AccueilComponent />}
            {selectedMenu === 'messages' && <MessagesComponent />}
            {selectedMenu === 'achat-prospects' && <AchatProspectsComponent />}
            {selectedMenu === 'commandes' && <UserOrders />}
            {selectedMenu === 'transactions' && <TransactionCenterComponent />}
            {selectedMenu === 'contacts' && <VendeurSelection />}
            {selectedMenu === 'listes' && <MesListesComponent />}
            {selectedMenu === 'services' && <ServicesComponent />}
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MessagePage;
