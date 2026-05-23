import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">M.D. SANCHEZ</div>
        <div className="footer-links">
          <div className="link-column">
            <h4>EXPLORE</h4>
            <HashLink smooth to="/#about">About</HashLink>
            <Link to="/projects">Projects</Link>
            <HashLink smooth to="/#experience">Skills & Experience</HashLink>
          </div>
          <div className="link-column">
            <h4>CONTACT</h4>
            <a href="mailto:ndrs082904@gmail.com">Email</a>
            <a href="tel:+639225187961">Phone</a>
          </div>
          <div className="link-column">
            <h4>LOCATION</h4>
            <a href="#">San Rafael, Bulacan</a>
            <a href="#">Philippines</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Marcus Dane R. Sanchez. All rights reserved.</p>
        <div className="social-links">
          <a href="#">LI</a>
          <a href="#">GH</a>
          <a href="#">BE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
