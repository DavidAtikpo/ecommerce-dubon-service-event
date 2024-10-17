// TrainingManagement.js
import React, { useState } from 'react';
import TrainingList from './TrainingList';
import AddTraining from './AddTraining';
import EnrollmentManagement from './EnrollmentManagement';

const TrainingManagement = () => {
  const [view, setView] = useState('list');

  return (
    <div>
      <h1>Gestion des formations</h1>
      <div>
        <button onClick={() => setView('list')}>Liste des formations</button>
        <button onClick={() => setView('add')}>Ajouter une formation</button>
        <button onClick={() => setView('enrollments')}>Inscriptions</button>
      </div>
      {view === 'list' && <TrainingList />}
      {view === 'add' && <AddTraining />}
      {view === 'enrollments' && <EnrollmentManagement />}
    </div>
  );
};

export default TrainingManagement;
