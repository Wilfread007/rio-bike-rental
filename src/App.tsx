import { useState, useEffect } from "react";
import { BUSINESS as B, FLEET, STEPS, PLACES, FAQ, GALLERY, STATIC_PAGES, REVIEWS, type Vehicle } from "./data";
import Reveal from "./Reveal";

const TRUST = [
  {
    icon: "⚡",
    t: "Instant Walk-in or WhatsApp",
    d: "Book directly with the local shop owner. No complicated mobile apps, zero middleman fees, instant confirmation.",
  },
  {
    icon: "💰",
    t: "Transparent Daily & Weekly Rates",
    d: "Clear rates agreed before you ride, with a low refundable deposit returned immediately upon vehicle handover.",
  },
  {
    icon: "🛡️",
    t: "Clean & Inspected Vehicles",
    d: "Every scooter and motorcycle is thoroughly checked, washed, and serviced before handing over the keys.",
  },
  {
    icon: "📍",
    t: "2 Mins from Nagercoil Junction",
    d: "Located in Kottar, right opposite Railway Road—incredibly convenient when arriving by train at Nagercoil Jn (NCJ).",
  },
  {
    icon: "🪖",
    t: "Complimentary Helmets Included",
    d: "Clean, ISI-approved helmets provided with every two-wheeler rental for your safety across Kanyakumari highways.",
  },
  {
    icon: "🌊",
    t: "Total Freedom to Explore",
    d: "Explore Kanyakumari sunrise point, Suchindram temple, Muttom beach cliffs, and Thirparappu waterfalls on your terms.",
  },
];

const DOCS = [
  { t: "Original Driving Licence", d: "Valid Indian driving licence with two-wheeler endorsement, or an International Driving Permit for foreign tourists." },
  { t: "Government Photo ID Proof", d: "Original Aadhaar card, Passport, or Voter ID for identity verification." },
  { t: "Active Mobile Number", d: "A working contact number for booking and return updates." },
  { t: "Refundable Security Deposit", d: "Modest security deposit, refunded immediately upon vehicle return in original condition." },
];

interface LightboxItem {
  src: string;
  title: string;
  alt: string;
  caption: string;
}

