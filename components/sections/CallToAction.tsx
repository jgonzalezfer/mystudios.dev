"use client";
import Link from "next/link";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section id="contacto" className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-[#1D2144] dark:to-[#121735] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 opacity-20 dark:opacity-10">
        <Image 
          src="/images/newpage/world.webp"
          alt="World background"
          width={300}
          height={300}
          className="rounded-full animate-pulse"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl mb-6">
            ¿Tienes dudas o quieres comenzar tu proyecto?
          </h2>
          
          <p className="text-xl text-body-color dark:text-body-color-dark mb-8">
            Deja que te mostremos cómo mystudio puede hacer crecer tu negocio
          </p>
          
          <p className="text-lg text-body-color dark:text-body-color-dark mb-10">
            Agendemos una llamada y resolvemos todas tus preguntas
          </p>
          
          <div className="flex justify-center">
            <a
              href="#contacto"
              className="rounded-md bg-primary py-4 px-9 text-base font-semibold text-white shadow-md transition duration-300 ease-in-out hover:bg-primary/80 hover:shadow-lg"
            >
              Agenda una demo GRATUITA
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute -right-20 bottom-20 hidden lg:block opacity-30">
        <Image 
          src="/images/newpage/makes_dh_2.webp"
          alt="Decoración"
          width={200}
          height={200}
          className="rounded-lg animate-pulse"
        />
      </div>
    </section>
  );
};

export default CallToAction; 