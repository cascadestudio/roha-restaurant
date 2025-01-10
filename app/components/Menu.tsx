import { Leaf, WheatOff, MilkOff } from "lucide-react";
import Image from "next/image";

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-[#FDF6E9] snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center uppercase text-[#4A2511] mb-2">
          Menu
        </h2>
        <p className="text-center text-[#4A2511] mb-8 max-w-2xl mx-auto">
          Découvrez notre sélection de plats fusion, mêlant les saveurs de
          l'Éthiopie, de l'Italie et de la France pour une expérience culinaire
          unique.
        </p>

        {/* Row 1: Images with titles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="uppercase">
            <div className="relative aspect-square mb-2 sm:mb-4">
              <Image
                src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sambussa à la française"
                fill
                className="rounded-md object-cover border border-[#4A2511]"
              />
            </div>
            <h4 className="text-sm text-[#4A2511]">Sambussa à la française</h4>
          </div>
          <div className="uppercase">
            <div className="relative aspect-square mb-2 sm:mb-4">
              <Image
                src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Doro wat à la truffe"
                fill
                className="rounded-md object-cover border border-[#4A2511]"
              />
            </div>
            <h4 className="text-sm text-[#4A2511]">Doro wat à la truffe</h4>
          </div>
          <div className="uppercase">
            <div className="relative aspect-square mb-2 sm:mb-4">
              <Image
                src="https://images.unsplash.com/photo-1675257163429-fc4c8837c662?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tarte tatin d'ananas et cardamome"
                fill
                className="rounded-md object-cover border border-[#4A2511]"
              />
            </div>
            <h4 className="text-sm text-[#4A2511]">
              Tarte tatin d'ananas et cardamome
            </h4>
          </div>
        </div>

        {/* Rows 2-4: Titles with descriptions */}
        <div className="space-y-8 md:space-y-16">
          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <h4 className="font-semibold uppercase text-[#4A2511]">
                  Carpaccio d'injera
                </h4>
                <div className="flex gap-1 ml-2">
                  <WheatOff className="h-4 w-4 text-yellow-500" />
                </div>
              </div>
              <p className="text-sm text-[#4A2511]">
                Fines tranches d'injera marinées aux herbes, huile d'olive et
                citron
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <h4 className="font-semibold uppercase text-[#4A2511]">
                  Tagliatelles au berbéré
                </h4>
                <div className="flex gap-1 ml-2">
                  <MilkOff className="h-4 w-4 text-blue-500" />
                </div>
              </div>
              <p className="text-sm text-[#4A2511]">
                Pâtes fraîches maison parfumées aux épices éthiopiennes, sauce
                crémeuse à l'ail
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <h4 className="font-semibold uppercase text-[#4A2511]">
                  Tiramisu au café éthiopien
                </h4>
                <div className="flex gap-1 ml-2"></div>
              </div>
              <p className="text-sm text-[#4A2511]">
                Le classique italien revisité avec notre café signature et une
                touche de cannelle
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <h4 className="font-semibold uppercase text-[#4A2511]">
                  Salade Roha
                </h4>
                <div className="flex gap-1 ml-2">
                  <Leaf className="h-4 w-4 text-green-500" />
                  <WheatOff className="h-4 w-4 text-yellow-500" />
                </div>
              </div>
              <p className="text-sm text-[#4A2511]">
                Mélange de légumes frais, graines torréfiées et vinaigrette au
                miel et berbéré
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <h4 className="font-semibold uppercase text-[#4A2511]">
                  Ratatouille façon Roha
                </h4>
                <div className="flex gap-1 ml-2">
                  <Leaf className="h-4 w-4 text-green-500" />
                  <WheatOff className="h-4 w-4 text-yellow-500" />
                  <MilkOff className="h-4 w-4 text-blue-500" />
                </div>
              </div>
              <p className="text-sm text-[#4A2511]">
                Légumes du soleil mijotés avec des épices éthiopiennes, servis
                avec du couscous
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <h4 className="font-semibold uppercase text-[#4A2511]">
                  Panna cotta au miel et noix
                </h4>
                <div className="flex gap-1 ml-2">
                  <WheatOff className="h-4 w-4 text-yellow-500" />
                </div>
              </div>
              <p className="text-sm text-[#4A2511]">
                Crème onctueuse au miel d'Éthiopie, garnie de noix caramélisées
              </p>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <h4 className="font-semibold uppercase text-[#4A2511]">
                  Gnocchi à la sauce Doro Wat
                </h4>
                <div className="flex gap-1 ml-2"></div>
              </div>
              <p className="text-sm text-[#4A2511]">
                Gnocchi de pomme de terre servis avec une sauce Doro Wat
                légèrement épicée
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <h4 className="font-semibold uppercase text-[#4A2511]">
                  Filet de bœuf au teff
                </h4>
                <div className="flex gap-1 ml-2"></div>
              </div>
              <p className="text-sm text-[#4A2511]">
                Filet de bœuf grillé enrobé de teff croustillant, sauce au vin
                rouge et épices
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <h4 className="font-semibold uppercase text-[#4A2511]">
                  Crème brûlée au café éthiopien
                </h4>
                <div className="flex gap-1 ml-2">
                  <WheatOff className="h-4 w-4 text-yellow-500" />
                </div>
              </div>
              <p className="text-sm text-[#4A2511]">
                Crème infusée au café éthiopien, caramélisée à la cassonade
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 text-sm text-[#4A2511] mt-8">
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-green-500" />
            <span>Végétalien</span>
          </div>
          <div className="flex items-center gap-2">
            <WheatOff className="h-4 w-4 text-yellow-500" />
            <span>Sans Gluten</span>
          </div>
          <div className="flex items-center gap-2">
            <MilkOff className="h-4 w-4 text-blue-500" />
            <span>Sans Lactose</span>
          </div>
        </div>
      </div>
    </section>
  );
}
