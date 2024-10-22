import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom'; // Utilisation de Link pour la navigation interne

const Footer = () => {
  const handleNewsletterSignup = () => {
    alert("Merci pour votre inscription !");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>BESOIN D'AIDE?</h4>
          <ul>
            <li><Link to="/contact">Écrivez-nous</Link></li>
            <li><Link to="/help-center">Centre d'aide</Link></li>
            <li><Link to="/contact">Contactez-nous</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>LIENS UTILES</h4>
          <ul>
            <li><Link to="/">DUBON SERVICE</Link></li>
            <li><Link to="/services">Nos services</Link></li>
            <li><Link to="/events">Événements</Link></li>
            <li><Link to="/shipping">Livraison et Retours</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>A PROPOS</h4>
          <ul>
            <li><Link to="/about">À propos de nous</Link></li>
            <li><Link to="/partners">Nos partenaires</Link></li>
            <li><Link to="/privacy-policy">Politique de confidentialité</Link></li>
            <li><Link to="/terms">Conditions d'utilisation</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>DUBON INTERNATIONAL</h4>
          <ul>
            <li><Link to="/benin">Bénin</Link></li>
            <li><Link to="/senegal">Sénégal</Link></li>
            <li><Link to="/cote-d-ivoire">Côte d'Ivoire</Link></li>
            <li><Link to="/togo">Togo</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>INSCRIVEZ-VOUS À NOTRE NEWSLETTER</h4>
          <div className="newsletter">
            <input  type="email" placeholder="Votre adresse e-mail" />
            <button onClick={handleNewsletterSignup}>S'inscrire</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-socials">
          <h5>REJOIGNEZ-NOUS</h5>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>

        <div className="footer-payment">
          <h5>MÉTHODES DE PAIEMENT & PARTENAIRES DE LIVRAISON</h5>
          <div className="payment-icons">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-paypal"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-amazon-pay"></i>
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <p>© 2024 DUBON Service. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
