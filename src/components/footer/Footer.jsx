import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaSnapchat, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.reseaux}>
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
      <div className={styles.links}>
        <Link href="/news" className={styles.link}>Actualités</Link>
        <Link href="/mentions" className={styles.link}>Mentions légales</Link>
        <Link href="/cookies" className={styles.link}>Politique de cookies</Link>
      </div>
    </div>
  )
}

export default Footer