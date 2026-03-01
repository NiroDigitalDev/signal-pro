"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import WhyUs from "@/components/WhyUs";
import WhatWeOffer from "@/components/WhatWeOffer";
import HowItWorks from "@/components/HowItWorks";
import Expectations from "@/components/Expectations";
import FAQ from "@/components/FAQ";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="relative overflow-x-hidden bg-white">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Hero />
      <Partners />
      <WhyUs />
      <WhatWeOffer />
      <HowItWorks />
      <Expectations />
      <FAQ />
      <ApplicationForm />
      <Footer />
    </main>
  );
}
