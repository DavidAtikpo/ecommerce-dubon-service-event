// UserPage.js
import React, { useState } from 'react';
import TrainingList from './TrainingList';
import EventList from './EventList';
import ServiceList from './ServiceList';
import RestaurantMenuList from './RestaurantMenuList';
// import './UserPage.css';

const UserPage = () => {
  const [activeSection, setActiveSection] = useState('formations');

  return (
    <div className="user-page">
      <h1>Bienvenue sur notre plateforme</h1>
      <nav>
        <button onClick={() => setActiveSection('formations')}>Formations</button>
        <button onClick={() => setActiveSection('evenements')}>Événements</button>
        <button onClick={() => setActiveSection('services')}>Services</button>
        <button onClick={() => setActiveSection('restaurant')}>Restaurant</button>
      </nav>

      <div className="content">
        {activeSection === 'formations' && <TrainingList />}
        {activeSection === 'evenements' && <EventList />}
        {activeSection === 'services' && <ServiceList />}
        {activeSection === 'restaurant' && <RestaurantMenuList />}
      </div>
    </div>
  );
};

export default UserPage;
