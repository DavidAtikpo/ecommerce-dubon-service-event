// AddTraining.js
import React, { useState } from 'react';

const AddTraining = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/trainings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, date }),
      });

      if (response.ok) {
        console.log('Formation ajoutée avec succès');
        setTitle('');
        setDate('');
      } else {
        console.error('Erreur lors de l’ajout de la formation');
      }
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Ajouter une formation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre de la formation"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Ajout en cours...' : 'Ajouter'}
        </button>
      </form>
    </div>
  );
};

export default AddTraining;
