import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { Footer } from './components/Footer';
import { SearchProvider } from './context/SearchContext';

function App() {
  useEffect(() => {
    // Global event handlers can be added here if needed
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
