"use client";
import React, { useEffect, useState } from 'react';
import styles from './pin.module.css';
import { Marker, Popup } from 'react-leaflet';

// Fonction pour récupérer les données avec un filtre par catégorie
const getData = async (categoryFilter) => {
  const apiUrl = '/api';
  const queryParams = categoryFilter ? `?category=${categoryFilter}` : '';
  const res = await fetch(`${apiUrl}/map${queryParams}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données');
  }

  return res.json();
};

// Composant Pin pour afficher les POIs
const Pin = ({ categoryFilter }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getData(categoryFilter);
        setData(fetchedData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, [categoryFilter]);  // Re-télécharger les données chaque fois que categoryFilter change

  return (
    <>
      {data.map((item) => (
        <Marker key={item.id} position={[item.latitude, item.longitude]}>
          <Popup>
            <div className={styles.container}>
              <img 
                src={`data:image/png;base64,${item.img}`} 
                alt={item.title} 
                className={styles.image}
              />
              <div className={styles.textContainer}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default Pin;
