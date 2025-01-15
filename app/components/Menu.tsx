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
          Découvrez notre sélection de plats typiques d'Éthiopie, mais aussi
          d'Italie et de France pour une expérience culinaire unique.
        </p>

        {/* Row 1: Images with titles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="uppercase">
            <div className="relative aspect-square mb-2 sm:mb-4">
              <Image
                src="/plats.jpg"
                alt="Assortiments de plats"
                fill
                className="rounded-md object-cover border border-[#4A2511]"
              />
            </div>
            <h4 className="text-sm text-[#4A2511]">
              Assortiment de plats éthiopiens
            </h4>
          </div>
          <div className="uppercase">
            <div className="relative aspect-square mb-2 sm:mb-4">
              <Image
                src="/dessert.jpg"
                alt="Tarte tatin"
                fill
                className="rounded-md object-cover border border-[#4A2511]"
              />
            </div>
            <h4 className="text-sm text-[#4A2511]">Tarte tatin</h4>
          </div>
          <div className="uppercase">
            <div className="relative aspect-square mb-2 sm:mb-4">
              <Image
                src="/cafe.jpg"
                alt="Café éthiopien torréfié sur place"
                fill
                className="rounded-md object-cover border border-[#4A2511]"
              />
            </div>
            <h4 className="text-sm text-[#4A2511]">
              Café éthiopien torréfié sur place
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
                  Samboussa légumes
                </h4>
                <div className="flex gap-1 mx-2">
                  <Leaf className="h-4 w-4 text-green-500" />
                </div>
                <h4 className="font-semibold uppercase text-[#4A2511]">
                  ou viande
                </h4>
              </div>
              <p className="text-sm text-[#4A2511]">
                Farine de blé, lentilles vertes, oignon, ail, persil ou viande
                de bœuf
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <h4 className="font-semibold uppercase text-[#4A2511]">
                  Kategna
                </h4>
                <div className="flex gap-1 ml-2">
                  <WheatOff className="h-4 w-4 text-yellow-500" />
                </div>
              </div>
              <p className="text-sm text-[#4A2511]">
                Galettes de teff, beurre clarifié, piment d'espelette <br />{" "}
                (sans gluten sauf traces éventuelles)
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <h4 className="font-semibold uppercase text-[#4A2511]">
                  Lasagne bolognaise
                </h4>
                <div className="flex gap-1 ml-2"></div>
              </div>
              <p className="text-sm text-[#4A2511]">
                Boeuf, oignon, tomate, sauce béchamel, farine de blé,
                mozzarella, parmesan <br />
                (option sans gluten ou sans lactose)
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <h4 className="font-semibold uppercase text-[#4A2511]">
                  Beye ayenetu
                </h4>
                <div className="flex gap-1 ml-2">
                  <Leaf className="h-4 w-4 text-green-500" />
                  <WheatOff className="h-4 w-4 text-yellow-500" />
                  <MilkOff className="h-4 w-4 text-blue-500" />
                </div>
              </div>
              <p className="text-sm text-[#4A2511]">
                Galette de teff, lentilles corail, betterave, chou blanc, petits
                pois cassés, champignon, épinards, oignon, tomate, ail,
                gingembre
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <h4 className="font-semibold uppercase text-[#4A2511]">
                  Flan de citrouille
                </h4>
              </div>
              <p className="text-sm text-[#4A2511]">
                Citrouille, crème liquide, oeuf, parmesan, lait, ail <br />
                (option sans gluten ou sans lactose)
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <h4 className="font-semibold uppercase text-[#4A2511]">
                  Spécial ketfo
                </h4>
                <div className="flex gap-1 ml-2">
                  <WheatOff className="h-4 w-4 text-yellow-500" />
                </div>
              </div>
              <p className="text-sm text-[#4A2511]">
                Galette de teff, tartare de boeuf, beurre clarifié, piment
                d'espelette, cardamome noire, chou kale, fromage
              </p>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <h4 className="font-semibold uppercase text-[#4A2511]">
                  Spris aux fruits exotiques
                </h4>
                <div className="flex gap-1 ml-2"></div>
              </div>
              <p className="text-sm text-[#4A2511]">
                Mélange de jus de papaye, de mangue, d'ananas et d'avocat
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <h4 className="font-semibold uppercase text-[#4A2511]">
                  Tiramisu au café éthiopien
                </h4>
                <div className="flex gap-1 ml-2"></div>
              </div>
              <p className="text-sm text-[#4A2511]">Option sans lactose</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <h4 className="font-semibold uppercase text-[#4A2511]">
                  Café éthiopien
                </h4>
              </div>
              <p className="text-sm text-[#4A2511]">
                Café torréfié sur place, servi de manière traditionnelle
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 text-sm text-[#4A2511] mt-8 md:mt-12">
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
