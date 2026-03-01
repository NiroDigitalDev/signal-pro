"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-[72px] overflow-hidden bg-surface-alt">
      {/* Subtle background shapes */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="animate-float-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light border border-primary-100 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary-700 text-sm font-medium">
                #1 platforma za prodajne agente
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-float-up delay-100 font-[var(--font-syne)] text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-heading mb-6">
              Tvoja nova
              <br />
              <span className="gradient-text">karierna pot</span>
              <br />
              se začne tukaj.
            </h1>

            {/* Subheadline */}
            <p className="animate-float-up delay-200 text-lg text-body leading-relaxed mb-10 max-w-lg">
              Pridružite se ekipi najboljših prodajnih agentov. Specializirani
              smo za{" "}
              <span className="text-heading font-medium">door-to-door</span> in{" "}
              <span className="text-heading font-medium">telefonsko prodajo</span>{" "}
              z najboljšimi rezultati na trgu.
            </p>

            {/* CTA Buttons */}
            <div className="animate-float-up delay-300 flex flex-col sm:flex-row items-start gap-3 mb-14">
              <a
                href="#prijava"
                className="cta-btn px-8 py-3.5 bg-primary text-white font-semibold text-[15px] rounded-full flex items-center gap-2"
              >
                <span>Prijavi se zdaj</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#nudimo"
                className="cta-btn-secondary px-8 py-3.5 border border-border text-heading font-semibold text-[15px] rounded-full flex items-center gap-2"
              >
                <span>Več informacij</span>
                <svg className="w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="animate-float-up delay-400 flex flex-wrap gap-8 sm:gap-12">
              {[
                { value: "500+", label: "Aktivnih agentov", color: "text-primary" },
                { value: "10+", label: "Let izkušenj", color: "text-blue" },
                { value: "98%", label: "Zadovoljstvo", color: "text-orange" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className={`font-[var(--font-syne)] text-3xl font-extrabold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero image placeholder */}
          <div className="animate-float-up delay-300 relative hidden lg:block">
            <div className="aspect-[4/5] rounded-3xl bg-white border border-border overflow-hidden shadow-lg shadow-black/[0.04]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-primary-light border border-primary-100 flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                  </svg>
                </div>
                <p className="text-muted text-sm">Slika prodajne ekipe</p>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl border border-border shadow-lg shadow-black/[0.06] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <div className="font-[var(--font-syne)] text-xl font-bold text-heading">98%</div>
                  <div className="text-xs text-muted">Stopnja uspešnosti</div>
                </div>
              </div>
            </div>

            {/* Floating card top-right */}
            <div className="absolute -top-4 -right-6 bg-white rounded-2xl border border-border shadow-lg shadow-black/[0.06] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-light flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-[var(--font-syne)] text-xl font-bold text-heading">50+</div>
                  <div className="text-xs text-muted">Partnerjev</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
