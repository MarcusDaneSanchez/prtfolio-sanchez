import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setIsHidden(false);
      } else if (!isMenuOpen) {
        setIsHidden(currentScrollY > lastScrollY.current);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      setIsHidden(false);
    }
  }, [isMenuOpen]);

  return (
    <header className={`header ${isHidden ? 'is-hidden' : ''}`}>
      <div className="logo"><Link to="/" onClick={closeMenu}>M. DANE SANCHEZ</Link></div>
      
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isMenuOpen ? "bar open" : "bar"}></span>
        <span className={isMenuOpen ? "bar open" : "bar"}></span>
        <span className={isMenuOpen ? "bar open" : "bar"}></span>
      </div>

      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <HashLink smooth to="/#about" onClick={closeMenu}>ABOUT</HashLink>
        <Link to="/projects" onClick={closeMenu}>PROJECTS</Link>
        <HashLink smooth to="/#experience" onClick={closeMenu}>EXPERIENCE</HashLink>
        <HashLink smooth to="/#contact" className="mobile-only-link" onClick={closeMenu}>CONTACT</HashLink>
      </nav>
      
      <div className="header-actions">
        <span><HashLink smooth to="/#contact">CONTACT</HashLink></span>
      </div>
    </header>
  );
};

export default Header;
