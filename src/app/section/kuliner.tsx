"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const kuliner = [
  {
    nama: "Rawon",
    sejarah:
      "Rawon adalah salah satu makanan khas Jawa Timur yang terkenal dengan kuah hitam yang terbuat dari kluwek (buah yang memberikan warna hitam) yang diolah dengan daging sapi. Rawon sudah ada sejak zaman kolonial Belanda dan menjadi salah satu warisan kuliner Jawa Timur yang banyak digemari.",
    rekomendasiTempatMakan: [
      {
        nama: "Rawon Setan",
        alamat: ["Jl. Embong Malang No. 78, Surabaya"],
      },
      {
        nama: "Rawon Calibre",
        alamat: ["Jl. Raya Darmo No. 135, Surabaya"],
      },
    ],
  },
  {
    nama: "Sate Klopo",
    sejarah:
      "Sate Klopo adalah sate khas Surabaya yang menggunakan daging sapi atau ayam yang ditusuk dengan tusuk sate, lalu dibalur dengan kelapa parut yang telah dibumbui dan dipanggang. Sate klopo sudah dikenal sejak abad ke-19 dan menjadi salah satu makanan favorit masyarakat Surabaya.",
    rekomendasiTempatMakan: [
      {
        nama: "Sate Klopo Ondomohen",
        alamat: ["Jl. Walikota Mustajab No. 36, Surabaya"],
      },
      {
        nama: "Sate Klopo Cak Khasim",
        alamat: ["Jl. Rungkut Madya No. 31, Surabaya"],
      },
    ],
  },
  {
    nama: "Tahu Tek",
    sejarah:
      "Tahu Tek adalah makanan khas Surabaya yang terdiri dari tahu, lontong, kentang, dan taoge yang dipotong kecil-kecil, lalu disiram dengan bumbu kacang kental. Makanan ini sudah ada sejak zaman kolonial Belanda dan merupakan jajanan kaki lima yang populer.",
    rekomendasiTempatMakan: [
      {
        nama: "Tahu Tek 88",
        alamat: ["Jl. Ketabang No. 17, Surabaya"],
      },
      {
        nama: "Tahu Tek Cak Sholeh",
        alamat: ["Jl. Gubeng Kertajaya No. 1, Surabaya"],
      },
    ],
  },
  {
    nama: "Lontong Balap",
    sejarah:
      "Lontong Balap merupakan makanan khas Surabaya yang terdiri dari lontong, tahu goreng, lentho (perkedel kacang), taoge, dan disiram dengan kuah kecap manis dan sambal petis. Makanan ini sudah ada sejak abad ke-19 dan memiliki rasa yang khas dengan perpaduan manis dan pedas.",
    rekomendasiTempatMakan: [
      {
        nama: "Lontong Balap Pak Gendut",
        alamat: ["Jl. Kupang No. 18, Surabaya"],
      },
      {
        nama: "Lontong Balap Taman Bungkul",
        alamat: ["Taman Bungkul, Surabaya"],
      },
    ],
  },
  {
    nama: "Rujak Cingur",
    sejarah:
      "Rujak Cingur adalah salad tradisional Surabaya yang terbuat dari campuran sayuran segar, lontong, tempe, tahu, dan irisan cingur (hidung sapi), yang kemudian disiram dengan bumbu rujak petis yang kental dan pedas. Makanan ini merupakan salah satu kuliner khas Jawa Timur yang sudah ada sejak zaman dahulu.",
    rekomendasiTempatMakan: [
      {
        nama: "Rujak Cingur 99",
        alamat: ["Jl. Semolowaru No. 25, Surabaya"],
      },
      {
        nama: "Rujak Cingur Ahmad Jais",
        alamat: ["Jl. Ahmad Jais No. 1, Surabaya"],
      },
    ],
  },
  {
    nama: "Nasi Krawu",
    sejarah:
      "Nasi Krawu adalah makanan khas Surabaya yang terdiri dari nasi yang disajikan dengan daging sapi atau kambing yang dimasak dengan bumbu rempah khas, lengkap dengan sambal dan serundeng kelapa. Makanan ini berasal dari daerah Gresik, namun menjadi populer di Surabaya.",
    rekomendasiTempatMakan: [
      {
        nama: "Nasi Krawu Sudi Mampir",
        alamat: ["Jl. Kranggan No. 88, Surabaya"],
      },
      {
        nama: "Nasi Krawu Cak Gung",
        alamat: ["Jl. Ngagel No. 16, Surabaya"],
      },
    ],
  },
  {
    nama: "Kue Cubir",
    sejarah:
      "Kue Cubir adalah kue tradisional Surabaya yang terdiri dari tepung ketan yang dibalut kelapa parut dan dipotong kecil-kecil. Makanan ini sering dijadikan sebagai camilan dan memiliki rasa manis gurih.",
    rekomendasiTempatMakan: [
      {
        nama: "Kue Cubir Tepi Laut",
        alamat: ["Jl. Tepi Laut No. 21, Surabaya"],
      },
      {
        nama: "Kue Cubir Mak Iti",
        alamat: ["Jl. Raya Tidar No. 28, Surabaya"],
      },
    ],
  },
  {
    nama: "Tahu Petis",
    sejarah:
      "Tahu Petis adalah makanan khas Surabaya yang terdiri dari tahu goreng yang disajikan dengan petis (saus ikan) yang kental dan pedas. Tahu petis sudah menjadi jajanan yang sangat populer di Surabaya dan sekitarnya sejak dulu.",
    rekomendasiTempatMakan: [
      {
        nama: "Tahu Petis Cak Gus",
        alamat: ["Jl. Kalisari No. 2, Surabaya"],
      },
      {
        nama: "Tahu Petis Ria",
        alamat: ["Jl. Pahlawan No. 45, Surabaya"],
      },
    ],
  },
  {
    nama: "Bandeng Presto",
    sejarah:
      "Bandeng Presto adalah bandeng yang dimasak dengan cara presto, sehingga dagingnya empuk dan durinya bisa dimakan. Makanan ini sangat terkenal di daerah pesisir Jawa Timur, termasuk Surabaya. Bandeng Presto sudah menjadi makanan khas Surabaya sejak lama.",
    rekomendasiTempatMakan: [
      {
        nama: "Bandeng Presto 27",
        alamat: ["Jl. Raya Darmo No. 27, Surabaya"],
      },
      {
        nama: "Bandeng Presto Pak Manto",
        alamat: ["Jl. Raya Gubeng No. 15, Surabaya"],
      },
    ],
  },
];

