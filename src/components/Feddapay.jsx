import React, { useState } from 'react';

const FedaPayButton = () => {
  const [loading, setLoading] = useState(false);
//   const PUBLIC_KEY = 'sk_sandbox_c3_YYt1Qt5COT6Vh4-vtzs7a'; // Remplacez par votre clé publique

const handlePayment = async () => {
    setLoading(true); // Affiche le loader
  
    try {
      const response = await fetch('https://sandbox-api.fedapay.com/v1/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer pk_sandbox_tUy70GvhLhEbWHMIYtV-2FY8', // Clé privée valide
        },
        body: JSON.stringify({
          transaction: {
            amount: 5000, // Montant du paiement
            description: 'Paiement de test avec FedaPay',
            currency: 'XOF', // **Devise valide** ici
          },
        }),
      });
  
      const data = await response.json();
      console.log('Response data:', data); // Log pour debug
  
      if (data.data && data.data.link) {
        window.location.href = data.data.link; // Redirige vers la page de paiement
      } else {
        alert('Erreur : Lien de paiement non disponible.');
      }
    } catch (error) {
      console.error('Erreur lors de la transaction :', error);
      alert('Une erreur est survenue lors du paiement.');
    } finally {
      setLoading(false); // Arrête le loader
    }
  };
  
  

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      style={{
        padding: '10px 20px',
        backgroundColor: '#1e40af',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        opacity: loading ? 0.6 : 1,
      }}
    >
      {loading ? 'Redirection...' : 'Payer avec FedaPay'}
    </button>
  );
};

export default FedaPayButton;
