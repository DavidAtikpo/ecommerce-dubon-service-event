import React, { useEffect, useState } from 'react';
import './AccueilComponent.css';
import { API_URL } from '../../config';
import { useNavigate } from 'react-router-dom';

const AccueilComponent = () => {
  const [userData, setUserData] = useState({
    name: 'David',  // Valeur par défaut pour l'exemple
    profilePicture: '',
    demandes: 0,
    favoris: 0,
    coupons: 0
  });
const navigate = useNavigate()
  useEffect(() => {
    // Appel au backend pour récupérer les informations utilisateur
    fetch(`${API_URL}/api/user-info`)
      .then(response => response.json())
      .then(data => {
        setUserData({
          name: data.name,
          profilePicture: data.profilePicture,
          demandes: data.demandes,
          favoris: data.favoris,
          coupons: data.coupons
        });
      });
  }, []);

  return (
    <div className="accueil-container">
      <div className="user-section">
        <img src={userData.profilePicture || 'default-profile.png'} alt="Profile" className="profiles-picture" />
        <div className="users-info">
          <h2>{userData.name}</h2>
          <div className="users-stats">
            <div className="stats-item">
              <h4>{userData.demandes}</h4>
              <p>Demandes </p>
            </div>
            <div className="stats-item">
              <h4>{userData.favoris}</h4>
              <p>Favoris</p>
            </div>
            <div className="stats-item">
              <h4>{userData.coupons}</h4>
              <p>Mes coupons</p>
            </div>
          </div>
        </div>
      </div>

      <div className="markets-section">
        <div className="markets-card">
          <h3>Les tendances du marché sur DubonServiceEvent.com</h3>
          <p>Découvrez de nouvelles opportunités d'affaires</p>
          <button className='boutons'>En savoir plus</button>
        </div>
        <div className="markets-card">
          <h3>Vérifier les informations commerciales</h3>
          <p>Obtenez la vérification du statut d'exonération fiscale</p>
          <button className='btt'>Vérifiez</button>
        </div>
      </div>

      <div className="orders-sectiont">
        <h3>Mes Commandes</h3>
        <p>Pas encore de commandes...</p>
        <button className='boutonr' onClick={()=>navigate('/')}>Faire des commandes</button>
      </div>
    </div>
  );
};

export default AccueilComponent;
