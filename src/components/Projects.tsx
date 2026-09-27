import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Projects = () => {
  const featuredProjects = projectsData.slice(0, 3);
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    updateMotionPreference();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateMotionPreference);
      return () => mediaQuery.removeEventListener('change', updateMotionPreference);
    }

    mediaQuery.addListener(updateMotionPreference);
    return () => mediaQuery.removeListener(updateMotionPreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    let animationFrame = 0;

    const updateProgress = () => {
      animationFrame = 0;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const pinStart = rect.top - 96;
      const pinEnd = rect.bottom - window.innerHeight;
      const range = Math.max(pinEnd - pinStart, 1);
      const progress = Math.max(0, Math.min(1, -pinStart / range));
      const activeProjectPosition = progress * (featuredProjects.length - 1);
      const stage = stageRef.current;

      if (!stage) return;

      stage.querySelector<HTMLElement>('.projects-progress-line span')?.style.setProperty('transform', `scaleY(${progress})`);

      stage.querySelectorAll<HTMLElement>('.project-slide').forEach((slide, index) => {
        const distance = index - activeProjectPosition;
        const absoluteDistance = Math.abs(distance);
        const opacity = Math.max(0, 1 - absoluteDistance * 1.35);
        const scale = Math.max(0.9, 1 - absoluteDistance * 0.045);
        const isActive = index === Math.round(activeProjectPosition);

        slide.style.opacity = `${opacity}`;
        slide.style.transform = `translate3d(0, ${distance * 34}px, 0) scale(${scale})`;
        slide.style.setProperty('--slide-distance', `${distance}`);
        slide.style.setProperty('--slide-scale', `${1.06 + Math.min(absoluteDistance, 1) * 0.025}`);
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', `${!isActive}`);
      });
    };

    const scheduleProgress = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener('scroll', scheduleProgress, { passive: true });
    window.addEventListener('resize', scheduleProgress);

    return () => {
      window.removeEventListener('scroll', scheduleProgress);
      window.removeEventListener('resize', scheduleProgress);
      if (animationFrame !== 0) window.cancelAnimationFrame(animationFrame);
    };
  }, [reducedMotion]);

  return (
    <section
      className={`bestsellers projects-scrollytelling ${reducedMotion ? 'is-reduced-motion' : ''}`}
      id="projects"
      ref={sectionRef}
      style={{ ['--project-count' as string]: featuredProjects.length }}
    >
      <div className="projects-pin">
        <div className="bestsellers-header projects-scrollytelling-header" data-reveal>
          <h2 className="title">FEATURED PROJECTS</h2>
          <Link to="/projects" className="view-collection">VIEW ALL PROJECTS &rarr;</Link>
        </div>

        <div className="projects-stage" ref={stageRef} aria-live="polite">
          <div className="projects-progress" aria-hidden="true">
            <span className="projects-progress-label">01</span>
            <span className="projects-progress-line"><span /></span>
            <span className="projects-progress-label">0{featuredProjects.length}</span>
          </div>

          {featuredProjects.map((project, index) => {
            return (
              <article
                key={project.id}
                className={`project-slide ${index === 0 ? 'is-active' : ''}`}
                aria-hidden={!reducedMotion && index !== 0}
                style={{
                  opacity: reducedMotion ? 1 : index === 0 ? 1 : 0,
                  transform: reducedMotion || index === 0 ? 'none' : 'translate3d(0, 34px, 0) scale(0.955)',
                  ['--slide-distance' as string]: index,
                  ['--slide-scale' as string]: 1.085,
                }}
              >
                <Link to={`/projects/${project.id}`} className="project-slide-image-link">
                  <div className="product-image-container project-slide-image">
                    <img src={project.image} alt={project.name} />
                    <button className="add-to-cart-btn">&rarr;</button>
                  </div>
                </Link>
                <div className="product-info project-slide-info">
                  <div>
                    <span className="product-category">{project.category}</span>
                    <Link to={`/projects/${project.id}`}>
                      <h3 className="product-name">{project.name}</h3>
                    </Link>
                  </div>
                  <span className="product-price">{project.role}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
