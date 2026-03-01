"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Kakšno je plačilo?",
    a: "Plačilo je konkurenčno in temelji na kombinaciji fiksnega dela ter provizij glede na vaše prodajne rezultate. Najboljši prodajalci pri nas dosegajo nadpovprečne zaslužke v panogi.",
  },
  {
    q: "Kakšen je delovni čas?",
    a: "Delovni čas je fleksibilen in ga prilagodimo vašim potrebam. Delo poteka pretežno v popoldanskih urah, ko so stranke doma, možne pa so tudi dopoldanske ure.",
  },
  {
    q: "Ali potrebujem predhodne izkušnje?",
    a: "Ne, predhodne izkušnje v prodaji niso potrebne. Zagotavljamo celovito usposabljanje in mentorstvo, ki vas pripravi na uspešno delo na terenu.",
  },
  {
    q: "Kakšne so možnosti napredovanja?",
    a: "Nudimo jasno pot napredovanja od prodajnega agenta do vodje ekipe in naprej. Vaš napredek je odvisen od vaših rezultatov in motivacije.",
  },
  {
    q: "Ali potrebujem lastno vozilo?",
    a: "Lastno vozilo je prednost, ni pa pogoj. Za nekatere projekte zagotovimo prevoz ali delo na lokacijah, ki so dostopne z javnim prevozom.",
  },
  {
    q: "Kakšno podporo nudite?",
    a: "Vsak novi član ekipe dobi osebnega mentorja, dostop do prodajnih izobraževanj, stalno podporo vodij ekip in vse potrebne materiale za delo.",
  },
  {
    q: "Kako poteka proces zaposlitve?",
    a: "Proces je preprost: oddajte prijavo, počakajte na odobritev, udeležite se kratkega usposabljanja in začnite prodajati. Celoten postopek traja približno en teden.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative z-10 py-24 sm:py-28 bg-white">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-4">
            Pogosta vprašanja
          </span>
          <h2 className="font-[var(--font-syne)] text-3xl sm:text-4xl font-bold leading-tight text-heading mb-4">
            Odgovori na vaša vprašanja
          </h2>
          <p className="text-body text-[15px]">
            Vse, kar morate vedeti o delu in zaposlitvi pri SignalPro.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-300 ${
                openIndex === i
                  ? "border-primary/20 bg-primary-50/50"
                  : "border-border bg-white hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-[var(--font-syne)] font-semibold text-[15px] text-heading pr-4">
                  {faq.q}
                </span>
                <div
                  className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    openIndex === i
                      ? "rotate-45 bg-primary text-white"
                      : "bg-surface-alt text-muted"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </button>
              <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                <div className="px-6 pb-5 text-body text-sm leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
