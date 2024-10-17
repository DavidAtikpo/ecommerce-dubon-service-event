// AddMenuItem.js
import React, { useState } from 'react';

const AddMenuItem = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/menu', { // Remplacez par l'URL de votre API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price }),
      });
      if (response.ok) {
        console.log('Plat ajouté avec succès');
        setName('');
        setPrice('');
      } else {
        console.error('Erreur lors de l’ajout du plat');
      }
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Ajouter un plat au menu</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom du plat"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Prix"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Ajout en cours...' : 'Ajouter'}
        </button>
      </form>
    </div>
  );
};

export default AddMenuItem;
