import { Metadata } from "next";
import { siteConfig } from "./config";

// Componentes de página
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import CallToAction from "@/components/sections/CallToAction";
import SpeedSection from "@/components/sections/SpeedSection";
import Faq from "@/components/sections/Faq";

// Componentes compartidos
import ScrollToTop from "@/components/shared/ScrollToTop";
import SectionDivider from "@/components/ui/SectionDivider";
import ScrollProgress from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  // otras metadatos
};

export default function Home() {
  return (
    <>
      {/* Componente de navegación por scroll */}
      <ScrollProgress />
      
      <Hero />
      
      {/* Separador con forma de onda entre Hero y Features */}
      <SectionDivider variant="angled" backgroundColor="white" />
      <Features />
      
      {/* Separador entre Features y Servicios */}
      <SectionDivider variant="gradient" color="primary" />
      <Services />
      
      {/* Separador con forma de onda antes de Testimonios */}
      <SectionDivider variant="wave" backgroundColor="white" />
      <Testimonials />
      
      {/* Separador entre Testimonios y Pricing */}
      <SectionDivider variant="gradient" color="primary" />
      <Pricing />
      
      {/* Separador entre Pricing y SpeedSection */}
      <SectionDivider variant="gradient" color="primary" />
      <SpeedSection />
      
      {/* Separador con forma de onda antes de FAQ */}
      <SectionDivider variant="wave" backgroundColor="white" />
      <Faq />
      
      {/* Separador antes de CallToAction */}
      <SectionDivider variant="gradient" color="primary" />
      <CallToAction />
    </>
  );
}
