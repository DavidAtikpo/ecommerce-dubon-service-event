// RestaurantMenuList.js
import React, { useEffect, useState } from 'react';

const RestaurantMenuList = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('/api/menu'); // Remplacez par l'URL de votre API
        const data = await response.json();
        setMenuItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des plats:', error);
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) {
    return <p>Chargement du menu...</p>;
  }

  return (
    <div>
      <h2>Menu du restaurant</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenuList;
