"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  ArrowUpRight,
  Check,
  X,
  Plus,
  Minus,
  Zap,
  TrendingUp,
} from "lucide-react";

/* ── Data ── */

const socialProofData = [
  { name: "Marko", city: "Ljubljana", time: "pred 2 urama" },
  { name: "Ana", city: "Maribor", time: "pred 5 urami" },
  { name: "Luka", city: "Celje", time: "danes zjutraj" },
  { name: "Nejc", city: "Kranj", time: "včeraj" },
];

const stats = [
  { value: "€3,500+", label: "Povp. mesečni zaslužek" },
  { value: "14 dni", label: "Do prve prodaje" },
  { value: "98%", label: "Zadovoljstvo ekipe" },
];

const faqs = [
  {
    q: "Potrebujem izkušnje?",
    a: "Ne. Izkušnje so plus, niso pa pogoj. Naučili vas bomo vsega – od prvega pozdrava do zaključka prodaje. Iščemo karakter, ne življenjepisa.",
  },
  {
    q: "Kaj točno prodajam?",
    a: "Najnaprednejše storitve Telekoma Slovenije (Optika NEO, 5G). Prodajate storitve vodilnega operaterja, kar pomeni, da so vrata pri strankah že napol odprta.",
  },
  {
    q: "Kakšno je plačilo?",
    a: "100% variabilno, brez zgornje meje. Provizije + mesečni bonusi za preseganje ciljev. Najboljši presegajo managerske prihodke. Vaš trud = vaš zaslužek.",
  },
  {
    q: "Kje poteka delo?",
    a: "Na terenu, po celotni Sloveniji. Območje se prilagodi vaši regiji. Ni pisarne, ni mikromanagementa – ste zunaj, med ljudmi.",
  },
];

const yesProfile = [
  "Lakota po uspehu in želja po nadpovprečnem zaslužku.",
  "Komunikativnost in hitro navezovanje stikov.",
  "Zavrnitev ('ne') predstavlja izziv, ne oviro.",
  "Želja po karieri, kjer trud prinaša finančno svobodo.",
];

const noProfile = [
  "Iščete udobno službo s fiksno, nevariabilno plačo.",
  "Vam je komunikacija z neznanci neprijetna.",
  "Hitro obupate ob prvih ovirah.",
  "Nimate ambicij po višjih zaslužkih.",
];

const expectations = [
  {
    title: "Želja po dokazovanju",
    desc: "Ne iščemo ljudi, ki želijo samo preživeti mesec. Iščemo posameznike, ki želijo uspeti in zaslužiti.",
  },
  {
    title: "Komunikativnost",
    desc: "Tvoje glavno orodje je tvoj glas. Biti moraš odprt in imeti veselje do dela z ljudmi in prepričevanja.",
  },
  {
    title: "Vozniški izpit B",
    desc: "Ključen pogoj za mobilnost in nemoteno pokrivanje terena obravnavanih strank.",
  },
];

const processSteps = [
  {
    title: "Oddaj prijavo",
    desc: "Pokliči nas ali izpolni obrazec. Traja manj kot 2 minuti.",
  },
  {
    title: "Kratek razgovor",
    desc: "15-minutni klic, kjer spoznamo tvoje ambicije in ti predstavimo priložnost.",
  },
  {
    title: "Mentorstvo",
    desc: "1. teden na terenu z izkušenim mentorjem. Naučiš se vse od A do Ž.",
  },
  {
    title: "Začni zaslužati",
    desc: "Samostojno na terenu. Tvoj trud, tvoj zaslužek. Brez stropa.",
  },
];

