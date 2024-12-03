import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 px-8 lg:px-12 z-50 py-4 lg:py-6 drop-shadow-md flex items-center justify-between bg-white">
      <Link className="font-extrabold text-xl lg:text-3xl" href={"/"}>
        LOKAKULTUR
      </Link>
      <div className="hidden lg:flex font-semibold text-md gap-6 justify-center items-center px-8">
        <Link href="#sejarah">Sejarah</Link>
        <Link href="#wisata">Tempat Wisata</Link>
        <Link href="#kuliner">Kuliner</Link>
        <Link href="#budaya">Budaya</Link>
        <Link href="#transportasi">Layanan</Link>
      </div>
    </nav>
  );
}
