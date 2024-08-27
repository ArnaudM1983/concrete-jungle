"use client";
import React, { useState, useEffect } from 'react';
import styles from './programme.module.css';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

// Fonction pour récupérer les données avec des filtres
const getData = async (filters) => {
  const apiUrl = '/api';
  const queryParams = new URLSearchParams(filters).toString();
  const res = await fetch(`${apiUrl}/programme?${queryParams}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des programmes");
  }

  return res.json();
};

// Fonction pour récupérer les options de filtre
const getFilterOptions = async () => {
  const apiUrl = '/api';
  const res = await fetch(`${apiUrl}/filters`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des options de filtre");
  }

  return res.json();
};

const Programme = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    date: '',
    location: '',
    time: '',
    category: '' // Ajoutez la catégorie ici
  });
  const [filterOptions, setFilterOptions] = useState({
    dates: [],
    locations: [],
    times: [],
    categories: [] // Ajoutez la catégorie ici
  });

  // Chargement des données avec les filtres appliqués
  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedData = await getData(filters);
        setData(fetchedData);
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
      }
    };

    loadData();
  }, [filters]);

  // Chargement des options de filtre
  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const options = await getFilterOptions();
        setFilterOptions(options);
      } catch (error) {
        console.error('Erreur lors du chargement des options de filtre:', error);
      }
    };

    fetchFilterOptions();
  }, []);

  // Fonction pour formater les dates
  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, 'd MMMM yyyy', { locale: fr });
  };

  return (
    <div id="programme" className={styles.container}>
      <h2 className={styles.title}>PROGRAMMATION <span className={styles.titleDate}>2025</span></h2>

      {/* Filtres */}
      <div className={styles.filter}>
        <div className={styles.filterItem}>
          <label htmlFor="dateFilter" className={styles.label}>Filtrer par date : </label>
          <select
            id="dateFilter"
            className={styles.button}
            value={filters.date}
            onChange={(e) => setFilters(prevFilters => ({ ...prevFilters, date: e.target.value }))}
          >
            <option value="">Toutes les dates</option>
            {filterOptions.dates.map(date => (
              <option key={date} value={date}>{formatDate(date)}</option>
            ))}
          </select>
        </div>

        <div className={styles.filterItem}>
          <label htmlFor="locationFilter" className={styles.label}>Filtrer par lieu : </label>
          <select
            id="locationFilter"
            className={styles.button}
            value={filters.location}
            onChange={(e) => setFilters(prevFilters => ({ ...prevFilters, location: e.target.value }))}
          >
            <option value="">Tous les lieux</option>
            {filterOptions.locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div className={styles.filterItem}>
          <label htmlFor="timeFilter" className={styles.label}>Filtrer par heure : </label>
          <select
            id="timeFilter"
            className={styles.button}
            value={filters.time}
            onChange={(e) => setFilters(prevFilters => ({ ...prevFilters, time: e.target.value }))}
          >
            <option value="">Toutes les heures</option>
            {filterOptions.times.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div className={styles.filterItem}>
          <label htmlFor="categoryFilter" className={styles.label}>Filtrer par catégorie : </label>
          <select
            id="categoryFilter"
            className={styles.button}
            value={filters.category}
            onChange={(e) => setFilters(prevFilters => ({ ...prevFilters, category: e.target.value }))}
          >
            <option value="">Toutes les catégories</option>
            {filterOptions.categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Programmation filtrée */}
      <div className={styles.cardContainer}>
        {data?.map(item => (
          <Link key={item.id} href={`/artistes/${item.id}`} className={styles.link}>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={`data:image/png;base64,${item.img}`} alt={item.title} className={styles.image} />
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.titleCard}>{item.title}</h2>
                <p className={styles.location}>{item.location}</p>
                <p className={styles.date}>{formatDate(item.date)}</p>
                <p className={styles.time}>{item.time}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Programme;
