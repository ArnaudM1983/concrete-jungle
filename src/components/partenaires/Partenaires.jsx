import React from 'react'
import styles from './partenaires.module.css'
import Image from 'next/image'

const Partenaires = () => {
  return (
    <div id="partenaires" className={styles.container}>
      <h2 className={styles.title}>PARTENAIRES MEDIAS</h2>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src="/Rock-n-folk.png" alt='' width={200} height={200}/>
        <Image className={styles.image} src="/Brut.png" alt='' width={200} height={200}/>
        <Image className={styles.image} src="/FranceInter.png" alt='' width={200} height={200}/>
        <Image className={styles.image} src="/FranceTv.png" alt='' width={200} height={200}/>
        <Image className={styles.image} src="/Inrock.png" alt='' width={200} height={200}/>
      </div>
      <h2 className={styles.title}>PARTENAIRES INSTITUTIONNELS</h2>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src="/RATP-CARRE.png" alt='' width={200} height={200}/>
        <Image className={styles.image} src="/Sacem.png" alt='' width={200} height={200}/>
        <Image className={styles.image} src="/PassCulture.png" alt='' width={200} height={200}/>
        <Image className={styles.image} src="/cnm.png" alt='' width={200} height={200}/>
        <Image className={styles.image} src="/image.png" alt='' width={200} height={200}/>
        <Image className={styles.image} src="/image-1.png" alt='' width={200} height={200}/>
        <Image className={styles.image} src="/image-2.png" alt='' width={200} height={200}/>
      </div>
    </div>
  )
}

export default Partenaires