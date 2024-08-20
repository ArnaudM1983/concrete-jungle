import React from 'react'
import styles from './billeterie.module.css'
import Link from 'next/link'

const Billeterie = () => {
  return (
    <div id="billeterie" className={styles.container}>
      <h2 className={styles.title}>BILLETTERIE</h2>
      <p><span className={styles.dateBillet}>2025</span></p>
      <hr className={styles.separator} />
      <p >BILLETS 1 JOUR</p>
      <p >PASS 2 JOURS</p>
      <p >PASS 3 JOURS</p>
      <Link href='https://example.com/billetterie' className={styles.button}>ACCÉDER À LA BILLETTERIE</Link>
    </div>
  )
}

export default Billeterie