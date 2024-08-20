"use client"
import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {

  const [open, setOpen] = useState(false)

  const status = "notauthenticated"

  // Fonction pour gérer la fermeture du menu
  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="./login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="./login">Nom Utilisateur</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href='/' onClick={handleLinkClick}>Accueil</Link>
          <Link href='#programme' onClick={handleLinkClick}>Programmation</Link>
          <Link href='#billeterie' onClick={handleLinkClick}>Billetterie</Link>
          <Link href="#infos" onClick={handleLinkClick}>FAQ / Informations pratiques</Link>
          <Link href='/partenaires' onClick={handleLinkClick}>Partenaires</Link>
          <Link href='/carte' onClick={handleLinkClick}>Carte du festival</Link>
          {status === "notauthenticated" ? (
            <Link href="./login" onClick={handleLinkClick}>Login</Link>
          ) : (
            <>
              <Link href="./login" onClick={handleLinkClick}>Nom Utilisateur</Link>
              <span className={styles.link} onClick={handleLinkClick}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks
