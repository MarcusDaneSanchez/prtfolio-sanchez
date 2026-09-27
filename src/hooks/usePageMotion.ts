import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PRELOADER_MIN_DURATION = 1400;

const setVisible = (elements: HTMLElement[], visible: boolean) => {
  elements.forEach((element) => {
    element.classList.toggle('is-visible', visible);
  });
};

export const usePageMotion = () => {
  const location = useLocation();
  const [isReady, setIsReady] = useState(false);
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
    const startTime = performance.now();
    let timeoutId: number | undefined;
    let loadHandler: (() => void) | undefined;

    const finishLoading = () => {
      const elapsed = performance.now() - startTime;
      const remaining = reducedMotion ? 0 : Math.max(PRELOADER_MIN_DURATION - elapsed, 0);

      timeoutId = window.setTimeout(() => {
        setIsReady(true);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      finishLoading();
    } else {
      loadHandler = () => {
        finishLoading();
        window.removeEventListener('load', loadHandler as EventListener);
      };

      window.addEventListener('load', loadHandler, { once: true });
    }

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }

      if (loadHandler) {
        window.removeEventListener('load', loadHandler as EventListener);
      }
    };
  }, [reducedMotion]);

  useEffect(() => {
    document.body.classList.toggle('motion-ready', isReady);
  }, [isReady]);

  useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const parallaxTargets = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));

    if (reducedMotion) {
      setVisible(revealTargets, true);
      parallaxTargets.forEach((element) => {
        element.style.setProperty('--parallax-offset', '0px');
        element.style.setProperty('--parallax-image-offset', '0px');
        element.style.setProperty('--parallax-scale', '1');
      });
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    const viewportHeight = window.innerHeight || 1;

    revealTargets.forEach((element) => {
      revealObserver.observe(element);

      const rect = element.getBoundingClientRect();
      if (rect.top < viewportHeight * 0.92 && rect.bottom > 0) {
        element.classList.add('is-visible');
      }
    });

    let animationFrame = 0;

    const updateParallax = () => {
      animationFrame = 0;
      const currentViewportHeight = window.innerHeight || 1;

      parallaxTargets.forEach((element) => {
        const speed = Number(element.dataset.parallax ?? '0');
        const rect = element.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distanceFromCenter = center - currentViewportHeight / 2;
        const offset = Math.max(-110, Math.min(110, -distanceFromCenter * speed * 0.32));
        const scale = 1 + Math.min(Math.abs(offset) / 2400, 0.02);

        element.style.setProperty('--parallax-offset', `${offset.toFixed(2)}px`);
        element.style.setProperty('--parallax-image-offset', `${(-offset * 0.42).toFixed(2)}px`);
        element.style.setProperty('--parallax-scale', scale.toFixed(4));
      });
    };

    const scheduleParallax = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener('scroll', scheduleParallax, { passive: true });
    window.addEventListener('resize', scheduleParallax);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', scheduleParallax);
      window.removeEventListener('resize', scheduleParallax);

      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [location.key, reducedMotion]);

  return { isReady, reducedMotion };
};