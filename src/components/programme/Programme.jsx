import React from 'react'
import styles from './programme.module.css'

const Programme = () => {
  return (
    <div id="programme" className={styles.container}>
      <h2 className={styles.title}>PROGRAMMATION <span className={styles.titleDate}>2025</span></h2>

      {/* Filtres */}
      <div className={styles.filter}>

        {/* Menu déroulant pour la date */}
        <div className={styles.filterItem}>
          <label htmlFor="dateFilter" className={styles.label}>Filtrer par date : </label>
          <select id="dateFilter" className='button'>
            <option value="">Toutes les dates</option>
            {/* 
        {datesOptions.map(date => (
          <option key={date} value={date}>{date}</option>
        ))} 
        */}
          </select>
        </div>


        {/* Menu déroulant pour le lieu */}
        <div className={styles.filterItem}>
          <label htmlFor="locationFilter" className={styles.label}>Filtrer par lieu : </label>
          <select id="locationFilter" className='button'>
            <option value="">Tous les lieux</option>
            {/* 
        {datesOptions.map(date => (
          <option key={date} value={date}>{date}</option>
        ))} 
        */}
          </select>
        </div>

        {/* Menu déroulant pour l'heure */}
        <div className={styles.filterItem}>
          <label htmlFor="timeFilter" className={styles.label}>Filtrer par heure : </label>
          <select id="timeFilter" className='button'>
            <option value="">Toutes les heures</option>
            {/* 
        {datesOptions.map(date => (
          <option key={date} value={date}>{date}</option>
        ))} 
        */}
          </select>
        </div>
      </div>

      {/* Programmation filtrée */}
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src="/groupe.jpg" alt="" className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.titleCard}>Groupe Exemple</h2>
            <p className={styles.location}>Scène principale</p>
            <p className={styles.date}>14/08/2025</p>
            <p className={styles.time}>15:00</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src="/groupe.jpg" alt="" className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>Groupe Exemple</h2>
            <p className={styles.date}>14/08/2025</p>
            <p className={styles.location}>Scène principale</p>
            <p className={styles.time}>15:00</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src="/groupe.jpg" alt="" className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>Groupe Exemple</h2>
            <p className={styles.date}>14/08/2025</p>
            <p className={styles.location}>Scène principale</p>
            <p className={styles.time}>15:00</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src="/groupe.jpg" alt="" className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>Groupe Exemple</h2>
            <p className={styles.date}>14/08/2025</p>
            <p className={styles.location}>Scène principale</p>
            <p className={styles.time}>15:00</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src="/groupe.jpg" alt="" className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>Groupe Exemple</h2>
            <p className={styles.date}>14/08/2025</p>
            <p className={styles.location}>Scène principale</p>
            <p className={styles.time}>15:00</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Programme