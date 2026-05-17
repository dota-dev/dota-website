import { EMAIL, PHONE_DISPLAY, WHATSAPP_URL } from '../constants/contact';

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-narrow space-y-3 px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-text-muted">
          <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
            {EMAIL}
          </a>
          <span className="mx-3 text-border" aria-hidden="true">
            |
          </span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            {PHONE_DISPLAY}
          </a>
        </p>
        <p className="text-xs text-text-muted/80">
          © 2026 DOTA by Talya Dori. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
