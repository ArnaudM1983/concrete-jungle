"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";
import Link from "next/link";

const Login = () => {
  // État pour gérer les informations de connexion
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // État pour gérer les messages d'erreur
  const router = useRouter();

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Appelle la fonction signIn de NextAuth avec les informations de connexion
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result.ok) {
      router.push("/"); // Redirige vers la page d'accueil ou une autre page après connexion
    } else {
      setError("Identifiants incorrects. Veuillez réessayer."); // Met à jour l'état de l'erreur
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Connexion</h1>
        {error && <p className={styles.error}>{error}</p>} {/* Affiche le message d'erreur */}
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Se Connecter</button>
        <p className={styles.register}>Vous n&apos;avez pas de compte ? </p>
        <Link href="/register" className={styles.button}>Inscrivez-vous</Link>
      
      </form>
    </div>
  );
};

export default Login;
