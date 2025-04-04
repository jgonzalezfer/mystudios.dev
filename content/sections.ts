import { Service, Testimonial, PricingPlan, Brand } from "@/types";

/**
 * Datos de las secciones principales para la página de inicio
 */

// Sección Hero
export const heroContent = {
  title: "Impulsa tu negocio con soluciones digitales personalizadas",
  subtitle: "MyStudio.dev",
  description: "Somos expertos en desarrollo web, aplicaciones móviles y soluciones digitales que impulsan el crecimiento de tu negocio. Creamos experiencias digitales potentes y memorables.",
  buttonText: "Ver Precios",
  buttonLink: "/#services",
  secondaryButtonText: "Saber más",
  secondaryButtonLink: "/about"
};

// Sección de Características
export const featuresContent = {
  title: "Características clave de nuestros servicios digitales",
  subtitle: "¿Por qué elegirnos?",
  description: "Nuestro enfoque único combina diseño centrado en el usuario con tecnología de vanguardia para crear soluciones digitales excepcionales.",
  features: [
    {
      id: "1",
      title: "Diseño web responsive y moderno",
      description: "Creamos sitios web que se adaptan perfectamente a cualquier dispositivo, desde móviles hasta escritorio.",
      icon: "DevicesMobileIcon"
    },
    {
      id: "2",
      title: "Velocidad y rendimiento optimizado",
      description: "Nuestras soluciones están optimizadas para cargar rápidamente y ofrecer una experiencia fluida.",
      icon: "BoltIcon"
    },
    {
      id: "3",
      title: "Escalabilidad para crecer con tu negocio",
      description: "Construimos sistemas que crecen con tu negocio, adaptándose a tus necesidades futuras.",
      icon: "ChartBarIcon"
    },
    {
      id: "4",
      title: "Seguridad web avanzada y protección de datos",
      description: "Implementamos las mejores prácticas de seguridad para proteger tus datos y los de tus clientes.",
      icon: "ShieldCheckIcon"
    },
    {
      id: "5",
      title: "Optimización SEO para atraer más clientes",
      description: "Mejoramos tu visibilidad en los motores de búsqueda para que alcances a más clientes potenciales.",
      icon: "MagnifyingGlassIcon"
    },
    {
      id: "6",
      title: "Soporte técnico continuo y confiable",
      description: "Ofrecemos soporte técnico y mantenimiento para asegurar que tu solución digital funcione sin problemas.",
      icon: "LifebuoyIcon"
    }
  ]
};

// Sección de Servicios
export const servicesContent = {
  title: "Nuestros Servicios",
  subtitle: "Lo que ofrecemos",
  description: "Proporcionamos soluciones digitales completas para ayudar a tu negocio a destacar en el mundo digital.",
  services: [
    {
      id: "1",
      title: "Desarrollo de sitios web profesionales",
      description: "Creamos sitios web atractivos, modernos y funcionales utilizando las últimas tecnologías como React, Next.js y más.",
      icon: "CodeBracketSquareIcon",
      link: "/#faq"
    },
    {
      id: "2",
      title: "Aplicaciones móviles a medida",
      description: "Desarrollamos aplicaciones móviles nativas y multiplataforma con React Native que ofrecen experiencias excepcionales.",
      icon: "DevicePhoneMobileIcon",
      link: "/#faq"
    },
    {
      id: "3",
      title: "Tiendas online (eCommerce) rentables",
      description: "Implementamos tiendas online completas y seguras que maximizan las conversiones y mejoran la experiencia de compra.",
      icon: "ShoppingCartIcon",
      link: "/#faq"
    },
    {
      id: "4",
      title: "Estrategias de marketing digital efectivas",
      description: "Diseñamos estrategias de marketing digital personalizadas para aumentar tu visibilidad online y atraer clientes.",
      icon: "ChartPieIcon",
      link: "/#faq"
    }
  ]
};

