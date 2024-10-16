import React, { useState } from 'react';

const MessagesComponent = () => {
  const [messages, setMessages] = useState([
    { id: 1, from: 'admin', text: 'Bienvenue dans le service de messagerie.' },
  ]); // Liste des messages initiaux
  const [messageText, setMessageText] = useState(''); // Contenu du message que l'utilisateur veut envoyer

  // Fonction pour envoyer un message
  const sendMessage = () => {
    if (messageText.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        from: 'user',
        text: messageText,
      };
      setMessages([...messages, newMessage]); // Ajouter le nouveau message
      setMessageText(''); // Réinitialiser le champ
    }
  };

  return (
    <div className="messages-component">
      <h2>Communiquez avec l'administration ou le service client</h2>

      {/* Affichage des messages */}
      <div className="message-list">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={msg.from === 'admin' ? 'admin-message' : 'user-message'}
          >
            <strong>{msg.from === 'admin' ? 'Administration' : 'Vous'} :</strong> {msg.text}
          </div>
        ))}
      </div>

      {/* Formulaire d'envoi de message */}
      <div className="message-input">
        <textarea
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Écrivez votre message ici..."
        />
        <button onClick={sendMessage}>Envoyer</button>
      </div>
    </div>
  );
};

export default MessagesComponent;
