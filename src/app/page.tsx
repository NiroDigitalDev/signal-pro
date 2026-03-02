"use client";

import React, { useState, useEffect } from 'react';
import {
  Signal, Phone, PhoneCall, Zap, TrendingUp, Headset,
  Wifi, Smartphone, Coins, Handshake, Car, Flame,
  MessageCircle, IdCard, Building2, MapPin, ChevronRight,
  CheckCircle2, XCircle, Users, Award, Briefcase, HelpCircle,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      q: "Ali potrebujem pretekle izkušnje s prodajo?",
      a: "Ne. Izkušnje so plus, niso pa pogoj. Za nas je pomembna tvoja osebnost, komunikativnost in želja po uspehu. Vse prodajne tehnike in znanje o storitvah ti bomo predali skozi naše intenzivno mentorstvo."
    },
    {
      q: "Kaj točno bom prodajal/a?",
      a: "Zastopal in tržil boš najnaprednejše storitve našega partnerja Telekoma Slovenije (optični internet NEO, 5G mobilni paketi, televizija). Ker prodajaš najbolj prepoznavno znamko v Sloveniji, je delo na terenu bistveno lažje."
    },
    {
      q: "Kako je sestavljeno plačilo?",
      a: "Naš sistem je naravnan tako, da nagrajuje rezultate. Prejemaš visoke provizije za vsako uspešno sklenjeno pogodbo in dodatne mesečne bonuse za doseganje ciljev. Zgornje meje zaslužka ni."
    },
    {
      q: "Kje točno poteka delo?",
      a: "Delo poteka pretežno na terenu (direktna prodaja) na vnaprej določenih območjih. Delujemo po celotni Sloveniji, zato se teren pogosto prilagodi tudi tvoji regiji oziroma lokaciji."
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .hero-bg {
          background-color: #050505;
          background-image:
            radial-gradient(circle at 15% 50%, rgba(255, 90, 0, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 85% 30%, rgba(245, 158, 11, 0.08) 0%, transparent 50%);
        }
        .grid-pattern {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-image: linear-gradient(to right, #ffffff, #d1d5db);
        }
        @keyframes ring {
          0%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(15deg); }
          20% { transform: rotate(-10deg); }
          30% { transform: rotate(5deg); }
          40% { transform: rotate(-5deg); }
          50% { transform: rotate(0deg); }
        }
        .animate-ring { animation: ring 2.5s ease infinite; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }

        @keyframes pulse-glow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .7; transform: scale(1.05); }
        }
        .animate-pulse-glow { animation: pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />

      <div className="bg-slate-50 text-slate-800 antialiased selection:bg-[#ff5a00] selection:text-white font-sans overflow-x-hidden">

        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex-shrink-0 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#ff5a00] to-amber-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(255,90,0,0.4)]">
                  <Signal size={24} strokeWidth={2.5} />
                </div>
                <span className="font-black text-2xl tracking-tighter text-white">
                  Signal<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5a00] to-amber-400">Pro</span>
                </span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#prednosti" className="text-slate-400 hover:text-white font-medium transition-colors">Zakaj mi?</a>
                <a href="#komu" className="text-slate-400 hover:text-white font-medium transition-colors">Zate?</a>
                <a href="#ekipa" className="text-slate-400 hover:text-white font-medium transition-colors">Ekipa</a>
                <a href="tel:070694881" className="group bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(255,90,0,0.2)] hover:border-[#ff5a00]/50">
                  <Phone size={18} className="text-[#ff5a00] group-hover:animate-ring" />
                  070 694 881
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero-bg pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff5a00]/20 rounded-full blur-[150px] opacity-40 pointer-events-none animate-pulse-glow"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

              {/* Hero Content */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel text-white text-xs sm:text-sm font-bold mb-8 uppercase tracking-widest border-[#ff5a00]/30 shadow-[0_0_20px_rgba(255,90,0,0.1)]">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5a00] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff5a00]"></span>
                  </span>
                  Aktivno zaposlujemo na terenu
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tighter mb-6">
                  Zasluži brez meja kot <br className="hidden lg:block" />
                  obraz <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5a00] via-amber-400 to-yellow-300 drop-shadow-[0_0_30px_rgba(255,90,0,0.3)]">najboljšega omrežja.</span>
                </h1>

                <p className="text-xl sm:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                  Iščemo ambiciozne terenske prodajnike. <span className="text-white font-semibold">Brez fiksnega stropa za provizije.</span> Vzemi kariero v svoje roke in realiziraj svoj potencial.
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-5 sm:gap-10 mb-12">
                  <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                    <Zap size={20} className="text-[#ff5a00]" />
                    <span className="text-white font-semibold text-base sm:text-lg">Takojšen začetek</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                    <TrendingUp size={20} className="text-[#ff5a00]" />
                    <span className="text-white font-semibold text-base sm:text-lg">Visok donos</span>
                  </div>
                </div>
              </div>

              {/* Call to Action Card */}
              <div className="lg:col-span-5 w-full max-w-md mx-auto relative animate-float">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#ff5a00] via-amber-500 to-transparent rounded-[2.5rem] blur-2xl opacity-40"></div>

                <div className="glass-panel rounded-[2.5rem] p-8 sm:p-10 relative overflow-hidden border border-white/10">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff5a00] to-transparent opacity-70"></div>
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#ff5a00]/30 rounded-full blur-3xl"></div>

                  <div className="text-center mb-8 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#ff5a00]/20 to-amber-500/20 rounded-2xl flex items-center justify-center text-[#ff5a00] mx-auto mb-6 border border-[#ff5a00]/30 shadow-[0_0_30px_rgba(255,90,0,0.2)]">
                      <Headset size={40} />
                    </div>
                    <h2 className="text-3xl font-black text-white mb-3 tracking-tight">Prevzemi iniciativo.</h2>
                    <p className="text-slate-400 font-medium text-sm sm:text-base">Za prijavo in kratek razgovor nas enostavno pokliči. Dosegljivi smo vsak delovnik.</p>
                  </div>

                  <a href="tel:070694881" className="group block w-full bg-gradient-to-r from-[#ff5a00] to-amber-500 hover:from-[#cc4800] hover:to-[#ff5a00] text-white rounded-3xl p-[2px] transition-all duration-300 transform hover:scale-[1.03] shadow-[0_0_50px_rgba(255,90,0,0.4)] hover:shadow-[0_0_70px_rgba(255,90,0,0.6)] relative z-10">
                    <div className="bg-[#050505]/30 backdrop-blur-sm group-hover:bg-transparent rounded-[22px] p-5 sm:p-6 flex flex-col items-center justify-center transition-all duration-300 h-full">
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 text-white/90 drop-shadow-md">Klikni za klic</span>
                      <div className="flex items-center gap-4">
                        <PhoneCall size={36} className="group-hover:animate-ring drop-shadow-lg" />
                        <span className="text-4xl sm:text-5xl font-black tracking-tighter drop-shadow-lg">070 694 881</span>
                      </div>
                    </div>
                  </a>

                  <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-300 bg-black/40 py-2.5 px-5 rounded-full border border-white/5 relative z-10 w-max mx-auto">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="font-medium">Vodja prodaje je dosegljiv</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Brands Marquee */}
        <div className="bg-white py-10 border-b border-slate-200 shadow-sm relative z-20 -mt-2 lg:-mt-8 rounded-t-[2.5rem] sm:rounded-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] text-center mb-8">Ponosno tržimo storitve partnerja</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-24">
              <div className="text-3xl font-black text-[#ff5a00] flex items-center gap-3 transition-transform duration-300 hover:scale-105 opacity-90 hover:opacity-100">
                <span className="font-serif">T</span> Telekom Slovenije
              </div>
              <div className="text-2xl font-bold text-slate-800 flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                <Wifi className="text-[#ff5a00]" size={28} /> Optika NEO
              </div>
              <div className="text-2xl font-bold text-slate-800 flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                <Smartphone className="text-[#ff5a00]" size={28} /> 5G Omrežje
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <section id="prednosti" className="py-28 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff5a00]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-[#ff5a00] font-black tracking-[0.2em] uppercase text-sm mb-4">Tvoj potencial</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Zakaj izbrati ekipo Signal Pro?</h3>
              <p className="text-xl text-slate-600 font-light leading-relaxed">Za vrhunske rezultate ne rabiš fakultete. Rabiš pravo miselnost, trdo kožo in ekipo, ki te neizprosno potisne naprej.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-14 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[#ff5a00]/20 to-transparent"></div>

              {/* Benefit 1 */}
              <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 hover:shadow-[0_20px_40px_rgba(255,90,0,0.1)] transition-all duration-300 border border-slate-100 group hover:-translate-y-3 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl flex items-center justify-center text-[#ff5a00] mb-8 group-hover:scale-110 transition-transform duration-300 shadow-inner border border-orange-100">
                  <Coins size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Zaslužek brez stropa</h4>
                <p className="text-slate-600 leading-relaxed font-medium">Tvoja plača je odvisna neposredno od tvojega truda. Ponujamo nadpovprečne provizije in mesečne bonuse. Najboljši pri nas presegajo managerske plače.</p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 hover:shadow-[0_20px_40px_rgba(255,90,0,0.1)] transition-all duration-300 border border-slate-100 group hover:-translate-y-3 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl flex items-center justify-center text-[#ff5a00] mb-8 group-hover:scale-110 transition-transform duration-300 shadow-inner border border-orange-100">
                  <Handshake size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Vrhunsko mentorstvo</h4>
                <p className="text-slate-600 leading-relaxed font-medium">Nimaš izkušenj s prodajo? Ni problema. V prvem mesecu te naučimo vseh tehnik za uspeh na terenu. Delaš ob rami z najboljšimi prodajalci v državi.</p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 hover:shadow-[0_20px_40px_rgba(255,90,0,0.1)] transition-all duration-300 border border-slate-100 group hover:-translate-y-3 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl flex items-center justify-center text-[#ff5a00] mb-8 group-hover:scale-110 transition-transform duration-300 shadow-inner border border-orange-100">
                  <Car size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Dinamično delo</h4>
                <p className="text-slate-600 leading-relaxed font-medium">Pozabi na dolgčas za pisarniško mizo. Si na terenu, spoznavaš nove ljudi in v veliki meri sam upravljaš s svojim časom. Svoboda, ki je nima vsak.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Komu je pisano na kožo (Polarization Section) */}
        <section id="komu" className="py-24 bg-white border-y border-slate-100 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[#ff5a00] font-black tracking-[0.2em] uppercase text-sm mb-4">Filtriramo najboljše</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Odkrito povedano: To delo ni za vsakogar.</h3>
              <p className="text-xl text-slate-600 font-light leading-relaxed">Terenska prodaja zahteva specifičen karakter. Poglej, ali se prepoznaš v naših vrstah preden nas pokličeš.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {/* The "YES" Profile */}
              <div className="bg-green-50/50 rounded-[2rem] p-8 sm:p-10 border border-green-100 shadow-lg shadow-green-100/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/30 rounded-bl-full -mr-8 -mt-8"></div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">POPOLN FIT (DA)</h4>
                </div>
                <ul className="space-y-5">
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 font-medium">Imaš &quot;lakoto&quot; po uspehu in želiš nadpovprečen zaslužek, ki si ga krojiš sam.</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 font-medium">Si komunikativna, samozavestna oseba, ki hitro naveže stik z neznanci.</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 font-medium">Se ne bojiš terena in zavrnitve (beseda &quot;ne&quot; ti predstavlja izziv, ne ovire).</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 font-medium">Želiš kariero kjer trud dejansko prinese finančno svobodo.</span>
                  </li>
                </ul>
              </div>

              {/* The "NO" Profile */}
              <div className="bg-red-50/50 rounded-[2rem] p-8 sm:p-10 border border-red-100 shadow-lg shadow-red-100/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-200/30 rounded-bl-full -mr-8 -mt-8"></div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600">
                    <XCircle size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">TO NI ZATE (NE)</h4>
                </div>
                <ul className="space-y-5">
                  <li className="flex gap-4">
                    <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 font-medium">Iščeš udobno službo v pisarni kjer se 8 ur skrivaš za ekranom.</span>
                  </li>
                  <li className="flex gap-4">
                    <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 font-medium">Si zadovoljen s povprečno fiksno plačo brez ambicij po višjih zaslužkih.</span>
                  </li>
                  <li className="flex gap-4">
                    <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 font-medium">Ti je hitro neprijetno v komunikaciji z novimi, neznanimi ljudmi.</span>
                  </li>
                  <li className="flex gap-4">
                    <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 font-medium">Hitro obupaš in iščeš izgovore zakaj se &quot;nekaj ne da narediti&quot;.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* High-Impact Testimonial */}
        <section id="ekipa" className="py-32 bg-[#050505] text-white relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff5a00]/10 rounded-full blur-[100px] opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] opacity-70"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              <div className="relative">
                <div className="absolute -top-12 -left-8 md:-left-12 text-[180px] text-white/5 font-serif leading-none">&ldquo;</div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-10 leading-tight tracking-tighter text-gradient relative z-10">
                  &ldquo;Pred letom dni nisem imel izkušenj s prodajo. Danes zaslužim 3x več kot na prejšnjem delovnem mestu.&rdquo;
                </h3>
                <div className="mt-10">
                  <h4 className="font-black text-2xl tracking-tight text-white">Milan Tešić</h4>
                  <p className="text-[#ff5a00] font-bold uppercase tracking-wider text-sm mt-1">Terenski svetovalec, 1 leto v ekipi</p>
                </div>
              </div>

              <div className="lg:pl-16 relative">
                <div className="glass-panel p-10 rounded-[2.5rem]">
                  <h2 className="text-[#ff5a00] font-black tracking-[0.2em] uppercase text-xs mb-4">Postani del ekipe</h2>
                  <h3 className="text-3xl font-black mb-8 text-white tracking-tight">Kaj pričakujemo od tebe?</h3>

                  <ul className="space-y-8">
                    <li className="flex gap-5 items-start">
                      <div className="mt-1 w-10 h-10 rounded-xl bg-[#ff5a00]/20 flex items-center justify-center text-[#ff5a00] flex-shrink-0 border border-[#ff5a00]/30">
                        <Flame size={20} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-white">Željo po dokazovanju</h4>
                        <p className="text-slate-400 font-medium">Ne iščemo ljudi, ki želijo samo preživeti mesec. Iščemo posameznike, ki želijo uspeti in zaslužiti.</p>
                      </div>
                    </li>
                    <li className="flex gap-5 items-start">
                      <div className="mt-1 w-10 h-10 rounded-xl bg-[#ff5a00]/20 flex items-center justify-center text-[#ff5a00] flex-shrink-0 border border-[#ff5a00]/30">
                        <MessageCircle size={20} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-white">Komunikativnost</h4>
                        <p className="text-slate-400 font-medium">Tvoje glavno orodje je tvoj glas. Biti moraš odprt in imeti veselje do dela z ljudmi in prepričevanja.</p>
                      </div>
                    </li>
                    <li className="flex gap-5 items-start">
                      <div className="mt-1 w-10 h-10 rounded-xl bg-[#ff5a00]/20 flex items-center justify-center text-[#ff5a00] flex-shrink-0 border border-[#ff5a00]/30">
                        <IdCard size={20} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-white">Vozniški izpit B kategorije</h4>
                        <p className="text-slate-400 font-medium">Ključen pogoj za mobilnost in nemoteno pokrivanje terena obravnavanih strank.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Process Section (Steps) */}
        <section className="py-24 bg-slate-50 relative border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[#ff5a00] font-black tracking-[0.2em] uppercase text-sm mb-4">Tvoja pot do uspeha</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Kako izgleda postopek?</h3>
              <p className="text-xl text-slate-600 font-light leading-relaxed">Pozabi na dolge motivacijske spise in 5 krogov intervjujev. Cenimo akcijo in učinkovitost.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-slate-200"></div>

              {/* Step 1 */}
              <div className="relative text-center group">
                <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-[#ff5a00] text-3xl font-black shadow-lg shadow-slate-200 border-[4px] border-slate-50 relative z-10 group-hover:scale-110 group-hover:border-[#ff5a00] transition-all duration-300">
                  1
                </div>
                <h4 className="text-xl font-bold text-slate-900 mt-6 mb-3">Hitri klic</h4>
                <p className="text-slate-600 font-medium px-4">Pokličeš nas na številko 070 694 881 za kratek 5-minutni spoznavni pogovor.</p>
              </div>

              {/* Step 2 */}
              <div className="relative text-center group">
                <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-[#ff5a00] text-3xl font-black shadow-lg shadow-slate-200 border-[4px] border-slate-50 relative z-10 group-hover:scale-110 group-hover:border-[#ff5a00] transition-all duration-300">
                  2
                </div>
                <h4 className="text-xl font-bold text-slate-900 mt-6 mb-3">Razgovor v živo</h4>
                <p className="text-slate-600 font-medium px-4">V 48 urah se dobimo na kavi ali v pisarni. Spoznaš ekipo in način dela.</p>
              </div>

              {/* Step 3 */}
              <div className="relative text-center group">
                <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-[#ff5a00] text-3xl font-black shadow-lg shadow-slate-200 border-[4px] border-slate-50 relative z-10 group-hover:scale-110 group-hover:border-[#ff5a00] transition-all duration-300">
                  3
                </div>
                <h4 className="text-xl font-bold text-slate-900 mt-6 mb-3">Intenzivno uvajanje</h4>
                <p className="text-slate-600 font-medium px-4">Greš na teren z najboljšim mentorjem, ki ti v praksi pokaže kako sklepati posle.</p>
              </div>

              {/* Step 4 */}
              <div className="relative text-center group">
                <div className="w-24 h-24 mx-auto bg-[#ff5a00] rounded-full flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-[#ff5a00]/30 border-[4px] border-slate-50 relative z-10 group-hover:scale-110 transition-all duration-300">
                  <Award size={36} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mt-6 mb-3">Tvoj prvi zaslužek</h4>
                <p className="text-slate-600 font-medium px-4">Samostojno delo na terenu in prvi visoki bonusi za uspešno prodajo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#ff5a00] font-black tracking-[0.2em] uppercase text-sm mb-4">Brez skrivnosti</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Pogosta vprašanja</h3>
            </div>

            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 hover:border-[#ff5a00]/30 hover:shadow-md transition-all">
                  <div className="flex gap-4 items-start">
                    <HelpCircle className="text-[#ff5a00] shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-3">{faq.q}</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Massive Final CTA Section */}
        <section className="relative py-28 lg:py-36 bg-[#ff5a00] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.15] mix-blend-multiply"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#cc4800]/50 to-transparent"></div>

          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.05]">Ne čakaj na priložnost.<br />Ustvari jo.</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-14 font-medium max-w-2xl mx-auto">Število mest v naši mentorirani ekipi je strogo omejeno. Pokliči zdaj in si zagotovi razgovor še ta teden.</p>

            <a href="tel:070694881" className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white text-[#ff5a00] hover:bg-slate-50 px-10 py-6 rounded-[2rem] font-black text-3xl md:text-4xl transition-all duration-300 shadow-[0_30px_60px_rgba(0,0,0,0.4)] transform hover:-translate-y-2 hover:scale-105 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_infinite] -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>

              <span className="flex items-center gap-5 relative z-10">
                <PhoneCall size={40} className="group-hover:animate-ring" />
                POKLIČI: 070 694 881
              </span>
            </a>
            <p className="mt-8 text-white/80 font-bold uppercase tracking-widest text-sm">Klikni na gumb in nas pokliči direktno s telefona</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#050505] text-slate-400 py-16 border-t border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff5a00] to-amber-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(255,90,0,0.3)]">
                  <Signal size={28} />
                </div>
                <span className="font-black text-3xl tracking-tighter text-white">Signal<span className="text-[#ff5a00]">Pro</span></span>
              </div>
              <p className="text-sm leading-relaxed font-medium">Ekskluzivni zunanji partner za neposredno prodajo storitev Telekoma Slovenije na terenu. Gradimo najbolj prodorno ekipo v državi.</p>
            </div>
            <div>
              <h4 className="text-white font-black mb-6 text-lg tracking-[0.15em] uppercase">Kontakt za prijavo</h4>
              <ul className="space-y-5 text-sm font-bold">
                <li>
                  <a href="tel:070694881" className="inline-flex items-center gap-3 hover:text-[#ff5a00] transition-colors text-xl text-white bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                    <Phone size={20} className="text-[#ff5a00]" /> 070 694 881
                  </a>
                </li>
                <li className="flex items-start gap-3 px-2 mt-2">
                  <Building2 size={20} className="text-[#ff5a00] mt-1 shrink-0" />
                  <div><span className="text-white">SignalPro d.o.o.</span><br/><span className="text-slate-400 font-normal">Štihova ulica 13<br/>1000 Ljubljana</span></div>
                </li>
                <li className="flex items-center gap-3 px-2">
                  <MapPin size={20} className="text-[#ff5a00] shrink-0" /> Terensko delo - vsa Slovenija
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black mb-6 text-lg tracking-[0.15em] uppercase">Povezave</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="/politika-zasebnosti" className="hover:text-[#ff5a00] transition-colors flex items-center gap-2"><ChevronRight size={16} className="text-[#ff5a00]/50" /> Politika zasebnosti</a></li>
                <li><a href="/splosni-pogoji" className="hover:text-[#ff5a00] transition-colors flex items-center gap-2"><ChevronRight size={16} className="text-[#ff5a00]/50" /> Splošni pogoji</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/5 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-medium">&copy; 2026 SignalPro d.o.o. Vse pravice pridržane.</p>
            <p className="text-xs opacity-50 font-bold uppercase tracking-wider">
              Optimizirano za inbound prijave. | Crafted by <a href="https://www.nirodigital.com" target="_blank" rel="noreferrer" className="text-[#ff5a00] hover:text-white transition-colors">Niro Digital</a>
            </p>
          </div>
        </footer>

        {/* Mobile Sticky CTA Bottom Bar */}
        <div className={`fixed bottom-0 left-0 right-0 p-4 bg-[#050505]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-20px_40px_rgba(0,0,0,0.6)] md:hidden z-50 transform transition-transform duration-300 ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
          <a href="tel:070694881" className="w-full bg-gradient-to-r from-[#ff5a00] to-amber-500 text-white font-black text-xl py-4 rounded-2xl shadow-[0_0_25px_rgba(255,90,0,0.4)] flex justify-center items-center gap-3 active:scale-95 transition-transform">
            <PhoneCall size={24} className="animate-ring" /> POKLIČI ZDAJ
          </a>
        </div>
      </div>
    </>
  );
}
