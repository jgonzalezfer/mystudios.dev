"use client";
import Image from "next/image";
import Link from "next/link";

const SpeedSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-blue-50 dark:bg-[#121735] relative overflow-hidden">
      {/* Imágenes decorativas */}
      <div className="absolute bottom-0 right-10 opacity-10 z-0 hidden lg:block">
        <Image 
          src="/images/newpage/settings.webp"
          alt="Settings decoration"
          width={250}
          height={250}
          className="rounded-full"
        />
      </div>
      
      <div className="absolute top-20 left-0 opacity-10 z-0 hidden lg:block">
        <Image 
          src="/images/newpage/world.webp"
          alt="World decoration"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Imagen de plataforma */}
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-gradient-to-br from-purple-500/30 to-blue-500/30 p-6 rounded-3xl relative">
              <div className="bg-white dark:bg-[#1D2144] rounded-2xl shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs py-1 px-3 rounded-bl-lg z-10">
                  👑 Velocidad increíble
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">S</span>
                    </div>
                    <span className="font-medium">StudySphere</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Tus cursos sin finalizar</div>
                        <div className="bg-purple-100 text-purple-700 px-2 rounded text-xs flex items-center">100%</div>
                      </div>
                      
                      <div className="rounded-lg overflow-hidden mb-4">
                        <Image 
                          src="/images/newpage/base-image.webp"
                          alt="Dashboard preview"
                          width={400}
                          height={200}
                          className="w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">⏱️</span>
                        </div>
                        <span className="text-sm font-medium">Tiempo de actividad constante</span>
                      </div>
                      
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-lg p-2 h-20"></div>
                        <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-2 h-20"></div>
                        <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg p-2 h-20"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg flex items-center gap-2">
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">🛡️</span>
                      </div>
                      <span className="text-sm font-medium">Protección avanzada contra amenazas</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg flex-1 p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">B</span>
                        </div>
                        <span className="text-sm">Bunny CDN</span>
                        <div className="ml-auto">
                          <div className="w-10 h-5 bg-blue-500 rounded-full relative">
                            <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 z-[-1]">
                <Image 
                  src="/images/newpage/spinner-background.webp"
                  alt="Spinner background"
                  width={100}
                  height={100}
                  className="rounded-full opacity-80"
                />
              </div>
            </div>
          </div>
          
          {/* Texto */}
          <div className="w-full lg:w-1/2">
            <div className="bg-blue-500 text-white text-xs py-1 px-3 rounded inline-block mb-4">
            Incluido con nuestro Hosting Administrado de WordPress
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
            Rendimiento, seguridad y éxito para tu negocio digital
            </h2>
            
            <p className="text-base md:text-lg text-body-color dark:text-body-color-dark mb-8">
            Entrega tu contenido de forma más rápida, segura y confiable. Gracias a la red global de Bunny CDN, tus visitantes experimentarán tiempos de carga hasta un 40% más rápidos, sin importar su ubicación. 🚀            </p>
            
            <Link 
              href="/#contacto"
              className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-md transition duration-300"
            >
              Conoce Más
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeedSection; 