import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { BuiltFor } from "@/components/BuiltFor";
import { HowItWorks } from "@/components/HowItWorks";
import { Stats } from "@/components/Stats";
import { Inventory } from "@/components/Inventory";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <BuiltFor />
      <HowItWorks />
      <Stats />
      <Inventory />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
