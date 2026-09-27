import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import { usePageMotion } from './hooks/usePageMotion';
import './App.css';

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

const AppShell = () => {
  const { isReady } = usePageMotion();
  const [showPreloader, setShowPreloader] = useState(true);
  const [isPreloaderExiting, setIsPreloaderExiting] = useState(false);

  useEffect(() => {
    if (!isReady) {
      setShowPreloader(true);
      setIsPreloaderExiting(false);
      return;
    }

    setIsPreloaderExiting(true);
    const exitTimeout = window.setTimeout(() => {
      setShowPreloader(false);
    }, 680);

    return () => window.clearTimeout(exitTimeout);
  }, [isReady]);

  return (
    <div className={`app-shell ${isReady ? 'is-ready' : 'is-loading'}`}>
      {showPreloader && (
        <div className={`preloader ${isPreloaderExiting ? 'is-exiting' : ''}`} aria-hidden="true">
          <div className="preloader-inner">
            <p className="preloader-kicker">MARCUS DANE SANCHEZ</p>
            <div className="preloader-mark">MDS</div>
            <div className="preloader-track">
              <span className="preloader-fill" />
            </div>
            <p className="preloader-copy">Loading portfolio experience</p>
          </div>
        </div>
      )}
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
