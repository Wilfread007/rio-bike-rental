import { useState } from "react";
import { BUSINESS as B, FLEET, STEPS, PLACES, FAQ } from "./data";
import { Scooter, Bike } from "./Art";
import Reveal from "./Reveal";

const TRUST = [
  { t: "Walk in or WhatsApp", d: "Book by message or visit us in Kottar. No app to install." },
  { t: "Clear rental terms", d: "Rates, deposit and return time agreed before you ride." },
  { t: "Bikes checked before pickup", d: "Look the bike over with us and note any marks." },
  { t: "Day, week or longer", d: "Flexible durations for visitors and locals." },
  { t: "Near Nagercoil Junction", d: "Opposite Railway Road, easy to reach on arrival." },
  { t: "Call us any time", d: "Talk to us directly on +91 97900 76737." },
];
const DOCS = ["Valid driving licence", "Government ID (Aadhaar or passport)", "Phone number we can reach", "Refundable deposit, as agreed"];

export default function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [type, setType] = useState("Scooter");
  const [filter, setFilter] = useState<"all" | "scooter" | "bike">("all");

  const days = from && to ? Math.max(1, Math.round((+new Date(to) - +new Date(from)) / 86400000) + 1) : 0;
  const msg = `Hi Rio Bike Rental, I need a ${type.toLowerCase()} in Nagercoil${from ? ` from ${from}` : ""}${to ? ` to ${to}` : ""}${days ? ` (${days} day${days > 1 ? "s" : ""})` : ""}. Is it available?`;
  const waLink = `https://wa.me/919790076737?text=${encodeURIComponent(msg)}`;
  const shown = FLEET.filter((f) => filter === "all" || f.kind === filter);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-3">
          <a href="#top" className="text-xl font-extrabold tracking-tight" aria-label="Rio Bike Rental home">
            <span className="text-lane">Rio</span> Bike Rental
          </a>
          <nav aria-label="Main" className="ml-auto hidden gap-7 text-sm font-semibold md:flex">
            {[["Bikes", "#fleet"], ["How it works", "#how"], ["Rides", "#rides"], ["FAQ", "#faq"], ["Contact", "#contact"]].map(([l, h]) => (
              <a key={h} href={h} className="text-ink/70 transition hover:text-lane">{l}</a>
            ))}
          </nav>
          <a href={B.tel} className="btn ml-auto !px-4 !py-2 text-sm md:ml-0">Call now</a>
        </div>
      </header>

      <main id="top" className="pb-20 md:pb-0">
        <section className="relative overflow-hidden bg-gradient-to-b from-[#dff5ec] to-paper">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-28 pt-16 md:grid-cols-2 md:pt-24">
            <div>
              <p className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-bold text-sea shadow-sm animate-pop">Kottar, Nagercoil</p>
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight animate-pop [animation-delay:120ms] sm:text-6xl">
                Bike rental in Nagercoil, booked in a minute.
              </h1>
              <p className="mt-5 max-w-md text-lg text-ink/70 animate-pop [animation-delay:240ms]">
                Pick your dates, choose a scooter or bike, and message us. We confirm availability and have it ready near Railway Road.
              </p>
              <div className="mt-7 flex gap-3 animate-pop [animation-delay:360ms]">
                <a className="btn" href={B.tel}>Call {B.phone}</a>
                <a className="btn btn-ghost" href={B.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
            <div className="relative mx-auto h-72 w-full max-w-md sm:h-80" aria-hidden="true">
              <div className="absolute inset-4 rounded-[3rem] bg-sea/15" />
              <div className="absolute inset-0 m-auto h-60 w-60 rounded-full bg-white shadow-xl sm:h-72 sm:w-72" />
              <Scooter color="#ff5a36" moving className="absolute left-2 top-8 w-60 animate-[bounce2_3s_ease-in-out_infinite] sm:w-72" />
              <Bike color="#0e9f7e" moving className="absolute bottom-2 right-3 w-52 sm:w-60" />
              <span className="absolute right-2 top-4 animate-bounce rounded-xl bg-white px-3 py-2 text-sm font-bold shadow-lg [animation-duration:3s]">Daily and weekly</span>
              <span className="absolute bottom-6 left-0 animate-bounce rounded-xl bg-ink px-3 py-2 text-sm font-bold text-white shadow-lg [animation-delay:-1.5s] [animation-duration:3.5s]">Pickup in Kottar</span>
            </div>
          </div>

        </section>

        <div className="relative z-10 -mt-16 px-5">
          <div className="mx-auto grid max-w-4xl gap-3 rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-ink/10 sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-end">
            <label className="text-xs font-bold text-ink/60">Pickup date
              <input type="date" className="field mt-1" value={from} onChange={(e) => setFrom(e.target.value)} />
            </label>
            <label className="text-xs font-bold text-ink/60">Return date
              <input type="date" className="field mt-1" value={to} min={from || undefined} onChange={(e) => setTo(e.target.value)} />
            </label>
            <label className="text-xs font-bold text-ink/60">Vehicle
              <select className="field mt-1" value={type} onChange={(e) => setType(e.target.value)}>
                <option>Scooter</option><option>Commuter bike</option><option>Geared bike</option>
              </select>
            </label>
            <a className="btn whitespace-nowrap" href={waLink} target="_blank" rel="noopener noreferrer">
              Check availability{days ? ` (${days}d)` : ""}
            </a>
          </div>
        </div>

        <section className="mx-auto mt-6 max-w-6xl px-5 py-16" aria-label="Why rent with Rio Bike Rental">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST.map((t, i) => (
              <Reveal key={t.t} delay={i * 70}>
                <div className="flex h-full gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sea/15 font-extrabold text-sea">✓</span>
                  <div><h3 className="font-extrabold">{t.t}</h3><p className="text-sm text-ink/65">{t.d}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="fleet" className="mx-auto max-w-6xl px-5 py-12">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Choose your ride</h2>
                <p className="mt-2 text-ink/65">Call for today’s availability and rates.</p>
              </div>
              <div className="flex gap-2" role="group" aria-label="Filter vehicles">
                {(["all", "scooter", "bike"] as const).map((k) => (
                  <button key={k} onClick={() => setFilter(k)} aria-pressed={filter === k}
                    className={`rounded-full px-5 py-2 text-sm font-bold capitalize transition ${filter === k ? "bg-ink text-white" : "bg-white ring-1 ring-ink/15 hover:bg-ink/5"}`}>
                    {k === "all" ? "All" : k + "s"}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {shown.map((f) => (
              <article key={f.name} className="group animate-pop overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="grid h-48 place-items-center bg-gradient-to-br from-[#e6f7f0] to-white">
                  {f.photo ? (
                    <img src={f.photo} alt={`${f.name} for rent in Nagercoil`} loading="lazy" className="h-full w-full object-cover" />
                  ) : f.kind === "scooter" ? (
                    <Scooter color={f.color} className="w-56 transition duration-500 group-hover:scale-110" />
                  ) : (
                    <Bike color={f.color} className="w-56 transition duration-500 group-hover:scale-110" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold">{f.name}</h3>
                  <p className="mt-2 text-sm text-ink/70">{f.desc}</p>
                  <p className="mt-3 text-sm font-bold text-sea">Best for: {f.best}</p>
                  <a href={`https://wa.me/919790076737?text=${encodeURIComponent(`Hi, I want to rent: ${f.name}`)}`} target="_blank" rel="noopener noreferrer" className="btn mt-5 w-full">Ask for rate</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="bg-ink px-5 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <Reveal><h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">How to rent a bike in Nagercoil</h2></Reveal>
            <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="absolute left-0 right-0 top-5 hidden h-0.5 bg-white/20 lg:block" aria-hidden="true" />
              {STEPS.map((s, i) => (
                <li key={s.t} className="relative">
                  <Reveal delay={i * 120}>
                    <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-lane font-extrabold">{i + 1}</span>
                    <h3 className="mt-4 text-lg font-extrabold">{s.t}</h3>
                    <p className="mt-1 text-white/70">{s.d}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="rides" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">What to bring</h2>
            <ul className="mt-6 space-y-3">
              {DOCS.map((d) => (
                <li key={d} className="flex items-center gap-3 rounded-xl bg-white p-4 font-semibold shadow-sm ring-1 ring-ink/5">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-sea text-sm text-white">✓</span>{d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Rides from Nagercoil</h2>
            <ul className="mt-6 divide-y divide-ink/10 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5">
              {PLACES.map((p) => (
                <li key={p.n} className="flex items-center gap-4 p-4 transition hover:bg-sea/10">
                  <span className="w-20 shrink-0 rounded-lg bg-ink py-2 text-center text-sm font-extrabold text-white">{p.k}</span>
                  <div><strong>{p.n}</strong><p className="text-sm text-ink/65">{p.d}</p></div>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-ink/50">Approximate road distances from Nagercoil.</p>
          </Reveal>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-5 pb-20">
          <Reveal><h2 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl">Bike rental questions</h2></Reveal>
          {FAQ.map((f) => (
            <details key={f.q} className="group mt-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink/5 open:ring-sea">
              <summary className="flex cursor-pointer list-none items-center justify-between font-bold">
                {f.q}<span className="ml-4 text-2xl text-lane transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-ink/70">{f.a}</p>
            </details>
          ))}
        </section>

        <section id="contact" className="bg-gradient-to-br from-sea to-[#087a60] px-5 py-20 text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Visit Rio Bike Rental</h2>
              <address className="my-4 not-italic text-white/90">{B.address}</address>
              <p><a className="font-extrabold underline-offset-4 hover:underline" href={B.tel}>{B.phone}</a></p>
              <p className="mt-1"><a className="font-extrabold underline-offset-4 hover:underline" href={B.instagram} target="_blank" rel="noopener noreferrer">@riobikerental on Instagram</a></p>
              <a className="btn btn-ghost mt-6" href={B.map} target="_blank" rel="noopener noreferrer">Get directions</a>
            </Reveal>
            <Reveal delay={150}>
              <iframe title="Rio Bike Rental location map, Kottar, Nagercoil" loading="lazy" className="h-80 w-full rounded-2xl border-0 shadow-2xl"
                src="https://www.google.com/maps?q=Rio+Bike+Rental+Kottar+Nagercoil&output=embed" />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="px-5 py-6 pb-24 text-center text-sm text-ink/50 md:pb-6">
        © {new Date().getFullYear()} Rio Bike Rental, Nagercoil. Bike and scooter rental in Kottar.
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 bg-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,.1)] md:hidden">
        <a href={B.tel} className="btn !py-3">Call</a>
        <a href={B.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !py-3">WhatsApp</a>
      </div>
    </>
  );
}
