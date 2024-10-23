import React, { useState } from 'react';
import './PaymentPage.css'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PaypalPayment = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [orderID, setOrderID] = useState('');

  const handleCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: '1.00', // Remplacez par le montant total
          },
        },
      ],
    }).then((orderID) => {
      setOrderID(orderID);
      return orderID;
    });
  };

  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      setSuccess(true);
      alert(`Transaction réussie! Merci ${name}.`);
    });
  };

  const handleError = (err) => {
    setErrorMessage('Une erreur est survenue lors du paiement.');
    console.error('Erreur PayPal: ', err);
  };

  return (
    <PayPalScriptProvider options={{ 'client-id': 'Adj-z8lh_HNqwBAwhlwOX-w0LIbZmqAYNYX7ATE_OEPUIa8R5eb9hVVOY5xdSmKzudtVrQHwKN32g15z' }}>
      <div>
        {success ? (
          <h2>Paiement réussi ! Commande ID : {orderID}</h2>
        ) : (
          <div>
            <h2>Procéder au paiement</h2>
            <PayPalButtons
              createOrder={handleCreateOrder}
              onApprove={handleApprove}
              onError={handleError}
            />
          </div>
        )}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </PayPalScriptProvider>
  );
};

export default PaypalPayment;