// Testimonios
export const testimonialsContent = {
  title: "Testimonios de nuestros clientes satisfechos",
  subtitle: "Testimonios",
  description: "Descubre cómo hemos ayudado a empresas como la tuya a alcanzar sus objetivos digitales.",
  testimonials: [
    {
      id: "1",
      name: "Carlos Rodríguez – “Transformaron mi tienda online”",
      role: "CEO, stduicurso Chile",
      content: "MyStudio.dev transformó nuestra presencia digital. Su enfoque profesional y su experiencia técnica nos permitieron lanzar una plataforma que ha superado todas nuestras expectativas.",
      avatar: "/images/testimonies/CarlosRodríguez.png",
      stars: 5
    },
    {
      id: "2",
      name: "María González – “Aumentamos el tráfico y las ventas”",
      role: "CEO, TechSolutions Chile",
      content: "llevó nuestra tienda online al siguiente nivel. Su experiencia técnica y enfoque estratégico nos permitieron ofrecer una experiencia de compra fluida y atractiva para nuestros clientes.",
      avatar: "/images/testimonies/MaríaGonzález.png",
      stars: 5
    },
    {
      id: "3",
      name: "Juan Pérez – “Excelente atención y resultados”",
      role: "Masvelaslindas",
      content: "MyStudio.dev revolucionó nuestra tienda online de velas aromáticas. Gracias a su experiencia técnica y enfoque profesional, ahora ofrecemos una plataforma intuitiva y atractiva que ha superado todas nuestras expectativas.",
      avatar: "/images/testimonies/JuanPérez.png",
      stars: 5
    },
    {
      id: "4",
      name: "Sebastián González – “Mi proyecto despegó gracias a ellos”",
      role: "CEO, letreros pintados",
      content: "MyStudio.dev transformó nuestra tienda online de Letreros Pintados. Su enfoque profesional y experiencia técnica nos permitieron crear una plataforma efectiva para mostrar y vender nuestros productos, superando todas nuestras expectativas.",
      avatar: "/images/testimonies/SebastiáGonzalez.png",
      stars: 5
    },
    {
      id: "5",
      name: "Camila Fernández – “Me ayudaron desde cero”",
      role: "CEO, storepia Chile",
      content: "MyStudio.dev transformó nuestra tienda online de ropa en EE. UU. Gracias a su experiencia técnica y enfoque profesional, pudimos crear una plataforma intuitiva y atractiva que ha superado nuestras expectativas en cada detalle",
      avatar: "/images/testimonies/CamilFernandez.png",
    }
  ]
};

// Precios
export const pricingContent = {
  title: "Lo que incluye cada uno de nuestros servicios",
  subtitle: "Nuestras soluciones para tu negocio",
  description: "Desarrollamos soluciones digitales profesionales que impulsan el crecimiento de tu negocio.",
  plans: [
    {
      id: "1",
      name: "Sitios web corporativos para empresas modernas",
      price: "",
      description: "Diseños personalizados, rápidos y optimizados para destacar tu marca en línea. Incluye formularios adaptados para desktop y mobile, ideales para captar clientes potenciales.",
      features: [
        "Diseño personalizado y único",
        "Optimización para móviles",
        "Velocidad y rendimiento superior",
        "Formularios de captación de leads",
        "Panel de administración sencillo"
      ],
      isPopular: false,
      buttonText: "Más información",
      buttonLink: "/#contacto"
    },
    {
      id: "2",
      name: "Tiendas online optimizadas para vender más",
      price: "",
      description: "Crea tu tienda digital con plataformas optimizadas para conversiones y pagos seguros. Trabajamos con Shopify, WooCommerce y más. Te asesoramos en cada paso.",
      features: [
        "Plataformas de comercio electrónico seguras",
        "Optimización para conversiones",
        "Integración con métodos de pago",
        "Gestión de productos e inventario",
        "Asesoramiento completo"
      ],
      isPopular: true,
      buttonText: "Crear mi tienda",
      buttonLink: "/#contacto"
    },
    {
      id: "3",
      name: "Software personalizado según tus necesidades",
      price: "",
      description: "Soluciones personalizadas en React, aplicaciones móviles y software de escritorio diseñados a la medida de tu negocio.",
      features: [
        "Aplicaciones web con React",
        "Desarrollo de apps móviles",
        "Software de escritorio personalizado",
        "Integración con sistemas existentes",
        "Soluciones adaptadas a tu negocio"
      ],
      isPopular: false,
      buttonText: "Consultar",
      buttonLink: "/#contacto"
    }
  ]
};

// Marcas
export const brandsContent = {
  title: "Empresas que confían en nosotros",
  subtitle: "Nuestros Clientes",
  description: "Hemos trabajado con diversas empresas que confían en nuestra experiencia y calidad.",
  brands: [
    {
      id: "1",
      name: "TechSolutions",
      logo: "/images/brands/brand-1.svg"
    },
    {
      id: "2",
      name: "EcoVida",
      logo: "/images/brands/brand-2.svg"
    },
    {
      id: "3",
      name: "Innova",
      logo: "/images/brands/brand-3.svg"
    },
    {
      id: "4",
      name: "FuturoFinanzas",
      logo: "/images/brands/brand-4.svg"
    },
    {
      id: "5",
      name: "CreativeLab",
      logo: "/images/brands/brand-5.svg"
    }
  ]
}; 