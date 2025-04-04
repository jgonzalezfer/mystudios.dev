"use client";
import { testimonialsContent } from "@/content/sections";
import SectionTitle from "@/components/ui/SectionTitle";
import Icon from "@/components/ui/Icon";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// Imágenes de proyectos para cada testimonio
const projectImages = [
  "/images/newpage/proyect/accionvenus.png",
  "/images/newpage/proyect/storepia.png",
  "/images/newpage/proyect/mycupones-netlifyapp.png",
  // Repetimos las imágenes con diferentes índices para tener más variedad visual
  "/images/newpage/proyect/accionvenus.png",
  "/images/newpage/proyect/storepia.png",
  "/images/newpage/proyect/mycupones-netlifyapp.png",
  "/images/newpage/proyect/storepia.png",
  "/images/newpage/proyect/accionvenus.png",
];

// Duplicamos los testimonios para tener más elementos para mostrar
const extendedTestimonials = testimonialsContent.testimonials;

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Función para iniciar el arrastre
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  // Función para finalizar el arrastre
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Función para mover el slider durante el arrastre
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Velocidad de desplazamiento
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Función para desplazar hacia la izquierda
  const scrollLeft25 = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -600,
        behavior: 'smooth'
      });
    }
  };

  // Función para desplazar hacia la derecha
  const scrollRight25 = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 600,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="testimonials" className="relative z-10 py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-[#151934] dark:via-[#1a1f42] dark:to-[#151934]"></div>
      
      {/* Círculos decorativos */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-primary opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-primary opacity-5 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-[700px] mx-auto mb-14">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[40px]">
            {testimonialsContent.title}
          </h2>
          <p className="text-base font-medium leading-relaxed text-body-color dark:text-white/70 md:text-lg">
            {testimonialsContent.description || "Lo que dicen nuestros clientes sobre nosotros"}
          </p>
        </div>

        <div className="relative mt-12">
          {/* Botón izquierda */}
          <button
            onClick={scrollLeft25}
            className="absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-primary w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-primary/90 focus:outline-none transition-all duration-300 transform hover:scale-110"
            aria-label="Desplazar a la izquierda"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slider de testimonios */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto pb-8 px-4 gap-6 scrollbar-hide snap-x scroll-smooth"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[280px] snap-start"
              >
                <div className="bg-white dark:bg-[#1D2144] rounded-xl shadow-lg overflow-hidden h-full transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                  {/* Imagen del testimonio */}
                  <div className="relative h-40 w-full">
                    <Image 
                      src={testimonial.avatar}
                      alt={`Avatar de ${testimonial.name}`}
                      fill
                      className="object-cover"
                      quality={100}
                      sizes="280px"
                      onError={(e) => {
                        // Fallback a imagen de proyecto si hay error al cargar el avatar
                        const target = e.target as HTMLImageElement;
                        target.src = projectImages[index % projectImages.length];
                        console.error(`Error cargando imagen ${testimonial.avatar}`);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    
                    {/* Estrellas superpuestas en la imagen */}
                    <div className="absolute bottom-2 left-2 flex space-x-1">
                      {Array(testimonial.stars || 5)
                        .fill("")
                        .map((_, i) => (
                          <span key={i} className="text-yellow-500">
                            <Icon name="StarIcon" size={14} />
                          </span>
                        ))}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="mb-2">
                      <h3 className="text-sm font-bold text-black dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs text-body-color dark:text-body-color-dark">
                        {testimonial.role}
                      </p>
                    </div>
                    
                    <p className="text-sm font-medium italic text-body-color dark:text-white/80 border-l-2 border-primary pl-2 line-clamp-4">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Botón derecha */}
          <button
            onClick={scrollRight25}
            className="absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-primary w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-primary/90 focus:outline-none transition-all duration-300 transform hover:scale-110"
            aria-label="Desplazar a la derecha"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Indicador de desplazamiento (opcional, puedes mantenerlo o quitarlo) */}
          <div className="text-center mt-6 text-sm text-body-color dark:text-body-color-dark">
            <span className="inline-flex items-center px-3 py-1 bg-white/40 dark:bg-white/10 rounded-full backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Desliza para ver más
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 