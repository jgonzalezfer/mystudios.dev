import { Metadata } from "next";
import { siteConfig } from "../config";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: `Servicios | ${siteConfig.title}`,
  description: "Explora nuestros servicios profesionales de desarrollo web, móvil y consultoría tecnológica.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-40 pb-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
              Nuestros Servicios
            </h1>
            <p className="text-body-color dark:text-body-color-dark text-base md:text-lg">
              Ofrecemos soluciones digitales completas para ayudar a tu empresa a crecer y destacar en el mundo digital.
            </p>
          </div>
        </div>
      </div>
      <Services />
    </>
  );
} 