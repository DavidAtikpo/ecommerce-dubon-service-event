import React, { useState } from 'react';
import { Box, Grid, Typography, Button, List, ListItem, ListItemText, IconButton, Drawer } from '@mui/material';
import { PhoneAndroid, ShoppingBasket, LocalOffer, Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const SalesPage = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const Navigate = useNavigate()

  const handleMouseOver = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseOut = () => {
    setHoveredCategory(null);
  };

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {/* Sidebar - Categories for Desktop */}
        <Grid item xs={12} md={2} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box sx={{ backgroundColor: '#ffff', padding: 2, borderRadius: '8px' }}>
            <Typography variant="h6" gutterBottom>DUBON SERVICE</Typography>
            <List>
              {['Categories des Produit', 'Evenement', 'Formation', 'E-restaurant', 'Service', 'Autres'].map((category, index) => (
                <ListItem
                  button
                  key={index}
                  onMouseOver={() => handleMouseOver(category)}
                >
                  <ListItemText primary={category} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>

        {/* Hamburger Menu for Mobile */}
        <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 250, padding: 2 }}>
              <Typography variant="h6" gutterBottom>DUBON SERVICE</Typography>
              <List>
                {['Categories des Produit', 'Evenement', 'Formation', 'E-restaurant', 'Service', 'Autres'].map((category, index) => (
                  <ListItem button key={index}>
                    <ListItemText primary={category} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Grid>

        {/* Main banner */}
        <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
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
          {/* Dropdown based on hovered category for Desktop */}
          {hoveredCategory && (
            <Box
              onMouseLeave={handleMouseOut}
              sx={{
                position: 'absolute',
                top: 15,
                left: 0,
                width: '98%',
                height: '91%',
                backgroundColor: '#fff',
                padding: 1,
                border: '1px solid #ccc',
                boxShadow: 3,
                borderRadius: '8px',
                zIndex: 10,
              }}
            >
              <Typography variant="body1">Options for: {hoveredCategory}</Typography>
              <List>
                <ListItem button>
                  <ListItemText primary="Option 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Option 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Option 3" />
                </ListItem>
              </List>
            </Box>
          )}
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
            <Box sx={{ marginTop: 2, padding: 2, backgroundColor: '#f0f0f0', borderRadius: '8px', textAlign: 'center' }}>
  <img
    src="https://via.placeholder.com/300x150.png?text=PUBLICITE+-+OFFRES+EXCLUSIVES"
    alt="Publicité Offres Exclusives"
    style={{ width: '100%', borderRadius: '8px', marginBottom: '8px' }}
  />
  <Button variant="contained" color="primary">En savoir plus</Button>
</Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SalesPage;