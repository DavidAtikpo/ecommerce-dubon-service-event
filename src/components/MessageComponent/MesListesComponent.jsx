
// Mes Listes Component
import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';
import { Delete, Favorite } from '@mui/icons-material';
import axios from 'axios';

const MesListesComponent = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('/api/favorites');
        setFavorites(response.data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };
    fetchFavorites();
  }, []);

  const handleDeleteFavorite = async (id) => {
    try {
      await axios.delete(`/api/favorites/${id}`);
      setFavorites(favorites.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting favorite:', error);
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>Mes Listes</Typography>
      <Divider sx={{ marginBottom: 2 }} />
      <List>
        {favorites.map((favorite) => (
          <React.Fragment key={favorite.id}>
            <ListItem secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteFavorite(favorite.id)}>
                <Delete />
              </IconButton>
            }>
              <ListItemText primary={`Produit Favori: ${favorite.name}`} secondary={`Ajouté le ${favorite.addedDate}`} />
              <IconButton edge="end" aria-label="favorite">
                <Favorite color="error" />
              </IconButton>
            </ListItem>
            <Divider sx={{ my: 1 }} />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default MesListesComponent;