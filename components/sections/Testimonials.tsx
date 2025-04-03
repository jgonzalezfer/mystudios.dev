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
const extendedTestimonials = [
  ...testimonialsContent.testimonials,
  ...testimonialsContent.testimonials,
  ...testimonialsContent.testimonials,
].slice(0, 15); // Limitamos a 15 elementos (3 veces los testimonios originales o menos)

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
    <section id="testimonials" className="relative z-10 py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-[#151934] overflow-hidden">
      <div className="container">
        <SectionTitle
          title={testimonialsContent.title}
          paragraph={testimonialsContent.description}
          center
        />

        <div className="relative mt-12">
          {/* Botón izquierda */}
          <button
            onClick={scrollLeft25}
            className="absolute -left-3 lg:left-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-primary w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-primary/90 focus:outline-none transition-all duration-300 transform hover:scale-110"
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
                <div className="bg-white dark:bg-[#1D2144] rounded-xl shadow-lg overflow-hidden h-full">
                  {/* Imagen del proyecto */}
                  <div className="relative h-40 w-full">
                    <Image 
                      src={projectImages[index % projectImages.length]}
                      alt={`Proyecto ${testimonial.name}`}
                      fill
                      className="object-cover"
                      quality={100}
                      sizes="280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    
                    {/* Estrellas superpuestas en la imagen */}
                    <div className="absolute bottom-2 left-2 flex space-x-1">
                      {Array(5)
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
            className="absolute -right-3 lg:right-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-primary w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-primary/90 focus:outline-none transition-all duration-300 transform hover:scale-110"
            aria-label="Desplazar a la derecha"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Indicador de desplazamiento (opcional, puedes mantenerlo o quitarlo) */}
          <div className="text-center mt-6 text-sm text-body-color dark:text-body-color-dark">
            <span>← Desliza para ver más →</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 