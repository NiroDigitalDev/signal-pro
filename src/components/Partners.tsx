"use client";

export default function Partners() {
  return (
    <section className="relative z-10 py-10 bg-white border-b border-border-light">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3">
          <p className="text-sm text-muted font-medium">V sodelovanju z</p>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-alt border border-border">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
            <span className="text-sm font-semibold text-heading tracking-wide">
              Telekom Slovenije
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
