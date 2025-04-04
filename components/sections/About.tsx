"use client";
import Icon from "@/components/ui/Icon";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-28 bg-white dark:bg-[#0e1330]">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Título y texto principal - izquierda */}
          <div className="w-full lg:w-5/12 lg:pr-8">
            <h2 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white">
            ¿Por qué elegirnos como tu socio digital?
            </h2>
            <p className="text-base md:text-lg font-medium text-body-color dark:text-white/70 mb-8">
              Haz crecer tu sitio web más rápido utilizando a myStudio como tu base.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white hover:bg-opacity-90"
            >
              Ver Nuestros Planes de Alojamiento
            </Link>
          </div>

          {/* Características - derecha */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {/* Característica 1 */}
              <div className="flex flex-col items-start">
                <div className="mb-5">
                  <div className="flex h-14 w-14 items-center justify-center text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Plataforma fácil de gestionar
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  Nuestro panel de control personalizado es fácil de usar y elimina el dolor de cabeza de administrar tu alojamiento web.
                </p>
              </div>

              {/* Característica 2 */}
              <div className="flex flex-col items-start">
                <div className="mb-5">
                  <div className="flex h-14 w-14 items-center justify-center text-purple-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Herramientas avanzadas para tu negocio
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  Hacemos más que alojar. Nuestro paquete de herramientas incluye todo lo que necesitas para ser exitoso.
                </p>
              </div>

              {/* Característica 3 */}
              <div className="flex flex-col items-start">
                <div className="mb-5">
                  <div className="flex h-14 w-14 items-center justify-center text-teal-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Tecnología rápida y confiable
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  Si tu sitio web es lento o está caído, vas a perder clientes, conversiones y rango en los motores de búsqueda.
                </p>
              </div>

              {/* Característica 4 */}
              <div className="flex flex-col items-start">
                <div className="mb-5">
                  <div className="flex h-14 w-14 items-center justify-center text-orange-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Soporte experto disponible 24/7
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  Nuestros expertos galardonados, con sede en los Estados Unidos, están disponibles para ayudarte cuando no sepas qué hacer - en cualquier momento, día o de noche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 