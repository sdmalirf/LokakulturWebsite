"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper"; // Import Swiper core for typing
import "swiper/css"; // Import Swiper styles
import "swiper/css/effect-fade"; // Import fade effect styles
import { EffectFade } from "swiper/modules"; // Import effect module
import { motion } from "framer-motion"; // Import motion

const contents = [
  {
    image: "/sejarahsection/majapahit-image.jpg",
    zaman: "Zaman Majapahit",
    desc: "Surabaya diyakini sudah ada sejak zaman Majapahit, ditandai dengan kemenangan Raden Wijaya dalam melawan pasukan Mongol pada 31 Mei 1293. Peristiwa ini terjadi di wilayah Surabaya, yang saat itu merupakan pelabuhan gerbang utama Kerajaan Majapahit. Nama Surabaya baru muncul dalam Prasasti Trowulan I atau Prasasti Canggu pada tahun 1358.",
  },
  {
    image: "/sejarahsection/sejarah-2.jpg",
    zaman: "Zaman Kolonial Belanda",
    desc: "Pada abad ke-19, Surabaya menjadi pelabuhan utama yang mengumpulkan hasil produksi perkebunan di ujung timur Pulau Jawa untuk diekspor ke Eropa.",
  },
  {
    image: "/sejarahsection/sejarah-3.jpg",
    zaman: "Pertempuran 10 November 1945",
    desc: "Peristiwa ini terjadi ketika arek-arek Suroboyo berhasil mengusir pasukan sekutu yang ingin mengamankan tawanan perang, melucuti senjata, dan menciptakan ketertiban.",
  },
];

export default function SectionSejarah() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      const { activeIndex, slides } = swiperRef.current;
      if (activeIndex === slides.length - 1) {
        swiperRef.current.slideTo(0);
      } else {
        swiperRef.current.slideNext();
      }
    }
  };

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const { activeIndex, slides } = swiperRef.current;
      setIsLastSlide(activeIndex === slides.length - 1);
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="sejarah"
      className="w-full bg-gray-200 scroll-mt-32 h-[666px] mx-auto mb-12"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      viewport={{ once: false, amount: 0.2 }}
    >
      <Swiper
        className="h-full w-full"
        modules={[EffectFade]} // Activate fade effect
        effect="fade" // Use fade effect
        fadeEffect={{ crossFade: false }} // Enable crossfade option
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
      >
        {contents.map((content, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <motion.div
              className="relative w-full text-center items-center lg:items-start lg:text-start lg:w-1/2 gap-4 lg:gap-8 flex h-full justify-center px-8 lg:pl-11 flex-col text-white"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl lg:text-6xl font-extrabold">
                {content.zaman}
              </h3>
              <p className="text-base lg:text-xl font-normal">{content.desc}</p>
              <Button
                variant={"outline"}
                className="w-full lg:w-fit px-8 py-4 h-fit bg-transparent"
                onClick={handleNextSlide}
              >
                {isLastSlide ? "Balik ke Sejarah Awal" : "Sejarah Berikutnya"}
              </Button>
            </motion.div>
            <Image
              className="object-cover w-full h-full inset-0 absolute -z-10 shadow-lg"
              src={content.image}
              alt="no image"
              width={1440}
              height={666}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
