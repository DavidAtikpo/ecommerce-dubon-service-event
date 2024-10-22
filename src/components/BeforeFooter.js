import React from 'react';
import { FaAppStore , FaGooglePlay} from "react-icons/fa6";
import './BeforeFooter.css'; // Assurez-vous que ce fichier est bien stylisé

const BeforeFooter = () => {
  return (
    <div className="before-footer">
      <div className="before-footer-content">
        {/* Section téléchargement d'application */}
        <div className="download-app">
          <h3>Accédez à nos offres exclusives !</h3>
          <p>Téléchargez l'application DUBON Service dès maintenant.</p>
          <div className="app-links">
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            Télécharger sur App Store
              <FaAppStore />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            Télécharger sur Google play
              <FaGooglePlay/>
            </a>
          </div>
        </div>

        {/* Section engagement et qualité */}
        <div className="commitments">
          <h3>Notre Engagement</h3>
          <p>
            Chez DUBON Service, nous garantissons des produits de qualité, un service client réactif, 
            et une livraison rapide partout au Bénin.
          </p>
          <ul>
            <li>Livraison en 24h</li>
            <li>Garantie de satisfaction</li>
            <li>Support client 7j/7</li>
          </ul>
        </div>

        {/* Section promotionnelle */}
        <div className="promo-section">
          <h3>Offre Limitée</h3>
          <p>Profitez de 10% de réduction sur votre première commande avec le code <strong>DUBON10</strong>.</p>
        </div>
      </div>
    </div>
  );
};

export default BeforeFooter;
