import Link from 'next/link';
import styles from './page.module.css';
import React from 'react';

const Home = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navbar}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.link}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/About" className={styles.link}>About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/Services" className={styles.link}>Services</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/Contact" className={styles.link}>Contact</Link>
        </li>
      </ul>

      <div className={styles.welcomeSection}>
        <h1>Welcome to Our HOME Page</h1>
        <p className={styles.description}>
          Discover what we do and how we can help you grow. We aim to inspire and innovate!
        </p>
        <button className={styles.exploreButton}>Explore More</button>
      </div>
    </div>
  );
};
export default Home;
