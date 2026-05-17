import { WHATSAPP_URL } from '../constants/contact';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-30 blur-[120px] animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }}
        />
        <div
          className="absolute top-1/3 -left-48 h-[400px] w-[400px] rounded-full opacity-25 blur-[100px] animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)', animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full opacity-20 blur-[90px] animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, #22c55e, transparent 70%)', animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 h-[300px] w-[300px] rounded-full opacity-15 blur-[80px]"
          style={{ background: 'radial-gradient(circle, #f97316, transparent 70%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-narrow relative z-10 section-padding pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/80 px-4 py-1.5 text-sm text-text-muted backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
            DOTA – by Talya Dori
          </p>

          <h1 className="fade-in-delay-1 mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            הופכים{' '}
            <span className="gradient-text">חלומות דיגיטליים</span>
            <br />
            למציאות יציבה
          </h1>

          <p className="fade-in-delay-2 mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
            פיתוח אתרים, מערכות ואפליקציות מותאמים אישית בקוד נקי, בשקיפות מלאה
            ובאנושות מעל הכל. בלי פלטפורמות סגורות, בלי אותיות קטנות.
          </p>

          <div className="fade-in-delay-3 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient w-full sm:w-auto"
            >
              <WhatsAppIcon />
              לשיחת ייעוץ בוואטסאפ
            </a>
            <a href="#portfolio" className="btn-outline w-full sm:w-auto">
              צפייה בעבודות שלי
              <ArrowDownIcon />
            </a>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-text-muted transition-colors hover:text-white"
            aria-label="גלול למטה"
          >
            <span className="text-xs">גלול למטה</span>
            <span className="animate-bounce">
              <ArrowDownIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}
