import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { FlavorsPage } from './pages/FlavorsPage';
import { JourneyPage } from './pages/JourneyPage';
import { MomentsPage } from './pages/MomentsPage';
import { FindUsPage } from './pages/FindUsPage';
import { FranchisePage } from './pages/FranchisePage';
import { ContactPage } from './pages/ContactPage';
import { WelcomeLoader } from './components/WelcomeLoader';
import './App.css';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      // Scroll smoothly to top on page navigation
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initialize
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Simple clean client-side routing switch
  const renderContent = () => {
    switch (currentPath) {
      case '#/flavors':
        return <FlavorsPage />;
      case '#/journey':
        return <JourneyPage />;
      case '#/moments':
        return <MomentsPage />;
      case '#/find-us':
        return <FindUsPage />;
      case '#/franchise':
        return <FranchisePage />;
      case '#/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <WelcomeLoader />
      <Navigation />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </>
  );
}

export default App;
