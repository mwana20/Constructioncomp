import { useEffect } from 'react';

interface GlobalAnimationsProps {
  currentPage: string;
}

const REVEAL_SELECTOR = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'li',
  'button',
  'a',
  'img',
  'section',
  'article',
  'nav',
  '.card',
  '.project-card',
  '.service-card',
  '.team-card',
  '.stat-card',
  '.info-card',
  '.badge',
].join(', ');

const wrapWords = (node: HTMLElement) => {
  if (!node || node.dataset.wordWrapped === 'true') return;

  const text = node.textContent?.trim();
  if (!text || text.length < 2) return;

  const words = text.split(/\s+/).filter(Boolean);
  if (words.length < 2) return;

  node.textContent = '';
  node.dataset.wordWrapped = 'true';
  node.classList.add('reveal-word-group');

  words.forEach((word, index) => {
    const span = document.createElement('span');
    span.className = 'reveal-word';
    span.style.setProperty('--word-index', String(index));
    span.textContent = word;
    node.appendChild(span);

    if (index < words.length - 1) {
      node.appendChild(document.createTextNode(' '));
    }
  });
};

export const GlobalAnimations: React.FC<GlobalAnimationsProps> = ({ currentPage }) => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('.reveal-target').forEach((element) => {
      element.classList.remove('reveal-target', 'is-visible');
      element.removeAttribute('style');
      if (element instanceof HTMLElement) {
        element.dataset.wordWrapped = 'false';
      }
    });

    const revealTargets = Array.from(document.querySelectorAll(REVEAL_SELECTOR));

    revealTargets.forEach((element, index) => {
      const node = element as HTMLElement;
      node.style.setProperty('--reveal-delay', `${index * 18}ms`);
      node.classList.add('reveal-target');

      const hasNestedStyledText = node.querySelector('span, br');
      if (node.matches('h1, h2, h3, h4, h5, h6') && !node.querySelector('.reveal-word') && !hasNestedStyledText) {
        wrapWords(node);
      }
    });

    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-target').forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    document.querySelectorAll('.reveal-target').forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [currentPage]);

  return null;
};
