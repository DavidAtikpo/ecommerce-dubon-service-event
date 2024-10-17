// EventCreation.js
import React, { useState } from 'react';

const EventCreation = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Création de l'événement : ${eventName} prévu pour le ${eventDate}`);
  };

  return (
    <div>
      <h2>Créer un nouvel événement</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom de l'événement"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        />
        <button type="submit">Créer</button>
      </form>
    </div>
  );
};

export default EventCreation;
