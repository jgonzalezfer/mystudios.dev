"use client";
import { testimonialsContent } from "@/content/sections";
import SectionTitle from "@/components/ui/SectionTitle";
import Icon from "@/components/ui/Icon";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative z-10 py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-[#151934]">
      <div className="container">
        <SectionTitle
          title={testimonialsContent.title}
          paragraph={testimonialsContent.description}
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsContent.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="wow fadeInUp rounded-md bg-white p-8 pt-16 shadow-one dark:bg-[#1D2144] lg:px-5 xl:px-8 relative"
              data-wow-delay=".1s"
            >
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full border-4 border-white dark:border-[#1D2144] shadow-md">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover object-center"
                    quality={100}
                    sizes="100px"
                  />
                </div>
              </div>
              
              <div className="pt-14 text-center mb-5">
                <h3 className="text-lg font-bold text-black dark:text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  {testimonial.role}
                </p>
              </div>
              
              <div className="flex justify-center items-center mb-5">
                <div className="flex space-x-1">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <span key={i} className="text-yellow-500">
                        <Icon name="StarIcon" size={18} />
                      </span>
                    ))}
                </div>
              </div>
              
              <p className="text-center mb-8 border-t border-body-color border-opacity-10 pt-5 text-base font-medium italic text-body-color dark:border-white dark:border-opacity-10 dark:text-white/80">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 