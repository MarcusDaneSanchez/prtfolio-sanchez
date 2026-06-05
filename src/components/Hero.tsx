import { useEffect, useRef } from 'react';
import sideImg from '../assets/My Pictures/Side.jpeg';
import centerImg from '../assets/My Pictures/Center.jpeg';
import side2Img from '../assets/My Pictures/Side2.jpeg';
import cvPdf from '../assets/Sanchez, Marcus Dane Resurreccion_Resume.pdf';

const Hero = () => {
  const heroImagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = heroImagesRef.current;
    if (!container) return;

    const isMobile = window.matchMedia('(max-width: 900px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isMobile || prefersReducedMotion) return;

    const slides = Array.from(container.children) as HTMLElement[];
    if (slides.length < 2) return;

    let currentIndex = 0;

    const intervalId = window.setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      const slide = slides[currentIndex];
      if (!slide) return;

      const targetLeft = slide.offsetLeft - (container.clientWidth - slide.clientWidth) / 2;
      container.scrollTo({ left: targetLeft, behavior: 'smooth' });
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="subtitle">IT PROFESSIONAL</p>
        <h1 className="title">MARCUS DANE<br/>R. SANCHEZ</h1>
        <p className="description">
          Specializing in Web and Mobile Application Development, with practical experience in UI/UX design, graphic design, system analysis, and software development. Seeking opportunities to grow in the tech industry.
        </p>
        <a href={cvPdf} download="Marcus-Dane-Sanchez-CV.pdf" className="download-cv-btn">
          Download CV
        </a>
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
          <a href="https://www.facebook.com/marcus.sanchez.1610/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: '0.3s', display: 'flex', alignItems: 'center' }} onMouseOver={(e) => e.currentTarget.style.color = '#1877F2'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/marcus-dane-sanchez-06590738b" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: '0.3s', display: 'flex', alignItems: 'center' }} onMouseOver={(e) => e.currentTarget.style.color = '#0A66C2'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="mailto:marcusdanesanchez@gmail.com" style={{ color: 'var(--text-primary)', transition: '0.3s', display: 'flex', alignItems: 'center' }} onMouseOver={(e) => e.currentTarget.style.color = '#EA4335'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-images" ref={heroImagesRef}>
        <div className="hero-image"><img src={sideImg} alt="Marcus Profile Side" /></div>
        <div className="hero-image main-hero-image"><img src={centerImg} alt="Marcus Profile Center" /></div>
        <div className="hero-image"><img src={side2Img} alt="Marcus Profile Side 2" /></div>
      </div>
    </section>
  );
};

export default Hero;
