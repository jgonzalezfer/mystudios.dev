/**
 * Colección de funciones de utilidad para el proyecto
 */

/**
 * Formatea una fecha en el formato deseado
 * @param date - Fecha a formatear
 * @param locale - Configuración regional (por defecto: es-CL)
 * @returns Fecha formateada
 */
export function formatDate(date: Date | string, locale: string = 'es-CL'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString(locale, { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

/**
 * Trunca un string a un número específico de caracteres
 * @param text - Texto a truncar
 * @param length - Longitud máxima
 * @returns Texto truncado
 */
export function truncateText(text: string, length: number = 100): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

/**
 * Genera un ID único
 * @returns ID único
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

/**
 * Optimiza una URL de imagen para almacenamiento en caché
 * @param url - URL de la imagen
 * @returns URL optimizada
 */
export function optimizeImageUrl(url: string): string {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `/images/${url}`;
} 