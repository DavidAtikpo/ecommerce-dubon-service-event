// TrainingList.js
import React, { useEffect, useState } from 'react';

const TrainingList = () => {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    const fetchTrainings = async () => {
      const response = await fetch('/api/trainings');
      const data = await response.json();
      setTrainings(data);
    };
    fetchTrainings();
  }, []);

  return (
    <div>
      <h2>Formations disponibles</h2>
      <ul>
        {trainings.map((training) => (
          <li key={training.id}>
            {training.title} - {training.date}
            <button>Inscription</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingList;
