import React, { useEffect, useState } from 'react';
import { Menu, MenuItem, IconButton, Badge, Tooltip } from '@mui/material';
import { Notifications } from '@mui/icons-material';
import { API_URL } from '../config'; // Assure-toi que cette URL est correcte

const NotificationMenu = () => {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleNotificationMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(`${API_URL}/api/notifications`);
        if (!response.ok) {
          throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des notifications:', error);
        setError('Impossible de récupérer les notifications.');
      }
    };

    fetchNotifications();
  }, []);

  return (
    <>
      <Tooltip title="Notifications">
        <IconButton onClick={handleNotificationMenuOpen}>
          <Badge badgeContent={notifications.length} color="error">
            <Notifications />
          </Badge>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleNotificationMenuClose}
      >
        {error ? (
          <MenuItem>{error}</MenuItem>
        ) : notifications.length > 0 ? (
          notifications.map((notification) => (
            <MenuItem key={notification.id}>{notification.message}</MenuItem>
          ))
        ) : (
          <MenuItem>Aucune notification</MenuItem>
        )}
      </Menu>
    </>
  );
};

export default NotificationMenu;
