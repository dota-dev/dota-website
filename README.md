# DOTA Portfolio – טליה דורי

אתר תדמית מקצועי ל-DOTA – פתרונות אוטומציה וטכנולוגיה עסקית.

## Tech Stack

- **React 19** + **Vite 6**
- **Tailwind CSS 4**
- עברית מלאה (RTL) עם גופן Heebo

## התקנה והרצה

```bash
npm install
npm run dev
```

פתחו [http://localhost:5173](http://localhost:5173)

## בנייה לפרודקשן

```bash
npm run build
npm run preview
```

## קבצים להוספה

העתיקו לתיקיית `public/`:

| קובץ | תיאור |
|------|--------|
| `talya.jpeg` | תמונה מקצועית לאזור אודות |
| `image_0af24d.png` | צילום מסך המלצה (סליידר) |
| `portfolio/noamaor.png` | צילום מסך – תודעת ריפוי אקטיבית |
| `portfolio/placeholder-2.png` | צילום מסך פרויקט 2 |
| `portfolio/placeholder-3.png` | צילום מסך פרויקט 3 |

## מבנה הפרויקט

```
src/
  components/   # כל הסקשנים
  hooks/        # useReveal – אנימציות גלילה
  App.jsx
  index.css     # ערכת צבעים וגרדיאנטים
public/         # נכסים סטטיים
```
