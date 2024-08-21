import React from 'react'
import styles from './artistes.module.css'


const Artistes = () => {
  return (
    <div className={styles.container}>
      <img src="/groupe.jpg" alt="" className={styles.artistImage} />
      <div className={styles.overlay}>
        <div className={styles.info}>
          <h1 className={styles.name}>Groupe Exemple</h1>
          <p className={styles.date}>14/08/2025 - 15:00 Scène principale</p>
          <div className={styles.buttons}>
            <button className={`${styles.button} ${styles.reserveButton}`}>RÉSERVER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Artistes