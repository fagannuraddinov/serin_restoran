import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronRight } from 'lucide-react';
import { useSearch } from '../context/SearchContext';
import { menuData } from '../data/menuData';
import type { MenuCategory } from '../data/menuData';
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
  const { searchQuery, setSearchQuery, isFocused, setIsFocused } = useSearch();
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null);

  // Filter items and categories based on search query
  const searchResults = useMemo(() => {
    const query = normalizeAzText(searchQuery.trim());
    if (!query) return { items: [], categories: menuData };

    const matchedItems: any[] = [];
    const matchedCategories: MenuCategory[] = [];

    // Exclude '30 Manat Menu' from regular search results to avoid clutter
    const searchableCategories = menuData.filter(cat => cat.id !== '30 Manat Menu');

    searchableCategories.forEach(cat => {
      const items = cat.items.filter(item => normalizeAzText(item.name).includes(query));
      if (items.length > 0) {
        items.forEach(item => {
          matchedItems.push({ ...item, categoryTitle: cat.title, categoryId: cat.id });
        });
        matchedCategories.push({ ...cat, items });
      }
    });

    return { items: matchedItems, categories: matchedCategories };
  }, [searchQuery]);

  // Listen for custom event from Header
  useEffect(() => {
    const handleOpenCategory = (e: Event) => {
      const categoryId = (e as CustomEvent).detail;
      const category = menuData.find(c => c.id === categoryId);
      if (category) {
        setSelectedCategory(category);
      }
    };
    window.addEventListener('open-menu-category', handleOpenCategory);
    return () => window.removeEventListener('open-menu-category', handleOpenCategory);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCategory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCategory]);

  // Helper to render special banquet menu items
  const renderBanquetItems = (items: any[]) => {
    if (selectedCategory?.id !== '30 Manat Menu') return null;

    const content = items[0].name;
    const lines = content.split('\n');
    
    return (
      <div className={styles.banquetContent}>
        {lines.map((line: string, i: number) => {
          const trimmed = line.trim();
          if (!trimmed) return null;
          
          // Header detection (all caps and no small letters)
          const isHeader = trimmed === trimmed.toUpperCase() && trimmed.length > 5 && !trimmed.includes(':');
          
          if (isHeader) {
            return (
              <motion.h4 
                key={i} 
                className={styles.banquetSectionTitle}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.02 }}
              >
                {trimmed}
              </motion.h4>
            );
          }
          
          return (
            <motion.div 
              key={i} 
              className={styles.banquetItem}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.02 }}
            >
              <span className={styles.banquetDot}>✧</span>
              <span className={styles.banquetText}>{trimmed}</span>
            </motion.div>
          );
        })}
      </div>
    );
  };

  const showSearchResults = isFocused && searchQuery.trim().length > 0;

  return (
    <div className={styles.menuContainer}>
      
      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <motion.div 
          className={styles.searchInputWrapper}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Search className={styles.searchIcon} size={20} />
          <input 
            type="text" 
            placeholder="Yemək və ya içki axtarın..." 
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
          />
          {searchQuery && (
            <button 
              className={styles.clearSearch} 
              onClick={() => setSearchQuery('')}
              style={{ position: 'absolute', right: '1.2rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              <X size={18} />
            </button>
          )}
        </motion.div>
      </div>

      {/* Search Results / Categories List */}
      <div className={styles.categoriesList}>
        {showSearchResults ? (
          <div className={styles.searchResultsWrapper}>
            {searchResults.items.length > 0 ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 className={styles.searchSectionTitle} style={{ margin: 0 }}>Tapılan Məhsullar</h3>
                  <button onClick={() => setIsFocused(false)} className={styles.closeSearchBtn}>Bağla</button>
                </div>
                <div className={styles.searchItemsGrid}>
                  {searchResults.items.map((item, idx) => (
                    <motion.div 
                      key={`${item.categoryId}-${idx}`} 
                      className={styles.searchItem}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.02 }}
                      onClick={() => {
                        const cat = menuData.find(c => c.id === item.categoryId);
                        if (cat) {
                          setSelectedCategory(cat);
                          setIsFocused(false);
                        }
                      }}
                    >
                      <div className={styles.searchItemInfo}>
                        <span className={styles.searchItemName}>{item.name}</span>
                        <span className={styles.searchItemCat}>{item.categoryTitle}</span>
                      </div>
                      <span className={styles.searchItemPrice}>{item.price}</span>
                    </motion.div>
                  ))}
                </div>
              </>
            ) : (
              <div className={styles.noResults}>Məhsul tapılmadı.</div>
            )}
          </div>
        ) : (
          /* Default Category List (Vertical) */
          menuData.map((category, idx) => (
            <motion.div
              key={category.id}
              className={`${styles.categoryCard} ${category.id === '30 Manat Menu' ? styles.banquetCard : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setSelectedCategory(category)}
            >
              <div 
                className={styles.cardBg} 
                style={{ backgroundImage: `url(${category.backgroundUrl})` }}
              />
              <div className={styles.cardOverlay} />
              <h3 className={styles.cardTitle}>{category.title}</h3>
              {category.id === '30 Manat Menu' && (
                <div className={styles.specialBadge}>XÜSUSİ TƏKLİF</div>
              )}
              <div className={styles.itemCount}>
                {category.items.length} {category.id === '30 Manat Menu' ? 'bol çeşid' : 'məhsul'}
              </div>
              <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: '#fff' }}>
                <ChevronRight size={24} />
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Menu Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <div className={styles.modalOverlay} onClick={() => setSelectedCategory(null)}>
            <motion.div 
              className={`${styles.modalContent} ${selectedCategory.id === '30 Manat Menu' ? styles.premiumModal : ''}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <div 
                  className={styles.modalHeaderBg} 
                  style={{ backgroundImage: `url(${selectedCategory.backgroundUrl})` }}
                />
                <div className={styles.modalHeaderOverlay} />
                <button className={styles.closeButton} onClick={() => setSelectedCategory(null)}>
                  <X size={24} />
                </button>
                <div className={styles.modalTitleWrapper}>
                  <h2 className={styles.modalTitle}>{selectedCategory.title}</h2>
                  {selectedCategory.id === '30 Manat Menu' && (
                    <div className={styles.premiumBadge}>30 AZN / NƏFƏR</div>
                  )}
                </div>
              </div>

              <div className={styles.modalBody}>
                {selectedCategory.id === '30 Manat Menu' ? (
                  renderBanquetItems(selectedCategory.items)
                ) : (
                  <div className={styles.itemsGrid}>
                    {selectedCategory.items.map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        className={styles.menuItem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                      >
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.itemDots}></span>
                        <span className={styles.itemPrice}>{item.price}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
