"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Jika ingin menggunakan efek fade
import Image from "next/image";

const contents = [
  {
    image: "/sectioncarrousel/Image-1.png",
    alt: "Slide 1",
  },
  {
    image: "/sectioncarrousel/Image-2.png",
    alt: "Slide 2",
  },
  {
    image: "/sectioncarrousel/Image-3.png",
    alt: "Slide 3",
  },
  {
    image: "/sectioncarrousel/Image-4.png",
    alt: "Slide 4",
  },
  {
    image: "/sectioncarrousel/Image-2.png",
    alt: "Slide 5",
  },
  {
    image: "/sectioncarrousel/Image-1.png",
    alt: "Slide 6",
  },
];

const Carousel = () => {
  return (
    <section className="w-full mx-auto p-4 mb-10">
      <Swiper
        spaceBetween={12}
        breakpoints={{
          0: {
            slidesPerView: 2.5, // Show 2 slides
          },
          640: {
            slidesPerView: 3.5, // Show 3 slides
          },
        }}
        loop
        freeMode
        centeredSlides
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={10000}
        effect="slide"
        modules={[Autoplay]}
        pagination={{ clickable: true }}
        className="rounded-lg overflow-hidden swiper-transition"
      >
        {contents.map((content, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <Image
                className="object-cover rounded-lg shadow-lg"
                src={content.image}
                alt={content.alt}
                width={395}
                height={503}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
