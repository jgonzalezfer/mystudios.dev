# MyStudio.dev - Sitio Web

Este es el repositorio del sitio web oficial de MyStudio.dev, una agencia de desarrollo web y aplicaciones móviles.

## Tecnologías

- [Next.js](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - JavaScript tipado
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [React](https://reactjs.org/) - Biblioteca UI

## Estructura del Proyecto

```
mystudio.dev/
├── app/                    # Carpeta principal de la aplicación Next.js
│   ├── about/              # Página Sobre Nosotros
│   ├── contact/            # Página de Contacto
│   ├── config.ts           # Configuración centralizada
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   └── providers.tsx       # Proveedores de contexto
│
├── components/             # Componentes reutilizables
│   ├── layout/             # Componentes de layout (Header, Footer, etc.)
│   ├── sections/           # Secciones de página (Hero, Features, etc.)
│   ├── shared/             # Componentes compartidos
│   └── ui/                 # Componentes de UI (botones, inputs, etc.)
│
├── content/                # Contenido estático (datos, textos, etc.)
│
├── public/                 # Archivos estáticos
│   ├── images/             # Imágenes
│   └── fonts/              # Fuentes
│
├── styles/                 # Estilos globales
│
├── types/                  # Definiciones de tipos TypeScript
│
└── utils/                  # Funciones y utilidades
    └── helpers.ts          # Funciones auxiliares
```

## Convenciones de Código

- Estructura de componentes:
  - Cada componente en su propio directorio con su propio archivo index.tsx
  - Estilos y lógica relacionados en el mismo directorio
- Nomenclatura:
  - PascalCase para componentes
  - camelCase para funciones y variables
  - kebab-case para archivos CSS

## Configuración Centralizada

La configuración principal del sitio se encuentra en `app/config.ts`, donde se definen:
- Metadatos del sitio (título, descripción, etc.)
- Enlaces de navegación
- Enlaces de redes sociales
- Otras configuraciones globales

## Instalación y Desarrollo

```bash
# Instalar dependencias
npm install
# o
pnpm install

# Iniciar servidor de desarrollo
npm run dev
# o
pnpm dev
```

Visita [http://localhost:3000](http://localhost:3000) para ver el sitio en modo desarrollo.

## Producción

```bash
# Construir para producción
npm run build
# o
pnpm build

# Iniciar servidor de producción
npm start
# o
pnpm start
```

## Licencia

Copyright © 2023-2024 MyStudio.dev. Todos los derechos reservados.
