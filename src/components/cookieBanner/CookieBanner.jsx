"use client"
import React, { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.banner}>
      <p>Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre site. En continuant à utiliser ce site, vous acceptez notre utilisation des cookies.</p>
      <button className={styles.button} onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default CookieBanner;
