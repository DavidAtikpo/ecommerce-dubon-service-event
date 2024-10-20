import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './ProductManagement.css';
import { API_URL } from '../../../config';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Charger la liste des produits à partir du backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      try {
        await axios.delete(`${API_URL}/api/products/${productId}`);
        setProducts(products.filter(product => product.id !== productId));
        alert('Produit supprimé avec succès');
      } catch (error) {
        console.error('Erreur lors de la suppression du produit :', error);
        alert('Erreur lors de la suppression du produit');
      }
    }
  };

  const handleEdit = (productId) => {
    // Rediriger l'utilisateur vers la page de modification du produit
    window.location.href = `/edit-product/${productId}`;
  };

  return (
    <div className="product-managements">
      <h2>Gestion des Produits</h2>
      <button>Ajouter un Produit</button>
      <table>
        <thead>
          <tr>
            <th>Nom du Produit</th>
            <th>Prix</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price} €</td>
                <td>{product.stock}</td>
                <td>
                  <button className='product-manager' onClick={() => handleEdit(product.id)}>Modifier</button>
                  <button className='product-manager' onClick={() => handleDelete(product.id)}>Supprimer</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Aucun produit disponible</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;
