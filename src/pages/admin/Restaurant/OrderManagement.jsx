// OrderManagement.js
import React, { useEffect, useState } from 'react';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders'); // Remplacez par l'URL de votre API
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des commandes:', error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p>Chargement des commandes...</p>;
  }

  return (
    <div>
      <h2>Gestion des commandes</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.customer} - {order.item} : {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderManagement;
