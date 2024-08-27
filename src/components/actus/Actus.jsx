"use client";
import React, { useState, useEffect } from 'react';
import styles from './actus.module.css';

// Fonction pour récupérer les données de la page via l'API
const fetchPageData = async (page, limit) => {
  const apiUrl = '/api';

  const res = await fetch(`${apiUrl}/actus?page=${page}&limit=${limit}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des actualités');
  }

  return res.json();
};

const Actus = () => {
  const [data, setData] = useState([]); // État pour stocker les actualités
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    pages: 1,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 1;  // Nombre d'actualités par page

  // Utilisé pour charger les données lorsque la page actuelle change
  useEffect(() => {
    const loadData = async () => {
      const pageData = await fetchPageData(currentPage, limit);
      setData(pageData.data);
      setPagination(pageData.meta);
    };

    loadData();
  }, [currentPage]);

  // Fonction pour changer de page
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > pagination.pages) return;
    setCurrentPage(newPage);
  };

  return (
    <div id="actus" className={styles.container}>
      <h1 className={styles.title}>ACTUALITÉS</h1>
      {data.map(item => (
        <ArticleCard key={item._id} item={item} />
      ))}
      <div className={styles.pagination}>
        <button 
          className={`${styles.pageButton} ${currentPage === 1 ? styles.disabled : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <div className={styles.dots}>
          {[...Array(pagination.pages)].map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${currentPage === index + 1 ? styles.activeDot : ''}`}
              onClick={() => handlePageChange(index + 1)}
            />
          ))}
        </div>
        <button 
          className={`${styles.pageButton} ${currentPage === pagination.pages ? styles.disabled : ''}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === pagination.pages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

// Composant pour la carte des actualités
const ArticleCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Fonction pour tronquer le texte à 8 mots
  const truncateText = (text, limit) => {
    const words = text.split(' ');
    if (words.length <= limit) return text;
    return words.slice(0, limit).join(' ') + '...';
  };

  return (
    <div className={styles.card}>
      
      <img src={`data:image/png;base64,${item.img}`} alt={item.title} className={styles.image} />
      
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>{item.title}</h2>
        <p className={`${styles.text} ${isExpanded ? styles.expandedText : styles.truncatedText}`}>
          {isExpanded ? item.content : truncateText(item.content, 8)}
        </p>
        <button onClick={handleToggle} className={styles.toggleButton}>
          {isExpanded ? 'Voir moins' : 'Voir plus'}
        </button>
      </div>
    </div>
  );
};

export default Actus;
