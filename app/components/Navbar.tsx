"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    },
    []
  );

  return (
    <nav className="bg-[#FDF6E9] border border-b-[#4A2511] fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex-shrink-0 flex items-center"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roha%20Restaurant%20logo-m27ueMt5SxCq28gHxYnoU7Zizj8tPU.svg"
              alt="Logo Roha"
              width={180}
              height={50}
            />
          </a>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-6">
            <a
              href="#info"
              onClick={(e) => scrollToSection(e, "#info")}
              className="uppercase text-[#4A2511] hover:text-black inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              Infos
            </a>
            <a
              href="#menu"
              onClick={(e) => scrollToSection(e, "#menu")}
              className="uppercase text-[#4A2511] hover:text-black inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              Menu
            </a>
            <a
              href="#concept"
              onClick={(e) => scrollToSection(e, "#concept")}
              className="uppercase text-[#4A2511] hover:text-black inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              Histoire
            </a>
          </div>
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#4A2511] hover:text-[#4A2511] hover:bg-[#F5ECD7] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4A2511]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="pt-2 pb-3 space-y-1">
          <a
            href="#info"
            onClick={(e) => scrollToSection(e, "#info")}
            className="uppercase block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-[#4A2511] hover:text-[#4A2511] hover:bg-[#F5ECD7] hover:border-[#4A2511]"
          >
            Infos
          </a>
          <a
            href="#menu"
            onClick={(e) => scrollToSection(e, "#menu")}
            className="uppercase block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-[#4A2511] hover:text-[#4A2511] hover:bg-[#F5ECD7] hover:border-[#4A2511]"
          >
            Menu
          </a>
          <a
            href="#concept"
            onClick={(e) => scrollToSection(e, "#concept")}
            className="uppercase block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-[#4A2511] hover:text-[#4A2511] hover:bg-[#F5ECD7] hover:border-[#4A2511]"
          >
            Histoire
          </a>
        </div>
      </div>
    </nav>
  );
}
