"use client";
import { testimonialsContent } from "@/content/sections";
import SectionTitle from "@/components/ui/SectionTitle";
import Icon from "@/components/ui/Icon";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative z-10 py-16 md:py-20 lg:py-28">
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
              className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144] lg:px-5 xl:px-8"
              data-wow-delay=".1s"
            >
              <div className="mb-5 flex items-center space-x-4">
                <div className="relative h-[60px] w-[60px] overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-body-color">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base font-medium italic text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 