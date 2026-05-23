import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><Link to="/">M. DANE SANCHEZ</Link></div>
      <nav className="nav-links">
        <HashLink smooth to="/#about">ABOUT</HashLink>
        <Link to="/projects">PROJECTS</Link>
        <HashLink smooth to="/#experience">EXPERIENCE</HashLink>
      </nav>
      <div className="header-actions">
        <span><HashLink smooth to="/#contact">CONTACT</HashLink></span>
      </div>
    </header>
  );
};

export default Header;
