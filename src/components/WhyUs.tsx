"use client";

const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Sodelovanje z vodilnimi",
    desc: "Sodelujemo z največjimi slovenskimi podjetji za telekomunikacije in zagotavljamo vrhunske prodajne rezultate.",
    color: "primary",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Dolgoletna tradicija",
    desc: "Več kot 10 let izkušenj na področju direktne prodaje. Poznamo trg in vemo, kako doseči rezultate.",
    color: "blue",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Zadovoljstvo strank",
    desc: "Naši agenti dosegajo najvišje ocene zadovoljstva strank v celotni panogi.",
    color: "orange",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Nenehna rast",
    desc: "Podjetje vsako leto raste. Z nami rastete tudi vi — nove priložnosti, novi trgi, nova znanja.",
    color: "orange",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Zanesljivost",
    desc: "Zagotavljamo zanesljivo okolje, pravočasno plačilo in profesionalno podporo na vsakem koraku.",
    color: "primary",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Inovativnost",
    desc: "Z najnovejšimi prodajnimi tehnikami in pristopi zagotavljamo konkurenčno prednost na trgu.",
    color: "blue",
  },
];

const colorMap: Record<string, { bg: string; text: string; hoverBg: string }> = {
  primary: { bg: "bg-primary-light", text: "text-primary", hoverBg: "group-hover:bg-primary" },
  blue: { bg: "bg-blue-light", text: "text-blue", hoverBg: "group-hover:bg-blue" },
  orange: { bg: "bg-orange-light", text: "text-orange", hoverBg: "group-hover:bg-orange" },
};

export default function WhyUs() {
  return (
    <section id="zakaj" className="relative z-10 py-24 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-4">
            Zakaj izbrati nas
          </span>
          <h2 className="font-[var(--font-syne)] text-3xl sm:text-4xl font-bold leading-tight text-heading mb-5">
            Zgradi svojo prihodnost v prodaji
          </h2>
          <p className="text-body text-[17px] leading-relaxed">
            Več kot desetletje izkušenj, preizkušene metode in ekipa, ki verjame
            v vaš uspeh.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => {
            const c = colorMap[r.color];
            return (
              <div
                key={r.title}
                className="clean-card p-7 group"
              >
                <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center ${c.text} mb-5 ${c.hoverBg} group-hover:text-white transition-all duration-300`}>
                  {r.icon}
                </div>
                <h3 className="font-[var(--font-syne)] text-[17px] font-bold text-heading mb-2">
                  {r.title}
                </h3>
                <p className="text-body text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
