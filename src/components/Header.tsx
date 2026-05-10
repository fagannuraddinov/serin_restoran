import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, MapPin, Phone, Instagram, Music, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import styles from './Header.module.css';
import { menuData } from '../data/menuData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <div className={styles.logo} onClick={() => scrollTo('hero')}>
            Sərin
          </div>
          <div className={styles.actions}>
            <button className={styles.iconBtn} onClick={toggleTheme} aria-label="Toggle Theme">
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Navigation Menu */}
      <div className={`${styles.fullscreenMenu} ${isMenuOpen ? styles.open : ''} glass-panel`}>
        <div className={styles.menuHeader}>
          <h2>Sərin Menyu</h2>
          <button className={styles.iconBtn} onClick={toggleMenu}>
            <X size={32} />
          </button>
        </div>
        <div className={styles.menuContent}>
          <nav className={styles.navLinks}>
            <button onClick={() => scrollTo('banquet-menu')} className={styles.specialLink}>
              30 AZN Banket Menyusu
            </button>
            <div className={styles.categories}>
              <h3>Kateqoriyalar</h3>
              <div className={styles.categoryGrid}>
                {menuData.filter(c => c.id !== '30 Manat Menu').map(cat => (
                  <button key={cat.id} onClick={() => scrollTo(`category-${cat.id}`)}>
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>
          </nav>
          
          <div className={styles.menuFooter}>
            <a 
              href="https://www.google.com/maps/place/41%C2%B021'43.4%22N+48%C2%B029'48.6%22E/@41.3618669,48.4965152,19.98z/data=!4m4!3m3!8m2!3d41.3620567!4d48.4968376?hl=en&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerBtn}
            >
              <MapPin size={20} />
              Məkan
            </a>
            <div className={styles.contactWrapper}>
              <button onClick={() => setIsContactOpen(!isContactOpen)} className={styles.footerBtn}>
                <Phone size={20} />
                Əlaqə
                {isContactOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              <AnimatePresence>
                {isContactOpen && (
                  <motion.div 
                    className={styles.contactDropdown}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <a href="https://wa.me/994104672788" target="_blank" rel="noopener noreferrer">
                      <MessageCircle size={18} /> WhatsApp
                    </a>
                    <a href="https://www.instagram.com/serinrestoran.quba/" target="_blank" rel="noopener noreferrer">
                      <Instagram size={18} /> Instagram
                    </a>
                    <a href="https://www.tiktok.com/@quba_serin_restoran" target="_blank" rel="noopener noreferrer">
                      <Music size={18} /> TikTok
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
