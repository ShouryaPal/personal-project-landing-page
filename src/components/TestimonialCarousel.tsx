"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

const testimonials = [
  {
    image: "/person1.jpg",
    quote:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    name: "Name",
    role: "CEO",
  },
  {
    image: "/person2.jpg",
    quote:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    name: "Name",
    role: "CEO",
  },
  {
    image: "/person1.jpg",
    quote:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    name: "Name",
    role: "CEO",
  },
];

export function TestimonialCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <h2 className="text-6xl font-semibold font-poppins text-center mb-4">
        Testimonials
      </h2>
      <p className="text-center text-xl  leading-8 w-[932px]">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </p>

      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="md:basis-2/3 lg:basis-1/2 transition-all duration-300"
            >
              <div
                className={`bg-[#F8F8F8] p-12 rounded-lg flex item-center gap-8 transition-all duration-300 font-poppins ${
                  index === current
                    ? "opacity-100 scale-100"
                    : "opacity-50 scale-95"
                }`}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={200}
                  height={200}
                  className="rounded-full"
                />
                <div className="space-y-4">
                  <span className="text-lg text-gray-700 mb-4 relative">
                    <strong className="text-2xl text-orange-500 absolute -top-6 -left-4 font-poppins font-bold">
                      “
                    </strong>
                    {testimonial.quote}
                    <span className="text-2xl text-orange-500 absolute -bottom-8 -right-4 font-poppins font-bold">
                      “
                    </span>
                  </span>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>

      <div className="flex justify-center mt-8">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-12 h-2 rounded-full mx-1 cursor-pointer ${
              index === current ? "bg-orange-500" : "bg-gray-300"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
