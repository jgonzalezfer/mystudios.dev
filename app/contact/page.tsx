import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | mystudio.dev - Desarrollo Web y eCommerce en Chile",
  description: "¿Necesitas contactarnos? Visita nuestra Página de Contacto para obtener ayuda personalizada. Descubre cómo mystudio.dev puede impulsar tu presencia en línea.",
  // otros metadatos
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Bienvenido a nuestra Página de Contacto, el lugar donde tus preguntas encuentran respuestas. Estamos aquí para ayudarte en lo que necesites."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
