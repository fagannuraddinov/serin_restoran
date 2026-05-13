import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sərin Restoran
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ləzzət və xidmətin mükəmməl vəhdəti
        </motion.p>
        <motion.button
          className={styles.scrollBtn}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Menyunu Kəşf Et
        </motion.button>
      </div>
    </section>
  );
};
