import React from 'react'
import styles from './faq.module.css'


const Faq = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>FAQ - INFORMATIONS PRATIQUES</h2>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <p className={styles.titleCard}>Lorem ipsum</p>
                    <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quibusdam deserunt dignissimos ab. Necessitatibus ducimus dicta beatae est. Dolores illum nisi doloribus repellendus qui numquam cupiditate porro tenetur repudiandae sapiente.</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.titleCard}>Lorem ipsum</p>
                    <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quibusdam deserunt dignissimos ab. Necessitatibus ducimus dicta beatae est. Dolores illum nisi doloribus repellendus qui numquam cupiditate porro tenetur repudiandae sapiente.</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.titleCard}>Lorem ipsum</p>
                    <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quibusdam deserunt dignissimos ab. Necessitatibus ducimus dicta beatae est. Dolores illum nisi doloribus repellendus qui numquam cupiditate porro tenetur repudiandae sapiente.</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.titleCard}>Lorem ipsum</p>
                    <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quibusdam deserunt dignissimos ab. Necessitatibus ducimus dicta beatae est. Dolores illum nisi doloribus repellendus qui numquam cupiditate porro tenetur repudiandae sapiente.</p>
                </div>
            </div>
        </div>
    )
}

export default Faq