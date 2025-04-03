"use client";
import SectionTitle from "@/components/ui/SectionTitle";

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Contáctanos"
          paragraph="¿Listo para transformar tu idea en realidad? Contáctanos hoy y te responderemos a la brevedad."
          center
          width="600px"
        />

        <div className="mx-auto max-w-[600px]">
          <form>
            <div className="mb-8">
              <label
                htmlFor="name"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                Nombre completo
              </label>
              <input
                type="text"
                name="name"
                placeholder="Introduce tu nombre"
                className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="email"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="ejemplo@dominio.com"
                className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="message"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                Mensaje
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Describe tu proyecto"
                className="w-full resize-none rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-medium text-white shadow-submit transition duration-300 ease-in-out hover:bg-primary/90 dark:shadow-submit-dark"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="370"
          height="596"
          viewBox="0 0 370 596"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_88:141"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="370"
            height="596"
          >
            <rect width="370" height="596" rx="2" fill="#1D2144" />
          </mask>
          <g mask="url(#mask0_88:141)">
            <path
              opacity="0.15"
              d="M15.4076 50.9571L54.1541 99.0711L71.4489 35.1605L15.4076 50.9571Z"
              fill="url(#paint0_linear_88:141)"
            />
            <path
              opacity="0.15"
              d="M69.6171 342.35L108.364 390.464L125.658 326.554L69.6171 342.35Z"
              fill="url(#paint1_linear_88:141)"
            />
            <path
              opacity="0.1"
              d="M229.532 405.278L309.935 442.171L286.828 363.172L229.532 405.278Z"
              fill="url(#paint2_linear_88:141)"
            />
            <path
              opacity="0.1"
              d="M-42.1594 319.891L20.4381 344.508L4.92449 278.891L-42.1594 319.891Z"
              fill="url(#paint3_linear_88:141)"
            />
            <path
              opacity="0.1"
              d="M-101.766 -127.195L-12.8505 -116.759L-56.1437 -233.078L-101.766 -127.195Z"
              fill="url(#paint4_linear_88:141)"
            />
            <path
              opacity="0.15"
              d="M15.4076 50.9571L54.1541 99.0711L71.4489 35.1605L15.4076 50.9571Z"
              fill="url(#paint5_linear_88:141)"
            />
            <path
              opacity="0.15"
              d="M69.6171 342.35L108.364 390.464L125.658 326.554L69.6171 342.35Z"
              fill="url(#paint6_linear_88:141)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_88:141"
              x1="13.4497"
              y1="63.5059"
              x2="81.144"
              y2="41.5072"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_88:141"
              x1="67.6592"
              y1="354.899"
              x2="135.353"
              y2="332.9"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_88:141"
              x1="245.947"
              y1="426.276"
              x2="273.643"
              y2="344.332"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_88:141"
              x1="-33.1082"
              y1="335.231"
              x2="7.83276"
              y2="260.647"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_88:141"
              x1="-87.3056"
              y1="-99.8878"
              x2="-72.6513"
              y2="-196.557"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_88:141"
              x1="13.4497"
              y1="63.5059"
              x2="81.144"
              y2="41.5072"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_88:141"
              x1="67.6592"
              y1="354.899"
              x2="135.353"
              y2="332.9"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Contact; 