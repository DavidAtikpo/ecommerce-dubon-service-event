// EventManagement.js
import React, { useState } from 'react';
import EventList from './EventList';
import EventCreation from './EventCreation';

const EventManagement = () => {
  const [view, setView] = useState('list');

  return (
    <div>
      <h1>Gestion des événements</h1>
      <div>
        <button onClick={() => setView('list')}>Liste des événements</button>
        <button onClick={() => setView('create')}>Créer un événement</button>
      </div>
      {view === 'list' ? <EventList /> : <EventCreation />}
    </div>
  );
};

export default EventManagement;
