import React from 'react'
import styles from './infos.module.css'
import Link from 'next/link'

const Infos = () => {
  return (
    <div id="infos" className={styles.container}>
      <h2 className={styles.title}>FAQ - INFORMATIONS PRATIQUES</h2>
      <p className={styles.subtitle}>UNE QUESTION ? BESOIN D&apos;UN RENSEIGNEMENT ?</p>
      <p className={styles.text}>Nous avons sûrement la réponse. Retrouvez ici toutes les informations nécessaires pour profiter pleinement du festival</p>
      <Link href="/faq" className={styles.button}>FAQ</Link>
    </div>
  )
}

export default Infos