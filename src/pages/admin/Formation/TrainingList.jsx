// TrainingList.js
import React, { useEffect, useState } from 'react';

const TrainingList = () => {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const response = await fetch('/api/trainings'); // Remplacez par l'URL de votre API
        const data = await response.json();
        setTrainings(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des formations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainings();
  }, []);

  if (loading) {
    return <p>Chargement des formations...</p>;
  }

  return (
    <div>
      <h2>Liste des formations</h2>
      <ul>
        {trainings.map((training) => (
          <li key={training.id}>
            {training.title} - {training.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingList;
