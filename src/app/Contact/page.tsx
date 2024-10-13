import React from 'react';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <p className={styles.description}>
        Reach out to us for any inquiries or support. We're here to help!
      </p>
      <button className={styles.button}>Get in Touch</button>
    </div>
  );
};

export default Contact;
