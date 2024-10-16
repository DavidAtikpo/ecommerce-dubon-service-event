// Achat Component
import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button, Divider, Paper } from '@mui/material';
import axios from 'axios';

const AchatComponent = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await axios.get('/api/purchases');
        setPurchases(response.data);
      } catch (error) {
        console.error('Error fetching purchases:', error);
      }
    };
    fetchPurchases();
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>Historique d'Achats</Typography>
      <Divider sx={{ marginBottom: 2 }} />
      <Paper sx={{ padding: 2 }}>
        <List>
          {purchases.map((purchase) => (
            <React.Fragment key={purchase.id}>
              <ListItem>
                <ListItemText primary={`Produit: ${purchase.productName}`} secondary={`Date d'achat: ${purchase.purchaseDate} | Prix: ${purchase.price}€`} />
                <Button variant="outlined" color="primary">Voir Détails</Button>
              </ListItem>
              <Divider sx={{ my: 1 }} />
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default AchatComponent;