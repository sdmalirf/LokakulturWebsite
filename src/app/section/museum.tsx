"use client";

import Image from "next/image";
import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const museum = [
  {
    nama: "Museum Surabaya (Gedung Siola)",
    alamat: ["Jl. Tunjungan No. 1-3, Genteng, Surabaya"],
    deskripsi:
      "Museum ini menyimpan lebih dari 1.000 artefak sejarah yang berkaitan dengan perkembangan kota Surabaya dari masa ke masa. Koleksinya mencakup foto-foto bersejarah, pakaian adat, dan berbagai benda budaya lainnya.",
  },
  {
    nama: "Museum Sepuluh Nopember",
    alamat: ["Dalam kompleks Tugu Pahlawan, Jl. Pahlawan, Surabaya"],
    deskripsi:
      "Museum ini didedikasikan untuk memperingati peristiwa heroik 10 November 1945, yang merupakan hari pahlawan di Indonesia. Di dalam museum terdapat diorama dan artefak yang menggambarkan perjuangan para pahlawan.",
  },
  {
    nama: "Museum House of Sampoerna",
    alamat: ["Jl. Taman Sampoerna No.6, Pabean Cantian, Surabaya"],
    deskripsi:
      "Museum ini terletak di bekas pabrik rokok Sampoerna dan menampilkan sejarah perusahaan serta proses pembuatan rokok secara tradisional. Pengunjung dapat melihat koleksi barang-barang antik dan menikmati tur gratis.",
  },
  {
    nama: "Monumen Kapal Selam (Monkasel)",
    alamat: ["Jl. Pemuda No.39, Genteng, Surabaya"],
    deskripsi:
      "Monumen ini merupakan kapal selam KRI Pasopati 410 yang dijadikan museum untuk mengenang sejarah angkatan laut Indonesia. Pengunjung dapat memasuki kapal selam dan melihat berbagai peralatan militer.",
  },
  {
    nama: "Museum W.R. Soepratman",
    alamat: ["Jl. Mangga No.21, Surabaya"],
    deskripsi:
      "Museum ini didedikasikan untuk pencipta lagu kebangsaan Indonesia Raya, W.R. Soepratman. Di dalamnya terdapat koleksi artefak pribadi dan informasi tentang kehidupan serta karya-karyanya.",
  },
  {
    nama: "Museum Kanker Indonesia",
    alamat: ["Jl. Kayon No.16-18, Surabaya"],
    deskripsi:
      "Museum ini bertujuan untuk meningkatkan kesadaran tentang kanker melalui informasi edukatif dan alat peraga terkait penyakit tersebut.",
  },
  {
    nama: "Museum Olahraga Surabaya",
    alamat: ["Komplek GOR Pancasila dan Lapangan THOR, Surabaya"],
    deskripsi:
      "Museum ini menghormati prestasi atlet-atlet asal Surabaya dengan menampilkan berbagai koleksi memorabilia olahraga.",
  },
  {
    nama: "Museum Pendidikan Surabaya",
    alamat: ["Jl. Genteng Kali No.10, Surabaya (eks Sekolah Taman Siswa)"],
    deskripsi:
      "Museum ini menampilkan sejarah pendidikan di Indonesia serta perkembangan sistem pendidikan dari zaman kolonial hingga saat ini.",
  },
];

export default function SectionMuseum() {
  // Variants for fade-in and scale effect
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="museum"
      className="w-full flex flex-col scroll-mt-16 py-8 px-8 lg:px-11 gap-6"
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants} // Add animation on entry
      viewport={{ once: false, amount: 0.2 }} // Trigger animation multiple times
    >
      <div className="flex flex-col w-full items-center gap-2">
        <h2 className="font-extrabold text-5xl lg:text-8xl">MUSEUM</h2>
        <p className="font-medium text-xl text-center w-full lg:w-2/5">
          Selain budaya Surabaya juga banyak menyimpan sejarah pada suatu museum
        </p>
      </div>
      <TabGroup>
        <div className="w-full overflow-x-auto no-scrollbar">
          <TabList className="flex gap-2 mb-4">
            {museum.map((content, index) => (
              <Tab key={index} className="focus:outline-none over">
                {({ selected }) => (
                  <Button
                    className={`px-4 py-2 lg:p-4 w-fit min-w-[140px] h-fit font-bold ${
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
          {museum.map((content, index) => (
            <TabPanel
              key={index}
              className="relative flex flex-col lg:flex-row justify-center w-full h-fit lg:h-[448px] gap-8 lg:rounded-2xl overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <Image
                  src="/museum/museum-siola.jpg"
                  alt={`${content.nama} Image`}
                  width={634}
                  height={449}
                  className="rounded-xl"
                />
              </motion.div>
              <div className="flex flex-col gap-4">
                <h2 className="font-extrabold text-2xl lg:text-5xl w-3/4">
                  {content.nama}
                </h2>
                <p className="w-full text-sm lg:text-xl font-medium">
                  {content.deskripsi}
                </p>
                <div>
                  <p className="font-bold lg:mt-4 mb-2 text-base  lg:text-lg">
                    Rekomendasi Tempat Makan:
                  </p>
                  <ul className="space-y-2">
                    {content.alamat.map((tempat, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 border-2 py-4 px-6 lg:w-fit rounded-lg border-black"
                      >
                        <Image
                          src={"/map-pin.png"}
                          alt="Map Pin"
                          width={16}
                          height={16}
                        />
                        <div className="flex items-center justify-center gap-2">
                          <p className="text-xs lg:text-sm text-gray-600">
                            {tempat}
                          </p>
                        </div>
                      </li>
                    ))}
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
