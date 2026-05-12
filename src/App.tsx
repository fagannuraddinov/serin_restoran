import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { Footer } from './components/Footer';
import { SearchProvider } from './context/SearchContext';

function App() {
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Don't prevent default on inputs or if we need focus
      if ((target.closest('button') || target.closest('a')) && !target.closest('input')) {
        // e.preventDefault();
      }
    };
    
    // window.addEventListener('mousedown', handleMouseDown);
    // return () => window.removeEventListener('mousedown', handleMouseDown);
  }, []);

  return (
    <SearchProvider>
      <div className="app-container">
        <Header />
        <main>
          <Hero />
          <MenuSection />
        </main>
        <Footer />
      </div>
    </SearchProvider>
  );
}

export default App;
