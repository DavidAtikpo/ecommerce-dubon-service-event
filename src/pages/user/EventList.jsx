// EventList.js
import React, { useEffect, useState } from 'react';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/events');
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Événements à venir</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.name} - {event.date}
            <button>Participer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
