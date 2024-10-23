import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentOptionsPage.css'; // Importez le fichier CSS

const PaymentOptionsPage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlePaymentRedirect = () => {
    if (selectedOption === 'paypal') {
      navigate('/paypal-payment'); // Redirection vers la page PayPal
    } else if (selectedOption === 'fedapay') {
      navigate('/fedapay-payment'); // Redirection vers la page FedaPay
    } else {
      alert('Veuillez sélectionner une méthode de paiement.');
    }
  };

  return (
    <div className="payment-options-container">
      <h1>Choisissez une méthode de paiement</h1>

      <div className="payment-option">
        <input
          type="radio"
          id="paypal"
          name="payment"
          value="paypal"
          checked={selectedOption === 'paypal'}
          onChange={handleOptionChange}
        />
        <label htmlFor="paypal">PayPal</label>
      </div>

      <div className="payment-option">
        <input
          type="radio"
          id="fedapay"
          name="payment"
          value="fedapay"
          checked={selectedOption === 'fedapay'}
          onChange={handleOptionChange}
        />
        <label htmlFor="fedapay">FedaPay</label>
      </div>

      <button onClick={handlePaymentRedirect} className="payment-button">
        Continuer
      </button>
    </div>
  );
};

export default PaymentOptionsPage;
