// Pre-renders multiple static HTML pages for high-value search intent
import fs from "node:fs";
import { pathToFileURL } from "node:url";
import path from "node:path";

const { render } = await import(pathToFileURL(path.resolve("dist-server/entry-server.js")).href);
const template = fs.readFileSync("dist/index.html", "utf-8");

const PAGES = [
  {
    slug: "/",
    filePath: "dist/index.html",
    title: "Bike Rental in Nagercoil | Rio Bike Rental, Kottar",
    description: "Rio Bike Rental in Kottar, Nagercoil offers reliable bike, scooter (Activa), and Royal Enfield Bullet rentals. Open 24 Hours (24/7 round-the-clock pickup & drop), affordable daily & weekly rates, easy pickup near Railway Road and Nagercoil Junction. Call +91 97900 76737.",
    canonical: "https://rio-bike-rental.vercel.app/",
  },
  {
    slug: "/scooter-rental-nagercoil",
    filePath: "dist/scooter-rental-nagercoil/index.html",
    title: "Scooter Rental in Nagercoil | Honda Activa Hire | Rio Bike Rental",
    description: "Rent Honda Activa scooters in Nagercoil with Rio Bike Rental, Kottar. Open 24 Hours. Fuel-efficient automatic scooty hire for local travel, sightseeing, and couples. Call +91 97900 76737.",
    canonical: "https://rio-bike-rental.vercel.app/scooter-rental-nagercoil",
  },
  {
    slug: "/bullet-rental-nagercoil",
    filePath: "dist/bullet-rental-nagercoil/index.html",
    title: "Royal Enfield Bullet Rental in Nagercoil | 350cc Cruiser Hire | Rio Bike Rental",
    description: "Rent 350cc Royal Enfield Bullet motorcycles in Nagercoil with Rio Bike Rental, Kottar. Open 24 Hours. Perfect for Kanyakumari coastal road trips and Western Ghats. Call +91 97900 76737.",
    canonical: "https://rio-bike-rental.vercel.app/bullet-rental-nagercoil",
  },
  {
    slug: "/bike-rental-nagercoil",
    filePath: "dist/bike-rental-nagercoil/index.html",
    title: "Motorcycle & Bike Rental in Nagercoil | Rio Bike Rental Kottar",
    description: "Rent reliable commuter motorcycles in Nagercoil from Rio Bike Rental. Open 24 Hours daily. 110cc to 150cc bikes delivering 55-65 km/l for work travel, daily commuting, and budget exploration. Call +91 97900 76737.",
    canonical: "https://rio-bike-rental.vercel.app/bike-rental-nagercoil",
  },
  {
    slug: "/bike-rental-near-nagercoil-railway-station",
    filePath: "dist/bike-rental-near-nagercoil-railway-station/index.html",
    title: "Bike Rental Near Nagercoil Railway Station (NCJ) | Rio Bike Rental",
    description: "Fast two wheeler bike and scooter rental near Nagercoil Junction Railway Station (NCJ). Open 24 Hours for train arrivals. Shop located opposite Railway Road in Kottar (2 mins walk/ride). Call +91 97900 76737.",
    canonical: "https://rio-bike-rental.vercel.app/bike-rental-near-nagercoil-railway-station",
  },
  {
    slug: "/kanyakumari-bike-rental",
    filePath: "dist/kanyakumari-bike-rental/index.html",
    title: "Bike Rental for Kanyakumari Trip from Nagercoil | Rio Bike Rental",
    description: "Rent Royal Enfield Bullets and bikes for your Kanyakumari road trip from Rio Bike Rental, Kottar. Open 24 Hours daily. Easy 20 km ride via NH-66. Call +91 97900 76737.",
    canonical: "https://rio-bike-rental.vercel.app/kanyakumari-bike-rental",
  },
  {
    slug: "/kottar-bike-rental",
    filePath: "dist/kottar-bike-rental/index.html",
    title: "Bike Rental in Kottar Nagercoil | Near Railway Road | Rio Bike Rental",
    description: "Two wheeler bike and scooter rental in Kottar, Nagercoil near Railway Road and Muppidari Amman Kovil. Open 24 Hours with round-the-clock pickup & drop. Call +91 97900 76737.",
    canonical: "https://rio-bike-rental.vercel.app/kottar-bike-rental",
  },
  {
    slug: "/places-to-visit-from-nagercoil",
    filePath: "dist/places-to-visit-from-nagercoil/index.html",
    title: "Places to Visit from Nagercoil by Bike | Local Travel Guide | Rio Bike Rental",
    description: "Explore Suchindram, Kanyakumari, Muttom Beach, and Thirparappu Falls by rental bike or scooter from Rio Bike Rental, Kottar, Nagercoil. Open 24 Hours.",
    canonical: "https://rio-bike-rental.vercel.app/places-to-visit-from-nagercoil",
  },
];

for (const p of PAGES) {
  const dir = path.dirname(p.filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const appHtml = render(p.slug);
  let html = template
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace("<!--app-html-->", appHtml)
    .replace(/<title>.*?<\/title>/, `<title>${p.title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${p.description}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${p.canonical}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${p.title}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${p.description}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${p.canonical}" />`);

  fs.writeFileSync(p.filePath, html, "utf-8");
  console.log(`Prerendered static page: ${p.slug} -> ${p.filePath}`);
}

fs.rmSync("dist-server", { recursive: true, force: true });
console.log(`All ${PAGES.length} static content pages prerendered successfully!`);
