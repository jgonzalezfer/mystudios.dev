import { Metadata } from "next";
import { siteConfig } from "./config";

// Componentes de página
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Brands from "@/components/sections/Brands";
import CallToAction from "@/components/sections/CallToAction";
import SpeedSection from "@/components/sections/SpeedSection";

// Componentes compartidos
import ScrollToTop from "@/components/shared/ScrollToTop";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  // otras metadatos
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Brands />
      <About />
      <Testimonials />
      <Pricing />
      <SpeedSection />
      <CallToAction />
    </>
  );
}
