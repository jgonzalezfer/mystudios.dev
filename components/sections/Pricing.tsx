"use client";
import { pricingContent } from "@/content/sections";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";
import Image from "next/image";

// Mapeo de imágenes para cada servicio
const serviceImages = {
  "1": "/images/newpage/proyect/accionvenus.png", // Sitios Web Corporativos
  "2": "/images/newpage/proyect/storepia.png", // Tiendas Online / Ecommerce
  "3": "/images/newpage/proyect/mycupones-netlifyapp.png" // Desarrollo de Software a Medida
};

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-[#151934]">
      <div className="container">
        <SectionTitle
          title={pricingContent.title}
          paragraph={pricingContent.description}
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {pricingContent.plans.map((plan) => (
            <div
              key={plan.id}
              className={`wow fadeInUp relative rounded-md bg-white overflow-hidden shadow-one dark:bg-[#1D2144] ${
                plan.isPopular
                  ? "z-10 lg:-mx-2 lg:-my-2 border-2 border-primary"
                  : ""
              }`}
              data-wow-delay=".1s"
            >
              {plan.isPopular && (
                <div className="absolute -top-5 -right-5 z-[-1] h-[150px] w-[150px] rounded-full bg-primary/20"></div>
              )}
              {plan.isPopular && (
                <span className="absolute top-0 right-0 -translate-y-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white z-10">
                  Destacado
                </span>
              )}
              
              {/* Imagen del proyecto */}
              <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800">
                <Image 
                  src={serviceImages[plan.id]}
                  alt={`Proyecto de ${plan.name}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white z-10">
                  {plan.name}
                </h3>
              </div>
              
              <div className="px-8 py-8">
                <p className="mb-8 text-body-color dark:text-body-color-dark">
                  {plan.description}
                </p>
                
                <div className="mb-9">
                  <h4 className="mb-4 text-lg font-medium text-black dark:text-white">
                    Incluye
                  </h4>
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="text-base text-body-color dark:text-body-color-dark flex items-start">
                        <span className="mr-2 rounded-full bg-primary bg-opacity-10 text-primary flex-shrink-0 mt-1">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            className="fill-current"
                          >
                            <path d="M7.49996 15.8333C7.33329 15.8333 7.16663 15.7666 7.05829 15.6583L3.72496 12.325C3.51663 12.1166 3.51663 11.775 3.72496 11.5666C3.93329 11.3583 4.27496 11.3583 4.48329 11.5666L7.49996 14.5833L15.5166 6.56664C15.725 6.35831 16.0666 6.35831 16.275 6.56664C16.4833 6.77498 16.4833 7.11664 16.275 7.32498L7.94163 15.6583C7.83329 15.7666 7.66663 15.8333 7.49996 15.8333Z" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full">
                  <Link
                    href={plan.buttonLink}
                    className={`flex w-full items-center justify-center rounded-md bg-primary px-9 py-3 text-base font-medium text-white shadow-submit transition duration-300 ease-in-out hover:bg-opacity-90 ${
                      plan.isPopular ? "bg-primary" : "bg-primary/80"
                    }`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Botón de Solicitar información */}
        <div className="mt-16 text-center">
          <Link 
            href="/#contacto" 
            className="inline-flex items-center justify-center rounded-lg bg-primary py-4 px-10 text-center text-base font-medium text-white hover:bg-opacity-90 transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
            Solicitar información
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 