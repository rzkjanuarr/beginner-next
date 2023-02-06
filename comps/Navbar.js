import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={50} height={50} />
      </div>
      <Link href={"/"}>Beranda</Link>
      <Link href={"/about"}>Tentang Kami</Link>
      <Link href={"/ninjas"}>List Data</Link>
    </nav>
  );
};

export default Navbar;
