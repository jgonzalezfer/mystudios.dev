"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// Configuración de secciones
const sections = [
  { id: "home", label: "Inicio" },
  { id: "features", label: "Características" }, 
  { id: "services", label: "¿Qué hacemos?" },
  { id: "about", label: "Sobre Nosotros" },
  { id: "testimonials", label: "Testimonios" },
  { id: "pricing", label: "Servicios" },
  { id: "faq", label: "FAQ" },
  { id: "contacto", label: "Contacto" }
];

const ScrollProgress: React.FC = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cálculo del progreso de scroll total de la página
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = Math.max(0, Math.min(1, window.scrollY / totalScroll));
      setScrollProgress(currentProgress * 100);

      // Determinar la sección activa
      const viewportHeight = window.innerHeight;
      const viewportMiddle = window.scrollY + viewportHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (viewportMiddle >= sectionTop && viewportMiddle <= sectionTop + sectionHeight) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }

      // Mostrar/ocultar navegación basado en la posición del scroll
      if (window.scrollY > viewportHeight / 2) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDotClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Barra de progreso horizontal */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 dark:bg-gray-900 z-50 opacity-80">
        <div
          className="h-full bg-primary dark:bg-primary/90"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Navegación de puntos lateral */}
      <div 
        className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-40 transition-opacity duration-300 ${
          showNav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleDotClick(section.id)}
              aria-label={`Ir a la sección ${section.label}`}
              className="group relative flex items-center"
            >
              <span className="absolute right-full mr-2 rounded bg-white/90 dark:bg-gray-800/90 px-2 py-1 text-xs text-gray-800 dark:text-white opacity-0 transition-opacity group-hover:opacity-100 w-24 text-right shadow-sm">
                {section.label}
              </span>
              
              <span
                className={`block h-3 w-3 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-primary h-4 w-4 shadow-md shadow-primary/30 dark:shadow-primary/20"
                    : "bg-gray-300 dark:bg-gray-600 group-hover:bg-primary/70"
                }`}
              ></span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollProgress; 