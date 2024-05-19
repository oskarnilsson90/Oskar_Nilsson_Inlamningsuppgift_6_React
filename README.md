This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Dokumentation

## Översikt

Denna dokumentation beskriver PichPro Planners webbapplikation för hantering av övningar och träningar inom fotboll. Applikationen tillåter användare att skapa, redigera, visa och ta bort övningar samt lista tillgängliga övningar. Den är uppbyggd med hjälp av Next.js för frontend och en separat API-server för backend. Nedan följer en detaljerad beskrivning av komponenter, funktioner och tekniska detaljer.

### Komponenter och Funktioner

- ExercisesList: En komponent som listar tillgängliga övningar. Användaren kan söka efter övningar och klicka på dem för att se detaljer eller lägga till dem i träningsscheman.

- CreateExerciseForm: En komponent för att skapa nya övningar. Användaren fyller i formuläret och skickar in för att lägga till en ny övning i databasen.

- ExercisePage: En komponent för att visa detaljer om en enskild övning. Användaren kan också ta bort övningen från denna vy.

- EditExerciseForm: En komponent för att redigera befintliga övningar. Användaren kan ändra övningens detaljer och uppdatera dem i databasen.

- API-funktioner: Funktioner för att kommunicera med API-servern, inklusive att hämta, skapa, uppdatera och ta bort övningar.

### Tekniska Detaljer

- Next.js: Används för att bygga den responsiva frontend-applikationen med server-side rendering och klientnavigering.

- React: Används för att skapa komponentbaserade användargränssnitt.

- API Kommunikation: Använder fetch API för att kommunicera med en separat backend-server som tillhandahåller CRUD-operationer för övningar.

- Miljövariabler: Använder NEXT_PUBLIC_API_URL för att konfigurera URL till API-servern. Detta gör det enkelt att anpassa API-anrop för olika miljöer (t.ex. utveckling, produktion).

## Analys och Reflektion

### Prestanda

- Server-Side Rendering (SSR): Användningen av Next.js möjliggör SSR, vilket förbättrar prestanda och SEO genom att rendera sidor på servern innan de skickas till klienten.

- Effektivitet i API-anrop: API-anropen är effektiva och asynkrona, vilket minskar blockering och förbättrar användarupplevelsen genom att snabbt hämta och uppdatera data.

- Optimerad bildhantering: Användningen av Next.js Image-komponenten ger automatisk bildoptimering och lazy loading, vilket förbättrar sidans laddningstider och prestanda.

### Underhållbarhet

- Komponentbaserad arkitektur: Användningen av React-komponenter möjliggör återanvändning och modulär utveckling, vilket gör koden lättare att underhålla och förstå.

- Separation av ansvar: Separationen av frontend och backend genom Next.js och en separat API-server gör det möjligt att ändra och uppgradera varje del av systemet oberoende av varandra, vilket förbättrar skalbarheten och underhållbarheten.

### Förbättringsmöjligheter

- Optimering av databasåtkomst: Optimering av API-anropen och databasanvändningen kan förbättra prestanda och skalbarhet ytterligare, särskilt för stora datamängder eller hög belastning.

- Automatiserade tester: Implementering av enhets-, integrations- och slutanvändartester kan säkerställa att koden fungerar korrekt och förhindra oavsiktliga buggar och fel vid framtida ändringar.
