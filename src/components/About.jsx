import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

export default function About() {
  const revealRef = useReveal();

  return (
    <section id="about" className="section-padding bg-surface-elevated/50">
      <div className="container-narrow">
        <SectionHeading tag="אודות" title="מי אני?" />

        <div
          ref={revealRef}
          className="reveal grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Photo placeholder */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="gradient-border overflow-hidden rounded-2xl p-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(1rem-1px)] bg-surface-card">
                <img
                  src="/talya.jpeg"
                  alt="טליה דורי – מפתחת עצמאית ומייסדת DOTA"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="photo-placeholder hidden absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface-card p-6 text-center">
                  <span
                    className="flex h-24 w-24 items-center justify-center rounded-full text-4xl font-bold text-white"
                    style={{
                      background:
                        'linear-gradient(135deg, #3b82f6, #8b5cf6, #22c55e, #f97316)',
                    }}
                  >
                    TD
                  </span>
                  <p className="text-sm text-text-muted">
                    הוסיפו את התמונה <code className="text-brand-purple">talya.jpeg</code>{' '}
                    לתיקיית public
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative gradient ring */}
            <div
              className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl opacity-40 blur-2xl"
              style={{
                background:
                  'linear-gradient(135deg, #3b82f6, #8b5cf6, #22c55e)',
              }}
              aria-hidden="true"
            />
          </div>

          {/* Bio text */}
          <div className="space-y-5 text-base leading-relaxed text-text-muted sm:text-lg">
            <p>היי, אני טליה דורי.</p>
            <p>
              אחרי שסיימתי תואר ראשון במדעי המחשב וצברתי שלוש שנים של ניסיון עשיר ואינטנסיבי
              בעולם ההייטק, החלטתי לקחת את הידע והכלים שרכשתי ולהביא אותם ישירות לעסקים שרוצים
              לצמוח.
            </p>
            <p>
              המטרה שלי היא ללוות עסקים (ובמיוחד עסקים קטנים ובינוניים) ואנשים פרטיים, ולבנות
              עבורם אתרים, דפי נחיתה, מערכות ואפליקציות שמביאים תוצאות. אני מאמינה שמאחורי כל
              קוד ומערכת חייבת להיות אנושיות. לכן, בתהליך העבודה איתי, אני נכנסת בצורה מעמיקה
              לראש של הלקוחות שלכם, מתאימה את עצמי לקצב ולצרכים הייחודיים שלכם, ומתנהלת
              בשקיפות מלאה לאורך כל הדרך – כדי שתמיד תדעו איפה הדברים עומדים.
            </p>
            <p className="text-text font-medium">
              אני אוהבת את מה שאני עושה, וההנאה הכי גדולה שלי היא לראות את החלום שלכם קם לתחייה
              ועולה לאוויר בצורה לא פחות ממושלמת.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
