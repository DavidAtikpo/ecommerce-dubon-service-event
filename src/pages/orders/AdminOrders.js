import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import './AdminOrders.css';
import defaultProfile from '../../assets/images/user-profile-svgrepo-com (1).svg'

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrders, setExpandedOrders] = useState({});

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get(`${API_URL}/api/orders/all`);
      setOrders(data);
    };
    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    await axios.put(`${API_URL}/api/orders/${orderId}`, { status: newStatus });
    setOrders(orders.map(order =>
      order._id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const toggleOrderDetails = (orderId) => {
    setExpandedOrders(prev => ({
      ...prev,
      [orderId]: !prev[orderId]
    }));
  };

  return (
    <div>
      <div class="info-message">
  <strong>Bienvenue sur la page de gestion des commandes !</strong><br />
  Les commandes s’afficheront ici dès qu’un utilisateur aura passé une commande. 
  Vous pourrez suivre l’état de chaque commande, contacter les clients, 
  et gérer les livraisons en temps réel.
  <br /><br />
  <strong>Données disponibles :</strong>
  <ul>
    <li>Détails du produit commandé (quantité, prix, etc.).</li>
    <li>Coordonnées de l’utilisateur (nom, adresse, contact).</li>
    <li>Statut de la commande (en attente, en cours de traitement, livré, annulé).</li>
    <li>Date et heure de la commande.</li>
  </ul>
  <p>Utilisez cette page pour mettre à jour le statut des commandes, contacter les clients 
  et gérer les livraisons en temps réel.</p>
</div>

      {orders.map(order => (
        <div key={order._id} className="admin-order-box">
          {/* Entête de la commande avec photo de profil */}
          <div className="admin-order-header" onClick={() => toggleOrderDetails(order._id)}>
            {/* Photo de profil */}
            <img
              src={order.user.name ||defaultProfile } // Remplacer par l'URL par défaut si pas d'image
              alt="Profil utilisateur"
              className="admin-profile-picture"
            />
            <div className="admin-order-info">
              <p><strong>Prix:</strong> {order.totalPrice}</p>
              <p><strong>Articles:</strong> {order.orderItems.length}</p>
              <p><strong>Statut:</strong> {order.isPaid}</p>
            </div>
            <div className="admin-order-actions">
              {/* <button onClick={() => handleStatusChange(order._id, 'Validée')}>Valider</button> */}
              <button onClick={() => handleStatusChange(order._id, 'Expédiée')}>Expédier</button>
            </div>
          </div>

          {/* Affichage des détails si la boîte est ouverte */}
          {expandedOrders[order._id] && (
            <div className="admin-order-details">
              <h4>Détails de la commande</h4>
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Produit</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.orderItems.map(item => (
                    <tr key={item._id}>
                      <td><img src={item.image} alt={item.name} className="product-image" /></td>
                      <td>{item.name}</td>
                      <td>{item.price}cfa</td>
                      <td>{item.qty}</td>
                      <td>{(item.price * item.qty).toFixed(2)}cfa</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <h4>Adresse de livraison</h4>
              <table>
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Pays</th>
                    <th>Région</th>
                    <th>Ville</th>
                    <th>Adresse</th>
                    <th>Code Postal</th>
                    <th>Numéro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{order.shippingAddress.name}</td>
                    <td>{order.shippingAddress.country}</td>
                    <td>{order.shippingAddress.stat}</td>
                    <td>{order.shippingAddress.city}</td>
                    <td>{order.shippingAddress.Address}</td>
                    <td>{order.shippingAddress.postalCode}</td>
                    <td>{order.shippingAddress.mobile}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminOrdersPage;