/* ── Component ── */

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [proofIndex, setProofIndex] = useState(0);
  const [showProof, setShowProof] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setShowStickyCta(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let idx = 0;
    const showNext = () => {
      setProofIndex(idx);
      setShowProof(true);
      setTimeout(() => setShowProof(false), 4000);
      idx = (idx + 1) % socialProofData.length;
    };
    const t = setTimeout(showNext, 4000);
    const iv = setInterval(showNext, 10000);
    return () => {
      clearTimeout(t);
      clearInterval(iv);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  /* Bar chart heights for hero visual */
  const barHeights = [35, 55, 45, 70, 60, 85, 75, 95, 80, 100, 88, 65];

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-zinc-300 selection:bg-rose-500 selection:text-white overflow-x-hidden">
      {/* ── NOISE TEXTURE ── */}
      <div
        className="fixed inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay z-[70]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")',
        }}
      />

      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 w-full z-[60] px-5 md:px-8 py-4 md:py-6 transition-[mix-blend-mode] duration-300 ${
          menuOpen ? "" : "mix-blend-difference"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-white font-bold text-lg md:text-xl tracking-tighter uppercase">
            <Zap className="w-5 h-5 fill-current" />
            SIGNAL<span className="opacity-50">PRO</span>
          </div>

          <a
            href="tel:070694881"
            className="hidden md:flex group items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-rose-500 hover:text-white transition-all duration-300"
          >
            <span className="relative overflow-hidden h-5">
              <span className="block group-hover:-translate-y-full transition-transform duration-300">
                Prijava
              </span>
              <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
                070 694 881
              </span>
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 touch-target"
            aria-label="Meni"
          >
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      <div
        className={`fixed inset-0 z-[55] bg-[#050505]/[0.98] backdrop-blur-2xl md:hidden flex flex-col transition-all duration-500 ease-out ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex-1 flex flex-col justify-center px-8 gap-6">
          {[
            { label: "Zakaj mi", href: "#zakaj-mi" },
            { label: "Kako deluje", href: "#kako-deluje" },
            { label: "Za koga", href: "#zate" },
            { label: "FAQ", href: "#faq" },
          ].map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-4xl font-display font-black text-white uppercase tracking-tight transition-all duration-500 ease-out hover:text-rose-500 ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
              style={{
                transitionDelay: menuOpen ? `${i * 80 + 200}ms` : "0ms",
              }}
            >
              <span className="text-rose-500/40 text-lg mr-3 font-sans">
                0{i + 1}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <div
          className={`px-8 pb-10 transition-all duration-500 ease-out ${
            menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: menuOpen ? "550ms" : "0ms" }}
        >
          <a
            href="tel:070694881"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-rose-600 to-orange-500 text-white px-8 py-5 rounded-full font-bold uppercase tracking-wider text-base w-full pulse-glow"
          >
            <Phone className="w-5 h-5" />
            070 694 881
          </a>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-8 md:pt-36 lg:pt-44 md:pb-16 lg:pb-24 px-5 md:px-8 min-h-[100svh] flex flex-col justify-center">
        {/* Glow */}
        <div className="absolute top-1/4 left-0 md:left-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-rose-600/15 rounded-full blur-[100px] md:blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-0 md:right-1/4 w-72 md:w-96 h-72 md:h-96 bg-orange-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left — text content */}
            <div className="lg:col-span-3">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 md:mb-8">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.15em] text-white/90">
                  Aktivno zaposlujemo
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-[clamp(3rem,10vw,9rem)] leading-[0.85] font-display font-black text-white tracking-tighter uppercase mb-6 md:mb-8">
                Zasluži
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-orange-500 to-rose-500 animate-gradient-x">
                  Brez meja.
                </span>
              </h1>

              {/* Sub + CTA */}
              <p className="text-base md:text-lg lg:text-xl text-zinc-400 max-w-md font-light leading-relaxed mb-6 md:mb-8">
                Iščemo ambiciozne terenske prodajnike. Prevzemi iniciativo,
                razbij fiksni strop provizij in postani obraz najboljšega
                omrežja.
              </p>

              <a
                href="tel:070694881"
                className="group relative inline-flex items-center justify-between gap-4 bg-rose-600 text-white px-6 md:px-8 py-4 md:py-5 rounded-full overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 font-bold uppercase tracking-wider text-sm group-hover:text-black transition-colors duration-500">
                  Pokliči zdaj
                </span>
                <div className="relative z-10 w-8 h-8 rounded-full bg-black/20 flex items-center justify-center group-hover:bg-rose-600 transition-colors duration-500">
                  <Phone className="w-4 h-4 text-white" />
                </div>
              </a>
            </div>

            {/* Right — visual dashboard */}
            <div className="lg:col-span-2 relative mt-4 lg:mt-0">
              <div className="relative w-full max-w-sm mx-auto lg:max-w-none aspect-[4/3.5]">
                {/* Background glow for the card */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-600/20 to-orange-500/10 rounded-3xl blur-[40px] scale-90" />

                {/* Main card */}
                <div className="absolute inset-3 sm:inset-4 bg-[#111]/90 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                        Mesečni zaslužek
                      </span>
                      <div className="flex items-center gap-1 text-emerald-400 text-[10px] sm:text-xs font-bold">
                        <TrendingUp className="w-3 h-3" />
                        +24%
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white tracking-tight">
                      €4,200
                    </div>
                  </div>

                  {/* Bar chart */}
                  <div className="flex items-end gap-[3px] sm:gap-1 h-16 sm:h-20 md:h-24 mt-4">
                    {barHeights.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm sm:rounded-[3px] bg-gradient-to-t from-rose-600/80 to-orange-500/60 transition-all duration-700"
                        style={{
                          height: `${h}%`,
                          animationDelay: `${i * 60}ms`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/5">
                    <div>
                      <div className="text-[10px] text-zinc-600 uppercase tracking-wider">
                        Provizije
                      </div>
                      <div className="text-sm sm:text-base font-bold text-white">
                        €3,450
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-600 uppercase tracking-wider">
                        Bonusi
                      </div>
                      <div className="text-sm sm:text-base font-bold text-white">
                        €750
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-600 uppercase tracking-wider">
                        Rang
                      </div>
                      <div className="text-sm sm:text-base font-bold text-orange-400">
                        Top 10%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating bonus card */}
                <div className="absolute -top-2 -right-2 sm:top-0 sm:right-0 md:-top-3 md:-right-3 bg-gradient-to-br from-rose-600 to-orange-500 rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-[0_8px_30px_rgba(225,29,72,0.3)] z-10">
                  <div className="text-white font-display font-black text-sm sm:text-base">
                    +€850
                  </div>
                  <div className="text-white/70 text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold">
                    Mesečni bonus
                  </div>
                </div>

                {/* Floating success indicator */}
                <div className="absolute -bottom-2 -left-2 sm:bottom-0 sm:left-0 md:-bottom-3 md:-left-3 bg-[#1a1a1a] border border-white/10 rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2 sm:gap-2.5 shadow-2xl z-10">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500/15 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white text-[11px] sm:text-xs font-bold">
                      Cilj dosežen
                    </div>
                    <div className="text-zinc-500 text-[9px] sm:text-[10px]">
                      Ta mesec
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-10 md:mt-14 pt-8 md:pt-10 border-t border-white/10 reveal-stagger">
            {stats.map((s, i) => (
              <div key={i} className="reveal">
                <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
                  {s.value}
                </div>
                <div className="text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.12em] text-zinc-500 mt-1.5 md:mt-2 font-semibold leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS STRIP ── */}
      <div className="border-y border-white/10 py-5 md:py-6 overflow-x-auto no-scrollbar bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 flex items-center gap-6 md:gap-8 md:justify-between whitespace-nowrap opacity-50 uppercase tracking-[0.15em] text-[11px] md:text-xs font-bold text-white min-w-max md:min-w-0">
          <span>Ekskluzivni partner</span>
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-600 text-white flex items-center justify-center rounded-sm text-[10px] md:text-sm font-black">
              T
            </div>
            <span>Telekom Slovenije</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-zinc-700 shrink-0" />
          <span>Optika NEO</span>
          <span className="w-1 h-1 rounded-full bg-zinc-700 shrink-0" />
          <span>5G Omrežje</span>
        </div>
      </div>

      {/* ── BENTO GRID — Zakaj mi ── */}
      <section id="zakaj-mi" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="reveal">
            <h2 className="text-[11px] md:text-sm font-bold uppercase tracking-[0.15em] text-rose-500 mb-3 md:mb-4">
              01 // Zakaj izbrati nas
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter mb-10 md:mb-16 max-w-3xl">
              Tvoj potencial, naša platforma.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-3 md:gap-4 reveal-stagger">
            {/* Card 1 — span 2 */}
            <div className="reveal md:col-span-2 bg-[#111] border border-white/5 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-14 relative overflow-hidden group hover:border-white/15 transition-colors duration-500">
              {/* Decorative orb */}
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-rose-600/10 rounded-full blur-[80px] group-hover:bg-rose-600/20 transition-colors duration-700 pointer-events-none" />
              <div className="absolute top-0 right-0 p-4 md:p-8 text-6xl md:text-8xl font-black text-white/[0.03] group-hover:text-white/5 transition-colors duration-500 font-display">
                01
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 uppercase tracking-tight font-display">
                  Zaslužek
                  <br />
                  <span className="text-rose-500">brez stropa</span>
                </h4>
                <p className="text-sm md:text-base lg:text-lg text-zinc-400 max-w-md leading-relaxed">
                  Vaša plača je odvisna neposredno od vašega truda.
                  Nadpovprečne provizije in mesečni bonusi. Najboljši presegajo
                  managerske plače.
                </p>
              </div>
              <ArrowUpRight className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-6 h-6 md:w-8 md:h-8 text-zinc-700 group-hover:text-rose-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
            </div>

            {/* Card 2 */}
            <div className="reveal bg-[#111] border border-white/5 rounded-2xl md:rounded-3xl p-6 md:p-10 relative overflow-hidden group hover:border-white/15 transition-colors duration-500">
              {/* Decorative orb */}
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-orange-500/10 rounded-full blur-[60px] group-hover:bg-orange-500/20 transition-colors duration-700 pointer-events-none" />
              <div className="absolute top-0 right-0 p-4 md:p-8 text-5xl md:text-6xl font-black text-white/[0.03] group-hover:text-white/5 transition-colors duration-500 font-display">
                02
              </div>
              <div className="h-full flex flex-col justify-end relative z-10 pt-16 md:pt-28">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4 uppercase tracking-tight font-display">
                  Vrhunsko
                  <br />
                  Mentorstvo
                </h4>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                  Nimate izkušenj? V prvem mesecu vas naučimo vsega na terenu,
                  ob rami z najboljšimi.
                </p>
              </div>
            </div>

            {/* Card 3 — full-width gradient */}
            <div className="reveal md:col-span-3 bg-gradient-to-r from-rose-600 to-orange-500 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-14 relative overflow-hidden group">
              {/* Decorative circles */}
              <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 border border-white/10 rounded-full pointer-events-none" />
              <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-24 h-24 md:w-40 md:h-40 border border-white/10 rounded-full pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
                <div>
                  <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 uppercase tracking-tight font-display">
                    Dinamično Delo
                  </h4>
                  <p className="text-white/90 max-w-xl text-sm md:text-base lg:text-lg leading-relaxed">
                    Pozabite na pisarno. Ste na terenu, spoznavate ljudi in
                    samostojno upravljate s časom. Svoboda, ki zahteva
                    odgovornost.
                  </p>
                </div>
                <a
                  href="tel:070694881"
                  className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white rounded-full hover:scale-110 transition-transform duration-300 shrink-0"
                >
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-rose-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KAKO DELUJE (How it works) ── */}
      <section
        id="kako-deluje"
        className="py-20 md:py-32 px-5 md:px-8 bg-[#0a0a0a] relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="reveal mb-10 md:mb-16">
            <h2 className="text-[11px] md:text-sm font-bold uppercase tracking-[0.15em] text-rose-500 mb-3 md:mb-4">
              02 // Tvoja pot
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter max-w-2xl">
              Od prijave do zaslužka v 4 korakih.
            </h3>
          </div>

          {/* Steps — horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar pb-4 -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:overflow-visible reveal-stagger">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="reveal group min-w-[260px] sm:min-w-[280px] md:min-w-0 bg-[#111] border border-white/5 rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden hover:border-white/15 transition-all duration-500 flex flex-col"
              >
                {/* Decorative gradient line at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Step number */}
                <div className="text-5xl md:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white/15 to-white/[0.03] mb-6 md:mb-8 select-none">
                  0{i + 1}
                </div>

                {/* Connector arrow */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-zinc-700 z-10">
                    <ArrowUpRight className="w-5 h-5 rotate-0" />
                  </div>
                )}

                <h4 className="text-lg sm:text-xl font-display font-bold text-white uppercase tracking-tight mb-3">
                  {step.title}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed flex-1">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mid-section CTA */}
          <div className="reveal mt-10 md:mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="flex-1">
              <p className="text-white font-display font-bold text-lg md:text-xl uppercase tracking-tight">
                Pripravljen na prvi korak?
              </p>
              <p className="text-zinc-500 text-sm mt-1">
                Število mest je omejeno. Ne odlašaj.
              </p>
            </div>
            <a
              href="tel:070694881"
              className="group flex items-center gap-3 bg-gradient-to-r from-rose-600 to-orange-500 text-white px-6 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm hover:shadow-[0_4px_24px_rgba(225,29,72,0.4)] transition-shadow duration-300 shrink-0 w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4" />
              Pokliči zdaj
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* ── DA / NE SPLIT ── */}
      <section id="zate" className="border-y border-white/5 relative">
        {/* Decorative background shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="grid lg:grid-cols-2 relative z-10">
          {/* YES */}
          <div className="p-6 py-10 sm:p-8 md:p-12 lg:p-20 xl:p-24 bg-[#0a0a0a]/80 border-b lg:border-b-0 lg:border-r border-white/5 reveal">
            <h2 className="text-[11px] md:text-sm font-bold uppercase tracking-[0.15em] text-emerald-500 mb-8 md:mb-12">
              Iščemo ta profil (DA)
            </h2>
            <ul className="space-y-5 md:space-y-8 reveal-stagger">
              {yesProfile.map((text, i) => (
                <li key={i} className="flex gap-4 md:gap-6 items-start reveal">
                  <div className="mt-0.5 bg-emerald-500/10 text-emerald-500 p-1.5 md:p-2 rounded-full shrink-0">
                    <Check className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium tracking-tight leading-snug">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* NO */}
          <div className="p-6 py-10 sm:p-8 md:p-12 lg:p-20 xl:p-24 bg-[#050505]/80 reveal">
            <h2 className="text-[11px] md:text-sm font-bold uppercase tracking-[0.15em] text-zinc-600 mb-8 md:mb-12">
              To ni zate, če (NE)
            </h2>
            <ul className="space-y-5 md:space-y-8 reveal-stagger">
              {noProfile.map((text, i) => (
                <li
                  key={i}
                  className="flex gap-4 md:gap-6 items-start opacity-50 reveal"
                >
                  <div className="mt-0.5 bg-zinc-800 text-zinc-500 p-1.5 md:p-2 rounded-full shrink-0">
                    <X className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 font-medium tracking-tight leading-snug">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-20 md:py-32 px-5 md:px-8 bg-rose-600 text-white selection:bg-black selection:text-white overflow-hidden relative">
        {/* Decorative background circles */}
        <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-white/[0.08] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[200px] h-[200px] md:w-[350px] md:h-[350px] border border-white/[0.06] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[100px] h-[100px] md:w-[200px] md:h-[200px] border border-white/[0.04] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
            <div className="hidden sm:block text-[6rem] md:text-[10rem] lg:text-[12rem] leading-none font-display font-black opacity-20 md:mt-[-3rem] shrink-0 select-none">
              &ldquo;
            </div>
            <div className="reveal">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-display font-bold uppercase tracking-tighter mb-8 md:mb-12 max-w-5xl leading-[0.9]">
                Pred letom dni nisem imel izkušenj s prodajo. Danes zaslužim 3x
                več kot na prejšnjem delovnem mestu.
              </h3>
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center text-sm md:text-base font-bold shrink-0">
                  MT
                </div>
                <div>
                  <p className="font-bold uppercase tracking-widest text-xs md:text-sm">
                    Milan Tešić
                  </p>
                  <p className="text-white/60 uppercase tracking-widest text-[10px] md:text-xs mt-0.5">
                    Terenski svetovalec · 1 leto z nami
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPECTATIONS ── */}
      <section id="pricakovanja" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-8 md:pb-12 mb-8 md:mb-12 gap-4 reveal">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter">
              Naša
              <br />
              pričakovanja
            </h2>
            <p className="text-rose-500 font-bold uppercase tracking-[0.15em] text-[11px] md:text-sm">
              Postani del ekipe
            </p>
          </div>

          <div className="space-y-0">
            {expectations.map((item, i) => (
              <div
                key={i}
                className="reveal group border-b border-white/5 py-8 md:py-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8 md:hover:px-6 transition-all duration-500 md:hover:bg-white/[0.02]"
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white/10 group-hover:text-rose-500 transition-colors duration-500 shrink-0">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white uppercase tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base lg:text-lg text-zinc-500 max-w-sm md:text-right group-hover:text-zinc-300 transition-colors duration-500 pl-[calc(4rem+1rem)] md:pl-0">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 md:py-32 px-5 md:px-8 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-10 md:gap-16">
          <div className="lg:col-span-4 reveal">
            <h2 className="text-[11px] md:text-sm font-bold uppercase tracking-[0.15em] text-rose-500 mb-3 md:mb-4">
              Pogosta vprašanja
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter mb-4 md:mb-8">
              Brez
              <br />
              skrivnosti.
            </h3>
            <p className="text-sm md:text-lg text-zinc-500 leading-relaxed">
              Vse karte na mizo. Jasni odgovori za jasne odločitve.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-1 md:space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/10 reveal">
                <button
                  className="w-full py-6 md:py-8 flex justify-between items-center text-left group focus:outline-none touch-target"
                  onClick={() => toggleFaq(index)}
                >
                  <span
                    className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-bold uppercase tracking-tight transition-colors duration-300 pr-4 ${
                      openFaq === index
                        ? "text-white"
                        : "text-zinc-400 group-hover:text-white"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                      openFaq === index
                        ? "border-rose-500 text-rose-500 bg-rose-500/10"
                        : "border-white/10 text-white group-hover:border-white/30"
                    }`}
                  >
                    {openFaq === index ? (
                      <Minus className="w-4 h-4 md:w-5 md:h-5" />
                    ) : (
                      <Plus className="w-4 h-4 md:w-5 md:h-5" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index
                      ? "max-h-96 pb-8 md:pb-12 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-rose-600 text-white pt-20 md:pt-32 pb-24 md:pb-12 px-5 md:px-8 flex flex-col justify-between min-h-[60vh] md:min-h-[80vh] relative overflow-hidden">
        {/* Giant bg text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none">
          <h2 className="text-[25vw] md:text-[20vw] font-display font-black opacity-10 leading-none uppercase tracking-tighter">
            SignalPro
          </h2>
        </div>

        {/* Decorative rings */}
        <div className="absolute -bottom-32 -left-32 w-64 h-64 md:w-96 md:h-96 border border-white/[0.08] rounded-full pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-48 h-48 md:w-72 md:h-72 border border-white/[0.06] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-center text-center">
          <div className="reveal">
            <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-display font-black uppercase tracking-tighter mb-8 md:mb-12">
              Ne čakaj.
              <br />
              Ustvari.
            </h3>
            <a
              href="tel:070694881"
              className="group inline-flex items-center justify-center gap-3 md:gap-4 bg-black text-white px-8 md:px-10 py-4 md:py-6 rounded-full text-lg md:text-2xl font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-500 hover:scale-105 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              070 694 881
              <ArrowUpRight className="w-5 h-5 md:w-8 md:h-8 group-hover:rotate-45 transition-transform duration-300" />
            </a>
            <p className="mt-6 md:mt-8 font-medium tracking-[0.15em] uppercase text-[11px] md:text-sm opacity-80">
              Število mest je strogo omejeno.
            </p>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full relative z-10 mt-16 md:mt-32 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 border-t border-black/10 pt-6 md:pt-8 uppercase tracking-[0.12em] text-[10px] md:text-xs font-bold">
          <div className="flex gap-6 md:gap-8">
            <a
              href="#"
              className="hover:text-black transition-colors duration-300"
            >
              Politika zasebnosti
            </a>
            <a
              href="#"
              className="hover:text-black transition-colors duration-300"
            >
              Splošni pogoji
            </a>
          </div>
          <div className="text-white/70">
            &copy; 2026 SIGNALPRO.{" "}
            <span className="opacity-60">Crafted by Niro Digital.</span>
          </div>
        </div>
      </footer>

      {/* ── STICKY MOBILE CTA ── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[65] lg:hidden transition-all duration-500 ease-out ${
          showStickyCta
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 px-5 py-3.5 shadow-[0_-4px_30px_rgba(225,29,72,0.3)]">
          <a
            href="tel:070694881"
            className="flex items-center justify-center gap-3 text-white font-bold uppercase tracking-wider text-sm touch-target"
          >
            <Phone className="w-4 h-4 animate-pulse" />
            <span>Pokliči zdaj — 070 694 881</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ── SOCIAL PROOF NOTIFICATION ── */}
      <div
        className={`fixed z-[65] bottom-[4.5rem] left-3 right-3 sm:left-4 sm:right-auto lg:hidden transition-all duration-500 ease-out ${
          showProof
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl sm:max-w-[300px]">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
            {socialProofData[proofIndex]?.name[0]}
          </div>
          <div className="min-w-0">
            <p className="text-white text-xs font-semibold truncate">
              {socialProofData[proofIndex]?.name} iz{" "}
              {socialProofData[proofIndex]?.city}
            </p>
            <p className="text-zinc-500 text-[10px] leading-tight mt-0.5">
              Se je pridružil/a {socialProofData[proofIndex]?.time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
