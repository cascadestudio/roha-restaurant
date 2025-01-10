"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setOffsetY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="home" className="relative h-screen overflow-hidden snap-start">
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
          //transition: "transform 0.1s linear",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Intérieur du restaurant Roha - Salle moderne avec tables en bois et chaises noires"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-[#4A2511]">
        <h1 className="text-[#FDF6E9] text-2xl md:text-4xl font-bold mb-4 text-center px-4 mx-auto">
          Un voyage entre Éthiopie et Europe
        </h1>
      </div>
    </div>
  );
}
