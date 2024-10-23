import React from 'react';
import FedaPayPayment from './Feddapay'; // Assurez-vous du chemin correct

const PaymentPage = () => {
  const handleSuccess = (response) => {
    console.log('Paiement réussi :', response);
    // Vous pouvez rediriger l'utilisateur ou enregistrer les informations de paiement
  };

  const handleError = (response) => {
    console.error('Erreur de paiement :', response);
    alert('Le paiement a échoué.');
  };

  return (
    <div>
      <h1>Paiement</h1>
      <FedaPayPayment
        amount={5000}
        description="Paiement de la commande #12345"
        onPaymentSuccess={handleSuccess}
        onPaymentError={handleError}
      />
    </div>
  );
};

export default PaymentPage;
