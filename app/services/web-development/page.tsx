import { Metadata } from "next";
import { siteConfig } from "../../config";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: `Desarrollo Web | ${siteConfig.title}`,
  description: "Servicios profesionales de desarrollo web con las últimas tecnologías como React, Next.js y más.",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <div className="pt-40 pb-20">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <h1 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-5xl">
                Desarrollo Web Profesional
              </h1>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Creamos sitios web atractivos, modernos y funcionales utilizando las últimas tecnologías como React, Next.js, TypeScript y más. Nuestras soluciones están diseñadas para ofrecer rendimiento excepcional y experiencias de usuario impactantes.
              </p>
              <div className="flex flex-wrap items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                >
                  Solicitar presupuesto
                </Link>
              </div>
            </div>
            <div className="mt-8 w-full lg:mt-0 lg:w-1/2">
              <div className="relative aspect-[25/24] w-full lg:h-[480px]">
                <Image
                  src="/images/services/web-development.jpg"
                  alt="Desarrollo Web"
                  fill
                  className="rounded-md object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl md:text-4xl">
              Nuestro proceso de desarrollo
            </h2>
            <p className="mx-auto max-w-[800px] text-base font-medium leading-relaxed text-body-color">
              Seguimos un enfoque estructurado y centrado en el cliente para crear soluciones web de alta calidad que cumplan con tus objetivos comerciales.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-md bg-primary text-white">
                <Icon name="MagnifyingGlassIcon" size={32} />
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Análisis y planificación
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Comenzamos entendiendo tus objetivos, analizando a tu competencia y definiendo una estrategia clara para tu proyecto web.
              </p>
            </div>
            <div className="rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-md bg-primary text-white">
                <Icon name="CodeBracketSquareIcon" size={32} />
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Diseño y desarrollo
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Creamos un diseño atractivo y desarrollamos tu sitio web utilizando tecnologías modernas que garantizan rendimiento y escalabilidad.
              </p>
            </div>
            <div className="rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-md bg-primary text-white">
                <Icon name="BoltIcon" size={32} />
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Pruebas y lanzamiento
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Realizamos pruebas exhaustivas para asegurar que todo funcione correctamente y lanzamos tu sitio web preparado para atraer a tu audiencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-light py-16 dark:bg-[#1D2144] md:py-20 lg:py-28">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
              <div className="wow fadeInUp mb-12 rounded-md bg-white p-8 shadow-one dark:bg-[#242B51] lg:mb-0 lg:px-8" data-wow-delay=".15s">
                <h3 className="mb-8 text-2xl font-bold text-black dark:text-white">
                  Tecnologías que utilizamos
                </h3>
                <div className="flex flex-wrap">
                  <div className="mb-4 w-full md:w-1/2">
                    <div className="flex items-center">
                      <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary bg-opacity-10">
                        <span className="text-primary">
                          <Icon name="CodeBracketSquareIcon" size={24} />
                        </span>
                      </div>
                      <p className="text-base font-medium text-body-color">React</p>
                    </div>
                  </div>
                  <div className="mb-4 w-full md:w-1/2">
                    <div className="flex items-center">
                      <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary bg-opacity-10">
                        <span className="text-primary">
                          <Icon name="CodeBracketSquareIcon" size={24} />
                        </span>
                      </div>
                      <p className="text-base font-medium text-body-color">Next.js</p>
                    </div>
                  </div>
                  <div className="mb-4 w-full md:w-1/2">
                    <div className="flex items-center">
                      <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary bg-opacity-10">
                        <span className="text-primary">
                          <Icon name="CodeBracketSquareIcon" size={24} />
                        </span>
                      </div>
                      <p className="text-base font-medium text-body-color">TypeScript</p>
                    </div>
                  </div>
                  <div className="mb-4 w-full md:w-1/2">
                    <div className="flex items-center">
                      <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary bg-opacity-10">
                        <span className="text-primary">
                          <Icon name="CodeBracketSquareIcon" size={24} />
                        </span>
                      </div>
                      <p className="text-base font-medium text-body-color">Tailwind CSS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="pl-0 lg:pl-12">
                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  ¿Por qué elegirnos para tu proyecto web?
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                  En MyStudio.dev nos destacamos por nuestro enfoque centrado en resultados, combinando diseño excepcional con desarrollo técnico de alta calidad para ofrecer soluciones web que impulsan tu negocio.
                </p>
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 dark:bg-primary dark:bg-opacity-10">
                    <Icon name="ShieldCheckIcon" size={40} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black dark:text-white">
                      Seguridad y rendimiento garantizados
                    </h4>
                    <p className="text-base font-medium text-body-color dark:text-body-color-dark">
                      Implementamos las mejores prácticas de seguridad y optimización.
                    </p>
                  </div>
                </div>
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 dark:bg-primary dark:bg-opacity-10">
                    <Icon name="DevicesMobileIcon" size={40} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black dark:text-white">
                      Diseño responsivo en todos los dispositivos
                    </h4>
                    <p className="text-base font-medium text-body-color dark:text-body-color-dark">
                      Tu sitio se verá y funcionará perfectamente en cualquier pantalla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl md:text-4xl">
              ¿Listo para impulsar tu presencia digital?
            </h2>
            <p className="mb-12 text-base font-medium text-body-color dark:text-body-color-dark md:text-lg">
              Contacta con nosotros hoy mismo para discutir tu proyecto y empezar a trabajar en una solución web a medida.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-center text-base font-semibold text-white hover:bg-blue-dark duration-300 ease-in-out"
            >
              Contactar ahora
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 