// Configuración central para el proyecto

// Metadatos del sitio
export const siteConfig = {
  title: "Mystudio.dev: Tu Socio Digital para Sitios Web y Apps con React Native",
  description: "Descubre soluciones digitales innovadoras con mystudio.dev, la principal empresa chilena de desarrollo web y eCommerce. Creamos sitios web cautivadores, tiendas en línea efectivas y aplicaciones móviles potentes con React Native. ¡Impulsa tu presencia en línea con nuestra experiencia local y visión global!",
  url: "https://mystudio.dev",
  ogImage: "/images/og-image.jpg"
};

// Configuración de navegación
export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Nosotros" },
  { href: "/#services", label: "¿Qué hacemos?" },
  { href: "/chat", label: "Habla con nosotros" },
  { href: "/#contacto", label: "Contacto" }
];

// Configuración de WhatsApp
export const whatsappConfig = {
  // Número de WhatsApp (formato internacional sin '+')
  phoneNumber: "56972996030",
  
  // Mensaje predeterminado cuando el usuario hace clic en el botón
  defaultMessage: "Hola, me gustaría obtener más información sobre sus servicios.",
  
  // Mostrar el botón después de X milisegundos (2000 = 2 segundos)
  showAfter: 2000,
  
  // Posición del botón en la pantalla ('left' o 'right')
  position: 'left',
  
  // Texto del tooltip que aparece al hacer hover
  tooltipText: "¡Chatea con nosotros por WhatsApp!",
  
  // Texto de la notificación emergente
  notificationText: "¿Necesitas ayuda? ¡Escríbenos!",
  
  // Tiempo después del cual mostrar la notificación (en milisegundos)
  showNotificationAfter: 5000
};

// Enlaces de redes sociales
export const socialLinks = [
  { name: "Facebook", url: "https://facebook.com/mystudiodev", icon: "facebook" },
  { name: "Twitter", url: "https://twitter.com/mystudiodev", icon: "twitter" },
  { name: "Instagram", url: "https://instagram.com/mystudiodev", icon: "instagram" },
  { name: "LinkedIn", url: "https://linkedin.com/company/mystudiodev", icon: "linkedin" }
]; 