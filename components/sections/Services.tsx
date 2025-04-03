"use client";
import { servicesContent } from "@/content/sections";
import SectionTitle from "@/components/ui/SectionTitle";
import Icon from "@/components/ui/Icon";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <Image 
          src="/images/newpage/base-image.webp"
          alt="Fondo de servicios"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="absolute -right-20 top-1/4 hidden lg:block opacity-40">
        <Image 
          src="/images/newpage/spinner-background.webp"
          alt="Decoración"
          width={200}
          height={200}
          className="rounded-full animate-pulse"
        />
      </div>
      
      <div className="container relative z-10">
        <SectionTitle
          title={servicesContent.title}
          paragraph={servicesContent.description}
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {servicesContent.services.map((service, index) => (
            <div
              key={service.id}
              className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144] transition-transform duration-300 hover:scale-[1.02]"
              data-wow-delay=".1s"
            >
              {index === 1 && (
                <div className="absolute -top-4 -right-4 hidden lg:block">
                  <Image 
                    src="/images/newpage/hero_ab.webp"
                    alt="Decoración servicios"
                    width={50}
                    height={50}
                    className="rounded-md shadow-md"
                    quality={100}
                  />
                </div>
              )}
              
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-md bg-primary">
                <div className="text-white">
                  <Icon name={service.icon} size={36} />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                {service.title}
              </h3>
              <p className="mb-8 text-body-color dark:text-body-color-dark">
                {service.description}
              </p>
              <Link href={service.link || "#"} className="text-primary hover:text-primary/80">
                Saber más →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 