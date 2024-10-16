
import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper, TextField, Button } from '@mui/material';
import axios from 'axios';

const MessageComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    try {
      const response = await axios.post('/api/messages', { content: newMessage });
      setMessages([...messages, response.data]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>Messagerie Client</Typography>
      <Paper sx={{ padding: 2, marginBottom: 3 }}>
        <List>
          {messages.map((message) => (
            <ListItem key={message.id}>
              <ListItemText primary={message.title} secondary={message.content} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <TextField
        label="Écrivez un message"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSendMessage}>Envoyer</Button>
    </Box>
  );
};

export default MessageComponent;