"use client";

import { useState } from "react";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    about: "",
    experience: "",
    license: "",
    vehicle: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    setFormData({ ...formData, [target.name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Prijava je bila uspešno poslana! Kontaktirali vas bomo v najkrajšem možnem času.");
  };

  return (
    <section id="prijava" className="relative z-10 py-24 sm:py-28 bg-surface-alt">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-4">
            Prijavi se
          </span>
          <h2 className="font-[var(--font-syne)] text-3xl sm:text-4xl font-bold leading-tight text-heading mb-4">
            Začni svojo pot še danes
          </h2>
          <p className="text-body text-[15px] max-w-lg mx-auto">
            Izpolnite spodnje podatke in kontaktirali vas bomo z nadaljnjimi
            navodili. Polja z zvezdico (*) so obvezna.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-border shadow-sm p-8 sm:p-10"
        >
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-heading mb-2">
                Ime in priimek <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Janez Novak"
                className="w-full px-4 py-3 rounded-xl bg-surface-alt border border-border text-heading placeholder:text-muted text-sm transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-heading mb-2">
                E-pošta <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="janez@email.si"
                className="w-full px-4 py-3 rounded-xl bg-surface-alt border border-border text-heading placeholder:text-muted text-sm transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-heading mb-2">
                Telefonska številka <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+386 XX XXX XXX"
                className="w-full px-4 py-3 rounded-xl bg-surface-alt border border-border text-heading placeholder:text-muted text-sm transition-colors"
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-heading mb-2">
                Vaša starost <span className="text-red-500">*</span>
              </label>
              <select
                name="age"
                required
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-surface-alt border border-border text-heading text-sm transition-colors appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                  backgroundSize: "20px",
                }}
              >
                <option value="">Izberite starostno skupino</option>
                <option value="18-25">18 - 25 let</option>
                <option value="26-35">26 - 35 let</option>
                <option value="36-45">36 - 45 let</option>
                <option value="46+">46+ let</option>
              </select>
            </div>
          </div>

          {/* About */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-heading mb-2">
              Kratek opis sebe <span className="text-red-500">*</span>
            </label>
            <textarea
              name="about"
              required
              rows={4}
              minLength={25}
              maxLength={2000}
              value={formData.about}
              onChange={handleChange}
              placeholder="Opišite svoje izkušnje, motivacijo in zakaj bi bili odlična izbira za našo ekipo..."
              className="w-full px-4 py-3 rounded-xl bg-surface-alt border border-border text-heading placeholder:text-muted text-sm transition-colors resize-none"
            />
          </div>

          {/* Radio groups */}
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {/* Experience */}
            <div>
              <label className="block text-sm font-medium text-heading mb-3">
                Izkušnje v prodaji <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                {["DA", "NE"].map((opt) => (
                  <label
                    key={`exp-${opt}`}
                    className={`flex-1 text-center py-2.5 rounded-xl border cursor-pointer text-sm font-medium transition-all duration-200 ${
                      formData.experience === opt
                        ? "bg-primary-light border-primary/30 text-primary"
                        : "bg-surface-alt border-border text-body hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="experience"
                      value={opt}
                      required
                      onChange={handleChange}
                      className="sr-only"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            {/* License */}
            <div>
              <label className="block text-sm font-medium text-heading mb-3">
                Vozniški izpit <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                {["DA", "NE"].map((opt) => (
                  <label
                    key={`lic-${opt}`}
                    className={`flex-1 text-center py-2.5 rounded-xl border cursor-pointer text-sm font-medium transition-all duration-200 ${
                      formData.license === opt
                        ? "bg-primary-light border-primary/30 text-primary"
                        : "bg-surface-alt border-border text-body hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="license"
                      value={opt}
                      required
                      onChange={handleChange}
                      className="sr-only"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            {/* Vehicle */}
            <div>
              <label className="block text-sm font-medium text-heading mb-3">
                Lastno vozilo <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                {["DA", "NE"].map((opt) => (
                  <label
                    key={`veh-${opt}`}
                    className={`flex-1 text-center py-2.5 rounded-xl border cursor-pointer text-sm font-medium transition-all duration-200 ${
                      formData.vehicle === opt
                        ? "bg-primary-light border-primary/30 text-primary"
                        : "bg-surface-alt border-border text-body hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="vehicle"
                      value={opt}
                      required
                      onChange={handleChange}
                      className="sr-only"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Consent */}
          <div className="mb-8">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="consent"
                required
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary/20 cursor-pointer accent-[#0C8C6D]"
              />
              <span className="text-xs text-body leading-relaxed">
                Strinjam se in dajem svojo osebno privolitev, da SignalPro
                uporabi moje osebne podatke za namene obveščanja o poteku
                iskanja novih sodelavcev, da do preklica hrani in obdeluje moje
                podatke z namenom, da me kontaktira v primeru morebitnih drugih
                projektov. Izjavljam, da sem seznanjen/a z možnostjo, da se
                lahko pri SignalPro seznanim s svojimi osebnimi podatki, jih
                dopolnim, popravim ali zahtevam njihovo blokiranje ali izbris.{" "}
                <span className="text-red-500">*</span>
              </span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="cta-btn w-full sm:w-auto px-10 py-3.5 bg-primary text-white font-semibold text-[15px] rounded-full flex items-center justify-center gap-2 mx-auto"
          >
            <span>Pošlji prijavo</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
