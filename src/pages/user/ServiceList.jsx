// ServiceList.js
import React, { useEffect, useState } from 'react';

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch('/api/services');
      const data = await response.json();
      setServices(data);
    };
    fetchServices();
  }, []);

  return (
    <div>
      <h2>Nos Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.name} - {service.description}
            <button>Réserver</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
