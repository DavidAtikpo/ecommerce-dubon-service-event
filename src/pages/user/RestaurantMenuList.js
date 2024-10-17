// RestaurantMenuList.js
import React, { useEffect, useState } from 'react';

const RestaurantMenuList = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await fetch('/api/menu');
      const data = await response.json();
      setMenuItems(data);
    };
    fetchMenuItems();
  }, []);

  return (
    <div>
      <h2>Menu du Restaurant</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button>Commander</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenuList;
