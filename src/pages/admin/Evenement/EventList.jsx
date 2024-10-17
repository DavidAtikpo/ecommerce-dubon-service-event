// EventList.js
import React from 'react';

const EventList = () => {
  const events = [
    { id: 1, name: 'Conférence sur la technologie', date: '2024-12-01' },
    { id: 2, name: 'Atelier de cuisine', date: '2024-11-05' },
  ];

  return (
    <div>
      <h2>Liste des événements</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.name} - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
