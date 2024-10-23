import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DeliveryOptions from './DeliveryOptions';
import PaymentOptions from './PaymentOptions';
import FullPaymentAdvantages from './FullPaymentAdvantages';
import './OrderSummary.css';
import { API_URL } from '../../config';

const OrderSummaryPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [isOrderValid, setIsOrderValid] = useState(false);
  const [paymentOption, setPaymentOption] = useState('payAfterDelivery');

  const navigate = useNavigate();

  // Fonction pour confirmer la commande
  const handleConfirmOrder = async () => {
    if (paymentOption === 'payNow') {
      // Rediriger vers la page de paiement si l'utilisateur choisit "Payer maintenant"
      navigate('/paypal-payment');
      return;
    }

    // Si l'utilisateur choisit "Payer après livraison"
    const orderData = {
      user: 'USER_ID', // Remplacez par l'ID réel de l'utilisateur
      orderItems: cartItems.map(item => ({
        name: item.title,
        qty: item.quantity,
        image: item.image,
        price: item.finalPrice,
        product: item.productId,
      })),
      shippingAddress: shippingAddress,
      paymentMethod: paymentOption,
      taxPrice: 0,
      shippingPrice: deliveryFee,
      totalPrice: totalAmount + deliveryFee,
      isPaid: false,
    };

    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.post(`${API_URL}/api/orders/post`, orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      alert('Commande confirmée avec succès.');
      navigate('/order-success');
    } catch (error) {
      console.error('Erreur lors de la création de la commande', error);
      alert('Erreur lors de la création de la commande');
    }
  };

  const handleDeliveryOptionChange = (option) => {
    // Logique pour ajuster les frais de livraison
    setDeliveryFee(option === 'express' ? 10000 : 5000);
  };

  const handlePaymentOptionChange = (option) => {
    setPaymentOption(option);
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);

    const total = parseFloat(localStorage.getItem('cartTotal')) || 0;
    setTotalAmount(total);

    const address = JSON.parse(localStorage.getItem('shippingAddress')) || null;
    setShippingAddress(address);

    setIsOrderValid(cart.length > 0 && address && total > 0);
  }, []);

  return (
    <div className="order-summary-container">
      <h2>Résumé de la commande</h2>

      <div className="order-summary-items">
        {cartItems.map((item, index) => (
          <div key={index}>
            <span>{item.title}</span>
            <span>{item.quantity} x {item.finalPrice.toLocaleString()} FCFA</span>
          </div>
        ))}
      </div>

      <DeliveryOptions onDeliveryOptionChange={handleDeliveryOptionChange} />

      <div className="order-summary-shipping">
        <h3>Adresse de livraison</h3>
        {shippingAddress ? (
          <p>
            {shippingAddress.name}, {shippingAddress.address}, {shippingAddress.city}, {shippingAddress.state}, 
            {shippingAddress.postalCode}, {shippingAddress.country}, 
            Téléphone: {shippingAddress.mobile}
          </p>
        ) : (
          <p>Aucune adresse de livraison spécifiée.</p>
        )}
        <p>Frais de livraison : {deliveryFee.toLocaleString()} FCFA</p>
      </div>

      <PaymentOptions onPaymentOptionChange={handlePaymentOptionChange} />

      {paymentOption === 'payNow' && <FullPaymentAdvantages />}

      <div className="order-summary-total">
        <h3>Total : {totalAmount.toLocaleString()} FCFA</h3>
      </div>

      <button
        className="order-summary-button"
        onClick={handleConfirmOrder}
        disabled={!isOrderValid}
      >
        Confirmer la commande
      </button>
    </div>
  );
};

export default OrderSummaryPage;
