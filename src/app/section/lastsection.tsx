"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function LastSection() {
  return (
    <section className="flex items-center lg:items-start overflow-hidden relative flex-col lg:mt-40 gap-2 lg:px-8 py-6 w-full h-[420px] lg:h-[684px] justify-end border-t-2 border-black">
      <motion.div
        initial={{ x: 200 }} // Start from the left
        whileInView={{ x: 0 }} // Animate to normal position when in view
        transition={{ duration: 0.3, ease: "easeOut" }} // Control the duration and easing
        viewport={{ once: false, amount: 0.2 }} // Trigger every time the section is in view
        className="absolute bottom-[15%] lg:bottom-0 right-[4%]"
      >
        <Image
          src={"/lastsection/assets-1.png"}
          alt="Asset 1"
          width={434}
          height={407}
          className="w-[250px] lg:w-[434px]"
        />
      </motion.div>

      <motion.div
        initial={{ y: -250 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }} // Added delay for sequencing
        viewport={{ once: false, amount: 0.2 }} // Trigger every time the section is in view
        className="absolute top-[20%] right-[35%]"
      >
        <Image
          src={"/lastsection/assets-2.png"}
          alt="Asset 2"
          width={434}
          height={407}
          className="w-[300px] lg:w-[434px]"
        />
      </motion.div>

      <hr className="w-full lg:w-2/3 border-2 border-black" />
      <p className="">© Copyright Lokakultur. All Rights Reserved</p>
    </section>
  );
}
