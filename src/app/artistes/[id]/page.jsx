import React from 'react';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import styles from '../artistes.module.css';
import Link from 'next/link';

// Fonction pour récupérer les données de l'artiste depuis l'API
const fetchArtistData = async (id) => {
  const apiUrl = 'https://concrete-jungle.vercel.app/api';

  // Requête pour obtenir les données de l'artiste par ID
  const res = await fetch(`${apiUrl}/programme/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données de l\'artiste');
  }

  return res.json();
};

// Composant principal pour afficher les détails d'un artiste
const ArtistDetail = async ({ params }) => {
  const { id } = params;

  if (!id) return <p>Chargement...</p>;

  try {
    const data = await fetchArtistData(id);

    // Formater la date
    const formattedDate = format(parseISO(data.date), 'd MMMM yyyy', { locale: fr });

    return (
      <div className={styles.container}>
        <img src={`data:image/png;base64,${data.img}`} alt={data.title} className={styles.artistImage} />
        <div className={styles.overlay}>
          <div className={styles.info}>
            <h1 className={styles.name}>{data.title}</h1>
            <p className={styles.date}>{`${formattedDate} - ${data.time} ${data.location}`}</p>
            <div className={styles.buttons}>
              <Link href='https://www.ticketmaster.fr/fr' className={`${styles.button} ${styles.reserveButton}`}>RÉSERVER</Link>
              
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Erreur lors du chargement des données de l\'artiste:', error);
    return <p>Erreur lors du chargement des données de l&apos;artiste.</p>;
  }
};

export default ArtistDetail;
