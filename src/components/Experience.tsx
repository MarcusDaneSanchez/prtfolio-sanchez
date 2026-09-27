const experienceItems = [
  {
    period: "INTERNSHIP",
    title: "UI/UX Intern",
    company: "FYB Technologies Inc.",
    type: "Design & Product",
  },
  {
    period: "PROFESSIONAL EXPERIENCE",
    title: "Graphic Designer",
    company: "Active Chase",
    type: "Visual Design",
  },
  {
    period: "SCHOOL ORGANIZATION",
    title: "UI/UX Development Lead",
    company: "Good Developer Group on Campus Nu – Baliwag",
    type: "Design & Development",
  },
];

import { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updatePreference);
      return () => mediaQuery.removeEventListener('change', updatePreference);
    }

    mediaQuery.addListener(updatePreference);
    return () => mediaQuery.removeListener(updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    let animationFrame = 0;
    const updateExperience = () => {
      animationFrame = 0;
      const section = sectionRef.current;
      const stage = stageRef.current;
      if (!section || !stage) return;

      const rect = section.getBoundingClientRect();
      const start = rect.top - 96;
      const end = rect.bottom - window.innerHeight;
      const progress = Math.max(0, Math.min(1, (-start / Math.max(end - start, 1)) * 1.35));
      const position = progress * (experienceItems.length - 1);

      stage.querySelectorAll<HTMLElement>('.experience-slide').forEach((slide, index) => {
        const distance = index - position;
        const absoluteDistance = Math.abs(distance);
        const isActive = index === Math.round(position);

        slide.style.opacity = `${Math.max(0, 1 - absoluteDistance * 1.25)}`;
        slide.style.transform = `translate3d(0, calc(-50% + ${distance * 32}px), 0) scale(${Math.max(0.94, 1 - absoluteDistance * 0.035)})`;
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', `${!isActive}`);
      });

      stage.querySelector<HTMLElement>('.experience-progress-fill')?.style.setProperty('transform', `scaleY(${progress})`);
      const current = stage.querySelector<HTMLElement>('.experience-counter-current');
      if (current) current.textContent = String(Math.round(position) + 1).padStart(2, '0');
    };

    const scheduleExperience = () => {
      if (animationFrame === 0) animationFrame = window.requestAnimationFrame(updateExperience);
    };

    updateExperience();
    window.addEventListener('scroll', scheduleExperience, { passive: true });
    window.addEventListener('resize', scheduleExperience);

    return () => {
      window.removeEventListener('scroll', scheduleExperience);
      window.removeEventListener('resize', scheduleExperience);
      if (animationFrame !== 0) window.cancelAnimationFrame(animationFrame);
    };
  }, [reducedMotion]);

  return (
    <section className={`experience-section ${reducedMotion ? 'is-reduced-motion' : ''}`} id="experience" ref={sectionRef}>
      <div className="experience-intro" data-reveal>
        <p className="subtitle">PRACTICAL EXPERIENCE</p>
        <h2 className="title">EXPERIENCE</h2>
        <p className="experience-summary">Applying thoughtful design and development practice to real products, teams, and user needs.</p>
      </div>
      <div className="experience-stage" ref={stageRef}>
        <div className="experience-counter" aria-hidden="true">
          <span className="experience-counter-current">01</span> / 02
        </div>
        <div className="experience-progress" aria-hidden="true"><span className="experience-progress-fill" /></div>
        {experienceItems.map((item, index) => (
          <article
            className={`experience-entry experience-slide ${index === 0 ? 'is-active' : ''}`}
            data-reveal
            key={item.company}
            aria-hidden={!reducedMotion && index !== 0}
            style={{
              opacity: reducedMotion ? 1 : index === 0 ? 1 : 0,
              transform: reducedMotion || index === 0 ? 'translate3d(0, -50%, 0)' : 'translate3d(0, calc(-50% + 32px), 0) scale(0.965)',
              ['--reveal-delay' as string]: `${140 + index * 100}ms`,
            }}
          >
            <span className="experience-index">0{index + 1}</span>
            <div>
              <p className="experience-period">{item.period}</p>
              <h3>{item.title}</h3>
              <p className="experience-company">{item.company}</p>
            </div>
            <span className="experience-type">{item.type}</span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
