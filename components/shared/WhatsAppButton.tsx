"use client";

import { useState, useEffect } from "react";
import { whatsappConfig } from "@/app/config";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  
  // URL de WhatsApp con el número y mensaje
  const whatsappUrl = `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(whatsappConfig.defaultMessage)}`;
  
  // Posición del botón (izquierda o derecha)
  const position = whatsappConfig.position === 'right' ? 'right-6' : 'left-6';
  
  // Mostrar el botón después del tiempo configurado
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, whatsappConfig.showAfter);
    
    // Mostrar la notificación después del tiempo configurado
    const notificationTimer = setTimeout(() => {
      setShowNotification(true);
    }, whatsappConfig.showAfter + whatsappConfig.showNotificationAfter);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(notificationTimer);
    };
  }, []);
  
  if (!isVisible) {
    return null;
  }
  
  return (
    <div className={`fixed bottom-6 ${position} z-50 flex flex-col ${whatsappConfig.position === 'right' ? 'items-end' : 'items-start'}`}>
      {/* Tooltip con mensaje */}
      {isHovered && (
        <div className="mb-2 rounded-lg bg-white p-3 shadow-lg dark:bg-gray-800">
          <p className="text-sm text-gray-800 dark:text-white">
            {whatsappConfig.tooltipText}
          </p>
          <div className={`absolute -bottom-2 ${position === 'right-6' ? 'right-6' : 'left-6'} h-3 w-3 rotate-45 bg-white dark:bg-gray-800`}></div>
        </div>
      )}
      
      {/* Burbuja de mensaje */}
      {showNotification && !isHovered && (
        <div 
          className="mb-3 flex max-w-xs animate-bounce items-center rounded-full bg-white px-4 py-2 shadow-lg dark:bg-gray-800"
          onClick={() => setShowNotification(false)}
        >
          <p className="text-sm text-gray-800 dark:text-white">
            {whatsappConfig.notificationText}
          </p>
          <button 
            className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={(e) => {
              e.stopPropagation();
              setShowNotification(false);
            }}
            aria-label="Cerrar notificación"
          >
            ×
          </button>
        </div>
      )}
      
      {/* Botón de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:bg-green-600 hover:scale-110"
        aria-label="Contactar por WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setShowNotification(false)}
      >
        <span className="sr-only">WhatsApp</span>
        <svg
          className="h-8 w-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-1.721 0-3.38-.34-4.922-.954l-5.434 1.422 1.453-5.27A10.447 10.447 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
        </svg>
        
        {/* Pequeño indicador de pulso animado */}
        <span className={`absolute ${whatsappConfig.position === 'right' ? 'right-0' : 'left-0'} top-0 h-3 w-3`}>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton; 