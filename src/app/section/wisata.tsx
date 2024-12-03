"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const wisata = [
  {
    nama: "Tugu Pahlawan",
    desc: "Tugu Pahlawan adalah monumen setinggi 41,15 meter berbentuk paku terbalik yang menjadi ikon kota Surabaya. Monumen ini dibangun untuk mengenang perjuangan rakyat Surabaya dalam pertempuran 10 November 1945, yang menjadi salah satu pertempuran besar dalam sejarah kemerdekaan Indonesia. Area sekitar tugu dihiasi taman yang hijau, memberikan suasana yang khidmat dan damai.",
    info: "Di bagian bawah monumen terdapat Museum Sepuluh Nopember yang menyimpan koleksi bersejarah, seperti foto, dokumen, dan rekaman audio perjuangan kemerdekaan. Suasana heroik semakin terasa dengan diorama yang menggambarkan perjuangan para pahlawan.",
    alamat: "Jalan Pahlawan, Alun-alun Contong, Kecamatan Bubutan, Surabaya",
    image: "/tempatwisata/wisata-tugu.jpg",
  },
  {
    nama: "House of Sampoerna",
    desc: "Museum ini adalah bekas pabrik rokok pertama Sampoerna, dengan bangunan bergaya kolonial Belanda yang masih terawat. Di dalamnya, pengunjung dapat menemukan informasi lengkap tentang sejarah industri rokok kretek di Indonesia, alat-alat tradisional, serta replika proses pembuatan rokok. Pengunjung juga dapat melihat langsung para pekerja membuat rokok secara manual dengan kecepatan yang mengagumkan.",
    info: "Selain museum, terdapat kafe dengan nuansa vintage dan toko suvenir. Tempat ini juga menyediakan tur 'Surabaya Heritage Track,' yaitu tur gratis keliling kota menggunakan bus wisata.",
    alamat: "Taman Sampoerna No.6, Kecamatan Krembangan, Surabaya",
    image: "/tempatwisata/house-of-sampoerna.jpg",
  },
  {
    nama: "Jembatan Suramadu",
    desc: "Jembatan Suramadu adalah jembatan sepanjang 5,4 kilometer yang menghubungkan Kota Surabaya dengan Pulau Madura. Sebagai jembatan terpanjang di Indonesia, Suramadu menjadi ikon modern yang mempercepat akses antara kedua daerah.",
    info: "Pemandangan malam hari di sekitar jembatan sangat memukau dengan lampu-lampu yang menghiasi strukturnya. Selain itu, lokasi ini sering digunakan sebagai tempat berburu foto dengan latar belakang laut atau jembatan yang megah.",
    alamat:
      "Menghubungkan Pantai Kenjeran di Surabaya dengan Kabupaten Bangkalan, Madura",
    image: "/tempatwisata/suramadu.jpg",
  },
  {
    nama: "Kebun Binatang Surabaya (KBS)",
    desc: "Dikenal sebagai salah satu kebun binatang tertua di Asia Tenggara, KBS memiliki lebih dari 200 spesies hewan dari berbagai negara. Area yang luas ini dilengkapi dengan fasilitas edukasi untuk anak-anak, seperti zona interaktif, atraksi hewan, dan taman bermain.",
    info: "Selain koleksi satwa yang lengkap, KBS memiliki program konservasi untuk satwa langka, seperti harimau Sumatra dan orangutan Kalimantan. Tempat ini cocok sebagai destinasi edukasi keluarga.",
    alamat: "Jalan Setail No.1, Darmo, Kecamatan Wonokromo, Surabaya",
    image: "/tempatwisata/kbs.jpg",
  },
  {
    nama: "Pantai Kenjeran Lama dan Kenjeran Park",
    desc: "Pantai Kenjeran Lama adalah destinasi sederhana dengan suasana pantai yang tenang, cocok untuk memancing dan menikmati pemandangan laut. Sementara itu, Kenjeran Park menawarkan fasilitas modern seperti waterpark, klenteng, dan patung Buddha Four Faces.",
    info: "Patung Dewi Kwan Im di Kenjeran Park menjadi daya tarik utama. Selain itu, wisatawan dapat menikmati sunset yang indah dan mencoba kuliner khas seperti lontong kupang.",
    alamat: "Jalan Pantai Lama dan Jalan Sukolilo No.100, Kenjeran, Surabaya",
    image: "/tempatwisata/kenjeran.jpg",
  },
  {
    nama: "Museum 10 November",
    desc: "Berada di area Tugu Pahlawan, museum ini didirikan untuk mendokumentasikan perjuangan rakyat Surabaya. Museum dua lantai ini dilengkapi dengan artefak, diorama, dan koleksi senjata yang digunakan selama pertempuran 10 November 1945.",
    info: "Audio visual dan diorama pertempuran memberikan pengalaman yang interaktif, membuat pengunjung merasa seolah-olah berada di tengah pertempuran.",
    alamat: "Jalan Pahlawan, Alun-alun Contong, Kecamatan Bubutan, Surabaya",
    image: "/tempatwisata/museum-10november.jpg",
  },
  {
    nama: "Masjid Al-Akbar Surabaya (MAS)",
    desc: "Masjid megah ini menjadi salah satu yang terbesar di Indonesia. Dikenal dengan kubah hijau dan birunya yang mencolok, masjid ini mampu menampung hingga 59.000 jamaah. Masjid ini juga dilengkapi menara setinggi 99 meter yang bisa dinaiki untuk melihat panorama Surabaya.",
    info: "Keindahan arsitektur dan interiornya sangat memukau, dengan ukiran kaligrafi khas Timur Tengah. Dari menara, pengunjung bisa menikmati pemandangan Surabaya hingga garis pantai di kejauhan.",
    alamat:
      "Jalan Masjid Al-Akbar Timur No.1, Pagesangan, Kecamatan Jambangan, Surabaya",
    image: "/tempatwisata/masjid-al-akbar.jpg",
  },
  {
    nama: "Taman Bungkul",
    desc: "Taman ini merupakan ruang terbuka hijau yang menjadi favorit warga Surabaya untuk bersantai, berolahraga, atau menikmati kuliner malam. Taman ini dilengkapi dengan fasilitas seperti jogging track, skate park, dan area bermain anak.",
    info: "Taman Bungkul telah mendapatkan penghargaan sebagai taman terbaik se-Asia dari PBB. Taman ini sering menjadi lokasi acara seni dan budaya.",
    alamat: "Jalan Taman Bungkul, Darmo, Kecamatan Wonokromo, Surabaya",
    image: "/tempatwisata/taman-bungkul.jpg",
  },
  {
    nama: "Klenteng Sanggar Agung",
    desc: "Klenteng ini berada di tepi pantai dan memiliki arsitektur khas Tionghoa yang megah. Dikenal juga dengan nama 'Hong San Tang,' klenteng ini menjadi tempat ibadah umat Buddha, Tao, dan Konghucu.",
    info: "Patung Dewi Kwan Im setinggi 20 meter yang berdiri di tepi laut menjadi simbol perdamaian dan keberkahan. Suasana spiritual sangat terasa dengan suara ombak yang menemani ibadah.",
    alamat: "Jalan Sukolilo No.100, Kenjeran, Surabaya",
    image: "/tempatwisata/klenteng-sanggar-agung.jpg",
  },
  {
    nama: "Ekowisata Mangrove Wonorejo",
    desc: "Kawasan hutan mangrove ini menawarkan keindahan alam yang asri dan jauh dari hiruk-pikuk kota. Pengunjung dapat menjelajahi jalur trekking kayu yang melintasi hutan mangrove atau naik perahu untuk menikmati suasana sungai.",
    info: "Tempat ini menjadi habitat bagi berbagai jenis burung migran dan fauna lainnya. Suasananya yang sejuk dan alami menjadikannya tempat ideal untuk relaksasi dan fotografi alam.",
    alamat: "Jalan Raya Wonorejo No.1, Rungkut, Surabaya",
    image: "/tempatwisata/mangrove-wonorejo.jpg",
  },
  {
    nama: "Kompleks Wisata Religi Sunan Ampel",
    desc: "Kawasan ini merupakan tempat makam Sunan Ampel, salah satu Wali Songo, dan Masjid Sunan Ampel, masjid bersejarah yang didirikan pada tahun 1421. Arsitektur masjid memadukan gaya Jawa, Arab, dan Tionghoa.",
    info: "Makam Sunan Ampel: Tempat berziarah dan berdoa. Pasar Ampel: Surga kuliner khas Timur Tengah seperti kebab dan nasi kebuli.",
    alamat: "Jalan Petukangan I, Ampel, Semampir, Surabaya",
    image: "/tempatwisata/sunan-ampel.jpg",
  },
  {
    nama: "Kota Lama Surabaya (Kota Tua Surabaya)",
    desc: "Kota Lama Surabaya adalah kawasan bersejarah yang menyimpan peninggalan arsitektur kolonial Belanda. Tempat ini mencakup sejumlah bangunan tua yang masih terawat dan menggambarkan kejayaan Surabaya sebagai pusat perdagangan pada masa kolonial.",
    info: "Gedung Siola (Museum Surabaya): Bekas pusat perbelanjaan pertama di Surabaya, kini menjadi museum yang menyimpan berbagai artefak sejarah kota.",
    alamat:
      "Sekitar Jalan Rajawali, Jalan Karet, dan Jalan Gula, Kecamatan Pabean Cantian, Surabaya",
    image: "/tempatwisata/kota-lama.jpg",
  },
  {
    nama: "Jalan Tunjungan",
    desc: "Jalan Tunjungan adalah jalan legendaris yang menjadi pusat keramaian Surabaya. Dikenal dengan berbagai toko bersejarah, hotel, dan pusat perbelanjaan modern seperti Tunjungan Plaza.",
    info: "Jalan ini menjadi lokasi favorit untuk menikmati suasana kota pada malam hari. Bangunan bersejarah seperti Hotel Majapahit masih menjadi ikon di jalan ini.",
    alamat: "Jalan Tunjungan, Genteng, Kecamatan Genteng, Surabaya",
    image: "/tempatwisata/tunjungan.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TempatWisata() {
  return (
    <motion.section
      id="wisata"
      className="flex scroll-mt-32 flex-col px-6 lg:px-12 gap-7 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeUp}
    >
      <motion.div
        className="flex flex-col sm:flex-row gap-6 lg:gap-0 justify-between"
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <motion.h2
            className="font-extrabold text-4xl lg:text-7xl"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
          >
            TEMPAT WISATA
          </motion.h2>
          <motion.p
            className="text-base lg:text-xl font-medium"
            variants={fadeUp}
            transition={{ delay: 0.6 }}
          >
            Surabaya adalah kota penuh sejarah, dari Tugu Pahlawan, monumen
            ikonik yang mengabadikan heroisme rakyat Surabaya pada Pertempuran
            10 November 1945, hingga Museum 10 November, setiap sudutnya
            bercerita tentang semangat tak kenal menyerah.
          </motion.p>
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
      </motion.div>

      <TabGroup>
        <motion.div
          className="w-full overflow-x-auto no-scrollbar"
          variants={fadeUp}
          transition={{ delay: 0.8 }}
        >
          <TabList className="flex gap-2 mb-4">
            {wisata.map((content, index) => (
              <Tab key={index} className="focus:outline-none over">
                {({ selected }) => (
                  <Button
                    className={`py-2 px-4 lg:p-4 w-fit h-fit font-medium lg:font-bold ${
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
        </motion.div>
        <motion.div
          className="w-full"
          variants={fadeUp}
          transition={{ delay: 1 }}
        >
          <TabPanels>
            {wisata.map((content, index) => (
              <TabPanel
                key={index}
                className="relative flex text-white px-8   lg:px-11 flex-col justify-start pt-7 lg:pt-0 lg:justify-center w-full h-[480px] lg:h-[550px] gap-4 lg:gap-8 rounded-2xl overflow-hidden"
              >
                <motion.h2
                  className="font-extrabold text-3xl lg:text-6xl w-full lg:w-3/4"
                  // variants={fadeUp}
                  // transition={{ delay: 1.2 }}
                >
                  {content.nama}
                </motion.h2>
                <motion.div
                  className="flex flex-col lg:flex-row w-full gap-4 lg:gap-8"
                  // variants={fadeUp}
                >
                  <p className="w-full text-sm lg:text-xl font-normal lg:font-medium ">
                    {content.desc}
                  </p>
                  <p className="w-full text-sm lg:text-xl font-normal lg:font-medium">
                    {content.info}
                  </p>
                </motion.div>
                <Image
                  src={"/tempatwisata/wisata-tugu.jpg"}
                  alt={`${content.nama} Image`}
                  width={1356}
                  height={580}
                  className="absolute inset-0 object-cover w-full h-full -z-10 left-0"
                />
              </TabPanel>
            ))}
          </TabPanels>
        </motion.div>
      </TabGroup>
    </motion.section>
  );
}
