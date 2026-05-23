import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
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
