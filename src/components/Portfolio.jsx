import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

/**
 * Symmetric 3-column portfolio.
 * Live project: screenshot from /projects/ + title as link.
 * Coming soon: dark placeholder frame with centered label.
 */
const PROJECTS = [
  {
    id: 'noamaor',
    title: 'תודעת ריפוי אקטיבית',
    url: 'http://www.noamaor.co.il',
    image: '/projects/noamaor.png',
    imageAlt: 'צילום מסך – תודעת ריפוי אקטיבית',
    comingSoon: false,
  },
  { id: 'soon-1', title: 'פרויקט בקרוב', comingSoon: true },
  { id: 'soon-2', title: 'פרויקט בקרוב', comingSoon: true },
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
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
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
      {project.comingSoon ? (
        <div
          className="portfolio-card-image portfolio-card-empty flex items-center justify-center rounded-xl border border-dashed border-border/80 bg-surface-card"
          aria-hidden="true"
        >
          <span className="text-sm font-medium text-text-muted/70">פרויקט בקרוב</span>
        </div>
      ) : (
        <div className="portfolio-card-image overflow-hidden rounded-xl border border-border bg-surface-card shadow-sm transition-all duration-300 group-hover:border-brand-purple/40 group-hover:shadow-lg group-hover:shadow-brand-purple/5">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
      )}

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
