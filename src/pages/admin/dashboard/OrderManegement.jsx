import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './OrderManagement.css';
import { API_URL } from '../../../config';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Charger la liste des commandes à partir du backend
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/orders`);
        setOrders(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des commandes :', error);
      }
    };
    fetchOrders();
  }, []);

  const handleView = (orderId) => {
    // Rediriger l'utilisateur vers la page de détails de la commande
    window.location.href = `/order-details/${orderId}`;
  };

  const handleEdit = (orderId) => {
    // Rediriger l'utilisateur vers la page de modification de la commande
    window.location.href = `/edit-order/${orderId}`;
  };

  return (
    <div className="order-management">
      <h2>Gestion des Commandes</h2>
      <table>
        <thead>
          <tr>
            <th>ID Commande</th>
            <th>Client</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>{order.clientName}</td>
                <td>{order.total} €</td>
                <td>{order.status}</td>
                <td>
                  <button onClick={() => handleView(order.id)}>Voir</button>
                  <button onClick={() => handleEdit(order.id)}>Modifier</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Aucune commande disponible</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;
