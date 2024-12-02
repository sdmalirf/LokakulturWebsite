import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import TypewriterEffect from "../component/TypedEffect";

export const SectionUp = () => {
  return (
    <section className="flex py-8 w-full justify-between items-center ">
      <div className="flex flex-col gap-6 px-10">
        <h2 className="text-9xl font-extrabold">SURABAYA</h2>
        <h4 className="font-bold text-5xl">
          <TypewriterEffect
            text={"Halo! Sugeng Rawuh"}
            speed={200}
            loop={true}
          />
        </h4>
        <Button className="w-fit px-7 py-6">Jelajahi Sekarang!</Button>
      </div>
      <Image
        alt="tes"
        width={337}
        height={423}
        src={"/sectionup/hero-assets.png"}
        className="mr-10"
      />
    </section>
  );
};
