import Link from "next/link";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#4A2511] text-[#FDF6E9] py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center relative">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Roha Restaurant</p>
          </div>
          <div className="md:absolute inset-0 flex justify-center items-center z-10">
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl hover:text-[#FDF6E9] transition duration-300" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61571508279696&rdid=fWtzBBqZOnakhR9D&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F14cziscsfR%2F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl hover:text-[#FDF6E9] transition duration-300" />
              </Link>
              <Link
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok className="text-2xl hover:text-[#FDF6E9] transition duration-300" />
              </Link>
            </div>
          </div>
          <div className="mt-4 md:mt-0 z-20">
            <a
              href="https://www.cascadestudio.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FDF6E9] hover:underline transition duration-300 mr-4"
            >
              Créé par le studio Cascade
            </a>
            <Link
              href="/mentions-legales"
              className="hover:text-[#FDF6E9] hover:underline transition duration-300"
            >
              Mentions Légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