export default function SectionKuliner() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="kuliner"
      className="flex flex-col scroll-mt-28 mt-8 px-8 lg:px-12 gap-7 pb-8"
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants} // Menambahkan animasi saat elemen masuk viewport
      viewport={{ once: false, amount: 0.2 }} // Animasi akan dipicu berulang kali
    >
      <div className="flex flex-col sm:flex-row justify-between lg:mb-7 lg:gap-0 gap-6">
        <div className="w-full lg:w-1/2 flex flex-col gap-2 lg:gap-4">
          <h2 className="font-extrabold text-3xl lg:text-7xl">KULINER KHAS</h2>
          <p className="text-base lg:text-xl font-medium">
            Rawon adalah salah satu makanan khas Jawa Timur yang terkenal dengan
            kuah hitam yang terbuat dari kluwek...
          </p>
        </div>
        <div className="flex gap-4">
          <Image
            src={"/tempatwisata/hero-1.png"}
            alt="Hero Image 1"
            width={249}
            height={317}
          />
          <div className="flex flex-col justify-between">
            <Image
              src={"/tempatwisata/hero-2.png"}
              alt="Hero Image 2"
              width={249}
              height={172}
            />
            <Image
              src={"/tempatwisata/hero-3.png"}
              alt="Hero Image 3"
              width={249}
              height={133}
            />
          </div>
        </div>
      </div>
      <TabGroup>
        <div className="w-full overflow-x-auto no-scrollbar">
          <TabList className="flex gap-2 mb-4">
            {kuliner.map((content, index) => (
              <Tab key={index} className="focus:outline-none over">
                {({ selected }) => (
                  <Button
                    className={`py-2 px-4 lg:p-4 w-fit min-w-[140px] h-fit font-bold ${
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
          {kuliner.map((content, index) => (
            <TabPanel
              key={index}
              className="relative flex md:flex-row flex-col justify-center w-full h-full lg:h-[448px] gap-8 lg:rounded-2xl overflow-hidden"
            >
              <Image
                src="/kuliner/kuliner-rawon.jpg"
                alt={`${content.nama} Image`}
                width={436}
                height={438}
                className="rounded-xl "
              />
              <div className="flex flex-col gap-4">
                <h2 className="font-extrabold text-4xl lg:text-6xl w-full lg:w-3/4">
                  {content.nama}
                </h2>
                <p className="w-full text-base lg:text-xl font-medium">
                  {content.sejarah}
                </p>
                <div>
                  <p className="font-bold lg:mt-4 mb-2 text-lg">
                    Rekomendasi Tempat Makan:
                  </p>
                  <ul className="space-y-2">
                    {content.rekomendasiTempatMakan.map((tempat, idx) => (
                      <motion.li
                        key={idx}
                        className="flex w-full items-center gap-3 border-2 py-4 px-3 lg:px-6 lg:w-fit rounded-lg border-black"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.2, duration: 0.5 }}
                      >
                        <Image
                          src={"/map-pin.png"}
                          alt="Map Pin"
                          width={16}
                          height={16}
                          className="w-6 lg:w-fit"
                        />
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-0 lg:gap-2">
                          {tempat.alamat.map((alamat, i) => (
                            <p key={i} className="text-sm text-gray-600">
                              {alamat}
                            </p>
                          ))}
                          <p className="font-semibold">({tempat.nama})</p>
                        </div>
                      </motion.li>
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
