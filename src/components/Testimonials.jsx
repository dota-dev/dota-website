import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

/**
 * Base slides – duplicated once in the track for seamless -50% loop.
 * Multiple copies of image_0af24d keep the carousel full with no gaps.
 */
const BASE_SLIDES = [
  { src: '/image_0af24d.png', alt: 'המלצת לקוח – תודעת ריפוי אקטיבית' },
  { src: '/image_0af24d.png', alt: 'המלצת לקוח – תודעת ריפוי אקטיבית' },
  { src: '/image_0af24d.png', alt: 'המלצת לקוח – תודעת ריפוי אקטיבית' },
  { src: '/testimonials/placeholder-2.png', alt: 'המלצת לקוח' },
  { src: '/testimonials/placeholder-3.png', alt: 'המלצת לקוח' },
];

/** Exact duplicate – animation moves -50% for a perfect infinite circle */
const LOOP_SLIDES = [...BASE_SLIDES, ...BASE_SLIDES];

export default function Testimonials() {
  const revealRef = useReveal();

  return (
    <section id="testimonials" className="overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="container-narrow">
        <SectionHeading tag="המלצות" title="לקוחות ממליצים" />

        <div ref={revealRef} className="reveal">
          <div
            className="testimonial-marquee relative mx-auto max-w-5xl"
            aria-label="גלריית המלצות מלקוחות – סרט נע מעגלי אינסופי"
            role="region"
          >
            <div className="testimonial-track">
              {LOOP_SLIDES.map((slide, i) => (
                <TestimonialSlide
                  key={`${slide.src}-${i}`}
                  slide={slide}
                  ariaHidden={i >= BASE_SLIDES.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSlide({ slide, ariaHidden = false }) {
  return (
    <div className="testimonial-slide shrink-0" aria-hidden={ariaHidden || undefined}>
      <div className="testimonial-slide-frame overflow-hidden rounded-lg border border-border bg-surface-card">
        <img
          src={slide.src}
          alt={ariaHidden ? '' : slide.alt}
          className="testimonial-slide-img"
          loading="lazy"
          draggable="false"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="testimonial-slide-fallback hidden" aria-hidden="true">
          <svg className="h-8 w-8 text-text-muted/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
