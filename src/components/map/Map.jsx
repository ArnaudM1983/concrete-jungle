"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import styles from './map.module.css'

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Map() {
  const position = [51.505, -0.09];

  return (
    <div id="map" className={styles.container}>
      <h2 className={styles.title}>CARTE DU FESTIVAL</h2>
      <div className={styles.filter}>
        {/* Menu déroulant pour les filtres */}
        <div className={styles.filterItem}>
          <label htmlFor="locationFilter" className={styles.label}>Filtrer par : </label>
          <select id="locationFilter" className='button'>
            <option value="">Toutes les lieux</option>
            {/* 
        {datesOptions.map(date => (
          <option key={location} value={location}>{location}</option>
        ))} 
        */}
          </select>
        </div>

      </div>
      <MapContainer className={styles.map}
        center={[48.83296784475842, 2.220287933661136]}
        zoom={15}
        scrollWheelZoom={false}
         
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[48.83296784475842, 2.220287933661136]}>
          <Popup>
            This Marker icon is displayed correctly with <i>leaflet-defaulticon-compatibility</i>.
          </Popup>
        </Marker>
      </MapContainer>
    </div>

  );
}
