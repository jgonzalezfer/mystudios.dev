import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us| mystudio.dev - Desarrollo Web y eCommerce en Chile",
  description: "Explora nuestra Página Acerca de Nosotros y descubre cómo mystudio.dev impulsa la innovación en el desarrollo web y móvil. ",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About us"
        description="Acerca de Nosotros, donde la innovación y el compromiso se entrelazan. Estamos aquí para ofrecerte una visión más profunda de nuestra misión y cómo transformamos ideas en experiencias digitales excepcionales."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
