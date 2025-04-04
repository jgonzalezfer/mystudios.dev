"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

// Lista de respuestas predefinidas para simular la interacción
const botResponses = [
  {
    trigger: ["hola", "hello", "saludos", "buenos días", "buenas tardes", "buenas noches"],
    response: "¡Hola! Bienvenido a MyStudios. ¿En qué puedo ayudarte hoy? Ofrecemos servicios de desarrollo web, aplicaciones móviles y eCommerce."
  },
  {
    trigger: ["servicios", "qué hacen", "que hacen", "ofrecen", "servicios"],
    response: "En MyStudios ofrecemos desarrollo de sitios web, aplicaciones móviles con React Native, soluciones de eCommerce, y consultoría tecnológica. ¿Te gustaría más información sobre alguno de estos servicios?"
  },
  {
    trigger: ["precio", "costo", "cuánto cuesta", "cuanto cuesta", "tarifa", "presupuesto"],
    response: "Cada proyecto es único, por lo que nuestros precios varían según tus necesidades específicas. ¿Te gustaría que te contactemos para discutir un presupuesto personalizado?"
  },
  {
    trigger: ["contacto", "contactar", "hablar", "llamar", "teléfono", "email", "correo"],
    response: "Puedes contactarnos a través de nuestro formulario en la sección de contacto, o directamente al correo info@mystudiodev.cls.dev. También puedes solicitar una llamada y nos pondremos en contacto contigo lo antes posible."
  },
  {
    trigger: ["gracias", "thank you", "thanks", "genial", "excelente"],
    response: "¡Gracias a ti por tu interés en MyStudios! Estamos aquí para ayudarte con cualquier consulta adicional que puedas tener."
  },
  {
    trigger: ["react", "react native", "aplicación", "app", "móvil", "mobile"],
    response: "Somos expertos en desarrollo de aplicaciones móviles con React Native. Esta tecnología nos permite crear apps nativas para iOS y Android compartiendo gran parte del código, lo que reduce costos y tiempo de desarrollo."
  },
  {
    trigger: ["web", "sitio web", "página web", "website", "landing"],
    response: "Desarrollamos sitios web atractivos, rápidos y optimizados para SEO utilizando tecnologías modernas como Next.js, React y Tailwind CSS. Nuestras soluciones están enfocadas en ofrecer la mejor experiencia de usuario."
  },
  {
    trigger: ["ecommerce", "tienda", "shop", "vender online", "venta online"],
    response: "Nuestras soluciones de eCommerce están diseñadas para maximizar las ventas y ofrecer una experiencia de compra excepcional. Trabajamos con plataformas como WooCommerce, Shopify y soluciones personalizadas."
  }
];

// Función para encontrar una respuesta adecuada
const findBotResponse = (message: string): string => {
  const lowercaseMessage = message.toLowerCase();
  
  for (const item of botResponses) {
    if (item.trigger.some(trigger => lowercaseMessage.includes(trigger))) {
      return item.response;
    }
  }
  
  return "Gracias por tu mensaje. Un miembro de nuestro equipo revisará tu consulta y te responderemos lo más pronto posible. También puedes contactarnos directamente a través de nuestra sección de contacto.";
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "¡Hola! Soy el asistente virtual de MyStudios. ¿En qué puedo ayudarte hoy?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Función para manejar el envío de mensajes
  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    // Agregar mensaje del usuario
    const userMessage: Message = {
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    
    // Simular "está escribiendo..."
    setIsTyping(true);

    // Simular respuesta con tiempo de respuesta variable
    const responseTime = 1000 + Math.random() * 2000;
    setTimeout(() => {
      const botMessage: Message = {
        text: findBotResponse(userMessage.text),
        isUser: false,
        timestamp: new Date(),
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMessage]);
    }, responseTime);
  };

  // Auto-scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="rounded-lg border bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="border-b p-4 dark:border-gray-700">
        <div className="flex items-center">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-blue-100 dark:bg-blue-900">
            <svg
              className="h-full w-full p-2 text-blue-500 dark:text-blue-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Asistente MyStudios
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              En línea
            </p>
          </div>
        </div>
      </div>
      
      {/* Área de mensajes */}
      <div className="h-80 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 flex ${
              message.isUser ? "justify-end" : "justify-start"
            }`}
          >
            {!message.isUser && (
              <div className="mr-2 h-8 w-8 overflow-hidden rounded-full bg-blue-100 dark:bg-blue-900">
                <svg
                  className="h-full w-full p-1 text-blue-500 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
            <div
              className={`rounded-lg px-4 py-2 max-w-[80%] ${
                message.isUser
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 dark:bg-gray-700 dark:text-white"
              }`}
            >
              <p className="whitespace-pre-line">{message.text}</p>
              <span className="text-xs opacity-70 mt-1 block">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
            {message.isUser && (
              <div className="ml-2 h-8 w-8 overflow-hidden rounded-full bg-blue-500">
                <svg
                  className="h-full w-full p-1 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
        
        {/* Indicador de "está escribiendo" */}
        {isTyping && (
          <div className="mb-4 flex justify-start">
            <div className="mr-2 h-8 w-8 overflow-hidden rounded-full bg-blue-100 dark:bg-blue-900">
              <svg
                className="h-full w-full p-1 text-blue-500 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="rounded-lg px-4 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white">
              <div className="flex space-x-1">
                <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 dark:bg-gray-300"></div>
                <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 dark:bg-gray-300" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 dark:bg-gray-300" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Área de entrada */}
      <div className="border-t p-4 dark:border-gray-700">
        <div className="flex items-center">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Escribe tu mensaje aquí..."
            className="flex-grow rounded-lg border bg-white px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 flex items-center"
          >
            <span>Enviar</span>
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat; 