import React from 'react';
import styles from './services.module.css';

const Services = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Services</h1>
      <ul className={styles.serviceList}>
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>UI/UX Design</li>
      </ul>
    </div>
  );
};

export default Services;
