import Navbar from "./component/Navbar";
import SectionBudaya from "./section/budaya";
import Carousel from "./section/carrousel";
import SectionKuliner from "./section/kuliner";
import LastSection from "./section/lastsection";
import SectionMuseum from "./section/museum";
import SectionSejarah from "./section/sectionSejarah";
import { SectionUp } from "./section/sectionUp";
import SectionTransportasi from "./section/transportasi";
import TempatWisata from "./section/wisata";

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionUp />
      <Carousel />
      <SectionSejarah />
      <TempatWisata />
      <SectionKuliner />
      <SectionBudaya />
      <SectionMuseum />
      <SectionTransportasi />
      <LastSection />
    </>
  );
}
