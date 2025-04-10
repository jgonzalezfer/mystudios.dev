"use client";
import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import Icon from "@/components/ui/Icon";

// Tipo para los datos de FAQ
type FaqItem = {
  question: string;
  answer: string;
};

type FaqCategory = {
  title: string;
  icon: string;
  items: FaqItem[];
};

const Faq = () => {
  // Estado para manejar acordeones abiertos
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  // Manejar clic en una pregunta
  const handleToggle = (categoryIndex: number, itemIndex: number) => {
    const itemKey = `${categoryIndex}-${itemIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  // Datos de FAQ
  const faqData: FaqCategory[] = [
    {
      title: "¿Qué incluyen nuestros servicios digitales?",
      icon: "CodeBracketSquareIcon",
      items: [
        {
          question: "¿Qué servicios ofrece MyStudio.dev?",
          answer: "Ofrecemos desarrollo web, aplicaciones móviles, ecommerce, marketing digital y software a medida.",
        },
        {
          question: "¿Cómo puedo saber qué servicio es el adecuado para mi negocio?",
          answer: "Si no estás seguro, podemos asesorarte según tus necesidades y objetivos. Contáctanos para una consulta gratuita.",
        },
        {
          question: "¿Trabajan con tecnologías específicas?",
          answer: "Sí, utilizamos tecnologías modernas como React, Next.js, WooCommerce, Shopify y más para garantizar soluciones innovadoras.",
        },
        {
          question: "¿Ofrecen soluciones a medida?",
          answer: "Sí, desarrollamos software personalizado adaptado a las necesidades de cada negocio.",
        },
        {
          question: "¿Puedo contratar solo el desarrollo web sin mantenimiento?",
          answer: "Sí, aunque recomendamos el soporte continuo para garantizar el mejor rendimiento y seguridad.",
        },
      ],
    },
    {
      title: "¿Cuánto tiempo y dinero necesito para mi proyecto?",
      icon: "ClockIcon",
      items: [
        {
          question: "¿Cuánto tiempo tarda el desarrollo de un sitio web o aplicación?",
          answer: "Depende del proyecto, pero los sitios web corporativos pueden tardar entre 2 y 6 semanas, mientras que las aplicaciones y ecommerce pueden tardar más según su complejidad.",
        },
        {
          question: "¿Cuánto cuesta el desarrollo de una web o aplicación?",
          answer: "Cada proyecto es único, por lo que los costos varían. Podemos ofrecerte una cotización personalizada después de evaluar tus necesidades.",
        },
        {
          question: "¿Ofrecen planes de pago o financiamiento?",
          answer: "Sí, dependiendo del proyecto, podemos ofrecer facilidades de pago.",
        },
      ],
    },
    {
      title: "¿Qué tipo de soporte y mantenimiento ofrecemos?",
      icon: "LifebuoyIcon",
      items: [
        {
          question: "¿Brindan soporte después del lanzamiento del proyecto?",
          answer: "Sí, ofrecemos mantenimiento y soporte técnico para asegurar el buen funcionamiento de tu plataforma.",
        },
        {
          question: "¿Qué incluye el soporte continuo?",
          answer: "Incluye actualizaciones, monitoreo de seguridad, optimización de rendimiento y resolución de problemas técnicos.",
        },
        {
          question: "¿Qué pasa si necesito cambios o mejoras después del lanzamiento?",
          answer: "Podemos realizar modificaciones adicionales con un presupuesto ajustado a tus requerimientos.",
        },
      ],
    },
    {
      title: "¿Cómo potenciamos tu visibilidad con SEO y marketing digital?",
      icon: "ChartBarIcon",
      items: [
        {
          question: "¿Incluyen optimización SEO en los sitios web?",
          answer: "Sí, aplicamos estrategias SEO para mejorar la visibilidad en motores de búsqueda.",
        },
        {
          question: "¿Pueden ayudarme a posicionar mi negocio en Google?",
          answer: "Sí, diseñamos estrategias de marketing digital y SEO para aumentar tu tráfico y conversiones.",
        },
        {
          question: "¿Ofrecen gestión de redes sociales?",
          answer: "Sí, tenemos servicios de marketing digital que incluyen manejo de redes sociales, publicidad y estrategias de contenido.",
        },
      ],
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-[#151934] relative">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 bg-repeat opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A6CF7' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }}
      ></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <SectionTitle
          title="Respuestas a preguntas frecuentes ¿Qué incluyen nuestros servicios digitales?"
          paragraph="Aquí encontrarás respuestas a las dudas más comunes ¿Qué incluyen nuestros servicios digitales? y procesos."
          center
          width="760px"
          mb="60px"
        />

        <div className="max-w-[900px] mx-auto bg-white/50 dark:bg-[#1D2144]/50 p-8 rounded-2xl backdrop-blur-sm">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 last:mb-0">
              <div className="flex items-center mb-6">
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mr-4">
                  <Icon name={category.icon} size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4 ml-0 md:ml-16">
                {category.items.map((item, itemIndex) => {
                  const isOpen = openItems[`${categoryIndex}-${itemIndex}`];
                  return (
                    <div 
                      key={itemIndex} 
                      className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white dark:bg-[#1D2144]"
                    >
                      <button
                        className={`flex w-full justify-between items-center p-4 md:p-5 text-left ${
                          isOpen
                            ? "bg-primary bg-opacity-5"
                            : ""
                        }`}
                        onClick={() => handleToggle(categoryIndex, itemIndex)}
                      >
                        <span className="text-base md:text-lg font-medium text-black dark:text-white flex items-center">
                          <span className="text-primary mr-2">🔹</span> 
                          {item.question}
                        </span>
                        <div className="flex-shrink-0 ml-2">
                          <svg
                            className={`w-5 h-5 text-primary transition-transform duration-200 ${
                              isOpen ? "transform rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "max-h-96 opacity-100 p-4 md:p-5 border-t border-gray-100 dark:border-gray-700"
                            : "max-h-0 opacity-0 pointer-events-none"
                        }`}
                      >
                        <p className="text-base text-body-color dark:text-body-color-dark leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq; 