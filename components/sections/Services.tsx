"use client";
import { servicesContent } from "@/content/sections";
import SectionTitle from "@/components/ui/SectionTitle";
import Icon from "@/components/ui/Icon";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Fondo de la sección */}
      <div className="absolute inset-0 bg-white dark:bg-[#0e1330]"></div>
      
      {/* Elementos decorativos sutiles */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-primary/5 to-transparent"></div>
      
      {/* Círculos decorativos */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[40px] md:leading-tight">
            ¿Qué hacemos?
          </h2>
          <p className="mx-auto max-w-[800px] text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
            {servicesContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
          {servicesContent.services.map((service, index) => (
            <div
              key={service.id}
              className="wow fadeInUp group relative rounded-xl bg-white dark:bg-[#1D2144] p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-800"
              data-wow-delay=".1s"
            >
              {/* Decoración */}
              <span className="absolute -top-8 -right-8 z-[-1] h-20 w-20 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              
              <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-md bg-primary/10 dark:bg-primary/20">
                <div className="text-primary dark:text-primary/90 group-hover:animate-pulse">
                  <Icon name={service.icon} size={36} />
                </div>
                <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white dark:border-gray-800 bg-primary"></span>
              </div>
              
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="mb-8 text-body-color dark:text-body-color-dark border-b border-gray-200 dark:border-gray-700 pb-8">
                {service.description}
              </p>
              
              <Link 
                href={service.link || "#"} 
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-primary hover:text-white border border-primary/30 dark:border-primary/20 rounded-lg hover:bg-primary dark:hover:bg-primary transition-colors duration-300 font-medium shadow-sm hover:shadow-md"
              >
                Saber más <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 