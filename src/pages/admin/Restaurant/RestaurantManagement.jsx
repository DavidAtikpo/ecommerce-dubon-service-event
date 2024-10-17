// RestaurantManagement.js
import React, { useState } from 'react';
import RestaurantMenuList from './RestaurantMenuList';
import AddMenuItem from './AddMenuItem';
import OrderManagement from './OrderManagement';

const RestaurantManagement = () => {
  const [view, setView] = useState('menu');

  return (
    <div>
      <h1>Gestion de l'e-Restaurant</h1>
      <div>
        <button onClick={() => setView('menu')}>Menu</button>
        <button onClick={() => setView('add')}>Ajouter un plat</button>
        <button onClick={() => setView('orders')}>Commandes</button>
      </div>
      {view === 'menu' && <RestaurantMenuList />}
      {view === 'add' && <AddMenuItem />}
      {view === 'orders' && <OrderManagement />}
    </div>
  );
};

export default RestaurantManagement;
