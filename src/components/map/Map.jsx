"use client";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import styles from './map.module.css';
import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "@/components/pin/pin";
import { useEffect, useState } from "react";

export default function Map() {
  const [pois, setPois] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fonction pour récupérer les POIs avec filtre par catégorie
  const fetchData = async () => {
    try {
      const res = await fetch(`/api/map?category=${selectedCategory}`);
      const data = await res.json();
      setPois(data);  // Met à jour l'état avec les POIs filtrés
    } catch (error) {
      console.error("Erreur lors de la récupération des POIs:", error);
    }
  };

  // Récupère les POIs chaque fois que la catégorie sélectionnée change
  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

  // Fonction pour récupérer les catégories distinctes des POIs
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`/api/map`);
        const data = await res.json();
        const distinctCategories = [...new Set(data.map(item => item.category))];
        setCategories(distinctCategories);
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div id="map" className={styles.container}>
      <h2 className={styles.title}>CARTE DU FESTIVAL</h2>
      <div className={styles.filter}>
        {/* Menu déroulant pour les filtres */}
        <div className={styles.filterItem}>
          <label htmlFor="locationFilter" className={styles.label}>Filtrer par : </label>
          <select
            id="locationFilter"
            className='button'
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}  // Met à jour l'état de la catégorie sélectionnée
          >
            <option value="">Toutes les catégories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
      <MapContainer className={styles.map}
        center={[48.833657, 2.211653]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Afficher les POIs filtrés */}
        <Pin categoryFilter={selectedCategory} />
      </MapContainer>
    </div>
  );
}
