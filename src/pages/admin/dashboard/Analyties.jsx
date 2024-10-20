// src/pages/AnalyticsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { API_URL } from '../../../config'; // Modifier selon votre structure de projet
import './Analyties.css';

// Enregistrement des composants de Chart.js
ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, ArcElement);

const AnalyticsPage = () => {
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/analytics`);
        setAnalyticsData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données analytics :', error);
      }
    };

    fetchAnalytics();
  }, []);

  if (!analyticsData) {
    return (
      <div className="analytiecs-info">
        <strong>Bienvenue sur la page d'Analytics !</strong><br />
        Les statistiques et graphiques apparaîtront ici dès que des activités importantes auront lieu,
        comme des commandes passées ou des produits consultés.
      </div>,
      
      <div class="analytiecs-info">
  <strong>Bienvenue sur la page d'Analytics !</strong><br />
  Les statistiques et graphiques apparaîtront ici dès que des activités importantes auront lieu,
  comme des commandes passées ou des produits consultés.
  <br /><br />
  <strong>Données disponibles :</strong>
  <ul>
    <li>Chiffre d'affaires quotidien, hebdomadaire et mensuel.</li>
    <li>Nombre total de commandes et leur statut.</li>
    <li>Produits les plus vendus et catégories populaires.</li>
    <li>Taux d'engagement des utilisateurs (nombre de visites, actions effectuées).</li>
  </ul>
  <p>Utilisez cette page pour analyser les tendances, améliorer l’expérience utilisateur, 
  et prendre des décisions éclairées pour optimiser vos performances.</p>
</div>

    );
  }

  const { revenueData, orderStats, popularProducts } = analyticsData;

  // Configuration des graphiques
  const revenueChartData = {
    labels: revenueData.map((entry) => entry.date),
    datasets: [
      {
        label: 'Chiffre d\'affaires (FCFA)',
        data: revenueData.map((entry) => entry.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const orderChartData = {
    labels: ['En attente', 'Livré', 'Annulé'],
    datasets: [
      {
        label: 'Commandes',
        data: [orderStats.pending, orderStats.delivered, orderStats.cancelled],
        backgroundColor: ['#FFC107', '#4CAF50', '#F44336'],
      },
    ],
  };

  const popularProductsData = {
    labels: popularProducts.map((product) => product.title),
    datasets: [
      {
        label: 'Produits Populaires',
        data: popularProducts.map((product) => product.sales),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  return (
    <div className="analytics-container">
      <h1>Statistiques et Analyse</h1>

      <div className="chart-container">
        <h2>Chiffre d'Affaires</h2>
        <Line data={revenueChartData} />
      </div>

      <div className="chart-container">
        <h2>Statut des Commandes</h2>
        <Doughnut data={orderChartData} />
      </div>

      <div className="chart-container">
        <h2>Produits les Plus Populaires</h2>
        <Bar data={popularProductsData} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
