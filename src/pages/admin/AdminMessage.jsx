import React, { useState } from 'react';

const AdminMessagesComponent = () => {
  const [messages, setMessages] = useState([
    { id: 1, from: 'user', text: 'Bonjour, j’ai une question concernant ma commande.' },
  ]); // Liste des messages

  const [responseText, setResponseText] = useState(''); // Réponse de l'admin

  // Fonction pour répondre à un message
  const sendResponse = () => {
    if (responseText.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        from: 'admin',
        text: responseText,
      };
      setMessages([...messages, newMessage]); // Ajouter la réponse
      setResponseText(''); // Réinitialiser le champ
    }
  };

  return (
    <div className="admin-messages-component">
      <h2>Messages des utilisateurs</h2>

      {/* Affichage des messages */}
      <div className="message-list">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={msg.from === 'admin' ? 'admin-message' : 'user-message'}
          >
            <strong>{msg.from === 'user' ? 'Utilisateur' : 'Vous'} :</strong> {msg.text}
          </div>
        ))}
      </div>

      {/* Formulaire de réponse */}
      <div className="response-input">
        <textarea
          value={responseText}
          onChange={(e) => setResponseText(e.target.value)}
          placeholder="Répondez à l'utilisateur ici..."
        />
        <button onClick={sendResponse}>Répondre</button>
      </div>
    </div>
  );
};

export default AdminMessagesComponent;
