# Broers Auto Wellness Website

Moderne website voor Broers Auto Wellness - Autowasserette & Schoonmaak Specialist in Uithoorn.

## Features

- 🚗 **Car Cleaning** - Professionele interieur en exterieur autoreiniging
- 🚿 **Carwash** - Moderne wasstraat en 24/7 wasboxen
- ☕ **Broodjescorner** - Verse broodjes en koffie, 6 dagen per week
- 📞 **Contact** - Contactformulier en locatie informatie
- 📱 **Responsive Design** - Werkt perfect op mobiel, tablet en desktop
- ⚡ **Performance** - Geoptimaliseerd met Next.js 15
- 🎨 **Modern Design** - Tailwind CSS met custom theme
- ✨ **Animaties** - Framer Motion voor vloeiende transities

## Technologie Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## Installation

1. Clone de repository
2. Installeer dependencies:
   ```bash
   npm install
   ```

## Development

Start de development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## Build

Build de applicatie voor productie:

```bash
npm run build
```

Start de productie server:

```bash
npm start
```

## Project Structuur

```
broers-auto-wellness/
├── public/
│   └── images/          # Afbeeldingen en logo's
├── src/
│   ├── app/             # Next.js pages (App Router)
│   │   ├── car-cleaning/
│   │   ├── broodjescorner/
│   │   ├── carwash/
│   │   └── contact/
│   ├── components/      # React componenten
│   │   ├── layout/      # Header, Footer, Navigation
│   │   ├── home/        # Homepage componenten
│   │   ├── services/    # Service componenten
│   │   ├── broodjescorner/
│   │   ├── contact/
│   │   └── ui/          # Herbruikbare UI componenten
│   ├── data/            # Data files
│   │   ├── company-info.ts
│   │   ├── services.ts
│   │   └── menu.ts
│   └── lib/             # Utilities en types
```

## Pagina's

- **/** - Homepage met hero, about, services en CTA
- **/car-cleaning** - Interieur en exterieur autodiensten
- **/broodjescorner** - Volledig menu met broodjes, koffie en gebak
- **/carwash** - Wasstraat en 24/7 wasboxen informatie
- **/contact** - Contactformulier, openingstijden en locatie

## Customization

### Bedrijfsgegevens aanpassen

Bewerk `src/data/company-info.ts` om contactgegevens en openingstijden aan te passen.

### Menu aanpassen

Bewerk `src/data/menu.ts` om het broodjesmenu aan te passen.

### Kleuren aanpassen

Bewerk `tailwind.config.ts` om het kleurenschema aan te passen.

### Logo vervangen

Vervang de bestanden in `public/images/logos/` met je eigen logo's.

## Deployment

### Vercel (Aanbevolen)

1. Push code naar GitHub
2. Importeer project in Vercel
3. Deploy automatisch

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Andere platformen

De website kan ook gedeployed worden op:
- Netlify
- AWS Amplify
- Google Cloud
- Eigen server met Node.js

## SEO

De website bevat:
- ✅ Metadata voor elke pagina
- ✅ Open Graph tags
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantische HTML
- ✅ Geoptimaliseerde afbeeldingen

## Browser Support

- Chrome (laatste 2 versies)
- Firefox (laatste 2 versies)
- Safari (laatste 2 versies)
- Edge (laatste 2 versies)

## Contact

Voor vragen over de website:

**Broers Auto Wellness**
- 📍 Anthony Fokkerweg 26, 1422 AG Uithoorn
- 📞 0297 273 224
- 📧 info@broersautowellness.nl

## License

© 2024 Broers Auto Wellness. Alle rechten voorbehouden.
