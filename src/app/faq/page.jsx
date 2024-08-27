import React from 'react'
import styles from './faq.module.css'

// Fonction pour récupérer les données de l'API
const getData = async () => {
    // variable d'environnement pour l'URL de l'API
    const apiUrl = 'https://concrete-jungle.vercel.app/api';
  
    // Effectue une requête GET pour obtenir les données depuis l'endpoint /infos
    const res = await fetch(`${apiUrl}/infos`, {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("Erreur");
    }
  
    return res.json();
  }

// Composant principal pour afficher la FAQ
const Faq = async() => {

    const data = await getData()

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>FAQ - INFORMATIONS PRATIQUES</h2>
            {data?.map(item=>(
            <div key={item._id} className={styles.cardContainer}>
                <div className={styles.card}>
                    <p className={styles.titleCard}>{item.title}</p>
                    <p className={styles.text}>{item.content}</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Faq