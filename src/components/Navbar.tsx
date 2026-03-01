"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "O nas", href: "#zakaj" },
  { label: "Kaj nudimo", href: "#nudimo" },
  { label: "Kako začeti", href: "#koraki" },
  { label: "Vprašanja", href: "#faq" },
  { label: "Kontakt", href: "#prijava" },
];

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
              >
                <path d="M2 12h2l3-9 4 18 4-12 3 6h4" />
              </svg>
            </div>
            <span className="font-[var(--font-syne)] text-xl font-bold text-heading tracking-tight">
              Signal<span className="text-primary">Pro</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[15px] font-medium text-body hover:text-heading transition-colors rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#prijava"
              className="cta-btn px-6 py-2.5 bg-primary text-white font-semibold text-sm rounded-full"
            >
              Prijavi se zdaj
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Meni"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-5 h-0.5 bg-heading transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-heading transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-heading transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-border px-6 py-5 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-[15px] font-medium text-body hover:text-heading hover:bg-gray-50 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#prijava"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-3 bg-primary text-white font-semibold text-sm rounded-full"
            >
              Prijavi se zdaj
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
