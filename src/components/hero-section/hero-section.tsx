import React from "react";
import hero from "@/assets/hero.png";
import Image from "next/image";
import heroPhone from "@/assets/hero-mobile.png";
//
export default function HeroSection() {
  return (
    <div className=" relative">
      <div className="w-full  bg-black overflow-hidden text-white">
        <Image className=" w-full lg:hidden" src={heroPhone} alt="" />
        <Image
          className="w-full hidden lg:block h-full  "
          src={hero}
          priority
          alt="hero image"
        />
      </div>
    </div>
  );
}
