import Image from "next/image";

export default function Concept() {
  return (
    <section id="concept" className="pt-16 pb-20 bg-[#FDF6E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="uppercase text-3xl font-extrabold text-[#4A2511] mb-8">
          Notre histoire
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-[#4A2511] mb-4">
              Roha, inspirée par l'ancienne capitale éthiopienne devenue
              Lalibela, incarne l'union entre histoire, culture et gastronomie.
              Tout comme la ville de Roha, berceau spirituel et symbole d'unité,
              notre restaurant célèbre la richesse des rencontres et des
              traditions.
            </p>
            <p className="text-lg text-[#4A2511] mb-4">
              La cheffe Frehiwot Zeleke Gurumu, portée par ses racines
              éthiopiennes, a enrichi sa cuisine en explorant la gastronomie
              italienne avant de s'installer en France pour partager son art
              culinaire.
            </p>
            <p className="text-lg text-[#4A2511]">
              Le Roha Restaurant est une invitation au voyage afin de découvrir
              la culture éthiopienne et ses saveurs.
            </p>
          </div>
          <div className="relative h-96">
            <Image
              src="https://static.nationalgeographic.fr/files/styles/image_3200/public/lalibela.webp?w=1600&h=900"
              alt="Concept du restaurant Roha - Église de Lalibela en Éthiopie"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md object-cover border border-[#4A2511]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-24">
        <svg
          width="26"
          height="26"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-80"
        >
          <path
            d="M11 0L13.2775 3.99071L17.4656 2.10081L16.9625 6.66802L21.4616 7.60081L18.37 11L21.4616 14.3992L16.9625 15.332L17.4656 19.8992L13.2775 18.0093L11 22L8.72256 18.0093L4.53437 19.8992L5.03756 15.332L0.538391 14.3992L3.63001 11L0.538391 7.60081L5.03756 6.66802L4.53437 2.10081L8.72256 3.99071L11 0Z"
            fill="#4A2511"
          />
        </svg>
      </div>
    </section>
  );
}
