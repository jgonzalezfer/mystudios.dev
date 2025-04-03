"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import Icon from "@/components/ui/Icon";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-[#151934]">
      <div className="container">
        <SectionTitle
          title="Sobre MyStudio.dev"
          paragraph="Somos un equipo de profesionales apasionados por la tecnología y el diseño, dedicados a crear soluciones digitales de alta calidad."
          center
        />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="wow fadeInUp" data-wow-delay=".15s">
            <div className="rounded-md bg-white p-8 shadow-md dark:bg-[#1D2144]">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white md:text-2xl">
                Nuestra Misión
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                Transformar ideas en soluciones digitales innovadoras que ayuden a nuestros clientes a alcanzar sus objetivos de negocio, utilizando tecnologías de vanguardia y diseño centrado en el usuario.
              </p>

              <div className="mt-8 flex flex-wrap items-center">
                <div className="mb-4 mr-10 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 dark:bg-primary dark:bg-opacity-10">
                  <Icon name="ShieldCheckIcon" size={40} className="text-primary" />
                </div>
                <div className="mb-4 mr-10 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 dark:bg-primary dark:bg-opacity-10">
                  <Icon name="LifebuoyIcon" size={40} className="text-primary" />
                </div>
                <div className="mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 dark:bg-primary dark:bg-opacity-10">
                  <Icon name="CodeBracketSquareIcon" size={40} className="text-primary" />
                </div>
              </div>
            </div>
          </div>

          <div className="wow fadeInUp relative" data-wow-delay=".2s">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <div className="relative aspect-[97/60] w-full">
                <Image
                  src="/images/newpage/makes_dh.jpg"
                  alt="Nuestro equipo trabajando"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-32 h-32 overflow-hidden rounded-lg shadow-md hidden md:block">
              <Image
                src="/images/newpage/world.webp"
                alt="Mundo digital"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            
            <div className="absolute -top-8 -right-8 w-24 h-24 overflow-hidden rounded-lg shadow-md rotate-12 hidden md:block">
              <Image
                src="/images/newpage/settings.webp"
                alt="Configuraciones"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 