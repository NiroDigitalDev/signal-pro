"use client";

import React, { useState } from 'react';
import {
  Phone,
  ArrowUpRight,
  Check,
  X,
  Plus,
  Minus,
  Play,
  Zap
} from 'lucide-react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Potrebujem izkušnje?",
      a: "Ne. Izkušnje so plus, niso pa pogoj. Naučili vas bomo vsega – od prvega pozdrava do zaključka prodaje. Iščemo karakter, ne življenjepisa."
    },
    {
      q: "Kaj točno prodajam?",
      a: "Najnaprednejše storitve Telekoma Slovenije (Optika NEO, 5G). Prodajate storitve vodilnega operaterja, kar pomeni, da so vrata pri strankah že napol odprta."
    },
    {
      q: "Kakšno je plačilo?",
      a: "100% variabilno, brez zgornje meje. Provizije + mesečni bonusi za preseganje ciljev. Najboljši presegajo managerske prihodke. Vaš trud = vaš zaslužek."
    },
    {
      q: "Kje poteka delo?",
      a: "Na terenu, po celotni Sloveniji. Območje se prilagodi vaši regiji. Ni pisarne, ni mikromanagementa – ste zunaj, med ljudmi."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-zinc-300 selection:bg-rose-500 selection:text-white overflow-x-hidden">

      {/* NOISE OVERLAY FOR TEXTURE */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* HEADER - Minimalist */}
      <header className="fixed top-0 w-full z-40 px-6 py-6 mix-blend-difference">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tighter uppercase">
            <Zap className="w-5 h-5 text-rose-500 fill-rose-500" />
            SIGNAL<span className="opacity-50">PRO</span>
          </div>

          <a href="tel:070694881" className="group flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-rose-500 hover:text-white transition-all duration-300">
            <span className="relative overflow-hidden h-5">
              <span className="block group-hover:-translate-y-full transition-transform duration-300">Prijava</span>
              <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">070 694 881</span>
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </div>
      </header>

      {/* HERO SECTION - Typography Driven */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 min-h-[90vh] flex flex-col justify-center">
        {/* Glow effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            <span className="text-xs font-medium uppercase tracking-widest text-white">Aktivno zaposlujemo</span>
          </div>

          <h1 className="text-[12vw] leading-[0.85] font-black text-white tracking-tighter uppercase mb-8">
            Zasluži<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-orange-500 to-rose-500 animate-gradient-x">Brez meja.</span>
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <p className="text-xl md:text-2xl text-zinc-400 max-w-lg font-light leading-relaxed">
              Iščemo ambiciozne terenske prodajnike. Prevzemi iniciativo, razbij fiksni strop provizij in postani obraz najboljšega omrežja.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a href="tel:070694881" className="group relative flex items-center justify-between gap-6 bg-rose-600 text-white px-8 py-5 rounded-full overflow-hidden w-full sm:w-auto">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <span className="relative z-10 font-bold uppercase tracking-wider text-sm group-hover:text-black transition-colors duration-500">Klic za razgovor</span>
                <div className="relative z-10 w-8 h-8 rounded-full bg-black/20 flex items-center justify-center group-hover:bg-rose-600 transition-colors duration-500">
                  <Phone className="w-4 h-4 text-white group-hover:animate-bounce" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS STRIP - Minimal Marquee style */}
      <div className="border-y border-white/10 py-6 overflow-hidden bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-8 opacity-50 uppercase tracking-widest text-xs font-bold text-white">
          <span>Ekskluzivni partner</span>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-sm text-sm">T</div>
            <span>Telekom Slovenije</span>
          </div>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
          <span>Optika NEO</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
          <span>5G Omrežje</span>
        </div>
      </div>

      {/* BENTO GRID (Zakaj mi) */}
      <section id="zakaj-mi" className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-rose-500 mb-4">01 // Zakaj izbrati nas</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-16 max-w-3xl">
            Tvoj potencial, naša platforma.
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Box 1 (Span 2) */}
            <div className="md:col-span-2 bg-[#111] border border-white/5 rounded-3xl p-10 md:p-16 relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.03] group-hover:text-white/5 transition-colors duration-500">01</div>
              <div className="relative z-10">
                <h4 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Zaslužek<br/><span className="text-rose-500">brez stropa</span></h4>
                <p className="text-lg text-zinc-400 max-w-md">Vaša plača je odvisna neposredno od vašega truda. Nadpovprečne provizije in mesečni bonusi. Najboljši presegajo managerske plače.</p>
              </div>
              <ArrowUpRight className="absolute bottom-8 right-8 w-8 h-8 text-zinc-600 group-hover:text-rose-500 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500" />
            </div>

            {/* Box 2 */}
            <div className="bg-[#111] border border-white/5 rounded-3xl p-10 relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/[0.03] group-hover:text-white/5 transition-colors duration-500">02</div>
              <div className="h-full flex flex-col justify-end relative z-10 pt-32">
                <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">Vrhunsko<br/>Mentorstvo</h4>
                <p className="text-zinc-400">Nimate izkušenj? V prvem mesecu vas naučimo vsega na terenu, ob rami z najboljšimi.</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="md:col-span-3 bg-gradient-to-r from-rose-600 to-orange-500 rounded-3xl p-10 md:p-16 relative overflow-hidden group">
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <div>
                  <h4 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">Dinamično Delo</h4>
                  <p className="text-white/90 max-w-xl text-lg">Pozabite na pisarno. Ste na terenu, spoznavate ljudi in samostojno upravljate s časom. Svoboda, ki zahteva odgovornost.</p>
                </div>
                <a href="tel:070694881" className="flex items-center justify-center w-16 h-16 bg-white rounded-full hover:scale-110 transition-transform duration-300 shrink-0">
                  <Play className="w-6 h-6 text-rose-600 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPLIT SECTION (Da / Ne) */}
      <section id="zate" className="border-y border-white/5">
        <div className="grid lg:grid-cols-2">
          {/* YES SIDE */}
          <div className="p-12 md:p-24 bg-[#0a0a0a] border-b lg:border-b-0 lg:border-r border-white/5 relative group">
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-500 mb-12">Iščemo ta profil (DA)</h2>
            <ul className="space-y-8 relative z-10">
              {[
                "Lakota po uspehu in želja po nadpovprečnem zaslužku.",
                "Komunikativnost in hitro navezovanje stikov.",
                "Zavrnitev ('ne') predstavlja izziv, ne oviro.",
                "Želja po karieri, kjer trud prinaša finančno svobodo."
              ].map((text, i) => (
                <li key={i} className="flex gap-6 items-start">
                  <div className="mt-1 bg-emerald-500/10 text-emerald-500 p-2 rounded-full"><Check className="w-5 h-5" /></div>
                  <p className="text-xl md:text-2xl text-white font-medium tracking-tight">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* NO SIDE */}
          <div className="p-12 md:p-24 bg-[#050505] relative group">
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-600 mb-12">To ni zate, če (NE)</h2>
            <ul className="space-y-8 relative z-10">
              {[
                "Iščete udobno službo s fiksno, nevariabilno plačo.",
                "Vam je komunikacija z neznanci neprijetna.",
                "Hitro obupate ob prvih ovirah.",
                "Nimate ambicij po višjih zaslužkih."
              ].map((text, i) => (
                <li key={i} className="flex gap-6 items-start opacity-50">
                  <div className="mt-1 bg-zinc-800 text-zinc-500 p-2 rounded-full"><X className="w-5 h-5" /></div>
                  <p className="text-xl md:text-2xl text-zinc-400 font-medium tracking-tight">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TYPOGRAPHIC TESTIMONIAL */}
      <section className="py-32 px-6 bg-rose-600 text-white selection:bg-black selection:text-white">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="text-[12rem] leading-none font-black opacity-20 mt-[-4rem]">&ldquo;</div>
          <div>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter mb-12 max-w-5xl leading-[0.9]">
              Pred letom dni nisem imel izkušenj s prodajo. Danes zaslužim 3x več kot na prejšnjem delovnem mestu.
            </h3>
            <div className="flex items-center gap-6 uppercase tracking-widest text-sm font-bold">
              <span className="w-12 h-px bg-white/50"></span>
              <p>Milan Tešić / <span className="text-black/60">Terenski svetovalec</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* BIG LIST EXPECTATIONS */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end border-b border-white/10 pb-12 mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Naša<br/>pričakovanja</h2>
            <p className="text-rose-500 font-bold uppercase tracking-widest text-sm hidden md:block">Postani del ekipe</p>
          </div>

          <div className="space-y-0">
            {[
              { title: "Želja po dokazovanju", desc: "Ne iščemo ljudi, ki želijo samo preživeti mesec. Iščemo posameznike, ki želijo uspeti in zaslužiti." },
              { title: "Komunikativnost", desc: "Tvoje glavno orodje je tvoj glas. Biti moraš odprt in imeti veselje do dela z ljudmi in prepričevanja." },
              { title: "Vozniški izpit B", desc: "Ključen pogoj za mobilnost in nemoteno pokrivanje terena obravnavanih strank." }
            ].map((item, i) => (
              <div key={i} className="group border-b border-white/5 py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:px-6 transition-all duration-500 hover:bg-white/[0.02]">
                <div className="flex items-center gap-8">
                  <span className="text-5xl md:text-7xl font-black text-white/10 group-hover:text-rose-500 transition-colors duration-500">0{i+1}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">{item.title}</h3>
                </div>
                <p className="text-zinc-500 max-w-sm text-lg md:text-right group-hover:text-zinc-300 transition-colors duration-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MINIMAL FAQ */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-rose-500 mb-4">Pogosta vprašanja</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">Brez<br/>skrivnosti.</h3>
            <p className="text-zinc-500 text-lg">Vse karte na mizo. Jasni odgovori za jasne odločitve.</p>
          </div>

          <div className="lg:col-span-8 space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/10">
                <button
                  className="w-full py-8 flex justify-between items-center text-left group focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`text-2xl md:text-3xl font-bold uppercase tracking-tight transition-colors duration-300 ${openFaq === index ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ml-4 ${openFaq === index ? 'border-rose-500 text-rose-500' : 'border-white/10 text-white group-hover:border-white'}`}>
                    {openFaq === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index ? 'max-h-96 pb-12 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MASSIVE FOOTER */}
      <footer className="bg-rose-600 text-white pt-32 pb-12 px-6 flex flex-col justify-between min-h-[80vh] relative overflow-hidden">
        {/* Giant background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
          <h2 className="text-[20vw] font-black opacity-10 leading-none uppercase tracking-tighter">SignalPro</h2>
        </div>

        <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-center text-center">
          <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12">
            Ne čakaj.<br/>Ustvari.
          </h3>
          <a href="tel:070694881" className="group flex items-center justify-center gap-4 bg-black text-white px-10 py-6 rounded-full text-2xl font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-500 hover:scale-105">
            070 694 881
            <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform duration-300" />
          </a>
          <p className="mt-8 font-medium tracking-widest uppercase text-sm opacity-80">Število mest je strogo omejeno.</p>
        </div>

        <div className="max-w-[1400px] mx-auto w-full relative z-10 mt-32 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-black/10 pt-8 uppercase tracking-widest text-xs font-bold">
          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition-colors">Politika zasebnosti</a>
            <a href="#" className="hover:text-black transition-colors">Splošni pogoji</a>
          </div>
          <div>
            &copy; 2026 SIGNALPRO. <span className="opacity-60">Crafted by Niro Digital.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
