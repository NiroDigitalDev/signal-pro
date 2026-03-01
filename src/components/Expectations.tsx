"use client";

const traits = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: "Delavnost in samoiniciativnost",
    desc: "Iščemo osebe, ki so pripravljene trdo delati in prevzeti iniciativo.",
    bg: "bg-orange-light",
    text: "text-orange",
    hoverBg: "group-hover:bg-orange",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Poslovna žilica",
    desc: "Cenimo kandidate z občutkom za posel in željo po uspehu.",
    bg: "bg-primary-light",
    text: "text-primary",
    hoverBg: "group-hover:bg-primary",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Želja po razvoju",
    desc: "Pomembna je pripravljenost za učenje in osebnostno rast.",
    bg: "bg-blue-light",
    text: "text-blue",
    hoverBg: "group-hover:bg-blue",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Komunikativnost",
    desc: "Sposobnost jasnega in prepričljivega komuniciranja s strankami.",
    bg: "bg-primary-light",
    text: "text-primary",
    hoverBg: "group-hover:bg-primary",
  },
];

export default function Expectations() {
  return (
    <section className="relative z-10 py-24 sm:py-28 bg-surface-alt">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white border border-border overflow-hidden relative shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-surface-alt" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary-light border border-primary-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                  </svg>
                </div>
                <p className="text-muted text-sm">Slika ekipe</p>
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-5 -right-4 sm:right-8 bg-white rounded-xl border border-border shadow-lg shadow-black/[0.05] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-light flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <div className="font-[var(--font-syne)] text-xl font-bold text-heading">98%</div>
                  <div className="text-xs text-muted">Stopnja uspešnosti</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <span className="inline-block text-orange text-sm font-semibold tracking-[0.15em] uppercase mb-4">
              Kaj pričakujemo
            </span>
            <h2 className="font-[var(--font-syne)] text-3xl sm:text-4xl font-bold leading-tight text-heading mb-5">
              Iščemo ambiciozne posameznike
            </h2>
            <p className="text-body text-[15px] leading-relaxed mb-10">
              Če se prepoznate v spodnjih lastnostih, ste prava oseba za nas.
              Pridružite se ekipi, ki verjame v vaš potencial.
            </p>

            {/* Traits */}
            <div className="space-y-4">
              {traits.map((trait) => (
                <div key={trait.title} className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors group">
                  <div className={`shrink-0 w-10 h-10 rounded-lg ${trait.bg} flex items-center justify-center ${trait.text} ${trait.hoverBg} group-hover:text-white transition-all duration-300`}>
                    {trait.icon}
                  </div>
                  <div>
                    <h3 className="font-[var(--font-syne)] text-[15px] font-bold text-heading mb-1">
                      {trait.title}
                    </h3>
                    <p className="text-body text-sm leading-relaxed">
                      {trait.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
