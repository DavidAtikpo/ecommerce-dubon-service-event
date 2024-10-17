// ReservationManagement.js
import React, { useEffect, useState } from 'react';

const ReservationManagement = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch('/api/reservations');
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des réservations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  if (loading) {
    return <p>Chargement des réservations...</p>;
  }

  return (
    <div>
      <h2>Gestion des réservations</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            {reservation.customer} - {reservation.service} - {reservation.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationManagement;
