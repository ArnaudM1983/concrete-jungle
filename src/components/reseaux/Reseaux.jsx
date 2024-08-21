import React from 'react'
import styles from './reseaux.module.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaSnapchat, FaTwitter, FaYoutube } from 'react-icons/fa'


const Reseaux = () => {
  return (
    <div id="reseaux" className={styles.container}>
      <h2 className={styles.title}>RESEAUX SOCIAUX</h2>
      <p className={styles.text}>Suivez-nous sur les réseaux sociaux pour ne rien manquer de l'actualité du festival</p>
      <div className={styles.icones}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className={styles.icone} /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className={styles.icone} /></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className={styles.icone} /></a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className={styles.icone} /></a>
        <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
          <FaSnapchat className={styles.icone} /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.icone} /></a>
      </div>
      <p className={styles.text}>Sur nos réseaux sociaux, vous pouvez :</p>
      <div className={styles.list}>
        <p className={styles.listItem}>Découvrir la programmation complète du festival</p>
        <p className={styles.listItem}>Rester informés des dernières news et des artistes surprises</p>
        <p className={styles.listItem}>Participer à des jeux concours et gagner des places</p>
        <p className={styles.listItem}>Partager vos photos et vidéos du festival avec la communauté</p>
        <p className={styles.listItem}>Vivre l'expérience du festival en direct avec des stories immersives</p>
      </div>
    </div>
  )
}

export default Reseaux