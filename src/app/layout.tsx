import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SignalPro | Poiščite najboljše prodajne agente v Sloveniji",
  description:
    "SignalPro je specializirano podjetje za door-to-door in telefonsko prodajo. Pridružite se naši ekipi najboljših prodajnih agentov v Sloveniji.",
  keywords: [
    "prodajni agent",
    "prodaja",
    "zaposlitev",
    "Slovenija",
    "door-to-door",
    "telefonska prodaja",
    "SignalPro",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${syne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
