import { useEffect, useRef } from 'react';
import gdgocThumb from '../assets/Projects/GDGOC/Thumbnail.png';
import dsciplrThumb from '../assets/Projects/DSCIPLR/Thumbnail.png';
import xplorexThumb from '../assets/Projects/XPlorex/Thumbnail.png';

const Story = () => {
  const storyImagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = storyImagesRef.current;
    if (!container) return;

    const isMobile = window.matchMedia('(max-width: 900px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isMobile || prefersReducedMotion) return;

    const slides = Array.from(container.children) as HTMLElement[];
    if (slides.length < 2) return;

    let currentIndex = 0;

    const intervalId = window.setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="story" id="about">
      <div className="story-images" ref={storyImagesRef}>
        <img src={gdgocThumb} alt="Google Developer Group on Campus project" loading="lazy" />
        <img src={dsciplrThumb} alt="Dashboard and systems project" loading="lazy" />
        <img src={xplorexThumb} alt="XPlorex web project" loading="lazy" />
      </div>
      <div className="story-content">
        <p className="subtitle">EDUCATION & BACKGROUND</p>
        <h2 className="title">CONTINUOUS<br/>LEARNING AND<br/>INNOVATION</h2>
        <div className="description" style={{color: 'var(--text-secondary)'}}>
          <p style={{marginBottom: '1rem'}}>
            <strong style={{color: 'white'}}>National University – Baliwag</strong><br/>
            BS Information Technology<br/>
            Specializing in Mobile and Web App Development<br/>
            (Aug 2022 – Jul 2026)
          </p>
          <p>
            <strong style={{color: 'white'}}>Baliwag University</strong><br/>
            Senior High School – STEM Strand<br/>
            (Dec 2020 – Jul 2022)
          </p>
        </div>
        <a href="#contact" className="discover-link">GET IN TOUCH &rarr;</a>
      </div>
    </section>
  );
};

export default Story;
