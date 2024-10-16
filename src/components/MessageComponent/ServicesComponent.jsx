// Service Component
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import axios from 'axios';

const ServiceComponent = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  return (
    <Box sx={{ padding: 3, backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
      <Typography variant="h5" gutterBottom>Services Client</Typography>
      <Divider sx={{ marginBottom: 2 }} />
      <List>
        {services.map((service) => (
          <React.Fragment key={service.id}>
            <ListItem>
              <ListItemText primary={service.title} secondary={service.description} />
              <Button variant="contained" color="primary">{service.action}</Button>
            </ListItem>
            <Divider sx={{ my: 1 }} />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default ServiceComponent;