"use client";

import Chat from "@/components/shared/Chat";
import Breadcrumb from "@/components/layout/Breadcrumb";

const ChatPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Chat"
        description="Conversa con nuestro asistente virtual"
      />

      <section className="pb-20 pt-5">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <Chat />
            
            <div className="mt-8 rounded-lg border bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Sobre nuestro chat
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Este chat te permite comunicarte directamente con nuestro equipo. Puedes hacer preguntas sobre nuestros servicios, solicitar información adicional o compartir tus inquietudes.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Nuestro tiempo de respuesta habitual es de 24 horas en días laborables. Para asuntos urgentes, por favor utiliza nuestra sección de contacto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatPage; 