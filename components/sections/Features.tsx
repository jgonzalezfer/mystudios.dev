"use client";
import { featuresContent } from "@/content/sections";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/ui/FeatureCard";
import Image from "next/image";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-[#1D2144] dark:to-[#121735] relative overflow-hidden">
      <div className="absolute -top-10 right-0 opacity-20 dark:opacity-10">
        <Image 
          src="/images/newpage/world.webp"
          alt="World background"
          width={300}
          height={300}
          className="rounded-full animate-pulse"
        />
      </div>
      
      <div className="absolute -bottom-20 -left-20 opacity-20 dark:opacity-10">
        <Image 
          src="/images/newpage/settings.webp"
          alt="Settings background"
          width={350}
          height={350}
          className="rounded-full animate-pulse"
        />
      </div>
      
      <div className="container relative z-10">
        <SectionTitle
          title={featuresContent.title}
          paragraph={featuresContent.description}
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresContent.features.map((feature, index) => (
            <div key={feature.id} className="relative">
              {index === 1 && (
                <div className="absolute -top-12 -right-12 hidden lg:block">
                  <Image 
                    src="/images/newpage/makes_dh_2.webp"
                    alt="Feature decoration"
                    width={80}
                    height={80}
                    className="rounded-lg shadow-lg opacity-70"
                  />
                </div>
              )}
              <FeatureCard
                title={feature.title}
                paragraph={feature.description}
                icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 