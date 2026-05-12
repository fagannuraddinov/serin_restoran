import React, { useState } from 'react';
import { MapPin, MessageCircle, Instagram, Music, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    '/images/interyer/IMG_2999.JPG.jpeg',
    '/images/interyer/IMG_3002.JPG.jpeg',
    '/images/interyer/IMG_3005.JPG.jpeg',
    '/images/interyer/IMG_3007.JPG.jpeg'
  ];

  const showNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const showPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  React.useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedIndex]);

  return (
    <footer className={styles.footer}>
      
      {/* Interior Placeholder Section */}
      <section id="interior" className={styles.interiorSection}>
        <div className={styles.interiorContent}>
          <h2>Restoranımızın İnteryeri</h2>
          <div className={styles.imageGrid}>
            {images.map((src, idx) => (
              <div 
                key={idx} 
                className={`${styles.imageCard} glass-panel`}
                onClick={() => setSelectedIndex(idx)}
              >
                <img src={src} alt={`Restoran İnteryeri ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div id="contact" className={styles.contactCard}>
            <h3>Əlaqə</h3>
            <p>Sifariş və suallarınız üçün bizimlə əlaqə saxlayın.</p>
            
            <div className={styles.socialLinks}>
              <a href="https://wa.me/994505508282" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={24} />
                WhatsApp
              </a>
              <a href="https://www.instagram.com/serinrestoran.quba/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={24} />
                Instagram
              </a>
              <a href="https://www.tiktok.com/@quba_serin_restoran" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <Music size={24} />
                TikTok
              </a>
            </div>
          </div>

          <div id="location" className={styles.locationCard}>
            <h3>Məkan</h3>
            <p>Biz sizi Qubanın ən gözəl guşələrindən birində gözləyirik.</p>
            
            <a 
              href="https://www.google.com/maps/place/41%C2%B021'43.4%22N+48%C2%B029'48.6%22E/@41.3618669,48.4965152,19.98z/data=!4m4!3m3!8m2!3d41.3620567!4d48.4968376?hl=en&entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.locationBtn}
            >
              <MapPin size={24} />
              Xəritədə Göstər
            </a>
          </div>
        </div>
      </section>

      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Sərin Restoranı. Bütün hüquqlar qorunur.</p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <button className={styles.closeBtn} onClick={() => setSelectedIndex(null)}>
              <X size={32} />
            </button>
            
            <motion.img 
              key={selectedIndex}
              src={images[selectedIndex]} 
              alt="Tam Ekran" 
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={(_, info) => {
                if (info.offset.x > 100) {
                  showPrev();
                } else if (info.offset.x < -100) {
                  showNext();
                }
              }}
              onClick={(e) => e.stopPropagation()}
              className={styles.lightboxImage}
            />

            <div className={styles.imageCounter}>
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};
