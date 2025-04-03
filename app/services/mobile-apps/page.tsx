import { Metadata } from "next";
import { siteConfig } from "../../config";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: `Aplicaciones Móviles | ${siteConfig.title}`,
  description: "Desarrollo de aplicaciones móviles nativas y multiplataforma con React Native, creando experiencias excepcionales para usuarios iOS y Android.",
};

export default function MobileAppsPage() {
  return (
    <>
      <div className="pt-40 pb-20">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <h1 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-5xl">
                Desarrollo de Aplicaciones Móviles
              </h1>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Desarrollamos aplicaciones móviles nativas y multiplataforma con React Native que ofrecen experiencias excepcionales. Nuestras soluciones móviles son rápidas, intuitivas y visualmente atractivas.
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
                  src="/images/services/mobile-apps.jpg"
                  alt="Aplicaciones Móviles"
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
              Características de nuestras aplicaciones
            </h2>
            <p className="mx-auto max-w-[800px] text-base font-medium leading-relaxed text-body-color">
              Desarrollamos aplicaciones móviles completas y versátiles con características que aseguran una experiencia de usuario excepcional.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-md bg-primary text-white">
                <Icon name="DevicePhoneMobileIcon" size={32} />
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Diseño intuitivo
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Interfaces de usuario elegantes y fáciles de usar que siguen las últimas tendencias de diseño para iOS y Android.
              </p>
            </div>
            <div className="rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-md bg-primary text-white">
                <Icon name="BoltIcon" size={32} />
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Alto rendimiento
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Aplicaciones optimizadas para un funcionamiento fluido incluso con funcionalidades complejas y grandes volúmenes de datos.
              </p>
            </div>
            <div className="rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-md bg-primary text-white">
                <Icon name="ShieldCheckIcon" size={32} />
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Seguridad avanzada
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Implementamos las mejores prácticas de seguridad para proteger los datos de los usuarios y garantizar la privacidad.
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
                      <p className="text-base font-medium text-body-color">React Native</p>
                    </div>
                  </div>
                  <div className="mb-4 w-full md:w-1/2">
                    <div className="flex items-center">
                      <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary bg-opacity-10">
                        <span className="text-primary">
                          <Icon name="CodeBracketSquareIcon" size={24} />
                        </span>
                      </div>
                      <p className="text-base font-medium text-body-color">Redux</p>
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
                      <p className="text-base font-medium text-body-color">Firebase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="pl-0 lg:pl-12">
                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  Nuestro proceso de desarrollo
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                  Seguimos una metodología ágil para desarrollar aplicaciones móviles de alta calidad, adaptándonos a tus necesidades y ofreciendo resultados excepcionales.
                </p>
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 dark:bg-primary dark:bg-opacity-10">
                    <span className="text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black dark:text-white">
                      Definición y planificación
                    </h4>
                    <p className="text-base font-medium text-body-color dark:text-body-color-dark">
                      Analizamos tus requisitos y diseñamos una estrategia clara.
                    </p>
                  </div>
                </div>
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 dark:bg-primary dark:bg-opacity-10">
                    <span className="text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black dark:text-white">
                      Diseño y desarrollo
                    </h4>
                    <p className="text-base font-medium text-body-color dark:text-body-color-dark">
                      Creamos prototipos y desarrollamos la aplicación con iteraciones rápidas.
                    </p>
                  </div>
                </div>
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 dark:bg-primary dark:bg-opacity-10">
                    <span className="text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black dark:text-white">
                      Pruebas y lanzamiento
                    </h4>
                    <p className="text-base font-medium text-body-color dark:text-body-color-dark">
                      Realizamos pruebas exhaustivas y preparamos el lanzamiento en las tiendas.
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
              ¿Listo para crear tu aplicación móvil?
            </h2>
            <p className="mb-12 text-base font-medium text-body-color dark:text-body-color-dark md:text-lg">
              Contacta con nosotros hoy mismo para discutir tu idea y comenzar a desarrollar una aplicación móvil excepcional.
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