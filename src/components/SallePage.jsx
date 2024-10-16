import React from 'react';
import { Box, Grid, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, PhoneAndroid, ShoppingBasket, HealthAndSafety, Devices, SportsEsports, LocalOffer } from '@mui/icons-material';

const SalesPage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {/* Sidebar - Categories */}
        <Grid item xs={12} md={2}>
          <Box sx={{ backgroundColor: '#f5f5f5', padding: 2, borderRadius: '8px' }}>
            <Typography variant="h6" gutterBottom>DUBON SERVICE</Typography>
            <List>
              <ListItem button>
               
                <ListItemText primary="Categories des Produit" />
              </ListItem>
              <ListItem button>
                
                <ListItemText primary="Evenement" />
              </ListItem>
              <ListItem button>
                
                <ListItemText primary="Formation" />
              </ListItem>
              <ListItem button>
                
                <ListItemText primary="E-restaurant" />
              </ListItem>
              <ListItem button>
                
                <ListItemText primary="Service" />
              </ListItem>
              <ListItem button>
                
                <ListItemText primary="Autres" />
              </ListItem>
            </List>
          </Box>
        </Grid>

        {/* Main banner */}
        <Grid item xs={12} md={7}>
          <Box sx={{ position: 'relative' }}>
            <img
              src="https://via.placeholder.com/600x300.png?text=OCTOBER+SALES+-+UP+TO+60%25+OFF"
              alt="October Sales"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ position: 'absolute', bottom: 20, right: 0 }}
            >
              Passez Commandes
            </Button>
          </Box>
        </Grid>

        {/* Right action section */}
        <Grid item xs={12} md={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              variant="outlined"
              sx={{ textTransform: 'none', justifyContent: 'flex-start' }}
              startIcon={<PhoneAndroid />}
            >
              Contactez-nous: +229 00 00 00 00
            </Button>
            <Button
              variant="outlined"
              sx={{ textTransform: 'none', justifyContent: 'flex-start' }}
              startIcon={<ShoppingBasket />}
            >
              Voir tes commandes
            </Button>
            <Button
              variant="outlined"
              sx={{ textTransform: 'none', justifyContent: 'flex-start' }}
              startIcon={<LocalOffer />}
            >
              Devenir vendeur
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SalesPage;
