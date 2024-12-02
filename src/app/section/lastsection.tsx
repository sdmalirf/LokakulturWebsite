"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function LastSection() {
  return (
    <section className="flex overflow-hidden relative flex-col mt-40 gap-2 px-8 py-6 w-full h-[684px] justify-end border-t-2 border-black">
      {/* Animating assets from top */}
      <motion.div
        initial={{ x: 200 }} // Start from the left
        whileInView={{ x: 0 }} // Animate to normal position when in view
        transition={{ duration: 0.3, ease: "easeOut" }} // Control the duration and easing
        viewport={{ once: false, amount: 0.3 }} // Trigger every time the section is in view
        className="absolute bottom-0 right-[4%]"
      >
        <Image
          src={"/lastsection/assets-1.png"}
          alt="Asset 1"
          width={434}
          height={407}
        />
      </motion.div>

      <motion.div
        initial={{ y: -250 }} // Start from above
        whileInView={{ y: 0 }} // Animate to normal position when in view
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }} // Added delay for sequencing
        viewport={{ once: false, amount: 0.5 }} // Trigger every time the section is in view
        className="absolute top-[20%] right-[35%]"
      >
        <Image
          src={"/lastsection/assets-2.png"}
          alt="Asset 2"
          width={434}
          height={407}
        />
      </motion.div>

      <hr className="w-2/3 border-2 border-black" />
      <p>© Copyright Lokakultur. All Rights Reserved</p>
    </section>
  );
}
