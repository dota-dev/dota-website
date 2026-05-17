import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

const VALUES = [
  {
    icon: 'code',
    title: 'פיתוח בקוד טהור',
    subtitle: 'Pure Code',
    description:
      'בלי תבניות מוכנות של Wix או אלמנטים מוגבלים של קאנבה. המוצרים שלי נבנים מאפס בקוד יציב, מהיר ומאובטח, שמותאם בדיוק למידות של העסק שלכם.',
    gradient: 'from-brand-blue to-brand-purple',
  },
  {
    icon: 'freedom',
    title: 'החופש שלכם',
    subtitle: 'אמינות מעל הכל',
    description:
      "אצלי אתם לא ב'כלא'. עם מסירת המוצר, אתם מקבלים שקיפות מלאה וגישה ישירה לקוד המקור שלכם. המוצר הוא שלכם לחלוטין, ואתם יכולים להמשיך איתו לכל מפתח שתרצו.",
    gradient: 'from-brand-purple to-brand-green',
  },
  {
    icon: 'heart',
    title: 'אנושות והתאמה אישית',
    subtitle: null,
    description:
      'טכנולוגיה יכולה להיות קרה, אבל התהליך איתי הוא הכי אנושי שיש. אני מתאימה את עצמי אליכם, מקשיבה, ומבטיחה חוויית שירות נעימה, סבלנית ומקצועית.',
    gradient: 'from-brand-green to-brand-orange',
  },
];

export default function Values() {
  const revealRef = useReveal();

  return (
    <section id="values" className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          tag="הערכים שלי"
          title="מה שמייחד אותי"
          subtitle="שלושה עמודי תווך שמנחים כל פרויקט – מהקוד ועד האנשים שמאחוריו"
        />

        <div
          ref={revealRef}
          className="reveal grid gap-6 md:grid-cols-3 md:gap-8"
        >
          {VALUES.map((value) => (
            <article
              key={value.title}
              className="group gradient-border rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${value.gradient} text-white shadow-lg`}
              >
                <ValueIcon type={value.icon} />
              </div>
              {value.subtitle && (
                <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-text-muted">
                  {value.subtitle}
                </span>
              )}
              <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
              <p className="leading-relaxed text-text-muted">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueIcon({ type }) {
  const icons = {
    code: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    freedom: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
    heart: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  };
  return icons[type] || null;
}
