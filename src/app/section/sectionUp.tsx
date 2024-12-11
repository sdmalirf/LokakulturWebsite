import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import TypewriterEffect from "../component/TypedEffect";

export const SectionUp = () => {
  return (
    <section className="flex flex-col lg:flex-row pt-8 mb-8 overflow-hidden border-b-2 lg:border-none border-black w-full justify-between items-center ">
      <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-6 px-10">
        <h2 className="text-5xl lg:text-9xl font-extrabold">SURABAYA</h2>
        <h4 className="font-bold text-3xl lg:text-5xl">
          <TypewriterEffect
            text={"Halo! Sugeng Rawuh"}
            speed={200}
            loop={true}
          />
        </h4>
        <Link href={"#sejarah"}>
          <Button className="w-fit px-7 py-6">Jelajahi Sekarang!</Button>
        </Link>
      </div>
      <Image
        alt="tes"
        width={337}
        height={423}
        src={"/sectionup/hero-assets.png"}
        className="lg:mr-10 w-2/3 sm:w-1/2 xl:w-1/4"
      />
    </section>
  );
};
