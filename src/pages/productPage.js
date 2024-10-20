import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import TopBar from '../components/topbar/TopBar';
import BeforeFooter from '../components/BeforeFooter';
import { FaFacebookF, FaWhatsapp, FaTwitter } from 'react-icons/fa'; 
import ProductRating from '../components/ProductRating';
import logo from '../assets/favicon.png';
import { API_URL } from '../config';
import './productPage.css'
import profileIcon from '../assets/images/user-profile-svgrepo-com (1).svg'

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/product/get-product/${productId}`);
        setProduct(data);
        setIsLoading(false);

        // Récupérer les produits de la même catégorie
        const { data: related } = await axios.get(`${API_URL}/api/product/category/${data.category}`);
        setRelatedProducts(related);
      } catch (error) {
        console.error("Erreur lors de la récupération des détails du produit :", error);
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingIndex = currentCart.findIndex(item => item._id === product._id);

    if (existingIndex !== -1) {
      currentCart[existingIndex].quantity += quantity;
    } else {
      currentCart.push({ ...product, quantity, image: product.images[0] });
    }
    localStorage.setItem('cart', JSON.stringify(currentCart));
    alert(`${product.title} ajouté au panier!`);
  };

  if (isLoading) return <div>Chargement...</div>;
  if (!product) return <div>Produit introuvable.</div>;

  return (
    <div className="product-page">
      <TopBar />
      <div className="product-container">
        {/* Boîte pour les images */}
        <div className="product-images">
          <img 
            src={product.images[selectedImageIndex] || logo} 
            alt={product.title} 
            className="main-image" 
          />
          <div className="thumbnails">
            {product.images.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`Thumbnail ${index}`} 
                className={`thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Boîte pour les détails du produit */}
        <div className="product-info-box">
          <h1>{product.title}</h1>
          <p className="description">{product.description}</p>
          <ProductRating productId={product._id} />

          <div className="price-info">
            {product.discount > 0 ? (
              <>
                <span className="discounted-price">{product.finalPrice} FCFA</span>
                <span className="original-price">{product.price} FCFA</span>
                <span className="discount">-{product.discount}%</span>
              </>
            ) : (
              <span className="price">{product.price} FCFA</span>
            )}
          </div>

          <div className="quantity-selector">
            <label>Quantité:</label>
            <input 
              type="number" 
              value={quantity} 
              min="1" 
              onChange={(e) => setQuantity(Number(e.target.value))} 
            />
          </div>

          <div className="buttons">
            <button onClick={handleAddToCart}>Ajouter au panier</button>
            <button>Acheter maintenant</button>
          </div>

          <div className="whatsapp-contact">
            <a href="https://wa.me/229XXXXXXXX" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="whatsapp-icon" /> Contacter le livreur
            </a>
          </div>
        </div>
      </div>

      {/* Avis des utilisateurs */}
      <div className="reviews-box">
        <h2>Avis des utilisateurs</h2>
        {/* Exemple d'avis utilisateur */}
        <div className="user-review">
          <img src={profileIcon} alt="User profile" className="user-avatar" />
          <p>Super produit, je recommande vivement !</p>
        </div>
      </div>

      {/* Autres produits de la même catégorie */}
      <div className="related-products">
        <h2>Autres produits de la même catégorie</h2>
        <div className="related-products-grid">
          {relatedProducts.map(prod => (
            <div key={prod._id} className="related-product-card">
              <img src={prod.images[0]} alt={prod.title} />
              <p>{prod.title}</p>
            </div>
          ))}
        </div>
      </div>

      <BeforeFooter />
      <Footer />
    </div>
  );
};

export default ProductDetails;
