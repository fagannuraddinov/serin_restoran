import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { menuData } from '../data/menuData';
import styles from './MenuSection.module.css';

const normalizeAzText = (text: string) => {
  return text
    .toLowerCase()
    .replace(/ç/g, 'c')
    .replace(/ş/g, 's')
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ə/g, 'e');
};

export const MenuSection: React.FC = () => {
  const banquetMenu = menuData.find(m => m.id === '30 Manat Menu');
  const otherCategories = menuData.filter(m => m.id !== '30 Manat Menu');

  const [isBanquetOpen, setIsBanquetOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return otherCategories;
    
    const query = normalizeAzText(searchQuery.trim());
    return otherCategories.map(cat => ({
      ...cat,
      items: cat.items.filter(item => normalizeAzText(item.name).includes(query))
    })).filter(cat => cat.items.length > 0);
  }, [searchQuery, otherCategories]);

  return (
    <div className={styles.menuContainer}>
      
      <div className={styles.searchContainer}>
        <div className={styles.searchInputWrapper}>
          <Search className={styles.searchIcon} size={20} />
          <input 
            type="text" 
            placeholder="Yemək və ya içki axtarın..." 
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {/* 30 AZN Banquet Menu */}
      {banquetMenu && !searchQuery.trim() && (
        <section id="banquet-menu" className={styles.banquetSection}>
          <motion.div 
            className={`${styles.banquetCard} glass-panel`} 
            style={{ backgroundImage: `linear-gradient(rgba(15,23,42,0.8), rgba(15,23,42,0.8)), url(${banquetMenu.backgroundUrl})` }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.banquetHeader} onClick={() => setIsBanquetOpen(!isBanquetOpen)}>
              <div className={styles.titleWrapper}>
                <h2>{banquetMenu.title}</h2>
                <div className={styles.priceBadge}>XÜSUSİ TƏKLİF</div>
              </div>
              <button className={styles.toggleBtn}>
                <motion.div
                  animate={{ rotate: isBanquetOpen ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <ChevronDown size={32} />
                </motion.div>
              </button>
            </div>
            
            <AnimatePresence>
              {isBanquetOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className={styles.banquetContent}
                >
                  <div className={styles.textContent}>
                    {banquetMenu.items[0].name.split('\n').map((line, idx) => {
                      const isTitle = line === line.toUpperCase() && line.length > 3;
                      return (
                        <motion.p 
                          key={idx} 
                          className={isTitle ? styles.subTitle : styles.itemText}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                        >
                          {line}
                        </motion.p>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>
      )}

      {/* Menu Categories / Search Results */}
      <div className={searchQuery.trim() ? styles.searchResultsActive : ''}>
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => {
            if (searchQuery.trim()) {
              return (
                <div key={category.id} className={styles.searchCategoryGroup}>
                  <h3 className={styles.searchCategoryTitle}>{category.title}</h3>
                  <div className={`${styles.itemsGrid} glass-panel`}>
                    {category.items.map((item, idx) => (
                      <div key={idx} className={styles.menuItem}>
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.itemDots}></span>
                        <span className={styles.itemPrice}>{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <section 
                id={`category-${category.id}`} 
                key={category.id} 
                className={`${styles.categorySection} parallax-bg`}
                style={{ backgroundImage: `url(${category.backgroundUrl})` }}
              >
                <div className={styles.overlay}></div>
                <div className={styles.categoryContent}>
                  <motion.h2 
                    className={styles.categoryTitle}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    {category.title}
                  </motion.h2>
                  <div className={`${styles.itemsGrid} glass-panel`}>
                    {category.items.map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        className={styles.menuItem}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                      >
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.itemDots}></span>
                        <span className={styles.itemPrice}>{item.price}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            );
          })
        ) : searchQuery.trim() ? (
          <div className={styles.noResults}>Məhsul tapılmadı.</div>
        ) : null}
      </div>

    </div>
  );
};
