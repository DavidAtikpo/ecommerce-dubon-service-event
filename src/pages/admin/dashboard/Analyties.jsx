import React, { useEffect, useState } from 'react';
// import './Analytics.css';

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState({
    totalSales: 0,
    newUsers: 0,
    pendingOrders: 0,
  });

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        const response = await fetch('/api/analytics'); // Remplacez par l'URL appropriée de votre backend
        const data = await response.json();
        setAnalyticsData({
          totalSales: data.totalSales,
          newUsers: data.newUsers,
          pendingOrders: data.pendingOrders,
        });
      } catch (error) {
        console.error('Erreur lors de la récupération des données analytiques:', error);
      }
    };

    fetchAnalyticsData();
  }, []);

  return (
    <div className="analytics">
      <h2>Statistiques</h2>
      <div className="analytics-cards">
        <div className="card">Total des ventes: {analyticsData.totalSales} €</div>
        <div className="card">Nouveaux utilisateurs: {analyticsData.newUsers}</div>
        <div className="card">Commandes en cours: {analyticsData.pendingOrders}</div>
      </div>
    </div>
  );
};

export default Analytics;
