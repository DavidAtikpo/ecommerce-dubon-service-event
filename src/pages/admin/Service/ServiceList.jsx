// ServiceList.js
import React, { useEffect, useState } from 'react';

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <p>Chargement des services...</p>;
  }

  return (
    <div>
      <h2>Liste des services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.name} - {service.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
