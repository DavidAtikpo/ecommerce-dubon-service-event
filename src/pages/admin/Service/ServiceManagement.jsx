// ServiceManagement.js
import React, { useState } from 'react';
import ServiceList from './ServiceList';
import AddService from './AddService';
import ReservationManagement from './ReservationManagement';

const ServiceManagement = () => {
  const [view, setView] = useState('list');

  return (
    <div>
      <h1>Gestion des services</h1>
      <div>
        <button onClick={() => setView('list')}>Liste des services</button>
        <button onClick={() => setView('add')}>Ajouter un service</button>
        <button onClick={() => setView('reservations')}>Réservations</button>
      </div>
      {view === 'list' && <ServiceList />}
      {view === 'add' && <AddService />}
      {view === 'reservations' && <ReservationManagement />}
    </div>
  );
};

export default ServiceManagement;
