"use client";
import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // La función que nos lleva arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // El botón se muestra después de desplazarse 300 píxeles
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Limpieza del event listener al desmontar el componente
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="volver arriba"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        >
          <Icon name="ChartBarIcon" size={16} className="rotate-180" />
        </div>
      )}
    </div>
  );
} 