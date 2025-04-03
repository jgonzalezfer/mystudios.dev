"use client";
import { brandsContent } from "@/content/sections";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <SectionTitle
          title={brandsContent.title}
          paragraph={brandsContent.description}
          center
        />

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {brandsContent.brands.map((brand) => (
            <div
              key={brand.id}
              className="wow fadeInUp flex h-28 items-center justify-center rounded-md bg-white p-4 shadow-one dark:bg-[#1D2144]"
              data-wow-delay=".1s"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands; 