export default function App({ currentPath = "/" }: { currentPath?: string }) {
  const [clientPath, setClientPath] = useState(currentPath);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [type, setType] = useState("Scooter (Honda Activa)");
  const [filter, setFilter] = useState<"all" | "scooter" | "bike" | "bullet">("all");
  const [modalImage, setModalImage] = useState<LightboxItem | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setClientPath(window.location.pathname);
      // Auto-set filter based on route
      if (window.location.pathname.includes("scooter")) {
        setFilter("scooter");
        setType("Scooter (Honda Activa)");
      } else if (window.location.pathname.includes("bullet")) {
        setFilter("bullet");
        setType("Royal Enfield Bullet (350cc)");
      } else if (window.location.pathname.includes("bike-rental-nagercoil")) {
        setFilter("bike");
        setType("Commuter Motorcycle (110cc-150cc)");
      }
    }
  }, []);

  // Match active static page content
  const pageMeta = STATIC_PAGES.find((p) => p.slug === clientPath) || STATIC_PAGES[0];

  const days = from && to ? Math.max(1, Math.round((+new Date(to) - +new Date(from)) / 86400000) + 1) : 0;
  const msg = `Hi Rio Bike Rental, I want to rent a ${type} in Nagercoil${from ? ` from ${from}` : ""}${to ? ` to ${to}` : ""}${days ? ` (${days} day${days > 1 ? "s" : ""})` : ""}. Please confirm current rate and availability.`;
  const waLink = `https://wa.me/919790076737?text=${encodeURIComponent(msg)}`;
  const shownFleet = FLEET.filter((f: Vehicle) => filter === "all" || f.kind === filter);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-lane selection:text-white">
      {/* Top Notification Announcement Bar */}
      <div className="bg-ink px-4 py-2 text-center text-xs font-semibold text-white/90 sm:text-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-lane/20 px-2 py-0.5 text-xs font-bold text-lane">
            <span className="h-1.5 w-1.5 rounded-full bg-lane animate-ping" />
            Open 24 Hours
          </span>
          <span>
            Bike &amp; Scooter Rental in Kottar, Nagercoil • 24/7 Pickup &amp; Drop • Near Railway Station • Call / WhatsApp:{" "}
            <a href={B.tel} className="font-extrabold text-lane underline underline-offset-2">
              {B.phone}
            </a>
          </span>
        </div>
      </div>

      {/* Main Glassmorphic Header */}
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
          <a href="/" className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-ink" aria-label="Rio Bike Rental Home">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-lane to-[#e04825] text-lg font-black text-white shadow-md shadow-lane/30">
              R
            </div>
            <div>
              <span className="text-lane">Rio</span> Bike Rental
              <span className="block text-[10px] font-bold uppercase tracking-wider text-sea">Kottar • Nagercoil</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden items-center gap-6 text-sm font-bold text-ink/75 md:flex">
            <a href="#fleet" className="transition hover:text-lane">Fleet</a>
            <a href="#gallery" className="transition hover:text-lane">Shop Photos</a>
            <a href="#reviews" className="transition hover:text-lane">Google Reviews</a>
            <a href="#how" className="transition hover:text-lane">How to Rent</a>
            <a href="#rides" className="transition hover:text-lane">Kanyakumari Trip</a>
            <a href="#location" className="transition hover:text-lane">Kottar Location</a>
            <a href="#faq" className="transition hover:text-lane">FAQ</a>
          </nav>

          {/* CTA Header Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href={B.tel}
              className="btn !px-4 !py-2 text-sm shadow-md transition hover:scale-105"
              aria-label={`Call Rio Bike Rental at ${B.phone}`}
            >
              <span className="hidden sm:inline">Call Now: </span>{B.phone}
            </a>
          </div>
        </div>

        {/* Quick SEO Route Tabs for Navigation & Deep Crawling */}
        <div className="border-t border-ink/5 bg-paper/90 px-5 py-2 overflow-x-auto no-scrollbar">
          <div className="mx-auto flex max-w-6xl items-center gap-2 text-xs font-bold text-ink/70">
            <span className="shrink-0 text-ink/50 uppercase tracking-wider text-[11px]">Rental Services:</span>
            {STATIC_PAGES.map((p) => (
              <a
                key={p.slug}
                href={p.slug}
                className={`shrink-0 rounded-lg px-3 py-1 transition ${
                  clientPath === p.slug
                    ? "bg-ink text-white shadow-sm ring-1 ring-ink"
                    : "bg-white text-ink/80 ring-1 ring-ink/10 hover:bg-lane hover:text-white"
                }`}
              >
                {p.navLabel}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main id="top" className="pb-24 md:pb-0">
        {/* Dynamic SEO Hero Section with Tailored Static Content */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#dff5ec] via-[#ebf8f2] to-paper pb-20 pt-8 md:pb-28 md:pt-12">
          <div className="mx-auto max-w-6xl px-5">
            {/* Breadcrumb Navigation for SEO */}
            {clientPath !== "/" && (
              <nav aria-label="Breadcrumbs" className="mb-4 text-xs font-semibold text-ink/60">
                <ol className="flex items-center gap-1.5">
                  <li><a href="/" className="hover:text-lane hover:underline">Home</a></li>
                  <li>/</li>
                  <li className="font-bold text-ink">{pageMeta.navLabel}</li>
                </ol>
              </nav>
            )}

            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-sea shadow-sm ring-1 ring-sea/20">
                  <span className="inline-block h-2 w-2 rounded-full bg-sea animate-ping" />
                  {pageMeta.badge} • Kottar, Nagercoil
                </div>

                <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  {pageMeta.h1}
                </h1>

                <p className="mt-3 text-lg font-bold text-sea sm:text-2xl">
                  {pageMeta.subtitle}
                </p>

                <p className="mt-4 max-w-xl text-base text-ink/80 leading-relaxed sm:text-lg">
                  {pageMeta.intro}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a className="btn text-base shadow-lg shadow-lane/30 hover:scale-105 transition" href={B.tel} aria-label={`Call ${B.phone}`}>
                    Call {B.phone}
                  </a>
                  <a
                    className="btn btn-ghost text-base hover:bg-white transition"
                    href={B.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Inquire via WhatsApp"
                  >
                    WhatsApp Booking
                  </a>
                  <a
                    className="inline-flex items-center gap-1 text-sm font-bold text-ink hover:text-lane underline underline-offset-4"
                    href="#location"
                  >
                    Store Directions &rarr;
                  </a>
                </div>

                {/* Verified Trust Badges */}
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <a
                    href="#reviews"
                    className="group rounded-xl bg-white/95 p-3 shadow-sm ring-1 ring-ink/10 transition hover:-translate-y-1 hover:shadow-md hover:ring-lane/40 block cursor-pointer"
                    aria-label="View Google Reviews for Rio Bike Rental (4.9 stars, 87+ reviews)"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-black text-lane flex items-center gap-1">
                        4.9 ★
                      </p>
                      <span className="rounded bg-lane/10 px-1.5 py-0.5 text-[10px] font-extrabold text-lane">
                        87+
                      </span>
                    </div>
                    <p className="text-[11px] font-bold text-ink/70 group-hover:text-lane transition flex items-center justify-between mt-0.5">
                      <span>Google Reviews</span>
                      <span className="text-[10px] text-lane">&darr;</span>
                    </p>
                  </a>
                  <div className="rounded-xl bg-white/90 p-3 shadow-sm ring-1 ring-ink/5">
                    <p className="text-lg font-black text-sea">2 Mins</p>
                    <p className="text-[11px] font-bold text-ink/70">From Railway Jn</p>
                  </div>
                  <div className="rounded-xl bg-white/90 p-3 shadow-sm ring-1 ring-ink/5">
                    <p className="text-lg font-black text-ink">Free</p>
                    <p className="text-[11px] font-bold text-ink/70">Helmets Provided</p>
                  </div>
                  <div className="rounded-xl bg-white/90 p-3 shadow-sm ring-1 ring-ink/5">
                    <p className="text-lg font-black text-lane">100%</p>
                    <p className="text-[11px] font-bold text-ink/70">Genuine Fleet</p>
                  </div>
                </div>
              </div>

              {/* Authentic Storefront Hero Showcase Card with Lightbox Trigger */}
              <div className="md:col-span-5">
                <figure
                  className="relative mx-auto max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-ink/10 group cursor-pointer"
                  onClick={() =>
                    setModalImage({
                      src: "/images/rio-bike-rental-shop-nagercoil.png",
                      title: "Rio Bike Rental Storefront & Garage in Kottar, Nagercoil",
                      alt: "Rio Bike Rental storefront in Kottar Nagercoil with helmets on wall and rental scooters and bikes",
                      caption: "Genuine local shop at Muppidari Amman Kovil, Cholavar St, opposite Railway Road, Kottar. Fleet of inspected scooters, bikes, and ISI helmets ready for pickup.",
                    })
                  }
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      src="/images/rio-bike-rental-shop-nagercoil.png"
                      alt="Rio Bike Rental shopfront in Kottar Nagercoil with helmets on wall and rental scooters and bikes"
                      width={1200}
                      height={900}
                      loading="eager"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-ink/90 px-3 py-1 text-xs font-bold text-white shadow-md backdrop-blur-md">
                      🟢 Open 24 Hours • 24/7 Pickup &amp; Drop
                    </div>
                    <div className="absolute bottom-3 right-3 rounded-full bg-lane px-3 py-1 text-xs font-extrabold text-white shadow-md flex items-center gap-1.5">
                      <span>🔍</span> Tap to Enlarge
                    </div>
                  </div>
                  <figcaption className="bg-ink p-5 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-wider text-sea">Official Storefront</p>
                        <p className="text-base font-extrabold text-white">Rio Bike Rental – Kottar, Nagercoil</p>
                      </div>
                      <span className="rounded-lg bg-sea/20 px-2 py-1 text-[11px] font-bold text-sea">Verified Shop</span>
                    </div>
                    <p className="mt-1 text-xs text-white/70">{B.address}</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Date & Vehicle Booking Calculator Card */}
        <div className="relative z-10 -mt-10 px-5">
          <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-ink/10">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/5 pb-3">
              <h2 className="text-base font-extrabold text-ink sm:text-lg">
                Check Two-Wheeler Rental Availability &amp; Rates
              </h2>
              <span className="text-xs font-bold text-sea">Instant WhatsApp Confirmation</span>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-end">
              <label className="text-xs font-bold text-ink/70">
                Pickup Date
                <input
                  type="date"
                  className="field mt-1"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  aria-label="Pickup date"
                />
              </label>
              <label className="text-xs font-bold text-ink/70">
                Return Date
                <input
                  type="date"
                  className="field mt-1"
                  value={to}
                  min={from || undefined}
                  onChange={(e) => setTo(e.target.value)}
                  aria-label="Return date"
                />
              </label>
              <label className="text-xs font-bold text-ink/70">
                Vehicle Model
                <select
                  className="field mt-1"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  aria-label="Choose vehicle type"
                >
                  <option value="Scooter (Honda Activa)">Scooter (Honda Activa)</option>
                  <option value="Commuter Motorcycle (110cc-150cc)">Commuter Bike (110–150cc)</option>
                  <option value="Royal Enfield Bullet (350cc)">Royal Enfield Bullet (350cc)</option>
                </select>
              </label>
              <a
                className="btn whitespace-nowrap shadow-md hover:scale-105 transition"
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Check bike rental availability on WhatsApp"
              >
                Check Rates{days ? ` (${days}d)` : ""}
              </a>
            </div>
          </div>
        </div>

        {/* Storefront & Fleet Photo Gallery (100% Authentic Photos) */}
        <section id="gallery" className="mx-auto max-w-6xl px-5 py-16">
          <Reveal>
            <div className="text-center mb-10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-sea">Authentic Business Photos</span>
              <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Explore Our Rio Bike Rental Shop in Kottar
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-ink/70 sm:text-base">
                100% genuine photographs of our shop, garage, and rental vehicles in Kottar, Nagercoil. What you see is what you get.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {GALLERY.map((g, idx) => (
              <Reveal key={g.title} delay={idx * 100}>
                <div
                  className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                  onClick={() =>
                    setModalImage({
                      src: g.src,
                      title: g.title,
                      alt: g.alt,
                      caption: g.desc,
                    })
                  }
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      src={g.src}
                      alt={g.alt}
                      width={837}
                      height={1024}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-ink/85 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                      {g.subtitle}
                    </span>
                    <span className="absolute top-3 right-3 rounded-full bg-white/90 p-1.5 text-xs text-ink opacity-0 transition group-hover:opacity-100 shadow-sm">
                      🔍 Enlarge
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-extrabold text-ink">{g.title}</h3>
                    <p className="mt-1 text-xs text-ink/70 leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Why Choose Rio Bike Rental */}
        <section className="bg-white px-5 py-16 border-y border-ink/5" aria-label="Why rent with Rio Bike Rental in Nagercoil">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <span className="text-xs font-extrabold uppercase tracking-wider text-sea">The Rio Advantage</span>
              <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Why Riders Choose Rio Bike Rental in Nagercoil
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-ink/70 sm:text-base">
                Trusted by train travelers arriving at Nagercoil Junction, local residents, college students, and tourists exploring Kanyakumari.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TRUST.map((t, i) => (
                <Reveal key={t.t} delay={i * 60}>
                  <div className="flex h-full gap-4 rounded-2xl bg-paper p-5 shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-lg">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sea/15 text-2xl" aria-hidden="true">
                      {t.icon}
                    </span>
                    <div>
                      <h3 className="font-extrabold text-ink text-base">{t.t}</h3>
                      <p className="mt-1.5 text-xs text-ink/70 leading-relaxed">{t.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Section */}
        <section id="fleet" className="mx-auto max-w-6xl px-5 py-16">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-sea">Our Two-Wheeler Fleet</span>
                <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  Bikes &amp; Scooters Available for Rent
                </h2>
                <p className="mt-2 text-sm text-ink/70 sm:text-base">
                  Choose from our verified fleet of Honda Activa scooters, commuter motorcycles, and Royal Enfield Bullets.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter vehicle categories">
                {(["all", "scooter", "bike", "bullet"] as const).map((k) => (
                  <button
                    key={k}
                    onClick={() => setFilter(k)}
                    aria-pressed={filter === k}
                    className={`rounded-full px-5 py-2 text-xs font-bold capitalize transition ${
                      filter === k ? "bg-ink text-white shadow-md" : "bg-white ring-1 ring-ink/15 hover:bg-ink/5"
                    }`}
                  >
                    {k === "all" ? "All Vehicles" : k === "bullet" ? "Royal Enfield" : k + "s"}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {shownFleet.map((f: Vehicle) => (
              <article
                key={f.id}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#e6f7f0] to-white cursor-pointer"
                  onClick={() =>
                    setModalImage({
                      src: f.photo,
                      title: f.name,
                      alt: f.photoAlt,
                      caption: `${f.category} - ${f.desc}`,
                    })
                  }
                >
                  <img
                    src={f.photo}
                    alt={f.photoAlt}
                    width={837}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink/90 px-3 py-1 text-xs font-bold text-white shadow-sm backdrop-blur-sm">
                    {f.category}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-lane px-3 py-1 text-[11px] font-extrabold text-white shadow-sm">
                    {f.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-extrabold text-ink">{f.name}</h3>
                  <p className="mt-2 text-xs text-ink/75 leading-relaxed">{f.desc}</p>

                  {/* Specifications Grid */}
                  <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl bg-paper p-3 text-[11px] font-semibold text-ink/75">
                    <div><span className="text-ink/50 block text-[10px]">Engine:</span> {f.specs.engine}</div>
                    <div><span className="text-ink/50 block text-[10px]">Mileage:</span> {f.specs.mileage}</div>
                    <div><span className="text-ink/50 block text-[10px]">Type:</span> {f.specs.fuel}</div>
                    <div><span className="text-ink/50 block text-[10px]">Braking:</span> {f.specs.brake}</div>
                  </div>

                  {/* Feature Highlights */}
                  <div className="mt-4 border-t border-ink/5 pt-3">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-sea">Key Advantages</p>
                    <ul className="mt-2 space-y-1 text-xs text-ink/70">
                      {f.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-1.5">
                          <span className="text-sea font-bold mt-0.5">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-4 text-xs font-bold text-sea">Best for: {f.best}</p>

                  <div className="mt-auto pt-5">
                    <a
                      href={`https://wa.me/919790076737?text=${encodeURIComponent(`Hi Rio Bike Rental, I want to rent ${f.name} in Nagercoil. Please confirm rates and availability.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn w-full shadow-md transition hover:scale-[1.02]"
                      aria-label={`Inquire about ${f.name} on WhatsApp`}
                    >
                      Inquire Rates on WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Dedicated Static Content Section: Scooter Rental in Nagercoil */}
        <section id="scooters-detail" className="bg-paper border-t border-ink/5 px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-12 items-center">
              <div className="md:col-span-7">
                <span className="text-xs font-extrabold uppercase tracking-wider text-sea">Deep Dive</span>
                <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  Scooter &amp; Scooty Rental in Nagercoil (Honda Activa)
                </h2>
                <p className="mt-3 text-sm text-ink/75 leading-relaxed sm:text-base">
                  Automatic scooters like the <strong>Honda Activa</strong> are by far the most popular two-wheeler rental option in Nagercoil. Whether you need a scooty for a day of shopping in Vadasery market, running errands in Kottar, visiting temples, or driving along the scenic coastal road to Kanyakumari, an automatic scooter provides the ultimate comfort.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex gap-3">
                    <span className="text-sea font-bold">1.</span>
                    <p className="text-xs text-ink/75 leading-relaxed">
                      <strong>Effortless in City Traffic:</strong> No gear-shifting or clutch control required. Simply twist the throttle and ride through congested Nagercoil town streets with ease.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-sea font-bold">2.</span>
                    <p className="text-xs text-ink/75 leading-relaxed">
                      <strong>Great Fuel Mileage:</strong> Honda Activa delivers 45–50 km per litre, allowing you to explore Nagercoil, Suchindram, and Kanyakumari with minimal fuel expense.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-sea font-bold">3.</span>
                    <p className="text-xs text-ink/75 leading-relaxed">
                      <strong>Secure Storage &amp; Dual Seating:</strong> Under-seat compartment keeps your valuables, camera, or handbag safe from rain and dust while exploring tourist spots.
                    </p>
                  </div>
                </div>

                <div className="mt-7">
                  <a href={B.tel} className="btn text-sm">
                    Book a Scooter Today: {B.phone}
                  </a>
                </div>
              </div>

              <div className="md:col-span-5">
                <div
                  className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-ink/10 cursor-pointer group"
                  onClick={() =>
                    setModalImage({
                      src: "/images/scooter-rental-nagercoil.jpg",
                      title: "Honda Activa Fleet at Rio Bike Rental, Kottar",
                      alt: "Honda Activa rental scooter at Rio Bike Rental in Kottar, Nagercoil",
                      caption: "Well-maintained Honda Activa scooters ready for pickup in Kottar, Nagercoil. Inspected and tested before every handover.",
                    })
                  }
                >
                  <img
                    src="/images/scooter-rental-nagercoil.jpg"
                    alt="Honda Activa rental scooter at Rio Bike Rental in Kottar, Nagercoil"
                    width={837}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="p-4 bg-white">
                    <p className="font-extrabold text-sm text-ink">Clean, Well-Maintained Activas</p>
                    <p className="text-xs text-ink/65">Inspected, serviced, and handed over with complimentary helmets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dedicated Section: Bullet & Touring Rental for Kanyakumari */}
        <section id="bullet-detail" className="bg-white border-t border-ink/5 px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-12 items-center">
              <div className="md:col-span-5 order-2 md:order-1">
                <div
                  className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-ink/10 cursor-pointer group"
                  onClick={() =>
                    setModalImage({
                      src: "/images/bike-rental-nagercoil.jpg",
                      title: "Royal Enfield Bullet 350cc Touring Cruiser",
                      alt: "Royal Enfield Bullet rental at Rio Bike Rental in Kottar Nagercoil",
                      caption: "Royal Enfield Bullet 350cc available for highway cruising, Kanyakumari coastal tours, and Western Ghats trips.",
                    })
                  }
                >
                  <img
                    src="/images/bike-rental-nagercoil.jpg"
                    alt="Royal Enfield Bullet rental at Rio Bike Rental in Kottar Nagercoil"
                    width={837}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="p-4 bg-white">
                    <p className="font-extrabold text-sm text-ink">Royal Enfield 350cc Highway Cruiser</p>
                    <p className="text-xs text-ink/65">Comfortable touring saddle and iconic Royal Enfield thump for long drives.</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 order-1 md:order-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-sea">Highway Touring</span>
                <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  Royal Enfield Bullet Rental in Nagercoil
                </h2>
                <p className="mt-3 text-sm text-ink/75 leading-relaxed sm:text-base">
                  Planning a road trip toward <strong>Kanyakumari sunrise point</strong>, <strong>Muttom beach</strong>, or the winding ghat roads of <strong>Kulasekharam</strong>? A Royal Enfield Bullet 350cc offers unbeatable stability, comfortable highway posture, and the signature thump that riders love.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex gap-3">
                    <span className="text-sea font-bold">1.</span>
                    <p className="text-xs text-ink/75 leading-relaxed">
                      <strong>Smooth NH-66 Cruise:</strong> Reach Kanyakumari (20 km) in just 35 minutes along the 4-lane national highway without vibrations.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-sea font-bold">2.</span>
                    <p className="text-xs text-ink/75 leading-relaxed">
                      <strong>Dual-Channel ABS Safety:</strong> Equipped with disc brakes front and rear for confident braking in all road and weather conditions.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-sea font-bold">3.</span>
                    <p className="text-xs text-ink/75 leading-relaxed">
                      <strong>Long-Distance Saddle Comfort:</strong> Wide, supportive seating ensures neither rider nor pillion gets tired on day-long excursions.
                    </p>
                  </div>
                </div>

                <div className="mt-7">
                  <a href={B.tel} className="btn text-sm">
                    Inquire Bullet Availability: {B.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Reviews & Customer Testimonials Section */}
        <section id="reviews" className="bg-gradient-to-b from-white via-paper to-white px-5 py-20 border-t border-ink/5">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-800 ring-1 ring-amber-500/20">
                  <span className="flex text-amber-500">★★★★★</span> Google Verified Reviews
                </div>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  What Riders Say About Rio Bike Rental
                </h2>
                <p className="mx-auto mt-2 max-w-2xl text-sm text-ink/70 sm:text-base">
                  Rated <strong className="text-ink">4.9 out of 5 stars</strong> by 87+ verified riders on Google Maps. Genuine experiences from train travelers arriving at Nagercoil Junction, vacationers, and locals.
                </p>
              </div>
            </Reveal>

            {/* Google Rating Summary Banner */}
            <Reveal delay={100}>
              <div className="mt-10 rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-ink/10">
                <div className="grid gap-6 md:grid-cols-12 items-center">
                  {/* Left: Overall Score */}
                  <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-ink/10 pb-6 md:pb-0 md:pr-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-ink">4.9</span>
                      <span className="text-xl font-bold text-ink/50">/ 5.0</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-2xl text-amber-400">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                    <p className="mt-2 text-xs font-bold text-ink/70">
                      Based on <strong>87+ Google Reviews</strong>
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-extrabold text-emerald-700 ring-1 ring-emerald-600/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" /> 100% Real Customer Feedback
                    </div>
                  </div>

                  {/* Middle: Rating Breakdown Bars */}
                  <div className="md:col-span-5 space-y-2.5">
                    <div className="flex items-center gap-3 text-xs font-bold text-ink/75">
                      <span className="w-12">5 stars</span>
                      <div className="h-2 flex-1 rounded-full bg-paper overflow-hidden">
                        <div className="h-full rounded-full bg-amber-400" style={{ width: "94%" }} />
                      </div>
                      <span className="w-8 text-right text-ink/50">94%</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold text-ink/75">
                      <span className="w-12">4 stars</span>
                      <div className="h-2 flex-1 rounded-full bg-paper overflow-hidden">
                        <div className="h-full rounded-full bg-amber-400" style={{ width: "6%" }} />
                      </div>
                      <span className="w-8 text-right text-ink/50">6%</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold text-ink/75">
                      <span className="w-12">3 stars</span>
                      <div className="h-2 flex-1 rounded-full bg-paper overflow-hidden">
                        <div className="h-full rounded-full bg-amber-400" style={{ width: "0%" }} />
                      </div>
                      <span className="w-8 text-right text-ink/50">0%</span>
                    </div>
                  </div>

                  {/* Right: Google Actions */}
                  <div className="md:col-span-3 flex flex-col gap-2.5">
                    <a
                      href={B.googleReviewsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn !py-2.5 text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition flex items-center justify-center gap-2"
                      aria-label="View Rio Bike Rental reviews on Google Maps"
                    >
                      <span className="text-white font-black text-sm">G</span>
                      Read on Google Maps
                    </a>
                    <a
                      href={B.googleReviewsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost !py-2.5 text-xs font-bold hover:bg-paper transition text-center"
                      aria-label="Write a review for Rio Bike Rental on Google Maps"
                    >
                      ✍️ Write a Google Review
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Verified Google Reviews Grid */}
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {REVIEWS.map((rev, idx) => (
                <Reveal key={rev.id} delay={idx * 80}>
                  <div className="flex h-full flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/10 transition hover:-translate-y-1 hover:shadow-xl">
                    <div>
                      {/* Card Header: Avatar & Verified Google Badge */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-lane to-amber-500 font-extrabold text-white text-xs shadow-sm">
                            {rev.initials}
                          </div>
                          <div>
                            <p className="font-extrabold text-sm text-ink leading-tight">{rev.author}</p>
                            <p className="text-[11px] text-ink/60 font-semibold">{rev.location}</p>
                          </div>
                        </div>
                        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-700 ring-1 ring-blue-600/20 flex items-center gap-1">
                          <span className="text-[#4285F4] font-black">G</span> Verified
                        </span>
                      </div>

                      {/* Stars & Relative Date */}
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex text-amber-400 text-sm tracking-wider">
                          {"★".repeat(rev.rating)}
                        </div>
                        <span className="text-[11px] font-semibold text-ink/40">{rev.relativeTime}</span>
                      </div>

                      {/* Rented Vehicle Pill */}
                      <div className="mt-2.5 inline-block rounded-md bg-paper px-2 py-0.5 text-[10px] font-bold text-sea">
                        Rented: {rev.vehicle}
                      </div>

                      {/* Review Text */}
                      <p className="mt-3 text-xs leading-relaxed text-ink/80">
                        &ldquo;{rev.text}&rdquo;
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-ink/5 flex items-center justify-between text-[11px] text-ink/50">
                      <span>Google Review</span>
                      <a
                        href={B.googleReviewsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lane font-bold hover:underline"
                      >
                        Verify on Google &rarr;
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How to Rent Section */}
        <section id="how" className="bg-ink px-5 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="text-center">
                <span className="text-xs font-extrabold uppercase tracking-wider text-lane">Fast &amp; Simple Booking</span>
                <h2 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  How to Rent a Bike or Scooter in Nagercoil
                </h2>
                <p className="mx-auto mt-2 max-w-2xl text-sm text-white/70 sm:text-base">
                  Get on the road in less than 5 minutes. No lengthy registration or complicated apps.
                </p>
              </div>
            </Reveal>

            <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="absolute left-0 right-0 top-5 hidden h-0.5 bg-white/20 lg:block" aria-hidden="true" />
              {STEPS.map((s, i) => (
                <li key={s.t} className="relative">
                  <Reveal delay={i * 100}>
                    <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-lane font-extrabold text-white shadow-lg">
                      {i + 1}
                    </span>
                    <h3 className="mt-4 text-base font-extrabold text-white">{s.t}</h3>
                    <p className="mt-1.5 text-xs text-white/70 leading-relaxed">{s.d}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Documents & Tourist Travel Guide Section */}
        <section id="rides" className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left: What to Bring */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-xs font-extrabold uppercase tracking-wider text-sea">Rental Checklist</span>
                <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  Documents Required to Rent
                </h2>
                <p className="mt-2 text-sm text-ink/70">
                  Please bring original copies of the following documents when collecting your two-wheeler from our Kottar shop:
                </p>

                <ul className="mt-6 space-y-3">
                  {DOCS.map((d) => (
                    <li key={d.t} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink/5">
                      <div className="flex items-center gap-2 font-bold text-ink">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sea text-xs text-white" aria-hidden="true">
                          ✓
                        </span>
                        <span>{d.t}</span>
                      </div>
                      <p className="mt-1 text-xs text-ink/65 pl-8 leading-relaxed">{d.d}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl bg-gradient-to-br from-paper to-white p-5 ring-1 ring-sea/20">
                  <p className="text-xs font-bold text-ink">
                    Need instant confirmation or custom delivery? Contact us directly:
                  </p>
                  <a href={B.tel} className="mt-2 inline-block font-extrabold text-lane text-base hover:underline">
                    {B.phone}
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right: Tourist Sightseeing Trips & Itineraries */}
            <div className="lg:col-span-7">
              <Reveal delay={150}>
                <span className="text-xs font-extrabold uppercase tracking-wider text-sea">Tourist Travel Itineraries</span>
                <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  Popular Two-Wheeler Rides from Nagercoil
                </h2>
                <p className="mt-2 text-sm text-ink/70">
                  Nagercoil is the geographic gateway to Kanyakumari district. A rental bike or scooter lets you skip crowded buses and explore scenic attractions at your own rhythm:
                </p>

                <ul className="mt-6 space-y-4">
                  {PLACES.map((p) => (
                    <li key={p.id} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink/5 transition hover:shadow-md">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base sm:text-lg font-extrabold text-ink">{p.n}</h3>
                        <div className="flex items-center gap-2">
                          <span className="rounded-lg bg-ink px-2.5 py-1 text-xs font-bold text-white">{p.k}</span>
                          <span className="rounded-lg bg-sea/15 px-2.5 py-1 text-xs font-bold text-sea">{p.t}</span>
                        </div>
                      </div>
                      <p className="mt-1 text-xs font-bold text-ink/60">{p.route}</p>
                      <p className="mt-2 text-xs sm:text-sm text-ink/75 leading-relaxed">{p.d}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-ink/5 pt-2 text-xs">
                        <span className="text-sea font-semibold">💡 Tip: {p.tip}</span>
                        <span className="text-ink/60">⏰ Best time: {p.bestTime}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Dedicated Location & Shop Section */}
        <section id="location" className="bg-gradient-to-br from-sea to-[#087a60] px-5 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="text-center">
                <span className="text-xs font-extrabold uppercase tracking-wider text-white/80">Physical Store Location</span>
                <h2 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Rio Bike Rental in Kottar, Nagercoil
                </h2>
                <p className="mx-auto mt-2 max-w-2xl text-sm text-white/85 sm:text-base">
                  Conveniently situated in Kottar, opposite Railway Road. Just 2–3 minutes from Nagercoil Junction Railway Station.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid items-start gap-10 lg:grid-cols-12">
              {/* Store Details & NAP */}
              <div className="lg:col-span-6 space-y-6">
                <Reveal delay={100}>
                  <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md ring-1 ring-white/20">
                    <h3 className="text-xl font-extrabold text-white">Rio Bike Rental</h3>
                    <p className="mt-1 text-xs font-bold text-white/80 uppercase tracking-wider">{B.tagline}</p>

                    <div className="mt-5 border-t border-white/15 pt-4 space-y-3.5">
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-wider text-white/70">Shop Address</p>
                        <address className="mt-1 not-italic font-semibold text-white/95 leading-relaxed">
                          {B.address}
                        </address>
                      </div>

                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-wider text-white/70">Nearby Landmarks</p>
                        <p className="mt-1 text-xs text-white/90">
                          {B.landmark}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-wider text-white/70">Phone &amp; WhatsApp</p>
                        <a href={B.tel} className="mt-1 block font-extrabold text-white underline underline-offset-4 hover:text-white/80 text-lg">
                          {B.phone}
                        </a>
                      </div>

                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-wider text-white/70">Operating Hours</p>
                        <p className="mt-1 text-xs font-semibold text-white/95 leading-relaxed">
                          Open 24 Hours (24/7 Everyday) • Round-the-clock pickup &amp; drop for train arrivals
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        className="btn bg-white !text-sea hover:bg-white/90 shadow-lg font-bold"
                        href={B.map}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Get directions to Rio Bike Rental on Google Maps"
                      >
                        Get Directions on Google Maps
                      </a>
                      <a
                        className="btn bg-transparent ring-1 ring-white text-white hover:bg-white/10 text-xs font-bold"
                        href={B.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Rio Bike Rental on Instagram"
                      >
                        Instagram @riobikerental
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Google Maps Embed */}
              <div className="lg:col-span-6">
                <Reveal delay={200}>
                  <div className="overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-white/20">
                    <iframe
                      title="Rio Bike Rental Location Map, Kottar, Nagercoil"
                      loading="lazy"
                      className="h-96 w-full border-0"
                      src="https://www.google.com/maps?q=Rio+Bike+Rental+Kottar+Nagercoil&output=embed"
                      aria-label="Google Map showing Rio Bike Rental in Kottar, Nagercoil"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <div className="text-center mb-10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-sea">Common Questions</span>
              <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-sm text-ink/70">
                Helpful details about renting a two-wheeler with Rio Bike Rental in Nagercoil.
              </p>
            </div>
          </Reveal>

          <div className="space-y-3.5">
            {FAQ.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink/5 open:ring-sea transition"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-ink">
                  <span className="text-base sm:text-lg">{f.q}</span>
                  <span className="ml-4 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-paper text-xl text-lane transition group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-ink/75 leading-relaxed border-t border-ink/5 pt-3">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact CTA Banner */}
        <section id="contact" className="bg-ink px-5 py-16 text-white text-center">
          <div className="mx-auto max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-lane">Ready to Ride?</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Book Your Bike or Scooter Today
            </h2>
            <p className="mt-3 text-sm text-white/75 sm:text-base">
              Call or WhatsApp us for instant rate quotes and vehicle confirmation. Pickup available in Kottar near Railway Road.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a href={B.tel} className="btn text-base shadow-lg hover:scale-105 transition" aria-label={`Call ${B.phone}`}>
                Call {B.phone}
              </a>
              <a
                href={B.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost text-base hover:bg-white transition"
                aria-label="Book on WhatsApp"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Modern SEO-Rich Footer with HTML Sitemap Links */}
      <footer className="border-t border-ink/10 bg-white px-5 py-12 pb-28 text-sm text-ink/60 md:pb-12">
        <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-extrabold text-ink text-base">Rio Bike Rental</p>
            <p className="mt-1 text-xs text-ink/70 leading-relaxed">
              Genuine local bike, scooter, and Royal Enfield rental business located in Kottar, Nagercoil, Tamil Nadu.
            </p>
            <p className="mt-3 text-xs font-bold text-sea">{B.tagline}</p>
          </div>

          <div>
            <p className="font-bold text-ink">Popular Rental Services</p>
            <ul className="mt-2.5 space-y-1.5 text-xs">
              <li><a href="/scooter-rental-nagercoil" className="hover:text-lane">Scooter Rental in Nagercoil</a></li>
              <li><a href="/bullet-rental-nagercoil" className="hover:text-lane">Royal Enfield Bullet Rental</a></li>
              <li><a href="/bike-rental-nagercoil" className="hover:text-lane">Commuter Bike Rental</a></li>
              <li><a href="/bike-rental-near-nagercoil-railway-station" className="hover:text-lane">Near Nagercoil Railway Station</a></li>
              <li><a href="/kanyakumari-bike-rental" className="hover:text-lane">Bike Rental for Kanyakumari</a></li>
              <li><a href="/kottar-bike-rental" className="hover:text-lane">Bike Rental in Kottar</a></li>
              <li><a href="/places-to-visit-from-nagercoil" className="hover:text-lane">Tourist Sightseeing by Bike</a></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-ink">Quick Navigation</p>
            <ul className="mt-2.5 space-y-1.5 text-xs">
              <li><a href="#fleet" className="hover:text-lane">Rental Fleet</a></li>
              <li><a href="#gallery" className="hover:text-lane">Store Photos</a></li>
              <li><a href="#how" className="hover:text-lane">How to Rent</a></li>
              <li><a href="#rides" className="hover:text-lane">Tour Itineraries</a></li>
              <li><a href="#location" className="hover:text-lane">Shop Map &amp; Address</a></li>
              <li><a href="#faq" className="hover:text-lane">Frequently Asked Questions</a></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-ink">Contact &amp; Location</p>
            <address className="mt-2.5 not-italic text-xs text-ink/70 leading-relaxed">
              {B.address}
            </address>
            <p className="mt-2 text-xs">
              Phone: <a href={B.tel} className="font-bold text-ink hover:text-lane">{B.phone}</a>
            </p>
            <p className="mt-1 text-xs">
              Instagram: <a href={B.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-lane">@riobikerental</a>
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl mt-10 border-t border-ink/10 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-ink/50">
          <p>&copy; {new Date().getFullYear()} Rio Bike Rental, Kottar, Nagercoil. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/sitemap.xml" className="hover:underline font-bold text-ink/70">XML Sitemap</a>
            <a href="/robots.txt" className="hover:underline font-bold text-ink/70">Robots.txt</a>
          </div>
        </div>
      </footer>

      {/* Interactive Lightbox / Modal for High-Res Storefront & Vehicle Photos */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-pop"
          onClick={() => setModalImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-3xl bg-ink text-white shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-lane transition"
              aria-label="Close photo preview"
            >
              ✕
            </button>
            <div className="overflow-hidden bg-black/50">
              <img
                src={modalImage.src}
                alt={modalImage.alt}
                width={1200}
                height={900}
                className="max-h-[70vh] w-full object-contain mx-auto"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-extrabold text-white">{modalImage.title}</h3>
                <span className="rounded-full bg-lane px-3 py-1 text-xs font-bold text-white shrink-0">
                  100% Authentic Photo
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed">{modalImage.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Desktop WhatsApp Button */}
      <aside aria-label="Quick contact" className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={B.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-extrabold text-white shadow-xl shadow-[#25D366]/40 transition hover:scale-105 hover:brightness-105"
          aria-label="Chat with Rio Bike Rental on WhatsApp"
        >
          <span className="text-xl">💬</span>
          <span>WhatsApp Booking</span>
        </a>
      </aside>

      {/* Sticky Mobile Quick Action Bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 bg-white/95 p-3 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,.15)] md:hidden border-t border-ink/10">
        <a href={B.tel} className="btn !py-3 text-sm shadow-md" aria-label={`Call ${B.phone}`}>
          Call Now
        </a>
        <a
          href={B.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost !py-3 text-sm ring-1 ring-ink/20 font-bold"
          aria-label="Message on WhatsApp"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
