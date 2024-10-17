import React from 'react';
// import './UserManagement.css';

const UserManagement = () => {
  return (
    <div className="user-management">
      <h2>Gestion des Utilisateurs</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Rôle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Boucle pour afficher la liste des utilisateurs */}
          <tr>
            <td>Utilisateur 1</td>
            <td>utilisateur1@mail.com</td>
            <td>Client</td>
            <td><button>Modifier</button> <button>Supprimer</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
