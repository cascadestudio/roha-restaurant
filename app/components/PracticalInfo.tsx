import Image from "next/image";

export default function PracticalInfo() {
  return (
    <section id="info" className="py-16 bg-[#FDF6E9]">
      <div className="max-w-7xl mx-auto px-4 pt-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-[#4A2511]">
            <h3 className="text-sm uppercase font-semibold mb-2">Adresse</h3>
            <p>5 Rue Pierre Dupré, 13008 Marseille</p>
            <h3 className="text-sm uppercase font-semibold mt-6 mb-2">
              Téléphone
            </h3>
            <p>09 56 38 58 40</p>
            <h3 className="text-sm uppercase font-semibold mt-6 mb-2">
              Horaires d'ouverture
            </h3>
            <ul>
              <li>Lundi - Vendredi : 12h00 - 14h30, 19h00 - 22h30</li>
              <li>Samedi - Dimanche : 12h00 - 23h00</li>
            </ul>
            <div className="flex justify-center sm:block">
              <button className="uppercase mt-8 bg-[#FDF6E9] text-[#4A2511] border border-[#4A2511] font-bold py-2 px-4 rounded-md transition duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]">
                Réserver
              </button>
            </div>
          </div>
          <div className="relative w-full h-[300px] md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.8974894538237!2d5.382796475870835!3d43.28178817112211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0ad108b2055%3A0x666df5035ddfb4b!2s5%20Rue%20Pierre%20Dupr%C3%A9%2C%2013008%20Marseille!5e0!3m2!1sfr!2sfr!4v1736438337203!5m2!1sfr!2sfr"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: "none" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
