// PaypalPayment.js
import React, { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';

const PaypalPayment = () => {
  const [totalAmount, setTotalAmount] = useState('0.00');
  const navigate = useNavigate();

  useEffect(() => {
    const storedAmount = localStorage.getItem('cartTotal');
    if (storedAmount) {
      setTotalAmount(parseFloat(storedAmount).toFixed(2));
    }
  }, []);

  const handleApprove = (data, actions) => {
    return actions.order.capture().then(details => {
      alert(`Transaction successful! Thank you, ${details.payer.name.given_name}`);
      localStorage.clear(); // Clear cart after successful payment
      navigate('/order-success'); // Redirect to success page
    });
  };

  const handleError = (err) => {
    console.error('PayPal Error:', err);
    alert('An error occurred during payment.');
  };
  const exchangeRate = 0.0016; //conversion the xof to usd
  const totalInUSD = (parseFloat(totalAmount) * exchangeRate).toFixed(2);
  return (
    <PayPalScriptProvider
      options={{
        'client-id': 'Adj-z8lh_HNqwBAwhlwOX-w0LIbZmqAYNYX7ATE_OEPUIa8R5eb9hVVOY5xdSmKzudtVrQHwKN32g15z',
        currency: 'USD',
      }}
    >
      <div>
        <h2>Passez au payement</h2>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalInUSD,
                    currency_code: 'USD',
                  },
                },
              ],
            });
          }}
          onApprove={handleApprove}
          onError={handleError}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default PaypalPayment;
