"use client";

import Image from "next/image";
import React from "react";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const transportasi = [
  {
    nama: "Suroboyo Bus",
    deskripsi:
      "Suroboyo Bus adalah layanan transportasi umum milik Pemerintah Kota Surabaya yang beroperasi sejak 7 April 2018. Bus ini memiliki konsep modern dan ramah lingkungan, dengan sistem pembayaran unik di mana penumpang dapat membayar dengan sampah plastik.",
    rute: [
      "Purabaya - Rajawali: Halte-halte utama termasuk Jembatan Merah, Tugu Pahlawan, dan Terminal Purabaya",
      "MERR: Rute ini menghubungkan berbagai titik penting di Surabaya",
      "TIJ - TOW: Menghubungkan Terminal Intermoda Joyoboyo dengan berbagai halte di sekitarnya",
    ],
    jamOperasional: "Setiap hari dari pukul 05:30 hingga 21:00 WIB",
    tarif: "Rp 5.000 untuk umum dan Rp 2.500 untuk pelajar",
  },
  {
    nama: "Bus Surabaya Shopping and Culinary Track (SSCT)",
    deskripsi:
      "Bus ini merupakan layanan city tour yang membawa penumpang ke berbagai tempat wisata dan kuliner di Surabaya.",
    rute: ["Balai Pemuda", "Museum Surabaya", "Jembatan Merah Plaza"],
    jamOperasional:
      "Selasa, Sabtu, dan Minggu dari pukul 09:00 hingga 14:00 WIB",
    tarif: "Rp 7.500 untuk perjalanan selama lima jam",
  },
  {
    nama: "Bus Archive Heritage Track",
    deskripsi:
      "Bus ini menawarkan rute yang mengedukasi penumpang tentang sejarah dan warisan budaya Surabaya.",
    rute: ["Lokasi-lokasi bersejarah di Surabaya"],
    jamOperasional: "Informasi belum tersedia",
    tarif: "Informasi belum tersedia",
  },
  {
    nama: "Bus Kota Reguler",
    deskripsi:
      "Selain Suroboyo Bus, terdapat juga bus kota reguler yang dikelola oleh beberapa perusahaan otobus.",
    rute: [
      "Menghubungkan Terminal Purabaya hingga pusat-pusat keramaian lainnya",
    ],
    jamOperasional: "Umumnya beroperasi dari pagi hingga sore hari",
    tarif: "Tergantung operator bus",
  },
];

export default function SectionTransportasi() {
  // Variants untuk animasi fadeIn dan scale
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="transportasi"
      className="w-full flex scroll-mt-16 flex-col pb-10 px-11 mb-8 gap-10"
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="flex flex-col w-full items-center gap-2">
        <h2 className="font-extrabold text-3xl lg:text-6xl">
          LAYANAN TRANSPORTASI BUS
        </h2>
        <p className="font-medium text-xl lg:text-center w-full lg:w-1/2">
          Kemudahan transportasi di Surabaya dapat kita coba untuk berkeliling
          Surabaya dengan nyaman, salah satunya dengan moda transportasi BUS
        </p>
      </div>
      <TabGroup className={"flex flex-col gap-2 "}>
        <div className="w-full items-center flex  overflow-x-auto no-scrollbar">
          <TabList className="flex w-full lg:justify-center gap-2 mb-4">
            {transportasi.map((content, index) => (
              <Tab key={index} className="focus:outline-none over">
                {({ selected }) => (
                  <Button
                    className={`p-4 w-fit min-w-[140px] h-fit font-bold ${
                      selected ? "" : "bg-transparent border-black border-2"
                    }`}
                    variant={selected ? "default" : "outline"}
                  >
                    {content.nama}
                  </Button>
                )}
              </Tab>
            ))}
          </TabList>
        </div>
        <TabPanels>
          {transportasi.map((content, index) => (
            <TabPanel
              key={index}
              className="relative flex flex-col lg:flex-row-reverse justify-center w-full gap-8 overflow-hidden"
            >
              <Image
                src="/bus/bus-suroboyo.jpg"
                alt={`${content.nama} Image`}
                width={552}
                height={449}
                className="rounded-xl lg:h-[448px]"
              />
              <div className="flex flex-col gap-2">
                <h2 className="font-extrabold text-xl lg:text-4xl w-3/4">
                  {content.nama}
                </h2>
                <p className="w-full text-sm lg:text-xl font-medium">
                  {content.deskripsi}
                </p>
                <div>
                  <p className="font-bold mt-4 mb-2 text-lg">Rute:</p>
                  <ul className="space-y-2">
                    {content.rute.map((rute, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 border-2 py-2 px-4 w-fit rounded-lg border-black"
                      >
                        <Image
                          src={"/map-pin.png"}
                          alt="Map Pin"
                          width={16}
                          height={16}
                          className="w-4 lg:w-fit"
                        />
                        <div className="flex items-center justify-center gap-2">
                          <p className="text-sm text-gray-600">{rute}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-bold mt-4 mb-2 text-lg">
                    Informasi Tambahan:
                  </p>
                  <ul className="flex flex-col lg:flex-row gap-2">
                    <li className="flex items-center gap-3 border-2 py-2 px-4 w-fit rounded-lg border-black">
                      <Image
                        src={"/clock.png"}
                        alt="Clock Icon"
                        width={16}
                        height={16}
                      />
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-sm text-gray-600">
                          {content.jamOperasional}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3 border-2 py-2 px-4 w-fit rounded-lg border-black">
                      <Image
                        src={"/dollar.png"}
                        alt="Ticket Icon"
                        width={16}
                        height={16}
                      />
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-sm text-gray-600">{content.tarif}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </motion.section>
  );
}
