import React from 'react';
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Us</h1>
      <p className={styles.description}>
        My name is IMAD UL ISLAM. I am a FrontEnd Web Developer.
      </p>
    </div>
  );
};

export default About;
