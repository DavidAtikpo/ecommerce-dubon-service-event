import React, { useEffect, useState } from 'react';
import './product.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config';
// import ProductRating from './ProductRating';

const Product = () => {
  const [productsByCategory, setProductsByCategory] = useState({});
  const [quantity] = useState(1);
  const navigate = useNavigate();

  // Regrouper les produits par catégorie
  const groupByCategory = (products) => {
    return products.reduce((acc, product) => {
      const category = product.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {});
  };

  // Charger les produits depuis le serveur
  useEffect(() => {
    axios.get(`${API_URL}/api/product`)
      .then(response => {
        const products = response.data;
        const groupedProducts = groupByCategory(products);
        setProductsByCategory(groupedProducts);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des produits :", error);
      });
  }, []);

  // Rediriger vers la page de détail du produit
  const handleProductClick = (productId) => {
    navigate(`/productPage/${productId}`);
  };

  // Ajouter le produit au panier
  const handleAddToCart = (product) => {
    const currentCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    const existingProductIndex = currentCart.findIndex(item => item._id === product._id);

    if (existingProductIndex !== -1) {
      currentCart[existingProductIndex].quantity +=quantity;
    } else {
               const productToAdd = {
                ...product,
                quantity,
                image: product.images[0], // Utiliser la première image
            };
            currentCart.push(productToAdd);
    }

    localStorage.setItem('cart', JSON.stringify(currentCart));
    alert(`${product.title} ajouté au panier!`);
  };

  return (
    <div className="main-containeru">
      {Object.keys(productsByCategory).map((category, index) => (
        <div key={index} className="category-sectionu">
          <h2 className="category-nameu">{category}</h2>
          <div className="products-gridu">
            {productsByCategory[category].map((product) => (
              <div key={product._id} className="product-cardu">
                <div className="product-image-containeru" onClick={() => handleProductClick(product._id)}>
                  <img
                    src={product.images.length > 0 ? product.images[0] : '/default-image.jpg'}
                    alt={product.title}
                    className="product-imageu"
                  />
                </div>
                <div className="product-infou">
                  <h3 className="product-titleu">{product.title}</h3>
                  <p className="price-original">Prix: {product.price.toLocaleString()} FCFA</p>
                  {product.discount && product.discount > 0 ? (
                    <span className="price-percentage">-{product.discount}%</span>
                  ) : (
                    <span className="no-discountu">Aucune promotion</span>
                  )}
                  <p className="final-priceu">
                    Prix Final: {(product.price - (product.price * product.discount / 100)).toFixed(2)} FCFA
                  </p>
                  <p className="product-ratingu">
                  {/* <ProductRating productId={product._id} /> */}
                  </p>
                  <button className="add-to-cart-btnu" onClick={() => handleAddToCart(product)}>
                    Ajouter au panier
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
