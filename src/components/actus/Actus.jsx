import React from 'react'
import styles from './actus.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Actus = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ACTUALITÉS</h1>
      <div className={styles.card}>
        <Link href="/"><Image className={styles.image} src="/landing.jpg" alt='logo' width={300} height={200} /></Link>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>Groupes Confirmés</h2>
          <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, esse?</p>
          
        </div>

      </div>
      <p className={styles.pagination}>PAGINATION</p>
    </div>
  )
}

export default Actus