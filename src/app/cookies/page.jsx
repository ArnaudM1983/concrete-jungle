import React from 'react'
import styles from './cookies.module.css'


const Cookies = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>POLITIQUE DE COOKIES</h1>
            <div className={styles.listContainer}>
                <h2 className={styles.subtitle}>1. Qu'est-ce qu'un cookie ?</h2>
                <p className={styles.text}>Un cookie est un petit fichier texte que notre site web stocke sur votre appareil (ordinateur, smartphone, tablette) lorsque vous le visitez. Les cookies permettent au site de reconnaître votre appareil et de mémoriser certaines informations vous concernant, comme vos préférences ou vos actions précédentes.</p>
                <h2 className={styles.subtitle}>2. Types de cookies que nous utilisons</h2>
                <p className={styles.text}>Nous utilisons différents types de cookies sur notre site :</p>
                <ul className={styles.list}>
                    <li>Cookies nécessaires : Ces cookies sont indispensables au bon fonctionnement du site. Ils vous permettent de naviguer sur le site et d'utiliser ses fonctionnalités, comme l'accès aux zones sécurisées.</li>
                    <li>Cookies de performance : Ces cookies collectent des informations sur la manière dont les visiteurs utilisent notre site, par exemple les pages les plus visitées. Ces données nous permettent d'améliorer le fonctionnement du site.</li>
                    <li>Cookies de fonctionnalité : Ces cookies permettent au site de se souvenir de vos choix (comme votre nom d'utilisateur, langue ou région) et fournissent des fonctionnalités améliorées et personnalisées.</li>
                    <li>Cookies de ciblage ou publicitaires : Ces cookies sont utilisés pour diffuser des publicités pertinentes pour vous et adaptées à vos centres d'intérêt. Ils servent également à limiter le nombre de fois que vous voyez une publicité et à mesurer l'efficacité des campagnes publicitaires.</li>
                </ul>
                <h2 className={styles.subtitle}>3. Gestion des cookies</h2>
                <p className={styles.text}>Vous pouvez contrôler et gérer les cookies via votre navigateur. La plupart des navigateurs vous permettent de refuser ou d'accepter les cookies, de supprimer les cookies existants, ou de configurer le navigateur pour qu'il vous avertisse lorsque des cookies sont envoyés. Notez que si vous choisissez de désactiver les cookies, certaines parties de notre site peuvent ne pas fonctionner correctement.</p>
                <h2 className={styles.subtitle}>4. Mise à jour de la politique de cookies</h2>
                <p className={styles.text}>Nous pouvons être amenés à modifier cette politique de cookies de temps à autre pour refléter les changements dans la loi ou dans notre utilisation des cookies. Toute mise à jour sera publiée sur cette page.</p>
            </div>
        </div>
    )
}

export default Cookies