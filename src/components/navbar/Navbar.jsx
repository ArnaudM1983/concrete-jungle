"use client"
import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AuthLinks from '../authLinks/AuthLinks';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Scroll down
        setShowNavbar(false);
      } else {
        // Scroll up
        setShowNavbar(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.container} ${showNavbar ? styles.show : styles.hide}`}>
      <div className={styles.logo}>
        <Link href="/"><Image src="/logo1.png" alt='logo' width={40} height={40} /></Link>
      </div>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>Accueil</Link>
        <Link href="/#programme" className={styles.link}>Programmation</Link>
        <Link href="/#billeterie" className={styles.link}>Billetterie</Link>
        <Link href="/#infos" className={styles.link}>FAQ</Link>
        <Link href="/#map" className={styles.link}>Carte</Link>
        <Link href="/#partenaires" className={styles.link}>Partenaires</Link>
        <AuthLinks />
      </div>
      <div className={styles.social}>
        <Link href="https://facebook.com" target="_blank"><FaFacebook size={30} color='#ffa101' /></Link>
        <Link href="https://instagram.com" target="_blank"><FaInstagram size={30} color='#ffa101' /></Link>
        <Link href="https://twitter.com" target="_blank"><FaXTwitter size={30} color='#ffa101' /></Link>
      </div>
    </div>
  );
};

export default Navbar;
