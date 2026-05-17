import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

/**
 * Symmetric 3-column portfolio.
 * Each card: screenshot + project name (title is the link when live).
 * No descriptions, no raw URL text.
 */
const PROJECTS = [
  {
    title: 'תודעת ריפוי אקטיבית',
    url: 'http://www.noamaor.co.il',
    image: '/portfolio/noamaor.png',
    imageAlt: 'צילום מסך – תודעת ריפוי אקטיבית',
  },
  {
    title: 'פרויקט בקרוב',
    url: null,
    image: '/portfolio/placeholder-2.png',
    imageAlt: 'מקום לצילום מסך פרויקט',
  },
  {
    title: 'פרויקט בקרוב',
    url: null,
    image: '/portfolio/placeholder-3.png',
    imageAlt: 'מקום לצילום מסך פרויקט',
  },
];

export default function Portfolio() {
  const revealRef = useReveal();

  return (
    <section id="portfolio" className="section-padding bg-surface-elevated/50">
      <div className="container-narrow">
        <SectionHeading tag="תיק עבודות" title="פרויקטים נבחרים" />

        <div
          ref={revealRef}
          className="reveal grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const titleClass =
    'mt-4 block text-center text-base font-semibold transition-colors sm:text-lg';

  return (
    <article className="portfolio-card group flex flex-col">
      <div className="portfolio-card-image overflow-hidden rounded-xl border border-border bg-surface-card shadow-sm transition-all duration-300 group-hover:border-brand-purple/40 group-hover:shadow-lg group-hover:shadow-brand-purple/5">
        <ProjectImage src={project.image} alt={project.imageAlt} />
      </div>

      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${titleClass} text-brand-purple hover:text-brand-blue hover:underline underline-offset-4`}
        >
          {project.title}
        </a>
      ) : (
        <span className={`${titleClass} text-text-muted`}>{project.title}</span>
      )}
    </article>
  );
}

function ProjectImage({ src, alt }) {
  return (
    <div className="relative aspect-[16/10] w-full">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-top"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
      <div className="portfolio-image-fallback hidden absolute inset-0 flex items-center justify-center bg-surface-elevated">
        <svg
          className="h-10 w-10 text-text-muted/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  );
}
