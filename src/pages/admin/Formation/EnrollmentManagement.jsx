// EnrollmentManagement.js
import React, { useEffect, useState } from 'react';

const EnrollmentManagement = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const response = await fetch('/api/enrollments'); // Remplacez par l'URL de votre API
        const data = await response.json();
        setEnrollments(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des inscriptions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollments();
  }, []);

  if (loading) {
    return <p>Chargement des inscriptions...</p>;
  }

  return (
    <div>
      <h2>Gestion des inscriptions</h2>
      <ul>
        {enrollments.map((enrollment) => (
          <li key={enrollment.id}>
            {enrollment.user} - {enrollment.training}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnrollmentManagement;
