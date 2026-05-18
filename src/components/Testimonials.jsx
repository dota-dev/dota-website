import { useState, useCallback, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

/**
 * Add a new filename here — it will appear on the site automatically.
 * Files live in: public/testimonials/
 */
const testimonialImages = [
  {
    src: '/testimonials/noamaor.png',
    alt: 'המלצת לקוח – תודעת ריפוי אקטיבית',
  },
  {
    src: '/testimonials/lea.jpeg',
    alt: 'המלצת לקוח – לאה',
  },
];

const AUTO_PLAY_MS = 5000;

export default function Testimonials() {
  const revealRef = useReveal();
  const count = testimonialImages.length;
  const hasLoop = count > 1;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = useCallback(() => {
    if (!hasLoop) return;
    setActiveIndex((i) => (i + 1) % count);
  }, [count, hasLoop]);

  const goPrev = useCallback(() => {
    if (!hasLoop) return;
    setActiveIndex((i) => (i - 1 + count) % count);
  }, [count, hasLoop]);

  /* Auto-advance carousel (infinite circular loop when count > 1) */
  useEffect(() => {
    if (!hasLoop || isPaused) return;
    const timer = setInterval(goNext, AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, [hasLoop, isPaused, goNext]);

  /* Keyboard navigation */
  useEffect(() => {
    if (!hasLoop) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goPrev();
      if (e.key === 'ArrowLeft') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [hasLoop, goNext, goPrev]);

  return (
    <section id="testimonials" className="overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="container-narrow">
        <SectionHeading tag="המלצות" title="לקוחות ממליצים" />

        <div ref={revealRef} className="reveal">
          <div
            className="testimonial-carousel-wrapper mx-auto max-w-lg"
            role="region"
            aria-label="המלצות לקוחות"
            aria-roledescription={hasLoop ? 'carousel' : undefined}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            {hasLoop && (
              <CarouselArrow direction="prev" onClick={goPrev} label="המלצה קודמת" />
            )}

            <div className="testimonial-viewport">
              <div
                className="testimonial-track"
                style={
                  hasLoop
                    ? { transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }
                    : undefined
                }
              >
                {testimonialImages.map((item) => (
                  <TestimonialCard key={item.src} item={item} />
                ))}
              </div>
            </div>

            {hasLoop && (
              <CarouselArrow direction="next" onClick={goNext} label="המלצה הבאה" />
            )}
          </div>

          {hasLoop && (
            <div className="testimonial-dots" role="tablist" aria-label="בחירת המלצה">
              {testimonialImages.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`המלצה ${i + 1}`}
                  className={`testimonial-dot${i === activeIndex ? ' is-active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/** Square card – tall screenshots scroll vertically inside the frame */
function TestimonialCard({ item }) {
  return (
    <div className="testimonial-slide">
      <article className="testimonial-card">
        <div className="testimonial-card-scroll">
          <img
            src={item.src}
            alt={item.alt}
            className="testimonial-card-img"
            loading="lazy"
            draggable={false}
          />
        </div>
      </article>
    </div>
  );
}

function CarouselArrow({ direction, onClick, label }) {
  return (
    <button
      type="button"
      className={`testimonial-arrow testimonial-arrow--${direction}`}
      onClick={onClick}
      aria-label={label}
    >
      <ChevronIcon direction={direction} />
    </button>
  );
}

function ChevronIcon({ direction }) {
  const isPrev = direction === 'prev';
  return (
    <svg
      className="testimonial-arrow-icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      {isPrev ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      )}
    </svg>
  );
}
