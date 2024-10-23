import React from 'react';
import PaypalPayment from './Paypal'; // Assurez-vous du chemin correct

const PaymentPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <PaypalPayment style={{ textAlign: 'center', marginTop: '50px' }} />
    </div>
  );
};

export default PaymentPage;
