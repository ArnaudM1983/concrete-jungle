"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./register.module.css";

const Register = () => {
  // États pour stocker les informations du formulaire et les messages d'erreur
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage('');

    try {
      // Appel de l'API pour enregistrer l'utilisateur
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Redirige l'utilisateur vers la page de connexion après une inscription réussie
        router.push("/login");
      } else {
        // Afficher le message d'erreur si l'inscription échoue
        setErrorMessage(data.message || "Erreur lors de l'inscription.");
      }
    } catch (error) {
      console.error("Erreur lors de la requête d'inscription:", error);
      setErrorMessage("Erreur lors de l'inscription. Veuillez réessayer.");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Inscription</h1>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;
