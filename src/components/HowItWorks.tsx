"use client";

const steps = [
  {
    num: "1",
    title: "Oddaj prijavo",
    desc: "Izpolnite kratek prijavni obrazec s svojimi podatki in motivacijo.",
    color: { badge: "bg-primary", iconBg: "bg-primary-light", iconText: "text-primary", hoverBorder: "group-hover:border-primary/30", hoverBg: "group-hover:bg-primary-light" },
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    num: "2",
    title: "Počakaj na odobritev",
    desc: "Pregledamo vašo prijavo in vas kontaktiramo v najkrajšem možnem času.",
    color: { badge: "bg-blue", iconBg: "bg-blue-light", iconText: "text-blue", hoverBorder: "group-hover:border-blue/30", hoverBg: "group-hover:bg-blue-light" },
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: "3",
    title: "Mentorstvo o prodaji",
    desc: "Celovito usposabljanje in mentorstvo od naših izkušenih strokovnjakov.",
    color: { badge: "bg-orange", iconBg: "bg-orange-light", iconText: "text-orange", hoverBorder: "group-hover:border-orange/30", hoverBg: "group-hover:bg-orange-light" },
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    num: "4",
    title: "Začni prodajati",
    desc: "Z vsem znanjem in podporo začnite svojo uspešno kariero na terenu.",
    color: { badge: "bg-primary", iconBg: "bg-primary-light", iconText: "text-primary", hoverBorder: "group-hover:border-primary/30", hoverBg: "group-hover:bg-primary-light" },
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="koraki" className="relative z-10 py-24 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-blue text-sm font-semibold tracking-[0.15em] uppercase mb-4">
            Kako začeti
          </span>
          <h2 className="font-[var(--font-syne)] text-3xl sm:text-4xl font-bold leading-tight text-heading mb-5">
            Preprost proces v štirih korakih
          </h2>
          <p className="text-body text-[17px] leading-relaxed">
            Od prijave do vaše nove karierne priložnosti v prodaji.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((step) => (
            <div key={step.num} className="relative text-center group">
              {/* Icon container */}
              <div className="relative mx-auto mb-7">
                <div className={`w-[104px] h-[104px] mx-auto rounded-2xl bg-surface-alt border border-border flex items-center justify-center ${step.color.iconText} ${step.color.hoverBorder} ${step.color.hoverBg} transition-all duration-300`}>
                  {step.icon}
                </div>
                <div className={`absolute -top-2.5 -right-2.5 w-8 h-8 rounded-full ${step.color.badge} text-white text-sm font-bold flex items-center justify-center shadow-md`}>
                  {step.num}
                </div>
              </div>

              <h3 className="font-[var(--font-syne)] text-[17px] font-bold text-heading mb-2">
                {step.title}
              </h3>
              <p className="text-body text-sm leading-relaxed max-w-[220px] mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
