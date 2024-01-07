import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Los mejores componentes de interfaz de usuario para sitios web modernos",
    paragraph:
      "Al comprender la importancia de la navegación intuitiva, la velocidad de carga, la adaptabilidad móvil y la accesibilidad...",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Joel González",
      image: "/images/blog/jgonzalez.png",
      designation: "Developer",
    },
    tags: ["creative"],
    publishDate: "2023",
    href: "Los-mejores-componentes-de-interfaz-de-usuario-para-sitios-web-modernos",

  },
  {
    id: 2,
    title: "9 formas sencillas de mejorar tus habilidades de diseño",
    paragraph:
      "El diseño web es una disciplina dinámica que requiere habilidades constantemente actualizadas para mantenerse relevante en un mundo digital...",
    image: "/images/blog/9-formas-sencillas.jpg",
    author: {
      name: "Joel González",
      image: "/images/blog/jgonzalez.png",
      designation: "Developer",
    },
    tags: ["computer"],
    publishDate: "2023",
    href: "9-formas-sencillas-de-mejorar-tus-habilidades-de-diseno",

  },
  {
    id: 3,
    title: "Consejos para mejorar rápidamente su velocidad de codificación.",
    paragraph:
      "En el fascinante mundo del desarrollo web, la rapidez con la que puedes traducir ideas en código no solo es una destreza valiosa, sino que también puede marcar la diferencia en la productividad y la calidad del trabajo.",
    image: "/images/blog/Consejos para mejorar rapidame.webp",
    author: {
      name: "Joel González",
      image: "/images/blog/jgonzalez.png",
      designation: "Developer",
    },
    tags: ["design"],
    publishDate: "2023",
    href: "Consejos-para-mejorar-rapidamente-su-velocidad-de-codificacion",

  },
];
export default blogData;
