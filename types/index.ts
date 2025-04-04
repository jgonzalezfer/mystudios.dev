/**
 * Definiciones de interfaces para uso en toda la aplicación
 */

/**
 * Enlaces para navegación
 */
export interface NavLink {
  href: string;
  label: string;
}

/**
 * Enlaces de redes sociales
 */
export interface SocialLink {
  name: string;
  url: string;
  icon: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube';
}

/**
 * Información de Servicio
 */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

/**
 * Testimonios
 */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

/**
 * Miembros del equipo
 */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socialLinks?: SocialLink[];
}

/**
 * Precios de los planes
 */
export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonLink: string;
}

/**
 * Información de Marca
 */
export interface Brand {
  id: string;
  name: string;
  logo: string;
  url?: string;
}

/**
 * Entradas de blog
 */
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  publishDate: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  slug: string;
} 