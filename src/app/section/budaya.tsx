"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function SectionBudaya() {
  // Variants for fadeIn and scale animations
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="budaya"
      className="w-full flex flex-col items-center scroll-mt-16 py-10 px-8 lg:px-11 gap-6"
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants} // Animation when the section enters the viewport
      viewport={{ once: false, amount: 0.2 }} // Trigger animation when entering the viewport
    >
      <div className="flex flex-col items-center gap-2 w-full lg:w-2/5">
        <motion.h2
          className="font-extrabold text-5xl lg:text-8xl"
          variants={scaleVariants}
        >
          BUDAYA
        </motion.h2>
        <motion.p
          className="font-medium text-sm lg:text-xl text-center"
          variants={scaleVariants}
        >
          Selain kuliner dan tempat wisata Surabaya juga memiliki budaya-budaya
          yang unik
        </motion.p>
      </div>
      <div className="w-full flex flex-col gap-4 justify-center pb-8">
        <motion.div
          className="w-full relative overflow-hidden rounded-2xl h-[520px] px-8 items-end flex pb-6"
          variants={fadeInVariants} // Animation for the first image and content
        >
          <Image
            src={"/budaya/budaya-remo.jpg"}
            alt="Tari Remo"
            width={1356}
            height={529}
            className="absolute inset-0 w-full h-full -z-10"
          />
          <div className="w-full bg-white py-4 lg:py-8 px-6 rounded-xl">
            <div className="flex flex-col gap-2 lg:gap-4">
              <h2 className="font-extrabold text-xl lg:text-4xl w-3/4">
                Tari Remo
              </h2>
              <p className="w-full text-xs lg:text-md font-medium">
                Tari Remo adalah tarian tradisional yang menggambarkan semangat
                dan keberanian masyarakat Surabaya. Tarian ini biasanya
                dibawakan oleh penari pria yang mengenakan pakaian khas Jawa,
                dengan gerakan yang dinamis dan ekspresif. Tari Remo sering
                ditampilkan dalam acara-acara budaya, festival, dan perayaan.
              </p>
              <div>
                <p className="font-bold mt-0 lg:mt-4 mb-2 text-sm lg:text-md">
                  Tempat Menonton:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 border-2 py-2 px-4 w-fit rounded-lg border-black">
                    <Image
                      src={"/map-pin.png"}
                      alt="Map Pin"
                      width={16}
                      height={16}
                    />
                    <div className="flex items-center justify-center gap-2">
                      <p className="text-xs lg:text-sm text-gray-600">
                        UPT Taman Budaya Cak Durasim, Jl. Genteng Kali No.85,
                        Genteng, Surabaya.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-6">
          <motion.div
            className="w-full relative overflow-hidden rounded-2xl h-[520px] px-8 items-end flex pb-6"
            variants={fadeInVariants} // Animation for the second image and content
          >
            <Image
              src={"/budaya/budaya-lenggang.jpg"}
              alt="Tari Lenggang Surabaya"
              width={674}
              height={529}
              className="absolute inset-0 w-full h-full -z-10"
            />
            <div className="w-full bg-white py-4 lg:py-8 px-6 rounded-xl">
              <div className="flex flex-col gap-2 lg:gap-4">
                <h2 className="font-extrabold text-xl lg:text-4xl w-3/4">
                  Tari Remo
                </h2>
                <p className="w-full text-xs lg:text-md font-medium">
                  Tari Remo adalah tarian tradisional yang menggambarkan
                  semangat dan keberanian masyarakat Surabaya. Tarian ini
                  biasanya dibawakan oleh penari pria yang mengenakan pakaian
                  khas Jawa, dengan gerakan yang dinamis dan ekspresif. Tari
                  Remo sering ditampilkan dalam acara-acara budaya, festival,
                  dan perayaan.
                </p>
                <div>
                  <p className="font-bold mt-0 lg:mt-4 mb-2 text-sm lg:text-md">
                    Tempat Menonton:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 border-2 py-2 px-4 w-fit rounded-lg border-black">
                      <Image
                        src={"/map-pin.png"}
                        alt="Map Pin"
                        width={16}
                        height={16}
                      />
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-xs lg:text-sm text-gray-600">
                          UPT Taman Budaya Cak Durasim, Jl. Genteng Kali No.85,
                          Genteng, Surabaya.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full relative overflow-hidden rounded-2xl h-[520px] bg-black px-8 items-end flex pb-6"
            variants={fadeInVariants} // Animation for the third image and content
          >
            <Image
              src={"/budaya/budaya-sparkling.png"}
              alt="Tari Sparkling Surabaya"
              width={674}
              height={529}
              className="absolute object-cover bottom-0 left-0 z-0"
            />
            <div className="w-full bg-white py-4 lg:py-8 px-6 rounded-xl z-10">
              <div className="flex flex-col gap-4">
                <h2 className="font-extrabold text-xl lg:text-4xl w-full">
                  Tari Sparkling Surabaya
                </h2>
                <p className="w-full text-xs lg:text-md font-medium">
                  Tarian modern yang diciptakan untuk merayakan semangat kota
                  Surabaya. Tarian ini menggabungkan elemen tradisional dengan
                  gerakan kontemporer, sering kali ditampilkan dalam acara
                  resmi.
                </p>
                <div>
                  <p className="font-bold mt-0 lg:mt-4 mb-2 text-md">
                    Rekomendasi Tempat Makan:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 border-2 py-2 px-4 w-fit rounded-lg border-black">
                      <Image
                        src={"/map-pin.png"}
                        alt="Map Pin"
                        width={16}
                        height={16}
                      />
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-xs lg:text-sm text-gray-600">
                          Festival budaya di Surabaya, seperti di Taman Budaya
                          Cak Durasim
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
